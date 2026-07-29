import "./Hero.css";

export default function Hero() {

    const emailAddress = "royc0133@gmail.com"; 
    const resumePath = "Ruoheng Chen Resume.pdf"; 

    const handleContact = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const handleResume = () => {
        window.open(resumePath, "_blank");
    };

    return (
        <section id="layout-hero">
            <img src="/images/roypfp.png" alt="Me" id="pfp"></img>     
            <div id="about-me">
                <h1 className="big-text">RUOHENG CHEN</h1>
                <h2>Student, Programmer, Geographer</h2>
                <b>Hello, I'm Ruoheng Chen. But, you can call me Roy. Welcome to my portfolio! I'm passionate about creating meaningful work, 
                    exploring new ideas, and continuously improving my skills.</b>
                <br></br>
                <button className="button-hero" onClick={handleContact}>CONTACT ME</button>
                <button className="button-hero" onClick={handleResume}>RESUME</button>
            </div>
        </section> 
    );

}