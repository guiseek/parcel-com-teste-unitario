import chalk from 'chalk'

export function test(mensagem, fn) {
  console.log(chalk.blue(mensagem))
  if (fn) {
    console.log(chalk.green('- deu certo'))
  } else {
    console.log(chalk.red('- falhou'))
  }
}