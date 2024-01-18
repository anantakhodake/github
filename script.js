var api_url = "https://api.github.com/users/viveknimbolkar";

const GetUser = async () => {
  const resp = await fetch(api_url);
  var user = await resp.json();
  console.log(user);
  document.getElementById("name").innerHTML = user.name;
  document.getElementById("bio").innerHTML = user.bio;
  document.getElementById("location").innerHTML = user.location;
  document.getElementById("twitter_username").innerHTML = user.twitter_username;
  document.getElementById("link").innerHTML = user.html_url;
  document.getElementById("avatar").src = user.avatar_url;
};
GetUser();

// fetching the repos description

var repo_url = "https://api.github.com/users/viveknimbolkar/repos";

const GetRepos = async () => {
  const result = await fetch(repo_url);
  var repos = await result.json();
  var box = document.getElementById("boxWrapper");
  repos.forEach((repo, i) => {
    console.log(repo.topics)
    var button =""
    repo.topics.forEach((topic)=>{
        button+= `<button class="btn">${topic}</button>`;
    })
    const card = 
    `    <div class="box-container">
        <h1 id="title">${repo.name}</h1>
        <p>${repo.description}</p>
        <div class="buttons">
        ${repo.topics.length>1?button:""}
          
        </div>
      </div>`;
      console.log(card);
    const element = document.createElement("div");
    element.innerHTML = card;
    box.appendChild(element);
  });
};
GetRepos();
