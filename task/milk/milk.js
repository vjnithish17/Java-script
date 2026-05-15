// // Dashboard
// if (document.getElementById("morningMilk")) {
//     let milkRate = 50
//     let totalMilk = morning + evening;
//     let income = totalMilk * milkRate;
//     let profit = income - expense;

// }


// Add Cow ---------------------------------------------------------------
let cows = JSON.parse(localStorage.getItem("cows")) || [];
let addCow = () => {
    let cowName = document.getElementById("cowName")
    let cowType = document.getElementById("cowType")
    let age = document.getElementById("age")
    let milkCapacity = document.getElementById("milkCapacity")
    let image = "";

    if (cowName.value == "") {
        alert("Add cowName")
        return
    } else if (cowType.value == "") {
        alert("Add cowType")
        return
    } else if (age.value == "") {
        alert("Add age")
        return
    } else if (milkCapacity.value == "") {
        alert("Add milkCapacity")
        return
    }

    if (cowType.value == "Jersey") {
        image = "./img/hf.jpg";
    }
    else if (cowType.value == "HF") {
        image = "./img/download (1).jpg";
    }
    else {
        image = "./img/download (1).jpg";
    }

    let data = {
        name: cowName.value,
        cowType: cowType.value,
        age: age.value,
        milkCapacity: milkCapacity.value,
        img: image
    };

    cows.push(data);
    console.log(cows);
    localStorage.setItem("cows", JSON.stringify(cows));
    document.getElementById("cowrest").reset();
    displaycows()
}
let displaycows = () => {

    let cowTable = document.getElementById("cowTable");

    cowTable.innerHTML = "";

    cows.forEach((ele) => {

        cowTable.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card shadow border-0 cow-card">
                <img src="${ele.image}"  class="card-img-top cow-img" alt="cow image">
                <div class="card-body">
                    <p class="textcenter"><strong>Name :</strong> ${ele.name}</p>
                    <p><strong>cowType :</strong> ${ele.cowType}</p>
                    <p><strong>Age :</strong> ${ele.age} Years</p>
                    <p><strong>Milk :</strong> ${ele.milkCapacity} Litre</p>
                </div>
            </div>
        </div>  `

    });
};
displaycows()




// milkentry---------------------------------------------------------------------

let milkEntries = [];
function addMilkEntry() {

    let name = document.getElementById("milkCowName").value;
    let morning = Number(document.getElementById("morning").value);
    let evening = Number(document.getElementById("evening").value);
    let cowerrror = document.getElementById("error")


    if (name == "" || morning == "" || evening == "") {
        alert("Fill all fields");
        return;
    }

    let total = morning + evening;

    milkEntries.push({
        name,
        morning,
        evening,
        total
    });
    console.log(milkEntries);

    let table = document.getElementById("milkTable");

    milkEntries.forEach((milk) => {
        table.innerHTML += `
                 <tr>
                  <td>${milk.name}</td>
                  <td>${milk.morning} L</td>
                  <td>${milk.evening} L</td>
                  <td><b>${milk.total} L</b></td>
                  </tr>`;
    });
}

// expense------------------------------------------------------------


function addExpense() {
    let totalex = JSON.parse(localStorage.getItem("expenseamount")) || [];
    let type = document.getElementById("expenseType").value;
    let amount = Number(document.getElementById("expenseAmount").value);

    if (type == "") {
        alert("Select Type");
        return;
    }

    if (amount == "") {
        alert("EnterAmount");
        return;
    }

    let expenses = {
        type,
        amount
    }
    totalex.push(expenses)
    console.log(expenses);
    localStorage.setItem("expenseamount", JSON.stringify(totalex));
    showexpense()
    document.getElementById("expenseType").innerHTML = ""
    document.getElementById("expenseAmount").innerHTML = ""
}

function showexpense() {
    let totalex = JSON.parse(localStorage.getItem("expenseamount")) || [];
    let table = document.getElementById("expenseTable");
    let total = 0;

    totalex.forEach((exp) => {

        total += exp.amount;

        table.innerHTML += `
        <tr>
            <td>${exp.type}</td>
            <td>₹${exp.amount}</td>
        </tr>`;
    });
    document.getElementById("totalExpense").innerHTML = `₹${total}`;

}

// Clock
let updateTime = () => {

    let date = new Date();

    let localtimes = document.getElementById("clock");

    localtimes.innerHTML = date.toLocaleTimeString();
}
setInterval(updateTime, 1000);

updateTime();

// btn
let btn = document.getElementById("modeBtn")
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.classList.toggle("bg-dark")

})