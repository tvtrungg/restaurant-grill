import { StaticImageData } from "next/image";

export type TPostData = {
    data: {
      title: string;
      description: string;
      slug: string;
      date: string;
      thumbnail: StaticImageData;
    };
    content: string;
  }