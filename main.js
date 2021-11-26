const data = [
  {
    id: Math.random(),
    title: "test1",
    description: "this is Practice session one",
    age: 10,
  },
  {
    id: Math.random(),
    title: "test2",
    description: "this is Practice session Two",
    age: 15,
  },
  {
    id: Math.random(),
    title: "test3",
    description: "this is Practice session Three",
    age: 18,
  },
  {
    id: Math.random(),
    title: "test4",
    description: "this is Practice session Four",
    age: 20,
  },
];

const listOfData = (data) => {
  return data.map((d) => {
    return {
      id: d.id,
    };
  });
};
// console.log(listOfData(data))

const filterData = (data) => {
  return data
    .filter((d) => {
      return d.age > 10;
    })
    .map((i) => {
      return {
        id: i.id,
      };
    });
};
//  console.log(filterData(data));
const findMethod = (data) => {
  return data.find((d, index) => {
    return d.title === "test4";
  });
};

// console.log(findMethod(data));

const inputEl = document.querySelector("input");
console.log(inputEl);

function getChecked() {
  const checkBox = document.getElementById("check1").value;
  console.log(checkBox);
}

const submitHandler = document
  .querySelector("button")
  .addEventListener("click", () => {
    const inputElement = document.getElementsByTagName("input")[1];
    console.log(inputElement.value);
  });
const inputValue = document.querySelector("input")[0];
console.log(inputValue);

const json =
  '{"result":true, "count":42, "name" : "shyam", "age" : 30, "address" : {"plotNo" : 4545, "dist" : "nagarKurnool"}}';
const obj = JSON.parse(json);
console.log(obj.address.plotNo);

document.getElementById(
  "information"
).innerHTML = `<p>${obj.address.plotNo}</p> <p>${obj.address.dist}</p> <p>${obj.result}</p>`;

// const houseObj = {
//   name : "shyam",
//   age : 27,
//   address : {
//     dist : {
//       name : "hyderabad"
//     }
//   }
// }

// const shallowCopy = JSON.parse(JSON.stringify(houseObj))
// shallowCopy.address.name = "rangareddy"
// console.log(shallowCopy)
// console.log(houseObj)

// json - object ------> JSON.parse(obj)

// object - json -------> JSON.stringify(obj)

// Prime Number
const numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeArray = numArray.filter((item) => {
  for (let i = 2; i <= Math.sqrt(item); i++) {
    if (item % i === 0) {
      return false;
    }
    return true;
  }
});

console.log(primeArray);

// Base with Power value
console.log(Math.pow(3, 10));

const outputValue = (base, power) => {
  let output = 1;
  let i = 1;
  while (i <= power) {
    output = output * base;
    i++;
  }
  console.log(output);
};
outputValue(3, 10);

//  Sorting an arry without using inbuilt methods
const arr = [200, 100, 2, 3, 4, 5, 6, 4, 8, 9, 2, 8, 6, 3];

const soretedArray = arr.reduce((acc, cur) => {
  let index = 0;

  while (index < arr.length && cur < acc[index]) {
    // console.log(acc[index]);
    index++;
  }
  // console.log(`after while`);
  acc.splice(index, 0, cur);

  // console.log(acc);
  return acc;
}, []);

console.log(soretedArray);

// Reverse an Array

const arrayReverse = [1, 2, 55, 66, 7, 9, 12, 34];

//  console.log(arrayReverse.reverse())

let revArray = [];

for (let i = arrayReverse.length - 1; i >= 0; i--) {
  revArray.push(arrayReverse[i]);
}
console.log(revArray);

let j = 1;
while (j <= 10) {
  // console.log(j);
  j++;
}

let value = 9;

switch (value) {
  case 5:
    console.log(`value is `, value);
    break;
  case 4:
    console.log(value);
    break;
  default:
    console.log(`default is working`);
    break;
}

let longText =
  "I am going to attend interviewnssssssssssssssssssssssss Tomorrowqqqqqqqq";

let convertedArray = longText.split(" ");

// console.log(convertedArray)

const converted = (array) => {
  let longestWord = "";
  for (let word of array) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(converted(convertedArray));

// Reverse a String

const revString = (str) => {
  const string = str.split("");
  let rev = [];
  for (let i = string.length - 1; i >= 0; i--) {
    rev.push(string[i]);
  }
  return rev.join("");
};

console.log(revString("hello"));

// Capitalize the First Leeter in word

const capi = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
};

