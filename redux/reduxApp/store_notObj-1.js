

function User() {
    this.name='leo';
    this.changeName=function(name){
        this.name=name;
    }
}

var u=new User();

var changeName=u.changeName;

changeName('xun');

console.log(u.name);

console.log(name);





