import { program } from 'commander'

// coindex check -h

program
  .command('price')
  .description('Check price of coins')
  .action(() => {
    console.log('Hello from check.price()')
  })


program.parse(process.argv)