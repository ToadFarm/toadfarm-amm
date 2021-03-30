import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://toad.farm/',
  },
  {
    label: 'Farmhub',
    icon: 'FarmhubIcon',
    href: 'https://farmhub.community',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.toad.farm/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.toad.farm/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://toad.farm/farms',
  },
  {
    label: 'Breeding Ground',
    icon: 'MoonIcon',
    href: 'https://toad.farm/nests',
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
  {
    label: 'Audit by Solidity',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/audits/Farmhub/',
  },
]

export default config
