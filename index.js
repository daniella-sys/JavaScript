var arr = [2, 82828, true, false, "some people"];
console.log(arr.sort().reverse());

var user = prompt("Enter your favorite foods: ");
var foods = user.split(",");
console.log(foods);
//create class
class Person {
    name = ""
    age = ''
    bio = ''
    hooby = ''
    favorite_food = ''
    favorite_music = ''
    favorite_movies = ''
    favorite_color = ''
    favorite_social_media = ''

    info(){
        console.log("People: " + this.name, "age: " + this.age);
    }

    constructor(name, age, bio, hooby){
        this.name = name
        this.age = age
        this.bio = bio
        this.hooby = hooby
    }
}
//Присвоюємо значення до даного класу 
var noob = new Person();
noob.name = 'Noob';
noob.age = 45;
noob.bio = "Tall, strain hair, and good people";
noob.hooby = "plays games, reading books";
noob.favorite_food = "pizza";
noob.favorite_music = "lil peep, Chase atlantic";
noob.favorite_movies = "Titanic";
noob.favorite_color = "blue";
noob.favorite_social_media = "instagram";
//enter 
console.log(noob.name, noob.age, noob.bio, noob.favorite_color);

noob.info();