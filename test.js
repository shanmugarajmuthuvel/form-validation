const form = document.querySelector('#form')
const username = document.getElementById("username")
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
var    icon=document.getElementById("icon")
var   span=document.getElementById("sp")
      form.addEventListener("submit",(e)=>{
		 if(!validate()){
			 e.preventDefault()
			 
		 }
		 else{
			 localstorage.setItem("key",name)
		 }
		
	  })
	  password.addEventListener("input",()=>{
		  
		     var b=password.value
			    if(b===""){
					span.classList.remove("show")
				}
				else{
					span.classList.add("show")
					
				}
		  
	  })
	  icon.addEventListener("click",()=>{
		    if(password.type=="password"){
				password.type="text"
				icon.setAttribute("class","fa fa-eye")
			}
            else{
				password.type="password"
				icon.setAttribute("class","fa fa-eye-slash")
			}	
           			
		  
		  
	  })
	  function validate(){
		 var usernameval=username.value
         var emailval=email.value
         var passval=password.value
         var cpassval=cpassword.value
		
            if(usernameval===""){
				
				setError(username,"UserName is Required")
			}	
            else{
				setsucess(username)
			}
			if(emailval===""){
			
				setError(email,"Email is Must Entered")
			}
			else{
				setsucess(email)
			}
           if(passval===""){
			
			   setError(password,"Password is Must Entered")
			   
		   }
		    else if(passval.length<8){
				
			 setError(password,"Password is Min 8 char ")  
		   }
		   else{
			   setsucess(password)
		   }
           if(cpassval!==passval){
			   
			 setError(cpassword,"Password is not matched")  
		   }
           else{
			   setsucess(cpassword)
		   }
		
            			
	  }
	    function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
	    inputGroup.classList.add("er")
		inputGroup.classList.remove("su")
}
    function setsucess(element){
		const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = "";
	   inputGroup.classList.add("su")
	   inputGroup.classList.remove("er")
	}
      
    // function common(a){
		// a()
		
		
	// }
	     // common(first)
	 // function first(){
									   
									   // alert("it is the highorder function")
									   // second()
									   
								   // }
								   // function second(){
									   // confirm("it is the")
									   
									   
								   // }