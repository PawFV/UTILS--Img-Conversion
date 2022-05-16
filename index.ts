import Jimp from 'jimp'
import fs from 'fs-extra'
import path from 'path'
import { promptExtensions } from './src/prompt'

const init = async (buildDir = './build-images/', targetDir = './target/') => {
  const { extTarget, extToConvert } = await promptExtensions()
  
  const targetAssets = fs.readdirSync('./target').filter(file => path.extname(file) === extTarget)

  targetAssets.forEach(async asset => {
    const jimp = await Jimp.read(targetDir + asset)
    console.log(path.basename(asset, extToConvert))
    jimp.write(buildDir + asset.replace(extTarget, extToConvert))
  })
}

init()
  .then(res => console.log(res))
  .catch(err => console.log(err))
