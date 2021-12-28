window.onload=()=>{

    let door1 = document.querySelector('#door1')
    let door2 = document.querySelector('#ani2')

    door1.addEventListener('click',()=>{
        door1.classList.toggle('door-open')
    })

    door2.addEventListener('click',()=>{
        document.querySelector('.robot-box').classList.toggle('robot-box-show')
    })

    lottie.loadAnimation({
        container: document.querySelector('#ani1'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani1/data.json' // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.querySelector('#ani2'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani2/data.json' // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.querySelector('#ani3'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani3/data.json' // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.querySelector('#ani4'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani4/data.json' // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.querySelector('#ani5'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani5/data.json' // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.querySelector('#ani6'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani6/data.json' // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.querySelector('#ani7'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './ani7/data.json' // the path to the animation json
    });

    anime({
        targets: '.note',
        scale: [
          {value: .7, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        filter:[
            {value:'hue-rotate(0)'},
            {value:'hue-rotate(-20deg)'},
        ],
        delay: anime.stagger(200, {grid: [11, 3], from: 'center'}),
        autoplay: true,
        loop:true,
        direction:'alternate'
      });


}