# order

> Order App

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Home.vue
   1. 背景填充：
   ```css
    background-image: url('../assets/imgs/blue-bg.jpg'); 
    background-size:100% 100%;
    background-repeat: no-repeat;
    height:100%;
    width:100%;
    position:absolute;
   ```

## Login.vue
### vuex状态持久化
 1. 利用本地存储LocalStorage和SessionStorage自由控制
 - 第一步，首先在state.js中添加window.localStorage来控制某个状态数据，eg:userinfo
 ```js
    //state.js
    const str = window.localStorage;
    export default{
    userinfo:str.getItem('userinfo') ? str.getItem('userinfo'):{},//用户信息
    }
    //这里表示如果缓存中有account的话就从缓存中取，没有则为空。
 ```

 - 第二步，mutation.js中添加修改状态数据的方法，但是mutation中不适合做多的逻辑处理，可以把缓存处理逻辑放在后面的action中实现。（在这里我们首先通过mutation-types统一命名规范，以_0结尾的都是需要缓存到本地存储中的）
 ```js
    import * as type from './mutation-types'

    export default{
    [type.RECIEVE_USERINFO_0](state,userinfo){
        state.userinfo = userinfo;
    },
    }
 ```
 - 第三部，就是action处理缓存逻辑，因为在action中不知道具体的mutation-type，需要传参判断是否需要缓存处理，然后创建setLocalStorage方法将其缓存到本地。
 ```js
    const str = window.localStorage
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
        withCache({commit},{mutationType,data}){
            commit(mutationType,data);
            // 是不是以_0结尾 是的话表示需要缓存
            if (~mutationType.indexOf('_0')) {
            setToStorage(mutationType, data)
            }
        },
    }
 ```
 - 最后，直接在组件中调用实现缓存(这里使用mapAction映射怎么没用)
 ```js
    this.$store.dispatch('withCache',{ mutationType: 'RECIEVE_USERINFO_0', data: userinfo })
 ```
 但是这里有一个问题，就是从LocalStorage中获取到state中没有转成对象的形式，保存的还是字符串的形式
 - 解决：userinfo:str.getItem('userinfo') ? JSON.parse(str.getItem('userinfo')):{}
 2. 利用vuex-persistedstate持久化插件（有问题）