import React from "react";

const Card = ({ imgUrl, title, link, cardClass }) => {
    return(
        <a href={ link } className="cards">
            <div className={ cardClass }>
                <img src={ imgUrl } alt={ title } />
                <span>{ title }</span>
            </div>
        </a>
    )
};

export default Card;