let BioButon = document.getElementById("GetBio");
let BioSquare = document.getElementById("TheBio");
let PName = document.querySelector("#PersonName");


function getApiName(name){  

    fetch("https://www.swapi.tech/api/people/?name="+name)     
    .then(res => res.json())     
    .then(data =>     
        { 
            console.log(data.result[0].properties);
            console.log(data.result[0].properties.birth_year);
            BioSquare.innerHTML = 
            "Name: "+data.result[0].properties.name +"\n"
            +"Gender: "+ data.result[0].properties.gender +"\n"
            +"Hair: "+ data.result[0].properties.hair_color +"\n"
            +"Eyes: "+ data.result[0].properties.eye_color +"\n"
            +"Height: "+ data.result[0].properties.height +" cm\n"
            +"Mass: "+ data.result[0].properties.mass +" kg\n";

    }).catch(err => console.log(err))        
 }

 //getApiName("Luke");

 BioButon.addEventListener("click", e =>{ 
    if(PName.value!=null){
        getApiName(PName.value);
    }
         
    });
