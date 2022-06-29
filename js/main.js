let list = document.querySelector(".list")

for (num of films){
    var newItem = document.createElement("li")
	var nameP = document.createElement("h2")
	var img = document.createElement("img")
	var jenreSpan = document.createElement("p")
	list.appendChild(newItem)
	newItem.appendChild(img)
	newItem.appendChild(nameP)
	newItem.appendChild(jenreSpan)
	nameP.textContent = `${num.title}`
	img.src = `${num.poster}`
	jenreSpan.textContent = `Genres: ${num.genres}`
	newItem.classList.add("item")
	nameP.classList.add("name")
	jenreSpan.classList.add("genre")
	img.classList.add("img")
}