import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Register";
// import Home from "./pages/Register";
// import Single from "./pages/Register";
// import Write from "./pages/Register";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home!</div>,
    errorElement: <h1>404 Not Found</h1>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
