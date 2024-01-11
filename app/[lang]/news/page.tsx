import CustomContent from "@/app/components/CustomContent";
import NewsItem from "@/app/components/NewsItem";
import { LINK } from "@/app/constants/constants";
import getPosts from "@/lib/getPosts";
import Link from "next/link";

type TNewsPageProps = {
  params: {
    lang: string;
  };
};

function NewsPage({ params }: TNewsPageProps) {
  const { lang } = params;
  const posts = getPosts(lang);
  return (
    <main className="news-container">
      <CustomContent
        brand="brand"
        intro="news_page.intro"
        title="news_page.title"
        background="banner-news-bg"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((item, index) => (
            <Link key={index} href={`/${LINK.NEWS}/${item.data.slug}`}>
              <NewsItem
                src={item.data.thumbnail}
                title={item.data.title}
                content={item.data.description}
              />
            </Link>
          ))}
        </div>
      </CustomContent>
    </main>
  );
}

export default NewsPage;
