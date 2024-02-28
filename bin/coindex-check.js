import { program } from 'commander'
import { check } from '../commands/check.js'

// coindex check -h

program
  .command('price')
  .description('Check price of coins')
  .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP') // (option <param>, description, default value)
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => {
    check.price(cmd)
  })


program.parse(process.argv)