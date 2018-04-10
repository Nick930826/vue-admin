const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/Login.vue'], resolve),
    },
    {
        path: '/index',
        meta: {
            title: ''
        },
        redirect: '/index/demo1',
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path: 'demo1',
                component: (resolve) => require(['../component/demo1.vue'], resolve),
            },
            {
                path: 'demo2',
                component: (resolve) => require(['../component/demo2.vue'], resolve),
            },
            {
                path: 'demo3',
                component: (resolve) => require(['../component/demo3.vue'], resolve),
            }
        ]
    },
    {
        path: '/promotion',
        meta: {
            title: ''
        },
        redirect: '/promotion/demo4',
        component: (resolve) => require(['./views/Promotion.vue'], resolve),
        children: [
            {
                path: 'demo4',
                component: (resolve) => require(['../component/demo4.vue'], resolve),
            },
            {
                path: 'demo5',
                component: (resolve) => require(['../component/demo5.vue'], resolve),
            },
            {
                path: 'demo6',
                component: (resolve) => require(['../component/demo6.vue'], resolve),
            }
        ]
    },
    {
        path: '/develop',
        meta: {
            title: ''
        },
        redirect: '/develop/demo7',
        component: (resolve) => require(['./views/Develop.vue'], resolve),
        children: [
            {
                path: 'demo7',
                component: (resolve) => require(['../component/demo7.vue'], resolve),
            },
            {
                path: 'demo8',
                component: (resolve) => require(['../component/demo8.vue'], resolve),
            },
            {
                path: 'demo9',
                component: (resolve) => require(['../component/demo9.vue'], resolve),
            }
        ]
    },
    {
        path: '/setting',
        meta: {
            title: ''
        },
        redirect: '/setting/demo10',
        component: (resolve) => require(['./views/Setting.vue'], resolve),
        children: [
            {
                path: 'demo10',
                component: (resolve) => require(['../component/demo10.vue'], resolve),
            },
            {
                path: 'demo11',
                component: (resolve) => require(['../component/demo11.vue'], resolve),
            },
            {
                path: 'demo12',
                component: (resolve) => require(['../component/demo12.vue'], resolve),
            }
        ]
    }
];
export default routers;