import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import Filters from "./Filters"
import { Container, Row, Col } from "react-bootstrap"
const Home = () => {
    const { state: { products }, productState: { byStock, byFastDelivery, sort, byRating, searchQuery } } = CartState()

    const transformProducts = () => {
        let sortedProducts = products

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "LowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
        }

        return sortedProducts;
    }
    return (
        <div className="home">
            <Filters />
            <div className="productContainer ">
                {transformProducts().map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id} />
                })}
            </div>
        </div>
    )
}

export default Home
