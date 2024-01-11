export const LINK = {
  'HOME': '',
  'ABOUT': 'about',
  'PRODUCTS': 'products',
  'NEWS': 'news',
  'CONTACT': 'contact',
  'EN': 'en',
  'VN': 'vn',
}

export const opacityVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export const slideVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
