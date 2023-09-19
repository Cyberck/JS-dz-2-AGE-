 

var age = +prompt('Vvedite svoy vozrost v sifrah!', '');

if (age > 0 && age <= 18) {
  alert('Vi eshe molodi!');
}else if (age > 18 && age <= 50 ) {
  alert('Vam nujno rabotat!');
}else if (age > 50 && age <= 59) {
  alert('Vam skoro na pensiyu!');
}else if (age > 59 && age <= 150){
  alert('Vi pensioner');
}else {
  alert('Chto-to ne tak!');
}









