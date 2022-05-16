import Jimp from 'jimp'
import fs from 'fs-extra'
import path from 'path'
import { promptExtensions } from './src/prompt'
import { sendSuccessMessage } from './src/successMessage';


const init = async (buildDir = './build-images/', targetDir = './target/') => {
  const { extTarget, extToConvert } = await promptExtensions()

  const targetAssets = fs.readdirSync('./target').filter(file => path.extname(file) === extTarget)

  targetAssets.forEach(async asset => {
    const jimp = await Jimp.read(targetDir + asset)
    jimp.write(buildDir + asset.replace(extTarget, extToConvert))
  })

  return sendSuccessMessage(path.resolve(buildDir));
}

init().then(console.log).catch(console.log)
