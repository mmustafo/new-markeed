import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Product, MainLayout } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;