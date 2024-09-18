import { Recipe } from "../../types";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { GiCookingPot, GiFireBowl } from "react-icons/gi";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToLiked, removeFromLiked } from "../../redux/likeSlice";
import { RootState } from "../../redux/store";
import { message } from "antd";
import { Link } from "react-router-dom";

interface IProps {
  recipe: Recipe;
  countLine: number;
}

const Card = ({ recipe, countLine }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { likedRecipes }: { likedRecipes: Recipe[] } = useSelector(
    (state: RootState) => state.like
  );
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
    <div className="rounded-lg flex flex-col justify-between  overflow-hidden shadow-lg bg-white hover:shadow-xl hover:scale-102 transition-transform duration-300 border border-green-200">
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={recipe.image}
          alt={recipe.name}
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
        <div className="absolute bottom-0 left-0 bg-green-500 text-white px-2 py-1 rounded-tr-lg">
          {recipe.difficulty}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {recipe.name}
        </div>
        <p className="text-green-600 text-sm mb-2 font-semibold">
          {recipe.cuisine} Cuisine
        </p>
        <div className="flex items-center mb-2">
          <AiFillStar className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-gray-600 font-semibold">
            {recipe.rating.toFixed(1)}
          </span>
          <span className="ml-1 text-gray-500">
            ({recipe.reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between mb-2 text-gray-600">
          <div className="flex items-center">
            <BiTime className="h-5 w-5 text-green-500 mr-1" />
            <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
          </div>
          <div className="flex items-center">
            <FaUser className="h-5 w-5 text-green-500 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center">
            <GiFireBowl className="h-5 w-5 text-green-500 mr-1" />
            <span>{recipe.caloriesPerServing} calories</span>
          </div>
        </div>
        <div className="mt-4 flex-1">
          <h4 className="font-semibold text-green-700 mb-2">
            Main Ingredients:
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients.slice(0, 4).map((ingredient, index) => (
              <li key={index} className="text-sm">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-6 pt-2 pb-4   ">
        {recipe.tags?.slice(0, countLine).map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Link to={`/details/${recipe.id}`}>
        <div className="px-6 pb-4 ">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center">
            <GiCookingPot className="mr-2" />
            View Recipe
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
