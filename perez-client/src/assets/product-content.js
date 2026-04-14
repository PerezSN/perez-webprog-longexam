import c_dessert from './img/c_dessert.jpg';
import drg from './img/drg.jpg';
import keyboard from './img/keyboard.jpg';
import mouse from './img/mouse.jpg';
import pins from './img/pin.jpg';
import dualshock from './img/dualshock.jpg';
import t1 from './img/t1uni.jpg';
import rgbpad from './img/rgbpad.jpg';


const products = [
  {
    name: 'mechanical-gaming-keyboard',
    title: 'RGB Mechanical Keyboard',
    category: 'Peripherals',
    price: 'PHP 2,499',
    stock: 'In stock',
    image: keyboard,
    content: [
      'Ultra-responsive mechanical switches for lightning-fast keystrokes and tactile feedback.',
      'Customizable per-key RGB backlighting with 16.8 million color options via the software.',
      'Aircraft-grade aluminum frame with a detachable magnetic wrist rest for long sessions.',
    ],
  },
  {
    name: 'crimon-dessert',
    title: 'Crimson Dessert',
    category: 'Game',
    price: 'PHP 899',
    stock: 'In stock',
    image: c_dessert,
    content: [
      'Crimson Desert is an upcoming open-world action RPG set in a vast, war-torn fantasy continent filled with dynamic weather, diverse regions, and political conflict.',
      'Players will explore the world on horseback, engage in visceral combat, and uncover the mysteries of the desert while navigating the complex relationships between factions and characters.',
      'The game features a rich narrative, stunning visuals, and a blend of single-player and multiplayer elements, promising an immersive experience for fans of the genre.',
    ],
  },
  {
    name: 'deep-rock-dwarven',
    title: 'Deep Rock Galactic',
    category: 'Game',
    price: 'PHP 450',
    stock: 'Low stock',
    image: drg,
    content: [
      'Deep Rock Galactic is a cooperative first-person shooter where players take on the role of space dwarves mining precious resources from dangerous, procedurally generated caves on an alien planet.',
      'The game emphasizes teamwork, with players choosing from different classes (Driller, Engineer, Gunner, Scout) to navigate the caves, fight off hostile creatures, and complete various objectives.',
      'With its unique blend of action, exploration, and humor, Deep Rock Galactic offers a thrilling and replayable experience for fans of cooperative multiplayer games.',
    ],
  },
  {
    name: 'T1-uniform',
    title: 'T1 Uniform',
    category: 'Apparel',
    price: 'PHP 1,599',
    stock: 'In stock',
    image: t1,
    content: [
      'Official T1 esports team jersey made from breathable, moisture-wicking fabric for all-day comfort.',
      'Features the iconic T1 logo and team colors in a sleek, modern design that stands out at events or casual wear.',
      'Available in multiple sizes with a relaxed fit, perfect for gaming sessions or showing support for your favorite team.',
    ],
  },
  {
    name: 'RGB-mouse-pad',
    title: 'RGB Mouse Pad',
    category: 'Accessory',
    price: 'PHP 1,899',
    stock: 'Preorder',
    image: rgbpad,
    content: [
      'Large extended mouse pad with customizable RGB lighting around the edges, compatible with popular software for syncing with your gaming setup.',
      'Made from high-quality, smooth fabric surface for precise mouse tracking and a non-slip rubber base to keep it firmly in place during intense gaming sessions.',
      'Features multiple lighting zones and effects, allowing you to create a personalized ambiance that enhances your gaming experience.',
    ],
  },
  {
    name: 'dual-controller',
    title: 'Dual Controller',
    category: 'Peripherals',
    price: 'PHP 1,100',
    stock: 'In stock',
    image: dualshock,
    content: [
      'A versatile gaming controller designed for both PC and console use, featuring a comfortable ergonomic design and responsive buttons.',
      'Includes dual analog sticks, a D-pad, and customizable buttons for a personalized gaming experience across various genres.',
      'Compatible with major platforms and supports wired and wireless connectivity options for maximum flexibility.',
    ],
  },
  {
    name: 'gaming-pins',
    title: 'Gaming Pins',
    category: 'Collectibles',
    price: 'PHP 350',
    stock: 'In stock',
    image: pins,
    content: [
      'A set of collectible enamel pins featuring iconic gaming symbols, characters, and logos from popular franchises.',
      'Each pin is crafted with high-quality materials and vibrant colors, making them perfect for accessorizing bags, jackets, or display cases.',
      'A must-have for gaming enthusiasts and collectors, these pins celebrate the culture and nostalgia of video games.',
    ],
  },
  {
    name: 'logitech-mouse',
    title: 'Logitech Mouse',
    category: 'Peripherals',
    price: 'PHP 4,999',
    stock: 'In stock',
    image: mouse,
    content: [
      'Logitech G502 HERO High Performance Gaming Mouse with customizable RGB lighting and 11 programmable buttons for a personalized gaming experience.',
      'Features a HERO 25K sensor for precision tracking and adjustable DPI settings up to 25,600 for ultimate accuracy.',
      'Includes customizable weights and a comfortable ergonomic design, making it ideal for long gaming sessions.',
    ],
  },
];

export default products;
