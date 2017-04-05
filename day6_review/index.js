function processData(input) {
  // input by \n
  let arr = input.split("\n");
  let even;
  let odd;

  arr.forEach((word) => {
    // if it is a number
    // is not a number
    // out
    if(!isNaN(word))
      return;

    // for each word, reset
    even = "";
    odd = "";

    // array from mean convert something to array
    // for reach
    Array.from(word).forEach((letter, index) => {
      // foreach with letter and index
      // 0 or mod 2
      if(index === 0 || index % 2 === 0) {
        // cat
        even += letter;
      } else {
        // cat
        odd += letter;
      }
    });

    // event cat
    // " " with odd
    console.log(even.concat(" ", odd));
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});





function processData(input) {
    let arr = input.split("\n"), even, odd;
    arr.forEach((word) => {
        even = ""; odd = "";
        if(!isNaN(word)) return;
        Array.from(word).forEach((letter, index) => {
            if(index === 0 || index % 2 === 0) {
                even += letter;
            } else {
                odd += letter;
            }
        });
        console.log(even.concat(" ", odd));
    });
}
