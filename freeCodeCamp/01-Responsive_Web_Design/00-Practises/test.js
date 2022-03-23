let obj = { gift: "pony", pet: "kitten", bed: "sleigh" };

function checkObj(obj, checkProp) {
    // Only change code below this line
    /* console.log(obj);
    console.log(checkProp);
    console.log(obj.hasOwnProperty(checkProp));
    console.log(obj[checkProp]);*/

    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";

    // Only change code above this line
}

console.log(checkObj(obj, "gift"));
