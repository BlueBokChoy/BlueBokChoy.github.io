import BaseWidget from "../BaseWidget/BaseWidget";

import "./PfpWidget.css";


export default function PfpWidget({
    image,
    name,
    role
}) {


    return (

        <BaseWidget className="pfp-widget">


            <img
                className="pfp-image"
                src={image}
                alt={name}
            />


            <div className="pfp-info">

                <h2>
                    {name}
                </h2>


                <p>
                    {role}
                </p>

            </div>


        </BaseWidget>

    );

}