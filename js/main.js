function getElementById(id) {
    return document.getElementById(id);
}

function getForm() {
    return document.querySelector("form");
}
function addOptionsToSelect(select) {
    const cities = [
        {innerText: "Mariano Acosta", value: "1"},
        {innerText: "Agustín Ferrari", value: "2"},
        {innerText: "Merlo", value: "3"},
        {innerText: "S.A. de Padua", value: "4"},
        {innerText: "Libertad", value: "5", selected: true},
        {innerText: "Pontevedra", value: "6"},
    ];

    cities.forEach((city) => {
        const option = document.createElement("option");
        option.innerText = city.innerText;
        option.value = city.value;
        option.selected = city.selected

        select.appendChild(option);
    })
}

function addSortedListToSection() {
    const ol = document.querySelector("ol");
    const li = document.createElement("li");
    const employee = getElementById("name").value + " "
                        + getElementById("surname").value + " "
                        + getElementById("amount").value;
    li.innerText =  employee;
    ol.appendChild(li);

    const sectionList = getElementById("section-list");
    sectionList.appendChild(ol);

    const form = getForm();
    form.reset();

    const op = getElementById("city");
    let options = op.options;
    for(let i=1; i < options.length; i++) {
        if(options[i].innerText === 'Libertad'){
            options[i].selected = true;
        }
    }
    debugger;
}

function getQuantityOfEmployees() {
    let length = 0;
    for (const li of document.querySelectorAll('ol>li')) {
        length++;
    }

    return length;
}
function employeeQuantity() {
    const p = document.querySelector("p");
    p.innerHTML = getQuantityOfEmployees();
}

function onSubmitForm(ev) {

    ev.preventDefault();
    const valid = ev.target.reportValidity();

    const birthDate = getElementById("birthdate");
    if(!birthDate.validity.valid) {
        alert("Debe ingresar una fecha válida")
        return;
    }

    if(!valid) {
        alert("Debe completar los campos requeridos");
        console.error("Debe completar los campos requeridos");
        return;
    }

    const amount = getElementById("amount");
    if(parseFloat(amount.value) < 0) {
        alert("Debe ingreasr un sueldo bruto válido");
        return;
    }

    addSortedListToSection();
    employeeQuantity();
}

window.onload = (ev) => {
    const select = getElementById("city");
    const form = getForm();

    addOptionsToSelect(select);

    form.addEventListener("submit", onSubmitForm);
}