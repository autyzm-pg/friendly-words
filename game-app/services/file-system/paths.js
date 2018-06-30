import {ExternalStorageDirectoryPath} from "react-native-fs"
import {readFileAsync} from "./file"

const path = ExternalStorageDirectoryPath;
const appDirectory = "friendly-words-app";
const dbName = "db.json";
const assetsDirectory = "assets";

export const appDataPath = `${path}/${appDirectory}`
export const configsDatabase = `${appDataPath}/${dbName}`
export const uploadAssetsDirectory = `${appDataPath}/${assetsDirectory}`

console.log(appDataPath, configsDatabase);
readFileAsync(configsDatabase).then((results) => console.log("db", results)).catch((err) => console.log(err))