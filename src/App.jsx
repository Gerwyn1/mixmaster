import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }}>
      mixmaster starter
    </RouterProvider>
  );
};
export default App;
