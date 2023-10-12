// html'den gelenler
export const ele = {
    list: document.querySelector('#list'),
    playingInfo: document.querySelector('.playing'),
    searchForm: document.querySelector('#search-form'),
    title: document.querySelector('.songs #title'),
  };
  
  // arayüz işlemleri
  export const renderCards = (songs) => {
    // eski şarkıları sil
    ele.list.innerHTML = '';
  
    songs.forEach((song) => {
      // div oluşturma
      const div = document.createElement('div');
  
      // kart elemanına ileride js'den erişmek
      // için bazı verleri ekliyecez
      // conditional chaining ?.
      div.dataset.url = song.hub?.actions.pop().uri;
      div.dataset.title = song.title;
      div.dataset.photo = song.images.coverart;
  
      // class verme
      div.className = 'card';
  
      // içeriği belirleme
      div.innerHTML = `
              <figure id="figure">
              <label class="container">
  <input checked="checked" type="checkbox">
  <div class="checkmark">
    <svg viewBox="0 0 256 256">
    <rect fill="none" height="256" width="256"></rect>
    <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#FFF" fill="none"></path></svg>
  </div>
</label>
                <img id="figure" src="${song.images?.coverart}" />
                <div class="play">
                  <i id="play-btn" class="bi bi-play-fill"></i>
                </div>
              </figure>
              <h4 id="figure">${song.subtitle}</h4>
              <p id="figure">${song.title}</p>
      `;
  
      ele.list.appendChild(div);
    });
  };
  
  // müzik bilgilerini ekrana basar
  export const renderPlayingInfo = (data) => {
    ele.playingInfo.innerHTML = `
        <div class="info ">
          <img
          class="animate"
            src="${data.photo}"
          />
          <div>
            <p>Şuan Oynatilıyor</p>
            <h3>${data.title}</h3>
          </div> 
        </div>
  
        <audio controls autoplay>
          <source
            src="${data.url}"
          />
        </audio>
    `;
  };
  
  export const renderLoader = () => {
    ele.list.innerHTML = `
    <ul class="wave-menu">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  
    `;
  };