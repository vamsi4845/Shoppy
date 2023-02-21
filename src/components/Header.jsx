import { Badge, Button, Container, Dropdown, Nav, Navbar, FormControl, Figure } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png"
import "./styles.css"
import { CartState } from '../context/Context';
const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState()
    return (
        <Navbar bg="dark" sticky="top" variant='dark' style={{ height: 80 }}>
            <Container>
                <Navbar.Brand >
                    <Link to="/">
                        <Figure><Figure.Image style={{ width: 180, height: 65, paddingTop: 20 }} alt="100x50" src={logo} /></Figure>
                    </Link>
                </Navbar.Brand>
                {useLocation().pathname.split("/")[1] !== "cart" && (
                    <Navbar.Text className="search">
                        <FormControl
                            type="search"
                            placeholder="Search a product..."
                            className="m-auto"
                            aria-label="Search"
                            onChange={(e) => {
                                productDispatch({
                                    type: "FILTER_BY_SEARCH",
                                    payload: e.target.value,
                                });
                            }}
                        />
                    </Navbar.Text>
                )}
                <Nav>
                    <Dropdown alignRight >
                        <Dropdown.Toggle variant="success">
                            <ShoppingCartIcon color="white" fontSize="25px" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>₹ {prod.price}</span>
                                            </div>
                                            <DeleteIcon
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }
                                            />
                                        </span>
                                    ))
                                    }
                                    < Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>

                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty</span>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    )
}

export default Header
