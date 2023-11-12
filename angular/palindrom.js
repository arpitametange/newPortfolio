function isPalindrome(inputStr) {
    let cleanedt=inputStr.replace(/\s/g,'').toLowerCase()
    return cleanedt===cleanedt.split('').reverse().join('')
    
    
    }
    if(isPalindrome('mamdj')){
        console.log('palindrom');
    }
    else{
        console.log('not palindrom');
    }