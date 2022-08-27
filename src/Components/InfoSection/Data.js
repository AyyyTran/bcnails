//This is reusable and changing the data file changes the content.
//Use different values to change the look on website w/out remaking component.

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: require('../../Images/svg-7.svg').default,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};
export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: require('../../Images/svg-1.svg').default,
  alt: 'Bike',
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join the Team!',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: require('../../Images/svg-2.svg').default,
  alt: 'Car',
  dark: false,
  primary: true,
  darkText: true,
};
