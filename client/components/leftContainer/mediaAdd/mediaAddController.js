// mediaAddController.js

var searchYouTube = function (query) {
  var encodedQuery = encodeURIComponent(query);
  var searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + encodedQuery + YOUTUBE_API_KEY;
  $.ajax({
    type: "GET",
    url: searchUrl,
    success: function (response) {
      var results = [];
      response.items.forEach(function (e) {
        if (e.id.videoId) {
          results.push({
            img: e.snippet.thumbnails.default.url,
            title: e.snippet.title,
            id: e.id.videoId
          });
        }
      });
      console.log(results);
    }
  });
};