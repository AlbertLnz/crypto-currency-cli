import { program } from 'commander'

program
  .command('set')
  .description('Set API key - Get at https://coinmarketcap.com/api/')
  .action(() => {
    console.log('Hello from set command')
  })

  // -> commands:
  //     - coindex key -h (--help)


program.parse(process.argv)
