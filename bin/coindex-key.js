import { program } from 'commander'
import { key } from '../commands/key.js'

// coindex key -h

program
  .command('set')
  .description('Set API key - Get at https://coinmarketcap.com/api/')
  .action(key.set)

  // -> commands:
  //     - coindex key set

program
  .command('show')
  .description('Show an API Key')
  .action(key.show)

  // -> commands:
  //     - coindex key show

program
  .command('remove')
  .description('Remove an API Key')
  .action(key.remove)

  // -> commands:
  //     - coindex key remove


program.parse(process.argv)
