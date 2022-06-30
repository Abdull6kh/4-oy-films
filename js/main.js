let list = document.querySelector(".list")
let select = document.querySelector(".select")
var newarr = []
var sett = new Set(newarr)
func(films, list)
films.forEach(el => {
	for (e of el.genres) {
		sett.add(e)
	}
})
sett.forEach(el => {
	var newOption = document.createElement("option")
	newOption.textContent = el
	newOption.value = el
	select.appendChild(newOption)
})
select.addEventListener("change", function () {
	list.innerHTML = ""
	var result = []
	let val = select.value
	films.forEach(elem => {
		if (elem.genres.includes(val)) {
			result.push(elem)
		}
	})
	func(result, list)
})

function func(arr, node) {
	for (num of arr) {
		var newItem = document.createElement("li")
		var nameP = document.createElement("h2")
		var img = document.createElement("img")
		var jenreSpan = document.createElement("p")
		node.appendChild(newItem)
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
}