//UI Variables
const newUser = document.getElementById("newUser")

//Event Listeners
newUser.addEventListener('click', saveUserData);
    

//User Array
let users = [];

//HELPER FUNCTIONS
//Display Loading wheel
function saveUserData(e){
    e.preventDefault();
    let user = {
        id: Date.now(),
        email: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value
    }
    users.push(user);
    document.forms[0].reset();

    //saving to localStorage
    localStorage.setItem('MyUserList', JSON.stringify(users) );
}