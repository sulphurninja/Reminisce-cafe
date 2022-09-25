import images from './images';

const wines = [
  {
    title: 'Coffee',
    price: 'Rs.49',
    tags: 'Hot | Black | Cold | Peach iced Tea | Lemon Iced Tea',
  },
  {
    title: 'Mocktails',
    price: 'Rs.80',
    tags: 'Mojito | Fresh Lime Soda | Blue Curacao |Strawberry Lime | Bubblegum',
  },
  {
    title: 'Shakes',
    price: 'Rs.80',
    tags: 'Oreo Shake | Kitkat Shake | Chocolate Shake',
  },
];

const cocktails = [
  {
    title: 'Fries',
    price: 'Rs.99-199',
    tags: 'Salty Fries | Salty Cheese Fries | Peri peri Fries |Peri peri Cheese Fries',
  },
  {
    title: 'Burger',
    price: 'Rs.69-89',
    tags: 'Veg Burger | Veg Cheese Burger |Chicken Burger |Chicken Cheese Burger',
  },
  {
    title: 'Maggi',
    price: 'Rs.89-99',
    tags: 'Plain | Cheese | Cheese Chilli',
  },
  {
    title: 'Pasta',
    price: 'Rs.69-89',
    tags: 'Red Sauce | White Sauce',
  },
  {
    title: 'Momos',
    price: 'Rs.99',
    tags: 'Steamed | Peri Peri | Tandoor',
  },

];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
