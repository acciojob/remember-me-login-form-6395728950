//your JS code here. If required.
const p = document.createElement('p');
const body = document.getElementsByTagName('body')[0];

document.getElementById("submit").addEventListener("click",(e)=>{
	e.preventDefault();
	
	const name= document.getElementById('username').value.trim();
 
	const password = document.getElementById('password').value;
	const remember = document.getElementById('checkbox');
	if(localStorage.getItem("name")  &&  localStorage.getItem("password")){
		document.getElementById('existing').style.display="block";
		document.getElementById('existing').addEventListener("click",()=>{
			alert(`Logged in as ${name}`);
		})
		
	}
	if(remember.checked){
		localStorage.setItem("name",name);
		localStorage.setItem("password",password);
		// p.textContent='clicked';
		// body.appendChild(p);

		
	}else{
		localStorage.remove("name");
		localStorage.remove("password");
		
	}
	
	alert(`Logged in as ${name}` );
	
})
