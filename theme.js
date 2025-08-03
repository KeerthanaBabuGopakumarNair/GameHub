const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.classList.toggle('dark', currentTheme === 'dark');
toggle.checked = currentTheme === 'dark';

toggle.addEventListener('change', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
});
