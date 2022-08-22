// player selected ////


const cardArry=[];

function displayPlayer(selectedPlayer){

const tableBody=document.getElementById('card-player');
tableBody.innerHTML='';


for(let i = 0 ; i<selectedPlayer.length; i++ ){
   
    

    const name= cardArry[i].playerName;
   
  const tr=document.createElement("tr");
  tr.innerHTML= `<th>${i+1}</th>
  <td>${name}</td>
  `
  
  tableBody.appendChild(tr)

 
}
 

}



function addSelectBtn(element){

    // Alear Msg section///
    if(cardArry.length===5 ){
        alert('you can not buy more then 5 players')
        return ;
     }

   const playerName=element.parentNode.parentNode.children[0].innerText;
   
  


   const playerObj={
    playerName:playerName

   }
    cardArry.push(playerObj)

    // selected section Add///
    document.getElementById('total-player').innerText=cardArry.length;

    displayPlayer(cardArry);

  
}




// player cost and  total///
document.getElementById('calculate-btn').addEventListener('click',function(){
    const playerField=document.getElementById('player-field');
    const playerFieldSting=playerField.value ;
    const perPlayer=parseInt(playerFieldSting);
  
    playerField.value='';
    const totalSelectedPlayer=document.getElementById('total-player');
    const totalSelectedSting=totalSelectedPlayer.innerText;
    const totalSelected= parseInt(totalSelectedSting)
   

 const playerExpTotal=document.getElementById('player-exp');
 const playerExpSting=playerExpTotal.innerText;
 const playerExp=parseInt(playerExpSting);

 const playerCost= perPlayer*totalSelected;

 playerExpTotal.innerText=playerCost


})
 
function getTextElementById(elementId){
    const playerExpTotal=document.getElementById(elementId);
    const playerExpSting=playerExpTotal.innerText;
    const playerExp=parseInt(playerExpSting);
    return playerExp;
}

// calculate all total//
document.getElementById('calculate-totale').addEventListener('click',function(){
    const mangerCostTotal=document.getElementById('manager-field');
    const managerCostSting=mangerCostTotal.value;
    const managerCost=parseInt(managerCostSting);
    // -----------/
    mangerCostTotal.value='';
    // ---------/

    const coachCostTotal=document.getElementById('coach-field');
    const coachCostTotalSting=coachCostTotal.value;
    const coachCost=parseInt(coachCostTotalSting);
    // -------//
    coachCostTotal.value="";
    // -------//
    const managerCoachTotal=managerCost+coachCost;
     
    const currentPlyerCost=getTextElementById('player-exp')

    const total=managerCoachTotal+currentPlyerCost

// Total calculated field////
    const inTotalCalculat=document.getElementById('total-feild');
    const inTotalSting=inTotalCalculat.innerText;
    const inTotal=parseInt(inTotalSting);
    
   inTotalCalculat.innerText=total;
   


})

