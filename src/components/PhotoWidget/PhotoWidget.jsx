import BaseWidget from "../BaseWidget/BaseWidget";

import "./PhotoWidget.css";


export default function ImageWidget({
    src,
    alt,
    caption
}) {


    return (

        <BaseWidget className="image-widget">


            <img
                src={src}
                alt={alt}
            />


            {
                caption &&
                <p>{caption}</p>
            }


        </BaseWidget>

    );

}