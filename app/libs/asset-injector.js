import {copyFileAssets, exists, mkdir, readDirAssets, unlink} from "react-native-fs"

const copyDir = async (assetPath, destPath) => {
    if (await exists(destPath)) {
        await unlink(destPath)
    }
    await mkdir(destPath)

    const copiedDir = await readDirAssets(assetPath);

    const internalDirsCopy = Promise.all(
        copiedDir
            .filter(file => file.isDirectory())
            .map(dir => copyDir(dir.path, `${destPath}/${dir.name}`))
    )

    const internalFilesCopy = Promise.all(
        copiedDir
            .filter(file => file.isFile())
            .map(file => copyFileAssets(file.path, `${destPath}/${file.name}`))
    )

    return Promise.all([internalDirsCopy, internalFilesCopy])
}

export const injectAsset = async (assetPath, destPath) => {
    console.log("Injecting an asset", assetPath, destPath)

    const assetsDir = await readDirAssets("")
    const assetStat = assetsDir.find(stat => stat.path === assetPath)

    if (!assetStat) {
        console.error(`Could not find '${assetPath}' in Android's assets folder`)
        return;
    }

    if (assetStat.isFile()) {
        await copyFileAssets(assetPath, destPath)
    }
    else if (assetStat.isDirectory()) {
        await copyDir(assetPath, destPath)
    }

    console.log("Finished injecting asset", assetPath, destPath)
}

export const injectIfDoesntExist = (assetPath, destPath) => exists(destPath)
    .then(isExisting => isExisting ? true : injectAsset(assetPath, destPath));