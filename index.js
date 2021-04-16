
import { fill, reverse, compact, arrayFromPairs } from "./src/Helpers.js";



const filed = fill(5, "d");
console.log("fill() - " + filed);

const reversedArray = reverse([1,2,3,4,5,6,7,8,9,10]);
console.log("reverse() - " + reversedArray);



const compactArray = compact([1, null, "", false, 4, undefined, 2]);
console.log("compact() - " + compactArray);


const fromPairs = arrayFromPairs([['a', 1], ['b', 2], ['c', 3]]);
console.log("arrayFromPairs() - ");
console.log(fromPairs);
