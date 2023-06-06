let view = document.getElementById("view");
view.addEventListener("click", enterEditMode);

function enterEditMode() {
  let edit = document.createElement("textarea");
  edit.classList.add("edit");
  view.replaceWith(edit);
  edit.value = view.innerHTML;
  edit.focus();
  
  edit.addEventListener("blur", exitEditMode);
  edit.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      exitEditMode();
    }
  });
}

function exitEditMode() {
  let edit = document.querySelector(".edit");
  view.innerHTML = edit.value;
  view.classList.remove("edit");
  edit.replaceWith(view);
}
