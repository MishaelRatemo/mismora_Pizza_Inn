$(document).ready(function(){
    $('input#Yes').click(function () {     
        var location = prompt("Enter Your Location ");
            console.log(location);
            alert(`Delivery will be done at ${location}. Thank you for being our Customer`);   
            $('#last').append(`<h4> Delivery will be at ${location} </h4>`);           
    });    
});
var pricePizza;
class Pizza{
    constructor(markedPrice,number,Crust,topping){
        this.initialCost =markedPrice;
        this.numOfPizza = number;
        this.Crust = Crust;
        this.toppings = topping;
        this.totals = this.initialCost *number + parseInt(this.Crust) + topping ;
    }
}
$(document).ready(function(){
    $('#order_info').submit(function (ev) { 
        ev.preventDefault();
        let price = $("input[name='PizzaSize']:checked").val();
        let numberOfPizza = $("input#noOfPiza").val();
        let crust = $("#Crust").val();
        console.log(` Crust selecte ${crust}`)
        console.log(`Marked Price $ ${price}`); console.log(`No of Pizz ${numberOfPizza}`) ;
        var totalCost = price* numberOfPizza;
        console.log(`Totals $ ${totalCost}.`)        
        
        var top = $('#Bacon:checked').val(); 
        
        var tops= $('.toppings:checked').map(function(){
            return this.value;
        }).get(); 
        alert(tops);
        var sumtopping =0;
        for (var i=0; i <tops.length; i++){
            sumtopping += parseFloat( tops[i]);
        }
        console.log("sum toppings"+sumtopping);
        pricePizza =new Pizza(price,numberOfPizza,crust,sumtopping);
        console.log(pricePizza);
        updateCosts();

        $(this)[0].reset();
    });
      
});
function updateCosts(){
    $('#subtotals').text(pricePizza.totals);
}
  //Function that adds the total up
  function sumUp() {
    var sum = 0;
  var checked = $("input.toppings:checked");
    console.log(checked);
    $("input.toppings:checked").each(function() {
      sum += parseInt($(this).val());
    });
  
    $("input[name=summary]").val(sum);
  }
