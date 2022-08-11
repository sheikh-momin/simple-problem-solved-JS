// Problem:1 radianToDegree
function radianToDegree(radian){
    if(typeof radian === 'number'){
    let degree = radian * (180 / Math.PI);
    return degree.toFixed(2);
    }
    else{
        return "Enter a valid number!";
    }
    
}
degreeOrNot = radianToDegree(true);
console.log(degreeOrNot)



// Problem:2  isJavaScriptFile 
// function  isJavaScriptFile (string){
//     if(typeof string === 'string'){
//     if (string.endsWith(".js")){
//         return true;
//     }else{
//         return false;
//     }}
//     else{
//         return "Enter a valid string!";
//     }
// }
// fileCheck = isJavaScriptFile("app.js")
// console.log(fileCheck);



// Problem 3: oilPrice
// function oilPrice(diesel, petrol, octane){
//     let octanePrice = 135;
//     let dieselPrice = 114;
//     let petrolPrice = 130;

//     if(typeof diesel=== 'number' && typeof petrol=== 'number' && typeof octane=== 'number'){
//         totalOilPrice = (octanePrice*octane) + (dieselPrice*diesel) + (petrolPrice*petrol);
//         return totalOilPrice;
//     }else{
//         return "Enter valid numbers!";
//     }
// }
// totalCost = oilPrice(30,20,10)
// console.log(totalCost)



// Problem 4: publicBusFare
// function publicBusFare(totalPeople){
//     let reservedBus = totalPeople % 50;
//     let microBus = reservedBus % 11;
//     let restPeople = microBus;
//     let publicBusFare = 250;
//     if(typeof totalPeople === 'number'){
//         let totalPublicBusFare = restPeople * publicBusFare;
//         return totalPublicBusFare;
//     }else{
//         return "Enter a valid number!";
//     }
// }
// totalFare = publicBusFare(50);
// console.log(totalFare)




// Problem 5: isBestFriend
// let obj1={
//     name: 'abul',
//     friend: 'babul'
// }
// let obj2={
//     name: 'babul',
//     friend: 'abul'
// }
// function isBestFriend(friend1, friend2){
//     if (typeof friend1 === 'object' && typeof friend2 === 'object'){
//         if (friend1.name == friend2.friend && friend2.name == friend1.friend){
//             return true;
//         }else{
//             return false;
//     }}else{
//         return "Enter a valid object!";
//     }
    
// }
// friendsStatus = isBestFriend(obj1,obj2);
// console.log(friendsStatus);


