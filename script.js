//your JS code here. If required.
 

document.getElementById("submit").addEventListener("click",(e)=>{
e.preventDefault();
 	document.getElementById('existing').style.display="none";

const name= document.getElementById('username').value.trim();

const password = document.getElementById('password').value;
const remember = document.getElementById('checkbox');
if(localStorage.getItem("name")!==null &&  localStorage.getItem("password")!==null){
	document.getElementById('existing').style.display="block";
	document.getElementById('existing').addEventListener("click",()=>{
		alert(`Logged in as ${localStorage.getItem("name")}`);
	});
	
}
if(remember.checked){
	localStorage.setItem("name",name);
	localStorage.setItem("password",password);
 

	
}else{
	localStorage.removeItem("name");
	localStorage.removeItem("password");
		document.getElementById('existing').style.display="none";
	
	
}

alert(`Logged in as ${name}`);
})
