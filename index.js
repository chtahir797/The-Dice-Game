// var noofImages = document.querySelectorAll(".image").length;
// var player1Score = 0;
// var player2Score = 0;
// var count1 = 0;
// var count2 = 0;
// var checkCounter1 = 0;
// var checkCounter2 = 0;
// document.querySelectorAll(".image")[1].addEventListener("click", clickHandler2);
// document.querySelectorAll(".image")[0].addEventListener("click", clickHandler1);
// function clickHandler1() {
//     var randNo1 = (Math.floor(Math.random() * 6) + 1);
//     var getImg1 = document.querySelector(".img1");
//     getImg1.setAttribute("src", "images/dice" + randNo1 + ".png");
//     player1Score = randNo1;
//     var checker1 = checkCounter1++;
//     console.log(checker1)
//     checkWinner();
// }
// function clickHandler2() {
//     var randNo2 = (Math.floor(Math.random() * 6) + 1);
//     var getImg2 = document.querySelector(".img2");
//     getImg2.setAttribute("src", "images/dice" + randNo2 + ".png");
//     player2Score = randNo2;
//     var checker2 = checkCounter2++;
//     console.log(checker2)
//     checkWinner();
// }
// function checkWinner() {
//     if (player1Score > 0 && player2Score > 0) {
//         if (player1Score > player2Score) {
//             document.querySelector("h1").innerHTML = "Player 1 Wins";
//             count1 = count1 + 1;
//         } else if (player2Score > player1Score) {
//             document.querySelector("h1").innerHTML = "Player 2 Wins";
//             count2 = count2 + 1;
//         } else {
//             document.querySelector("h1").innerHTML = "Draw";
//         }
//         document.querySelector(".player1").innerHTML =("Player 1 Score = " + count1);
//         document.querySelector(".player2").innerHTML =("Player 2 Score = " + count2);
//     }
//     if (count1 == 5 || count2 == 5 ){ 
//         count1 = 0;
//         count2 = 0;
//         document.querySelector("h1").innerHTML = "Game Over ";   
//         document.querySelector(".restart").innerHTML = "Click on Player 1 dice to restart Game!";  
//         if (count1 == 5){
//             document.querySelector(".player1").innerHTML = ("Player 1 Wins. Because he score first ");
//         }
//         else{
//             document.querySelector(".player2").innerHTML = ("Player 2 Wins. Because he score first ");
//         }
//     }
//     if (checkCounter1 > checkCounter2) {
//         alert("Player 2 Turn!");
//     } else {
//         alert("Player 1 Turn!");
//     }
// }




var noofImages = document.querySelectorAll(".image").length;
var count1 = 0; // Total Score count for player 1
var count2 = 0; // Total Score count for player 2
var player1Score = 0; // Round Score for player 1
var player2Score = 0; // Round Score for player 2
var counting = 1; // Controlling round
var rounds = prompt("How much round do you want?"); // Total Rounds
rounds = Number(rounds);
document.querySelectorAll(".image")[1].addEventListener("click", clickHandler2);
document.querySelectorAll(".image")[0].addEventListener("click", clickHandler1);
function clickHandler1() {
    var randNo1 = (Math.floor(Math.random() * 6) + 1);
    var getImg1 = document.querySelector(".img1");
    getImg1.setAttribute("src", "images/dice" + randNo1 + ".png");
    player1Score = randNo1;
    checkWinner();
}
function clickHandler2() {
    var randNo2 = (Math.floor(Math.random() * 6) + 1);
    var getImg2 = document.querySelector(".img2");
    getImg2.setAttribute("src", "images/dice" + randNo2 + ".png");
    player2Score = randNo2;
    checkWinner();
}

function checkWinner() {
        if (counting === ( rounds + 1 )){
            if (count1 > count2){
                document.querySelector(".turn").innerHTML = ("Player 1 Wins. Score: " + count1);
            } else if(count1 < count2){
                document.querySelector(".turn").innerHTML = ("Player 2 Wins. Score: " + count2);
            }
            else if (count1 == count2){
                document.querySelector(".turn").innerHTML = ("Match Draws. Same score ");
            }
            else{
                document.querySelector(".turn").innerHTML = ("Match Ends. Please reload the page");
            }
            count1 = 0;
            count2 = 0;
            counting = 0;
            rounds = 0;
        }
        else{
            if (player1Score > 0 && player2Score > 0) {
            if (player1Score > player2Score) {
            document.querySelector("h1").innerHTML = "Player 1 Wins";
            count1 = count1 + 1;
            player1Score = 0; //restting score
            player2Score = 0; //restting score
        } else if( player2Score > player1Score ){
            document.querySelector("h1").innerHTML = "Player 2 Wins";
            count2 = count2 + 1;
            player1Score = 0; //restting score
            player2Score = 0; //restting score
            console.log(player1Score, player2Score);
        } else{
            document.querySelector("h1").innerHTML = "Match Draw";
            player1Score = 0; //restting score
            player2Score = 0; //restting score
        }
        counting = counting +1;
        document.querySelector(".turn").innerHTML = "Turn " + counting ;
        console.log("Counting loop: ", counting);
        document.querySelector(".player1").innerHTML =("Player 1 Score = " + count1);
        document.querySelector(".player2").innerHTML =("Player 2 Score = " + count2);
        }
    }
}



