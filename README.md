# vue 多页面+history路由

> vue 模版, 配置了多个页面(`src/modules`) 和 路由的 `history` 模式. <br/>
> 本地的devserver配置了 `historyApiFallback`, 把 `/boss` rewrite到 `boss.html`; 生产环境中, 服务端需要注意配合配置;

[详情写在sf了](https://segmentfault.com/n/1330000015475464)

## Build Setup

clone项目到本地

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
