# arco-cli@next

这是一个 `arco-cli@2.x` 的预览项目。目前仅提供了本地开发时的能力预览，后续随着功能迭代将持续更新此 Demo。

## 快速开始

1. 克隆此项目后，使用 `npm install` 或者 `yarn` 安装依赖。(`pnpm` 环境下，依赖路径解析目前存在问题，暂不可用)
2. `yarn start` 本地运行工作区。

## 配置入口

`arco.workspace.jsonc` 是工作区配置文件，这里可以配置当前工作区的组件列表，以及针对组件的不同配置。

```json
{
  "arco.aspect/workspace": {
    "components": [
      {
        "name": "UserSelect",
        "rootDir": "packages/user-select/src",
        "entries": {
          "main": "index.ts",
          "style": "style/index.less",
          "jsdoc": "interface.ts",
          "preview": "__docs__/index.mdx"
        }
      }
    ]
  }
}
```

组件描述部分，各个字段的含义如下：

* `name`: 组件名，用于在工作区和物料平台中展示；
* `rootDir`: 组件的入口路径，不同于 NPM 包根路径；
* `entries`: 组件各主要文件对于 `rootDir` 的相对路径；
  * `main`: 组件主入口；
  * `style`: 组件样式主入口；
  * `jsdoc`: 组件 API 文档解析的入口；
  * `preview`: 组件预览的入口；

**关于单包组件和组件库（单包多组件）的说明：**

我们调整了物料平台中的物料与 NPM 包的映射关系，物料与 NPM 包之间不再存在强制的一一映射关系，而是以 `{npm-package-name}/ComponentName` 的形式生成唯一的组件 ID。如此，组件库将在物料平台上对应多个物料。

以此 Demo 为例，`packages` 中存在两个 NPM 包 —— `user-select` 和 `my-library`，它们分别是单包组件和组件库。通过 `arco.workspace.json` 中配置，可以指定精确的物料映射关系，发布至物料平台后，这两个 NPM 包将对应三个物料：

* `user-select/UserSelect`
* `my-library/Button`
* `my-library/Tag`

## 本地调试

运行 `yarn start` 命令。将在浏览器启动下边的页面用于本地开发：

![](./assets/workspace.png)

## 构建

运行 `yarn build` 命令。构建过程中主要做了下边几件事：

1. 构建 ESM 产物；
2. 构建 CommonJS 产物；
3. 为每一个组件打包预览文件，此预览文件将在物料平台物料预览时被渲染；

## 测试

运行 `yarn test` 命令。
