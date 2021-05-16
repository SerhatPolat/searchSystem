function searchFunc() {
  var input = document.getElementById("searchBar");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("nameList");
  var li = ul.getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
