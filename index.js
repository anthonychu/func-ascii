#!/usr/bin/env node
const chalk = require('chalk')
const child_process = require('child_process')

let printed = false
function printLogo() {
  if (printed) return
  
  console.log()
  console.log(chalk.yellowBright('                  %%%') + chalk.yellow('%%%'))
  console.log(chalk.yellowBright('                 %%%') + chalk.yellow('%%%'))
  console.log(chalk.cyan('            @') + chalk.yellowBright('   %%%') + chalk.yellow('%%%') + chalk.cyan('    @'))
  console.log(chalk.cyan('          @@') + chalk.yellowBright('   %%%') + chalk.yellow('%%%') + chalk.cyan('      @@'))
  console.log(chalk.cyan('       @@@') + chalk.yellowBright('    %%%') + chalk.yellow('%%%%%%%%') + chalk.cyan('    @@@'))
  console.log(chalk.cyan('     @@') + chalk.yellowBright('      %%%%%%%') + chalk.yellow('%%%') + chalk.cyan('        @@'))
  console.log(chalk.cyan('       @@') + chalk.yellowBright('         %') + chalk.yellow('%%%') + chalk.cyan('       @@'))
  console.log(chalk.cyan('         @@') + chalk.yellowBright('      %') + chalk.yellow('%%') + chalk.cyan('       @@'))
  console.log(chalk.cyan('           @@') + chalk.yellowBright('    %') + chalk.yellow('%') + chalk.cyan('      @@'))
  console.log(chalk.yellowBright('                %') + chalk.yellow('%'))
  console.log(chalk.yellow('                %'))
  console.log()

  printed = true
}

const args = process.argv.slice(2)
const stdio = [process.stdin, process.stdout, process.stderr, 'pipe']

if (!args.length || args[0] !== 'help') {
  printLogo()
}

if (args.length) {
  try {
    child_process.spawn("func", args, { stdio })
  } catch {
    try {
      child_process.spawn("func.cmd", args, { stdio })
    } catch {
      printLogo()
    }
  }
}
