let today = new Date ();
let thisYear = today.getFullYear;
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = `© Your Name ${thisYear}`;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub"]
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)

}

let messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', function (event) {
  event.preventDefault(); 


  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;


  console.log(`Name: ${usersName}, Email: ${usersEmail}, Message: ${usersMessage}`);


  messageForm.reset();


  let messageSection = document.getElementById('messages');
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
