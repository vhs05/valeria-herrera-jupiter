const GITHUB_USERNAME = 'vhs05'; // Replace with your GitHub username

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => response.json())
  .then(repositories => {
    console.log(repositories); // Log the repositories to the console
    displayRepositories(repositories); // Call function to display repositories
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });

function displayRepositories(repositories) {
  const projectSection = document.getElementById('Projects');
  const projectList = projectSection.querySelector('ul');

  repositories.forEach(repo => {
    const project = document.createElement('li');
    project.innerText = repo.name;
    projectList.appendChild(project);
  });
}

// Existing code for skills, message form, etc.
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `© Your Name ${thisYear}`;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;

  console.log(`Name: ${usersName}, Email: ${usersEmail}, Message: ${usersMessage}`);

  messageForm.reset();

  let messageSection = document.getElementById('Messages');
  let messageList = messageSection.querySelector('#messageList');

  let newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>:
    <span>${usersMessage}</span>
  `;

  let removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';

  removeButton.addEventListener('click', function () {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});

fetch("https://api.artic.edu/api/v1/artworks")
  .then((response) => response.json())
  .then((data) => {
    console.log("Artworks:", data); // Log the response to the console
  })
  .catch((error) => {
    console.error("Error fetching artworks:", error);
  });