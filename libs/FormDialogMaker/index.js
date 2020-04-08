import ElementMaker from '../ElementMaker'
import FormMaker from '../FormMaker'
import { getAttrObject } from '../ElementMaker/util'

export default {
    name: 'FormDialogMaker',
    components: {
        ElementMaker,
        FormMaker
    },
    props: {
        api: {
            type: Object,
            required: true
        },
        dialog: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
    },
    methods: {
        submitData(params) {
            if (this.api && this.api.submit) {
                this.api.submit(params).then(data => {
                    this.$set(this.dialog, 'visible', false)
                    this.$notify({ title: '成功'})
                })
            }
        }
    },

    render(h) {
        const { dialog, form, ...reset } = this;
        const attrObject = getAttrObject({}, dialog)
        attrObject.on['update:visible'] = val => this.$set(dialog, 'visible', val) 
        return (
            <el-dialog {...attrObject} >
                <FormMaker
                    config={{ ...form, ...{ tag: 'el-form' } }}
                    onChange={v => {
                        this.$set(form, 'modelValue', v)
                    }}
                    onSubmit={v => {
                        this.submitData(v)
                    }}
                />
            </el-dialog>
        )
    }
}
