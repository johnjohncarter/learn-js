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

for (var prop in programmer){
    document.write(prop+"<br>");
}

for(var prop in programmer){
    document.write(programmer[prop]+"<br>");
}

