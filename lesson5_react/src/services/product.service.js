import axios from "axios";

export const ProductService = {
    async getAllProducts() {
        return axios.get("https://fakestoreapi.com/products")
    },

    async getProduct(id) {
        return axios.get(`https://fakestoreapi.com/products/${id}`)
    }
}