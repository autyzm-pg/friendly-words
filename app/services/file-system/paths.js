import {ExternalStorageDirectoryPath} from "react-native-fs"

const path = ExternalStorageDirectoryPath;
const dbName = "db.json";
const assetsDirectory = "assets";

export const appDirectory = "friendly-words-app";
export const appDataPath = `${path}/${appDirectory}`
export const configsDatabase = `${appDataPath}/${dbName}`
export const uploadAssetsDirectory = `${appDataPath}/${assetsDirectory}`