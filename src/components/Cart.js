import React, {useEffect} from "react";
import { Icon, Button, Row, Col } from "atomize";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import {Link} from "react-router-dom";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  // var local_cart;
  console.log("type of the cart " + typeof(cart));

  // useEffect(() => {

  //   if(cart != ""){
  //     localStorage.setItem("local_cart", JSON.stringify(cart));
  //   }
    
  // }, [cart]);

  let total = cart?.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );


  // uncomment to store cart to the local storage (NB: change cart to "local_cart")

//   if(cart != ""){
//  // complete to store cart to local storage;
//   console.log("CART is "+ cart);
//   localStorage.setItem("local_cart",JSON.stringify(cart));

//   local_cart = localStorage.getItem("local_cart");
//   local_cart = JSON.parse(local_cart);
//   }
//   else{
   let  local_cart = localStorage.getItem("local_cart");
    local_cart = JSON.parse(local_cart);
//   }
 
 

  return (
    <>
      {cart?.length === 0 ? (
        <div className="cart_title">
          <h2>Shopping Carts Is Empty</h2>
        </div>
      ) : (
        <div className="cart_title">
          <h2>Shopping Cart</h2>
          <hr />
        </div>
      )}
      <Row>
        <Col size={{ xs: "12", md: "8" }} >
          {cart.map((food) => {
            const removeFromCart = () => {
              console.log("remove from cart clicked");
              dispatch({
                type: "REMOVE_FROM_CART",
                item: {
                  id: food.id,
                },
              });
            };

            const increment = () => {
              console.log("increment clicked");
              dispatch({
                type: "INCREASE_QUANTITY",
                item: {
                  id: food.id,
                  quantity: food.quantity,
                },
              });
            };

            const decrement = () => {
              console.log("decrement clicked");
              dispatch({
                type: "DECREASE_QUANTITY",
                item: {
                  id: food.id,
                  quantity: food.quantity,
                },
              });
            };

            return (
              <div  key={food.id}>
                <div className="cart_items">
                  <div>
                    <img className="cart_image" src={food.image} alt="food" />
                  </div>
                  <div className="cart_info">
                    <p> {food.title}</p>
                    <p>Lebanese Chicken Shawarama with Fries</p>
                    <p>
                      {" "}
                      D<strong> {food.price} </strong>
                    </p>

                    <div>
                      <div className="quantity_counter">
                        <div className="quantity_update">
                          <button onClick={decrement}>-</button>
                        </div>
                        <div>{food.quantity}</div>
                        <div className="quantity_update">
                          <button onClick={increment}>+</button>
                        </div>
                      </div>
                      <Button
                        prefix={
                          <Icon
                            name="DeleteSolid"
                            size="16px"
                            color="white"
                            m={{ r: "0.5rem" }}
                          />
                        }
                        // With Responsive Values
                        // m={{ xs: "3rem", md: "30px" }}
                        h={{ xs: "auto", md: "6vh" }}
                        w={{ xs: "100%", md: "100%" }}
                        pos={{ xs: 'static', lg: 'static' }}
                        bg="danger700"
                        hoverBg="warning800"
                        rounded="circle"
                        p={{ r: "0.5rem", l: "0.5rem" }}
                        shadow="3"
                        hoverShadow="4"
                        onClick={removeFromCart}
                      >
                        Remove{/* Remove from cart */}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Col>

        {cart?.length > 0 && (
          <Col size={{ xs: "12", md: "4" }}
          pos={{ xs: 'static', lg: 'static' }}>
            <div className="card" style={{ "margin-top": 10 + "px" }, { "position": "fixed" }, { "width": 80 + "%" }}>
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                {/* <p className="card-text">Food Items</p> */}
                <ul className="list-group list-group-flush items"></ul>
                <hr />
                <ul className="list-group list-group-flush">
                  <CurrencyFormat
                    renderText={(value) => (
                      <li className="list-group-item">
                        <div className="h4" style={{ float: "left" }}>
                          Total
                        </div>
                        <div
                          className="h4"
                          style={{ float: "left" }}
                          id="totalSummary"
                        >
                          {" "}
                        </div>
                        <strong>{value}</strong>
                      </li>
                    )}
                    decimalScale={2}
                    value={total}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix="D"
                  />
                </ul>

                <div>
                <Link to={'/checkout'}>
                  <Button
                    bg="warning700"
                    hoverBg="warning800"
                    rounded="circle"
                    w={{ xs: '100%', md: '100%' }}
                    p={{ r: "1.5rem", l: "1rem" }}
                    shadow="3"
                    hoverShadow="4"
                  >
                    Checkout
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Cart;
