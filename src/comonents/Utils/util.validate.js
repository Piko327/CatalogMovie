export const CheckPassword=(password)=> 
 {
    if (password.length < 8) {
      return "Password should be at least 8 characters long";
    }
  
    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter";
    }
  
    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
     console.log("Password should contain at least one lowercase letter")
    }
  
    // Password should contain at least one digit
    if (!/\d/.test(password)) {
      return "Password should contain at least one digit";
    }
  
    // Password meets all criteria
    return true;
  };