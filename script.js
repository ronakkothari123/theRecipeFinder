var foodNameInput = document.querySelector("#foodName");
var itemHeader = document.querySelector("#listHeader");
var itemHeader2 = document.querySelector("#glistHeader");
var foodNameValue;
var ratingVar;

var pavBhaji = {
    name:"Pav Bhaji",
    items:["Butter", "Tomato", "Peas", "Bell Pepper", "Capsicum", "Red Chilli Powder", "Turmeric", "Fenugreek Leaf", "Methi", "Coriander", "Lemon", "Onion", "Bread", "Ginger", "Garlic", "Potato"],
    rating:0
}

var gobiManchurian = {
    name:"Cauliflower Manchurian",
    items:["Cauliflower", "Oil", "Onion", "Vinegar", "Pepper", "Garlic", "Flour", "Ginger", "Red Chilli Powder"],
    rating:0
}

var potatoVada = {
    name:"Potato Vada",
    items:["Cumin", "Cumin Seeds", "Jeera", "Potato", "Garlic", "Turmeric", "Curry Leaf", "Chilli", "Lemon", "Coriander", "Besan", "Gram Flour", "Red Chilli Powder", "Baking Soda", "Oil"]
}

var pasta = {
    name:"Pasta",
    items:["Pasta", "Pizza Sauce", "Tomato Sauce"]
}

var itemArray = ["Onion", "Cumin Seeds", "Jeera", "Cumin", "Ketchup", "Tomato Sauce", "Gram Flour", "Besan", "Pizza Sauce", "Rice", "Vinegar", "Egg", "Turmeric", "Chickpea", "Baking Soda", "Red Chilli Powder", "Kidney Bean", "Flour", "Lemongrass", "Tofu", "Methi", "Coriander", "Vegetable Oil", "Bread", "Oil", "Bok Choy", "Butter", "Almond", "Peanut", "Peas", "Beans", "Tomato", "Carrot", "Cucumber", "Eggplant", "Spinach", "Artichoke", "Asparagus", "Beet", "Beetroot", "Broccoli", "Cabbage", "Cauliflower", "Celery", "Corn", "Ginger Root", "Kale", "Lettuce", "Mushroom", "Okra", "Bell Pepper", "Pepper", "Capsicum", "Potato", "Pumpkin", "Radish", "Pasta", "Squash", "Sweet Potato", "Turnip", "Watercress", "Zucchini", "Yam", "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blackcurrant", "Blueberry", "Cantaloupe", "Cherry", "Coconut", "Date", "Durian", "Fig", "Gooseberry", "Grapefruit", "Guava", "Grape", "Plum", "Lemon", "Lime", "Mandarin", "Orange", "Peach", "Pear", "Pineapple", "Nectarine", "Passion Fruit", "Pomegranate", "Raspberry", "Strawberry", "Watermelong", "Tangerine", "Mango", "Curry Leaf", "Black Eyed Peas", "Black Eyed Peas", "Brown Chickpea", "Kala Chana", "Chana Dal", "Split Chickpea", "Mung Bean", "Moong Dal", "Toor Dal", "Rajma", "Masoor Dal", "Urad Dal", "Drumstick", "Fenugreek Leaf", "Green Bean", "Garlic", "Ginger", "Chilli", "Paneer"];

var completeDishList = [];

var foodArray = [];

var sortedDishList = [];
var sortedDishListRating = [];

function initializeList(){

    completeDishList = []
    sortedDishList = []
    sortedDishListRating = []

    completeDishList.splice(0, completeDishList.length)
    completeDishList.push(pavBhaji, gobiManchurian, pasta, potatoVada)
}

function printList(foodNameVal){
    if(foodArray.length > 0){
        itemHeader.innerHTML = "My Kitchen List"
    }

    const newDiv = document.createElement("div")
    const newDivText = document.createTextNode(foodNameVal);
    newDiv.appendChild(newDivText);

    const parentDiv = document.querySelector("#myList").parentNode;
    const childDiv = document.querySelector("#myList");

    parentDiv.insertBefore(newDiv, childDiv);
}

function createRating(){
    for(i = 0; i < completeDishList.length; i++){
        ratingVar = 0;
        for(j = 0; j < completeDishList[i].items.length; j++){
            for(k = 0; k < foodArray.length; k++){
                if(foodArray[k] == completeDishList[i].items[j]){
                    ratingVar += 1
                }
            }
        }
        completeDishList[i].rating = (ratingVar / completeDishList[i].items.length * 100).toFixed(3)
        console.log(completeDishList[i].name + ": " +completeDishList[i].rating)
    }
}

function sortGeneratedList(){
    loop1:
    for(i = 0; i < completeDishList.length; i++){
        if(i == 0){
            sortedDishListRating.push(-1)
            sortedDishList.push(-1)
            sortedDishListRating.splice(0,0,completeDishList[i].rating)
            sortedDishList.splice(0,0,completeDishList[i].name)
        }
        else{
    loop2:
            for(j = 0; j < sortedDishListRating.length; j++){
                if(sortedDishListRating[j] < completeDishList[i].rating){
                    sortedDishListRating.splice(j,0,completeDishList[i].rating)
                    sortedDishList.splice(j,0,completeDishList[i].name)
                    break loop2
                }
                console.log(sortedDishList)
                console.log(sortedDishListRating)
                console.log(i, j, completeDishList[i].rating, sortedDishListRating[j])
            }
        }
    }
    sortedDishList.splice(sortedDishList.length - 1, 1)
    sortedDishListRating.splice(sortedDishListRating.length - 1, 1)
    console.log(sortedDishList)
}

function printGeneratedList(){
    if(sortedDishListRating.length < 10){
        for(i = 0; i < sortedDishListRating.length; i++){
            itemHeader2.innerHTML = "Recipies Found:"
    
            const newDiv2 = document.createElement("div")
            const newDivText2 = document.createTextNode(sortedDishList[i] + ", with a rating of " + sortedDishListRating[i] + "%");
            newDiv2.appendChild(newDivText2);
    
            const parentDiv2 = document.querySelector("#recipeList").parentNode;
            const childDiv2 = document.querySelector("#recipeList");
    
            parentDiv2.insertBefore(newDiv2, childDiv2);
            console.log("Element Created")
        }
    }
    else{
        for(i = 0; i < 10; i++){
            itemHeader2.innerHTML = "Recipies Found:"
    
            const newDiv2 = document.createElement("div")
            const newDivText2 = document.createTextNode(sortedDishList[i] + ", with a rating of " + sortedDishListRating[i] + "%");
            newDiv2.appendChild(newDivText2);
    
            const parentDiv2 = document.querySelector("#recipeList").parentNode;
            const childDiv2 = document.querySelector("#recipeList");
    
            parentDiv2.insertBefore(newDiv2, childDiv2);
            console.log("Element Created")
        }
    }
}

function generateList(){
    initializeList()
    createRating()
    sortGeneratedList()
    printGeneratedList()
}

function addToList(){
    foodNameValue = foodNameInput.value;
    foodNameValue = convertCase(foodNameValue)

    if(itemArray.includes(foodNameValue)){
        if(! foodArray.includes(foodNameValue)){
            foodArray.push(foodNameValue);
            printList(foodNameValue);
        }
    }
    else{
        alert("The specified food, " + foodNameValue + ", is not a recognizable food option. Please select another food option or fix any typos")
    }

    foodNameInput.value = ""
}

function convertCase(str) {
    var lower = String(str).toLowerCase();
    return lower.replace(/(^| )(\w)/g, function(x) {
      return x.toUpperCase();
    });
  }

document.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        addToList();
    }
})