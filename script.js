let check = "rgb(0, 128, 0)"

$(document).ready(function() {
  $("#next").click(function() {
    st2Color = $("#stp2").css("border-color")
    st3Color = $("#stp3").css("border-color")
    st4Color = $("#stp4").css("border-color")

    if (st2Color !== check) {
      $("#bar2").css("width", "60px")
      setTimeout(() => {
        $(".stp2Txt").css("color", check)
        $("#stp2").css("color", check)
        $("#stp2").css("borderColor", check)
        $("#stp2").text("✓")
      }, 350);
    } else if (st2Color == check && st3Color !== check) {
      $("#bar2").css("width", "130px")
      setTimeout(() => {
        $(".stp3Txt").css("color", check)
        $("#stp3").css("color", check)
        $("#stp3").css("borderColor", check)
        $("#stp3").text("✓")
      }, 350);
    } else if (st2Color == check && st3Color == check && st4Color !== check) {
      $("#bar2").css("width", "190px")
      $("#next").text("Send")

      setTimeout(() => {
        $(".stp4Txt").css("color", check)
        $("#stp4").css("color", check)
        $("#stp4").css("borderColor", check)
        $("#stp4").text("✓")
      }, 350);
    }
  })

  $("#prev").click(function() {
    st2Color = $("#stp2").css("border-color")
    st3Color = $("#stp3").css("border-color")
    st4Color = $("#stp4").css("border-color")
    if (st4Color == check) {
      $("#bar2").css("width", "130px")
      $("#stp4").css("borderColor", "#b8b8b8")
      $("#stp4").css("color", "#b8b8b8")
      $(".stp4Txt").css("color", "#7d7d7d")
      $("#stp4").text("✖")
      $("#next").text("Next")

    } else if (st3Color == check && st4Color !== check) {
      $("#bar2").css("width", "60px")
      $("#stp3").css("borderColor", "#b8b8b8")
      $("#stp3").css("color", "#b8b8b8")
      $(".stp3Txt").css("color", "#7d7d7d")
      $("#stp3").text("✖")
    } else if (st2Color == check && st3Color !== check && st4Color !== check) {
      $("#bar2").css("width", "10px")
      $("#stp2").css("borderColor", "#b8b8b8")
      $("#stp2").css("color", "#b8b8b8")
      $(".stp2Txt").css("color", "#7d7d7d")
      $("#stp2").text("✖")

    }
  })
});
