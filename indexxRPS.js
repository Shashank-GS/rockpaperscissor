var name1;
var name2;
function showit() {

    name1 = document.getElementById("user1").value;
    console.log(name1);
    // var li1 = document.getElementsByTagName("img")[0].src;
    document.getElementsByClassName("user_img")[0].src = "https://joeschmoe.io/api/v1/=" + name1;

    name2 = document.getElementById("user2").value;
    console.log(name2);
    // var li2 = document.getElementsByTagName("img")[1].src;
    document.getElementsByClassName("user_img")[1].src = "https://joeschmoe.io/api/v1/=" + name2;




}
var p1, p2, asc2, asc1, index1 = 0;
function play1() {
    var ch1 = document.getElementById("input1").value;
    asc1 = ch1.charCodeAt(index1);
    var ran1 = Math.floor(Math.random() * 10 * asc1);
    asc1 = ran1 % 3;
    console.log(asc1);
    display1();
}
function play2() {
    var ch2 = document.getElementById("input2").value;
    asc2 = ch2.charCodeAt(index1);
    var ran2 = Math.floor(Math.random() * 10 * asc2);
    asc2 = ran2 % 3;
    console.log(asc2);
    display2();
}
function display1() {
    if (asc1 == 0)
        document.getElementById("disp1").src = "rock.jpeg";
    else if (asc1 == 1)
        document.getElementById("disp1").src = "paper.png";
    else
        document.getElementById("disp1").src = "sci.jpeg";

}
function display2() {
    if (asc2 == 0)
        document.getElementById("disp2").src = "rock.jpeg";
    else if (asc2 == 1)
        document.getElementById("disp2").src = "paper.png";
    else
        document.getElementById("disp2").src = "sci.jpeg";

}
function result() {
    if (asc1 == asc2)
    {
        console.log("DRAW"); 
        document.getElementsByClassName("winner")[0].innerHTML = "The game has ended in a draw... Please, Refresh the page and challenge again to try your luck...";

    }
    else if ((asc1 == 0 && asc2 == 1) || (asc1 == 1 && asc2 == 2) || (asc1 == 2 && asc2 == 0)) {
        console.log(name2 + " player2 won");
        document.getElementsByClassName("winner")[0].innerHTML = "And the Winner of this contest is " + name2;
        document.getElementById("output").src = "https://joeschmoe.io/api/v1/=" + name2;
        document.getElementsByClassName("winner")[1].innerHTML = "Congratulations Player2: " + name2;

    }
    else {
        console.log(name1 + "player1 won");
        document.getElementsByClassName("winner")[0].innerHTML = "And the Winner of this contest is " + name1;
        document.getElementById("output").src = "https://joeschmoe.io/api/v1/=" + name1;
        document.getElementsByClassName("winner")[1].innerHTML = "Congratulations Player1: " + name1;


    }

}

