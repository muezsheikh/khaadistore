export const banners = [
  {
    image: 'pics/banner1.webp',
    mobImage: 'pics/mobBanner1.webp',
  },
  {
    image: 'pics/banner2.jpg',
    mobImage: 'pics/mobBanner2.jpg',
  },
  {
    image: 'pics/banner3.webp',
    mobImage: 'pics/mobBanner3.webp',
  },
  {
    image: 'pics/banner4.webp',
    mobImage: 'pics/mobBanner4.jpg',
  },
]

export const categories = [
  {
    image: 'pics/c1.jpg',
    link: 'fabrics',
  },
  {
    image: 'pics/c2.webp',
    link: 'ready-to-wear',
  },
  {
    image: 'pics/c3.jpg',
    link: 'ready-to-wear',
  },
  {
    image: 'pics/c1.webp',
    link: 'sale',
  },
]
export const catBanners = [
  {
    image: 'pics/fabCat.webp',
    title: 'Fabrics',
    link: 'fabrics',
  },
  {
    image: 'pics/readyCat.webp',
    title: 'Ready To Wear',
    link: 'ready-to-wear',
  },
  {
    image: 'pics/westernCat.webp',
    title: 'Western',
    link: 'western',
  },
  {
    image: 'pics/saleCat.webp',
    title: 'Sale',
    link: 'sale',
  },
]

export const linksBanners = [
  {
    image: '/pics/sLinkBanner.webp',
    link: 'sale',
  },
  {
    image: '/pics/nLinkBanner.png',
    link: 'new-in',
  },
  {
    image: '/pics/fLinkBanner.png',
    link: 'fabrics',
  },
  {
    image: '/pics/rLinkBanner.webp',
    link: 'ready-to-wear',
  },
  {
    image: '/pics/wLinkBanner.png',
    link: 'western',
  },
  {
    image: '/pics/f3PLinkBanner.webp',
    link: '3-piece-fabrics',
  },
  {
    image: '/pics/f2PLinkBanner.webp',
    link: '2-piece-fabrics',
  },
  {
    image: '/pics/reLinkBanner.webp',
    link: 'eastern-pret',
  },
  {
    image: '/pics/rbLinkBanner.png',
    link: 'bottoms-and-separates',
  },
  {
    image: '/pics/woLinkBanner.png',
    link: 'outerwear',
  },
  {
    image: '/pics/wtLinkBanner.png',
    link: 'tops',
  },
  {
    image: '/pics/wdLinkBanner.png',
    link: 'dresses',
  },
  {
    image: '/pics/wbLinkBanner.png',
    link: 'bottoms',
  },
]
//western
export const ASize = [
  { title: 'XS', shoulder: 29.5, chestBust: 28.5 },
  { title: 'S', shoulder: 30.5, chestBust: 29.5 },
  { title: 'M', shoulder: 31.5, chestBust: 30.5 },
  { title: 'L', shoulder: 32.5, chestBust: 31.5 },
]
//ready to wear
export const NSize = [
  { title: 6, shoulder: 14, chestBust: 19 },
  { title: 8, shoulder: 14.5, chestBust: 20 },
  { title: 10, shoulder: 15, chestBust: 21 },
  { title: 12, shoulder: 15.5, chestBust: 22 },
  { title: 14, shoulder: 16, chestBust: 24 },
  { title: 16, shoulder: 17, chestBust: 26 },
]

export const mobNavLinksArr = [
  {
    tabName: 'fabrics',
    link: 'fabrics',
    linkTitle: 'fabrics',
    nestedLink: [
      {
        link: '3-piece-fabrics',
        linkTitle: '3 piece fabrics',
        links: [
          'Embroidered Full Suit',
          'Printed Full Suit',
          'Khaas Full Suit',
        ],
      },
      {
        link: '2-piece-fabrics',
        linkTitle: '2 piece fabrics',
        links: [
          'Embroidered Top Bottoms',
          'Printed Top Bottoms',
          'Printed Top Dupatta',
          'Embroidered Top Dupatta',
        ],
      },
    ],
  },
  {
    tabName: 'readyToWear',
    link: 'ready-to-wear',
    linkTitle: 'ready to wear',
    nestedLink: [
      {
        link: 'eastern-pret',
        linkTitle: 'eastern pret',
        links: [
          'Embroidered Kurta',
          'Printed Kurta',
          'Basic Kurta',
          'Saree',
          'Yarn Dyed',
        ],
      },
      {
        link: 'bottoms-and-separates',
        linkTitle: 'bottoms and separates',
        links: ['Pants', 'Shalwar', 'Dupatta', 'Stoles'],
      },
    ],
  },
  {
    tabName: 'western',
    link: 'western',
    linkTitle: 'western',
    nestedLink: [
      {
        link: 'outerwear',
        linkTitle: 'outerwear',
        links: ['Sweatshirts'],
      },
      {
        link: 'tops',
        linkTitle: 'Tops',
        links: ['Blouses', 'Shirts', 'T-Shirts', 'Polos', 'Tunic'],
      },
      {
        link: 'dresses',
        linkTitle: 'Dresses',
        links: ['Maxi Dress', 'Jumpsuit'],
      },
      {
        link: 'bottoms',
        linkTitle: 'Bottoms',
        links: ['Pants', 'Tights', 'Jeans', 'Skirt'],
      },
    ],
  },
]
