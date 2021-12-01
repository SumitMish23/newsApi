let apiKey = "887c9fae346149eba2317b155c1412ef";
let source = "bbc-news";
// Grab the news conatiner
let newsAccordion = document.getElementById("newsaccordion");
console.log("Hi");
let btn1=document.getElementById("btn1");
btn1.addEventListener("input",function(){
  console.log("Search Clicked !");
  
})
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=887c9fae346149eba2317b155c1412ef",
  true
);
xhr.onload = function () {
  if (xhr.status === 200) {
    let json = JSON.parse(xhr.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="accordion-item">
             <h2 class="accordion-header" id="headingOne">
               <button
                 class="accordion-button collapsed text-white bg-secondary"
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#collapseOne"
                 aria-expanded="true"
                 aria-controls="collapseOne"
               >
               <span class="badge badge-white bg-primary">News:</span> ${element["title"]}
               </button>
             </h2>
             <div
               id="collapseOne"
               class="accordion-collapse collapse show"
               aria-labelledby="headingOne"
               data-bs-parent="#accordionExample"
             >
               <div class="accordion-body">
                ${element["description"]}.<a href="${element["url"]}" target="_bla">Read more Here....</a>
               </div>
             </div>
           </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Error :/");
  }
};

xhr.send();


