function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function updateInput(value, id){
    value = document.getElementById(id).value
    id = id.slice(0,1)
    console.log(value, id)
    document.getElementById(id).style.height = `${value * length_of_col}px`
}


let length_of_col = 50;
function create_col(){
    let amount = document.getElementById("amount-col").value
    let column_array = document.getElementById("column")
    let array_col_desk = document.getElementById("array_col_desk")
    removeElementsByClass("col-ex")
    removeElementsByClass("col_desk")
    let id = 0;
    
    for(let i = 0; i < amount; i++ ){
        let col = document.createElement("div")
        col.classList.add("col-ex")


        k = getRandomInt(0,11)
        let length = k * length_of_col
        col.style.height = `${length}px`
        col.setAttribute("id", `${id}`)
        column_array.append(col)


        let col_desk = document.createElement("input")
        col_desk.setAttribute("id", `${id}_input`)
        col_desk.classList.add("col_desk")
        col_desk.setAttribute("type", "number")
        col_desk.setAttribute("value", `${k}`)
        col_desk.setAttribute("min", "0")
        col_desk.setAttribute("max", "10")
        col_desk.setAttribute("onchange", "updateInput(k, id)")
        array_col_desk.append(col_desk)


        id += 1
    }
    // let m = document.getElementById("0")
    // m.addEventListener("input", updateInput(5, m.id))
}
