import NewsList from "./NewsList";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
async function Homepage() {
    // fetch news data
    const news: NewsResponse = await fetchNews(categories.join(","));

    // set timeout
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return (
        <div>
            {/* newslist */}
            <NewsList news={news} />
        </div>
    );
}

export default Homepage;
