//Create loadcatagories

const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err))
   };

const displayCatagories = (catagories) => {
   const categoryContainer = document.getElementById("catagories");

   catagories.forEach( (item) => {
          console.log(item);
          //create a button 

          const button = document.createElement("button");
          button.classList= "btn";
          button.innerText = item.category ;

         //add button to category container 
         categoryContainer.append(button)
 });

};

loadCatagories();