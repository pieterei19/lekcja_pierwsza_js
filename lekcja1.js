imie = "mateusz";
nazwisko = Array('P','I','E','T','E','R');
odwrot = "";
wynik = "";
function imienazwisko (tekst = "") {
  i = 0
  wynik = " ";
  while(teksty[i] != undefined){
  wynik += tekst[i];
    i++;
  }
  return wynik;
}

console.log(imienazwisko(imie)+" "+imienazwisko(nazwisko));
