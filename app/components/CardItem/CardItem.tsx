import Image from "next/image";
import "./CardItem.css";

type TCardItemProps = {
  src: string;
  title: string;
  content: string;
  rating?: number;
  price: string;
};

const CardItem = ({ src, title, content, rating, price }: TCardItemProps) => {
  return (
    <div className="card-wrapper block overflow-hidden relative rounded-2xl shadow-lg ">
      <div className="card-img relative w-full h-[300px]">
        <Image className="object-cover" src={src} alt={title} fill />
      </div>
      <div className="card-details text-base p-5 z-[3] text-white absolute bottom-0 left-0">
        <span className="card-title text-xl delay-[150ms] font-semibold">
          {title}
        </span>
        <span className="card-content text-base mt-1 delay-[250ms] font-thin">
          {content}
        </span>
        <span className="mt-2">
          <div className="flex gap-1 items-center">
            {Array.from(Array(rating).keys()).map((_, index) => (
              <svg
                key={index}
                viewBox="64 64 896 896"
                className="w-5 h-5 transition duration-200 ease-in-out"
              >
                <path
                  className="fill-current text-yellow-400"
                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                ></path>
              </svg>
            ))}
          </div>
        </span>
        <span className="mt-2 font-semibold">{price}đ</span>
      </div>
    </div>
  );
};

export default CardItem;
