function displayToggle () {
  $('#new').on('click', function() {

    let x = document.getElementById("formholder")
    if (x.style.display === "none") {
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }
  })
}
