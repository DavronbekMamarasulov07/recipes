import { Link } from "react-router-dom";
import { Recipe } from "../../types";
import { Skeleton } from "antd";

const HeroCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="overflow-hidden">
      {recipe.image ? (
        <Link to={`/details/${recipe.id}`}>
          <img
            className="w-full object-contain h-[500px] rounded-md"
            src={recipe.image}
            alt="Recipe Image"
          />
        </Link>
      ) : (
        <Skeleton.Image style={{ height: 500, width: "100%" }} active />
      )}
    </div>
  );
};

export default HeroCard;
