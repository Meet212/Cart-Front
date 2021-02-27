import {environment} from "src/environments/environment"
export const baseUrl=environment.production?'https://api.shoppingCart.com':"http://localhost:3000";
export const productsUrl=baseUrl + '/products'
export const cartUrl= baseUrl +'/carts'
export const wishlistUrl=baseUrl +'/whishlist'