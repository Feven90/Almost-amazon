import { AddToCart } from "./components/cart.js";
import {info} from './store.js';

const initializeApp = () => {
   AddToCart();
   info();
}
initializeApp();


// let projects = [
//     {
//         screenshot: "https://i.ytimg.com/vi/nnTyf__NK6s/maxresdefault.jpg", 
//         price: "$10.00"
//     }];

//     const info = () => {
//     newString += `Image: <img id = "image" src = ${projects[i].screenshot} ${','}>`;
//             newString += `Description: ${projects[i].description} ${','}` ;
//     }
// AddToCart();