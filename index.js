// // JavaScript Code

// let addResearchItemButton = document.getElementById("add-button");
// let modalOverlay = document.getElementById("modal-overlay");
// let resourceNameInput = document.getElementById("resource-name");
// let closeIcon = document.getElementById("close-icon");
// let form = document.getElementById("form");
// let resourceLinkInput = document.getElementById("resource-link");
// let resourceDescriptionInput = document.getElementById("description");

// // Load existing research items from localStorage
// let storedResearchItems = localStorage.getItem("researchItems");
// let researchResources = storedResearchItems ? JSON.parse(storedResearchItems) : [];

// addResearchItemButton.addEventListener("click", function () {
//     modalOverlay.classList.add("modal-overlay-visible");
//     resourceNameInput.focus();
// });

// closeIcon.addEventListener("click", function () {
//     modalOverlay.classList.remove("modal-overlay-visible");
// });

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let resourceName = resourceNameInput.value.trim();
//     let resourceLink = resourceLinkInput.value.trim();
//     let resourceDescription = resourceDescriptionInput.value.trim();

//     if (resourceName === "" || resourceLink === "" || resourceDescription === "") {
//         alert("All fields are required!");
//         return;
//     }

//     const aCreatedResource = {
//         resNAME: resourceName,
//         resLINK: resourceLink,
//         resDESCRIPTION: resourceDescription
//     };

//     researchResources.push(aCreatedResource);
//     localStorage.setItem("researchItems", JSON.stringify(researchResources));

//     form.reset();
//     modalOverlay.classList.remove("modal-overlay-visible");
// });


// Select Elements
let addResearchItemButton = document.getElementById("add-button");
let modalOverlay = document.getElementById("modal-overlay");
let closeIcon = document.getElementById("close-icon");
let form = document.getElementById("form");
let resourceNameInput = document.getElementById("resource-name");
let resourceLinkInput = document.getElementById("resource-link");
let resourceDescriptionInput = document.getElementById("description");
let itemSection = document.getElementById("item-section");

// Load existing research items from localStorage
let storedResearchItems = localStorage.getItem("researchItems");
let researchResources = storedResearchItems ? JSON.parse(storedResearchItems) : [];

// Function to show modal
addResearchItemButton.addEventListener("click", function () {
    modalOverlay.classList.add("modal-overlay-visible");
    resourceNameInput.focus();
});

// Function to hide modal
closeIcon.addEventListener("click", function () {
    modalOverlay.classList.remove("modal-overlay-visible");
});

// Function to handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let resourceName = resourceNameInput.value.trim();
    let resourceLink = resourceLinkInput.value.trim();
    let resourceDescription = resourceDescriptionInput.value.trim();

    if (resourceName === "" || resourceLink === "" || resourceDescription === "") {
        alert("All fields are required!");
        return;
    }

    const newResource = {
        resNAME: resourceName,
        resLINK: resourceLink,
        resDESCRIPTION: resourceDescription
    };

    researchResources.push(newResource);
    localStorage.setItem("researchItems", JSON.stringify(researchResources));

    displayResearchItems();
    form.reset();
    modalOverlay.classList.remove("modal-overlay-visible");
});

// Function to display research items
function displayResearchItems() {
    itemSection.innerHTML = "";
    researchResources.forEach((resource, index) => {
        let researchItem = document.createElement("div");
        researchItem.classList.add("research-item");
        researchItem.innerHTML = `
            <div class="title-and-delete-container">
                <a href="${resource.resLINK}" target="_blank">${resource.resNAME}</a>
                <i class="fa-solid fa-trash" onclick="deleteResearchItem(${index})"></i>
            </div>
            <p>${resource.resDESCRIPTION}</p>
        `;
        itemSection.appendChild(researchItem);
    });
}

// Function to delete research items
function deleteResearchItem(index) {
    researchResources.splice(index, 1);
    localStorage.setItem("researchItems", JSON.stringify(researchResources));
    displayResearchItems();
}

// Display stored research items on page load
displayResearchItems();
