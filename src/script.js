$(document).ready(function(){
  //stores input from user to calculate
  
  var inputs = [""];
  
  //string to store current input
  var totalString; 
  
  //operators array for vaildation
  var operators1 = ["+", "-", "/", "*"]; 
  var operators2 = ["."]; 
  
  //numbers for validation
  var nums = [0,1,2,3,4,5,6,7,8,9]
  
  function getValue(input){
    //checks for duplicate decimals
    if(operators2.includes(inputs[inputs.length-1] === true && input === ".")){
      console.log("ERROR!");
    }
    //make sure we do not start with an operator
    else if(inputs.length === 1 && operators1.includes(input) === false){
      inputs.push(input);
    }
    //make sure no duplicate operators
    else if(operators1.includes(inputs[inputs.length-1]) === false){
      inputs.push(input);
    }
    //check to add a number
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  //update current value
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString)
  }
  
  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString))
    //evaluates and returns answer
  }
  
  $("a").on("click", function(){
    if(this.id === "deleteAll"){
      inputs=[""];
      update();
    }
    else if(this.id === "backOne"){
      inputs.pop();
      update();
    }
    else if(this.id === "total"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".") === -1){
        getValue(this.id);
        
      }
      else{
        getValue(this.id); 
      }
    }
  });
});