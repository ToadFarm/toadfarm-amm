import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/?_gl=1*swectk*_ga*MjA1MTM1NTA1Ni4xNjE0Mzg0MTY1*_ga_334KNG3DMQ*MTYxNDM4Njk2MC4yLjAuMTYxNDM4Njk2MS4w#/swap?inputCurrency=0x22d67b3f6acdf8c0682f6fb20590e902deea6ba1',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/ETH/0x22D67B3f6aCdf8c0682f6FB20590E902DeEA6BA1',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Breeding Ground',
    icon: 'MoonIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x22D67B3f6aCdf8c0682f6FB20590E902DeEA6BA1',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/ToadFarm",
      },
      // {
      //   label: "Docs",
      //   href: "https://goosedefi.gitbook.io/goose-finance/",
      // },
      // {
      //   label: "Blog",
      //   href: "https://goosefinance.medium.com/",
      // },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
]

export default config
