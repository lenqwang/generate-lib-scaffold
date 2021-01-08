
/**
 * 返回 hello 开头的字符串
 * @param str - input string
 * @returns 'hello xxx'
 * @example
 * ```ts
 * myFirstFunc('ts') => 'hello ts'
 * ```
 */
declare function myFirstFunc(str: string): string;
export default myFirstFunc;

/**
 * sleep await function
 * @param timeout number default 1e3
 */
export declare function sleep(timeout?: number): Promise<void>;

export { }
