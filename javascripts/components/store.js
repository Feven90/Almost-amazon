import {writeToDom} from "../helpers/util.js";

let projects = [
    {
        screenshot: "http://www.childrensbookbank.com/wp-content/uploads/2017/04/CBB_Illustrations_Books_1.png",
    }];
    const info = () => {
        let newString = '';
        newString += `<img id = "image" src = ${projects[0].screenshot}>`;
                writeToDom(newString,"amazon");
        }
export{info};

