console.log("class with object");
class Person{
    constructor(name){
        this.name = name;                                                              
    }
    walk(){
        console.log(`${this.name} He can walk`);
    }
}
let obj1 = new Person("praveen")
obj1.walk()


class Sharma  extends Person{
    constructor(name){
        super(name)
    }
    work(){
        console.log(`${this.name} he is a coder`)

    }
}
let obj2 = new Sharma("Praveen")
obj2.work()