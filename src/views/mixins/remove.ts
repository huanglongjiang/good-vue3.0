import Component, { mixins } from 'vue-class-component'
import service from '@/service/index'
import list from './list'     //列表
// 该处需先声明
declare module 'vue/types/vue' {
  interface Vue {
    list
  }
}

@Component
export default class Index extends mixins( list) {
	google:string= ''
  public remove(id) {
    const params={
      google: this.google,
      id: id,
      operating: "delete",
    }
    service.api(params).then(res =>{
      this.dataList()
    })
  }

  public switchs(item) {
    const params={
      google: this.google,
      id: item.id,
      operating: "status",
      status: item.status==1?0:1,
    }
    service.api(params).then(res =>{
      console.log(666)
      this.dataList()
    })
  }
}