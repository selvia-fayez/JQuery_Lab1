$(document).ready(function () {
  //Question 1
  $(".container1").append("<div class='black'></div>");
  $(".container1").prepend("<div class='white'></div>");
  $(".pink").before("<p class='yellow'></p>");

  //Question 2
  $(".container2")
    .children()
    .each(function () {
      $(this).replaceWith(
        `<a href="http://${this.textContent}">${this.textContent}</a>`
      );
    });

  //Question 3
  $(".container3 img").wrap("<figure></figure>");
  $(".container3 img").after("<figcaption>Coffee</figcaption>");

  //Question 4
  $(".container4 .col-age").empty();
  $(".container4 td").each(function () {
    if (this.textContent == "Mohsen") {
      $(this).addClass("man");
    }
  });
  $(".container4 td").toggleClass("your-email");
  //$(".container4 td").toggleClass("your-email");

  //Question 5 Bonus
  $(".container5 li ").each(function (i) {
    if (i % 3 == 0) {
      $(this).addClass("divided3");
    }
    //I added (color red) to li that has index that can be divided by 3
    $(".container5 li").filter(".divided3").css({ color: "red" });
  });

  //Question 6
  $("#my-form [name = username]").val("selvia fayez");
  $("#my-form [type=checkbox]").attr("checked", "true");
});
