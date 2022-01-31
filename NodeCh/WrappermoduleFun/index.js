// Use of Module Wrapper Function in NodeJS:

// It provides some global-looking variables that are specific to the module,
// such as: The module and exports object that can be used to export values from the module. 
// The variables like __filename and __dirname, that tells us the module's absolute filename 
// and its directory path.

// I would like to know about, what does mean by module wrapper function and what does it do to my code ?
// Syntax ; 

// (function (exports, require, module, __filename, __dirname) {  


//  }) ();

// (function() {
//     const name = "arun singh";
//     console.log(name);
// })();

// it is also known as anoynamous function