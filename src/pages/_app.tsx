import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>
      <Head>
      <title>Blog Gochi</title>
      </Head>
    <Component {...pageProps} />
    </QueryClientProvider>
  )
  }

