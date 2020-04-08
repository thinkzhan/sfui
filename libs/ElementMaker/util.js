const componentDefaultValue = {
    'el-checkbox-group': []
}
// 参考https://github.com/vuejs/vue/blob/v2.6.10/src/platforms/web/server/util.js
export const Attrs =
    `accept,accept-charset,accesskey,action,align,alt,async,autocomplete,
    autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,
    checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,
    name,contenteditable,contextmenu,controls,coords,data,datetime,default,
    defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,
    form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,
    icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,
    manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,
    muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,
    preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,
    scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,
    spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,
    target,title,type,usemap,value,width,wrap`.split(',');
// https://cn.vuejs.org/v2/guide/render-function.html
export function getAttrObject(root, config) {
    const attrObject = {
        class: {},
        attrs: {},
        props: {},
        on: {},
        style: {},
        domProps: {},
        nativeOn: {},
        directives: [],
        slot: null,
        scopedSlots: {},
        key: null,
        ref: null
    }
    // if (data) {
    //     attrObject.props.data = data
    // }
    Object.keys(config).forEach(key => {
        const val = config[key]
        if (key === 'model') {
            vModel(root, attrObject, config.modelValue, config)
        } else if (attrObject[key]) {
            attrObject[key] = { ...attrObject[key], ...val }
        } else if (!Attrs.includes(key)) {
            attrObject.props[key] = val
        } else {
            attrObject.attrs[key] = val
        }
    })
    return attrObject
}
export function vModel(self, attrObject, modelValue, config) {
    if (typeof modelValue === 'undefined') {
        attrObject.props.value = componentDefaultValue[config.tag] || modelValue
    } else {
        attrObject.props.value = modelValue
    }

    attrObject.on.input = val => {
        self.$emit('input', val)
    }
}
