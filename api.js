//let URL = "https://dummyjson.com/users";

// async function fetchData() {
//     try {
//         const response = await fetch('https://dummyjson.com/users'); // Change to your API endpoint
//         const data = await response.json();
//         populateSelect(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Function to populate the select dropdown
// function populateSelect(data) {
//     const select = document.getElementById('mySelect');
//     select.innerHTML = ''; // Clear existing options

//     data.forEach(item => {
//         const option = document.createElement('option');
//         option.value = item.id; // Assuming your data has an 'id' field
//         option.textContent = item.name; // Assuming your data has a 'name' field
//         select.appendChild(option);
 var x;
 function change(){
    x=document.getElementById("select").value;
    document.getElementById("loading").innerHTML="You choosed:" +x;
 }
 const URL=`https://dummyjson.com/users`;
 let data= async ()=>{
    let user = await fetch(`https://dummyjson.com/users`);
    console.log(user);
 
 let final = await user.json();
 document.getElementById("loading").innerHTML="wait....";
 let a= document.write("<br>" +final.users[x].firstName);
document.getElementById("loading").innerHTML=a;
}
data();