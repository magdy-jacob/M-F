//  /*-----------------------------------
//     Load Page Text visibility Animation 
//  -----------------------------------*/  
gsap.to(".intro-title", {
    opacity: 1,
    duration: 2,
    delay: 0.2,
    ease: "power2.out"
});

//  /*-----------------------------------
//    Scroll  Text visibility Animation 
//  -----------------------------------*/  
gsap.registerPlugin(ScrollTrigger);
gsap.to(".text-load", {
    opacity: 1,
    duration: 1,
    delay: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".text-load",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        toggleActions: "play none none reverse",
    }
});


//   /*-----------------------------------
//      Text Split Animation 
//  -----------------------------------*/  

if ($('.title-big-text').length > 0) {

    let cta = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.title-big-text',
            start: 'bottom 100%-=50px'
        }
    });
    gsap.set('.title-big-text', {
        opacity: 0
    });
    gsap.to('.title-big-text', {
        opacity: 1,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: '.title-big-text',
            start: 'bottom 100%-=50px',
            once: true
        }
    });

    let mySplitText = new SplitText(".title-big-text", { type: "words,chars" });
    let chars = mySplitText.chars;
    let endGradient = chroma.scale(['#9b0e2b', '#9b0e2b', '#9b0e2b', '#9b0e2b', '#9b0e2b']);
    cta.to(chars, {
        duration: 0.5,
        scaleY: 0.6,
        ease: "power1.out",
        stagger: 0.04,
        transformOrigin: 'center bottom'
    });
    cta.to(chars, {
        yPercent: -20,
        ease: "elastic",
        stagger: 0.03,
        duration: 0.8
    }, 0.5);
    cta.to(chars, {
        scaleY: 1,
        ease: "elastic.out",
        stagger: 0.03,
        duration: 1.5
    }, 0.5);
    cta.to(chars, {
        color: (i, el, arr) => {
            return endGradient(i / arr.length).hex();
        },
        ease: "power1.out",
        stagger: 0.03,
        duration: 0.3
    }, 0.5);
    cta.to(chars, {
        yPercent: 0,
        ease: "back",
        stagger: 0.03,
        duration: 0.8
    }, 0.7);
    cta.to(chars, {
        color: '#bd0e31',
        duration: 1.4,
        stagger: 0.05
    });
}


if ($('.ct-char-animation').length > 0) {
    let char_come = gsap.utils.toArray(".ct-char-animation");
    char_come.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
        gsap.set(splitTextLine, { perspective: 300 });
        itemSplitted.split({ type: "chars, words" })
        tl.from(itemSplitted.chars,
            {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
    });
}

