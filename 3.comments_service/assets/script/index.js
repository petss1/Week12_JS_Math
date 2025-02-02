const correctName=(input)=>{
    const first=input.trim();
    const rightText=first.charAt(0).toUpperCase()+first.slice(1).toLowerCase();
    const second=rightText.replace(/viagra|xxx/gi,"***");
    return second;
}
const otherName=correctName("иВаН");

// const comment1 = correctName('buy ViAgRA now'); //результат buy *** now
// const comment2 = correctName('free xxx'); //результат free ***
// const comment3 = correctName("innocent rabbit") ; //результат innocent rabbit

function answerClick() {
    const userName=document.getElementById("userName").value;
    const userAvatar=document.getElementById("userAvatar").value;
    const userComment=document.querySelector(".user_comment").value;

    const fixedName=correctName(userName);
    const fixedComment=correctName(userComment);


    const messageDiv=document.createElement("div");
    messageDiv.classList.add("message");
    

    const avatarImg=document.createElement("img");
    avatarImg.src=userAvatar; 
    avatarImg.alt="Avatar";
    avatarImg.style.width="100px";
    avatarImg.style.height="100px";
    messageDiv.appendChild(avatarImg);

    messageDiv.innerHTML+=`<b>${fixedName}</b>: ${fixedComment}`;
    document.getElementById("chatContainer").appendChild(messageDiv);
    
    document.getElementById("userName").value="";
    document.getElementById("userAvatar").value="";
    document.querySelector(".user_comment").value="";
}

document.getElementById("submitСomment").addEventListener("click",answerClick);
