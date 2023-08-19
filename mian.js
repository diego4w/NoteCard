const res = document.getElementById("res")
const btn = document.getElementById("btn")

function newCard(){
    res.innerHTML += `<div class="cardCreate">
                        <h1>Nova lista</h1>
                        <input type="text" id="txt" placeholder="tarefa...">
                      </div>`
}

btn.onclick = newCard