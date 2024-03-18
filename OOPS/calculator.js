class calculator{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    
    getresult(){
        let sum=this.sum();
        console.log(`sum of ${this.a} and ${this.b} is : ${sum}`);
        let mul=this.multi();
        console.log(`mul of ${this.a} and ${this.b} is : ${mul}`);
        let div=this.divi();
        console.log(`div of ${this.a} and ${this.b} is : ${div}`);
        let sub=this.sub();
        console.log(`sub of ${this.a} and ${this.b} is : ${sub}`);
    }
    sum(){
        let sum=0
        sum=this.a+this.b;
        return sum;
    }
    sub(){
        let sub=0
        sub=this.a-this.b;
        return sub;
    }
    multi(){
        let multi=1;
        multi=this.a*this.b;
        return multi;
    }
    divi(){
        let divi=0
        divi=this.a/this.b;
        return divi;
    }
    setclearResult(){
        let a=this.sum=0;
        let b=this.sub=0;
        let c=this.multi=0;
        let d=this.divi=0;
        console.log(a,b,c,d);
    }
}
let a=new calculator(1,2);
a.getresult();
a.setclearResult();
class calculator_1 extends calculator{
    constructor(a,b,c){
        super(a,b)
        this.c=c;
    }
    sum(){
        let sum=0
        sum=this.a+this.b+this.c;
        return sum;
    }
    sub(){
        let sub=0
        sub=this.a-this.b-this.c;
        return sub;
    }
    multi(){
        let mul=0
        mul=this.a*this.b*this.c;
        return mul;
    }
    divi(){
        let divi=0
        divi=this.a/this.b/this.c;
        return divi;
    }
    
    getresult(){
        let sum=this.sum();
        console.log(`sum of ${this.a} and ${this.b} and ${this.c} is ${sum}`);
        let mul=this.multi();
        console.log(`mul of ${this.a} and ${this.b} and ${this.c} is ${mul}`);
        let div=this.divi(); 
        console.log(`div of ${this.a} and ${this.b} and ${this.c} is ${div}`);
        let sub=this.sub();
        console.log(`sub of ${this.a} and ${this.b} and ${this.c} is ${sub}`);
    } 
    setclearResult(){
        let a=this.sum=0;
        let b=this.sub=0;
        let c=this.multi=0;
        let d=this.divi=0;
        console.log(a,b,c,d);
    }
}
let r=new calculator_1(1,2,34);
r.getresult();
r.setclearResult();
class adv_cal extends calculator_1{
    constructor(arr) {
        super(arr[0], arr[1], arr[2]);
        this.arr = arr;
    }
    sum(){
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
          sum += this.arr[i];
        }
        return sum;
    }
    multi(){
        let mul=1;
        for (let i = 0; i < this.arr.length; i++) {
          mul *= this.arr[i];
        }
        return mul;
    }
    getresult(){
        let sum=this.sum();
        console.log("sum of");
        for(let i=0;i<this.arr.length;i++){
            console.log(`${this.arr[i]} `);
        }
        console.log(`is ${sum}`);
        let mul=this.multi();
        console.log("multi of");
        for(let i=0;i<this.arr.length;i++){
            console.log(`${this.arr[i]} `);
        }
        console.log(`is ${mul}`);
    } 
      
    setclearResult(){
        let a=this.sum=0;
        let c=this.multi=0;
        console.log(a,c);
    }
}

let m = new adv_cal([2,2,3,1,8]);
m.getresult();
m.setclearResult();