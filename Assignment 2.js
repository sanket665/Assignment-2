//Assignment 2


//Question - 1

for (i=1; i<=100; i++)
{
  a = i / 15
  b = i / 3
  c = i / 5
  if (Number.isInteger(a))
  {
    console.log("FizzBuzz")
  }
  else if (Number.isInteger(b)){
    console.log("Fizz")
  }
  else if (Number.isInteger(c)){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
}

//Question - 2

let str = "madam knows malayalam well "
let str1 = "", str2 = ""
  for (t of str) {
    if (t != " ") {
      str2 = str2 + t
      str1 = t + str1
    }
    else {
      if (str1 == str2) console.log(str1)
      str1 = ""
      str2 = ""
    }
  }

