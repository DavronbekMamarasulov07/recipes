import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import RecipeDetails from '../../components/recipe-details/RecipeDetails'

const Details = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Header />
      <div className='my-[100px]'>
        <RecipeDetails />
      </div>
      <Footer />
    </div>
  );
}

export default Details
