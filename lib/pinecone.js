import pinecone from "pinecone-client";

const client = new pinecone.Client({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

export default client;
