import { Outlet } from "react-router-dom";

import BONavigation from "../../components/backofficeComp/Navigation/BONavigation";


const BackofficePage = () => {
    return(
        <div>
            <BONavigation/>
            <Outlet></Outlet>
        </div>
    )
    
}

export default BackofficePage;