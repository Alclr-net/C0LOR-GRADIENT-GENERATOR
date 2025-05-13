// This function generates a random hex color code
let firstBtn = document.getElementById("myButton01");
let secondBtn = document.getElementById("myButton101");
let myBoxcontent = document. querySelector(".box");
firstBtn.addEventListener("click", ()=>{
    let hexValue = "abcdef0123456789";
    let myHexcode = `#`;
    for(let i = 0; i < 6 ; i++) {
        let idxOfHex = Math.floor(Math.random() *hexValue.length); 
         let newHex = hexValue[idxOfHex];
            myHexcode = myHexcode + newHex;};
            firstBtn.textContent = myHexcode;
            let myGradient = myBoxcontent.textContent = `linear-gradient(to right, ${firstBtn.innerText}, ${secondBtn.innerText})`;
          document.body.style.background = myGradient;
          });
secondBtn.addEventListener("click", ()=>{
  let hexValue = "abcdef0123456789";
    let myHexcode = `#`;
    for(let i = 0; i < 6 ; i++) {
        let idxOfHex = Math.floor(Math.random() *hexValue.length); 
         let newHex = hexValue[idxOfHex];
            myHexcode = myHexcode + newHex;};
            secondBtn.textContent = myHexcode;
            let myGradient = myBoxcontent.textContent = `linear-gradient(to right, ${firstBtn.innerText}, ${secondBtn.innerText})`;
            document.body.style.background = myGradient;});
            myBoxcontent.addEventListener("click", ()=>{
              navigator.clipboard.writeText(myBoxcontent.textContent);
              alert("Gradient Copied to Clipboard");});
              
  // let myButton = document.querySelectorAll(".btn");
  // let myBoxcontent = document. querySelector(".box");
  // myButton.forEach((button)=>{
  //   button.addEventListener("click", ()=>{
  //   let hexValue = "abcdef0123456789";
  //   let myHexcode = `#`;
  //   for(let i = 0; i < 6 ; i++) {
  //       let idxOfHex = Math.floor(Math.random() *hexValue.length); 
  //        let newHex = hexValue[idxOfHex];
  //           myHexcode = myHexcode + newHex;};
  //           button.textContent = myHexcode;
  //           let firstBtn = document.getElementById("myButton01").innerText = myHexcode;
  //           let secondBtn = document.getElementById("myButton101").innerText = myHexcode;
  //           let myGradient = myBoxcontent.textContent = `linear-gradient(to right, ${firstBtn}, ${secondBtn})`;
  //           document.body.style.background = myGradient;
  //   });
  
  // });

