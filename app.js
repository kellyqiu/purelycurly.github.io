//UI Variables
const newUser = document.getElementById("newUser");
const getStarted = document.getElementById('getStarted');
const submitImage = document.getElementById('submitImage')

//Event Listeners
newUser.addEventListener('click', saveUserData);
getStarted.addEventListener('click', showForm)
submitImage.addEventListener('click', showHairType)
    

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

function showHairType(e) {
    var x = document.getElementById('hairTypeOutput')
    x.style.display = "block"
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