let list = document.querySelector(".list")
let form = document.querySelector(".form")
let select = document.querySelector(".select")
let sorSelect = document.querySelector(".sor-select")
let input = document.querySelector(".input")
var newarr = []
let newSarr = []
var sett = new Set(newarr)
var setSort = new Set(newSarr)
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
films.forEach(el => {
	for (e of el.title[0]) {
		setSort.add(e)
	}
})
setSort.forEach(el => {
	var newOption = document.createElement("option")
	newOption.textContent = el
	newOption.value = el
	sorSelect.appendChild(newOption)
})
sorSelect.addEventListener("change", function () {
	list.innerHTML = ""
	var results = []
	let val = sorSelect.value
	films.forEach(elem => {
		if (elem.title[0].includes(val)) {
			results.push(elem)
		}
	})
	func(results, list)
})
form.addEventListener("submit", function(evt){
	evt.preventDefault()
	list.innerHTML = ""
	var resultse = []
	let val = input.value
	films.forEach(elem => {
		if (elem.title.includes(val)) {
			resultse.push(elem)
		}
	})
	func(resultse, list)
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