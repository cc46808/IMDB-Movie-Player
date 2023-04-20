function updateUrl() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    var movieBtn = document.getElementById('goToMovieBtn');
    if (url.match(/tt\d+/)) {
      var imdbId = url.match(/tt\d+/);
      var newUrl = "https://2embed.org/embed/movie?imdb=" + imdbId[0];
      movieBtn.disabled = false;
      movieBtn.addEventListener("click", function () {
        chrome.tabs.create({ url: newUrl });
      });
    } else {
      movieBtn.disabled = true;
      movieBtn.innerHTML = "<pre>No Movie Link Found\n <a target='_blank' href='https://imdb.com'>Visit imdb.com</a>\nto Select a Title</pre>";
    }
  });
}

updateUrl();
