import LoadingComponent from './index.vue'
const goodSwitch = {
  install:function (Vue) {
    Vue.component('goodSwitch',LoadingComponent)
  }
};
// 导出组件
export default goodSwitch