# 主要功能

- 装饰器语法

- 一键建表

- 根据 ts 接口参数校验

- 自动生成 api doc


1. 开发环境

`npm run dev`

2. 生产环境

- 修改 load 函数的 env 参数为 build

- `npm run dev` // 生成一些配置文件

- 修改 load 函数的 env 参数为 prod, 配置 apiDocDir 目录为 './public'

- `npm run build`

