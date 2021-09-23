
var readLineSync = require('readline-sync');

q1 = "Who is Harry Potter? "
a1 = "Wizard";

q2 = "What is the name of Harry Potter's School name? ";
a2 = "Hogwarts";

q3 = "What is the name of first friend of Harry Potter?(Hint:first name) ";
a3 = "Ronald";

q4 = "What is the name of the Girl in their team? (Hint: Best Friend) ";
a4 = "Hermione";

q5="How many chapter are their of Harry Potter film series? (in words) ";
a5="Eight";

q6 = "Who died in the sixth chapter?(only sirname) ";
a6 = "Dumbledore";

q7 = "What was the name of dark lord? ";
a7 = "Voldemort";

q8 = "What's the name of Ronald Waesley's sister name? (firstname) ";
a8 = "Ginny";

q9 = "What is the Sirname of Draco? ";
a9 = "Malfoy";

q10 = "Whom did Harry Potter Married?(only first name) ";
a10 = "Ginny";

var score = 0;
var i = 1;
console.log("Let's know How much you know about Harry Potter.");
console.log('Note: Please use First letter in Capital');

console.log('');
var userInput = readLineSync.question('What is your name? ');
console.log('Welcome '+ userInput + '!');
function introduction(){
  //Greetings!
  console.log('');
  // Know if the user knows Harry Potter
  var first = readLineSync.question("Do you know Harry Potter? ");
  var answer = "Yes";
  if(answer == first ){
    console.log('That is Awesome!');
  }else{
    console.log('It is Okay. Questions might be tough for you. All the Best!');
  }

}

function quiz(question,answer){
  console.log('')
  // console.log('Question: '+i);
  var userAnswer = readLineSync.question(question);
  console.log('You entered '+ userAnswer);
  i++;
  if(answer == userAnswer){
     score +=1;
    console.log('You are right!');
    console.log('Your Score: '+ score);
  }else{
    score-=1;
    console.log('You are wrong!');
    console.log('Your Score: '+score);
  }
}

function result(score){
  console.log('');
  console.log('FInal Score: '+score);
   if(score > 7){
    console.log(userInput+', You are Brilliant! You Have a great knowledge of Harry Potter Film series! Congratulations! ');
  }
  if(7< score > 4){
    console.log(userInput+', You have played very well !' );
  }
  else{
    console.log(userInput+', Well Played!');
  }

}
introduction()
quiz(q1,a1)
quiz(q2,a2)
quiz(q3,a3)
quiz(q4,a4)
quiz(q5,a5)
quiz(q6,a6)
quiz(q7,a7)
quiz(q8,a8)
quiz(q9,a9)
quiz(q10,a10)
result(score)