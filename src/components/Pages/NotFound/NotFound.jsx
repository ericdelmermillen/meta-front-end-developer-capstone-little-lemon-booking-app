import "./NotFound.scss";
import notFoundBoy from "../../../assets/notFound-boy.png";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <div className="notFound__content">
          <div className="notFound__pic">
            <img 
              className="notFound__boy"
              src={notFoundBoy} alt="" 
            />
            <h1 className="notFound__header">Sorry...</h1>
            <h1 className="notFound__sub-header">Page Not Found</h1>
          </div>
        </div>
      </div>
    </>
  )};

export default NotFound;