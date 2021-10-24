//UI Variables
const newUser = document.getElementById("newUser");
const getStarted = document.getElementById('getStarted');
const hairType = document.getElementById('submitHairType')

//Event Listeners
newUser.addEventListener('click', saveUserData);
getStarted.addEventListener('click', showForm)
hairType.addEventListener('click', submitHairType)


//User Array
let users = [];

//HELPER FUNCTIONS
//Show Form
function showForm(e){
    var x = document.getElementById('newUserForm')
    x.style.display = "block"
}

function hideForm(e){
    e.preventDefault()
    var x = document.getElementById('newUserForm')
    x.style.display = "none"
}



//Save User Data
function saveUserData(e){
    e.preventDefault();
    if (document.getElementById('exampleInputEmail1').value != ""){
        let user = {
            id: Date.now(),
            email: document.getElementById('exampleInputEmail1').value,
            password: document.getElementById('exampleInputPassword1').value,
            hairType: document.getElementById('hairType').value,
            shampoo: document.getElementById('shampoo').value,
            conditioner: document.getElementById('conditioner').value,
            otherProducts: document.getElementById('otherProducts').value
        }
        users.push(user);
        document.forms[0].reset();
    }
    
    hideForm(e);

    //saving to localStorage
    localStorage.setItem('MyUserList', JSON.stringify(users) );
}

//Output Hair Type Info
function submitHairType(e) {
    e.preventDefault();
    var userHairType = document.getElementById('hair').value;
    var storedValue = localStorage.getItem('MyUserList');
    var object = JSON.parse(storedValue);
    var shampooDict = {}
    var conditionerDict = {}
    for(let i = 0; i < object.length; i++) {
        if (object[i].hairType == userHairType) {
            if (!shampooDict[object[i].shampoo]) {
                shampooDict[object[i].shampoo] = 1;
            } else {
                shampooDict[object[i].shampoo] += 1;
            }
            if (!conditionerDict[object[i].conditioner]) {
                conditionerDict[object[i].conditioner] = 1;
            } else {
                conditionerDict[object[i].conditioner] += 1;
            }
        }
    }
    console.log(shampooDict);
    console.log(conditionerDict);

}