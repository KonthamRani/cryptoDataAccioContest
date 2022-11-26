
let tableInsert="";
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
.then((data)=>{
   return  data.json();
}).then((objData)=>{
    objData.map(values=>{
        let num1=new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(values.current_price);
        console.log(num1);
        let num2=new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(values.market_cap_change_24h);
        console.log(num1);
        let num3=new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(values.market_cap);
        console.log(num1);
        
         tableInsert+=`<tr>
        <td> <img src="${values.image}" height="30px" width="30px"><span style="padding-left:10px;">${values.id}</span></td>
        <td>${values.symbol.toUpperCase()}</td>
        <td>${num1}</td>
        <td>${num2}</td>
        <td>${parseFloat(values.market_cap_change_24h).toFixed(2)}%</td>
        <td></td>
        <td></td>
       
        <tr>
        `;
       
   
    })
    document.getElementById("_tbody").innerHTML=tableInsert;
})
        
    