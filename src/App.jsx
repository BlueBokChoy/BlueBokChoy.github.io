import "./App.css";

import TextWidget from "./components/TextWidget/TextWidget";
import PfpWidget from "./components/PfpWidget/PfpWidget";
import PhotoWidget from "./components/PhotoWidget/PhotoWidget";


export default function App(){

    return (

        <main className="container">
            <div className="left-container">
                <PfpWidget 
                    image = "src\images\roypfp.png"
                    name = "Roy"
                    role = "IB Student"
                />
            </div>
            <div className="center-container">

                <TextWidget
                    title="My Title"
                    description="This is some text."
                />

                <PhotoWidget 
                    src = "src\images\placeholder.png"
                    alt = "src\images\placeholder.png"
                    caption = "Placeholder!"
                />
            </div>
            <div className="right-container"></div>
        </main>

    );

}