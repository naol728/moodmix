import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./page/Applayout";
import { Homepage } from "./page/Home";
import Dialog from "./page/Dialog";
import Playlist from "./page/Playlist";
import About from "./page/About";
import Musiccontext from "./context/Musiccontext";
import Favorite from "./page/Favorite";
import Login from "./page/Login";
import Signup from "./page/Signup";
import AuthProvider from "./context/Authcontext";
import Profile from "./page/Profile";

const router = createBrowserRouter([
  {
    element: (
      <Musiccontext>
        <Applayout />
      </Musiccontext>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/regester",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/dialog",
        element: <Dialog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
