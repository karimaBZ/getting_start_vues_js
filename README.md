# getting_start_vues_js

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### typed Way to declare props 
 props: { 
    msg: String
  } 

### typless way 
  props: ['msg']
### to edit our message data property with this text input
 @click => v-on:click

 ### @ is an alias to /src
 ### Not use arrow function with method
 ###  Route
  {
    path: '/car',
    name: 'car',
    component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue')
  },
### vue lifeCycle === HOOKS
mounted, beforeMount, beforeUpdate, beforeCreate, created, updated, beforeDestroy et destroyed
