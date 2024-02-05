// Create a function that initiates a countdown based on the specified number of seconds

const counterFunction=(seconds)=>{
    let count=0;
    let i=seconds;
    const intervalId=setInterval(()=>{
      if(count<seconds){
      console.log(i);
      i--;
      count++;      
      }else{
        clearInterval(intervalId);
      }
    },1000)
    
  }
 
 counterFunction(5);