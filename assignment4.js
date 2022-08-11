// Problem:1 radianToDegree
function radianToDegree(radian){
    if(typeof radian === 'number'){
    let degree = radian * (180 / Math.PI);
    return degree.toFixed(2);
    }
    else{
        return "Enter a valid radian number!";
    }
    
}
let degreeOrNot = radianToDegree(true);
console.log(degreeOrNot)



// Problem:2  isJavaScriptFile 
function  isJavaScriptFile (string){
    if(typeof string === 'string'){
    if (string.endsWith(".js")){
        return true;
    }else{
        return false;
    }}
    else{
        return "Enter a valid file name!";
    }
}
let fileCheck = isJavaScriptFile("app.js")
console.log(fileCheck);



// Problem 3: oilPrice
function oilPrice(diesel, petrol, octane){
    const octanePrice = 135;
    const dieselPrice = 114;
    const petrolPrice = 130;

    if(typeof diesel=== 'number' && typeof petrol=== 'number' && typeof octane=== 'number'){
        const totalOilPrice = (octanePrice*octane) + (dieselPrice*diesel) + (petrolPrice*petrol);
        return totalOilPrice;
    }else{
        return "Enter valid oil liter amount!";
    }
}
let totalCost = oilPrice(30,20,10)
console.log(totalCost)



// Problem 4: publicBusFare
function publicBusFare(totalPeople){
    const reservedBus = totalPeople % 50;
    const microBus = reservedBus % 11;
    const restPeople = microBus;
    const publicBusFare = 250;
    if(typeof totalPeople === 'number'){
        const totalPublicBusFare = restPeople * publicBusFare;
        return totalPublicBusFare;
    }else{
        return "Enter a valid passenger number!";
    }
}
let totalFare = publicBusFare(50);
console.log(totalFare)




// Problem 5: isBestFriend
const obj1={
    name: 'abul',
    friend: 'babul'
}
const obj2={
    name: 'babul',
    friend: 'abul'
}
function isBestFriend(friend1, friend2){
    if (typeof friend1 === 'object' && typeof friend2 === 'object'){
        if (friend1.name == friend2.friend && friend2.name == friend1.friend){
            return true;
        }else{
            return false;
    }}else{
        return "Enter a valid information of friends!";
    }
    
}
let friendsStatus = isBestFriend(obj1,obj2);
console.log(friendsStatus);


