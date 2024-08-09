# Random OTP Generator Website

This project is a simple web application that generates a random OTP (One-Time Password) with a customizable length. It uses HTML, CSS, and JavaScript to achieve this functionality.

## Features

- Generates a random OTP when the "Generate OTP" button is clicked.
- Allows the user to specify the length of the OTP.
- Displays the generated OTP on the screen.

## File Structure

- `index.html`: The main HTML file containing the structure of the webpage.
- `style.css`: The CSS file that handles the styling of the webpage.
- `script.js`: The JavaScript file that contains the logic for generating the OTP.

## How to Use

1. Clone the repository or download the project files.
2. Open the `index.html` file in your web browser.
3. Enter the desired OTP length in the input field.
4. Click the "Generate OTP" button to generate a random OTP.
5. The generated OTP will be displayed on the screen.

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Otp generator Website</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Random Otp generator</h1>
        <h2 class="otp">0 0 0 0</h2>
        <div class="otpbtn">
            <button class="genotp">Generate Otp</button>
            <input class="otplen" type="number" placeholder="Enter Otp Length">
        </div>
    </div>
</body>
</html>

## CSS Code
*{
    margin: 0;padding: 0;box-sizing: border-box;
}
body{
    background-color: rgb(216, 203, 193);
    padding: 10px;
}
.caontainer{
    padding: 10px;
    margin-top: 3rem;
    height: 40vh;
    background-color: rgb(139, 243, 118);
    max-width: 450px;
    margin-inline: auto;
    text-align: center;
    border-radius: 10px;
}
h1{
    font-family: sans-serif;
}

.caontainer input,button{
    padding: 9px;
    font-size: 1rem;
    width: 100%;
    border-radius: 7px;
    border: none;
    outline: none;
    font-weight: 600;
    
   
}
.caontainer button{
    cursor: pointer;
}
h2{
    font-size: 2.8rem;
    margin-top: 2rem;color: rgb(0, 0, 0);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.otpbtn{
    margin-top: 2rem;
    max-width: 340px;
    display: flex;
    gap: 10px;
    margin-inline: auto;

}

##JAVASCRIPT CODE💫🔥
const otp= document.querySelector('.otp')
const genotp= document.querySelector('.genotp');
const otplen= document.querySelector('.otplen');


const getopt= function(length){
    let otp=''
    for(let i=0; i<length;i++){
       otp+= Math.floor(Math.random()*9);
    }
    return otp
}

genotp.addEventListener('click',()=>{
    if(otplen.value!=''){
       otp.innerHTML= getopt(+otplen.value) 
       genotp.innerHTML='Resend Otp'



    }



    
})

## #welcome to you for visit my github Profile
