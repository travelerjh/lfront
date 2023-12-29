import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import { BoardWrite } from "./page/BoardWrite";
import { BoardList } from "./page/BoardList";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<BoardList />} />
      <Route path="write" element={<BoardWrite />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
