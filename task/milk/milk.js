// // Dashboard
// if (document.getElementById("morningMilk")) {
//     let milkRate = 50
//     let totalMilk = morning + evening;
//     let income = totalMilk * milkRate;
//     let profit = income - expense;

// }


// Add Cow
let cows = JSON.parse(localStorage.getItem("cows")) || [];
let addCow = () => {
    let cowId = document.getElementById("cowId")
    let cowName = document.getElementById("cowName")
    let cowType = document.getElementById("cowType")
    let age = document.getElementById("age")
    let milkCapacity = document.getElementById("milkCapacity")

    if (cowId.value == "") {
        alert("Add cowId")
    } else if (cowName.value == "") {
        alert("Add cowName")
    } else if (cowType.value == "") {
        alert("Add cowType")
    } else if (age.value == "") {
        alert("Add age")
    } else if (milkCapacity.value == "") {
        alert("Add milkCapacity")
    }

    let data = {
        id: cowId.value,
        name: cowName.value,
        cowType: cowType.value,
        age: age.value,
        milkCapacity: milkCapacity.value
    };

    cows.push(data);
    console.log(cows);
    localStorage.setItem("cows", JSON.stringify(cows));

}
let displaycows = (ele) => {
    let cowTable = document.getElementById("cowTable")
    cowTable.innerText = ``

    cows.forEach((ele) => {
        cowTable.innerHTML += `
        <tr>
            <td>${ele.id}</td>
            <td>${ele.name}</td>
            <td>${ele.cowType}</td>
            <td>${ele.age}</td>
            <td>${ele.milkCapacity}</td>
        </tr>
        `;

    });
    cowId.value = "";
    cowName.value = "";
    cowType.value = "";
    age.value = "";
    milkCapacity.value = "";
}




// milkentry

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

// expense

let expenses = [];
let addExpense = () => {
    let type = document.getElementById("expenseType").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let table = document.getElementById("expenseTable");
    debugger
    if (type == "" || amount == "") {
        alert("Fill all fields");
        return;
    }

    expenses.push({ type, amount });


    let total = 0;
    let total1 = document.getElementById("totalExpense")
    table.innerHTML = ``

    expenses.forEach((exp) => {
        total += exp.amount
        table.innerHTML += `
         <tr>
          <td>${exp.type}</td>
          <td>₹${exp.amount}</td>
         </tr>`;
    });
    total1.innerText = `₹${total}`;
    console.log(total);

    document.getElementById("expenseType").value = "";
    document.getElementById("expenseAmount").value = "";

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