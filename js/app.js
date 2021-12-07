$(document).ready(function(){
    $('input#Yes').click(function () {     
        var location = prompt("Enter Your Location ");
            console.log(location);
            alert(`Delivery will be done at ${location}.Delivery cost $3.5 Thank you for being our Customer`);   
            $('#last').append(`<h5> Delivery will be at ${location}.Cost $3.5 </h5>`);           
    });    
});
var pricePizza;
class Pizza{
    constructor(markedPrice,number,Crust,topping,delivery ){
        this.initialCost =markedPrice;
        this.numOfPizza = number;
        this.Crust = Crust;
        this.toppings = topping;
        this.delivery = delivery;
        this.totals = this.initialCost *number + parseInt(this.Crust) + topping + parseFloat(delivery) ;
    }
}
$(document).ready(function(){
    $('#order_info').submit(function (ev) { 
        ev.preventDefault();
        let price = $("input[name='PizzaSize']:checked").val();
        let numberOfPizza = $("input#noOfPiza").val();
        let crust = $("#Crust").val();
        console.log(` Crust selected ${crust}`)
        console.log(`Marked Price $ ${price}`); console.log(`No of Pizz ${numberOfPizza}`) ;
        var totalCost = price* numberOfPizza;
        console.log(`Totals $ ${totalCost}.`)        
        
        var top = $('#Bacon:checked').val(); 
        //
        var tops= $('.toppings:checked').map(function(){
            return this.value;
        }).get(); 

        // get text of selected elements
        console.log( "this crust"+
            $("#Crust option:selected").text()
        )
        console.log(
                 $(".toppings:checked").parent().text()
        )

        
        
        var sumtopping =0;
        for (var i=0; i <tops.length; i++){
            sumtopping += parseFloat( tops[i]);
        }
        let deliveryCost = $("#Yes").val();

        // console.log("sum toppings"+sumtopping);
        pricePizza =new Pizza(price,numberOfPizza,crust,sumtopping,deliveryCost);
        // console.log(pricePizza);
        updateCosts();
        // reset form after submit
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
