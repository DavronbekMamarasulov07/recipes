import { Button } from "antd";
import { IProps } from "../../types";
import Card from "../card/Card";
import Container from "../container/Container";
import { useState } from "react";

const AllProducts = ({recipes, title} : IProps) => {
  const [step, setStep] = useState<number>(3);
  let count = 3;


  return (
    <div className="my-[50px]">
      <Container>
        <h1 className="text-4xl font-bold mb-8 text-[#222]">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            recipes.slice(0, step * count).map((recipe, index) => (
              <Card key={index} recipe={recipe} countLine={3} />
            ))
          }
        </div>
        {
          recipes.length > step * count && (
              <Button onClick={() => setStep(step + 1)} className="mt-8 block mx-auto w-[200px] transition-transform active:scale-95 hover:!bg-green-600 !bg-green-500" size="large" type="primary" > Show More</Button>
          )
        }
        
      </Container>
    </div>
  );
};

export default AllProducts;
