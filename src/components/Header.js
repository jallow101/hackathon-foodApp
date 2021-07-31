import { Image, Button, Icon, Div } from "atomize";
// import logo from "../assets/chopshop.webp";
// import Modal from "./Modal";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ cart }] = useStateValue();
  //console.log("The header cart is "+cart);

  return (
    <div className="navbar">
      <div className="sideIcon">{/* <Sidebar /> */}</div>

      <div className="logo">hACKtHEwEAKeND</div>

      <div>
        <ul className="header_last">

        <Div d="flex">
        <Link to={"/cart"}>
              <Button
              
                suffix={
                  <Icon
                    name="Store"
                    size="16px"
                    color="white"
                  />
                  
                  
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
              ><div className="count_icon">{cart?.length}</div>
              
              
               
              </Button>
              </Link>
            </Div>

{/* 
          <Link to={"/cart"}>
            <div className="cart_icon">
              <Icon name="Bag" size="40px" color="yellow" m={{ l: "1rem" }}>
                Cart
              </Icon>
              <div className="count_icon">{cart?.length}</div>
            </div>
          </Link> */}

          <div>
            {/* <Modal /> */}
            <Div d="flex">
              <Button
                suffix={
                  <Icon
                    name="UserSolid"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
              >
               Signin
              </Button>
            </Div>
          </div>
          {/* <div>Welcome User</div> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
