import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../../Redux/action";

export default function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.handleCart);
  console.log(product);

  const handleButtonMinus = (product) => {
    dispatch(delCart(product));
  };

  const handleButtonPlus = (product) => {
    dispatch(addCart(product));
  };

  // const totalPrice = () => {
  //   let count = 0;
  //   product.map((el) => (count += el.price * el.qty));
  //   return count;
  // };

  const totalPrice = () => {
    return product.reduce((acc, elm) => acc + elm.price * elm.qty, 0);
  };

  return (
    <>
      {product.length > 0 ? (
        <>
          {product.map((product, ind) => (
            <div
              className="mt-3 text-center pb-2 border-bottom border-secondary container my-5 py-5"
              key={"cart".concat(ind)}
            >
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                    {product.qty} x ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleButtonMinus(product)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handleButtonPlus(product)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mb-4">
            <b>Total price</b>{" "}
            <b className="lead fw-bold">$ {Math.ceil(totalPrice())}</b>
          </div>
        </>
      ) : (
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center mt-2">
            Your cart is empty.
          </h1>
        </div>
      )}
    </>
  );
}
