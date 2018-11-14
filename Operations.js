var nameList = ["Nikhita","Kale","Universe","Godzillathegreat",""]
nameList.forEach(function(value){
  var result = "Pass";
  if(value.length > 8) {
   result = "Fail";
  }
  console.log(result);
});
console.log(nameList.length);
