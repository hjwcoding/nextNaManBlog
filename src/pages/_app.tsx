import type { AppProps } from "next/app";
import "../components/ui/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
