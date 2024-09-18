import { FaClock, FaUtensils, FaFire, FaStar, FaUser } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import Container from "../container/Container";
import { useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { Recipe } from "../../types";
import { Loading } from "../../utils";
import { Breadcrumb, message } from "antd";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addToLiked, removeFromLiked } from "../../redux/likeSlice";

const RecipeDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { likedRecipes }: { likedRecipes: Recipe[] } = useSelector(
    (state: RootState) => state.like
  );
  const {id} =useParams()


   const [recipe, setRecipe] = useState<Recipe>();

   useLayoutEffect(() => {
     async function fetchRecipes() {
       try {
         const res: Response = await fetch(`https://dummyjson.com/recipes/${id}`);
         const data = await res.json();
         setRecipe(data);
       } catch (error: any) {
         console.log(error);
       }
     }

     fetchRecipes();
   }, []);


   useLayoutEffect(() => {
     window.scrollTo(0, 0);
   },[])


   const isProductLiked = (recipeId: number) => {
     return likedRecipes?.some((recipe) => recipe.id === recipeId);
   };

    const handleLike = (recipe: Recipe) => {
      if (isProductLiked(recipe.id)) {
        dispatch(removeFromLiked(recipe.id));
        message.error(`${recipe.name} removed from favorites`);
      } else {
        dispatch(addToLiked(recipe));
        message.success(`${recipe.name} added to favorites`);
      }
    };
 

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans mt-[100px]">
      {recipe ? (
        <Container>
          <div className="mb-6">
            <Breadcrumb
              style={{ color: "#9F9F9F", fontSize: "18px", fontWeight: "400" }}
              items={[
                {
                  title: <a href="/">Home</a>,
                },

                {
                  title: `${recipe.name}`,
                },
              ]}
            />
          </div>
          <div className="flex  md:flex-row gap-8 ">
            <div className="md:w-1/2 relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-auto rounded-lg shadow-lg "
              />

              <div className="absolute top-2 right-2 p-2 bg-white rounded-full flex items-center justify-center">
                <button
                  onClick={() => handleLike(recipe)}
                  className="text-green-500 transition-colors duration-300"
                >
                  {isProductLiked(recipe.id) ? (
                    <AiFillHeart size={24} />
                  ) : (
                    <AiOutlineHeart size={24} />
                  )}
                </button>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3 text-green-700">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-500 text-white px-3 py-1 rounded-full text-sm shadow"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex  gap-5 ">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3 text-green-700">
                    Ingredients
                  </h2>
                  <ul className="list-disc list-inside mb-4 bg-green-50 p-4 rounded-lg shadow">
                    {recipe.ingredients.slice(0, 7).map((ingredient, index) => (
                      <li key={index} className="mb-2">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3 text-green-700">
                    Quick Info
                  </h2>
                  <div className="bg-green-50 rounded-lg p-4 text-gray-800 shadow">
                    <div className="grid grid-cols-1 gap-4  ">
                      <div className="flex items-center">
                        <FaClock className="mr-2 text-green-500" />
                        <span>Prep: {recipe.prepTimeMinutes} mins</span>
                      </div>
                      <div className="flex items-center">
                        <FaUtensils className="mr-2 text-green-500" />
                        <span>Cook: {recipe.cookTimeMinutes} mins</span>
                      </div>
                      <div className="flex items-center">
                        <FaUser className="mr-2 text-green-500" />
                        <span>Serves: {recipe.servings}</span>
                      </div>
                      <div className="flex items-center">
                        <FaFire className="mr-2 text-green-500" />
                        <span>{recipe.caloriesPerServing} cal/serving</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>
                        {recipe.rating} ({recipe.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-2 text-green-700">
                Instructions
              </h2>
              <ol className="list-decimal list-inside bg-green-50 p-4 rounded-lg shadow">
                {recipe.instructions.slice(0, 4).map((step, index) => (
                  <li key={index} className="mb-3">
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-6 bg-green-100 rounded-lg p-4 text-gray-800 shadow">
                <h2 className="text-2xl font-semibold mb-3 flex items-center text-green-700">
                  <GiCook className="mr-2 text-green-500" />
                  Chef's Notes
                </h2>
                <p>
                  This Vegetarian Stir-Fry is a versatile dish that can be
                  customized with your favorite vegetables. For added protein,
                  consider adding cashews or peanuts. To make it vegan, ensure
                  your soy sauce is vegan-friendly. Enjoy this quick and healthy
                  meal any day of the week!
                </p>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
