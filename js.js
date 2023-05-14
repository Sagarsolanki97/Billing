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
  
  var sr = 1;
 
  var xx =0;

  var totalAmounttoPay =document.getElementsByClassName("total")[0];
  var add = document.getElementById("add_to_list");
  var tableAdd = document.getElementById("table");
  
  var adding = () => {
    var itemCode = document.getElementById("Number").value;
  
    item.forEach((item) => {
        if (item.id === parseInt(itemCode)) {
          var tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${sr}</td>
            <td>${item.id}</td>
            <td>${item.Name}</td>
            <td id="qty">
                <select name="" id="selection"> 
                    <option value="1"selected >1</option>     
                    <option value="2">2</option>     
                    <option value="3">3</option>   
                </select> 
            </td>
            <td class="mrp">${item.MRP}</td>
          `;
          

         
          const selectElement = tr.querySelector('#qty select');
          const selectedValue = parseInt(selectElement.value);
          console.log("Quantity",selectedValue);

          console.log("mrp",item.MRP);

        selectElement.addEventListener("change",event => {
            const selectedValue = parseInt(event.target.value);
           
        })
        
          tableAdd.appendChild(tr);
          sr++;

var price = parseInt(item.MRP);
xx+= price; 

totalAmounttoPay.innerHTML =xx; 

}
      });
  }