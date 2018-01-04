

const ExampleComponent = resolve => {
    require.ensure(['./components/ExampleComponent.vue'], () => {
        resolve(require('./components/ExampleComponent.vue'))
    })
};

export let routes = [
    { path: '/admin/', component: ExampleComponent, name:'home',
        meta: {
            breadcrumbs: [{name:'Home', path:'/admin/'}]
        },
        children: [

        ]
    },
    { path: '/admin/test', component: ExampleComponent, name:'test',
        meta: {
            breadcrumbs: [{name:'Home',path:'/admin/'}, {name:'Test',path:'/admin/test'}]
        },
        children: [

        ]
    },
];


