import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Main_Router from "./Router/Main_Router";
import "./App.css";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Main_Router />
    </Provider>
  </BrowserRouter>,
);
// <QueryClientProvider client={queryClient}>
//   </QueryClientProvider>
//     <ErrorBoundary>
// </ErrorBoundary>,
