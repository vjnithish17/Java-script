// Dashboard
if (document.getElementById("morningMilk")) {

    let totalMilk = morning + evening;
    let income = totalMilk * milkRate;
    let profit = income - expense;

    document.getElementById("morning").innerText = morningMilk + " L";
    document.getElementById("evening").innerText = eveningMilk + " L";
    document.getElementById("totalMilk").innerText = totalMilk + " L";
    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("totalExpense").innerText = "₹" + total;
    document.getElementById("profit").innerText = "₹" + profit;

}


// Add Cow
let cows = [];

function addCow() {

    let cowId = document.getElementById("cowId").value;
    let cowName = document.getElementById("cowName").value;
    let breed = document.getElementById("breed").value;
    let age = document.getElementById("age").value;
    let milkCapacity = document.getElementById("milkCapacity").value;

    if (cowId == "" || cowName == "" || breed == "" || age == "" || milkCapacity == "") {
        alert("Fill all fields");
        return;
    }

    let cow = {
        id: cowId,
        name: cowName,
        breed: breed,
        age: age,
        milkCapacity: milkCapacity
    };

    cows.push(cow);

    displayCows();

    document.getElementById("cowId").value = "";
    document.getElementById("cowName").value = "";
    document.getElementById("breed").value = "";
    document.getElementById("age").value = "";
    document.getElementById("milkCapacity").value = "";
}

function displayCows() {

    let table = document.getElementById("cowTable");

    if (!table) return;

    table.innerHTML = "";

    for (let i = 0; i < cows.length; i++) {

        table.innerHTML += `
<tr>
<td>${cows[i].id}</td>
<td>${cows[i].name}</td>
<td>${cows[i].breed}</td>
<td>${cows[i].age}</td>
<td>${cows[i].milkCapacity} L</td>
</tr>
`;

    }
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
    debugger
    if (type == "" || amount == "") {
        alert("Fill all fields");
        return;
    }

    expenses.push({ type, amount });

    let table = document.getElementById("expenseTable");
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





// reports

if (document.getElementById("reportMilk")) {

    let totalMilk = 85;
    let milkRate = 50;
    let totalIncome = totalMilk * milkRate;

    let totalExpense = 2500;

    let totalProfit = totalIncome - totalExpense;

    document.getElementById("reportMilk").innerText =
        totalMilk + " L";

    document.getElementById("reportIncome").innerText =
        "₹" + totalIncome;

    document.getElementById("reportExpense").innerText =
        "₹" + totalExpense;

    document.getElementById("reportProfit").innerText =
        "₹" + totalProfit;

}