console.log(capi("i love Javascript and reactjs"));

//  Pallindrom

const pallindrom = (str) => {
  const reverString = str.split("").reverse();
  return str === reverString.join("") ? "isPallindrom" : "not a Pallindrom";
};

console.log(pallindrom("asdfadfkasjfkjas"));

// Fizz Buzz
const fizz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

// console.log(fizz())

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
//Complexity: O(n)

const ar = [1, 6, 7, 2, 1, 5, 6, 9, 7];
let target = 8;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(ar, target));

const h = {
  plotNo: 30,
};

const { plotNo, address = "hyderabad" } = h;
console.log(address);

const revInteger = (x) => {
  console.log(x.split(""));
};

// const x = -10;
// let y = parseInt(x.toString().split(" ").reverse().join(" "));
// console.log(y)

// var isPalindrome = function(x) {
//   const revArray  = parseFloat(x.toString().split(" ").reverse().join(" "));
//   console.log(revArray)
//   if(revArray === x){
//       return true;
//   }else {
//      return false;
//   }

// };
// console.log(isPalindrome(x))

const duplicates = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const dup = (arrNum) => {
  let output = 0;
  let OutputArray = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (OutputArray.length === (0 && undefined)) {
      OutputArray.push(arrNum[i]);
    } else {
      for (let j = 0; j < OutputArray.length; j++) {
        if (OutputArray[j] === arrNum[i]) {
          console.log(OutputArray[j], arrNum[i]);
          output += 1;
          // console.log(output)
          OutputArray.push();
        } else {
          OutputArray.push(arrNum[i]);
        }
      }
    }
  }
  return OutputArray;
};

console.log(dup(duplicates));

// Roman to integer
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const romanToInteger = (roman) => {
  // lcd -> 50+100500
  // II -> 1+1
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const reverseArr = roman.split("").reverse();
  let level = 0;
  let sum = 0;
  reverseArr.forEach((item) => {
    const newLevel = dic[item];
    //  1              5
    // 1 >= 0         1 >=5 //false
    // Sum = 1
    // level 1
    if (newLevel >= level) {
      sum += newLevel;
      level = newLevel;
      console.log(`condition`, level, sum, newLevel);
    } else {
      console.log(`condition`, level, sum, newLevel);
      sum -= newLevel;
    }
  });
  return sum;
};
console.log(romanToInteger("IV"));

let nameOfThePerson = "Shyam Singh Nevula";
const reverName = nameOfThePerson.split(" ").reverse().join(" ");
console.log(reverName);

const arrNum = [1];
const arraySorted = arrNum.sort((a, b) => b - a);

// const o = {
//   name: "shyam singh Nevula",
//   address: "Hyderabad",
//   testing: "testing",
// };
// for (let operations in o) {
//   console.log(`From Object looping`, o[operations]);
// }

// Longest word in th Array
// if there is only one string pass it in string otherwise array

// const longest = (str) => {
//   const wordArray = str.toLowerCase().match(/[a-z0-9]+/g)

//   const sortedArray = wordArray.sort((a, b) => b.length - a.length);

//   const longestWord = sortedArray.filter((word) => {
//     return word.length === sortedArray[0].length
//   }
//   );
//   if (longestWord.length === 1) {
//     return longestWord[0];
//   } else {
//     return longestWord;
//   }
// };

// console.log(longest("hello there"))

// Chunk an Array by given target

const questionArray = [1, 5, 9, 7, 8, 7, 4, 5, 6, 2, 3, 5, 8, 7, 8, 8];

console.log(questionArray.slice(0, 2));

const chunkedArray = (arr, len) => {
  let chArray = [];

  let i = 0;

  while (i < arr.length) {
    // console.log(arr.splice(i, i + len))
    chArray.push(arr.slice(i, i + len));
    i = i + len;
  }

  return chArray;
};

console.log(chunkedArray(questionArray, 3));

const house = {
  value: "test",
  test: function date() {
    console.log(`this is from test inside house`);
  },
};

house.test();

const hh = JSON.parse(JSON.stringify(house));

console.log("Shyam");
