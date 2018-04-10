import 'babel-polyfill';
import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import VueI18n from 'vue-i18n';
import messages from './config/lang';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueI18n);

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

function lang () {
    // 将选择的语言存在localStorage中
    let t = window.localStorage.getItem('language')
    if (t) return t
    // 默认中文
    else return 'cn'
}

const language = lang()

// 自定义 window 的 lang 属性
window.lang = lang()

console.log('language', language);
console.log('messages', messages);

//生成国际化插件实例
const i18n = new VueI18n({
    locale: language, // set locale
    messages, // set locale messages
});

new Vue({
    el: '#app',
    router: router,
    i18n,
    render: h => h(App)
});
