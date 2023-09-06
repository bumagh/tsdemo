{
  //可选参数
  let str: string = 'abc'
  console.log(str.slice(1))
  console.log(str.slice(1,2))
  const myprint=(a?:string,b?:string)=>{
      if(a && b)
      console.log(a,b)
  }
  myprint("this is a;","this is b;")
}