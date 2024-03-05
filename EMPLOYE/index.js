let datas = [];
let count = 0;
let t_salary = 0;

const submit = (e) => {

    e.preventDefault();

    count++;

    let name = document.getElementById("name").value;
    let job = document.getElementById("jobRole").value;
    let dep = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;
    let work = document.getElementById("workExperience").value;
    let email = document.getElementById("contactEmail").value;

    let data = {
        name: name,
        job: job,
        dep: dep,
        salary: salary,
        work: work,
        email: email,
    };

    datas.push(data);

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;
    let td2 = document.createElement("td");
    td2.innerHTML = job;
    let td3 = document.createElement("td");
    td3.innerHTML = dep;
    let td4 = document.createElement("td");
    td4.innerHTML = salary;
    t_salary += parseInt(salary);
    let td5 = document.createElement("td");
    td5.innerHTML = work;
    let td6 = document.createElement("td");
    td6.innerHTML = email;
    let role = document.createElement("td");
    let del = document.createElement("td");
    del.style.backgroundColor="red";
    del.innerHTML = "DELETE";
    del.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        document.getElementById("total_e").innerHTML = --count;
        t_salary -= parseInt(salary);
        document.getElementById("total_s").innerHTML = t_salary;
    })
    work > 5 ?
        role.innerHTML = "Senior" :
        role.innerHTML = "Junior";
    tr.append(td1, td2, td3, td4, td5, td6, role, del);

    document.getElementById("tbody").append(tr);
    document.getElementById("total_e").innerHTML = count;
    document.getElementById("total_s").innerHTML = t_salary;

}
document.getElementById("employeeForm").addEventListener("submit", submit);