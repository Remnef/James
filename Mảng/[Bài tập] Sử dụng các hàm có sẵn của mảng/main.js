let myColor = ["Red", "Green", "White", "Black"];
document.write(`${myColor.toString} <br>`);
document.write(`${myColor.join('-')}<br>`);
var result = [];
  
  for(var x=0; x<myColor.length; x++)
  {
    if(UPPER.indexOf(myColor[x]) !== -1)
    {
      result.push(myColor[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(myColor[x].toUpperCase());
    }
    else 
    {
      result.push(myColor[x]);
    }
  }
document.write(myColor);
