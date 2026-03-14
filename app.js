// Scroll to booking section

function scrollToBooking(){

document.getElementById("booking").scrollIntoView({

behavior:"smooth"

})

}



// Booking Form

document
.getElementById("bookingForm")
.addEventListener("submit",function(e){

e.preventDefault()



let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let service = document.getElementById("service").value
let date = document.getElementById("date").value
let time = document.getElementById("time").value



if(service==="Select Service"){

alert("Please select a service")

return

}



let message =

"New Appointment Booking%0A%0A" +

"Name: " + name + "%0A" +

"Phone: " + phone + "%0A" +

"Service: " + service + "%0A" +

"Date: " + date + "%0A" +

"Time: " + time



let whatsapp =

"https://wa.me/917087806377?text=" + message



window.open(whatsapp)



alert("Redirecting to WhatsApp for booking confirmation")



})
