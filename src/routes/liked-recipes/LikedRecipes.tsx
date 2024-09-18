import { useSelector } from "react-redux"
import Liked from "../../components/liked/Liked"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { useEffect } from "react"

const LikedRecipes = () => {
  const { likedRecipes } = useSelector((state : any) => state.like)

  
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mb-[100px] flex-grow">
        <Liked likedRecipes={likedRecipes} />
      </div>
      <Footer />
    </div>
  );
}

export default LikedRecipes
