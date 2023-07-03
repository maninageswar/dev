// interface TakePhoto {
//     cameraMode:String,
//     filter:String,
//     burst:number
// }
// function  test(a:number,b:string):object{
//     return{
//         a,b
//     }
// }
// console.log(test(1,"sai"));
// export {}
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISILE"] = 0] = "AISILE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var hc = SeatChoice.AISILE;
console.log(hc);
