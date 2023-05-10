<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kullanıcı adı ve şifreleri kontrol etmek için bir dizi oluşturun
    $users = array(
        array("username" => "g221210031@sakarya.edu.tr", "password" => "g221210031"),
        // Diğer kullanıcı adı ve şifre kombinasyonlarını buraya ekleyebilirsiniz
    );

    // Formdan gönderilen kullanıcı adı ve şifreyi alın
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifre kontrolü
    $loggedIn = false;
    foreach ($users as $user) {
        if ($username === $user['username'] && $password === $user['password']) {
            $loggedIn = true;
            break;
        }
    }

    // Kullanıcı adı ve şifre doğrulama işlemi
    if ($loggedIn) {
        echo "Hoşgeldiniz " . $username . "! Login işlemi başarılı.";
        header("Location: http://localhost/web%20programlama/lobi/index.html");
    } else {
        header("Location: login.html");
        exit();
    }
}
?>