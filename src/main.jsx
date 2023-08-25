import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// 2° - declarar queryClient e passar como prop de cliente, dentro do componente QueryClientProvider
const queryClient = new QueryClient();

//1° - envolver todo conteúdo da aplicação com o QueryClientProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
