
const underScore = (number) => {
    
    const stringNumber = number.toString().split("")

    var numbers = [];

    for (var i = 0; i < stringNumber.length; i++) {

      if (stringNumber[i] % 2 == 0 && stringNumber[i + 1] % 2 == 0) {

        numbers.push(stringNumber[i] + "_")
      }}
    
  
    return numbers.join("")
  }
  
  console.log(underScore(1432677667))