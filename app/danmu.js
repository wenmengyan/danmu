var timer = null;
var current = [];
var newarr = [];
var flag = 0;
var num = new Array();
var words = ["2333", "66666", "前方高能", "科普一下", "双击666", "投币！"];
function $(id) {
  return document.getElementById(id);
}
for (var i = 1; i < $("dm_screen").offsetHeight / 20 - 1; i++) {
  num.splice(i, 0, i);
}

window.onload = function () {

  clearInterval(timer);
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      var word = words[random(0, words.length - 1)];
      create(word);
    }, 100 * random(10, 100))

  }
  timer = setInterval(move, 20);
}

function create(w) {
  var node = document.createElement("div");
  node.innerHTML = w;
  var t = random(0, num.length - 1);
  node.style.top = num[t] * 20 + "px";
  Delete(num[t]);
  node.style.left = "940px";
  node.style.color = "#ff0080";
  $("dm_screen").appendChild(node);
  flag++;
}

function move() {
  var arr = $("dm_screen").getElementsByTagName("div");

  for (var i = 0; i < arr.length; i++) {
    newarr.push(arr[i].offsetLeft);
    arr[i].style.left = newarr[i] + "px";
    newarr[i] = newarr[i] - 2;
    if (newarr[i] < 0) {
      if (currentTest(arr[i].innerHTML) && flag != 0) {
        words.push(arr[i].innerHTML);
        $("dm_screen").removeChild(arr[i]);
        newarr.splice(i, 1);
        flag--;
      } else {
        newarr[i] = 940;
        arr[i].innerHTML = words[random(0, words.length - 1)];
        num.splice(num.length, 0, parseInt(arr[i].style.top) / 20);


        var t = random(0, num.length);
        arr[i].style.top = num[t] * 20 + "px";
        Delete(num[t]);
        arr[i].style.left = "940px";
        arr[i].style.color = "#ff0080";
      }
    }
  }
}

$("s_sub").onclick = function () {
  create($("s_txt").value);
  current[current.length] = $("s_txt").value;
  $("s_txt").value = "";
}
function Delete(m) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] == m) {
      num.splice(i, 1);
    }
  }
}

function currentTest(m) {
  var fl = false;
  for (var i = 0; i < current.length; i++) {
    if (current[i] == m) {
      current.splice(i, 1);
      fl = true;
    }
  }
  return fl;
}

function random(m, n) {
  return Math.round(Math.random() * (n - m)) + m;
}
$("s_del").click(function () {
  for (var i = 0; i < num.length; i++) {
    //console.log(m)
    Delete(num[i])
  }
});