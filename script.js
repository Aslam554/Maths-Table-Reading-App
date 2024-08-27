window.onload =()=>{
    let b= document.querySelector('#btn')
    let readT = document.querySelector("#rd")
    let wrt = document.querySelector("button")
    let dv = document.querySelector("div")

    wrt.onclick = ()=>{
        dv.innerHTML = ""
        for(let i=1;i<11;i++){
            var txt = `<p> ${b.value}  x ${i}  = ${b.value*i}   </p>`
            dv.innerHTML +=txt
        }
    }

    readT.onclick =()=>{
        
        let num = b.value
        let st = `Reading the table of ${num}.                ${num} ones a ${num*1}       ${num} twos a ${num*2}             ${num} threes a ${num*3}              ${num} fours a ${num*4}      ${num} fives a ${num*5}            ${num} ${6}s ${num*6}        ${num} sevens a ${num*7}          ${num} eights a ${num*8}         ${num} nines a ${num*9}          ${num} tens a ${num*10}            Thank You Friends for watching the videos .          Do Subscribe to Aslam Coding Channel...`
        responsiveVoice.speak(st)
    }
}
