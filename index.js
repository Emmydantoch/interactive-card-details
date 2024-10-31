cardholdername = document.getElementById('cardholdername')
cardnumber = document.getElementById('cardnumber')
month = document.getElementById('month')
year = document.getElementById('year')
cvc = document.getElementById('cvcInput') 

// errors
cne1 = document.getElementById('cne1')
cne2 = document.getElementById('cne2')
cnue1 = document.getElementById('cnue1')
cnue2 = document.getElementById('cnue2')

const cardholdernameValidation = () => {
    if (cardholdername.value){
        if(!/[a-zA-Z]/.test(cardholdername.value)) {
            cardholdername.style.borderColor = 'hsl(0, 100%, 66%)'
            cardholdername.style.outlineColor = 'hsl(0, 100%, 66%)'
            cne2.style.display = 'block'     
            cne1.style.display = 'none'    
        } else {
            cardholdername.style.borderColor = 'hsl(278, 94%, 30%)'
            cardholdername.style.outlineColor = 'hsl(278, 94%, 30%)'
            cne1.style.display = 'none'
            cne2.style.display = 'none'
        }
    } else {
        cne1.style.display = 'block'
        cne2.style.display = 'none'
    }
}

const cardnumberValidation = () => {
    if (cardnumber.value){
        if(!/[0-9]/.test(cardnumber.value)) {
            cardnumber.style.borderColor = 'hsl(0, 100%, 66%)'
            cardnumber.style.outlineColor = 'hsl(0, 100%, 66%)'
            cnue2.style.display = 'block'     
            cnue1.style.display = 'none'    
        } else {
            cardnumber.style.borderColor = 'hsl(278, 94%, 30%)'
            cardnumber.style.outlineColor = 'hsl(278, 94%, 30%)'
            cnue1.style.display = 'none'
            cnue2.style.display = 'none'
        }
    } else {
        cnue1.style.display = 'block'
        cnue2.style.display = 'none'
    }
}

const monthValidation = () => {
    if (month.value){
        if(!/[0-9]/.test(month.value)) {
            month.style.borderColor = 'hsl(0, 100%, 66%)'
            month.style.outlineColor = 'hsl(0, 100%, 66%)'
            cnue2.style.display = 'block'     
            cnue1.style.display = 'none'    
        } else {
            month.style.borderColor = 'hsl(278, 94%, 30%)'
            month.style.outlineColor = 'hsl(278, 94%, 30%)'
            cnue1.style.display = 'none'
            cnue2.style.display = 'none'
        }
    } else {
        cnue1.style.display = 'block'
        cnue2.style.display = 'none'
    }
}

const yearValidation = () => {
    if (year.value){
        if(!/[0-9]/.test(year.value)) {
            year.style.borderColor = 'hsl(0, 100%, 66%)'
            year.style.outlineColor = 'hsl(0, 100%, 66%)'
            cnue2.style.display = 'block'     
            cnue1.style.display = 'none'    
        } else {
            year.style.borderColor = 'hsl(278, 94%, 30%)'
            year.style.outlineColor = 'hsl(278, 94%, 30%)'
            cnue1.style.display = 'none'
            cnue2.style.display = 'none'
        }
    } else {
        cnue1.style.display = 'block'
        cnue2.style.display = 'none'
    }
}

const cvcValidation = () => {
    if (cvc.value){
        if(!/[0-9]/.test(cvc.value)) {
            cvc.style.borderColor = 'hsl(0, 100%, 66%)'
            cvc.style.outlineColor = 'hsl(0, 100%, 66%)'
            cnue2.style.display = 'block'     
            cnue1.style.display = 'none'    
        } else {
            cvc.style.borderColor = 'hsl(278, 94%, 30%)'
            cvc.style.outlineColor = 'hsl(278, 94%, 30%)'
            cnue1.style.display = 'none'
            cnue2.style.display = 'none'
        }
    } else {
        cnue1.style.display = 'block'
        cnue2.style.display = 'none'
    }
}

cardholdername.addEventListener('input', cardholdernameValidation)
cardnumber.addEventListener('input', cardnumberValidation)
month.addEventListener('input', monthValidation)
year.addEventListener('input', yearValidation)
cvc.addEventListener('input', cvcValidation)






// cardholdername = document.getElementById('cardholdername')
// cardnumber = document.getElementById('cardnumber')
// month = document.getElementById('month')
// year = document.getElementById('year')
// CVV = document.getElementById('CVV')

// //error
// cne1 = document.getElementById('cne1')
// cne2 = document.getElementById('cne2')

// const cardholdernameValidation = () => {
// if (cardholdername.value){
//     if(!/[a-zA-Z]/.test(cardholdername.value)) {
//         cardholdername.style.borderColor =  'hsl(0, 100%, 66%)'
//         cardholdername.style.outlineColor =  'hsl(0, 100%, 66%)'
//         cne2.style.display = 'block'
//         cne1.style.display = 'none'
        
        
//     } else {
//         cne1.style.display = 'none'
//         cne2.style.display = 'none'
//     }
// } else{
//     cne1.style.display = 'block'
//     cne2.style.display = 'none'

// }

// }
// cardholdername.addEventListener('input', cardholdernameValidation)