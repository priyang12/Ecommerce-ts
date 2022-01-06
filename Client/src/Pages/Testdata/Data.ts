import { DetailedProduct } from "../../types";

type SearchResult = {
  products: DetailedProduct[];
  page: number;
  pages: number;
};

export const Products = [
  {
    rating: 3,
    numReviews: 1,
    price: 399.99,
    countInStock: 6,
    _id: "60d5e622e5179e2bb44bd83b",
    name: "Sony Playstation 4 Pro White Version",
    image: "/Photos/image-1628092377429.webp",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    user: "60d5e622e5179e2bb44bd835",
    reviews: [
      {
        _id: "612894152f469f19e8ee85e6",
        name: "priyang",
        rating: 3,
        comment: "sdadsad",
        user: "60d60298af846100040f3307",
        createdAt: "2021-08-27T07:28:21.461Z",
        updatedAt: "2021-08-27T07:28:21.461Z",
      },
    ],
    Date: "2021-06-25T14:20:18.614Z",
    __v: 1,
    createdAt: "2021-06-25T14:20:18.623Z",
    updatedAt: "2021-08-27T07:28:21.461Z",
  },
  {
    rating: 4,
    numReviews: 1,
    price: 89.99,
    countInStock: -39,
    _id: "60d5e622e5179e2bb44bd838",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/Photos/image-1627384388351.webp",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    user: "60d5e622e5179e2bb44bd835",
    reviews: [
      {
        _id: "6128b73ebc70bc35a0b0c3d0",
        name: "Priyang",
        rating: 4,
        comment: "very good",
        user: "6106f4c09d285d000436ed0a",
        createdAt: "2021-08-27T09:58:22.657Z",
        updatedAt: "2021-08-27T09:58:22.657Z",
      },
    ],
    Date: "2021-06-25T14:20:18.612Z",
    __v: 4,
    createdAt: "2021-06-25T14:20:18.622Z",
    updatedAt: "2022-01-02T19:32:53.259Z",
  },
  {
    rating: 2.3333333333333335,
    numReviews: 3,
    price: 399.99,
    countInStock: 0,
    _id: "60d5e622e5179e2bb44bd839",
    name: "iPhone ",
    image: "/Photos/image-1628092416984.webp",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    user: "60d5e622e5179e2bb44bd835",
    reviews: [
      {
        _id: "6128b08c1506272944e27155",
        name: "Priyang",
        rating: 3,
        comment: "sadsadasds",
        user: "6106f4c09d285d000436ed0a",
        createdAt: "2021-08-27T09:29:48.353Z",
        updatedAt: "2021-08-27T09:29:48.353Z",
      },
      {
        _id: "6128ab14046fa731e0b2604c",
        name: "priyang",
        rating: 0,
        comment: "dsadsad",
        user: "60d60298af846100040f3307",
        createdAt: "2021-08-27T09:06:28.926Z",
        updatedAt: "2021-08-27T09:06:28.926Z",
      },
      {
        _id: "611e381fd6a4c53048f59062",
        name: "Priyang",
        rating: 4,
        comment: "sadasdasdd",
        user: "60d5e622e5179e2bb44bd835",
        createdAt: "2021-08-19T10:53:19.690Z",
        updatedAt: "2021-08-19T10:53:19.690Z",
      },
    ],
    Date: "2021-06-25T14:20:18.613Z",
    __v: 3,
    createdAt: "2021-06-25T14:20:18.622Z",
    updatedAt: "2021-08-27T09:29:48.355Z",
  },
];

export const SerachResult: SearchResult = {
  products: Products,
  page: 1,
  pages: 1,
};
