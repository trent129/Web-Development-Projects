/* variables */
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

/*blur initial value*/ 
let load = 0 

/*blur interval variable*/ 
let int = setInterval(blurring, .01)


/*blur increase function*/ 
function blurring() {
    load++

    /*at over 99 it stops */ 
    if (load > 99) {
        clearInterval(int)
    }

    /*load text update */ 
    loadText.innerText =`${load}%`

    /*need to map a range of numbers to another range of numbers fades as it goes to 100%*/ 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    /*apply to blur as well except from 30 to 0 as load increases 0 to 100%*/ 
    bg.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }