function saklar() {
  let toggle1kel = document.getElementById("default-toggle1kel");
  let toggle2kel = document.getElementById("default-toggle2kel");
  let toggle3kel = document.getElementById("default-toggle3kel");
  let lampu1kel = document.getElementById("lampu1kel");
  let lampu2kel = document.getElementById("lampu2kel");
  let lampu3kel = document.getElementById("lampu3kel");

  let toggle1makan = document.getElementById("default-toggle1makan");
  let lampu1makan = document.getElementById("lampu1makan");

  let toggle1tidur = document.getElementById("default-toggle1tidur");
  let toggle2tidur = document.getElementById("default-toggle2tidur");
  let lampu1tidur = document.getElementById("lampu1tidur");
  let lampu2tidur = document.getElementById("lampu2tidur");

  let toggle1tamu = document.getElementById("default-toggle1tamu");
  let toggle2tamu = document.getElementById("default-toggle2tamu");
  let toggle3tamu = document.getElementById("default-toggle3tamu");
  let toggle4tamu = document.getElementById("default-toggle4tamu");
  let lampu1tamu = document.getElementById("lampu1tamu");
  let lampu2tamu = document.getElementById("lampu2tamu");
  let lampu3tamu = document.getElementById("lampu3tamu");
  let lampu4tamu = document.getElementById("lampu4tamu");

  // fuction ruang keluarga
  if (toggle1kel.checked) {
    lampu1kel.src = "assets/images/on.gif";
  } else {
    lampu1kel.src = "assets/images/off.gif";
  }
  if (toggle2kel.checked) {
    lampu2kel.src = "assets/images/on.gif";
  } else {
    lampu2kel.src = "assets/images/off.gif";
  }
  if (toggle3kel.checked) {
    lampu3kel.src = "assets/images/on.gif";
  } else {
    lampu3kel.src = "assets/images/off.gif";
  }
  // function ruang makan
  if (toggle1makan.checked) {
    lampu1makan.src = "assets/images/on.gif";
  } else {
    lampu1makan.src = "assets/images/off.gif";
  }
  // function ruang tidur
  if (toggle1tidur.checked) {
    lampu1tidur.src = "assets/images/on.gif";
  } else {
    lampu1tidur.src = "assets/images/off.gif";
  }
  if (toggle2tidur.checked) {
    lampu2tidur.src = "assets/images/on.gif";
  } else {
    lampu2tidur.src = "assets/images/off.gif";
  }
  // function ruang tamu
  if (toggle1tamu.checked) {
    lampu1tamu.src = "assets/images/on.gif";
  } else {
    lampu1tamu.src = "assets/images/off.gif";
  }
  if (toggle2tamu.checked) {
    lampu2tamu.src = "assets/images/on.gif";
  } else {
    lampu2tamu.src = "assets/images/off.gif";
  }
  if (toggle3tamu.checked) {
    lampu3tamu.src = "assets/images/on.gif";
  } else {
    lampu3tamu.src = "assets/images/off.gif";
  }
  if (toggle4tamu.checked) {
    lampu4tamu.src = "assets/images/on.gif";
  } else {
    lampu4tamu.src = "assets/images/off.gif";
  }
}
