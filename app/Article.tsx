import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
    article: Article;
};
function Article({ article }: Props) {
    return (
        <article className="bg-slate-100 dark:bg-slate-700 flex flex-col rounded-lg shadow-sm  hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
            {article.image ? (
                <img
                    className="w-full h-56 object-cover rounded-t-lg shadow-md"
                    src={article.image}
                    alt={article.title}
                />
            ) : (
                <img
                    className="w-full h-56 object-cover rounded-t-lg shadow-md"
                    src="https://img.freepik.com/free-vector/news-concept-landing-page_52683-11365.jpg?w=1480&t=st=1676106011~exp=1676106611~hmac=b6c50fbda70b6b4fce8727afa07f8b19789581875edbf483a8cdced5ef765934"
                    alt={article.title}
                />
            )}

            <div className="flex flex-1 flex-col">
                <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-bold font-serif">{article.title}</h2>

                    <section className="mt-2 flex-1">
                        <p className="text-xs line-clamp-2">
                            {article.description}
                        </p>
                    </section>

                    <footer className="text-xs text-right ml-auto space-x-1 flex pt-5 italic text-gray-400">
                        <p>{article.source} -</p>
                        <p>
                            <LiveTimestamp time={article.published_at} />
                        </p>
                    </footer>
                </div>

                {/* read more button */}
                <ReadMoreButton article={article} />
            </div>
        </article>
    );
}

export default Article;
