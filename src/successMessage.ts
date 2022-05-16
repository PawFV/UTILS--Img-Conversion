import chalk from 'chalk'

export const sendSuccessMessage = (buildPath: string) => {
  return `${chalk.green.bold('Jog completed')!} \n Check results in: ${chalk.blueBright.bold(
    buildPath
  )} \n\n ${chalk.bgWhiteBright.red.bold('A KSA PETES, CALIPSO MANDA')}`
}
