import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import { setLogger } from "react-query";

setLogger({
  // eslint-disable-next-line no-console
  log: console.log,
  // eslint-disable-next-line no-console
  warn: console.warn,
  // ✅ no more errors on the console
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error: () => {},
});

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      <ToastContainer />
      <HelmetProvider>{children}</HelmetProvider>
    </QueryClientProvider>
  );
};
