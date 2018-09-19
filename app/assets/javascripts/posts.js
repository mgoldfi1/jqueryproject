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

function toggleComment () {

    let x = document.getElementById("newComment")
    if (x.style.display === "none") {
      $('#commentholder').empty()
       x.style.display = "block";
   } else {
       x.style.display = "none";
       $('#commentholder').empty()
   }
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
        if ($('.showComments').length) {
          $('.showComments').attr("data-id",`${data["id"]}`)
        } else {
          $('#comments').append(`<button class="showComments" data-id="${data["id"]}">View Comments</div>`)
        }
    })

  })

}

function expandComments() {
  $('#comments').on("click", "button", function(event) {
    event.preventDefault();
    $.get(`/posts/${this.dataset.id}`, function(data){
      for (const x of data.comments) {
        $.get(`/comments/${x.id}`, function(comment){
          $('#commentholder').append(`<div class="comment">${comment.user.username}: ${comment.body}</div>`)
        })
      }
    })
    toggleComment()

    $('#comment_post_id').attr("value",`${this.dataset.id}`)


})
}

function postComment() {
  $('#new_comment').submit(function(event){
    event.preventDefault()
    $('[value="Post Comment"]').removeAttr("data-disable-with")
    var comment = $(this).serialize()
  var posted =  $.post("/comments", comment)
  posted.done(function(data){
    $('#comments').append(`<div>${data.user.username}: ${data.body}`)

  })
    })
  }
