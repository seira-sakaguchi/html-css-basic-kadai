const getButton = document.getElementById("btn");

getButton.addEventListener("click",()=>{
  setTimeout(()=>{
    const getText = document.getElementById("text");
    getText.textContent="ボタンをクリックしました";
  },2000);
});

