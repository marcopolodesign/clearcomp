let pageName = document.querySelector('[data-barba=container]');
let preLoad = document.querySelectorAll('.pre-load > div:not(:last-child)');
let header = document.querySelector('header')
let preloaderCaption = document.querySelector('.pre-load div > span');
let loadingCaption = document.querySelector('.pre-load div p');
let menuTl;
let menu;

const runScripts = () => {
  setTimeout(() => {
    moreAnchors();
  }, 3000);

  const moreAnchors = () => {
    let anchors = Array.prototype.slice.call(document.querySelectorAll('.anchors, a'));
    let cursor = document.querySelector('.cursor');
    cursor.classList.remove('dn');
    let xLocation;
    let yLocation;
    
    const hoverCursor = () => {
      cursor.classList.add('is-hover');
    };
    
    const removeHoverCursor = () => {
      cursor.classList.remove('is-hover');
      cursor.classList.remove('is-shop');
      cursor.classList.remove('add-cart');
    };
    
    anchors.forEach((anchor) => {
      anchor.addEventListener('mouseover', () => {
        hoverCursor();
      });
    
      anchor.addEventListener('mouseleave', () => {
        removeHoverCursor();
      });
    });
  
    let distanceFromTop = 0;
    
    const moveCursor = (x, y) => {
      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
    
      // Calculate the distance between cursor and top of the screen
      distanceFromTop = y - window.pageYOffset;
      
    };
    
    document.addEventListener('mousemove', (event) => {
      moveCursor(event.pageX, event.pageY);
      xLocation = event.pageX;
      yLocation = event.pageY;
    });
    
    document.addEventListener('scroll', (event) => {
      moveCursor(xLocation, distanceFromTop + window.pageYOffset);
    });
  
  };


  const animatePosts = () => {

    let posts = document.querySelectorAll('.reusable-content > div');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.13) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: [0, 0.2, 1],
      }
    );

    posts.forEach((post) => {
      observer.observe(post);
    });
  }

  const animateNumber = (targetElements, duration = 1000) => {
    const frameDuration = 1000 / 60; // Assuming 60 frames per second
  
    targetElements.forEach((targetElement) => {
      const startNumber = 0;
      const targetNumber = parseFloat(targetElement.innerHTML);
      const difference = Math.abs(targetNumber - startNumber);
      const animationDuration = Math.min(duration, Math.max(500, difference * (duration / 100))); // Adjust the min and max duration as needed
  
      const totalFrames = Math.round(animationDuration / frameDuration);
      const increment = (targetNumber - startNumber) / totalFrames;
  
      let currentNumber = startNumber;
      let frame = 0;
  
      const animate = () => {
        currentNumber += increment;
        targetElement.innerHTML = Math.round(currentNumber);
  
        frame++;
        if (frame < totalFrames) {
          requestAnimationFrame(animate);
        }
      };
  
      // Intersection Observer configuration
      const observerConfig = {
        root: null, // Use the viewport as the root
        threshold: 0.2, // Trigger animation when at least 20% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            animate();
          }
        });
      }, observerConfig);
  
      // Start observing the target element
      observer.observe(targetElement);
    });
  };
  
  
  const targetElements = Array.from(document.querySelectorAll('.animate-number'));
  const duration = 3000;

//   animateNumber(targetElements, duration);

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // animatePosts();
  }
  
}

const faqQuestions = () => {

  const faq = document.querySelectorAll('.faq-item');  
  faq.forEach(q => {
    let isExpanded = q.getAttribute('area-expanded');
    q.addEventListener('click', (e)=> {
      let answer = q.querySelector('.faq-answer');
      let answerContent = answer.querySelector('p');
      let arrow = q.querySelector('svg');

      let height = answer.querySelector('p').clientHeight ;   

      let faq = gsap.timeline({
        defaults: {
          easing: Expo.EaseOut,
          duration: 0.2,
        },
      })

      if (!isExpanded) {
        faq
        .to(arrow, {transform: 'rotate(-0deg)'})
        .to (answer, { opacity: 0}, 0)  
        .to (answerContent, {marginTop: '0px', marginBottom: "0px"}, 0)
        .to (answer, {maxHeight: "0", opacity: 0}, 0.05)
      

          isExpanded = true;  
      } else {
        faq
        .to(arrow, {transform: 'rotate(90deg)'})
        .to (answer, {maxHeight: height}, 0)
        .to (answer, { opacity: 1}, 0)
        .to (answerContent, {marginTop: '10px', marginBottom: "10px"}, 0)
        isExpanded = false;  
      }          
      q.setAttribute('area-expanded', !isExpanded);

    })
  })
}



const showAboutInfo = (index, target) => {

  // Get the div at the specified index
  const targetDiv = target[index];

  // Remove the classes from the target div
  targetDiv.classList.remove('opacity-0', 'translate-y-10');

  // Loop through all div elements with class "about-cc"
  target.forEach((div, i) => {
    // Skip the target div (already handled above)
    if (i !== index) {
      // Add classes to other divs
      div.classList.add('opacity-0', 'translate-y-10');
    }
  });
}


