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
            content: "RAG systems enhance LLMs by fetching relevant context from external sources. Parallel query execution sends queries to all sources simultaneously, reducing latency and improving user experience. Async programming enables this optimization for scalable RAG applications.",
            author: "Sandip Deshmukh",
            date: "28th May 2025",
            link: "https://sandipdeshmukh.hashnode.dev/accelerating-retrieval-with-parallel-query-execution-in-rag-systems",
        },
        {
            id: 2,
            title: "Building a Simple AI Agent with Chain-of-Thought Prompting(No Framework Required)",
            content: "In this article, we’ll walk through creating a simple AI agent that uses the Chain-of-Thought (CoT) technique to reason and solve queries step-by-step.",
            author: "Sandip Deshmukh",
            date: "13th June 2025",
            link: "https://sandipdeshmukh.hashnode.dev/building-a-simple-ai-agent-with-chain-of-thought-prompting-no-framework-required",
        },
        {
            id: 3,
            title: "What is RAG and How to Implement It in Python",
            content: "AI is changing the way we search and find answers. One of the most exciting techniques used in modern AI applications is RAG, which stands for Retrieval-Augmented Generation. RAG combines the power of large language models (LLMs) with external knowledge sources to provide accurate and contextually relevant responses.",
            author: "Sandip Deshmukh",
            date: "4th June 2025",
            link: "https://sandipdeshmukh.hashnode.dev/what-is-rag-and-how-to-implement-it-in-python",
        },
        {
            id: 4,
            title: "Mastering Prompting Techniques in LLMs: A Practical Guide with Python",
            content: "In this post, we’ll walk through 10 powerful prompting techniques—with real Python examples—that help you get the most out of LLMs.",
            author: "Sandip Deshmukh",
            date: "1st June 2025",
            link: "https://sandipdeshmukh.hashnode.dev/mastering-prompting-techniques-in-llms-a-practical-guide-with-python",
        },
        {
            id: 5,
            title: "Simplified Guide to Understanding AI Terminology",
            content: "Let’s break down the most common AI jargons in simple terms, using relatable examples and code snippets in Python.",
            author: "Sandip Deshmukh",
            date: "31st May 2025",
            link: "https://sandipdeshmukh.hashnode.dev/simplified-guide-to-understanding-ai-terminology",
        },
    ],
};

export default data;
