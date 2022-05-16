import axios from 'axios'

const request = axios.create({
  baseURL:'http://ttapi.research.itcast.cn/'//定义请求根路径
})

//请求拦截器

//响应拦截器

export default request//默认导出，没有用对象的方式，那么使用的时候导入后直接可用，不用再 . 什么出来