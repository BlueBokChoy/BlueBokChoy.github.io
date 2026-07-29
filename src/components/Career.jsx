import "./Career.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {

    useEffect(() => {
        const line = document.querySelector(".career-line");
        const progress = document.querySelector(".career-line-progress");
        const contents = document.querySelectorAll(".career-content");

        if (!line || !progress) return;

        gsap.to(progress, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: line,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
            }
        });

        contents.forEach((content) => {
            gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: content,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="layout-career">
            <div>
                <h1 className="big-text">My Career</h1>
                <h1>What I've been doing!</h1>
            </div>
            <div id="layout-career-two">
                <div className="career-left">
                    <div className="career-content">
                        <h1>Committee Planner</h1>
                        <h3>Geography Awareness Week Planning Committee</h3>
                    </div>
                    <div className="career-content">
                        <h1>Committee Chairman</h1>
                        <h3>Geography Awareness Week Planning Committee</h3>
                    </div>
                    <div className="career-content">
                        <h1>VP of Training</h1>
                        <h3>Milliken Mills Computer Studies Club</h3>
                    </div>
                    <div className="career-content">
                        <h1>Workshop Lead</h1>
                        <h3>Hackclub Campfire Markham</h3>
                    </div>
                </div>

                <div className="career-line">
                    <div className="career-line-progress"></div>
                </div>

                <div className="career-right">
                    <div className="career-content">
                        <h1>Founder</h1>
                        <h3>Milliken Geography Club</h3>
                    </div>
                    <div className="career-content">
                        <h1>Graphic Designer</h1>
                        <h3>Ontario Association for Geographic and Environmental Education</h3>
                    </div>
                    <div className="career-content">
                        <h1>Mathematics Tutor</h1>
                        <h3>Independent</h3>
                    </div>
                </div>
            </div>

        </section>
    );
}