const linksSocialMedia = {
  github: 'gusvicenzi',
  instagram: 'gusvicenzi',
  youtube: 'UCurjjEKAmQiEaLllVZs_EHg',
  facebook: 'gustavovicenzi12',
  twitter: 'gusvicenzi'
};

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = user;
  // userName.textContent = user;
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userProfileImage.src = data.avatar_url;
      userBio.textContent = data.bio;
      userGithubLink.href = data.html_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
