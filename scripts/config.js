import { name, version, author, license } from '../package.json'

export default {
  port: 8080,
  entry: 'index',
  distPath: 'dist',
  output: name,
  name: 'Com',
  startPage: '',
  banner:
  `${'/*!\n  * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the ${license} License.\n` +
  ` */`
}
