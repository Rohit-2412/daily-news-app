export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = news.data.filter(
        (newsItem) => newsItem.image !== null
    );

    const newsWithoutImage = news.data.filter(
        (newsItem) => newsItem.image === null
    );

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithoutImage],
    };

    return sortedNewsResponse;
}
