const hex_code = ['A', 'B', 'C', 'D', 'E', 'F', '0' ,'1', '2', '3', '4', '5', '6', '7', '8', '9'];

function hexCodeGenerator(){
    
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * 16);
        hex += hex_code[num];
        
    }
    console.log(hex);

    // text change
    $(".shown-color").text(hex);
    // background color
    $(".hero-container").css("background-color", hex);
}


$(".main-btn").click(function(){
    hexCodeGenerator();
});