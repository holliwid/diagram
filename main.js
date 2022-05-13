// для рандома
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


function updateInput(id){
    // забираем значение
    value = document.getElementById(id).value
    // отрезаем от строчки число 
    id = id.slice(0,1)
    // console.log(value, id)
    // изменяем высоту у столбца по id
    document.getElementById(id).style.height = `${value * length_of_col}px`
}


let length_of_col = 50;
function create_col(){
    // забираем число столбцов
    let amount = document.getElementById("amount-col").value
    // контейнер куда вставляем колонки
    let column_array = document.getElementById("column")
    // контейнер для чиселок
    let array_col_desk = document.getElementById("array_col_desk")
    // удаляем столбцы и чиселки
    removeElementsByClass("col-ex")
    removeElementsByClass("col_desk")
    let id = 0;
    
    for(let i = 0; i < amount; i++ ){
        // создаём столбец
        let col = document.createElement("div")
        col.classList.add("col-ex")

        // задаём высоту столбца
        k = getRandomInt(0,11)
        let length = k * length_of_col
        col.style.height = `${length}px`

        // задаём id столбцу
        col.setAttribute("id", `${id}`)
        // добавляем столбец в контейнер
        column_array.append(col)


        // создание чиселок для столбца
        let col_desk = document.createElement("input")
        col_desk.setAttribute("id", `${id}_input`)
        col_desk.classList.add("col_desk")
        // только числа
        col_desk.setAttribute("type", "number")
        // в значение поля указывается длина
        col_desk.setAttribute("value", `${k}`)
        col_desk.setAttribute("min", "0")
        col_desk.setAttribute("max", "10")
        // добавляем метод, который вызывается, когда меняется число в поле
        col_desk.setAttribute("onchange", "updateInput(id)")
        // добовляем чиселко в контейнер
        array_col_desk.append(col_desk)


        id += 1
    }
}
