import "./App.css";

import MenuBar from "./components/Menubar.jsx";
import Hero from "./components/Hero.jsx"
import Career from "./components/Career.jsx"
import Socials from "./components/Socials.jsx"


export default function App(){

    return (
        <>
            <main id="layout">
                <MenuBar />
                <Hero />
                <Career />
                <Socials />
                <Hero />
                <Hero />
                <Hero />
            </main>
        </>
    );

}

