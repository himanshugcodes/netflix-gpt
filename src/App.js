import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Error from "./components/Error";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="bg-black">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
