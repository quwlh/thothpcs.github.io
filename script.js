function SendMail() {
  var params = {
    from_name : document.getElementById("name").value, 
    Email : document.getElementById("email").value, 
    Phone : document.getElementById("phone").value,
    Topic : document.getElementById("Topics").value,  
    Order : document.getElementById("message").value, 
  }
  emailjs.send("service_wy0202i", "template_59aooor", params).then(function (res) {
    alert("Success! " + res.status);
  })
}