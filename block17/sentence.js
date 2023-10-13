//Step 2 Create a class named Sentence
//Step 3 Add a constructor that takes a parameter named data, which sets the this.data property for an instance of a sentence.
//Step 4 Use the window.prompt to get some data that you can use to create a sentence.
//Step 5 Add a method to the Sentence class that counts the number of words in your sentence. 
//Step 6 Add a method to the Sentence class called hasLetter, which takes a letter and returns true or false if the letter is in your sentence.
//Step 7 Add a method to the Sentence class that takes a letter and returns the number of times that letter is in the sentence.
//Step 8 Add a method to the Sentence class called stats. It will return an object with a key for each word in your sentence and a value for how many times the word appears. Example: For 'foo bar bar' it would return an object with keys, 'foo' and 'bar' with values 1 and 2 respectively.
class Sentence{
    constructor(data){
      this.data = data;
    }
    wordCount(){
      return this.data.split(' ').length;
    }
    hasLetter(letter){
      return this.data.indexOf(letter) !== -1;
    }
    letterCount(letter){
      let count = 0;
      for(let i = 0; i < this.data.length; i++){
        if(this.datat[i] === letter){
          count++;
        }
      }
      return count;
    }
    stats(){
      const obj = {};
      const words = this.data.split(' ');
      words.forEach( word => {
        if(obj[word] === undefined){
          obj[word]= 0;
        }
        obj[word]++;
      });
      return obj;
    }
  }
  const data = window.prompt('enter a sentence', 'the quick brown fox jumped over the fence');
  const s1 = new Sentence(data);
  console.log(s1.wordCount());//step 5
  console.log(s1.hasLetter('X'));//step 6
  console.log(s1.hasLetter('q'));//step 6
  console.log(s1.letterCount('e'));//step 7
  console.log(s1.letterCount(' '));//step 7
  console.log(s1.stats()); //step 8

  
  