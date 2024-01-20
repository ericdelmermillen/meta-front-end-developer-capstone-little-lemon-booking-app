import "./Card.scss";

const Card = ( { headerText, cardImg, cardImgAlt, cardTextOne, cardTextTwo, cardTextThree } ) => {
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
          {cardTextOne}
        </p>
        <p className="card__info">
          {cardTextTwo}
        </p>
        <p className="card__info">
          {cardTextThree}
        </p>
      </div> 
    </>
  )};

export default Card;