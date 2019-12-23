import { execSync } from 'child_process'

import { WORKSPACE_PATH } from './const'
/**
 * 同步执行命令
 * @param {String} bash
 * @param {String} msg
 */
export function syncExec(paramsSrc: { bash: string; msg?: string; inputPath?: string }) {
  let params = paramsSrc
  if (typeof params === 'string') params = { bash: params }

  const { bash, msg, inputPath = WORKSPACE_PATH } = params

  try {
    const res = execSync(bash, {
      cwd: inputPath,
    }).toString()
    if (msg) console.log(`=> ${msg} 成功`)
    return res
  } catch (ex) {
    if (msg) console.log(`=> ${msg} 失败\n`, ex)
    return ex.toString()
  }
}
