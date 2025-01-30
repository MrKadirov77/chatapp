const form = document.querySelector(".form__box");
const message =  document.querySelector(".message");
const messages =  document.querySelector(".messages");
const data =  new Date();

form.addEventListener("submit", chatApp);

function chatApp(e){
    e.preventDefault();
   if(message.value === ""){
    alert("Malumot kiriting !")
   }else{
    const item = document.createElement("div");
    item.classList.add("item");
    messages.appendChild(item);

    const messageTitle = document.createElement("h1");
    messageTitle.textContent = message.value;
    messageTitle.classList.add("messageTitle");
    item.appendChild(messageTitle);

    const timeteg = document.createElement("small");

    const messageHour = data.getHours();
    const messageMinute = data.getMinutes();
    const messageSecond = data.getSeconds();

    timeteg.classList = "timeteg";
    timeteg.textContent = `${messageHour} : ${messageMinute} : ${messageSecond}`;

    item.appendChild(timeteg);
    message.value = "";    
   }    
}