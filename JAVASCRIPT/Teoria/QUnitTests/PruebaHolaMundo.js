function HolaMundo(user1,user2){
    var resultado ="Hola Mundo para" + user1 +" y " + user2;    
        alert(resultado);
        return resultado;
}
 
test("Mi Primera Prueba",function () {
    ok(HolaMundo("Chef","7Sabores"),"Satisfactorio");
});