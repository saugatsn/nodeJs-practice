// console.log("Hello backend world!");
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(process.argv);
let args=process.argv;
console.log("Info: ")
for (let i=2;i<args.length;i++){
    console.log(args[i]);
}