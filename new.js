/*class Human {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        This.age = age;
    }
}

sayFirstName() {
    console.log(this.firstName)
}
saylastName() {
    console.log(this.lastName)
}
sayAge() {
    console.log(this.age)
}

let ivan = new Human('Ivan', "Ivanov", 19);
console.log(Ivan.firstName);
ivan.saylastName();
ivan.sayAge();

//ivan.age = 31;

 */
/*
class Room {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }


    sayName() {
        console.log(this.name)
    }

    sayCapacity() {
        console.log(this.capacity)
    }

}
let jerusalem = new Room('Jerusalim', '5');
console.log(jerusalem.name);
jerusalem.sayName();
jerusalem.sayCapacity()

 */
//Статические методы
/*
class Animal {
 // обычный
    constructor(type) {
        this.type = type;
    }
    getTypeCommon(){
        return this.type;
    }
// статическийю не создает экземпляр класса
    static makeNoise(noise);
    console.log(noise);
}
//Animal.makeNoise('Meew');
console.log(Animal.getType());
let dog = new Animal('dog');
dog.getTypeCommon();
*/
class Season {
    constructor(season){
        this.season = season;
    }
    getWeather(){
        return this.season;
        if(this.season === 'summer'){
            console.log('sunny')
        }
        if(this.season === 'autum'){
            console.log('Rainy')
        }
        if(this.season === 'spring'){
            console.log('Windy')
        }
        if(this.season === 'winter'){
            console.log('Snowy')
        }
    }
}
let summer = new Season('summer')

summer.getWeather()
