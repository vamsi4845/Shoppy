import { Form, Button } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from "./Rating"
const Filters = () => {
    const { productDispatch, productState: { byStock, byFastDelivery, sort, byRating } } = CartState()
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="LowToHigh"
                    name="group1"
                    // type="checkbox"
                    id={`inline-1`}
                    onChange={() => productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "LowToHigh",
                    })}
                    checked={sort === "LowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="HighToLow"
                    name="group1"
                    // type="checkbox"
                    id={`inline-2`}
                    onChange={() => productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "HighToLow",
                    })}
                    checked={sort === "HigToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() => productDispatch({
                        type: "FILTER_BY_STOCK",
                    })}
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() => productDispatch({
                        type: "FILTER_BY_DELIVERY",
                    })}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating
                    rating={byRating}
                    onClick={(i) => productDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i + 1,
                    })}
                    style={{ cursor: "pointer" }}
                />
            </span>
            <Button
                variant="light"
                onClick={() =>
                    productDispatch({
                        type: "CLEAR_FILTERS",
                    })
                }
            >
                Clear Filters
            </Button>
        </div >
    );
};

export default Filters
