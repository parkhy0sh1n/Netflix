'use strict';

let faqList = document.querySelectorAll('.faq_list');
let faqListAns = document.querySelectorAll('.faq_list_answer');
let openStateIcon = document.getElementsByClassName('openstate_icon');
let openState = [0,0,0,0,0]; // List 오픈 상태 저장 배열 변수

function accOpen(clickNumber){
   faqList[clickNumber].onclick = function(){
      if (openState[clickNumber] == 0) {   
        for (let i=0; i<faqList.length ; i++) {
              faqListAns[i].style = "max-height:0px;";
              openStateIcon[i].style = "transform:rotate(0deg);";  
              openState[i] = 0;
         }
        faqListAns[clickNumber].style = "max-height:600px;";
        openStateIcon[clickNumber].style = "transform:rotate(45deg);"
        openState[clickNumber] = 1; // Click된 List의 오픈 상태를 열려 있는 것으로 저장 (업데이트)
        } else { 
           faqListAns[clickNumber].style = "max-height:0px;";
           openStateIcon[clickNumber].style = "transform:rotate(0deg);"
           openState[clickNumber] = 0; // Click된 List의 오픈 상태를 닫혀 있는 것으로 저장 (업데이트)
         }
   }
}
for(let i = 0; i < 5; i++){
   accOpen(i);
}

// Scroll Event Coding
let scroll = 0;
let per = 0;

window.addEventListener('scroll',function(){
   scroll = document.documentElement.scrollTop;
   per = Math.ceil(scroll / (document.body.scrollHeight - window.outerHeight) *100 );
   let featureTitle = document.querySelectorAll('.feature_title');
   let featureSubtitle = document.getElementsByClassName('feature_subtitle');   
   // console.log(scroll);
   // console.log(per);

   if(per > 7){
      featureTitle[0].style = "animation:fade_in_opacity 2s forwards";
      featureSubtitle[0].style = "animation:fade_in_opacity 2s forwards";
   }
   if(per > 24){
      featureTitle[1].style = "animation:fade_in_opacity 2s forwards";
      featureSubtitle[1].style = "animation:fade_in_opacity 2s forwards";
   }
   if(per > 40){
      featureTitle[2].style = "animation:fade_in_opacity 2s forwards";
      featureSubtitle[2].style = "animation:fade_in_opacity 2s forwards";
   }
});

// email_input
let emailForm = document.querySelector('.email_form');
let emailLabel = document.querySelector('.placelabel');
let emailIdValue = document.getElementById('email_id');
let emailAlert = document.querySelector('.id_alert');
let wrongAlert = document.querySelector('.wrong_alert');
let emailIdValueFaq = document.getElementById('faq_email_id');
let emailFormFaq = document.querySelector('.faq_email_form');
let emailLabelFaq = document.querySelector('.faq_placelabel');
let emailAlertFaq = document.querySelector('.faq_id_alert');
let wrongAlertFaq = document.querySelector('.faq_wrong_alert');
// email.addEventListener('click', emailStart);
   // 이벤트 발생 위치 ( 지금 내가 클릭한 곳! )
   // event.currentTarget = 이벤트 생성 위치( 이벤트 발생시키도록 내가 지정한 곳! )
emailForm.addEventListener('focusin', emailStart);
function emailStart(){
      emailLabel.style = "transform: translateY(50%); font-size:13px; font-weight:700";
}
emailForm.addEventListener('focusout', emailFinish);
function emailFinish(){
   if(emailIdValue.value == ""){
      emailLabel.style = "transform: translateY(140%); font-size:16px; font-weight:400";
      emailAlert.style = "display:block";
      wrongAlert.style = "display:none";
   }else{
      if(! emailIdValue.value.match('@')){
         emailLabel.style = "transform: translateY(140%); font-size:13px; font-weight:400";
         wrongAlert.style = "display:block";
         emailAlert.style = "display:none";
      }else{
         emailLabel.style = "transform: translateY(140%); font-size:13px; font-weight:700";
         wrongAlert.style = "display:none";
         emailAlert.style = "display:none";
      }
     emailLabel.style = "transform: translateY(50%); font-size:13px; font-weight:700";
   }
}
emailFormFaq.addEventListener('focusin', emailStartFaq);
function emailStartFaq(){
      emailLabelFaq.style = "transform: translateY(50%);  font-size:13px; font-weight:700";
}

emailFormFaq.addEventListener('focusout', emailFinishFaq);
function emailFinishFaq(){
   if(emailIdValueFaq.value == ""){
      emailLabelFaq.style = "transform: translateY(140%); font-size:16px; font-weight:400";
      emailAlertFaq.style = "display:block";
      wrongAlertFaq.style = "display:none";
   } else{
      if(! emailIdValueFaq.value.match('@')){
         emailLabelFaq.style = "transform: translateY(140%); font-size:13px; font-weight:400";
         wrongAlertFaq.style = "display:block";
         emailAlertFaq.style = "display:none";
      }else{
         emailLabelFaq.style = "transform: translateY(140%); font-size:13px; font-weight:700";
         wrongAlertFaq.style = "display:none";
         emailAlertFaq.style = "display:none";
      }
     emailLabelFaq.style = "transform: translateY(50%); font-size:13px; font-weight:700";
   }
}