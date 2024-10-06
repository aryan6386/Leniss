import React, { useEffect } from 'react'
import Lenis from 'lenis'
import{useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const App = () => {
  gsap.registerPlugin(ScrollTrigger);
;  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  useGSAP(()=>{
    document.querySelectorAll(".elem").forEach(elem => {
      let image = elem.querySelector("img")
      let tl = gsap.timeline()
        let xTransform = gsap.utils.random(-100, 100)
        tl  
        .set(image, {
          transformOrigin: `${xTransform < 0?0:'100%'}`,
    
        },"start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        },"start")
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        },"start")
    })
    
  })

return (
  <div>
    <div className="w-full bg-zinc-900">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
        {/* Images with more randomized --c values between 1 and 10 */}
        <div className="elem col-span-1 row-span-1" style={{ '--r': 1, '--c': 3 }}>
          <img src="./img/1.jpg" alt="Image 1" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 1, '--c': 7 }}>
          <img src="./img/2.jpg" alt="Image 2" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 2, '--c': 2 }}>
          <img src="./img/3.jpg" alt="Image 3" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 2, '--c': 6 }}>
          <img src="./img/4.jpg" alt="Image 4" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 3, '--c': 4 }}>
          <img src="./img/5.jpg" alt="Image 5" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 3, '--c': 8 }}>
          <img src="./img/6.jpg" alt="Image 6" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 4, '--c': 1 }}>
          <img src="./img/7.jpg" alt="Image 7" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 4, '--c': 4 }}>
          <img src="./img/8.jpg" alt="Image 8" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 5, '--c': 2 }}>
          <img src="./img/9.jpg" alt="Image 9" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 5, '--c': 6 }}>
          <img src="./img/10.jpg" alt="Image 10" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 6, '--c': 3 }}>
          <img src="./img/11.jpg" alt="Image 11" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 6, '--c': 7 }}>
          <img src="./img/12.jpg" alt="Image 12" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 7, '--c': 5 }}>
          <img src="./img/13.jpg" alt="Image 13" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 7, '--c': 8 }}>
          <img src="./img/14.jpg" alt="Image 14" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 8, '--c': 1 }}>
          <img src="./img/15.jpg" alt="Image 15" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 8, '--c': 4 }}>
          <img src="./img/16.jpg" alt="Image 16" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 9, '--c': 2 }}>
          <img src="./img/17.jpg" alt="Image 17" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 9, '--c': 6 }}>
          <img src="./img/18.jpg" alt="Image 18" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 10, '--c': 3 }}>
          <img src="./img/19.jpg" alt="Image 19" className="w-full h-32 object-cover" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ '--r': 10, '--c': 7 }}>
          <img src="./img/20.jpg" alt="Image 20" className="w-full h-32 object-cover" />
        </div>
      </div>
    </div>
    <div className="fixed text-white top-0 left-0 font-['Helvetica_Now_Display'] w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-8xl color-#D1D1D1 mb-4">Thomas Vance
        <sup>®</sup>
      </h1>
      <h2 className="text-5xl">並外れたファッション</h2>
    </div>
    <div className="w-full bg-[#D1D1D1] flex items-center justify-center mx-auto h-screen py-96 relative z-[999] text-center">
      <p className="text-4xl w-3/4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt eos nemo natus mollitia non optio officiis dolorem exercitationem. Nam!
      </p>
    </div>
  </div>
)
}

export default App