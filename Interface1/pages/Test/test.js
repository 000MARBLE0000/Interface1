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
    location.href = '../Settings_Canvas_1/Settings_Canvas_1.html';
  }
  
  const emergencyButton = document.getElementById('emergencyButton');
  const emergencyModal = document.getElementById('emergencyModal');
  const noButton = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');
  const countdownEl = document.getElementById('countdown');
  const emergencyText = document.getElementById('emergencyText');
  
  let countdown;
  
  emergencyButton.onclick = function() {
    emergencyModal.style.display = 'block';
    let timeLeft = 10;
    countdownEl.textContent = timeLeft;
    
    countdown = setInterval(function() {
      timeLeft--;
      countdownEl.textContent = timeLeft;
      if(timeLeft <= 0) {
        clearInterval(countdown);
        emergencyText.textContent = "Emergency contact has been called.";
        noButton.style.display = 'none';
        yesButton.style.display = 'none';
        backButton.style.display = 'block';
      }
    }, 1000);
  }
  
  noButton.onclick = function() {
    emergencyModal.style.display = 'none';
    clearInterval(countdown);
  }
  
  const backButton = document.getElementById('backButton');
  
  // ...
  
  yesButton.onclick = function() {
    emergencyText.textContent = "Emergency contact has been called.";
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    backButton.style.display = 'block'; // 显示返回按钮
    clearInterval(countdown);
  }
  
  backButton.onclick = function() {
    emergencyModal.style.display = 'none';
    noButton.style.display = 'block';
    yesButton.style.display = 'block';
    backButton.style.display = 'none'; // 隐藏返回按钮
    emergencyText.textContent = "Do you have an emergency?";
    clearInterval(countdown);
  }
  