const inpBox = document.getElementById("inp");
const result = document.getElementById("data");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (inpBox.value != "") getShowsData();
});

inpBox.addEventListener('keypress',(e)=>{
 if(e.which===13&&inpBox.value){
  getShowsData();
 }
})

function getShowsData() {
  const textData = inpBox.value;
  const url = `https://api.tvmaze.com/search/shows?q=${textData}`;
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }

  axios
    .get(url)
    .then((res) => {
      for (let item of res.data) {
        if (item.show.image) {
          const card = document.createElement("div");
          card.id='card';
          const image = document.createElement("img");
          image.src = item.show.image.medium;
          card.append(image);
          const heading=document.createElement('h2');
          const headingdata=document.createTextNode(item.show.name);
          heading.append(headingdata);
          card.append(heading);
        if (item.show.summary) {
          const showdata = document.createElement("p");
          showdata.innerHTML=item.show.summary;
          card.append(showdata);
        }
          result.append(card);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
    inpBox.value="";
}
