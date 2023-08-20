const res = document.getElementById("res")
const btn = document.getElementById("btn")


function save(w){
    var tt  = `txt${w}`
    var txt = document.getElementById(tt)
    var text = txt.value
    console.log(text)
}

var e = 0

function newCard(i){
    e++
    res.innerHTML += `<div class="cardCreate">
        <h1>Nova lista</h1>
        <input type="text" id="txt${e}" onchange="save(${e})" placeholder="tarefa...">
        <div style="display: flex; flex-direction: row; margin: 5px;">
            <input type="checkbox" id="check"><p>lasquei</p> 
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
            <input type="checkbox" id="check"><p>lasquei</p> 
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
            <input type="checkbox" id="check"><p>lasquei</p> 
        </div>
      </div>`

      console.log(e)
}

btn.onclick = newCard