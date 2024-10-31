cardholdername = document.getElementById('cardholdername')
cardnumber = document.getElementById('cardnumber')
month = document.getElementById('month')
year = document.getElementById('year')
CVV = document.getElementById('CVV')

//error
cne1 = document.getElementById('cne1')
cne2 = document.getElementById('cne2')

const cardholdernameValidation = () => {
if (cardholdername.value){
    if(!/[a-zA-Z]/.test(cardholdername.value)) {
        cardholdername.style.borderColor =  'hsl(0, 100%, 66%)'
        cardholdername.style.outlineColor =  'hsl(0, 100%, 66%)'
        cne2.style.display = 'block'
        cne1.style.display = 'none'
        
        
    } else {
        cne1.style.display = 'none'
        cne2.style.display = 'none'
    }
} else{
    cne1.style.display = 'block'
    cne2.style.display = 'none'

}

}
cardholdername.addEventListener('input', cardholdernameValidation)