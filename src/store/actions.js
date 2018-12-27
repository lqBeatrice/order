import {
  RECIEVE_USERINFO_0,
} from './mutation-types';

const str = sessionStorage;

// 是否保存到本地逻辑在action里面处理
// 如果有匹配到后面_0则是要保存到本地的
const reg = /(RECIEVE_)(\w+)(_0)/;
function setToStorage(type,data){
  let key = type.match(reg)[2].toLowerCase();
  if(typeof data === 'string') str.setItem(key,data);
  else{
    let formData = JSON.stringify(data);
    str.setItem(key,formData);
  }
}
export default{

  withCache({commit},{data}){
    commit(RECIEVE_USERINFO_0,data);
    // 是不是以_0结尾 是的话表示需要缓存
    // if (~mutationType.indexOf('_0')) {
    //   setToStorage(mutationType, data);
    // }
  },

   recordUser ({commit}, userInfo) {
    commit(RECIEVE_USERINFO_0, userInfo)
  },


}