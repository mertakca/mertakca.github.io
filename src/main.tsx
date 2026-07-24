import './index.css'
import './App.css'

const yearNode = document.getElementById('current-year')

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear())
}
