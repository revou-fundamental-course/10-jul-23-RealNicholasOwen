function calculateBMI() {
    var berat = document.getElementById("berat").value;
    var tinggi = document.getElementById("tinggi").value;
    var bmi = berat / ((tinggi/100)**2);

    // ambil semua elemen yg mau diganti (.bmi)
    var elements = document.getElementsByClassName("bmi");
    // ganti semua isi elemen dengan nilai bmi
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = bmi;
    }

    //hide page awal lalu tampilkan page content berdasarkan hasil BMI dengan memberi atau menghilangkan class "hidden" yang membuat elemen hilang
    document.getElementById("initial-page").classList.toggle("hidden");
    if (bmi < 18.5) {
        document.getElementById("berat-kurang").classList.toggle("hidden");
        document.getElementById("footer-underweight").classList.toggle("hidden");
    } else if (bmi < 25) {
        document.getElementById("berat-normal").classList.toggle("hidden");
        document.getElementById("footer-overweight").classList.toggle("hidden");
    } else if (bmi < 30) {
        document.getElementById("berat-lebih").classList.toggle("hidden");
        document.getElementById("footer-overweight").classList.toggle("hidden");
    } else {
        document.getElementById("berat-ob").classList.toggle("hidden");
        document.getElementById("footer-overweight").classList.toggle("hidden");
       }
}
