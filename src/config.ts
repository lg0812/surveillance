import {environment} from './environments/environment';

export const apiHost = environment.apiHost;
export const mapping = {
  login: `${apiHost}/v1/login`,
  logout: `${apiHost}/v1/logout`,
  // 获取验证码
  validCode: (filename) => `${apiHost}/v1/valid-code/${filename}`,
  //手机验证码
  verifyCode: `${apiHost}/v1/sms/send`,
  forgotPwd: `${apiHost}/v1/user/forgot-pwd`,
  userPageList: `${apiHost}/v1/user/page-list`,
  userPageListUnaudited: `${apiHost}/v1/user/page-list-unaudited`,
  exportUnaudited: `${apiHost}/v1/user/export-unaudited`,
  addDevice: `${apiHost}/v1/device/add`,//添加设备
  queryUnuserDevice: `${apiHost}/v1/device/unusedDeviceList`,//设备管理闲置设备查询
  queryUserDevice: `${apiHost}/v1/device/usedDeviceList`,//设备管理服役设备查询
  queryDeviceSNList:`${apiHost}/v1/device/deviceSNList`,//查询设备SN号
  queryDeviceSN:`${apiHost}/v1/device/findDeviceByDeviceSN`,
  upload: `${apiHost}/v1/upload`,//文件上传
  register: `${apiHost}/v1/user/reg`,//注册
}
