import { Outlet } from "react";
import Header from "./Header";
import Footer from "./Footer"

const Layout =() => {
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
