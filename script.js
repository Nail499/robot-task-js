let s2boxes = document.getElementById("s2boxes");
// fetch("http://localhost:3000/robots")
// .then(response=>response.json())
// .then(data=>{
//     data.forEach(item=>{
//         modalinput1.setAttribute("value", `${item.name}`);
//         s2boxes.innerHTML+=
//         `  <div class="box">
//         <div class="image"><img src="${item.image}"></div>
//         <h1>${item.name}</h1>
//         <p>${item.description}</p>
//         <button>VIEW DETAILS</button>
//         <button onclick="updateop(${item.id})">Update</button>
//         </div>`
//     })
// })

let page = 4;

function showData() {
    fetch('http://localhost:3000/robots')
        .then(response => response.json())
        .then(res => {
            res.slice(page - 4, page).forEach(item => {
                s2boxes.innerHTML +=
                    `  <div class="box">
            <div class="image"><img src="${item.image}"></div>
            <h1>${item.name}</h1>
            <p>${item.description}</p>
            <button>VIEW DETAILS</button>
            <button onclick="updateop(${item.id})">Update</button>
            </div>`
            })
        })
}
showData()

let loadmore = document.getElementById("load");

loadmore.addEventListener("click", () => {
    page += 4
    showData()
})




let modalinput1 = document.getElementById("modalinput1");



let modal = document.getElementById('myModall');
let span = document.getElementsByClassName("close")[0];

function updateop() {
    modal.style.display = "block";

}
span.addEventListener('click', function () {
    modal.style.display = "none";
})

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})