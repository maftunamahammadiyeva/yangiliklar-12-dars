const elList = document.querySelector(".news__list");


for (let post of daryoPostlari){
//creat element
const itemList =document.createElement("li");
const image =document.createElement("img");
const cardBody =document.createElement("div");
const cardTitle =document.createElement("h5");
const cardCategorie =document.createElement("p");
const cardYears =document.createElement("p");
const cardLink =document.createElement("a");
//setattribute
itemList.setAttribute("class", "card mb-2");
itemList.style.width ="18rem";
image.setAttribute("class", "card-img-top");
image.setAttribute("src", post.photo);
cardBody.setAttribute("class","card-body");
cardTitle.setAttribute("class","card-title");
cardTitle.textContent = post.title;
cardCategorie.setAttribute("class", "card-text");
cardCategorie.textContent =post.categories;
cardYears.setAttribute("class","card-text");
cardYears.textContent = post.date
cardLink.setAttribute("class","btn btn-primary");
cardLink.textContent= "Ko'proq ma'lumot";
cardLink.setAttribute("href", post.link)

//append
elList.appendChild(itemList);
itemList.appendChild(image);
itemList.appendChild(cardBody);
cardBody.appendChild(cardTitle);
cardBody.appendChild(cardCategorie);
cardBody.appendChild(cardYears);
cardBody.appendChild(cardLink);
}