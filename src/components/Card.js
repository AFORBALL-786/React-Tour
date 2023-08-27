import { useState } from "react";

function Card({id, name, image, info, price,removeTour}) {

    const [readMore, SetReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,200)}...`;

    function readmoreHandler() {
        SetReadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-detail">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="tour-description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readMore ? 'Show Less' : `Read More`}
                </span>
            </div>

            <button onClick={() => removeTour(id)} className="red-btn">
                Not Interested
            </button>
        </div>
    );
}

export default Card;