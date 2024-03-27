"use server"

export const getProducts : () => Promise<IProduct[]> = async () => {
    try {
        const response = await fetch("http://localhost:5000/products")
        const products = await response.json()
        return products
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getCarts : () => Promise<IProduct[]> = async () => {
    try {
        const response = await fetch("http://localhost:5000/carts")
        const carts = await response.json()
        return carts
    } catch (error) {
        console.log(error)
        return null
    }
}