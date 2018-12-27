export default{
    getUserInfo(state){
      let userinfo = state.userinfo;
      if(typeof userinfo === 'string' && !!userinfo) return JSON.parse(userinfo);
      else return userinfo;
    }
}