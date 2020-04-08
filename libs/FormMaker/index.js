import render from '../ElementMaker'
import { getAttrObject } from '../ElementMaker/util'

function renderFormBtns(h) {
    const { btns = {} } = this.config;
    if (btns === false) {
        return null;
    }
    const { submit = '提交', reset = true } = btns;
    return <el-form-item>
        {
            submit ? <el-button type="primary" onClick={this.submitForm}>{submit}</el-button> : null
        }
        {
            reset ? <el-button onClick={this.resetForm}>重置</el-button> : null
        }
    </el-form-item>
}
function renderFormItem(h, elementList) {
    return elementList.map(config => {
        return (
            <el-form-item prop={config.model}
                label={config.label || ''}>
                <render config={config} onInput={event => {
                    this.$set(config, 'modelValue', event)
                    this.$set(this[this.config.model], config.model, event)
                    this.$emit('change', this[this.config.model], event)
                }} />
            </el-form-item>
        )
    })
}

export default {
    name: 'FormMaker',
    components: {
        render
    },
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    data() {
        const { config } = this
        if (typeof config.modelValue === 'undefined') {
            config.modelValue = {}
        }
        const data = config.fields.reduce((acc, cur) => {
            this.$set(cur, 'modelValue', config.modelValue[cur.model]);
            return { ...acc, ...{ [cur.model]: cur.modelValue } }
        }, {})
        return {
            [config.model]: data
        }
    },
    methods: {
        resetForm() {
            const resetModel = this.$props.config.modelValue;
            this.config.fields.map(f => {
                console.log(f.tag, resetModel[f.model])
                this.$set(f, 'modelValue', resetModel[f.model])
            })
            Object.keys(resetModel).map(v => {
                this.$set(this[this.config.model], v, resetModel[v])
            })

            this.$refs['form'].clearValidate()
        },
        submitForm() {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    this.$emit('submit', this[this.config.model])
                }
            })
        }
    },
    render(h) {
        const { config } = this
        if (typeof config.vIf !== 'undefined' && (typeof config.vIf === 'function' ? !config.vIf() : !config.vIf)) {
            return null
        }
        const { model, modelValue, rules, fields, btns, ...reset } = config
        const attrObject = { ...getAttrObject(this, reset) };
        attrObject.props.model = this[model]
        return (
            <el-form
                {...attrObject}
                rules={rules}
                ref="form"
            >
                {renderFormItem.call(this, h, fields)}
                {renderFormBtns.call(this, h)}
            </el-form>
        )
    }
}
