import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AutoComplete, Avatar, Badge,Form } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import Categories from "../categories/Categories";
import Container from "../container/Container";
import "./Header.css";
import useSearchParamsHook from "../hooks/UseQueryParams";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setCatalogVisible } from "../../redux/modalSlice";
import { Recipe } from "../../types";

const Header = () => {
  const { getParam, setParam, clearParams } = useSearchParamsHook();
  const [data, setData ] = useState<Recipe[]>([]);

  const { likedRecipes }: { likedRecipes: Recipe[] } = useSelector(
    (state: RootState) => state.like
  )
  const [search, setSearch] = useState<string>("");

  const  navigate = useNavigate()

  useEffect(() => {
    const searchRecipes = async () => {
      try {
        const res: Response = await fetch(
          `https://dummyjson.com/recipes/search?q=${search}`
        );
        const data = await res.json();
        setData(data.recipes);
      } catch (error: any) {
        console.log(error);
      }
    };

    searchRecipes();
  }, [search]);

  console.log(data);

  


    const handleSearchSubmit = (value: { search: string }) => {
     if(value.search){
      setSearch(value.search)
     }
     else{
      setSearch("")
     }
      
    };

    const onSelect = (data: string) => {
      console.log("onSelect", data);
    };

    const loadData = async (searchText: string) => {
      try {
        setSearch(searchText);
      } catch (error) {
        console.error("Error loading search data:", error);
      }
    };


 
  const dispatch = useDispatch<AppDispatch>();
  const { catalogVisible } = useSelector((state: RootState) => state.category);

  useLayoutEffect(() => {
    if (getParam("catalogVisible") === "true") {
      dispatch(setCatalogVisible(true));
    }

    if (getParam("catalogVisible") === "false") {
      dispatch(setCatalogVisible(false));
      clearParams();
    }
  }, [getParam("catalogVisible")]);

  

  const handleCatalog: () => void = () => {
    dispatch(setCatalogVisible(true));
    setParam("catalogVisible", catalogVisible ? "false" : "true");
  };

  return (
    <>
      <div className="bg-green-100  w-full  fixed top-0 z-50 ">
        <Container>
          <div className="flex w-full justify-between  mx-auto items-center py-4">
            <Link to="/">
              <h2 className="text-3xl font-semibold">
                DM-<span className="text-green-600">Cookpal</span>
              </h2>
            </Link>
            <div className="flex gap-4 items-center pl-2  bg-[#ffffffad] w-full max-w-[500px]">
              <p
                onClick={() => handleCatalog()}
                className="text-gray-700 font-semibold flex items-center gap-1"
              >
                Catalogs
                {catalogVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
              <span className="mb-[2px] text-gray-400">|</span>
              <Form
                initialValues={{ search: getParam("q") }}
                onFinish={handleSearchSubmit}
                className="flex items-center  gap-3 bg-[#fefefe]  w-[500px] py-1 px-4 rounded-[62px] border border-gray-300  hover:border-[#56b280]"
              >
                <BiSearch className="text-[#0000005f] text-2xl" />
                <Form.Item
                  name="search"
                  className="w-full !mb-0"
                  rules={[{ required: false }]}
                >
                  <AutoComplete
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        navigate(`/search?q=${search}`);
                      }
                    }}
                    options={data?.map((product) => ({
                      label: (
                        <Link
                          className="block"
                          key={product.id}
                          to={`/details/${product.id}`}
                        >
                          {product.name}
                        </Link>
                      ),
                    }))}
                    style={{ width: "100%" }}
                    className="custom-autocomplete"
                    onSelect={onSelect}
                    onSearch={(text) => (text ? loadData(text) : loadData(""))}
                    placeholder="Search..."
                  />
                </Form.Item>
              </Form>
            </div>
            <ul className="flex gap-6 ">
              <li className="links ">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="links ">
                <NavLink to="/help">Help</NavLink>
              </li>
            </ul>
            <div
              className="flex  gap-4"
              onClick={() => dispatch(setCatalogVisible(false))}
            >
              <NavLink
                className="!mb-0 flex items-center justify-center"
                to="/liked-recipes"
              >
                <Badge count={likedRecipes.length}>
                  <AiFillHeart className="text-red-600 text-3xl " />
                </Badge>
              </NavLink>

              <Avatar
                size="large"
                className="shadow-xl"
                src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
              />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
      <Outlet />
    </>
  );
};

export default Header;
