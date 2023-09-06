{//对象
    type Person={
        name:string,
        say:(txt:string)=>void
    }
    let obj:Person={
        name:"buma",
        say(txt){
            console.log("say:"+txt)
        }
    }
    obj.say("hello")
}