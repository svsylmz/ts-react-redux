import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { tmdbProjectStore } from "@/store/store";
import NextNProgress from "nextjs-progressbar";
import HeadInfo from "@/components/HeadInfo";
import "@/styles/globals.css";

function TMDBProject({ Component, pageProps }: AppProps) {
  return (
    <Provider store={tmdbProjectStore}>
      <HeadInfo />
      <NextNProgress
        color="#01B4E4" // TMDB Progress Bar Blue
        startPosition={0.2}
        stopDelayMs={100}
        height={4}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default TMDBProject;
