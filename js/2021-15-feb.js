//Do you speak english
// does the string contain 'english' in it
// 
function spEng(sentence){
    let noCase = sentence.toLowerCase();
    return noCase.includes('english');
  };
  

// Safen User Input Part I - htmlspecialchars
/* Your mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:
< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;*/

// 1. string or array? 
// 1. split to array by space, then by char in loop; push to new arr, if special character, push new character, join new array and return  
function htmlspecialchars(formData) {
    let splitData = formData.split(' ');
    let newWord = [];
    let newSentence = [];
    for (let word of splitData){
        // word = word.split('');
        for (let char of word){
            if(char === '<'){
                char = '&lt';                              
            };    
            if(char === '>'){
                char = '&gt';                              
            };    
            if(char === '"'){
                char = '&quot';                              
            };    
            if(char === '&'){
                char = '&amp;*/';                              
            };    
            
            newWord.push(char);
        };        
        newSentence.push(newWord.join(''));
        newWord = []
    };
    return newSentence.join('');
};

// htmlspecialchars('<script>bonkers&virusIsHere"yeahBuddy"<script>')