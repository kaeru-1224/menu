const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
//버튼을 통해서 필터를 진행해주면된다는 건 알겠는데,그걸 html에 적용하는 
//방법을 모르겟음🤔👉map을 통해서 리턴해주는 방식을 이용

const sectionCenter= document.querySelector(".section-center")
const allBtn= document.querySelector(".all")
const breakBtn= document.querySelector(".break")
const shakeBtn= document.querySelector(".shake")
const lunchBtn= document.querySelector(".lunch")

function arrayMenu(){
    let menu2 = menu.map(item=>{
return `<article class="menu-item"> 
    <img src=${item.img} alt="pancake" class="photo">
    <div class="item-info">
    <header class="name-price"> 
    <h4 class="menu-name">${item.title}</h4>    
    <h4 class="price">${item.price}</h4>W
    </header> 
    <p class="menu-info">${item.desc}</p>    
    </div>
    </article>`});
    menu2=menu2.join("");
    sectionCenter.innerHTML=menu2;}

function showMenu(){
    let showMenu =menu.filter(item => {return  item.category=="shakes"
    })
    //filter 해준게 array로 나오니까 그걸다시 맵해주면되는거지! 
    let result= showMenu.map(item=> {return `<article class="menu-item"> 
    <img src=${item.img} alt="pancake" class="photo">
    <div class="item-info">
    <header class="name-price"> 
    <h4 class="menu-name">${item.title}</h4>    
    <h4 class="price">${item.price}</h4>W
    </header> 
    <p class="menu-info">${item.desc}</p>    
    </div>
    </article>`}) 
    result=result.join("");
    sectionCenter.innerHTML=result;}



arrayMenu()
allBtn.addEventListener('click',arrayMenu)
breakBtn.addEventListener('click', showMenu)
shakeBtn.addEventListener('click', showMenu)
lunchBtn.addEventListener('click', showMenu)