const showInfoOnHover = (target, trigger, targetContainer) => {
 
  trigger.forEach((i, index) => {
    i.addEventListener('mouseover', (e)=> {
      let spanIndex = index;
      console.log (index, target, target[index])
      showAboutInfo(spanIndex, target);

    
    })
  })

  targetContainer.addEventListener('mouseout', (e)=> {
    target.forEach(div => {
      div.classList.add('opacity-0', 'translate-y-10');
    })
  })
}

const divHolder = document.querySelector('.about-cc-text')
const divs = document.querySelectorAll('.about-content');
const spans = document.querySelectorAll('.about-cc-text span.underline');




// Iceberg hover effect
const iceberg = document.querySelector('.iceberg-svg');
const icebergOverlay = document.querySelectorAll('.iceberg-overlay');
const icebergParts = document.querySelectorAll('.iceberg-svg path');

  
const showMenuDropwdown = () => {
  const holder = document.querySelector('.menu-dropdown-container');
  const trigger = document.querySelector('a[href="#solutions-dropdown"]');

  trigger.addEventListener('click', (e)=> {

    const showDropdown = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
        duration: 0.8
    }});


    holder.classList.toggle('opacity-0');
    holder.classList.toggle('-translate-y-full');
    console.log('click')
  })
}

showMenuDropwdown();

const steps = () => {
  const steps = document.querySelectorAll('.step-inner');
  steps.forEach((step, index) => {
    if (index > 0) {
      step.classList.add('not-active');
    }


    step.addEventListener('click', (e) => {
      steps.forEach((s, i) => {
        if (s === step) {
          s.classList.remove('not-active');
        } else {
          s.classList.add('not-active');
        }
      });
    });
  })
}



runScripts();

barba.init({
    timeout: 3000,
    prevent: ({ el }) => el.classList.contains('barba-prevent'),
    transitions: [
      {
        leave({ current, next, trigger }) {
         
          header.classList.remove('scrolled');
          header.classList.add('loading');
          document.querySelector("header").classList.remove('menu-open')
          closeMenuDropdown()
  
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
          // menuTL.reverse();
          
          setTimeout(() => {
            // menu.classList.add('o-0');
            // menu.classList.add('pointers-none');
          }, 1200);
  
        }
          return new Promise((resolve) => {
  
            // Set Pre Loader Defaults
  
            // randomPhrases();
          
            const loadEnter = gsap.timeline({
              defaults: {
                ease: "power4.inOut",
                duration: 0.8
              },
              onComplete() {
                current.container.remove();
                resolve();
              },
            }) 
            // Animate Pre Load
            loadEnter
            .call (()=> {
                // loadingCaption.innerHTML = originalCaption;
            })
            .set(loadingCaption, {opacity: 0})
            .set(preloaderCaption, {y: "120%"})
            .set(preLoad,{ y: "110%"})
            .to(preLoad,{ y: "0%", stagger: 0.05})
            .to(preloaderCaption, {y: "0%"},0.2)
            .to(loadingCaption, {opacity: 1}, 0.2)
  
          });
        },
        afterEnter({ current, next, trigger }) {
          return new Promise((resolve) => {
            window.scrollTo({
              top: 0,
            });
            runScripts();
            const loadLeave = gsap.timeline({
              onComplete() {
                resolve();
                header.classList.remove('loading');
                // header.classList.add('scrolled');
  
              },
              defaults: {
                duration: .8,
                ease: Expo.easeOut,
                delay: 2
              },
            });
  
            loadLeave
            .to(loadingCaption, {opacity: 0})
            .to(preloaderCaption, {y: "-130%"},0.4)    
            .call (()=> {
              // loadingCaption.innerHTML = "Loaded!"
          })
            .to(preLoad,{ y: "-110%", stagger: 0.05}, 0.4)
          });
        },
      },
  
    ],
    views: [ {
      namespace: 'home',
      afterEnter() {
        showInfoOnHover(divs, spans, divHolder);
        showInfoOnHover(icebergOverlay, icebergParts, iceberg); 
        animateIntegrations();
        faqQuestions();
      }
    }, {
    namespace: 'faq', 
    afterEnter() {  
      faqQuestions();
    }
  }, 
  {
    namespace: 'about',
    afterEnter() {
      faqQuestions()
    }
  }, 
   {
    namespace: 'IT Solutions',
    afterEnter() {
      steps();
      animateIntegrations();
    }
   },
   {
    namespace: 'HR Solutions',
    afterEnter() {
      steps();
    }
   },
   {
    namespace: 'Sales Solutions',
    afterEnter() {
      steps();
    }
   },
    ],
    debug: true,
  });
  

