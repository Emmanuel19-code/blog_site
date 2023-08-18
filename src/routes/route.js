import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArtPage from "../Pages/ArtPage";
import SciencePage from "../Pages/SciencePage";
import FoodPage from "../Pages/FoodPage";
import TechnologyPage from "../Pages/TechnologyPage";
import MoviePage from "../Pages/MoviePage";
import DesignPage from "../Pages/DesignPage";
import Layout from "../components/Layout";
import ReadMorePage from "../Pages/ReadMorePage";


const router = createBrowserRouter([
    {
        element:<Layout/>,
         children:[
        {
            path:"/",
            element:<App/>,
        },
        {
            path:"/art",
            element:<ArtPage/>
        },
        {
            path:"/science",
            element:<SciencePage/>
        },
        {
            path:"/food",
            element:<FoodPage/>
        },
        {
            path:"/technology",
            element:<TechnologyPage/>
        },
        {
            path:"/movies",
            element:<MoviePage/>
        },
        {
            path:"/design",
            element:<DesignPage/>
        },
        {
        path:"/readmore",
        element:<ReadMorePage/>
     }
    ]
    }
    
]
)



export default router