function addClassById(id, classes) {
	"use-strict"

	const elem = document.getElementById(id)
	const currentClassNames = elem.className || ''
	elem.className = `${currentClassNames} ${classes}`

}

function shriknkPauseButton() {
	"use strict"
	setTimeout(() => {
		addClassById("pause-button-container", "shrink")
	}, 1600)
}

function handleClickLogo() {
	"use strict"

	addClassById("pt-logo", "expanded")
	addClassById("main", "start")
	

	shriknkPauseButton()
}