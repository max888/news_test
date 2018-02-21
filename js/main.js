$(document).ready(function() {
    console.log("ready!");
    let sportsFeed = []
    $.ajax({url: "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=731eb5bd57a74ed7a231f40341359bc3", success: function(result){
      $('#loading').hide()
      var articles = result.articles
      for (let article of articles) {
        sportsFeed.push({
          title: article.title,
          url: article.url
        })
      }
      $.each(sportsFeed, function(key, value){
            $(".sportsFeed").append('<a href="' + value.url + '" target="_blank">' + '<li>' + '<span>' + (key + 1 + '.') + '</span>' + truncate(value.title, 35) + '</li>' + '</a>');
        });

    }});

    function truncate(string, value) {
      if (string) {
        if (string.length >= value) {
          return string.substring(0, value) + '...'
        }
        return string
      }
    }
});

// EXAMPLE ONLY:
// With more time I would implement something like the below so no need for jQuery.
// Although as it uses es6 techniques would still require polyfills for older broswers
// document.addEventListener("DOMContentLoaded", function(event) {
//   function getNewsFeed() {
//     const newsFeed = fetch('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=731eb5bd57a74ed7a231f40341359bc3').then(function(response) {
//       let newsFeedJson = response.json()
//       let articles = newsFeedJson.articles
//       // Loop over articles and insert into DOM...
//     }).catch(function(error) {
//       console.error('Error fetching news: ', error)
//     })
//   }
//   getNewsFeed()
// });
