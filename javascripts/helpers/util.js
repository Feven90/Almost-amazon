const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = `<h6>${stringToPrint}</h6>`;
};
export{writeToDom};