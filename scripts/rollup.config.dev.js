
import baseConfig from './rollup.config.base'
import serve from 'rollup-plugin-serve'
import config from './config'

const { name, output, distPath, port, startPage, isOpen } = config

export default {
  ...baseConfig,
  output: [
    {
      file: `${distPath}/${output}.js`,
      format: 'umd',
      name,
      sourcemap: true
    },
    {
      file: `${distPath}/${output}.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: 'inline'
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    serve({
      port,
      contentBase: [startPage]
    })
  ]
}
