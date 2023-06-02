

function registerFn(){
   
    

    userDetails={
        
        uname: reg_name.value,
        u_email:reg_email.value, 
        pass:reg_pass.value
    }
    if(userDetails.u_email in localStorage){
        alert('account already presented');
        
    }
    else{
        localStorage.setItem(userDetails.u_email,JSON.stringify(userDetails));
        alert('account registered')
        window.location.href="index.html";

    }
}
function login(){

  u_email= lg_email.value;
  pass= lg_pass.value;



    if(u_email in localStorage){
        userDetails=JSON.parse(localStorage.getItem(u_email));

        if(pass==userDetails.pass){
            alert('login successfully')
            window.location.href="budget.html";

        }
        else{
            alert('incorrect password');
        }
    }
    else{
        alert('invalid account number')
    }
    // window.location='./home.html'

}


