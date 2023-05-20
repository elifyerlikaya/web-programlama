function veriAlFilm(){
  fetch('https://imdb-api.com/tr/API/Top250Movies/k_3t39qfwv')
  .then(function(resp) {return resp.json()})
  .then(function(data) {
      console.log(data);
      veriYazFilm(data);
  }
  )
}

function veriAlDizi(){
fetch('https://imdb-api.com/tr/API/Top250TVs/k_3t39qfwv')
.then(function(resp) {return resp.json()})
.then(function(data) {
    console.log(data);
    veriYazDizi(data);
}
)
}

function veriYazFilm(data) {
  let row = document.getElementById('film');
  row.innerHTML = `<div class="col">
  <div class="card">
    <img
      src="${data.items[140].image}"
      class="card-img-top"
      alt="Poster"
    />
    <div class="card-body">
      <h3 class="card-title">${data.items[140].title}</h3>
      <p class="card-text">Yapım yılı: ${data.items[140].year}</p>
      <p class="card-text">Yönetmen ve Oyuncular: ${data.items[140].crew}</p>
      <p class="card-text">IMDb Puanı: ${data.items[140].imDbRating}</p>
    </div>
  </div>
</div>

<div class="col">
  <div class="card">
    <img
      src="${data.items[109].image}"
      class="card-img-top"
      alt="Poster"
    />
    <div class="card-body">
      <h3 class="card-title">${data.items[109].title}</h3>
      <p class="card-text">Yapım yılı: ${data.items[109].year}</p>
      <p class="card-text">Yönetmen ve Oyuncular: ${data.items[109].crew}</p>
      <p class="card-text">IMDb Puanı: ${data.items[109].imDbRating}</p>
    </div>
  </div>
</div>

<div class="col">
  <div class="card">
    <img
      src="${data.items[144].image}"
      class="card-img-top"
      alt="Poster"
    />
    <div class="card-body">
      <h3 class="card-title">${data.items[144].title}</h3>
      <p class="card-text">Yapım yılı: ${data.items[144].year}</p>
      <p class="card-text">Yönetmen ve Oyuncular: ${data.items[144].crew}</p>
      <p class="card-text">IMDb Puanı: ${data.items[144].imDbRating}</p>
    </div>
  </div>
</div>`
}

function veriYazDizi(data) {
let row = document.getElementById("dizi");
row.innerHTML = `<div class="col">
<div class="card">
  <img
    src="${data.items[19].image}"
    class="card-img-top"
    alt="Poster"
  />
  <div class="card-body">
    <h3 class="card-title">${data.items[19].title}</h3>
    <p class="card-text">Yapım yılı: ${data.items[19].year}</p>
    <p class="card-text">Yönetmen ve Oyuncular: ${data.items[19].crew}</p>
    <p class="card-text">IMDb Puanı: ${data.items[19].imDbRating}</p>
  </div>
</div>
</div>

<div class="col">
<div class="card">
  <img
    src="${data.items[190].image}"
    class="card-img-top"
    alt="Poster"
  />
  <div class="card-body">
    <h3 class="card-title">${data.items[190].title}</h3>
    <p class="card-text">Yapım yılı: ${data.items[190].year}</p>
    <p class="card-text">Yönetmen ve Oyuncular: ${data.items[190].crew}</p>
    <p class="card-text">IMDb Puanı: ${data.items[190].imDbRating}</p>
  </div>
</div>
</div>

<div class="col">
<div class="card">
  <img
    src="${data.items[14].image}"
    class="card-img-top"
    alt="Poster"
  />
  <div class="card-body">
    <h3 class="card-title">${data.items[14].title}</h3>
    <p class="card-text">Yapım yılı: ${data.items[14].year}</p>
    <p class="card-text">Yönetmen ve Oyuncular: ${data.items[14].crew}</p>
    <p class="card-text">IMDb Puanı: ${data.items[14].imDbRating}</p>
  </div>
</div>
</div>`
}

veriAlFilm();
veriAlDizi();