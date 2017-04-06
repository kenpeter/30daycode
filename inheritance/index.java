// extend
class Student extends Person {
  // private int array
  private int[] testScores;

  // int a
  int a;

  public Student(String firstName, String lastName, int id, int[] testScores){
    // pass first name, last name, id and score
    // we super
    super(firstName, lastName, id);
    // array of mark
    this.testScores = testScores;
    // 1st name
    this.firstName = firstName;
    // 2nd name
    this.lastName = lastName;
    // id
    this.idNumber = id;
  }

  // return a char
  public char calculate(){
    // sum is int
    int sum= 0;

    // for each scores
    for(int i=0;i<testScores.length;i++){
      a = a+testScores[i];
    }

    a = a/testScores.length;

    if(90<=a&&a<=100) {
      return 'O';
    }
    else if(80<=a && a<90) {
      return 'E';
    } else if(70<=a && a<80) {
      return 'A';
    } else if(55<=a && a<70) {
      return 'P';
    }else if(40<=a && a<55){
      return 'D';
    }else if(0<=a && a<40){
      return 'T';
    }
    else {
      return Character.MIN_VALUE;
    }  
  }
}
