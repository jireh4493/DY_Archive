function SetNicknameCookie() {
  var Cookie = document.getElementById("NicknameInput").value;

  document.cookie = "Nickname=" + encodeURI(Cookie);
}


function resetMonth() {
    $("#January").css("opacity", "0");
    $("#February").css("opacity", "0");
    $("#March").css("opacity", "0");
    $("#April").css("opacity", "0");
    $("#May").css("opacity", "0");
    $("#June").css("opacity", "0");
    $("#July").css("opacity", "0");
    $("#August").css("opacity", "0");
    $("#September").css("opacity", "0");
    $("#October").css("opacity", "0");
    $("#November").css("opacity", "0");
    $("#December").css("opacity", "0");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");
}
function resetDate() {
    $("#Date1").css("opacity", "0");
    $("#Date2").css("opacity", "0");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "0");
    $("#Date5").css("opacity", "0");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "0");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "0");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "0");
    $("#Date13").css("opacity", "0");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "0");
    $("#Date18").css("opacity", "0");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "0");
    $("#Date21").css("opacity", "0");
    $("#Date22").css("opacity", "0");
    $("#Date23").css("opacity", "0");
    $("#Date24").css("opacity", "0");
    $("#Date25").css("opacity", "0");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "0");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "0");
    $("#Date30").css("opacity", "0");
    $("#Date31").css("opacity", "0");
}
function resetDateFontweight() {
    $("#Date1").css("font-weight", "300");
    $("#Date2").css("font-weight", "300");
    $("#Date3").css("font-weight", "300");
    $("#Date4").css("font-weight", "300");
    $("#Date5").css("font-weight", "300");
    $("#Date6").css("font-weight", "300");
    $("#Date7").css("font-weight", "300");
    $("#Date8").css("font-weight", "300");
    $("#Date9").css("font-weight", "300");
    $("#Date10").css("font-weight", "300");
    $("#Date11").css("font-weight", "300");
    $("#Date12").css("font-weight", "300");
    $("#Date13").css("font-weight", "300");
    $("#Date14").css("font-weight", "300");
    $("#Date15").css("font-weight", "300");
    $("#Date16").css("font-weight", "300");
    $("#Date17").css("font-weight", "300");
    $("#Date18").css("font-weight", "300");
    $("#Date19").css("font-weight", "300");
    $("#Date20").css("font-weight", "300");
    $("#Date21").css("font-weight", "300");
    $("#Date22").css("font-weight", "300");
    $("#Date23").css("font-weight", "300");
    $("#Date24").css("font-weight", "300");
    $("#Date25").css("font-weight", "300");
    $("#Date26").css("font-weight", "300");
    $("#Date27").css("font-weight", "300");
    $("#Date28").css("font-weight", "300");
    $("#Date29").css("font-weight", "300");
    $("#Date30").css("font-weight", "300");
    $("#Date31").css("font-weight", "300");
}

function Year2022ToMonth() {
    resetMonth();
    resetDate();
    $("#Year2022").css("font-weight", "500");
    $("#Year2023").css("font-weight", "300");
    $(".Monthlist").css("opacity", "1");
    $("#January").css("opacity", "1");
    $("#February").css("opacity", "1");
    $("#March").css("opacity", "1");
    $("#April").css("opacity", "1");
    $("#May").css("opacity", "1");
    $("#June").css("opacity", "1");
    $("#July").css("opacity", "1");
    $("#August").css("opacity", "1");
    $("#September").css("opacity", "1");
    $("#October").css("opacity", "1");
    $("#November").css("opacity", "1");
    $("#December").css("opacity", "1");
}
function Year2023ToMonth() {
    resetMonth();
    resetDate();
    $("#Year2022").css("font-weight", "300");
    $("#Year2023").css("font-weight", "500");
    $(".Monthlist").css("opacity", "1");
    $("#January").css("opacity", "1");
    $("#February").css("opacity", "1");
}

