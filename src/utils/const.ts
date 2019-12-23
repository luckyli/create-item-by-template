import vscode from 'vscode'
import packageJson from '../../package.json'
import path from 'path'

const { workspaceFolders } = vscode.workspace
/** 工作区路径 */
export const WORKSPACE_PATH = workspaceFolders ? workspaceFolders[0].uri.fsPath.replace(/\\/g, '/') : undefined
/** 插件设置 */
export const CONFIG_LIST = [
  'globalTemplatePath',
  'workspaceTemplatePath',
  'defaultFolderTemplate',
  'defaultFileTemplate',
]
/** 插件名称 */
export const EXT_NAME = packageJson.name
/** 插件本体路径 */
export const EXT_PATH = path.join(__dirname, '../')
/** 插件私有配置文件路径 */
export const LOCAL_CONFIG_PATH = path.join(EXT_PATH, 'local.config.json')
/** 默认缩进单位 */
export const BASE_INDENTATION = ' '
/** 默认缩进宽度 */
export const BASE_INDENTATION_COUNT = 2
