function createCalculator() {
    // Kalkulyatorning asosiy konteynerini yaratish
    let container = document.createElement("div");
    container.style.width = "300px";
    container.style.margin = "0 auto";
    container.style.padding = "20px";
    container.style.border = "2px solid #ccc";
    container.style.borderRadius = "10px";
    container.style.textAlign = "center";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.backgroundColor = "#f9f9f9";

    // Foydalanuvchidan birinchi raqamni so'rash
    let num1 = prompt("1-raqamni kiriting:");
    let num1Input = document.createElement("input");
    num1Input.type = "number";
    num1Input.value = num1;
    num1Input.style.width = "90%";
    num1Input.style.padding = "10px";
    num1Input.style.marginBottom = "10px";
    num1Input.style.fontSize = "16px";
    num1Input.disabled = true; // faqat ko'rsatish uchun

    // Foydalanuvchidan operatorni tanlash
    let operator = prompt(
        "Operatorni tanlang: \n1. Qo'shish (+) \n2. Ayirish (-) \n3. Ko'paytirish (*) \n4. Bo'lish (/)"
    );

    // Noto'g'ri operator tanlanganda xatolik ko'rsatish
    if (!["1", "2", "3", "4"].includes(operator)) {
        alert("Noto'g'ri amal tanlandi!");
        return;
    }

    // Operatorni ko'rsatish uchun select box yaratish
    let operatorSelect = document.createElement("select");
    operatorSelect.style.width = "100%";
    operatorSelect.style.padding = "10px";
    operatorSelect.style.marginBottom = "10px";
    operatorSelect.style.fontSize = "16px";

    // Operator variantlarini yaratish
    let option1 = document.createElement("option");
    option1.value = "1";
    option1.innerText = "Qo'shish (+)";
    let option2 = document.createElement("option");
    option2.value = "2";
    option2.innerText = "Ayirish (-)";
    let option3 = document.createElement("option");
    option3.value = "3";
    option3.innerText = "Ko'paytirish (*)";
    let option4 = document.createElement("option");
    option4.value = "4";
    option4.innerText = "Bo'lish (/)";

    // Optionlarni select boxga qo'shish
    operatorSelect.appendChild(option1);
    operatorSelect.appendChild(option2);
    operatorSelect.appendChild(option3);
    operatorSelect.appendChild(option4);

    // Foydalanuvchi tanlagan operatorni avtomatik tanlash
    operatorSelect.value = operator;

    // Foydalanuvchidan ikkinchi raqamni so'rash
    let num2 = prompt("2-raqamni kiriting:");
    let num2Input = document.createElement("input");
    num2Input.type = "number";
    num2Input.value = num2;
    num2Input.style.width = "90%";
    num2Input.style.padding = "10px";
    num2Input.style.marginBottom = "20px";
    num2Input.style.fontSize = "16px";
    num2Input.disabled = true; // faqat ko'rsatish uchun

    // Natija uchun joy yaratish
    let result = document.createElement("h2");
    result.innerText = "Natija: ";
    result.style.fontSize = "20px";
    result.style.color = "#4CAF50";

    // Hisoblash tugmasini yaratish
    let calculateButton = document.createElement("button");
    calculateButton.innerText = "Hisoblash";
    calculateButton.style.width = "100%";
    calculateButton.style.padding = "10px";
    calculateButton.style.fontSize = "18px";
    calculateButton.style.cursor = "pointer";
    calculateButton.style.backgroundColor = "#4CAF50";
    calculateButton.style.color = "white";
    calculateButton.style.border = "none";
    calculateButton.style.borderRadius = "5px";

    calculateButton.addEventListener("click", function () {
        let selectedOperator = operatorSelect.value;
        let num1Converted = Number(num1);
        let num2Converted = Number(num2);
        let calculationResult;

        // Operatorni tekshirish va hisoblash
        if (selectedOperator === "1") {
            calculationResult = num1Converted + num2Converted;
        } else if (selectedOperator === "2") {
            calculationResult = num1Converted - num2Converted;
        } else if (selectedOperator === "3") {
            calculationResult = num1Converted * num2Converted;
        } else if (selectedOperator === "4") {
            if (num2Converted !== 0) {
                calculationResult = num1Converted / num2Converted;
            } else {
                calculationResult = "Nolga bo'lish mumkin emas!";
            }
        } else {
            calculationResult = "Noto'g'ri operator tanladingiz!";
        }

        // Natijani ko'rsatish
        result.innerText = `Natija: ${calculationResult}`;
    });

    // Barcha elementlarni containerga qo'shish
    container.appendChild(num1Input);
    container.appendChild(operatorSelect);
    container.appendChild(num2Input);
    container.appendChild(calculateButton);
    container.appendChild(result);

    // Containerni bodyga qo'shish
    document.body.appendChild(container);
}

// Kalkulyatorni yaratish
createCalculator();
