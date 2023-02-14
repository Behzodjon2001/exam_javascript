let btn = document.getElementById("talaba_qoshish")


btn.addEventListener("click", function() {
    // i3++;
    // let students = [{}]

    let fullName = document.getElementById("full_name").value
    let kursi = document.getElementById("kursi").value
    let bahosi = document.getElementById("bahosi").value
    let bahosiB = document.getElementById("bahosi")
    console.log("der1");
    const form = document.getElementById("form");

    const isRequired = (value) => {
        //   if (value === "") return true;
        //   return false;
        let res = value === "" ? true : false;
        return res;
    };

    const showError = (input, message) => {
        const formInput = input.parentElement;
        formInput.classList.add("error");
        formInput.querySelector("small").innerText = message;
    };

    const showSuccess = (input) => {
        const formInput = input.parentElement;
        formInput.classList.remove("error");
        formInput.querySelector("small").innerText = "";
    };


    const checkScore = () => {
        let isValid = false;
        console.log(fullName);
        // const bahosi1 = bahosi;
        if (isRequired(bahosi)) {
            showError(bahosiB, "To'ldirilishi majburiy bo'lgan maydon");
        } else if (!containsOnlyNumbers(bahosi)) {
            showError(bahosiB, "Score must only number about [1-5]");
        } else {
            showSuccess(bahosiB);

            isValid = true;
        }
        return isValid;
    };
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isUserName = checkScore();
        // let isPassword = checkPassword();
        //   let isPassword = checkPassword()

        if (isUserName) {
            console.log(isUserName);

            // names(fullName, kursi, bahosi)

            // function names(fullName, kursi, bahosi) {
            //     console.log(fullName);
            //     console.log(kursi);
            //     console.log(bahosi);


            console.log("der6");
            // for (let i = 0; i < students.length; i++) {
            //     students[i] = { i, fullName, kursi, bahosi }
            // }

            const div = document.createElement("div");
            const p = document.createElement("p");
            div.append(p);
            div.classList.add("my-div6");
            document.body.append(div);
            let tbody = document.getElementById("tbody");
            // let id = document.getElementById("id_n").value


            console.log("der7");
            // console.log(students);
            // for (const item in students) {

            tbody.innerHTML += ` <tr>
            <td class="ttr">${i++}</td>
            <td>${fullName}</td>
            <td>${kursi}</td>
            <td>${bahosi}</td>
          </tr>`;
            form.reset()
            fullName = undefined
            bahosi = undefined
            kursi = undefined
                // }


            // }

        }

    });

    form.addEventListener("input", (e) => {
        //   console.log("e", e.target.value);
        e.preventDefault();
        switch (e.target.id) {
            case "bahosi":
                checkScore();
                break;
            default:
                break;
        }
    });

    function containsOnlyNumbers(str) {
        return /^[1-5]+$/.test(str);
    }


})
let i = 1;