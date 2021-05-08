import path from 'path'
import rollupTypescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { eslint } from 'rollup-plugin-eslint'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import pkg from './package.json'

const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/lib'),
}
// 生成文件
const LIBRARY_NAME = 'index'
// 生成 umd 的全局名称
const WINDOW_LIBRARY_NAME = 'Index'

// rollup 配置项
const rollupConfig = {
  input: paths.input,
  output: [
    // 输出 commonjs 规范的代码
    {
      file: path.join(paths.output, `${LIBRARY_NAME}.min.js`),
      format: 'cjs',
      name: WINDOW_LIBRARY_NAME
    },
    // 输出 es 规范的代码
    {
      file: path.join(paths.output, `${LIBRARY_NAME}.esm.js`),
      format: 'es',
      name: WINDOW_LIBRARY_NAME
    },
    // 输出 umd 规范的代码 
    {
      file: path.join(paths.output, `${LIBRARY_NAME}.umd.js`),
      format: 'umd',
      name: WINDOW_LIBRARY_NAME
    }
  ],
  // external: ['lodash'], // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  // plugins 需要注意引用顺序
  plugins: [
    // 验证导入的文件
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'lib/**', '*.js']
    }),

    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),

    // 配合 commnjs 解析第三方模块
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    rollupTypescript(),
    babel({
      runtimeHelpers: true,
      // 只转换源代码，不运行外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ]
    }),
  ]
}

export default rollupConfig