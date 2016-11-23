document.querySelectorAll('.circle').forEach(function(circle) {
    circle.style.display = 'block'
})

//timeline controls the direction and speed of the tween.
var timeline = new TimelineLite({
    paused: true
})

CSSPlugin.defaultTransformPerspective = 100;
timeline.staggerTo('.circle', 2, {  //2 is the amount of time so 2 seconds.
        backgroundColor: 'blue',
        // x: () => Math.random() * 500, //makes random x location
        // y: () => Math.random() * 300,
        x: 300,
        y: 100,
        width: '+=50',
        height: '+=50',
        rotationX: 45,
        scaleX: 0.8,
        z: 10,
        ease: Power0.easeNone  //overtime change value as a curve instead of linear
    }, 1)


//
// TweenLite.to('.circle', 0, {
//     x: () => Math.random() * 500,
//     y: () => Math.random() * 300,
// })


//this lets you take a animation and add it to your timeline.
// timeline.add(
//     TweenMax.to('.circle', 2, {  //2 is the amount of time so 2 seconds.
//         backgroundColor: 'blue',
//         // x: () => Math.random() * 500, //makes random x location
//         // y: () => Math.random() * 300,
//         x: 300,
//         y: 100,
//         width: '+=50',
//         height: '+=50',
//         ease: Power0.easeNone  //overtime change value as a curve instead of linear
//     })
// )

window.addEventListener('scroll', (e) => {
    var scrollTop = window.scrollY
    var docHeight = document.body.clientHeight
    var winHeight = window.innerHeight
    var scrollPercent = (scrollTop) / (docHeight - winHeight)
    var scrollPercentRounded = Math.round(scrollPercent * 100) / 100
// console.log('Scrolling: ' + scrollTop)
//progress is between 0 to 1
    timeline.progress(scrollPercent).pause()
})
