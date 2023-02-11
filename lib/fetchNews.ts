import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // graphql query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                languages: "en"
                categories: $categories
                keywords: $keywords
                countries: "in"
                sort: "published_desc"
            ) {
                data {
                    category
                    country
                    author
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    total
                    offset
                }
            }
        }
    `;
    // fetch function from nextjs 13 caching
    const res = await fetch(
        "https://hpaan.stepzen.net/api/ugly-gerbil/__graphql",
        {
            method: "POST",
            cache: isDynamic ? "no-cache" : "default",
            next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
            headers: {
                "Content-Type": "application/json",
                Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
            },
            body: JSON.stringify({
                query,
                variables: {
                    access_key: process.env.MEDIASTACK_API_KEY,
                    categories: category,
                    keywords,
                },
            }),
        }
    );

    const newsResponse = await res.json();

    // sort by images present vs not present
    const news = sortNewsByImage(newsResponse.data.myQuery);

    // return data
    return news;
};

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=${api_key}&categories=business,sports"

export default fetchNews;
