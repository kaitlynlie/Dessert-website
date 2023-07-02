import images from './images';

const macarons = [
  {
    title: 'Cookies & Cream',
    price: '$3',
    tags: 'Vegan Options',
  },
  {
    title: 'Jasmine Milk Tea',
    price: '$3',
    tags: 'Gluten Free | Vegan Options',
  },
  {
    title: 'Ube',
    price: '$3',
    tags: 'Gluten Free | Vegan Options',
  },
  {
    title: 'Strawberry Cheesecake',
    price: '$3',
    tags: 'Vegan Options',
  },
  {
    title: 'Matcha Oreo',
    price: '$3',
    tags: 'Vegan Options',
  },
];

const cupcakes = [
  {
    title: 'Earl Grey Tres Leches',
    price: '$6',
    tags: 'Nut Free',
  },
  {
    title: "Creme Brulee",
    price: '$5.50',
    tags: 'Gluten Free, Nut Free',
  },
  {
    title: 'Red Velvet',
    price: '$5.50',
    tags: 'Nut Free',
  },
  {
    title: 'Tiramisu',
    price: '$5',
    tags: 'Nut Free',
  },
  {
    title: 'Oreo Crunch',
    price: '$6',
    tags: 'Nut Free',
  },
];

const awards = [
  {    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'New rising star from restaurants in Purple County',
  },
  {
    imgUrl: images.award02,
    title: 'Best Bakery',
    subtitle: 'Ranked bakeries in Purple County',
  },

];

export default { macarons, cupcakes, awards };
