import "../static/css/reset.css";
import { AppProps } from "next/app";
import "../util/firebaseInit";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
