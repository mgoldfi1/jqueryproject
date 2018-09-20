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
    $('#comments').empty()
    document.getElementById("newComment").style.display = "block"
    $('#comment_post_id').attr("value",`${this.dataset.id}`)

    event.preventDefault();
    $.get(`/posts/${this.dataset.id}`, function(data){
      $("#date").text(data["date"]);
      $("#breakfast").text(`Breakfast: ${data["breakfast"]}`);
      $("#lunch").text(`Lunch: ${data["lunch"]}`);
      $("#dinner").text(`Dinner: ${data["dinner"]}`);
      for (const x of data.comments) {
        $.get(`/comments/${x.id}`, function(comment){
          $('#comments').append(`<div class="comment"><a href="/users/${comment.user_id}">${comment.user.username}</a>: ${comment.body}</div>`)
        })
      }

    })

  })

}



function postComment() {
  $('#new_comment').submit(function(event){
    event.preventDefault()
    $('[value="Post Comment"]').removeAttr("data-disable-with")
    var comment = $(this).serialize()
  var posted =  $.post("/comments", comment)
  posted.done(function(data){
    document.getElementById('new_comment').reset()
    $('#comments').append(`<div class="comment">${data.user.username}: ${data.body}</div>`)

  })
    })
  }


  function postMake() {
    $('#new_post').submit(function(event) {
      event.preventDefault();
      $("input").last().removeAttr("data-disable-with")
      var values = $(this).serialize();
      var posting = $.post('/posts', values);
      posting.done(function(data) {
        document.getElementById("formholder").style.display = "none"
        var post = data;
        $("#date").text(post["date"]);
        $("#breakfast").text(`Breakfast: ${post["breakfast"]}`);
        $("#lunch").text(`Lunch: ${post["lunch"]}`);
        $("#dinner").text(`Dinner: ${post["dinner"]}`);
        $('#comments').empty()
        document.getElementById("newComment").style.display = "none"
      });
    });
  }
