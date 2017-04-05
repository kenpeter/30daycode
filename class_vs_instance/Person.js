function Person(initialAge){
  // because constructor is the entire func
  // because it is func, so can do whatever func do
  if(initialAge >= 0) {
    this.age = initialAge;
  }
  else
  {
    this.age = 0;
    console.log("Age is not valid, setting age to 0.");
  }

  this.amIOld = () => {
    if(this.age < 13) {
      console.log("You are young.");
    }
    else if(this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    }
    else {
      console.log("You are old.");
    }
  };

  this.yearPasses = () =>{
    // Increment the age of the person in here
    this.age++;
  };
}
