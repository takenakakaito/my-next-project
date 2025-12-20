import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "../_constans/Pagination";
import SearchField from "../_constans/SerchField";
import { NEWS_LIST_LIMIT } from "../_constans";

export default async function Page() {
  const {contents: news, totalCount} = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount}/>
    </>
  );
}