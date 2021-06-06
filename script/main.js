function addClassById(id, classes) {
	"use-strict"

	const elem = document.getElementById(id)
	const currentClassNames = elem.className || ''
	elem.className = `${currentClassNames} ${classes}`

}

function addClassAfterTime(id, classNames, time) {
	"use strict"
	setTimeout(() => {
		addClassById(id, classNames)
	}, time)
}

function shriknkPauseButton() {
	"use strict"
	addClassAfterTime("pause-button-container", "shrink", 2300)
}

function handleClickLogo() {
	"use strict"

	addClassById("pt-logo", "expanded")
	addClassById("main", "start")

	shriknkPauseButton()

	addClassAfterTime("alert-sound", "show", 3500)

}