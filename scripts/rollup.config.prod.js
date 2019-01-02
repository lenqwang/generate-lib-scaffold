import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import copy from 'rollup-plugin-copy'
import config from './config'
import baseConfig from './rollup.config.base'

const { banner, output, distPath, name } = config

export default [
  {
    ...baseConfig,
    output: [
      {
        file: `${distPath}/${output}.js`,
        format: 'umd',
        name,
        banner,
        sourcemap: false
      },
      {
        file: `${distPath}/${output}.cjs.js`,
        format: 'cjs',
        banner
      },
      {
        file: `${distPath}/${output}.esm.js`,
        format: 'es',
        banner
      },
    ],
    plugins: [
      ...baseConfig.plugins,
      filesize()
    ]
  },
  {
    ...baseConfig,
    output: [
      {
        file: `${distPath}/${output}.min.js`,
        format: 'umd',
        name,
        banner
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify(
        {
          compress: {
            drop_console: true
          }
        },
        minify
      ),
      filesize(),
      copy({
        'dist': 'wehdsdkvdemo/lib'
      })
    ]
  }
]
