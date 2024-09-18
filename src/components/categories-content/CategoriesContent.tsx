import  { useLayoutEffect, useState } from 'react'
import { Recipe } from '../../types';
import CardX from '../card/CardX';
import useSearchParamsHook from '../hooks/UseQueryParams';
import { Typography } from "antd";
import { Loading } from '../../utils';


const { Title } = Typography;

const CategoriesContent = () => {
  const [tags, setTags] = useState<Recipe[]>([]);
  const { getParam} = useSearchParamsHook();
  
  const loading = false 

 

  useLayoutEffect(() => {
    async function fetchRecipes() {
      try {
        loading && <Loading />
        const res: Response = await fetch(
          `https://dummyjson.com/recipes/tag/${getParam("tag")}`
        );
        const data = await res.json();
        setTags(data.recipes);
      } catch (error: any) {
        console.log(error);
      }
      finally{
        loading && <Loading />
      }
    }

    fetchRecipes();
  }, [getParam("tag")]);

  return (
    <div className='grid grid-cols-1 gap-4 items-center p-10'>
      {
        tags && tags.length > 0 ? 
        tags?.map((tag, index) => (
          <div key={index}>
           <CardX recipe={tag} countLine={4} />
          </div>
        ))
        :
        <Title level={3}>Recipes not selected</Title>
      }
    </div>
  )
}

export default CategoriesContent
