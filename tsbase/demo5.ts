{
  //函数

  // function add(a,b){ //error in js b 
  //   return a+b
  // }
  function add(a:number, b:number):number{
    return a+b
  }

  function addToString(a:number, b:number){
    return a+b+''
  }

  const fn = function(a:number):number{
    return a
  }
  const sub = (a:number,b:number):number=>{
    return a-b
  }
  //函数的类型别名,箭头函数和函数表达式用
  type FnType = (a:number, b: number)=> number;
  const mysub :FnType =(a,b)=>{
    return a-b
  }
}
