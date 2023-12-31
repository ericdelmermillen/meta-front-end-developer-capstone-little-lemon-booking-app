import "./Card.scss";

const Card = ( { headerText, cardImg, cardImgAlt, cardText } ) => {
  return (
    <>
     <div className="card">
        <h3 className="card__header">
            {headerText}
        </h3>
        <img 
          className="card__img" 
          src={cardImg} 
          alt={cardImgAlt} />
        <p className="card__info">
          {cardText}
        </p>
      </div> 
    </>
  )};

export default Card;