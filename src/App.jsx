import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./page/Applayout";
import Home from "./page/home";
import Dialog from "./page/Dialog";
import Playlist from "./page/Playlist";
import About from "./page/About";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dialog",
        element: <Dialog />,
      },
      {
        path: "playlist",
        element: <Playlist />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
