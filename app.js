//UI Variables
const newUser = document.getElementById("newUser");
const getStarted = document.getElementById('getStarted');
const hairType = document.getElementById('submitHairType')


//Event Listeners
newUser.addEventListener('click', saveUserData);
hairType.addEventListener('click', submitHairType);
getStarted.addEventListener('click', showForm);
document.addEventListener('DOMContentLoaded', preloadedUserData);


//User Array
var users = [];

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
    brandRep(shampooDict, conditionerDict);
}

function brandRep(shampooDict, conditionerDict) {
    var brandShampoo = '';
    var maxShampoo = 0;
    var brandConditioner = '';
    var maxConditioner = 0;
    for (var shampoo in shampooDict) {
        if (shampooDict[shampoo] > maxShampoo) {
            maxShampoo = shampooDict[shampoo];
            brandShampoo = shampoo;
        }
    }
    for (var conditioner in conditionerDict) {
        if (conditionerDict[conditioner] > maxConditioner) {
            maxConditioner = conditionerDict[conditioner];
            brandConditioner = conditioner;
        }
    }
    document.getElementById("idealShampoo").innerHTML += brandShampoo + ".";
    document.getElementById("idealConditioner").innerHTML += brandConditioner + ".";
    var x = document.getElementById('idealProducts');
    x.style.display = "block";
}
        // preloadedData = {"preloadedData": [
        //     {
        //         "id": "000",
        //         "email": "a@att.net",
        //         "password": "a",
        //         "hairType": "2",
        //         "shampoo": "brandA",
        //         "conditioner": "brandA",
        //         "otherProducts": "brandA"
        //     },
        //     {
        //         "id": "001",
        //         "email": "a1@att.net",
        //         "password": "a1",
        //         "hairType": "2",
        //         "shampoo": "brandA",
        //         "conditioner": "brandA",
        //         "otherProducts": "brandA"
        //     },
        //     {
        //         "id": "002",
        //         "email": "a2@att.net",
        //         "password": "a2",
        //         "hairType": "2",
        //         "shampoo": "brandB",
        //         "conditioner": "brandB",
        //         "otherProducts": "brandB"
        //     },
        //     {
        //         "id": "003",
        //         "email": "b@att.net",
        //         "password": "b",
        //         "hairType": "3",
        //         "shampoo": "brandB",
        //         "conditioner": "brandB",
        //         "otherProducts": "brandB"
        //     },
        //     {
        //         "id": "004",
        //         "email": "b1@att.net",
        //         "password": "b1",
        //         "hairType": "3",
        //         "shampoo": "brandB",
        //         "conditioner": "brandB",
        //         "otherProducts": "brandB"
        //     },
        //     {
        //         "id": "005",
        //         "email": "b2@att.net",
        //         "password": "b2",
        //         "hairType": "3",
        //         "shampoo": "brandB",
        //         "conditioner": "brandB",
        //         "otherProducts": "brandB"
        //     },
        //     {
        //         "id": "006",
        //         "email": "c@att.net",
        //         "password": "b",
        //         "hairType": "4",
        //         "shampoo": "brandB",
        //         "conditioner": "brandB",
        //         "otherProducts": "brandB"
        //     },
        //     {
        //         "id": "007",
        //         "email": "c1@att.net",
        //         "password": "c1",
        //         "hairType": "4",
        //         "shampoo": "brandC",
        //         "conditioner": "brandC",
        //         "otherProducts": "brandC"
        //     },
        //     {
        //         "id": "008",
        //         "email": "c2@att.net",
        //         "password": "b2",
        //         "hairType": "4",
        //         "shampoo": "brandC",
        //         "conditioner": "brandC",
        //         "otherProducts": "brandC"
        //     }
    
        // ]}

        function preloadedUserData(){
       
            var data0 = {
                id: "000",
                email: "a@att.net",
                password: "a",
                hairType: "2",
                shampoo: "brandA",
                conditioner: "brandA",
                otherProducts: "brandA"
            };
            users.push(data0)
            var data1 = {
                id: "001",
                email: "a1@att.net",
                password: "a",
                hairType: "2",
                shampoo: "brandA",
                conditioner: "brandA",
                otherProducts: "brandA"
            };
            users.push(data1)
            var data2 = {
                id: "002",
                email: "a2@att.net",
                password: "b",
                hairType: "2",
                shampoo: "brandB",
                conditioner: "brandB",
                otherProducts: "brandB"
            };
            users.push(data2)

            var data3 = {
                id: "003",
                email: "b@att.net",
                password: "b",
                hairType: "3",
                shampoo: "brandB",
                conditioner: "brandB",
                otherProducts: "brandB"
            };
            users.push(data3)

            var data4 = {
                id: "004",
                email: "b1@att.net",
                password: "b",
                hairType: "3",
                shampoo: "brandB",
                conditioner: "brandB",
                otherProducts: "brandB"
            };
            users.push(data4)
            
            var data5 = {
                id: "005",
                email: "b2@att.net",
                password: "b",
                hairType: "3",
                shampoo: "brandB",
                conditioner: "brandB",
                otherProducts: "brandB"
            };
            users.push(data5)
            
            var data6 = {
                id: "006",
                email: "c@att.net",
                password: "c",
                hairType: "4",
                shampoo: "brandB",
                conditioner: "brandB",
                otherProducts: "brandB"
            };   
           users.push(data6);
            
           var data7 = {
                id: "007",
                email: "c1@att.net",
                password: "c1",
                hairType: "4",
                shampoo: "brandC",
                conditioner: "brandC",
                otherProducts: "brandC"
            };   
           users.push(data7);

           var data8 = {
            id: "008",
            email: "c2@att.net",
            password: "c1",
            hairType: "4",
            shampoo: "brandC",
            conditioner: "brandC",
            otherProducts: "brandC"
            };   
            users.push(data8);
            localStorage.setItem('MyUserList', JSON.stringify(users) );
        }
        
