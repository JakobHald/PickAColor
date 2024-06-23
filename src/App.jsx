import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
<<<<<<< HEAD
import PickAColorPage from "./pages/PickAColor/PickAColorPage";
=======
import PokemonDetails from "./pages/pokemonDetails/PokemonDetails";
>>>>>>> f3544ea71ee3de802ef9b543f3017c2f673c476e


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
<<<<<<< HEAD
      path: "/pick-a-color",
      element : <PickAColorPage></PickAColorPage>
=======
      path: "/pokemon/:name",
      element : <PokemonDetails></PokemonDetails>
>>>>>>> f3544ea71ee3de802ef9b543f3017c2f673c476e
    }
  ]);


  return <>
    
    <div>
        {/* GLOBAL NAVIGATION */}
        <div className="globale-page-wrapper">
        
            {routes}
        
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
