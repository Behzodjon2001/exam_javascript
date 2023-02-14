let btn = document.getElementById("talaba_qoshish")
let i3 = 0;

btn.addEventListener("click", function() {
    i3++;
    let fullName = document.getElementById("full_name").value
    let kursi = document.getElementById("kursi").value
    let bahosi = document.getElementById("bahosi").value
    console.log("der1");

    names(fullName, kursi, bahosi)

    function names(fullName, kursi, bahosi) {
        console.log(fullName);
        console.log(kursi);
        console.log(bahosi);
        let students = [{}]

        console.log("der6");
        for (let i = 0; i < students.length; i++) {
            students[i] = { i, fullName, kursi, bahosi }
        }

        const div = document.createElement("div");
        const p = document.createElement("p");
        div.append(p);
        div.classList.add("my-div6");
        document.body.append(div);
        let tbody = document.getElementById("tbody");
        // let id = document.getElementById("id_n").value


        console.log("der7");
        console.log(students);
        for (const item in students) {

            let id = students[item].i;
            id++
            tbody.innerHTML += ` <tr>
            <td class="ttr">${i3}</td>
            <td>${students[item].fullName}</td>
            <td>${students[item].kursi}</td>
            <td>${students[item].bahosi}</td>
          </tr>`;
            // let trr = document.getElementById("ttr").value;

            // }

        }
    }
})