document.getElementById('btn1').addEventListener('click', loadCustomer)

document.getElementById('btn2').addEventListener('click', loadCustomers)

//Load Single Customer 
function loadCustomer(){
  let obj = {
    id : 2,
    name : "Andri",
    company : "Team-426.com",
    phone : "444-555-6666"
}
const request = new XMLHttpRequest()

request.open('POST','customer.json', true)

request.send()
request.onload = function(){
    //Status : 200 - the file could be found and accessable
    if(this.status === 200){
        const customer = JSON.parse(this.responseText)
        console.log(customer)
        const output = `
        <ul>
           <li>ID: ${customer.id}</li>
           <li>Name: ${customer.name}</li>
           <li>Company: ${customer.company}</li>
           <li>Phone: ${customer.phone}</li>
        </ul>
        `;
        document.getElementById('customer').innerHTML = output
    } 
}
}
//Load Customers
function loadCustomers(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
        // console.log(this.responseText);
  
        const customers = JSON.parse(this.responseText);
  
        let output = '';
  
        customers.forEach(function(customer){
          output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `;
        });
  
        document.getElementById('customers').innerHTML = output;
      }
    }
  
    xhr.send();
}