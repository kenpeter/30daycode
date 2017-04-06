let theArray = [];

// https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
function create_2d_array() {
  let len = 6
  let x = new Array(len);
  for (let i = 0; i < len; i++) {
    x[i] = new Array(len);
  }

  return x;
}

theArray = create_2d_array();

console.log(theArray);
