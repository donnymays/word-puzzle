$ (document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();

    const sentenceInput = $("input#fullsentence").val().toLowerCase();
    const newSentenceInput = sentenceInput.split("")
    
    //console.log(newSentenceInput)
    
    let sentenceArr = [newSentenceInput]
    
    //sentenceArr.s
    
    
    console.log(sentenceArr)

    let newArr = []
    
    for (let i=0; i < newSentenceInput.length; i+=1 ) {
      newSentenceInput[i] = newSentenceInput[i].replace("a", "-");
      newSentenceInput[i] = newSentenceInput[i].replace("e", "-");
      newSentenceInput[i] = newSentenceInput[i].replace("i", "-");
      newSentenceInput[i] = newSentenceInput[i].replace("o", "-");
      newSentenceInput[i] = newSentenceInput[i].replace("u", "-");
      newSentenceInput[i] = newSentenceInput[i].replace(" ", "-");
      newArr.push(newSentenceInput[i]);
      console.log(newSentenceInput);
    }

    //console.log(newArr);
    const finalArr = newArr.join(" ");
    
    $(".answer").text(finalArr);
    
    // for (let i=0; i < newSentenceInput.length; i+= 1) {
    //   console.log(newSentenceInput[i]);
    //   if (newSentenceInput[i] === ("a") || ("e") || ("i") || ("o") || ("u")) {
    //     newArr.push(newSentenceInput[i] = "-");
    //   }
      
    //   else {
    //     newArr.push(newSentenceInput[i]);
    //   }
      
    
    

   });
});