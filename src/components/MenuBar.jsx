import "./MenuBar.css";

export default function MenuBar() {

    const resumePath = "Ruoheng Chen Resume.pdf"; 

    const menuItems = ["Home", "Career", "Certs", "Resume", "Socials"];

    const sectionMap = {
        Home: "layout-hero",
        Career: "layout-career",
        Certs: "certs-resume",
        Socials: "layout-socials"
    };

    const handleNavigation = (item) => {
        if (item != "Resume") {
            const sectionId = sectionMap[item];

            window.location.hash = item;

            document.getElementById(sectionId)?.scrollIntoView({behavior: "smooth"});
        }
        else {
            window.open(resumePath, "_blank");
        }
};

    return (
        <div id="bar">
            <img
                src="\images\logo.svg"
                alt="Initials"
                id="initials"
            />

            {menuItems.map((item) => (
                <button
                    key={item}
                    className="button-menu"
                    onClick={() => handleNavigation(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}