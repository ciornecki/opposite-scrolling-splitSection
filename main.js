const dummySections = document.querySelectorAll('.dummy-section')

const parallaxSection = document.querySelector('.projects-desktop-cnt')
const parallaxItems = document.querySelectorAll('.projects-parallax')
const section = document.querySelector('.projects')

const prevSection = dummySections[0]
const nextSection = dummySections[1]

let viewport = window.innerWidth

let prevSectionOffset = prevSection.offsetTop
let firstAnchorPoint = prevSectionOffset + prevSection.offsetHeight
let secondAnchorPoint = nextSection.offsetTop - nextSection.offsetHeight

const projectsParallaxHandler = () => {
	if (viewport < 992) return

	let scrollTop = window.pageYOffset
	let scrollToAnchor = nextSection.offsetHeight + nextSection.offsetTop

	console.log(`Scroll top: ${scrollTop}`)
	console.log(`firstAnchor: ${firstAnchorPoint}`)
	console.log(`secondAnchor: ${secondAnchorPoint}`)
	console.log(`scrollToAnchor: ${scrollToAnchor}`)

	if (scrollTop >= firstAnchorPoint) {
		parallaxSection.classList.add('fixed-pr')

		/* 		parallaxItems[0].style.transform = `translate(0px, -${scrollTop - firstAnchorPoint}px)`
		parallaxItems[1].style.transform = `translate(0px, ${scrollTop - firstAnchorPoint}px)` */
	}
	if (scrollTop >= secondAnchorPoint || scrollTop < firstAnchorPoint) {
		parallaxSection.classList.remove('fixed-pr')
	}
	if (scrollTop >= secondAnchorPoint) {
		parallaxItems[0].classList.add('bottom')
	} else {
		parallaxItems[0].classList.remove('bottom')
	}

	if (parallaxSection.classList.contains('fixed-pr')) {
		parallaxItems[0].style.transform = `translate(0px, -${scrollTop - firstAnchorPoint}px)`
		parallaxItems[1].style.transform = `translate(0px, ${scrollTop - firstAnchorPoint}px)`
	}
}
/* wywoluje parralax funkcje na scrollu */
window.onscroll = () => {
	projectsParallaxHandler()
}
