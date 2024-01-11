import { twMerge } from "tailwind-merge";

type TitleProps = {
  title: string;
  fontSize?: string;
};

const Title = ({ title, fontSize }: TitleProps) => {
  return (
    <div className="my-16">
      <h1
        className={twMerge(
          "text-3xl xs:text-4xl 2xs:text-5xl tracking-wider text-center uppercase pb-5",
          fontSize
        )}
      >
        {title}
      </h1>
      <div className="w-[8%] mx-auto border-b-[3px] border-[--white]"></div>
    </div>
  );
};

export default Title;
