// build html Event
document.body.innerHTML=`<div class="heading-container">
<h1>brewery List</h1>
<img class="icon" src="https://media.cnn.com/api/v1/images/stellar/prod/191008155125-frontier-beer-1.jpg?q=x_16,y_162,h_884,w_1572,c_crop/h_270,w_480"  alt="brewerynotexist">
</div>
<div class="main-container" id="maincontainer"></div>

`;

// create a function to fetch data from the api
const getData=async()=>{
    try{
        const data=await fetch("https://api.openbrewerydb.org/breweries");
        const brewery=await data.json();
        brewery.forEach((brewery)=>{
            console.log(brewery)
            //we have to call display part and pass the value
            displaydata(brewery);
        })
    }catch(error){
        console.log(error);
    }
}

getData()

const displaydata=(obj)=>{
    let mainContainer=document.querySelector('#maincontainer')
    mainContainer.innerHTML+=
    `<div class="container">
    <h3>Brewery Name: ${obj.name}</h3>
    <p>Address: ${obj.street}</p>
     <p>City:${obj.city}</p>
     <p>State:${obj.state}</p>
     <p>Phone:${obj.phone}</p></div>
    `
}