VANTA.NET({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })

new TypeIt("#description", {
    speed: 125,
    waitUntilVisible: true,
    loop: true,
})
.type("Web Developer")
.pause(1000)
.delete(13)
.pause(300)
.type("Software Engineer")
.pause(1000)
.delete(17)
.go();