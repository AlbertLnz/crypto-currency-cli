#!/usr/bin/env node

import { program } from 'commander'

program
  .version('1.0.0')
  .command('key', 'Manage API Key -- https://coinmarketcap.com') // top level command
  .command('check', 'Check Coin Price Info') // top level command
  .parse(process.argv)

  // -> commands:
  //     - coindex -V (--version)
  //     - coindex -h (--help)

