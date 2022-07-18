var sum = 0;
for (var element of document.getElementsByTagName("p")) {
  sum += element.innerText.replace(/[\s\n]/i, "").length;
}
document.getElementById("charNum").innerHTML = sum;
