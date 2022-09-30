const tableForm = () => {

let input = document.getElementsByTagName('input')
let matchFound = false;
for(let i=0;i<input.length;i++){
    let isrequired = input[i].getAttribute('required') == 'required'
    if(isrequired && input[i].value.length == 0){
        matchFound = true
    }
}
if(!matchFound){
          firstname = document.getElementById("firstName");
         lastname = document.getElementById("lastName");
         username = document.getElementById("username");
         telephone = document.getElementById("telephone");
         email = document.getElementById("email");
        document.getElementById("form").innerHTML += `<div> 
        <div>  <p> FirstName: ${firstname.value} <p> </div> 
        <div>  <p> LastName: ${lastname.value} <p> </div> 
        <div> <p> userName: @${username.value} <p> </div> 
        <div> <p> Phone Number: ${telephone.value} <p> </div> 
        <div> <p> email Address: ${email.value} <p> </div> </div>`
}
else{
    alert("fill required input")
}






// let matchFound = false
// for(let i=0;i<input.length;i++){
//    let isrequired =  input[i].getAttribute('required') = "required"
//    console.log(isrequired)
//     if(required && input[i].value!==""){
//         matchFound = true;
//         firstname = document.getElementById("firstName");
//         lastname = document.getElementById("lastName");
//         username = document.getElementById("username");
//         telephone = document.getElementById("telephone");
//         email = document.getElementById("email");
//        document.getElementById("form").innerHTML += `<div> 
//        <div>  <p> FirstName: ${firstname.value} <p> </div> 
//        <div>  <p> LastName: ${lastname.value} <p> </div> 
//        <div> <p> userName: @${username.value} <p> </div> 
//        <div> <p> Phone Number: ${telephone.value} <p> </div> 
//        <div> <p> email Address: ${email.value} <p> </div> </div>` 
   
//    }
//    else{
//     matchFound = false
//     alert("fill required input")

//    }
//     }
}

   