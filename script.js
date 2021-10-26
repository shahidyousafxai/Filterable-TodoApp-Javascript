const submitbtn = document.getElementById('input-btn')
const inputval = document.getElementById('input-text')
const todolist = document.getElementById('items-list')
const delbtn = document.getElementById('del-btn')
const filter = document.getElementById('filter')

submitbtn.addEventListener('click', addtodo)
todolist.addEventListener('click', deletetodo)
filter.addEventListener('keyup', filteritems)

function addtodo() {
  // console.log(inputval)

  //create new li element
  var li = document.createElement('li')

  //create new li element
  var p = document.createElement('p')

  //add class to p
  p.className = 'item-p'

  //class added
  li.classList = 'item'

  //append p to li
  li.appendChild(p)

  //append value to li
  p.appendChild(document.createTextNode(inputval.value))

  //create delete button
  var btn = document.createElement('button')

  //class added
  btn.className = 'del-btn'

  //append text node
  btn.appendChild(document.createTextNode('\u00D7'))

  //add delete btn
  li.appendChild(btn)

  //append li to ul
  todolist.appendChild(li)
}

function deletetodo(e) {
  if (e.target.classList.contains('del-btn')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement
      // console.log(li)
      todolist.removeChild(li)
    }
  }
}

function filteritems(e) {
  var text = e.target.value.toLowerCase()

  var items = todolist.getElementsByTagName('li')

  Array.from(items).forEach(function (item) {
    var itemName = item.firstElementChild.textContent
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}
