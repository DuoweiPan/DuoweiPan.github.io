var input = document.getElementsByClassName('c_input')[0]
var cn = document.getElementsByClassName('c_n')[0]
input.onfocus = function () {
    if (input.value == '') {
        cn.className = 'c_n block'
        cn.innerHTML = ''
        // if(window.localStorage.getItem('listId').length==listId.length){
        for (let k = 0; k < listId.length; k++) {
            cn.innerHTML += "<div onclick=\"aa(" + listId[k].id + ")\">" + listId[k].text + "</div>"
        }
        // }
    }
}

if (!localStorage.getItem('listId')) {
    var listId = [
        {id: 0, text: 'test1'},
        {id: 1, text: 'test2'}
    ]
    localStorage.setItem('listId', JSON.stringify(listId))
} else {
    var listId = JSON.parse(localStorage.getItem("listId"))
}
if (!localStorage.getItem('listId0')) {
    var listId0 = []
    localStorage.setItem('listId0', JSON.stringify(listId0))
} else {
    var listId0 = JSON.parse(localStorage.getItem("listId0"))
}

function aa(id) {
    input.value = listId[id].text
    cn.className = 'c_n none'
}


var add = document.getElementsByClassName('add')[0]
var loca = document.getElementsByClassName('loca')[0]
var listIdLength
var listIdLength0

add.onclick = function () {
    cn.className = 'c_n none'
    if (input.value == '') {
        return
    }
        location.reload();
    listIdLength = {id: listId.length, text: input.value}
    listId.push(listIdLength)

    listIdLength0 = {id: listId0.length, text: input.value}
    listId0.push(listIdLength0)


    for (var i = 0; i < listId.length - 1; i++) {
        for (var j = i + 1; j < listId.length; j++) {
            if (listId[i].text == listId[j].text) {
                listId.splice(j, 1);
                j--;
            }
        }
    }
    console.log(listId)
    localStorage.setItem('listId', JSON.stringify(listId))
    localStorage.setItem('listId0', JSON.stringify(listId0))
    cn.innerHTML = ''
    loca.innerHTML = ''
    for (let q = 0; q < listId0.length; q++) {
        loca.innerHTML += `<div><text>${listId0[q].text}</text><div class="i del"></div></div>`
    }
    for (let k = 0; k < listId.length; k++) {
        cn.innerHTML += "<div onclick=\"aa(" + listId[k].id + ")\">" + listId[k].text + "</div>"
    }
}

if (listId0.length >= 1) {
    for (let t = 0; t < listId0.length; t++) {
        loca.innerHTML += "<div><text>"+listId0[t].text+"</text><div onclick=\"cicon("+listId0[t].id+")\" class='i del'></div></div>"
    }
}

var locaText = document.getElementsByClassName('loca')[0].children
var icon = document.getElementsByClassName('i')

for (let j = 0; j < listId0.length; j++) {
    locaText[j].onmouseover = function () {
        locaText[j].className = 'locaText bg'
    }
    locaText[j].onmouseout = function () {
        locaText[j].className = 'locaText'
    }
    icon[j].onmouseover = function () {
        icon[j].className = 'i del1'
    }
    icon[j].onmouseout = function () {
        icon[j].className = 'i del'
    }
    icon[j].onclick=function (){
        listId0.splice(j,1)
        localStorage.setItem('listId0', JSON.stringify(listId0))
        listId0 = JSON.parse(localStorage.getItem("listId0"))
        location.reload();
    }
}



