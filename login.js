const signupTab = document.getElementById('signup-tab');
const loginTab = document.getElementById('login-tab');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const messageBox = document.getElementById('form-message');

const getUsers = () => JSON.parse(localStorage.getItem('users') || '{}');
const setUser = (email, data) => {
  const users = getUsers();
  users[email] = data;
  localStorage.setItem('users', JSON.stringify(users));
};

signupTab.onclick = () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  messageBox.textContent = '';
};

loginTab.onclick = () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  messageBox.textContent = '';
};

signupForm.onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    return showError("Invalid email format.");
  }
  if (password !== confirm) {
    return showError("Passwords do not match.");
  }

  const users = getUsers();
  if (users[email]) {
    showError("Email already registered. Try logging in.");
    loginTab.click();
    return;
  }

  setUser(email, { name, password });
  localStorage.setItem('loggedInUser', email);
  window.location.href = 'index.html';
};

loginForm.onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;

  const users = getUsers();
  if (!users[email]) return showError("User not found.");
  if (users[email].password !== password) return showError("Incorrect password.");

  localStorage.setItem('loggedInUser', email);
  window.location.href = 'index.html';
};

document.getElementById('guest-btn').onclick = () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
};

function showError(msg) {
  messageBox.style.color = 'red';
  messageBox.textContent = msg;
}
