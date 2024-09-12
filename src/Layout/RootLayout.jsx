import { Outlet } from "react-router";
import Header from "../Components/GlobalComponents/Header";
import Footer from "../Components/GlobalComponents/Footer";
 
export default function RootLayout(){

    return(
        <>
            <Header/>
            <Outlet className="w-screen"/>
            <Footer/>
        </>
        
    )
}