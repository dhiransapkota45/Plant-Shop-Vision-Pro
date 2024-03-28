"use server";

// these apis are used to fetch data from the server
export const getProducts: () => Promise<IProduct[]> = async () => {
  try {
    const response = await fetch("http://localhost:5000/products");
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCarts: () => Promise<IProduct[]> = async () => {
  try {
    const response = await fetch("http://localhost:5000/cart", {
      cache: "no-store",
    });
    const carts = await response.json();
    return carts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addCart: (product: IProduct) => Promise<IProduct | string> = async (
  product
) => {
  try {
    const cartdata = await getCarts();
    if (cartdata?.find((cart) => cart.id === product.id)) {
      return  "Product already in cart" ;
    }
    const response = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const cart = await response.json();
    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeCart: (id: string) => Promise<IProduct> = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });
    const cart = await response.json();
    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
};
