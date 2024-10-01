import { CardProps, MenuFooter } from "./types";

export const menuFooter: MenuFooter[] = [
  {
    title: 'Product',
    items: [
      'Download',
      'Pricing',
      'Locations',
      'Server',
      'Countries',
      'Blog',
    ]
  },
  {
    title: 'Engage',
    items: [
      'LaslesVPN?',
      'FAQ',
      'Tutorials',
      'About us',
      'Privacy policy',
      'Terms of service',
    ]
  },
  {
    title: 'Earn money',
    items: [
      'Become partner',
      'Affilite',
    ]
  },
]

export const cardProps: CardProps[] = [
  {
    title: "Free",
    items: [
      "Unlimited bandwitch",
      "Encrypted connection",
      "Yes trafic logs",
    ],
    price: 'Free'
  },
  {
    title: "Standard plan",
    items: [
      "Unlimited bandwitch",
      "Encrypted connection",
      "Yes trafic logs",
      "Works on all devices",
      "Connect anyware",
    ],
    price: '9'
  },
  {
    title: "Premium plan",
    items: [
      "Unlimited bandwitch",
      "Encrypted connection",
      "Yes trafic logs",
      "Works on all devices",
      "Connect anyware",
      "Get new features",
    ],
    price: '12'
  },
]
