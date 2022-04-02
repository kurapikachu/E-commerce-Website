import axiosClient from "../axiosClient"

class Product {
    getResource() {
        return '/products'
    }

    getAllProducts() {
        return axiosClient.get(this.getResource())
    }
}

const productAPI = new Product()
export default productAPI