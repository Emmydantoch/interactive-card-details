cardholdername = document.getElementById('cardholdername')
cardnumber = document.getElementById('cardnumber')
month = document.getElementById('month')
year = document.getElementById('year')
cvc = document.getElementById('cvcinput') 

// errors
cne1 = document.getElementById('cne1')
cne2 = document.getElementById('cne2')

cnue1 = document.getElementById('cnue1')
cnue2 = document.getElementById('cnue2')

cmon1 = document.getElementById('cmon1')
cmon2 = document.getElementById('cmon2')

cyear1 = document.getElementById('cyear1')
cyear2 = document.getElementById('cyear2')
cyear3 = document.getElementById('cyear3')

ccvc1 = document.getElementById('ccvc1')
ccvc2 = document.getElementById('ccvc2')
ccvc3 = document.getElementById('ccvc3')


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
            cmon2.style.display = 'block'     
            cmon1.style.display = 'none'    
        } else {
            month.style.borderColor = 'hsl(278, 94%, 30%)'
            month.style.outlineColor = 'hsl(278, 94%, 30%)'
            cmon1.style.display = 'none'
            cmon2.style.display = 'none'
        }
    } else {
        cmon1.style.display = 'block'
        cmon2.style.display = 'none'
    }
}

const yearValidation = () => {
    if (year.value){
        if(!/[0-9]/.test(year.value)) {
            year.style.borderColor = 'hsl(0, 100%, 66%)'
            year.style.outlineColor = 'hsl(0, 100%, 66%)'
            cyear2.style.display = 'block'     
            cyear1.style.display = 'none'    
        } else {
            year.style.borderColor = 'hsl(278, 94%, 30%)'
            year.style.outlineColor = 'hsl(278, 94%, 30%)'
            cyear1.style.display = 'none'
            cyear2.style.display = 'none'
        }
    } else {
        cyear1.style.display = 'block'
        cyear2.style.display = 'none'
    }
}


const cvcValidation = () => {
    if (cvc.value){
        if(!/[0-9]/.test(cvc.value)) {
            cvc.style.borderColor = 'hsl(0, 100%, 66%)'
            cvc.style.outlineColor = 'hsl(0, 100%, 66%)'
            ccvc2.style.display = 'block'     
            ccvc1.style.display = 'none'    
        } else {
            cvc.style.borderColor = 'hsl(278, 94%, 30%)'
            cvc.style.outlineColor = 'hsl(278, 94%, 30%)'
            ccvc1.style.display = 'none'
            ccvc2.style.display = 'none'
        }
    } else {
        ccvc1.style.display = 'block'
        ccvc2.style.display = 'none'
    }
}

cardholdername.addEventListener('input', cardholdernameValidation)
cardnumber.addEventListener('input', cardnumberValidation)
month.addEventListener('input', monthValidation)
year.addEventListener('input', yearValidation)
cvc.addEventListener('input', cvcValidation)