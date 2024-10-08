// ********************************************************************************************************************
// ----------------------------- FOR METHOD # 01 (BY USING NODE LIST (BY QUERY SELECTOR) ----------------------------
// Remember: document.querySelectorAll provides a NODE LIST not an actual or real array higher order does not works on it
// ********************************************************************************************************************
let section = document.querySelector("section");
console.log(section);
const li = document.querySelectorAll("nav ul li");
const allImages = document.querySelectorAll("section > .myStyle");
console.log(allImages);

// -------------------------------------------------HEADER CODE -------------------------------------------------------
li.forEach((list, headerIndex) => {
  let searchImagesAccordingToNavBar = list.innerHTML;
  console.log(searchImagesAccordingToNavBar, headerIndex);
  list.addEventListener("click", () => {
console.log(headerIndex);
// ------------------------------------------------ HIDING ALL IMAGES ------------------------------------------------
// Initillay har NavLink ky element par click hony par my tamam images ko hide kar dn ga siwaye bss uss image ky jis ka
// headerIndex match kar gy ga.
// Uss ki wjah yah hy ky JS DOM sy khud elements ko remove nahe karta to my jab bhe navbar ky kisi element
// ko access karo ga to navbar par kisi bhe element ko click karty hi mujhy har navBar ky element ka headerIndex mily ga
// for example: All ka 0 index, Animal: 1 index etc.
// Ab my ny My phely hi section ky andar mojood tamam div ky andar wali images ko get kar liya hy (allImages) ky variable
// ky andar. allImages my save karwa diya tha uss ky result my mujhy 1 NODE LIST[] mil rahe the or uss node list ky
// andar tamam images hon gi.
// My NODE LIST[] par forEach LOOP chalao ga or uss ky result my mujhy images milain gy tamam div ki ham un ko
// display: none kar dn ga har initial click par. Uss sy tamam NAVBAR ky elements hide ho jayen jab bhe ham kisi aik
// navBar ki value ko access na karen means that (All par han - yah phr Animal par han  yah phr Animal - Nature) par
// jayen to sirf unhi images ko show karwayen gy jis ka headerIndex match kar gy ga baki sab ko display: none kar dy ga.
// Yaad rahy jab bhe headerIndex match kar gy ga to ham ussi headerIndex sy realated HTMLElement ko target kar ky uss ki
// style ko display: block kar dein gy. Kuch iss trh ky jab bhe headerIndex match kar gy ga jab user uss navbar ky elemnt
// par click kary ga to ham ussi headerIndex sy related waly element ko ham querySelector sy get karein gy or phr uss
// ky style ko override kar dein gy display: block.
    allImages.forEach((element) => {
      console.log(element);
      element.style.display = "none";
    });
    // ----------------------------------- DISPLAYING IMAGES ACCORDING TO THE NAVBAR INDEX ---------------------------------
    if (headerIndex === 0) {
      allImages.forEach((element) => {
        console.log(element);
        element.style.display = "block";

      });
    } else if (headerIndex === 1) {
      let animals = document.querySelector(".all-images > .animal-images");
      console.log(animals, section);
      animals.style.display = "flex";
    //   animals.style.display = "bloc";

    } else if (headerIndex === 2) {
      let nature = document.querySelector(".all-images > .nature-images");
      console.log({ nature });
      nature.style.display = "flex";
    } else if (headerIndex === 3) {
      let birds = document.querySelector(".all-images > .bird-images");
      console.log({ birds });
      birds.style.display = "flex";
    }
  });
});


// ********************************************************************************************************************
// Remember: document.getElementsByClassName provides a HTML COLLECTION we convert the it into real ARRAY by Array.from()
//  Method and then we can use every array method on it.
// ------------------ FOR METHOD # 02 (BY USING MAP ON HTML COLLECTION BY CONVERTING IT INTO AN ARRAY) -----------------
// ********************************************************************************************************************
// const all = document.getElementsByClassName("myStyle");
// console.log(all);
// let newAll = Array.from(all);

// // -------------------------------------------------HEADER CODE -------------------------------------------------------
// li.forEach((list, headerIndex) => {
//   let searchImagesAccordingToNavBar = list.innerHTML;
//   console.log(searchImagesAccordingToNavBar, headerIndex);
//   list.addEventListener("click", () => {
//     console.log(headerIndex);
// // ------------------------------------------------ HIDING ALL IMAGES ------------------------------------------------
//     newAll.map((div) => {
//       div.style.display = "none";
//     });
// // ----------------------------------- DISPLAYING IMAGES ACCORDING TO THE NAVBAR INDEX ---------------------------------

//     if (headerIndex === 0) {
//       newAll.map((div) => {
//         div.style.display = "block";
//       });
//     }
//     else if(headerIndex === 1){
//         let animals = document.querySelector(".all-images > .animal-images");
//         animals.style.display = "flex"  
//     }
//     else if(headerIndex === 2){
//         let nature = document.querySelector(".all-images > .nature-images");
//         nature.style.display = "flex"  
//     }
    
//     else if(headerIndex === 3){
//         let birds = document.querySelector(".all-images > .bird-images");
//         birds.style.display = "flex"  
//     }

//   });
// });
