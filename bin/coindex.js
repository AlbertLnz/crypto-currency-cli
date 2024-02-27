#!/usr/bin/env node

import { program } from 'commander'

program
  .version('1.0.0')
  .command('key', 'Manage API Key -- https://coinmarketcap.com')
  .parse(process.argv)

  // -> commands:
  //     - coindex -V (--version)
  //     - coindex -h (--help)

