import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Suspense from "../utils";
const Home = lazy(() => import("../routes/home/Home"));
const Auth = lazy(() => import("../routes/auth/Auth"));
const LikedRecipes = lazy(() => import("./liked-recipes/LikedRecipes"));
const Details = lazy(() => import("./details/Details"));


const RouteController = () => {
  return (
    <Routes>
        <Route path="/" element={<Suspense><Home /></Suspense>} />
        <Route path="/liked-recipes" element={<Suspense><LikedRecipes /></Suspense>} />
        <Route path="/details/:id" element={<Suspense><Details /></Suspense>} />

        <Route path="/auth" element={<Suspense><Auth /></Suspense>} />
    </Routes>
  );
};

export default RouteController;
