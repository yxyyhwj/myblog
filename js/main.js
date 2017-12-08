var items = document.querySelectorAll('my-markdown')

items.forEach(item=>{
    item.innerHTML = marked(item.textContent)
})