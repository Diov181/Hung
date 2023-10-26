let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    // lấy số liệu từ các biến
    let time = parseFloat(document.getElementById("time").value);
    let rank = parseInt(document.getElementById("rank").value);
    let infoElem = document.getElementById("info");

    // điều kiện để nhận thưởng
    if (time > 400 && rank == 1) {
        infoElem.innerText = `Bạn được thưởng 1000$USD`;

    } else if (time > 400 && rank >= 2) {
        infoElem.innerText = `Bạn được thưởng 2000$USD`;

        } else {
        infoElem.innerText = `Bạn không được thưởng`;
    }

})