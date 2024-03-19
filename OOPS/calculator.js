class calculator{
    constructor(a,b,ans=0){
        this.a=a;
        this.b=b;
        this.ans=ans;
    }
    setclearResult(){
        console.clear();
    }
    // getresult(){
    //     let sum=this.sum();
    //     console.log(`sum of ${this.a} and ${this.b} is : ${sum}`);
    //     let mul=this.multi();
    //     console.log(`mul of ${this.a} and ${this.b} is : ${mul}`);
    //     let div=this.divi();
    //     console.log(`div of ${this.a} and ${this.b} is : ${div}`);
    //     let sub=this.sub();
    //     console.log(`sub of ${this.a} and ${this.b} is : ${sub}`);
    // }
    getresult(){
        this.setclearResult();
        console.log(this.ans);

        this.ans=0;
    }
    sum(){
        this.ans=this.a+this.b;
        this.getresult();
    }
    sub(){
        this.ans=this.a-this.b;
        this.getresult();
    }
    multi(){ 
        this.ans=this.a*this.b;
        this.getresult();
    }
    divi(){
        this.ans=this.a/this.b;
        this.getresult();
    }
    // setclearResult(){
    //     let a=this.sum=0;
    //     let b=this.sub=0;
    //     let c=this.multi=0;
    //     let d=this.divi=0;
    //     console.log(a,b,c,d);
    // }
}

// a.getresult();
// a.setclearResult();

class calculator_1 extends calculator{
    constructor(a,b,c,ans){
        super(a,b,ans)
        this.c=c;
    }
    sum(){
        this.ans=this.a+this.b+this.c;
        this.getresult();
    }
    sub(){
        this.ans=this.a-this.b-this.c;
        this.getresult();
    }
    multi(){
        this.ans=this.a*this.b*this.c;
        this.getresult();
    }
    divi(){
        this.ans=this.a/this.b/this.c;
        this.getresult();
    }
    
    // getresult(){
    //     let sum=this.sum();
    //     console.log(`sum of ${this.a} and ${this.b} and ${this.c} is ${sum}`);
    //     let mul=this.multi();
    //     console.log(`mul of ${this.a} and ${this.b} and ${this.c} is ${mul}`);
    //     let div=this.divi(); 
    //     console.log(`div of ${this.a} and ${this.b} and ${this.c} is ${div}`);
    //     let sub=this.sub();
    //     console.log(`sub of ${this.a} and ${this.b} and ${this.c} is ${sub}`);
    // } 
    // setclearResult(){
    //     let a=this.sum=0;
    //     let b=this.sub=0;
    //     let c=this.multi=0;
    //     let d=this.divi=0;
    //     console.log(a,b,c,d);
    // }
}

// r.getresult();
// r.setclearResult();

class adv_cal extends calculator_1{
    constructor(arr,ans) {
        super(arr[0], arr[1], arr[2],ans);
        this.arr = arr;
    }
    sum(){

        for (let i = 0; i < this.arr.length; i++) {
          this.ans += this.arr[i];
        }
        this.getresult();
    }
    multi(){
        this.ans=1;
        for (let i = 0; i < this.arr.length; i++) {
          this.ans *= this.arr[i];
        }
        this.getresult();
    }

    // getresult(){
    //     let sum=this.sum();
    //     console.log("sum of");
    //     for(let i=0;i<this.arr.length;i++){
    //         console.log(`${this.arr[i]} `);
    //     }
    //     console.log(`is ${sum}`);
    //     let mul=this.multi();
    //     console.log("multi of");
    //     for(let i=0;i<this.arr.length;i++){
    //         console.log(`${this.arr[i]} `);
    //     }
    //     console.log(`is ${mul}`);
    // } 
      
    // setclearResult(){
    //     let a=this.sum=0;
    //     let c=this.multi=0;
    //     console.log(a,c);
    // }
}

let a=new calculator(1,2);
let r=new calculator_1(1,2,34);
let m = new adv_cal([2,2,3,1,8]);

a.divi();