$(function () {
  $(window).on('scroll', function () {
    //Changing nav style after scrolling 80px
    if ($(window).scrollTop() > 80) {
      $('header').addClass('wider');
    } else {
      $('header').removeClass('wider');
    };
    //Show Scroll-to-top button after scrolling 650px
    if ($(window).scrollTop() > 650) {
      $('#scroll-to-top').addClass('shown');
    } else {
      $('#scroll-to-top').removeClass('shown');
    };
  });
});

/* // GitHub API
const api = 'https://api.github.com/users/themidfire/repos?per_page=100';

const repos = 'https://github.com/THEMIDFIRE?tab=repositories';

// Get repositories
$.get(api, function (data, status, xhr) {
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

      languages.sort();

      // Add repository info to the page
      $(document).ready(function () {
        let repoElement = $('<div class="repos"></div>');
        let more = $('<div class="more"></div>');
        let languagesDiv = $('<div class="languages"></div>');
        let linksDiv = $('<div class="links"></div>');
        let languagesList = $('<ul></ul>');
        languages.forEach(language => {
          let languageItem = $(`<li>${language}</li>`);
          languagesList.append(languageItem);
        });
        
        repoElement.append($(`<h3>${name}</h3>`));
        repoElement.append($(`<p>${description}</p>`));

        languagesDiv.append(languagesList);
        more.append(languagesDiv);
        repoElement.append(more);

        linksDiv.append($(`<a href="${livePreview}" title="Live Preview"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`));
        linksDiv.append($(`<a href="${source}" title="Source Code"><i class="fa-solid fa-code"></i></a>`));
        more.append(linksDiv);

        $('#projectInfo').append(repoElement);
      });
    });
  });

    if (status === 'success') {
    const remainingRequests = xhr.getResponseHeader('x-ratelimit-remaining');
    if (remainingRequests <= 0) {
      // Display a message or redirect the user
      alert(`Github API rate limit to display my repositories has been reached. Please visit some other time OR you can visit my Github to see all the repos ${repos}`);
    }
  }

  let totalRepos = data.length;
  $('#total').append(totalRepos);

  let visibleRepos = Math.min(counter, totalRepos);
  $('#visible').append(visibleRepos);

  fail(function(xhr, status, error) {
    alert(`Github API rate limit to display my repositories has been reached. Please visit some other time OR you can visit my Github to see all the repos ${repos}`);
  });
}); */

// GitHub API
const api = 'https://api.github.com/users/themidfire/repos?per_page=100';

const repos = 'https://github.com/THEMIDFIRE?tab=repositories';

// Get repositories
$.get(api)
  .done(function (data, status, xhr) {
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

        languages.sort();

        // Add repository info to the page
        $(document).ready(function () {
          let repoElement = $('<div class="repos"></div>');
          let more = $('<div class="more"></div>');
          let languagesDiv = $('<div class="languages"></div>');
          let linksDiv = $('<div class="links"></div>');
          let languagesList = $('<ul></ul>');
          languages.forEach(language => {
            let languageItem = $(`<li>${language}</li>`);
            languagesList.append(languageItem);
          });

          repoElement.append($(`<h3 class="repoTitle">${name}</h3>`));
          repoElement.append($(`<p class="description">${description}</p>`));

          languagesDiv.append(languagesList);
          more.append(languagesDiv);
          repoElement.append(more);

          linksDiv.append($(`<a href="${livePreview}" title="Live Preview"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`));
          linksDiv.append($(`<a href="${source}" title="Source Code"><i class="fa-solid fa-code"></i></a>`));
          more.append(linksDiv);

          $('#projectInfo').append(repoElement);
        });
      });
    });

    let totalRepos = data.length;
    $('#total').append(totalRepos);

    let visibleRepos = Math.min(counter, totalRepos);
    $('#visible').append(visibleRepos);


    const remainingRequests = xhr.getResponseHeader('x-ratelimit-remaining');
    if (remainingRequests <= 0) {
      let message = `It seems that Github api requests' limit have been reached. Please try again later or visit my <a href="${repos}">Github profile</a> to view all repos`;
      $('#rateLimitMessage').text(message);
    }
  })
  .fail(function (xhr, status, error) {
    let message = `It seems that Github api requests' limit have been reached. Please try again later or visit my <a href="${repos}">Github profile</a> to view all repos`;
    $('#errorMessage').html(message);
  });