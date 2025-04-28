let setup= document.getElementById("setup");
let punchline= document.getElementById("punchline");
let button= document.getElementById("jokeBtn");
let mode="light";
let modeBtn=document.getElementById("mode");

// Load saved joke from localStorage

window.addEventListener("DOMContentLoaded", function(){

    const savedJokes= JSON.parse(localStorage.getItem("lastjoke"));

    if(savedJokes){
        setup.textContent=savedJokes.setup;
        punchline.textContent=savedJokes.punchline;
    }
    const savedMode= localStorage.getItem("mode");
    if(savedMode==="light"){
        document.body.style.backgroundColor="black";
       
        mode="dark";
    }else{
        document.body.style.backgroundColor="white";
      
        mode="light";
    }
        

   

});

async function getData(){
   

        button.disabled = true;
        button.textContent = "Loading...";
      
        // setTimeout( async function() {
            
            try{
        let url="https://official-joke-api.appspot.com/random_joke";
        let responce=await fetch(url);
        let data= await responce.json();
        // console.log(data);
        setup.textContent=data.setup;
        punchline.textContent=data.punchline;

        localStorage.setItem("lastjoke", JSON.stringify(data));

       
        }
        catch(error){
            // console.log("error:" , error);
            setup.textContent = "Oops! Couldn't load a joke.";
    punchline.textContent = "";
           
        }
    

    // }, 3000);

    button.disabled = false;
    button.textContent = "Tell me a joke";
   
   
    }
    
   


button.addEventListener("click", getData);

modeBtn.addEventListener("click", function(){

    if(mode==="light"){
        document.body.style.backgroundColor="black";
       
        mode="dark";
    }else{
        document.body.style.backgroundColor="white";
        
        mode="light";
    }

    localStorage.setItem("mode",mode);
   

})