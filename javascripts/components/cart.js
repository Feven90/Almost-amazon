import {writeToDom} from '../helpers/util.js';

let projects = [
    {
        price: "$10.00"
    }];
const Cart = document.getElementById("cart");
const AddToCart = () => {
Cart.addEventListener("click", () => {
    let newString = '';
    newString += ` ${projects[0].price}` ;
    writeToDom(newString,"price");
})
}
export{AddToCart};
