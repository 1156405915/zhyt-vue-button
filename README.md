# zhyt-vue-button

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 问题记录

```
1, Cannot read properties of null (reading ‘ce‘) 类似这种报错,或者只渲染出组件的名称dom咩有渲染组件内部dom
解决: 大概率是组件的vue版本过高,与项目版本不匹配

2, 使用vite-plugin-dts插件编译生成项目.d.ts
解决: 首先要在tsconfig.app.json(客户端配置)(tsconfig.node.json 是服务端配置)增加 这三项配置
{
  "compilerOptions": {
    "declaration": true, // 表示生成 .d.ts 文件。
    "emitDeclarationOnly": false, // 表示不仅仅生成声明文件（如果只想生成声明文件可以设为 true）。
    "outDir": "dist", // 指定输出目录。
    // ...其他配置
  }
}

然后再vite.config.ts中引用该配置
dts({
  outDir: 'dist',
  include: ['src/'],
  tsconfigPath: './tsconfig.app.json',
}),
这样就可以运行vite build dist目录中会生成.d.ts了
因为: vite-plugin-dts 默认会自动查找 tsconfig，但有时会找错。你可以在 vite.config.ts 的 dts 配置里加上 tsconfigPath 就可以了
3, 当其他项目引入该插件同时想引用其css的时候,要在package.json中exports指定路径标识符(通常.表示包的根路径) , 明确定义该路径的映射规则
解决:
  "exports": {
    ".": {
      "import": "./dist/zhyt-vue-button.es.js",
      "types": "./dist/index.d.ts"
    },
    "./dist/zhyt-vue-button.css": "./dist/zhyt-vue-button.css" // 指定路径映射规则 也可以使用"./dist/style.css": "./dist/zhyt-vue-button.css"
  },
```
