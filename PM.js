function SetNicknameCookie() {
  var Cookie = document.getElementById("NicknameInput").value;

  document.cookie = "Nickname=" + encodeURI(Cookie);
}

$(function() {
    $("#20230206").on("click", function() {
        $(".PM").load("PM_20230206.html");
    });
});
$(function() {
    $("#20230208").on("click", function() {
        $(".PM").load("PM_20230208.html");
    });
});
$(function() {
    $("#20230210").on("click", function() {
        $(".PM").load("PM_20230210.html");
    });
});
$(function() {
    $("#20230212").on("click", function() {
        $(".PM").load("PM_20230212.html");
    });
});
$(function() {
    $("#20230215").on("click", function() {
        $(".PM").load("PM_20230215.html");
    });
});
