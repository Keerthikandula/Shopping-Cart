
let shop = document.getElementById("shop");

let shopItemsData = [
{
    id: "abc",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor,sit amet consectetur adipisicing ",
    img: "img-1.jpg"
},
{
    id: "def",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor,sit amet consectetur adipisicing ",
    img: "img-2.jpg"
},
{
    id: "ghi",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor,sit amet consectetur adipisicing ",
    img: "img-3.jpg"
},
{
    id: "jkl",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor,sit amet consectetur adipisicing ",
    img: "img-4.jpg"
},
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML= shopItemsData
        .map((x)=>{
            let {id, name, price, desc, img} = x;
     return `
      <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div> 
`;
})
.join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    

    
    console.log(basket);
};
let decrement = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
};
let update = () => {};