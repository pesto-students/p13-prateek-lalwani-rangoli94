function subsequenceRecursive(str, index){
	if(index == str.length) {
  	return [""]
  }
  
  
  
  let smallOutput = subsequenceRecursive(str,index+1) 
  
  const finalResult = [...smallOutput]
    
   for(let i=0;i<smallOutput.length; i++) {
   	finalResult.push(str[index]+smallOutput[i])
   }
   
   return finalResult
}

function subsequenceMain(str) {
   return subsequenceRecursive(str,0)
}