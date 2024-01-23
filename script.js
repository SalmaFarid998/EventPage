$(".card-head").click((e)=>{
    $(".open").slideUp(900, ()=>{$(".open").removeClass("open"); $(".open").addClass("dis-none")})
    if($(e.target).next().css("display")=="none"){
        $(e.target).next().slideDown(1000, ()=>{$(e.target).next().toggleClass("open")})
    }
})

// Counter
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days").text( days + "d") 
  $("#hours").text(hours + "h")
  $("#minutes").text(minutes + "min")
  $("#seconds").text(seconds + "sec")
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    $("#counters").HTML("Event was on 5 Jan 2025, We're sorry you missed it!");
  }
}, 1000);

// Message
$("#message").keydown(()=>{
    if($("#message").val().length>100){
        let extra = $("#message").val().length-100
        $("#remaining").text(`You have an extra ${extra} characters`)
    }else{
        setTimeout(()=>{
            let remaining = 100-$("#message").val().length
            $("#remaining").text(`You still have ${remaining} characters available`)}
            ,200)
    }
})