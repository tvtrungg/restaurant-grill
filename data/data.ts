import logo from "@/public/images/logo-w.png";
import page_not_found from "@/public/images/404/404.jpg";
import error_img from "@/public/images/404/error.jpg";
import food_1 from "@/public/images/menu/food_1.jpg";
import food_2 from "@/public/images/menu/food_2.jpg";
import food_3 from "@/public/images/menu/food_3.jpg";
import food_4 from "@/public/images/menu/food_4.jpg";
import food_5 from "@/public/images/menu/food_5.jpg";
import drinks_1 from "@/public/images/menu/drinks_1.png";
import drinks_2 from "@/public/images/menu/drinks_2.jpg";
import drinks_3 from "@/public/images/menu/drinks_3.jpg";
import drinks_4 from "@/public/images/menu/drinks_4.jpg";
import drinks_5 from "@/public/images/menu/drinks_5.jpg";

export const logoItem = logo;
export const page_404 = page_not_found;
export const error_page = error_img;
export const food_images = [food_1, food_2, food_3, food_4, food_5];
export const drinks_images = [drinks_1, drinks_2, drinks_3, drinks_4, drinks_5];

export const menu = [
  {
    cdn: drinks_1,
    title: "Trà sữa",
    content: "Black Tea + Cream + Taro Paste + Bubble",
    type: "drinks",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: drinks_2,
    title: "Trà lài",
    content: "Black Tea + Cream",
    type: "drinks",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: drinks_3,
    title: "Trà đào",
    content: "Black Tea + Fresh Milk",
    type: "drinks",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: drinks_4,
    title: "Trà Olong",
    content: "Taro Paste + Bubble",
    type: "drinks",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: drinks_5,
    title: "Milk Coffee",
    content: "Cafe + Cream + Milk",
    type: "drinks",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: food_1,
    title: "Đồ ăn 1",
    content: "Black Tea + Cream + Taro Paste + Bubble",
    type: "food",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: food_2,
    title: "Đồ ăn 2",
    content: "Black Tea + Cream",
    type: "food",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: food_3,
    title: "Đồ ăn 3",
    content: "Black Tea + Fresh Milk",
    type: "food",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: food_4,
    title: "Đồ ăn 4",
    content: "Taro Paste + Bubble",
    type: "food",
    price: "50.000",
    rating: 4,
  },
  {
    cdn: food_5,
    title: "Đồ ăn 5",
    content: "Cafe + Cream + Milk",
    type: "food",
    price: "50.000",
    rating: 4,
  },
];

//sort menu follow title
export const sort_menu = menu.sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
});

export const food_menu = sort_menu.filter((item) => item.type === "food");
export const drinks_menu = sort_menu.filter((item) => item.type === "drinks");
