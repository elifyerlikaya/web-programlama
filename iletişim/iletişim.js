document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    // Formdaki değerleri al
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Form verilerini kullanarak işlemleri yapabilirsiniz
    // Örneğin, verileri bir API'ye gönderebilir veya başka bir işlem yapabilirsiniz

    // Formu sıfırla
    document.getElementById("contact-form").reset();

    // Kullanıcıya bir mesaj göster
    alert("Mesajınız gönderildi! Teşekkür ederiz.");
});
