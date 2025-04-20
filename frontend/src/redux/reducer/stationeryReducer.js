import img1 from '../StationeryImage/s1.webp'
import img2 from '../StationeryImage/s2.webp'
import img3 from '../StationeryImage/s3.webp'
import img4 from '../StationeryImage/s4.webp'
import img5 from '../StationeryImage/s5.webp'
import img6 from '../StationeryImage/s6.webp'
import img7 from '../StationeryImage/s7.webp'
import img8 from '../StationeryImage/s8.webp'
import img9 from '../StationeryImage/s9.webp'
import img10 from '../StationeryImage/s10.webp'
import img11 from '../StationeryImage/s11.webp'
import img12 from '../StationeryImage/s12.webp'
import img13 from '../StationeryImage/s13.webp'
import img14 from '../StationeryImage/s14.webp'
import img15 from '../StationeryImage/s15.webp'
import img16 from '../StationeryImage/s16.webp'
import img17 from '../StationeryImage/s17.webp'
import img18 from '../StationeryImage/s18.webp'
import img19 from '../StationeryImage/s19.webp'
import img20 from '../StationeryImage/s20.webp'
import img21 from '../StationeryImage/s21.webp'

const stationeryProducts = [
  {
    id: 0,
    name: "Gel Pen",
    description: "0.4 PILOT",
    product_image: img1,
    price: 8.90,
    qty: 100,
    code: 64
  },
  {
    id: 1,
    name: "Mechanical Pencil",
    description: "0.5 PILOT",
    product_image: img2,
    price: 6.90,
    qty: 100,
    code: 65
  },
  {
    id: 2,
    name: "Lord Pens Pack",
    description: "12 units",
    product_image: img3,
    price: 37.90,
    qty: 100,
    code: 66
  },
  {
    id: 3,
    name: "Tipp-Ex Bottle",
    description: "Pack of 3",
    product_image: img4,
    price: 10.50,
    qty: 100,
    code: 67
  },
  {
    id: 4,
    name: "Mechanical Pencil",
    description: "0.7 MONAMI",
    product_image: img5,
    price: 6.90,
    qty: 100,
    code: 68
  },
  {
    id: 5,
    name: "Thin Markers",
    description: "10 in a pack",
    product_image: img6,
    price: 15.90,
    qty: 100,
    code: 69
  },
  {
    id: 6,
    name: "Sharpener",
    description: "Metal STAEDTLER",
    product_image: img7,
    price: 4.90,
    qty: 100,
    code: 70
  },
  {
    id: 7,
    name: "Ruler Set",
    description: "Transparent ARDA",
    product_image: img8,
    price: 9.90,
    qty: 100,
    code: 71
  },
  {
    id: 8,
    name: "Ruler",
    description: "Metal",
    product_image: img9,
    price: 3.90,
    qty: 100,
    code: 72
  },
  {
    id: 9,
    name: "Highlighter",
    description: "Neon",
    product_image: img10,
    price: 4.00,
    qty: 100,
    code: 73
  },
  {
    id: 10,
    name: "Pencils",
    description: "12 in a pack",
    product_image: img11,
    price: 5.90,
    qty: 100,
    code: 74
  },
  {
    id: 11,
    name: "Highlighter",
    description: "STABILO",
    product_image: img12,
    price: 9.90,
    qty: 100,
    code: 75
  },
  {
    id: 12,
    name: "Fancy Sharpener",
    description: "MAPED",
    product_image: img13,
    price: 8.90,
    qty: 100,
    code: 76
  },
  {
    id: 13,
    name: "Tipp-Ex Bottle",
    description: "TIPP-EX",
    product_image: img14,
    price: 6.90,
    qty: 100,
    code: 77
  },
  {
    id: 14,
    name: "Pilot Pens Set",
    description: "10 pens",
    product_image: img15,
    price: 79.90,
    qty: 100,
    code: 78
  },
  {
    id: 15,
    name: "Stencil",
    description: "Various shapes ARDA",
    product_image: img16,
    price: 14.90,
    qty: 100,
    code: 79
  },
  {
    id: 16,
    name: "Compass",
    description: "Safety MAPED",
    product_image: img17,
    price: 10.50,
    qty: 100,
    code: 80
  },
  {
    id: 17,
    name: "Ergonomic Pencil Holder",
    description: "INHOUSE",
    product_image: img18,
    price: 6.90,
    qty: 100,
    code: 81
  },
  {
    id: 18,
    name: "Lead Refills",
    description: "0.7 PENAC",
    product_image: img19,
    price: 2.90,
    qty: 100,
    code: 82
  },
  {
    id: 19,
    name: "Black Marker",
    description: "MONAMI",
    product_image: img20,
    price: 4.90,
    qty: 100,
    code: 83
  },
  {
    id: 20,
    name: "Glue Stick",
    description: "3 units",
    product_image: img21,
    price: 18.00,
    qty: 3,
    code: 84
  }
];

const stationeryReducer = (state = stationeryProducts, action) => {
  if (action.type === "DECREASE_QTY_PRODUCT") {
    const index = action.i;
    const newArray = [...state];
    newArray[index].qty = action.payload;
    state = newArray;
  }
  if (action.type === "ADD_QTY_PRODUCT") {
    const index = action.i;
    const newArray = [...state];
    newArray[index].qty = action.payload;
    state = newArray;
  }
  return state;
};

export default stationeryReducer;
