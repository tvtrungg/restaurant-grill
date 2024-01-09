import logo from '@/public/images/logo-w.png'
import page_not_found from '@/public/images/404/404.jpg'
import error_img from '@/public/images/404/error.jpg'
import food_1 from '@/public/images/menu/1.png'
import food_2 from '@/public/images/menu/2.png'
import food_3 from '@/public/images/menu/3.png'
import food_4 from '@/public/images/menu/4.png'
import food_5 from '@/public/images/menu/5.png'
import food_6 from '@/public/images/menu/6.png'

export const logoItem = logo;
export const page_404 = page_not_found;
export const error_page = error_img;
export const food_images = [food_1, food_2, food_3, food_4, food_5];

export const menu = [
    {
        cdn: food_1,
        title: "Trà sữa",
        content: "Black Tea + Cream + Taro Paste + Bubble",
        type: "tea",
        hot: true,
    },
    {
        cdn: food_2,
        title: "Trà lài",
        content: "Black Tea + Cream",
        type: "tea",
        hot: true,
    },
    {
        cdn: food_3,
        title: "Trà đào",
        content: "Black Tea + Fresh Milk",
        type: "tea",
        hot: true,
    },
    {
        cdn: food_4,
        title: "Trà Olong",
        content: "Taro Paste + Bubble",
        type: "tea",
        hot: true,
    },
    {
        cdn: food_5,
        title: "Milk Coffee",
        content: "Cafe + Cream + Milk",
        type: "cafe",
        hot: false,
    },
    {
        cdn: food_6,
        title: "Cafe ",
        content: "Cafe + Sugar",
        type: "cafe",
        hot: false,
    }
]

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

export const hot_menu = sort_menu.filter((item) => item.hot === true);
export const cold_menu = sort_menu.filter((item) => item.hot === false);
