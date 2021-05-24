function handleClickLogo() {
	const logoContainer = document.getElementById("pt-logo")
	const currentClassNames = logoContainer.className
	logoContainer.className = `${currentClassNames} expanded`
	
	const mainDiv = document.getElementById("main")
	const mainClassNames = mainDiv.className
	mainDiv.className = `${mainClassNames} start`
}