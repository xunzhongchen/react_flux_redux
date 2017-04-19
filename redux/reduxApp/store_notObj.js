

function User() {
    this.name='leo';
    this.changeName=function(name){
        this.name=name;
    }
}


var u=new User();
u.changeName('zhong')
console.log(u.name);

