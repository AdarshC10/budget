var balanceamount = parseFloat(localStorage.getItem('Balance')) || 0;

function addData(){
    let amount=parseFloat(gained.value);
    // const currenttime=new Date().toLocaleString();
    gainl=` Rs.${amount}`;
    list_gain.innerHTML=gainl;

    balanceamount+=amount;
    gained.value='';
    localStorage.setItem('Balance',balanceamount);
    balance();

}


function expData(){
    let amount= lost.value;
    // const currenttime=new Date().toLocaleString();
    lostl=` Rs.${amount}`;
    list_lost.innerHTML=lostl;

    balanceamount-=amount;
    lost.value='';
    localStorage.setItem('Balance',balanceamount);
    balance()

}


function balance(){
    let display=parseFloat(localStorage.getItem('Balance'))
    balan.innerHTML=display;
    
  
    
}

window.onload= function(){
    balance();
}


function logout(){
    // window.location='./index.html';
    const response = confirm("Are you sure you want to Logout?");
    if(response){
        
        window.location.href="index.html";
    }
}
// function clrFn(){
//     window.localStorage.clear('balan.value');
// }

