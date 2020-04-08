import { getAttrObject } from './util'
const componentChild = {
    'el-select': {
        options(h, conf, key) {
            const list = []
            conf.options.forEach(item => {
                list.push(<el-option label={item.label} value={item.value} disabled={item.disabled}></el-option>)
            })
            return list
        }
    },
    'el-radio-group': {
        options(h, conf, key) {
            const list = []
            conf.options.forEach(item => {
                if (conf.optionType === 'button') {
                    list.push(<el-radio-button label={item.value}>{item.label}</el-radio-button>)
                } else {
                    list.push(<el-radio label={item.value}>{item.label}</el-radio>)
                }
            })
            return list
        }
    },
    'el-checkbox-group': {
        options(h, conf, key) {
            const list = []
            conf.options.forEach(item => {
                if (conf.optionType === 'button') {
                    list.push(<el-checkbox-button label={item.value}>{item.label}</el-checkbox-button>)
                } else {
                    list.push(<el-checkbox key={item.value} label={item.value}>{item.label}</el-checkbox>)
                }
            })
            return list
        }
    },
    'el-table': {
        options(h, conf, key) {
            return conf.options.reduce((acc, item) => {
                const attrObject = getAttrObject({}, item)
                acc.push(h('el-table-column', { ...attrObject }))
                return acc
            }, [])
        }
    }
}

export default {
    name: 'ElementMaker',
    render(h) {
        const { config } = this
        if (typeof config.vIf !== 'undefined' && ( typeof config.vIf === 'function' ? !config.vIf() : !config.vIf)) {
            return null
        }
        const attrObject = getAttrObject(this, config, config.data)
        const children = []
        const childObjs = componentChild[config.tag]
        if (childObjs) {
            Object.keys(childObjs).forEach(key => {
                const childFunc = childObjs[key]
                if (config.options) {
                    children.push(childFunc(h, config, key))
                }
            })
        }

        return h(config.tag, attrObject, children)
    },
    props: ['config']
}