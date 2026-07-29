import "./Career.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {

    const jobs = [
        {
            title: "Journalist",
            company: "Milliken Moments - School Paper",
            date: "2023",
        },
        {
            title: "Committee Planner",
            company: "Geography Awareness Week Planning Committee",
            date: "2023-2024",
        },
        {
            title: "Graphic Designer",
            company: "Ontario Association for Geographic and Environmental Education",
            date: "2023-2025",
        },
        {
            title: "Top 20 in Hospitality and Event Management",
            company: "Canadian National Leadership Conference",
            date: "2023",
        },
        {
            title: "Founder",
            company: "Milliken Geography Club",
            date: "2024-Present",
        },
        {
            title: "Committee Chairman",
            company: "Geography Awareness Week Planning Committee",
            date: "2024-Present",
        },
        {
            title: "Mathematics Tutor",
            company: "Independent",
            date: "2024-2026",
        },
        {
            title: "Feasibility Laureate",
            company: "Urban Solutions Symposium",
            date: "2024",
        },
        {
            title: "Vice President",
            company: "Milliken Computer Studies Club",
            date: "2025",
        },
        {
            title: "Workshop Lead",
            company: "Hackclub Campfire Markham",
            date: "2025",
        },
    ];

    useEffect(() => {
        const line = document.querySelector(".career-line");
        const progress = document.querySelector(".career-line-progress");

        if (!line || !progress) return;

        gsap.to(progress, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: line,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
            },
        });

        const items = gsap.utils.toArray(".career-item");

        items.forEach((item) => {
            const content = item.querySelector(".career-content");

            gsap.set(content, {
                opacity: 0,
                y: 40,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            })
            .to(item, {
                "--dot-color": "#6078A8",
                duration: 0.3,
                ease: "power2.out",
            })
            .to(content, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            }, "<");
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section id="layout-career">
            <div>
                <h1 className="big-text">My Career</h1>
                <h1>What I've been doing!</h1>
            </div>

            <div className="career-timeline">
                <div className="career-line">
                    <div className="career-line-progress"></div>
                </div>

                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className={`career-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="career-content">
                            <h1>{job.title}</h1>
                            <h3>{job.company}</h3>
                            <h3>{job.date}</h3>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

