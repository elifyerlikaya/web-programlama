<?php
$ad = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(isset($_POST['site'])){
    $secilenSekiller = $_POST['site'];
    foreach($secilenSekiller as $sekil){
      echo $sekil . "<br> <br>";
    }
}
if(isset($_POST['cinsiyet'])){
    $secilenSekiller = $_POST['cinsiyet'];
    foreach($secilenSekiller as $cinsiyet){
      echo $cinsiyet . "<br><br>";
    }
}

if(isset($_POST['öğrenim'])){
    $secilenRenk = $_POST['öğrenim'];
    echo "Öğrenim durumu: " . $secilenRenk ."<br><br>"; 
  }
if(isset($_FILES['dosya'])){
    $dosyaAdi = $_FILES['dosya']['name'];
    $dosyaGeçiciYolu = $_FILES['dosya']['tmp_name'];
    $dosyaBoyutu = $_FILES['dosya']['size'];
  
    // Dosya ile ilgili işlemleri burada gerçekleştirin
    // Örneğin, dosyayı kaydedebilirsiniz
  
    // Örnek olarak, dosya bilgilerini ekrana yazdıralım
    echo "Dosya Adı: " . $dosyaAdi . "<br>";
    echo "Geçici Yol: " . $dosyaGeçiciYolu . "<br>";
    echo "Dosya Boyutu: " . $dosyaBoyutu . " bytes <br>";
  }

echo "Ad: " . $ad . "<br>";
echo "E-posta: " . $email. "<br>";
echo "Mesaj: " . $message . "<br>";
?>


