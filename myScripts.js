var current = 1;
show(current);

function changeSlide(n){
  show(current += n);
}

function show(n){
  var i;
  var y = document.getElementsByClassName('slide');
  if (n > y.length){
    current = 1;
  }
  if (n < 1){
    current = y.length;
  }
  for(i=0; i<y.length; i++){
    y[i].style.display = "none";
  }
  y[current-1].style.display = "block";
}
