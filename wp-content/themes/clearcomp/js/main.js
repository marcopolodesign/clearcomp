let pageName = document.querySelector('[data-barba=container]');
// let preLoad = document.querySelectorAll('.pre-load > div:not(:last-child)');
// let header = document.querySelector('header')
// let preloaderCaption = document.querySelector('.pre-load div > span');
// let loadingCaption = document.querySelector('.pre-load div p');
let menuTl;
let menu;



const runScripts = () => {
  setTimeout(() => {
    moreAnchors();
  }, 3000);


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

// runScripts();

barba.init({
    timeout: 3000,
    prevent: ({ el }) => el.classList.contains('barba-prevent'),
    transitions: [
      {
        leave({ current, next, trigger }) {
         
          header.classList.remove('scrolled');
          header.classList.add('loading');
          document.querySelector("header").classList.remove('menu-open')
  
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
            // runScripts();
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
        homePhrase()
      }
    }
    ],
    debug: true,
  });
  

