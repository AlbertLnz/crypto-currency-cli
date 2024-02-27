import { program } from 'commander'

// coindex key -h

program
  .command('set')
  .description('Set API key - Get at https://coinmarketcap.com/api/')
  .action(() => {
    console.log('Hello from set command')
  })

  // -> commands:
  //     - coindex key set

program
  .command('show')
  .description('Show an API Key')
  .action(() => {
    console.log('Hello from set command')
  })

  // -> commands:
  //     - coindex key show

program
  .command('remove')
  .description('Remove an API Key')
  .action(() => {
    console.log('Hello from set command')
  })

  // -> commands:
  //     - coindex key remove


program.parse(process.argv)
