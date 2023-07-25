function updateTime() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  document.getElementById('time').textContent = `${hours}:${minutes}`;
  document.getElementById('date').textContent = `${year}-${month}-${day}`;
  document.getElementById('day').textContent = dayOfWeek;
}

// Update time every second
setInterval(updateTime, 1000);

function onClick() {
  location.href = '../Main_Canvas_1/Main_Canvas_1.html';
}

function onClick_1() {
  location.href = '../Maps_Canvas_1/Maps_Canvas_1.html';
}

function onClick_2() {
  location.href = '../Settings_Canvas_1/Settings_Canvas_1.html';
}

function onClick_3() {
  location.href = '../Emergency_Canvas_1/Emergency_Canvas_1.html';
}

function toggleDetails(contactNumber) {
  var detailsDiv = document.getElementById('contact' + contactNumber + 'Details');
  if (detailsDiv.style.display === 'none') {
    detailsDiv.style.display = 'block';
  } else {
    detailsDiv.style.display = 'none';
  }
}

function callPhone(phoneNumber) {
  window.open('tel:' + phoneNumber, '_self');
}

function handleAdd() {
  alert("Add Contact button clicked");
}

function handleDelete() {
  var deleteButtons = document.querySelectorAll('.delete-contact-button');
  for (var i = 0; i < deleteButtons.length; i++) {
    if (deleteButtons[i].style.display === 'none') {
      deleteButtons[i].style.display = 'block';
    } else {
      deleteButtons[i].style.display = 'none';
    }
  }
}


function handleUpdate() {
  alert("Update Contact button clicked");
}

// Get the modal
var modal = document.getElementById("addContactModal");

// Get the button that opens the modal
var btn = document.getElementById("addContact");

// Get the <span> element that closes the modal
var span = document.getElementById("closeAddContact");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the.AI<|im_sep|>

document.getElementById('newContactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;


  if (!name || !phone || !email || !address) {
    alert("All fields must be filled");
    return;
  }

  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  const contactName = document.createElement('h2');
  contactName.classList.add('contact-name');
  contactName.textContent = name;

  const contactPhone = document.createElement('p');
  contactPhone.classList.add('contact-phone');
  contactPhone.innerHTML = `Phone: <a href="tel:${phone}">${phone}</a>`;

  const contactDetails = document.createElement('div');
  contactDetails.classList.add('contact-details');
  contactDetails.style.display = 'none';
  contactDetails.innerHTML = `
    <p>Email: ${email}</p>
    <p>Address: ${address}</p>
  `;

  contactCard.appendChild(contactName);
  contactCard.appendChild(contactPhone);
  contactCard.appendChild(contactDetails);

  document.getElementById('contactWindow').appendChild(contactCard);
  
  modal.style.display = "none";
});

// ...Rest of your code here

let contactId = document.getElementsByClassName('contact-card').length + 1; // Generate unique ID based on the number of existing contacts

const contactName = document.createElement('h2');
contactName.classList.add('contact-name');
contactName.textContent = name;
contactName.setAttribute('onclick', `toggleDetails(${contactId})`);

const contactDetails = document.createElement('div');
contactDetails.classList.add('contact-details');
contactDetails.style.display = 'none';
contactDetails.innerHTML = `
  <p>Email: ${email}</p>
  <p>Address: ${address}</p>
`;
contactDetails.id = 'contact' + contactId + 'Details';

// ...Rest of your code here


function handleBack(event) {
  event.preventDefault();
  modal.style.display = "none";
}


document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-contact-button')) {
    var name = event.target.previousElementSibling.innerText;
    document.querySelector('#delete-name').innerText = name;
    document.querySelector('#confirm-delete-modal').style.display = 'block';
  } 
});

document.body.addEventListener('click', function(event) {
  if (event.target.id === 'confirm-delete-button') {
    deleteContact(event.target);  // 调用我们之前创建的deleteContact函数来删除联系人
    document.querySelector('#confirm-delete-modal').style.display = 'none';
  } else if (event.target.id === 'cancel-delete-button') {
    document.querySelector('#confirm-delete-modal').style.display = 'none';
  }
});

function deleteContact(button) {
  var contactCard = button.parentNode.parentNode;  // 获取要删除的contact-card div
  contactCard.parentNode.removeChild(contactCard);  // 从其父元素中移除该div
}
