import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";

const Pages = [
    {
        index: true,
        element: <HomePage />
    },
    {
        path: "/cart",
        element: <CartPage />
    }
]

export default Pages;