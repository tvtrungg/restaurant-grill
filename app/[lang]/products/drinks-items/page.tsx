import CardItem from "@/app/components/CardItem";
import { drinks_menu } from "@/data/data";
import React from "react";

type Props = {};

const DrinksMenuPage = (props: Props) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {drinks_menu.map((item, index) => (
          <CardItem
            key={index}
            src={item.cdn.src}
            title={item.title}
            content={item.content}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default DrinksMenuPage;
