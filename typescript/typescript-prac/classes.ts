interface userType{
    name: string;
    age: number;
    gender: string;
    register();
}
class User implements userType{
        name: string;
        age: number;
        gender: string;

        constructor(name: string, age: number, gender: string){
                this.name = name;
                this.age = age;
                this.gender = gender;

                console.log(this.name + "'s age is " +this.age);
        }

        register(){
                console.log('name is registered ' + this.name);
        }


}

let mad = new User('madhuri', 23, 'female');

console.log(mad);

class otherUser extends User{
    id: number;
    constructor(id: number, name: string, age: number, gender: string){
        super(name, age, gender);
        this.id = id;

        console.log('id created');
    }
}

let man = new otherUser(3, 'manaswini', 24, 'female');




