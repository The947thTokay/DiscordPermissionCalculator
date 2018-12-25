let inputs = document.getElementsByClassName('input')
let permissionInputs = document.getElementsByClassName('permission')
let adminBox = document.getElementById('administrator')

const update = function () {
  if (adminBox.checked === true) {
    for (let i = 0; i < permissionInputs.length; i++) {
      permissionInputs[i].setAttribute('disabled', 'disabled')
    }
  } else {
    for (let i = 0; i < permissionInputs.length; i++) {
      permissionInputs[i].removeAttribute('disabled')
    }
  }
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', update, false)
}
