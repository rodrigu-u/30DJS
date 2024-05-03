/* 1 */
let challenge = "30 Days Of JavaScript";

/* 2 */
console.log(challenge);

/* 3 */
console.log(challenge.length);

/* 4 */
console.log(challenge.toUpperCase());

/* 5 */
console.log(challenge.toLowerCase());

/* 6 */
console.log(challenge.substring(3, 7));

/* 7 */
console.log(challenge.substr(3, 18));

/* 8 */
console.log(challenge.includes("Script"));

/* 9 */
console.log(challenge.split(""));

/* 10 */
console.log(challenge.split(" "));

/* 11 */
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split(", "));

/* 12 */
console.log(challenge.replace("JavaScript", "Python"));

/* 13 */
console.log(challenge.charAt(15));

/* 14 */
console.log(challenge.charCodeAt(11));

/* 15 */
console.log(challenge.indexOf("a"));

/* 16 */
console.log(challenge.lastIndexOf("a"));

/* 17 */
let phrase1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase1.indexOf("because"));

/* 18 */
console.log(phrase1.lastIndexOf("because"));

/* 19 */
console.log(phrase1.search("because"));

/* 20 */
let phrase2 = " 30 Days Of JavaScript    ";
console.log(phrase2.trim());

/* 21 */
console.log(challenge.startsWith("3"));

/* 22 */
console.log(challenge.endsWith("t"));

/* 23 */
console.log(challenge.match(/a/g));

/* 24 */
let phrase3 = "30 Days of";
let phrase4 = " Javascript";
console.log(phrase3.concat(phrase4));

/* 25 */
console.log(challenge.repeat(2));

/* 1 */
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

/* 2 */
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

/* 3 */
let n1 = "10";
let n2 = 10;
console.log(parseInt(n1) == n2);

/* 4 */
let n3 = parseFloat("9.8");
console.log(Math.ceil(n3) == n2);

/* 5 */
let word = "python, jargon";
console.log(word.includes("on"));

/* 6 */
let phrase5 = " hope this course is not full of jargon.";
console.log(phrase5.includes("jargon"));

/* 7 */
console.log(Math.floor(Math.random() * 101));

/* 8 */
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

/* 9 */
console.log(Math.floor(Math.random() * 256));

/* 10 */
let string1 = "JavaScript";
console.log(string1[Math.floor(Math.random() * string1.length)]);

/* 11 */
console.log("1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125");

/* 12 */
let phrase6 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phrase6.substr(30, 24));
