import request from '@/utils/request'

// 测试接口
export const getListAPI = () => {
  return request({
    url: 'http://geek.itheima.net/v1_0/channels'
  })
}
