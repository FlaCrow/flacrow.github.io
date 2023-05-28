fetch(
  "https://api.github.com/repos/FlaCrow/ShowTracker/branches/develop"
)
  .then(response => {
    response.json().then(json => {
      const element = document.querySelectorAll(".about.projects h5")
      console.log(json);
      const date = new Date(json.commit.commit.author.date);
      element[1].textContent = date.toLocaleString('en-GB');
    });
  })
  .catch(error => {
    console.log(error);
  });