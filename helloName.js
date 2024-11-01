function helloName(name) {
    alert(`Hello ${name}!`);
}
function checkIncome(income) {
    if (income > 15000000) {
        alert("꿈이 크시군요!");
    }
    else if (income > 1500000) { 
        alert("언젠간 가능할겁니다. 화이팅!");
    }
    else {
        alert("지금도 가능하지 않을까요...?");

    }
}

helloName("GDG on Campus Sogang");

const inputText = document.getElementById("helloName");
const helloBtn = document.getElementById("helloBtn");
const incomeInt = document.getElementById("income");
const incomeBtn = document.getElementById("incomeBtn");


helloBtn.addEventListener("click", () => {
    helloName(inputText.value);
});

incomeBtn.addEventListener("click", () => {
    checkIncome(incomeInt.value);
});

incomeInt.addEventListener("keydown", (event) => {
    // 숫자 키(0-9)와 백스페이스, Delete, 화살표 키, Tab 등을 허용
    if (
        (event.key >= "0" && event.key <= "9") || 
        event.key === "Backspace" || 
        event.key === "Delete" || 
        event.key === "ArrowLeft" || 
        event.key === "ArrowRight" ||
        event.key === "Tab"
    ) {
        // 허용된 키는 그대로 진행
        return;
    } else {
        // 그 외의 키는 입력 차단
        event.preventDefault();
    }
});