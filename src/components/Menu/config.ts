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
    // href: 'https://farmhub.community',
    items: [
      {
        label: 'Farmhub',
        href: 'https://farmhub.community',
        icon: 'FarmhubIcon'
      },
      {
        label: 'Toad.Farm',
        href: 'https://toad.farm',
        icon: 'ToadFarmIcon'
      },
      {
        label: 'Mouse.Farm',
        href: 'https://mouse.farm',
        icon: 'MouseFarmIcon'
      },
      {
        label: 'Snek.Farm',
        href: 'https://snek.farm',
        icon: 'SnekFarmIcon'
      },
      {
        label: 'Eagle.Farm',
        href: 'https://eagle.farm',
        icon: 'EagleFarmIcon'
      },
      {
        label: 'Eagle\'s Nest',
        href: 'https://eaglenest.finance',
        icon: 'EagleNestIcon'
      },
    ]
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.toad.farm/#/swap',
        icon: 'TradeIcon',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.toad.farm/#/pool',
        icon: 'LiquidityIcon',
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
    icon: 'ToadBreeding',
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
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x22D67B3f6aCdf8c0682f6FB20590E902DeEA6BA1',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/farmhubbsc",
        icon: 'GithubIcon', 
      },
      {
        label: "Docs",
        href: "https://docs.farmhub.community/",
        icon: 'BooksIcon',
      },
      // {
      //   label: "Blog",
      //   href: "https://farmhub.medium.com/",
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
