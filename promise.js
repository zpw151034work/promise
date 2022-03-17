const RESOLVE ='resolved';
const REJECT = "rejected";
const PENGING ="pending";
class  JJPromise {
      status= PENGING;
      result = undefined;
      reason = undefined;
     constructor (excution){
    
      const resolve = (result)=>{
       if(this.status ===PENGING){
          this.result = result;
          this.status = RESOLVE;
       } 
      }
      const reject = (reason)=>{
        if(this.status ===PENGING){
           this.reason = reason;
           this.status = REJECT;
        } 
       }
      excution(resolve,reject)


    }
}