import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import "./BaseWidget.css";


export default function BaseWidget({
    children,
    className = "",
    delay = 0
}) {

    const ref = useRef();


    useLayoutEffect(() => {

        gsap.fromTo(
            ref.current,
            {
                opacity:0,
                y:40,
                scale:.96
            },
            {
                opacity:1,
                y:0,
                scale:1,
                duration:.8,
                delay,
                ease:"power3.out"
            }
        );


    }, [delay]);


    return (

        <section 
            ref={ref}
            className={`widget ${className}`}
        >

            {children}

        </section>

    );

}