# generate-lib-scaffold - 生成lib脚手架工具

## How to Use

``` sh
git clone <this repo>
```

## scripts

- `builds`: 用于构建当前包
- `test`: 用于测试当前 `test` 文件夹下的测试用例
- `api`: 用于合并并生成 lib 文件夹下的 `*.d.ts` 文件
- `changelog`: 根据 commit log 自动生成 `CHANGELOG.md` 文件`
- `prepublishOnly`: 当使用 `npm publish` 时会自动触发该 script

## Features

1. 支持 `typescript`
2. 支持 `eslint`
3. 支持使用 `jest` 测试
4. 支持自动合并 `d.ts` 文件
5. 支持自动生成 `changelog`
6. 支持 `commit lint`
7. 支持根据 rollup 配置 `min.js` 做 `terser` 压缩并展示 `gzip` 压缩后大小展示