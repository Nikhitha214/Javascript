// 1. extract first five letters from a string (' gfuh ieiuei ')

Str = ' gfuh ieiuei ';//13
trim = Str.trim();//'gfuh ieiuei/
// console.log(trim.length);11
console.log(trim.slice(0,5));//'gfuh '

// 2. get the length of a string and make it uppercase ('hduej dij')

Str1 = 'hduej dij';
console.log(Str1.length); //9
console.log(Str1.toUpperCase()); //HDUEJ DIJ


// 3. take a string, make it lowercase and trim it (' biji jdo ')

Str2 = ' BIJI JDO ';
Lower = Str2.toLowerCase();
console.log(Lower.trim());

// 4. replace specified word in a string ('', '')

Original ="Hello Nikhitha";
replace = Original.replace("Nikhitha","Shashti")
console.log(replace);

// 5. random statements in implicit coercion e.g. (89 + 'hello' + 90 / 9)

console.log('5' + 3); // '53'
console.log(5 + '3'); // '53'
console.log('5' - 3); // '2'
console.log('5' * 2); // '10'
console.log('10' / 2); // '5'
console.log('10' % 3); // '1'
console.log('hello' + 'Everyone' + 89);//'helloEveryone89'
console.log('hello' - 'all' + 89);//NaN
console.log('good morning' +94 );//good morning94
  
  console.log('5' == 5); // true
console.log(false == 0); // true
console.log(true == 1); // true
console.log('' == false); // true


