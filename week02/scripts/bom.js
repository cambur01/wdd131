// Create references to html elements that will require interaction
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add button functionality
button.addEventListener("click", function() {
if (input.value.trim() !=+ "") {

    // Create new elements
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    // Append user input to li element, and tack on the delete button
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);

    // Append li element to the ul "list"
    list.append(li);

    // Listener and callback for delete button
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();
    });

    // Reset input field
    input.value = "";
    input.focus();
}
});