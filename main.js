let inputs = document.getElementsByClassName('input')
let permissionInputs = document.getElementsByClassName('permission')
let adminBox = document.getElementById('administrator')

let permissionInteger = 0
const authorizationUrl = 'https://discordapp.com/api/oauth2/authorize?client_id={clientId}&scope=bot&permissions={permissions}'
const update = function () {
  if (adminBox.checked === true) {
    for (let i = 0; i < permissionInputs.length; i++) {
      permissionInputs[i].setAttribute('disabled', 'disabled')
    }

    permissionInteger = adminBox.value
    displayResults()
  } else {
    for (let i = 0; i < permissionInputs.length; i++) {
      permissionInputs[i].removeAttribute('disabled')
    }

    let checkedInputs = []
    for (let i = 0; i < permissionInputs.length; i++) {
      if (permissionInputs[i].checked === true) {
        checkedInputs.push(permissionInputs[i])
      }
    }

    permissionInteger = 0
    for (let i = 0; i < checkedInputs.length; i++) {
      permissionInteger = permissionInteger | checkedInputs[i].value
    }
    displayResults()
  }
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', update, false)
}

function displayResults() {
  let result = authorizationUrl
    .replace('{clientId}', encodeURIComponent(document.getElementById('clientId').value))
    .replace('{permissions}', String(permissionInteger))
  let link = document.getElementById('result')
  link.innerHTML = result
  link.href = result
  document.getElementById('permissionsInteger').innerHTML = permissionInteger
}

displayResults()
