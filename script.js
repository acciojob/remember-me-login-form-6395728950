//your JS code here. If required.

document.getElementById("submit").addEventListener("click",()=>{
	const name= document.getElementId('username').value.trim();
	const password = document.getElementId('password').value;
	
	alert(`Logged in as ${name}` );
})
