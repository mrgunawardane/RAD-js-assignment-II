

const checkboxes = document.querySelectorAll(".package");

document.body.addEventListener('click', (e) => {
  for (const c of checkboxes) {
    c.checked = false
  }

  const clickedCheckbox = [...checkboxes].find(c => c === e.target)
  clickedCheckbox.checked = true
})