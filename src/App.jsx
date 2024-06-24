import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PickAColorPage from "./pages/PickAColor/PickAColorPage";


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/pick-a-color",
      element : <PickAColorPage></PickAColorPage>
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
