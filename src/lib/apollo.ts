import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl58421o04ty301ujcdmkc34s/master',
    cache: new InMemoryCache()
})