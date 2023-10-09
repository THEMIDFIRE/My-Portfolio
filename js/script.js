$(function () {
  $(window).on("scroll", function () {
    //Changing nav style after scrolling 80px
    if ($(window).scrollTop() > 80) {
      $("header").addClass("wider");
    } else {
      $("header").removeClass("wider");
    };
    //Show Scroll-to-top button after scrolling 650px
    if ($(window).scrollTop() > 650) {
      $("#scroll-to-top").addClass("shown");
    } else {
      $("#scroll-to-top").removeClass("shown");
    };
  });
});

// GitHub API
const api = "https://api.github.com/users/themidfire/repos?per_page=100";

// Get repositories
$.get(api, function (data) {
  const sortRepos = data.sort((a, b) => parseFloat(b.created_at) - parseFloat(a.created_at)); // Sort repos by creation date descendingly

  let counter = 0;

  sortRepos.forEach(repo => {
    if (counter >= 6) {
      return false; // Getting the latest 6 repositories then breaking loop
    }

    let name = repo.name;
    let description = repo.description;
    let source = repo.html_url;
    let livePreview = repo.homepage;

    // Increment the counter before making the AJAX request
    counter++;

    // Get languages used in each repository
    $.get(repo.languages_url, function (languagesData) {
      let languages = Object.keys(languagesData);

      // Add repository info to the page
      $(document).ready(function () {
        let repoElement = $('<div></div>');
        repoElement.append($('<h3></h3>').text(name));
        repoElement.append($('<p></p>').text(description));
        repoElement.append($('<a></a>').text('Source').attr('href', source));
        repoElement.append($('<a></a>').text('Live Preview').attr('href', livePreview));

        $('#projectInfo').append(repoElement);
      });
    });
  });
});