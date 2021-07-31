import React from "react";
import { Input, Row, Col, Icon, Textarea, Button, Text } from "atomize";
import "../css/checkout.css";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();

  let total = cart?.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  return (
    <>
      <Row>
        <Col size={{ xs: "12", md: "8" }}>
          <div className="checkout_form card">
            <Row>
              <h2>Personal Details</h2>
            </Row>
            <Row>
              <Col size={{ xs: "12", md: "6" }}>
                <Text textSize="display6" m={{ xs: "1rem", md: "0.5rem" }}>
                  Name
                </Text>
                <Input
                  placeholder="Name"
                  h="2rem"
                  m={{ xs: "1rem", md: "0.5rem" }}
                  borderColor="info700"
                  hoverBorderColor="warning700"
                />
              </Col>
              <Col size={{ xs: "12", md: "6" }}>
                <Text textSize="display6" m={{ xs: "1rem", md: "0.5rem" }}>
                  Surname
                </Text>
                <Input
                  placeholder="Surname"
                  h="2rem"
                  m={{ xs: "1rem", md: "0.5rem" }}
                />
              </Col>
            </Row>

            <Row>
              <Col size={{ xs: "12", md: "6" }}>
                <Text textSize="display6" m={{ xs: "1rem", md: "0.5rem" }}>
                  Mobile No:
                </Text>
                <Input
                  placeholder="Phone Number"
                  h="2rem"
                  m={{ xs: "1rem", md: "0.5rem" }}
                  borderColor="info700"
                  hoverBorderColor="warning700"
                />
              </Col>

              <Col size={{ xs: "12", md: "6" }}>
                <Text textSize="display6" m={{ xs: "1rem", md: "0.5rem" }}>
                  Address
                </Text>
                <Input
                  placeholder="Address"
                  h="2rem"
                  m={{ xs: "1rem", md: "0.5rem" }}
                  suffix={
                    <Icon
                      name="Location"
                      size="20px"
                      color="warning700"
                      cursor="pointer"
                      pos="absolute"
                      top="50%"
                      right="1rem"
                      transform="translateY(-50%)"
                      col
                    />
                  }
                />
              </Col>
            </Row>

            <Row>
              <Col size={{ xs: "12", md: "6" }}>
                <Text textSize="display6" m={{ xs: "1rem", md: "0.5rem" }}>
                  Email
                </Text>
                <Input
                  placeholder="Email Address"
                  h="2rem"
                  m={{ xs: "1rem", md: "0.5rem" }}
                  borderColor="info700"
                  hoverBorderColor="warning700"
                />
              </Col>
              <Col size={{ xs: "12", md: "6" }}>
                <Text textSize="display6" m={{ xs: "1rem", md: "0.5rem" }}>
                  Branch
                </Text>
                <Input
                  placeholder="Order Pickup Branch"
                  h="2rem"
                  m={{ xs: "1rem", md: "0.5rem" }}
                >
                    <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                    </Input>
              </Col>
            </Row>

            <Row>
              <Col size="12">
                <Textarea
                  placeholder="Comment(s)"
                  m={{ xs: "1rem", md: "0.5rem" }}
                />
              </Col>
            </Row>

            <Row>
              <Col size="12">
                <Button
                  m={{ xs: "1rem", md: "1rem" }}
                  w="100%"
                  prefix={
                    <Icon
                      name="BookmarkSolid"
                      pos="absolute"
                      top="50%"
                      left="1rem"
                      transform="translateY(-50%)"
                      size="15px"
                      color="white"
                      m={{ r: "0.5rem" }}
                    />
                  }
                  bg="warning700"
                  hoverBg="warning800"
                  rounded="xs"
                  p={{ l: "3rem", r: "2rem" }}
                  m={{ b: "2rem" }}
                >
                  Place Order
                </Button>
              </Col>
            </Row>
          </div>
        </Col>

        <Col size={{ xs: "12", md: "4" }}>
          <div className="checkout_summary card">
            <h2>Order Summary</h2>
            <h4>{cart.length} Items</h4>

            {cart.map((fo0d) => {
              return (
                <div className="checkout_items">
                  <Row>
                    <Col>
                      <div>{fo0d.title}</div>
                    </Col>

                    <Col>
                      <div>{fo0d.quantity} Pcs</div>
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <div className="checkout_total">
              <div>
                <strong>Total</strong>
              </div>
              <div>
                <strong>D {total}.00</strong>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Checkout;
