import { program } from 'commander'
import { check } from '../commands/check.js'

// coindex check -h

program
  .command('price')
  .description('Check price of coins')
  .action(check.price)


program.parse(process.argv)