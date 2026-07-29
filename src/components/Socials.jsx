import "./Socials.css";
import { useState } from "react";

import {
    FaGithub,
    FaLinkedin,
    FaDiscord,
    FaMapMarkerAlt,
    FaDev
} from "react-icons/fa";

import {
    MdEmail,
    MdPhone
} from "react-icons/md";

export default function Socials() {

    const [showAlert, setShowAlert] = useState(false);

    const copyDiscord = () => {
        navigator.clipboard.writeText("blblob");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2500);
    };

    return (
        <>
            {showAlert && (
                <div className="custom-alert">
                    <span>Discord username copied!</span>
                    <button onClick={() => setShowAlert(false)}>
                        OK!
                    </button>
                </div>
            )}

            <section id="layout-socials">
                <div className="socials-header">
                    <h1 className="big-text">Socials</h1>
                    <h2>I'm always open to proposals and opportunities.</h2>
                </div>

                <div className="social-card">
                    <div className="contact-row">

                        <a
                            className="button-contact"
                            href="mailto:royc0133@gmail.com"
                        >
                            <MdEmail />
                            Email
                        </a>

                        <a
                            className="button-contact"
                            href="tel:+14169061417"
                        >
                            <MdPhone />
                            Phone
                        </a>

                    </div>

                    <p className="location">
                        <FaMapMarkerAlt />
                        Markham, Ontario
                    </p>

                    <div className="divider" />

                    <div className="social-links">

                        <a
                            className="button-contact"
                            href="https://www.linkedin.com/in/ruoheng-chen-a22580362/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <a
                            className="button-contact"
                            href="https://github.com/BlueBokChoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            className="button-contact"
                            href="https://devpost.com/BlueBokChoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDev />
                            Devpost
                        </a>

                        <button
                            className="button-contact"
                            onClick={copyDiscord}
                        >
                            <FaDiscord />
                            Discord
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}