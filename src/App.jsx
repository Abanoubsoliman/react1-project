import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home/";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import PageNotFound from "./Components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Navigate to={"/"}/> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
