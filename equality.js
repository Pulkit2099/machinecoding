// ------. Null और Undefined---------------
console.log(null == undefined);  // true

console.log(null === undefined); // false


// Rule: null और undefined सिर्फ एक-दूसरे के साथ == में equal होते हैं। किसी दूसरे value के साथ नहीं।

console.log(null == 0);        // false
console.log(null == false);    // false
console.log(undefined == 0);   // false
console.log(undefined == "");  // false


// 5. Array और String
console.log([] == "");       // true
console.log([1] == "1");     // true
console.log([1, 2] == "1,2"); // true
// Rule: Array primitive value में convert होता है। आमतौर पर string representation इस्तेमाल होती है।

console.log([] == false);  // true
console.log([] === false); // false

console.log([0] == false); // true
console.log([1] == true);  // true

---------------
// 7. Array vs Array
console.log([] == []);       // false
console.log([] === []);      // false

console.log([1] == [1]);     // false
console.log([1] === [1]);    // false


// Rule: दोनों अलग-अलग objects हैं, इसलिए उनकी references अलग हैं।

// ---------------------
const a = {};
const b = a;

console.log(a == b);  // true
console.log(a === b); // true


// क्योंकि दोनों एक ही object को reference कर रहे हैं।
// ------------------------------------------

// 9. NaN Special Case
// Frequently asked
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false


// यहाँ तक कि NaN खुद के बराबर भी नहीं होता।

// इसे check करने के लिए:
console.log(Number.isNaN(NaN)); // true

// -------------------

// . Infinity
console.log(Infinity == Infinity);  // true
console.log(Infinity === Infinity); // true

console.log(-Infinity == Infinity); // false
// ------------