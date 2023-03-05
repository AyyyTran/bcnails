//This is reusable and changing the data file changes the content.
//Use different values to change the look on website w/out remaking component.

export const homeObjOne = {
  id: 'discover',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: true,
  img: require('../../Images/svg-7.svg').default,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};
export const homeObjTwo = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Local Business',
  headLine: 'The BEST Nail Salon in Abbotsford!',
  description:
    'BC Nails Salon has been Abbotsfords favourite nail salon for almost 20 years! We take pride in treating our clients like family. We create a welcoming atsmosphere that clients must return for!',
  buttonLabel: 'Book Now!',
  imgStart: true,
  img: require('../../Images/svg-1.svg').default,
  alt: 'Bench',
  dark: false,
  primary: true,
  darkText: true,
};

export const contactUs = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Treat Yourself Today!',
  headLine: 'Call BC Nails At 604-853-0365!',
  description:
    'Book your appointment over the phone worry free! We will schedule an appointment that works just for you.',
  buttonLabel: 'Call Today!',
  imgStart: false,
  img: require('../../Images/svg-2.svg').default,
  alt: 'Calendar',
  dark: false,
  primary: true,
  darkText: true,
};

export const hours = {
  id: 'hours',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Available at Your Convenience!',
  headLine: 'Easy Consistent Schedule For You!',
  description:
    "At our new location, we're committed to providing flexible hours that work around your schedule. Whether you're an early riser, a night owl, or need a weekend appointment, we've got you covered. Give us a call to learn more about our hours and schedule your next appointment today!",
  buttonLabel: 'Call Today!',
  imgStart: true,
  img: require('../../Images/svg-9.svg').default,
  alt: 'Clock',
  dark: true,
  primary: true,
  darkText: false,
};
