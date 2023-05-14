
var Sr =1;
var GrandTotal =0;
const Grand =document.getElementById("total");
var item = [
    {
      id: 111,
      Name: "Clinicplus_Shampoo",
      MRP: 50
    },
    {
      id: 121,
      Name: "Dove-Shampoo",
      MRP: 30
    },
    {
      id: 131,
      Name: "Silk&shine-Shampoo",
      MRP: 10
    }
    ];
var qtty =document.getElementsByClassName("qty");
// console.log(qtty.length);
// console.log(qtty);


var addIntoList = ()=>{

    const Code = document.getElementById("Number");
    var itemcode = parseInt( Code.value);  // // // input code given by the user.
                                               // console.log(iterate(itemcode));
    var correctObj =(iterate(itemcode)) ;
    // addIntoList()   
    
addInTable(correctObj);

}
var iterate  =(number) =>{ // // //ahiya mara pase id che ek e compare krvani che and jya e mdse e object nu kam che.

var foundId = item.find(obj => obj.id ===number);
if(foundId)
return foundId ;
else{
  alert("ID is not Listed in sheet")
}
}

var addInTable =(correctObj) =>{
    
    var tr = document.createElement("tr");

    var SR =document.createElement("td");
    var ItemId = document.createElement("td");
    var Name = document.createElement("td");
    var quantity = document.createElement("td");
      quantity.innerHTML = '<input type="number" min="1" value="1" />'
    var Price = document.createElement("td");
    var Total = document.createElement("td");

    Total.className="total";



SR.innerHTML =Sr; // // // 
ItemId.innerHTML =correctObj.id;
Name.innerHTML =correctObj.Name;
Price.innerHTML =correctObj.MRP;
var amount = Price.innerHTML;

var quantityInput = quantity.querySelector("input");
quantityInput.setAttribute("type", "number");
quantityInput.setAttribute("min", "1");
quantityInput.setAttribute("value", "1");
quantityInput.setAttribute("class", "qty");
 

// maare Onchange pr final total ne zero kri bdha td ne total maa add krvu chhe. 


quantityInput.addEventListener("change",()=>{
  
  var quantityValue = parseInt(quantityInput.value);
  Total.innerHTML =productTotal(quantityValue,Price.innerHTML);
updateGrand();
})  ;

quantity.appendChild(quantityInput);
Total.innerHTML =productTotal(1,Price.innerHTML);

// productTotal(quantity,amount);

tr.appendChild(SR);
tr.appendChild(ItemId);
tr.appendChild(Name);
tr.appendChild(quantity);
tr.appendChild(Price);  
tr.appendChild(Total);


// console.log(Price.innerHTML);
// Quantity.innerHTML =

    var tableInsert =document.getElementById("tableData");
    tableInsert.appendChild(tr);
    

    Sr++;
    updateGrand();
}
var productTotal= (number,number2) => {
  
  var ans = number*parseInt( number2);
  return ans;
}

var updateGrand=(number)=>{
  // console.log("change");
  GrandTotal =0;
  var classes =document.getElementsByClassName("total");

 for(var i=0; i<classes.length; i++){
  GrandTotal+= parseInt( classes[i].innerHTML);
   };

  Grand.innerHTML = GrandTotal;

}
