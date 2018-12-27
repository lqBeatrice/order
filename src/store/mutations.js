import * as type from './mutation-types'

export default{
  [type.RECIEVE_USERINFO_0](state,userinfo){
    state.userinfo = userinfo;
  },
  [type.RESET_USERINFO](state){
    state.userinfo = {};
  },
}