const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// NEW SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

// SCROLL MAGIC
// init controller
const controller = new ScrollMagic.Controller();

/** CREATE A SCENE
* @param duration The duration of the scene
* @param triggerElement Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
* @param triggerHook Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.
* @method setPin Pin an element for the duration of the scene.
*/
let scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller) // add a scene to a ScrollMagic Controller

// VIDEO ANIMATION
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
  scrollPos = e.scrollPos / 1000;
})

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  video.currentTime = delay;
}, 41.6)
