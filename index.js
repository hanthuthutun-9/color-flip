const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function randomNumGenerator() {
    let randomNum = Math.floor(Math.random() * 5);
    console.log(randomNum);

    let randomChosencolor = colors[randomNum];
    console.log(randomChosencolor);

    $(".shown-color").text(randomChosencolor);

    $(".hero-container").css("background-color", randomChosencolor);
}

$(".main-btn").click(function(){
    randomNumGenerator();
});
