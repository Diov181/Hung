let btnAction1 = document.getElementById("btn-action-1");

btnAction1.addEventListener("click", () => {
    let chieuDai = parseInt(document.getElementById("length").value);
    let chieuRong = parseInt(document.getElementById("width").value);
    
    if (chieuDai === chieuRong) {
        alert("Đây là một hình vuông");
    } else {
        alert("Đây là hình chữ nhật");
    }
})

let btnAction2 = document.getElementById("btn-action-2");

btnAction2.addEventListener("click", () => {
    let numberA = parseFloat(document.getElementById("number-a").value);
    let numbetB = parseFloat(document.getElementById("number-b").value);

    if (numberA >= numbetB) {
        alert(`Số lớn nhất là ${numberA}`);
    }else {
        alert(`Số lớn nhất là ${numbetB}`);
    }
})

document.getElementById("btn-action-3").addEventListener("click", () => {
    let n = parseFloat(document.getElementById("n").value);

    if (n >= 0) {
        alert(`Giá trị tuyệt đối của ${n} là ${n}`);
    } else {
        alert(`Giá trị tuyệt đối của ${n} là ${-n}`);
    }
})

document.getElementById("btn-action-4").addEventListener("click", () => {
    let day = parseInt(document.getElementById("day").value);

    if (day == 2) alert ("Monday");
    else if (day == 3) alert ("Tuesday");
    else if (day == 4) alert ("Wednesday");
    else if (day == 5) alert ("Thursday");
    else if (day == 6) alert ("Friday");
    else if (day == 7) alert ("Saturday");
    else alert ("Sunday");
})

let btnAction5 = document.getElementById("btn-action-5");

btnAction5.addEventListener("click" , () => {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);

    if (n1 >= n2 && n1 >= n3) {
        alert(`Số lớn nhất là ${n1}`);
    }else if (n2 >= n1 && n2 >= n3) {
        alert(`Số lớn nhất là ${n2}`);
    }else {
        alert(`Số lớn nhất là ${n3}`);
    }

})