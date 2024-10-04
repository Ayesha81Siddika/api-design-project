//Create loadcatagories

const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err))
   };
 const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err))
   };

   const displayVideos = (videos) => {
      const videoContainer = document.getElementById("videos")
      videos.forEach( video => {
          console.log(video)
          const card = document.createElement("div");
          card.classList=="card card-compact"
          card.innerHTML=`<figure>
    <img
    src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
          `
     videoContainer.append(card)
      })
   }

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
loadVideos();