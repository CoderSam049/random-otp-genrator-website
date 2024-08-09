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