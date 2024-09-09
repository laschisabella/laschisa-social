import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { MyContextProvider } from "./MyContext";
import Profile from "./pages/Profile";
import swDev from "./swDev.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>
);

swDev();
