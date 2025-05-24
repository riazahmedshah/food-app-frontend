import { Outlet } from "react-router-dom"
import MainHeader from "./MainHeader"

const Layout = () => {
    
    return(
        <>
            <MainHeader />
            <Outlet/>
        </>
    )
}

export default Layout