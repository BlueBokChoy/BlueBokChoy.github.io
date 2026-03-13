import './Menu.css'
import { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Menu() {
    // Create menu activation animation timeline
    const activatetl = useRef()
    const [menuFlag, setMenuFlag] = useState(false)

    useGSAP(() => {

        activatetl.current = gsap.timeline({
            paused: true,
            defaults: { duration: 0.5, ease: "power2.inOut" }
        });
        activatetl.current
        .fromTo("#menuBubble", {scaleX: 0}, {scaleX: 1, transformOrigin: "top left"})
        .fromTo(".bar", {backgroundColor: "#BBD1EA", duration: 0.1}, {backgroundColor: "#FFFFFF", duration: 0.1}, "<")
        .fromTo("#top", {rotation: 0}, {rotation: 45, y: "0.6rem"}, "<")
        .fromTo("#mid", {opacity: 1}, {opacity: 0}, "<")
        .fromTo("#low", {rotation: 0}, {rotation: -45, y: "-0.6rem"}, "<")
        .fromTo("#menuList", {width: 0}, {width: "18vw", transformOrigin: "left"})
    }, [])

    useGSAP(() => {
        console.log(menuFlag)
        if (menuFlag) {
            activatetl.current.play()
        }
        else {
            activatetl.current.reverse()
        }
    }, [menuFlag])

    return (
        <>
        <button id="icon" onClick={() => setMenuFlag(!menuFlag)}>
                <div className="bar" id="top"></div>
                <div className="bar" id="mid"></div>
                <div className="bar" id="low"></div>
        </button>
        <div id="menu">
            <div id="menuList">
                <div className="menuItem">About Me</div>
                <div className="menuItem">Sample Projects</div>
                <div className="menuItem">Resume</div>
                <div className="menuItem">Contact Me</div>
            </div>
            <div id="menuBubble"></div>
        </div>
        </>
    )
}

export default Menu