/**
 * 返回 hello 开头的字符串
 * @param str - input string
 * @returns 'hello xxx'
 * @example
 * ```ts
 * myFirstFunc('ts') => 'hello ts'
 * ```
 */
export default function myFirstFunc (str: string): string {
  return `hello ${str}`
}

/**
 * sleep await function
 * @param timeout number default 1e3
 */
export function sleep (timeout = 1e3): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}