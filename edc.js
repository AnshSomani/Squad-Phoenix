let box = document.querySelectorAll(".box");

    box.forEach(box => {
        let checkbox = box.querySelector(".box input");
        let custom_checkbox_box = box.querySelector(".box .custom_checkbox_box");
        box.addEventListener("click", select_checkbox);
        window.addEventListener("load", select_checkbox);
        function select_checkbox() {
            if (checkbox.checked) {
                custom_checkbox_box.classList.add("active");
            } else {
                custom_checkbox_box.classList.remove("active");

            }
        }

    });

    let select_all_box = document.querySelector(".select_all_box");
    let select_all_checkbox = document.querySelector(".select_all");
    let select_all_custom_checkbox_box = document.querySelector(".custom_checkbox_box");

    select_all_box.onclick = function(){
        if(select_all_checkbox.checked){   
            select_all_custom_checkbox_box.classList.add("active");
            select_all_function();
        }else{
            select_all_custom_checkbox_box.classList.remove("active");
            unselect_all_function();
        }
    }

    let checkbox = document.querySelectorAll(".box input");
    let custom_checkbox_box = document.querySelectorAll(".box .custom_checkbox_box");
    
    function select_all_function(){
        for (let i = 0; i < box.length; i++) {
            const element = checkbox[i];
            if(element.type == "checkbox"){
                element.checked = true;
                setTimeout(() => {
                    custom_checkbox_box[i].classList.add("active");
                }, i * 100);
            }
        }
    }

    function unselect_all_function(){
        for (let i = 0; i < box.length; i++) {
            const element = checkbox[i];
            if(element.type == "checkbox"){
                element.checked = false;
                setTimeout(() => {
                    custom_checkbox_box[i].classList.remove("active");
                }, i * 100);
            }
        }
    }

// Getting the value of checked or selected checkboxes.

let button = document.querySelector(".button");
let checkbox_value = document.querySelector(".checkbox_value");

button.onclick = function(){
    checkbox_value.innerHTML = "";
    for (let g = 0; g < box.length; g++) {
        const element = checkbox[g];
        if(element.checked){
            checkbox_value.innerHTML += `<p>`+ element.value +`</p>`;
        }
    }
}

