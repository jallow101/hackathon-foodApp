import { React, useEffect, useState } from "react";
import firebase from "../firebase";
import { useStateValue } from "../StateProvider";
// import { useParams } from "react-router-dom";
import {
  Text,
  Image,
  ThemeProvider,
  Button,
  Row,
  Col,
  Notification,
  Icon
} from "atomize";

const theme = {
  shadows: {
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)",
    shadow: "0 16px 24px -2px rgba(0, 0, 0, 0.08)",
  },
};

const Food = () => {
  //const { id } = useParams();

 const [{ cart, alert, success }, dispatch] = useStateValue();
 
  // useEffect(() => {
  //   localStorage.setItem("local_cart", JSON.stringify(cart));

  // }, [cart]);

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getMenu = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection("resto_menu")
        .get();

      setFoods(data.docs.map((doc) => ({ ...doc.data(), ids: doc.id })));

      //console.log("here is the data "+(groupId));
    };

    getMenu();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Text
          fontFamily="primary"
          textSize="display2"
          align="center"
          textAlign={{ xs: "center", lg: "center" }}
          m={{ xs: "3rem", md: "0rem" }}
        >
          Foods
        </Text>
        <Row>
          {foods.map((food) => {
            const addToCart = () => {
              dispatch({
                type: "ADD_TO_CART",
                item: {
                  id: food.ids,
                  title: food.name,
                  price: food.price,
                  image: food.image,
                  quantity: 1,
                },
              });
            };

            const setFalse = () => {
              console.log("Trigger to change alert to false");
              dispatch({
                type: "Hide_Alert",
              });
            };

            const setSuccess = () => {
              console.log("Trigger to change success alert to false");
              dispatch({
                type: "Hide_Success",
              });
            };
            return (
              <Col size={{ xs: "12", md: "4" }} key={food.ids}>
                <div className="col-4 col-md-3 col-sm-6 col-xl-3">
                  <div className="fcard">
                    <Image
                      src={food.image}
                      cursor="pointer"
                      rounded="xs"
                      h="14rem"
                    />
                    <div className="card-body">
                      <Text
                        fontFamily="primary"
                        textSize="large"
                        align="center"
                        textAlign={{ xs: "center", lg: "center" }}
                        m={{ xs: "0.2rem", md: "0.4rem" }}
                      >
                        {food.name}
                      </Text>
                      <div
                        className="card-price text-center text-danger small text-wrap"
                        id="price"
                      >
                        <Text
                          fontFamily="primary"
                          textSize="small"
                          align="center"
                          textAlign={{ xs: "center", lg: "center" }}
                          m={{ xs: "0.2rem", md: "0.4rem" }}
                        >
                          D {food.price}
                        </Text>
                      </div>
                      <Button
                        h="2rem"
                        textSize="body"
                        textColor="#dc3545"
                        hoverTextColor="white"
                        bg="white"
                        hoverBg="#dc3545"
                        border="1px solid"
                        borderColor="#dc3545"
                        hoverBorderColor="#dc3545"
                        w={{ xs: "100%", md: "100%" }}
                        align={{ xs: "center", lg: "center" }}
                        onClick={addToCart}
                      >
                        Add to cart
                      </Button>
                      <Notification
                        bg="info100"
                        textColor="info800"
                        isOpen={alert}
                        onClose={setFalse}
                        prefix={
                          <Icon
                            name="Info"
                            color="info800"
                            size="18px"
                            m={{ r: "0.5rem" }}
                          />
                        }
                      >
                        Already in Cart
                      </Notification>

                      <Notification
                        bg="warning100"
                        textColor="warning800"
                        isOpen={success}
                        onClose={setSuccess}
                        prefix={
                          <Icon
                            name="Alert"
                            color="warning800"
                            size="18px"
                            m={{ r: "0.5rem" }}
                          />
                        }
                      >
                        Added To Cart
                      </Notification>

                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </ThemeProvider>
    </>
  );
};

export default Food;
