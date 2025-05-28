export interface BlogEntry {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    link?: string;
}

const data: { blogs: BlogEntry[] } = {
    blogs: [
        {
            id: 1,
            title: "Accelerating Retrieval with Parallel Query Execution in RAG Systems",
            content:
                "Retrieval-Augmented Generation (RAG) systems enhance LLMs by fetching relevant context from external sources. Traditionally, retrieval involves sequentially querying multiple sources, which can be slow. Parallel query execution accelerates this by sending queries to all sources simultaneously and aggregating the results. This approach reduces latency and improves user experience, especially when integrating multiple vector databases or search APIs. Key considerations include handling inconsistent response times, merging results, and managing rate limits. Implementing parallel retrieval can be achieved using async programming patterns in languages like Python or JavaScript. Overall, parallel query execution is a practical optimization for scalable and responsive RAG applications.",
            author: "Sandip Deshmukh",
            date: "28th May 2025",
            link: "https://sandipdeshmukh.hashnode.dev/accelerating-retrieval-with-parallel-query-execution-in-rag-systems",
        },
    ],
};

export default data;
