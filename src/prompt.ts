import { Schema } from 'prompt'
import prompt from 'prompt'

const promptExtensionImageSchema: Schema = {
  properties: {
    extTarget: {
      description: 'Enter your target format extension.',
      default: '.bmp'
    },
    extToConvert: {
      description: 'Enter desired format extension.',
      default: '.png'
    }
  }
}

export const promptExtensions = () =>
  prompt.get<{ extTarget: string; extToConvert: string }>(promptExtensionImageSchema)