const contact = () => {
  let hrefs = document.querySelectorAll('a');
  hrefs.forEach((a) => {
    if (a.href.indexOf('#contact') > -1) {
      a.classList.add('barba-prevent');
      // console.log(a)
      a.addEventListener('click', (e) => {
        e.preventDefault();

        let timeline = gsap.timeline({
          defaults: {
            ease: Expo.easeOut,
            duration: 0.7,
          },
        });

        timeline
          .set(container, { pointerEvents: 'all', opacity: 1 })
          .set(contact, { x: '100%' })
          .set(bg, { opacity: 0 })
          .to(contact, { x: '0' }, 0)
          .to(bg, { opacity: 1 }, 0.4);
      });
    }
  });
  let close = document.querySelector('#close-contact');
  let bg = document.querySelector('.contact-bg');
  let contact = document.querySelector('.contact-content');
  let container = document.querySelector('.contact-form-container');

  close.addEventListener('click', () => {
    console.log('close')
    let timeline = gsap.timeline({
      defaults: {
        ease: Expo.easeOut,
        duration: 0.5,
      },
    });

    timeline
      .set(container, { pointerEvents: 'none' })
      .to(contact, { x: '100%' })
      .to(bg, { opacity: 0 }, 0);
  });
};

contact();


const animatePreLoader = () => {

  // randomPhrases();
  const preloadTl = gsap.timeline({
    defaults: {
      ease: "power4.inOut",
      duration: 0.8
    }
  }) 

    let t;
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { 
      t = '-130%';
    } else {
      t = "-190%";
    }

  preloadTl
  .call (()=> {
      // loadingCaption.innerHTML = "Loaded!"
  })
  .to(loadingCaption, {opacity: 0})
  .to(preloaderCaption, {y: t},0.4)
  .to(preLoad,{ y: "-110%", stagger: 0.05}, 0.4)


  preloadTl.paused(true);


    window.addEventListener('load', (event) => {
     preloadTl.play();
    })
}

animatePreLoader();


const animateIntegrations = () => {

let aimX = 0
let currentSpeed = 0.1
let aimSpeed = 0.3

// pick the section and div from the HTML
const section = document.querySelector(".integrations-container")

const holder = section.querySelector(".logo-list div")

const holders = section.querySelectorAll(".logo-list div");

// and calculate a single width and total width of them
const holderWidth = holder.clientWidth
console.log(holderWidth)
const totalWidth = holderWidth * holders.length;
console.log(holders.length)
console.log(totalWidth)

// we need to animate each frame
const animate = function () {
  // add tweening speed with a damping of 0.05
  currentSpeed += (aimSpeed - currentSpeed) * 0.01
  
  // change the x position based on current speed
  aimX = aimX + currentSpeed
   
  // for each of the content divs 
  holders.forEach((holder, index) => {
    // make a general left position based on...
    // the general x position
    // then add in a spacing for each one,
    // e.g. 0, 1000 and 2000 if we have 0 aimX and 1000px divs
    let leftPosition = (-1 * aimX + index * holderWidth)

    // they need to loop though, otherwise they'll just go off screen forever    
    // so lets add an offset to push them back over
    let offset = Math.floor((leftPosition + holderWidth) / totalWidth) * totalWidth
    // then add that offset based on the total width
    // negative as we're reducing the position
    leftPosition += (-1 * offset)
    // set a position
    holder.style.left = leftPosition + "px"
  })  
  // do each frame
  requestAnimationFrame(animate)
}

animate()
    
}

const closeMenuDropdown = () => {
  let dropdown = document.querySelector('.menu-dropdown-container')
  const isOpen = !dropdown.classList.contains('.-translate-y-full');

  if (isOpen) {
      dropdown.classList.add('-translate-y-full');
  }
}


const startYear = 2023;
const endYear = 1985;
const duration = 5000; // 5 seconds
const numberElement = document.getElementById('yearCounter'); // Replace with your HTML element ID

let animationStarted = false;

function updateCounter(timestamp) {
  const progress = Math.min(1, (timestamp - startTime) / duration);
  const currentYear = Math.round(startYear - (startYear - endYear) * cubicEaseOut(progress));

  numberElement.textContent = currentYear;

  if (progress < 1) {
    requestAnimationFrame(updateCounter);
  }
}

// Cubic ease-out function
function cubicEaseOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

let startTime;

function startAnimation() {
  if (!animationStarted) {
    animationStarted = true;
    startTime = performance.now();
    requestAnimationFrame(updateCounter);
  }
}

function checkScrollPosition() {
  const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight - 200;
  if (window.scrollY >= scrollThreshold) {
    startAnimation();
    // Remove the scroll event listener to prevent multiple animations
    window.removeEventListener('scroll', checkScrollPosition);
  }
}

// Add a scroll event listener to trigger the animation
window.addEventListener('scroll', checkScrollPosition);
