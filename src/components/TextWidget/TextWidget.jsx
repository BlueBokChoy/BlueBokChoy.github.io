import BaseWidget from "../BaseWidget/BaseWidget";

import "./TextWidget.css";


export default function TextWidget({
    title,
    description
}) {


    return (

        <BaseWidget className="text-widget">


            <h2>
                {title}
            </h2>


            <p>
                {description}
            </p>


        </BaseWidget>

    );

}