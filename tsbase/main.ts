{
    //泛型
    function getId<T>(val: T){
        return val
    }

    const res = getId<number>(123);
    const res2 = getId<string>('123')

    //多个泛型
    function getProp<O, K extends keyof O>(obj:O, key:K){
        return obj[key]
    }

    const p1 = {
        name :"John",
        age:18
    }
    const res3 = getProp(p1, 'age')
    
}