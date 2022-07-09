import Header from "./Header";
import Navbar from "./Navbar";

export default function MainContainer({children}){
    return (
        <>
            <Header/>
            <Navbar/>
            <div>{children}</div>
        </>
    )
}