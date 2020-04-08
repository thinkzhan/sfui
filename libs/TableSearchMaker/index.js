import { Loading } from 'element-ui';
import Render from '../ElementMaker'
import FormMaker from '../FormMaker'
export default {
    name: 'TableSearchMaker',
    components: {
        Render,
        FormMaker
    },
    props: {
        api: {
            type: Object,
            default() {
                return {
                    search: null
                }
            }
        },
        search: {
            type: Object
        },
        table: {
            type: Object,
            required: true
        },
        page: {
            type: Object | Boolean,
            default() {
                return {
                    current: 1,
                    size: 10,
                    total: 1
                }
            }
        }
    },
    data() {
        return {
            pageInfo: {
                current: this.page.current || 1,
                size: this.page.size || 10,
                total: this.page.total || 1
            }
        }
    },
    methods: {
        searchData() {
            window.loading = Loading.service({});
            const { pageInfo, api, search, page} = this;
            const params = {
                ...(page === false ? null : {
                    page: pageInfo.current,
                    size: pageInfo.size
                }),
                ...(this.search ? search.modelValue : null)
            };
            if (api && api.search) {
                this.api.search(params).then(data => {
                    this.$set(this.table, 'data', data.list)
                    pageInfo.total = data.total;
                    this.$emit('searched', params)
                }).finally(()=> {
                    window.loading.close();
                })
            }
        }
    },
    created() {
        this.searchData()
    },
    render(h) {
        const { search, table, page, api, ...reset } = this
        const __page = this.pageInfo;
        return (
            <div style="overflow:hidden">
                {
                    search ?
                        <FormMaker
                            config={{ ...search, ...{ tag: 'el-form' } }}
                            onChange={v => {
                                this.$set(search, 'modelValue', v)
                            }}
                            onSubmit={v => {
                                __page.current = 1;
                                this.searchData()
                            }}
                        /> : null
                }
                <render config={{ ...table, ...{ tag: 'el-table' } }} />
                {
                    page === false ? null :
                        <el-pagination
                            style={{ float: 'right', marginTop: '20px' }}
                            onSize-change={v => {
                                __page.size = v;
                                this.searchData()
                            }}
                            onCurrent-change={v => {
                                __page.current = v;
                                this.searchData()
                            }}
                            current-page={__page.current}
                            page-size={__page.size}
                            page-sizes={[10, 20, 30, 50]}
                            layout="total,sizes, prev, pager, next, jumper"
                            total={__page.total}
                        />
                }
            </div>
        )
    }
}
