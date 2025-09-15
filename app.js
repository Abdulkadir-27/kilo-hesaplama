let dogumyılı = prompt("doğum yılınızı giriniz:");
let şuankiyıl = prompt("şu anki yılı giriniz:");
if (dogumyılı - şuankiyıl ) {
    alert("yaşınız:" + (dogumyılı - şuankiyıl));
}
//! kilo hesaplama
let kilo = Number (prompt("kilonuzu giriniz:"));
let boy = Number (prompt("boyunuzu giriniz:"));
let sonuc = kilo / (boy*2);
if (sonuc < 18.5) {
    alert("zayıf");
} else if (sonuc < 24.9) {
    alert("normal");
} else {
    alert("şişman");
}
