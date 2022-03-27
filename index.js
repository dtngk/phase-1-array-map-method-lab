const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const message = tutorials.map(function (word){

    let string = "";
    const str = word.split(' ');
    
    for (let x in str){

        const phrase = str[x];
        string += phrase[0].toUpperCase() + phrase.slice(1);

        if (x != (str.length - 1)){
            string += " ";
        }
    }    
    
    return string;
  });

  return message;
}


