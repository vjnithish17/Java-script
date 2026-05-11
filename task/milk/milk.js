// Dashboard
if (document.getElementById("morningMilk")) {

    let morningMilk = 45;
    let eveningMilk = 40;
    let milkRate = 50;
    let expense = 2500;

    let totalMilk = morningMilk + eveningMilk;
    let income = totalMilk * milkRate;
    let profit = income - expense;

    document.getElementById("morningMilk").innerText = morningMilk + " L";
    document.getElementById("eveningMilk").innerText = eveningMilk + " L";
    document.getElementById("totalMilk").innerText = totalMilk + " L";
    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("expense").innerText = "₹" + expense;
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

    displayMilk();

    document.getElementById("milkCowName").value = "";
    document.getElementById("morning").value = "";
    document.getElementById("evening").value = "";
}

function displayMilk() {

    let table = document.getElementById("milkTable");

    if (!table) return;

    table.innerHTML = "";

    milkEntries.forEach(milk => {

        table.innerHTML += `
<tr>
<td>${milk.name}</td>
<td>${milk.morning} L</td>
<td>${milk.evening} L</td>
<td><b>${milk.total} L</b></td>
</tr>
`;

    });
}