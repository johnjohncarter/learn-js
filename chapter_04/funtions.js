/**
 * Created by John Carter on 7/5/2017.
 */

var product = [
    {
        productName : "Coke",
        productPrice : "15"
    },
    {
        productName : "Tea",
        productPrice : "25"
    }
]

document.write(product[0].productName + "<br>");

for (var i=0; i<product.length; i++){
    document.write(product[i].productName + "<br>")
    document.write(product[i].productPrice + "<br>")
}
