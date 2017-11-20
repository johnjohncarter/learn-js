/**
 * Created by John Carter on 7/5/2017.
 */

var programmer ={
    fullname : "John Carter",
    age : 20,
    skill : ["CSS","HTML","PHP"],
    showData : function () {
        return "My name is " + this.fullname;
    }
}

document.write(programmer.fullname);
document.write("<br>"+programmer.age);
document.write("<br>"+"My Skill")
for (var i=0; i<programmer.skill.length; i++){
    document.write("<br>"+programmer.skill[i])
}
document.write("<br>"+programmer.showData());