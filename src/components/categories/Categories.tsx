import { useLayoutEffect, useState } from "react";
import Container from "../container/Container";
import CategoriesContent from "../categories-content/CategoriesContent";
import useSearchParamsHook from "../hooks/UseQueryParams";
import { Loading } from "../../utils";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Categories = () => {
  const { setParam, getParam } = useSearchParamsHook();
  const [tags, setTags] = useState<string[]>([]);
  const { catalogVisible } = useSelector((state: RootState) => state.category);

  useLayoutEffect(() => {
    async function fetchRecipes() {
      try {
        const res: Response = await fetch("https://dummyjson.com/recipes/tags");
        const data: string[] = await res.json();
        setTags(data);
      } catch (error: any) {
        console.log(error);
      }
    }

    fetchRecipes();
  }, []);



  useLayoutEffect(() => {
    if (catalogVisible) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow when the component unmounts or catalogVisible changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [catalogVisible]);


  

  return (
    <div className="overflow-hidden w-full ">
      <div
        className=" w-full fixed top-[72px]  z-10"
        style={{
          transition: "all 0.3s ease",
          display: catalogVisible ? "block" : "none",
        }}
      >
        <Container>
          <div className="w-full flex h-[750px] bg-white shadow-custom ">
            {tags && tags.length > 0 ? (
              <>
                <div className="bg-[#22c55e]   w-full  max-w-[300px] overflow-y-auto pl-2 py-4">
                  <h2 className="text-white text-3xl font-semibold pl-2 mb-4 underline">
                    Categories
                  </h2>
                  {tags.map((tag, index) => (
                    <div key={index} className="">
                      <div>
                        <p
                          style={
                            getParam("tag") === tag
                              ? { background: "#fff", color: "#22c55e" }
                              : {}
                          }
                          className="text-white transition-transform text-xl px-2 py-1 w-full hover:bg-white hover:text-[#22c55e]"
                          onMouseEnter={() => setParam("tag", tag)}
                        >
                          {tag}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-white overflow-y-scroll">
                  <CategoriesContent />
                </div>
              </>
            ) : (
              <Loading />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Categories;
