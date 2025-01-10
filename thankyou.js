cardholdername = document.getElementById('cardholdername')
cardnumber = document.getElementById('cardnumber')
month = document.getElementById('month')
year = document.getElementById('year')
cvc = document.getElementById('cvcinput') 

cardholdername.innerHTML(Ademola)
cardnumber.innerHTML(9999777755553333)
cvc.innerHTML(345)

// reloading from our localStorage to card
cardholdername = document.getElementById('cardholdername')
cardnumber = document.getElementById('cardnumber')
cvc = document.getElementById('cvc') 
expires = document.getElementById('expires')

cardholdername.innerHTML = localStorage.getItem('cardholdername')
cardnumber.innerHTML = localStorage.getItem('cardnumber')
cvc.innerHTML = localStorage.getItem('cvc')
expires.innerHTML = localStorage.getItem('momth') + '/' + localStorage.getItem('year')
