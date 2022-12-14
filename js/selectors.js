$(document).ready(function () {
  //Question 1 bonus
  $(".container1")
    .children()
    .each(function () {
      $(this).css({ "background-color": $(this).attr("class") });
    });
  var paraColor = [
    $(".red p").attr("class"),
    $(".blue p").attr("class"),
    $(".green p").attr("class"),
  ];
  $(".container1 p").each(function (i) {
    $(this).css("color", paraColor[i]);
  });

  //Question 2 bonus
  $(".container2")
    .children()
    .each(function () {
      if ($(this).attr("href").includes("google")) {
        this.textContent = "Google";
      }
      if ($(this).attr("href").endsWith("org")) {
        this.textContent = "IEEE";
      }
      //bonus
      if ($(this).attr("href").startsWith("https")) {
        this.textContent = "Facebook";
      }
      if ($(this).attr("href").startsWith("http")) {
        this.textContent += " Official Website";
      }
    });

  //Question 3
  $(".figure3 img").attr("src", "img/orange.png");
  $(".figure3 figcaption").text("fig.3 - Orange Juice");

  //Question 4
  $(".my-name").attr("style", "color:blue");
  $("td:odd").css({ "background-color": "pink" });
  $(".ro3td2").css({ "font-weight": "bold" });

  //Question 5
  $(".seconditemul").css({ "font-style": "italic" });
  $(".seconditemol").next().css({ color: "red" });
});
