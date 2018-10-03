module.exports = function getZerosCount(number, base) {
  let result=0;
  const primeDiv=[];
  const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 
                  37,41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
                  83,89, 97, 98, 101, 103, 107, 108, 109, 113, 
                  127,131, 137, 139, 144, 147, 149, 151, 157, 163, 
                  167,169, 173, 179, 181, 191, 193, 197, 199, 211, 
                  223,227, 229, 233, 239, 241, 251];

  for(let i=0,len=primeArr.length;i<len;i++){
    if(base%primeArr[i]===0){
      primeDiv.push(primeArr[i]);
    }
  }
  primeDiv.sort((a,b)=>b-a);
  let div=primeDiv[0];
  for(let i=div;number/i>=1;i*=div){
    result+=Math.floor(number/i);
}
  return result;
}

