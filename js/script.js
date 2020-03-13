window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

let rec=new SpeechRecognition();

rec.interimResults=true;

let templete=document.getElementById("templete");

let p=document.createElement('p');

templete.appendChild(p);

rec.addEventListener('result',(e)=>{
    let transcript=[...e.results].map(result=>result[0]).map(result => result.transcript).join("");

    
    if(e.results[0].isFinal){
    p=document.createElement('p');
    templete=document.getElementById('templete');
    templete.appendChild(p).innerHTML=transcript;
    }
})

rec.addEventListener("end",rec.start);

rec.start();
 