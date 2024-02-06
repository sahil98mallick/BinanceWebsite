import Wrapper from "@/Layout/Wrapper/Wrapper";
import { ThemeContextProvider } from "@/Mui_theme/ThemeContextProvider";
import theme from "@/Mui_theme/palette";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}
