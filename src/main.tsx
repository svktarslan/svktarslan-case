import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={routes} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
