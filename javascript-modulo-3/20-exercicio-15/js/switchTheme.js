import { main, root } from '../index.js'

export function switchTheme() {
  document
    .getElementById('themeSwitcher')
    .addEventListener('click', function () {
      if (main.dataset.theme == 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#8b5c04')
        main.dataset.theme = 'light'
      } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#f1ad2c')
        main.dataset.theme = 'dark'
      }
    })
}
