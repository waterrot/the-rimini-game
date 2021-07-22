//code for the give us a beer modal
//function to show the price of 1 beer and change paypal link
$(".btn1beer").on("click", function () {
    $(".amountbeer").text("2 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/2";
});

//function to show the price of 6 beers and change paypal link
$(".btn6beer").on("click", function () {
    $(".amountbeer").text("5 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/5";
});

//function to show the price of 24 beers and change paypal link
$(".btn24beer").on("click", function () {
    $(".amountbeer").text("10 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/10";
});
