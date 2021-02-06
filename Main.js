function Add_User() {
    Player1_Name = document.getElementById("player1_name_input").value;
    Player2_Name = document.getElementById("player2_name_input").value;

    if (Player1_Name == "") {
        document.getElementById("Error_Label").innerHTML = "Please Enter the Login Name in Player-1 Text-Input Box";
    } else if (Player2_Name == "") {
        document.getElementById("Error_Label").innerHTML = "Please Enter the Login Name in Player-2 Text-Input Box";
    } else {
        localStorage.setItem("Player-2_Name :-", Player2_Name);
        localStorage.setItem("Player-1_Name :-", Player1_Name);

        window.location = "Quiz.html";
    }
}
player1_name = localStorage.getItem("Player-1_Name :-");
player2_name = localStorage.getItem("Player-2_Name :-");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("Number_1").value;
    number2 = document.getElementById("Number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = "<center>" + question_number + input_box + check_button + "</center>";
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            window.alert(player1_name + " Given Correct Answer");
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            window.alert(player2_name + " Given Correct Answer")
        }
    }
    if (get_answer != actual_answer) {
        if (answer_turn == "player2") {
            player2_score = player2_score - 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            window.alert(player2_name + " Given Wrong Answer")
        } else {
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            window.alert(player1_name + " Given Wrong Answer");
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
