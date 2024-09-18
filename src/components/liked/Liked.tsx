import { IProps } from "../../types";
import Card from "../card/Card";
import Container from "../container/Container";
import { Breadcrumb } from "antd";

const Liked = ({ likedRecipes }: { likedRecipes: IProps["recipes"] }) => {
  return (
    <div className="mt-[100px] ">
      <Container>
        <div className="mb-6">
          <Breadcrumb
            style={{color: "#9F9F9F", fontSize: "18px", fontWeight: "400"}}
            items={[
              {
                title: <a href="/">Home</a>,
              },
             
              {
                title: "Liked Recipes",
              },
            ]}
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-8 ">
          {likedRecipes && likedRecipes.length > 0 ? (
            likedRecipes?.map((recipe, index) => (
              <div key={index} className="w-full">
                <Card recipe={recipe} countLine={3} />
              </div>
            ))
          ) : (
            <h3>Recipes not selected</h3>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Liked;
