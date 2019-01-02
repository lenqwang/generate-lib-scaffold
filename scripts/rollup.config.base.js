import alias from 'rollup-plugin-alias'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import config from './config'

const { entry, version } = config

export default {
	input: `src/${ entry }.js`,
	plugins: [
    alias({
      resolve: ['.js']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      // '__VERSION__': version
    }),
		resolve(),
		commonjs({
      include: 'node_modules/**'
    }),
    // json(),
    eslint({
      include: ['src/**/*.js']
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
	]
}
