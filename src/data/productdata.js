import uuid from "react-uuid";
import faker from "faker";

// faker.seed(123);
// const data = [...Array(25)].map((item) => ({
//   id: faker.random.uuid(),
//   name: faker.commerce.productName(),
//   image: faker.random.image(),
//   price: faker.commerce.price(),
// }));

export const productList = [
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-manchester-united-home-jersey-2020-21-online-in-india-1-1.webp",
    name: "Man United",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "manutd",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/Buy-FC-Barcelona-Home-Jersey-2020-21-online-in-India-1.webp",
    name: "Barcelona",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "barselona",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-juventus-home-jersey-2020-21-online-in-india-1-1.webp",
    name: "Juventus",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "outofstock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "juventus",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-arsenal-home-jersey-online-in-india-1-1.webp",
    name: "Arsenal",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "arsenal",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-manchester-home-away-jersey-2020-21-online-in-india-1.jpg",
    name: "Man United",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "manutd",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-chelsea-home-jersey-2020-21-online-in-india-1.jpg",
    name: "Chelsea",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "chelsea",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-manchester-city-home-jersey-2020-21-online-in-india-1.webp",
    name: "Man City",
    price: faker.random.arrayElement([699, 799, 1099, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "mancity",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-ac-milan-home-jersey-2020-21-online-in-india-1.webp",
    name: "AC Milan",
    price: faker.random.arrayElement([699, 799, 1099, 1599, 2099]),
    quantity: 0,
    stock: "outofstock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "acmilan",
  },
  {
    id: uuid(),
    image: "https://footballmonk.in/wp-content/uploads/2020/10/third-kit-2.jpg",
    name: "Arsenal",
    price: faker.random.arrayElement([699, 799, 1099, 1599, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "arsenal",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-borussia-dortmund-home-jersey-online-in-india-1.webp",
    name: "Dortmund",
    price: faker.random.arrayElement([699, 799, 1099, 1599, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "dortmund",
  },
  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/07/buy-inter-milan-home-jersey-online-in-india-1.webp",
    name: "Inter Milan",
    price: faker.random.arrayElement([699, 799, 1099, 1599, 2099]),
    quantity: 0,
    stock: "instock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "intermilan",
  },

  {
    id: uuid(),
    image:
      "https://footballmonk.in/wp-content/uploads/2020/10/buy-liverpool-away-kit-2020-21-online-in-india-1.jpg",
    name: "Liverpool",
    price: faker.random.arrayElement([699, 799, 1099, 1599, 2099]),
    quantity: 0,
    stock: "outofstock",
    delivery: faker.random.arrayElement(["standard", "fast"]),
    inWishList: "no",
    club: "liverpool",
  },
];
