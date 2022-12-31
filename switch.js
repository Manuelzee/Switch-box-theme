function toggleTheme() {
  document.documentElement.classList.toggle('light-theme');
  document.documentElement.classList.toggle('dark-theme');
}

document.getElementById('theme-switch').addEventListener('click', toggleTheme);