function JanuaryToDate() {
    resetDate();
    resetDateFontweight();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "500");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    if ($("#Year2022").css("font-weight") == 500) {
        $("#Date1").css("opacity", "0");
        $("#Date2").css("opacity", "0");
        $("#Date3").css("opacity", "1");
        $("#Date4").css("opacity", "0");
        $("#Date5").css("opacity", "0");
        $("#Date6").css("opacity", "0");
        $("#Date7").css("opacity", "0");
        $("#Date8").css("opacity", "0");
        $("#Date9").css("opacity", "0");
        $("#Date10").css("opacity", "1");
        $("#Date11").css("opacity", "1");
        $("#Date12").css("opacity", "");
        $("#Date13").css("opacity", "0");
        $("#Date14").css("opacity", "1");
        $("#Date15").css("opacity", "0");
        $("#Date16").css("opacity", "0");
        $("#Date17").css("opacity", "0");
        $("#Date18").css("opacity", "0");
        $("#Date19").css("opacity", "1");
        $("#Date20").css("opacity", "0");
        $("#Date21").css("opacity", "0");
        $("#Date22").css("opacity", "0");
        $("#Date23").css("opacity", "0");
        $("#Date24").css("opacity", "1");
        $("#Date25").css("opacity", "1");
        $("#Date26").css("opacity", "0");
        $("#Date27").css("opacity", "0");
        $("#Date28").css("opacity", "1");
        $("#Date29").css("opacity", "1");
        $("#Date30").css("opacity", "1");
        $("#Date31").css("opacity", "0");
    }
    else {
        $("#Date1").css("opacity", "0");
        $("#Date2").css("opacity", "1");
        $("#Date3").css("opacity", "0");
        $("#Date4").css("opacity", "0");
        $("#Date5").css("opacity", "1");
        $("#Date6").css("opacity", "1");
        $("#Date7").css("opacity", "0");
        $("#Date8").css("opacity", "0");
        $("#Date9").css("opacity", "1");
        $("#Date10").css("opacity", "1");
        $("#Date11").css("opacity", "1");
        $("#Date12").css("opacity", "1");
        $("#Date13").css("opacity", "0");
        $("#Date14").css("opacity", "1");
        $("#Date15").css("opacity", "0");
        $("#Date16").css("opacity", "0");
        $("#Date17").css("opacity", "1");
        $("#Date18").css("opacity", "1");
        $("#Date19").css("opacity", "0");
        $("#Date20").css("opacity", "0");
        $("#Date21").css("opacity", "1");
        $("#Date22").css("opacity", "0");
        $("#Date23").css("opacity", "1");
        $("#Date24").css("opacity", "0");
        $("#Date25").css("opacity", "0");
        $("#Date26").css("opacity", "1");
        $("#Date27").css("opacity", "0");
        $("#Date28").css("opacity", "1");
        $("#Date29").css("opacity", "0");
        $("#Date30").css("opacity", "0");
        $("#Date31").css("opacity", "0");
    }
}
function FebruaryToDate() {
    resetDate();
    resetDateFontweight();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "500");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    if ($("#Year2022").css("font-weight") == 500) {
        $("#Date1").css("opacity", "1");
        $("#Date2").css("opacity", "0");
        $("#Date3").css("opacity", "1");
        $("#Date4").css("opacity", "0");
        $("#Date5").css("opacity", "0");
        $("#Date6").css("opacity", "0");
        $("#Date7").css("opacity", "0");
        $("#Date8").css("opacity", "1");
        $("#Date9").css("opacity", "0");
        $("#Date10").css("opacity", "1");
        $("#Date11").css("opacity", "0");
        $("#Date12").css("opacity", "1");
        $("#Date13").css("opacity", "1");
        $("#Date14").css("opacity", "1");
        $("#Date15").css("opacity", "1");
        $("#Date16").css("opacity", "0");
        $("#Date17").css("opacity", "1");
        $("#Date18").css("opacity", "0");
        $("#Date19").css("opacity", "1");
        $("#Date20").css("opacity", "0");
        $("#Date21").css("opacity", "1");
        $("#Date22").css("opacity", "1");
        $("#Date23").css("opacity", "0");
        $("#Date24").css("opacity", "1");
        $("#Date25").css("opacity", "1");
        $("#Date26").css("opacity", "1");
        $("#Date27").css("opacity", "1");
        $("#Date28").css("opacity", "0");
        $("#Date29").css("opacity", "0");
        $("#Date30").css("opacity", "0");
        $("#Date31").css("opacity", "0");
    }
    else {
         $("#Date1").css("opacity", "1");
         $("#Date2").css("opacity", "0");
         $("#Date3").css("opacity", "1");
         $("#Date4").css("opacity", "0");
         $("#Date5").css("opacity", "0");
         $("#Date6").css("opacity", "1");
         $("#Date7").css("opacity", "0");
         $("#Date8").css("opacity", "1");
         $("#Date9").css("opacity", "0");
         $("#Date10").css("opacity", "1");
         $("#Date11").css("opacity", "0");
         $("#Date12").css("opacity", "1");
         $("#Date13").css("opacity", "0");
         $("#Date14").css("opacity", "0");
         $("#Date15").css("opacity", "1");
         $("#Date16").css("opacity", "1");
         $("#Date17").css("opacity", "0");
         $("#Date18").css("opacity", "0");
         $("#Date19").css("opacity", "0");
         $("#Date20").css("opacity", "0");
         $("#Date21").css("opacity", "0");
         $("#Date22").css("opacity", "0");
         $("#Date23").css("opacity", "0");
         $("#Date24").css("opacity", "0");
         $("#Date25").css("opacity", "0");
         $("#Date26").css("opacity", "0");
         $("#Date27").css("opacity", "0");
         $("#Date28").css("opacity", "0");
         $("#Date29").css("opacity", "0");
         $("#Date30").css("opacity", "0");
         $("#Date31").css("opacity", "0");
    }
}
function MarchToDate() {
    resetDate();
    resetDateFontweight();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "500");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "1");
    $("#Date2").css("opacity", "1");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "1");
    $("#Date5").css("opacity", "0");
    $("#Date6").css("opacity", "1");
    $("#Date7").css("opacity", "1");
    $("#Date8").css("opacity", "0");
    $("#Date9").css("opacity", "1");
    $("#Date10").css("opacity", "1");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "0");
    $("#Date13").css("opacity", "1");
    $("#Date14").css("opacity", "1");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "1");
    $("#Date17").css("opacity", "1");
    $("#Date18").css("opacity", "1");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "1");
    $("#Date21").css("opacity", "0");
    $("#Date22").css("opacity", "0");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "1");
    $("#Date25").css("opacity", "1");
    $("#Date26").css("opacity", "1");
    $("#Date27").css("opacity", "0");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "0");
    $("#Date31").css("opacity", "0");
}
function AprilToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "500");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "1");
    $("#Date2").css("opacity", "0");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "0");
    $("#Date5").css("opacity", "1");
    $("#Date6").css("opacity", "1");
    $("#Date7").css("opacity", "1");
    $("#Date8").css("opacity", "0");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "0");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "1");
    $("#Date13").css("opacity", "0");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "1");
    $("#Date18").css("opacity", "0");
    $("#Date19").css("opacity", "1");
    $("#Date20").css("opacity", "0");
    $("#Date21").css("opacity", "1");
    $("#Date22").css("opacity", "0");
    $("#Date23").css("opacity", "0");
    $("#Date24").css("opacity", "0");
    $("#Date25").css("opacity", "0");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "0");
    $("#Date28").css("opacity", "1");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "0");
    $("#Date31").css("opacity", "0");
}
function MayToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "500");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "0");
    $("#Date2").css("opacity", "1");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "0");
    $("#Date5").css("opacity", "1");
    $("#Date6").css("opacity", "1");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "1");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "0");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "0");
    $("#Date13").css("opacity", "0");
    $("#Date14").css("opacity", "1");
    $("#Date15").css("opacity", "1");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "0");
    $("#Date18").css("opacity", "0");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "0");
    $("#Date21").css("opacity", "1");
    $("#Date22").css("opacity", "0");
    $("#Date23").css("opacity", "0");
    $("#Date24").css("opacity", "0");
    $("#Date25").css("opacity", "0");
    $("#Date26").css("opacity", "1");
    $("#Date27").css("opacity", "0");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "1");
    $("#Date31").css("opacity", "1");
}
function JuneToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "500");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "0");
    $("#Date2").css("opacity", "0");
    $("#Date3").css("opacity", "1");
    $("#Date4").css("opacity", "0");
    $("#Date5").css("opacity", "1");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "1");
    $("#Date8").css("opacity", "0");
    $("#Date9").css("opacity", "1");
    $("#Date10").css("opacity", "1");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "1");
    $("#Date13").css("opacity", "1");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "1");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "0");
    $("#Date18").css("opacity", "1");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "0");
    $("#Date21").css("opacity", "1");
    $("#Date22").css("opacity", "1");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "0");
    $("#Date25").css("opacity", "1");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "1");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "0");
    $("#Date30").css("opacity", "1");
    $("#Date31").css("opacity", "0");
}
function JulyToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "500");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "1");
    $("#Date2").css("opacity", "01");
    $("#Date3").css("opacity", "1");
    $("#Date4").css("opacity", "0");
    $("#Date5").css("opacity", "1");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "1");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "0");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "1");
    $("#Date13").css("opacity", "1");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "1");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "0");
    $("#Date18").css("opacity", "1");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "1");
    $("#Date21").css("opacity", "0");
    $("#Date22").css("opacity", "0");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "1");
    $("#Date25").css("opacity", "1");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "0");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "1");
    $("#Date31").css("opacity", "0");
}
function AugustToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "500");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "1");
    $("#Date2").css("opacity", "1");
    $("#Date3").css("opacity", "1");
    $("#Date4").css("opacity", "1");
    $("#Date5").css("opacity", "1");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "1");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "0");
    $("#Date11").css("opacity", "1");
    $("#Date12").css("opacity", "1");
    $("#Date13").css("opacity", "1");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "1");
    $("#Date17").css("opacity", "0");
    $("#Date18").css("opacity", "1");
    $("#Date19").css("opacity", "1");
    $("#Date20").css("opacity", "1");
    $("#Date21").css("opacity", "0");
    $("#Date22").css("opacity", "0");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "1");
    $("#Date25").css("opacity", "1");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "1");
    $("#Date28").css("opacity", "1");
    $("#Date29").css("opacity", "0");
    $("#Date30").css("opacity", "0");
    $("#Date31").css("opacity", "1");
}
function SeptemberToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "500");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "0");
    $("#Date2").css("opacity", "1");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "1");
    $("#Date5").css("opacity", "0");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "1");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "1");
    $("#Date11").css("opacity", "1");
    $("#Date12").css("opacity", "1");
    $("#Date13").css("opacity", "1");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "1");
    $("#Date17").css("opacity", "1");
    $("#Date18").css("opacity", "0");
    $("#Date19").css("opacity", "1");
    $("#Date20").css("opacity", "0");
    $("#Date21").css("opacity", "1");
    $("#Date22").css("opacity", "1");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "1");
    $("#Date25").css("opacity", "0");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "1");
    $("#Date28").css("opacity", "1");
    $("#Date29").css("opacity", "0");
    $("#Date30").css("opacity", "1");
    $("#Date31").css("opacity", "0");
}
function OctoberToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "500");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "0");
    $("#Date2").css("opacity", "1");
    $("#Date3").css("opacity", "1");
    $("#Date4").css("opacity", "1");
    $("#Date5").css("opacity", "0");
    $("#Date6").css("opacity", "1");
    $("#Date7").css("opacity", "1");
    $("#Date8").css("opacity", "0");
    $("#Date9").css("opacity", "1");
    $("#Date10").css("opacity", "1");
    $("#Date11").css("opacity", "1");
    $("#Date12").css("opacity", "0");
    $("#Date13").css("opacity", "0");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "0");
    $("#Date18").css("opacity", "1");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "1");
    $("#Date21").css("opacity", "0");
    $("#Date22").css("opacity", "1");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "0");
    $("#Date25").css("opacity", "0");
    $("#Date26").css("opacity", "1");
    $("#Date27").css("opacity", "0");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "0");
    $("#Date31").css("opacity", "0");
}
function NovemberToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "500");
    $("#December").css("font-weight", "300");

    $("#Date1").css("opacity", "0");
    $("#Date2").css("opacity", "0");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "0");
    $("#Date5").css("opacity", "0");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "0");
    $("#Date9").css("opacity", "1");
    $("#Date10").css("opacity", "1");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "0");
    $("#Date13").css("opacity", "0");
    $("#Date14").css("opacity", "1");
    $("#Date15").css("opacity", "0");
    $("#Date16").css("opacity", "1");
    $("#Date17").css("opacity", "1");
    $("#Date18").css("opacity", "0");
    $("#Date19").css("opacity", "0");
    $("#Date20").css("opacity", "1");
    $("#Date21").css("opacity", "1");
    $("#Date22").css("opacity", "1");
    $("#Date23").css("opacity", "0");
    $("#Date24").css("opacity", "1");
    $("#Date25").css("opacity", "0");
    $("#Date26").css("opacity", "1");
    $("#Date27").css("opacity", "1");
    $("#Date28").css("opacity", "1");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "1");
    $("#Date31").css("opacity", "0");
}
function DecemberToDate() {
    resetDate();
    $(".Datelist").css("opacity", "1");
    $("#January").css("font-weight", "300");
    $("#February").css("font-weight", "300");
    $("#March").css("font-weight", "300");
    $("#April").css("font-weight", "300");
    $("#May").css("font-weight", "300");
    $("#June").css("font-weight", "300");
    $("#July").css("font-weight", "300");
    $("#August").css("font-weight", "300");
    $("#September").css("font-weight", "300");
    $("#October").css("font-weight", "300");
    $("#November").css("font-weight", "300");
    $("#December").css("font-weight", "500");

    $("#Date1").css("opacity", "1");
    $("#Date2").css("opacity", "0");
    $("#Date3").css("opacity", "0");
    $("#Date4").css("opacity", "1");
    $("#Date5").css("opacity", "1");
    $("#Date6").css("opacity", "0");
    $("#Date7").css("opacity", "0");
    $("#Date8").css("opacity", "1");
    $("#Date9").css("opacity", "0");
    $("#Date10").css("opacity", "1");
    $("#Date11").css("opacity", "0");
    $("#Date12").css("opacity", "1");
    $("#Date13").css("opacity", "0");
    $("#Date14").css("opacity", "0");
    $("#Date15").css("opacity", "1");
    $("#Date16").css("opacity", "0");
    $("#Date17").css("opacity", "1");
    $("#Date18").css("opacity", "0");
    $("#Date19").css("opacity", "1");
    $("#Date20").css("opacity", "0");
    $("#Date21").css("opacity", "1");
    $("#Date22").css("opacity", "1");
    $("#Date23").css("opacity", "1");
    $("#Date24").css("opacity", "0");
    $("#Date25").css("opacity", "1");
    $("#Date26").css("opacity", "0");
    $("#Date27").css("opacity", "1");
    $("#Date28").css("opacity", "0");
    $("#Date29").css("opacity", "1");
    $("#Date30").css("opacity", "1");
    $("#Date31").css("opacity", "1");
}

