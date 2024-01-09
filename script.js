function test() {  alert(arguments.callee.name); } 
b = test; 
b();