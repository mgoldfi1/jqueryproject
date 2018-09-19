function displayToggle () {
  $('#new').click(function(event) {
    event.preventDefault()
    document.getElementById('new_post').reset()
    let x = document.getElementById("formholder")
    if (x.style.display === "none") {
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }
  })
}

function showPosts() {
  $.get("/posts", function(data) {
    for (const x of data) {
      $('#posts').append(`<div id="post-${x.id}">Entry Date: ${x.date} <button class="expand" data-id="${x.id}">Show Above</button><br> </div>`)
    }
  })

}

function expandPost() {
  $('#posts').on("click", "button", function(event) {
    event.preventDefault();
    $.get(`/posts/${this.dataset.id}`, function(data){
      $("#date").text(data["date"]);
      $("#breakfast").text(`Breakfast: ${data["breakfast"]}`);
      $("#lunch").text(`Lunch: ${data["lunch"]}`);
      $("#dinner").text(`Dinner: ${data["dinner"]}`);
    })

  })

}