//2023??? 1???
$(function() {
    $("#Date14").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230114.html");
                resetDateFontweight();
                $("#Date14").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date17").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230117.html");
                resetDateFontweight();
                $("#Date17").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date18").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230118.html");
                resetDateFontweight();
                $("#Date18").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date21").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230121.html");
                resetDateFontweight();
                $("#Date21").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date23").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230123.html");
                resetDateFontweight();
                $("#Date23").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date26").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230126.html");
                resetDateFontweight();
                $("#Date26").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date28").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#January").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230128.html");
                resetDateFontweight();
                $("#Date28").css("font-weight", "500");
            }
        }
    });
});

//2023??? 2???
$(function() {
    $("#Date1").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230201.html");
                resetDateFontweight();
                $("#Date1").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date3").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230203.html");
                resetDateFontweight();
                $("#Date3").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date6").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230206.html");
                resetDateFontweight();
                $("#Date6").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date8").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230208.html");
                resetDateFontweight();
                $("#Date8").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date10").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230210.html");
                resetDateFontweight();
                $("#Date10").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date12").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230212.html");
                resetDateFontweight();
                $("#Date12").css("font-weight", "500");
            }
        }
    });
});
$(function() {
    $("#Date15").on("click", function() {
        if ($("#Year2023").css("font-weight") == 500) {
            if ($("#February").css("font-weight") == 500) {
                $(".PM").load("PM/PM_20230215.html");
                resetDateFontweight();
                $("#Date15").css("font-weight", "500");
            }
        }
    });
});