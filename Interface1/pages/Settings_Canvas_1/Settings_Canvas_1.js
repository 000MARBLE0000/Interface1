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
  location.href = '../Contacts_Canvas_1/Contacts_Canvas_1.html';
}

function onClick_3() {
  location.href = '../Emergency_Canvas_1/Emergency_Canvas_1.html';
}

function onClick_4() {
  location.href = '../Settings_Canvas_2/Settings_Canvas_2.html'; // 替换为你的新页面的路径
}

function onClick_5() {
  location.href = '../Settings_Canvas_3/Settings_Canvas_3.html'; // 替换为你的新页面的路径
}






