import { Link } from "react-router-dom";
import "./Product.css";
const Product = (props) => {
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
        </div>
        <div className="product__rating">
          {Array(1)
            .fill()
            .map((v, i) => (
              <p>🌟</p>
            ))}
        </div>
        <img src={props.image} alt="Img Not Available" />
        <Link to="/checkout">
          <button>Add to Basket</button>
        </Link>
      </div>
    </>
  );
};
export default Product;
