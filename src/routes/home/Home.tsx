import AllProducts from "../../components/all-products/AllProducts";
import { useLayoutEffect, useState } from "react";
import { Recipe } from "../../types";
import TopReyting from "../../components/topReyting/TopReyting";
import Hero from "../../components/hero/Hero";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useLayoutEffect(() => {
    async function fetchRecipes() {
      try {
        const res: Response = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error: any) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="mt-[100px]">
        <Hero recipes={recipes} />
        <TopReyting recipes={recipes} title="Top Rating Recipes" />
        <AllProducts recipes={recipes} title="All Recipes" />

      </div>
      <Footer />
    </div>
  );
};

export default Home;
