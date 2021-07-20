//import React from 'react';
//import reactDom from 'react-dom';
//import $ from 'jquery';


var pchoose = false;
var pturn = false;
var pPawn;
var pColor;
var pEnemy;
var pAttack = false;
var pAttackerNum;

var pAttackedNumf;
var pAttackedChNumf;
var pAttackedNuml;
var pAttackedChNuml;
var pAttackedNumr;
var pAttackedChNumr;

var clickOrMove = false;
var AttackOn = false;

var pawnum;
var pNum;
var pNuml;
var pEnemyl;
var pNumr;
var pEnemyr;
var pNumf;
var pEnemyf;
var AvilabelMv;
var AvilableAttackMv;
var IsThereMove = false;
var IsThereAttackMove = false;

var pAttackChoose = false;

$("#table1 tr td div").click(function () {


    //AvilabelMv = new Array(16);


    // pawnum = $(this).text();

    AttackSearchingMoves();

    if (AvilableAttackMv.length == 0) {
        pawnum = $(this).text();
        pNum = parseInt(pawnum);

        MainFunc(pNum);
        // alert("no attack");
    }

    else if (AvilableAttackMv.length != 0) {
        pawnum = $(this).text();

        for (var i = 0; i < AvilableAttackMv.length; i++) {
            pNum = AvilableAttackMv[i];
        }
        if (pNum == parseInt(pawnum) && pchoose == false) {

            MainFunc(pNum);

            //  alert("there is attack " + pNum);
        }
        else if (pchoose == true && $("#p" + parseInt(pawnum)).hasClass("pawnich")) {
            pawnum = $(this).text();
            pNum = parseInt(pawnum);

            MainFunc(pNum);

            // alert("just move " + pNum);

            if (IsThereAttackMove == true) {

                //  alert(" there is more attack moves " + pNum);
            }
            else {
                AvilableAttackMv = [];

                //  alert(" Now no attack moves " + pNum);
            }

        }
        else {

            //alert("you cannot move " + pNum);

            ///////////

            for (var i = 1; i < 64; i++) {

                for (var h = 0; h < AvilabelMv.length; h++) {
                    if (i == AvilableAttackMv[h]) {
                        $("#p" + i).addClass("must");
                    }
                    else if (i == AvilabelMv[h]) {
                        $("#p" + i).addClass("must");
                    }
                }

            }


            setTimeout(function () {
                for (var i = 1; i < 64; i++) {
                    $("#p" + i).removeClass("must");
                }
            }, 800);

            //$("#p12").animate({ width: '80px', height: '80px' });
            //$("#p12").animate({ width: '70px', height: '70px' });


        }

    }




    //pawnum = $(this).text();
    //pNum = parseInt(pawnum);

    //MainFunc(pNum);


    // alert("Now is the move" + pNum);



});

function AttackSearchingMoves() {

    if (pchoose == false) {

        //  var pch = pchoose;

        AvilabelMv = [];
        AvilableAttackMv = [];

        if (pturn == false) {
            var h = 0;
            for (var i = 0; i < 63; i++) {
                h = i + 1;
                if ($("#p" + h).hasClass("pawnib")) {
                    MainFunc(h);
                    if (IsThereMove == true) {
                        AvilabelMv[i] = h;

                    }
                    if (IsThereAttackMove == true) {
                        AvilableAttackMv[i] = h;
                        // alert(AvilableAttackMv[i]);
                    }
                }
            }
        }


        else if (pturn == true) {
            var h = 0;
            for (var i = 0; i < 63; i++) {
                h = i + 1;
                if ($("#p" + h).hasClass("pawniy")) {
                    MainFunc(h);
                    if (IsThereMove == true) {
                        AvilabelMv[i] = h;

                    }
                    if (IsThereAttackMove == true) {
                        AvilableAttackMv[i] = h;

                    }
                }
            }

        }

        /* if (pch == false) {
             pchoose = false;
         }
         else {
             pchoose = true;
         }
         */

        // alert("yes");
        pchoose = false;
    }


}
function MainFunc(pNum) {

    //if ($(this).text()=="9" ) {
    pNuml = pNum - 1;
    pEnemyl = pNuml - 1;
    pNumr = pNum + 1;
    pEnemyr = pNumr + 1;



    if (pturn == false && $("#p" + pNum).hasClass("pawnib")) {
        pNumf = pNum + 8;
        pEnemyf = pNumf + 8;

        pColor = "pawnib";
        pEnemy = "pawniy";
        pPawn = pNum;

        AvilabelMoves(pNum, pNuml, pNumr, pNumf, pEnemyf, pEnemyl, pEnemyr);

        SelectedP();
        $(this).css("background-color", "rgba(20, 20, 20, 0.3)");

    }
    else if (pturn == true && $("#p" + pNum).hasClass("pawniy")) {

        pNumf = pNum - 8;
        pEnemyf = pNumf - 8;

        pColor = "pawniy";
        pEnemy = "pawnib";
        pPawn = pNum;

        AvilabelMoves(pNum, pNuml, pNumr, pNumf, pEnemyf, pEnemyl, pEnemyr);

        SelectedP();
        $(this).css("background-color", "rgba(20, 20, 20, 0.3)");

    }
    else if ($("#p" + pNum).hasClass("pawnich")) {
        DoMove(pNum);
        SelectedP();
        //if (pAttack == true) {
        //   // clickOrMove = true;

        //    MainFunc(pNum);
        //  //  clickOrMove = false;
        //}
        // alert(pNum);

    }

    //alert(pNumf);


}

function AvilabelMoves(pNum, pNuml, pNumr, pNumf, pEnemyf, pEnemyl, pEnemyr) {

    IsThereMove = false;
    IsThereAttackMove = false;
    pAttack = false;

    $("#table1 tr td div").removeClass("pawnich");
    //$(".pawn").css("background-color", "gray");

    if ((!$("#p" + pNumf).hasClass(pColor) || !$("#p" + pNuml).hasClass(pColor) || !$("#p" + pNumr).hasClass(pColor)) && $("#p" + pNum).hasClass(pColor)) {

        if (!$("#p" + pNumf).hasClass(pColor)) {

            if ($("#p" + pNumf).hasClass(pEnemy) && !$("#p" + pEnemyf).hasClass(pEnemy) && !$("#p" + pEnemyf).hasClass(pColor)) {
                $("#p" + pEnemyf).addClass("pawnich");
                pchoose = true;

                pAttackerNum = pNum;
                pAttackedNumf = pNumf;
                pAttackedChNumf = pEnemyf;
                pAttack = true;
                IsThereMove = true;
                IsThereAttackMove = true;
                //if (clickOrMove == true) {
                //    if (pturn == false) {
                //        pturn = true;
                //    }
                //    else {
                //        pturn = false;
                //    }
                //}

            }
            else if (!$("#p" + pNumf).hasClass(pEnemy) && clickOrMove == false) {
                $("#p" + pNumf).addClass("pawnich");
                //  pAttack = false;
                pchoose = true;
                IsThereMove = true;
            }



        }

        if (pNuml % 8 != 0 && !$("#p" + pNuml).hasClass(pColor)) {

            if (pEnemyl % 8 != 0 && $("#p" + pNuml).hasClass(pEnemy) && !$("#p" + pEnemyl).hasClass(pEnemy) && !$("#p" + pEnemyl).hasClass(pColor)) {
                $("#p" + pEnemyl).addClass("pawnich");
                pchoose = true;

                pAttackerNum = pNum;
                pAttackedNuml = pNuml;
                pAttackedChNuml = pEnemyl;
                pAttack = true;
                IsThereMove = true;
                IsThereAttackMove = true;
                //if (clickOrMove == true) {
                //    if (pturn == false) {
                //        pturn = true;
                //    }
                //    else {
                //        pturn = false;
                //    }
                //}

            }
            else if (!$("#p" + pNuml).hasClass(pEnemy) && clickOrMove == false) {
                $("#p" + pNuml).addClass("pawnich");
                // pAttack = false;
                pchoose = true;
                IsThereMove = true;
            }


        }
        if (pNumf % 8 != 0 && !$("#p" + pNumr).hasClass(pColor)) {

            if (pNumr % 8 != 0 && $("#p" + pNumr).hasClass(pEnemy) && !$("#p" + pEnemyr).hasClass(pEnemy) && !$("#p" + pEnemyr).hasClass(pColor)) {
                $("#p" + pEnemyr).addClass("pawnich");
                pchoose = true;

                pAttackerNum = pNum;
                pAttackedNumr = pNumr;
                pAttackedChNumr = pEnemyr;
                pAttack = true;
                IsThereMove = true;
                IsThereAttackMove = true;
                //if (clickOrMove == true) {
                //    if (pturn == false) {
                //        pturn = true;
                //    }
                //    else {
                //        pturn = false;
                //    }
                //}

            }
            else if (!$("#p" + pNumr).hasClass(pEnemy) && clickOrMove == false) {
                $("#p" + pNumr).addClass("pawnich");
                //  pAttack = false;
                pchoose = true;
                IsThereMove = true;
            }

        }

    }
}

function DoMove(pNum) {


    // alert("attack: " + pNum);
    if ($("#p" + pNum).hasClass("pawnich") && pColor == "pawnib") {



        if (pAttack == true && (pNum == pAttackedChNumf || pNum == pAttackedChNuml || pNum == pAttackedChNumr) && pPawn == pAttackerNum) {

            if (pNum == pAttackedChNumf) {
                attack(pAttackedNumf);
            }
            else if (pNum == pAttackedChNuml) {
                attack(pAttackedNuml);
            }
            else {
                attack(pAttackedNumr);
            }

            $("#p" + pPawn).removeClass("pawnib");
            $("#p" + pNum).addClass("pawnib");

            $("#table1 tr td div").removeClass("pawnich");

            if (pAttack == true) {
                clickOrMove = true;
                MainFunc(pNum);
                if (pAttack == false) {
                    if (pturn == false) {
                        pturn = true;
                    }
                    else {
                        pturn = false;
                    }

                    clickOrMove = false;
                }

            }
            else {
                pturn = true;
                pchoose = false;
            }




        }
        else if (pAttack == false) {
            $("#p" + pPawn).removeClass("pawnib");
            $("#p" + pNum).addClass("pawnib");


            pturn = true;
            pchoose = false;

            $("#table1 tr td div").removeClass("pawnich");
        }


    }
    else if ($("#p" + pNum).hasClass("pawnich") && pColor == "pawniy") {


        if (pAttack == true && (pNum == pAttackedChNumf || pNum == pAttackedChNuml || pNum == pAttackedChNumr) && pPawn == pAttackerNum) {

            if (pNum == pAttackedChNumf) {
                attack(pAttackedNumf);
            }
            else if (pNum == pAttackedChNuml) {
                attack(pAttackedNuml);
            }
            else {
                attack(pAttackedNumr);
            }

            $("#p" + pPawn).removeClass("pawniy");
            $("#p" + pNum).addClass("pawniy");
            $("#table1 tr td div").removeClass("pawnich");

            if (pAttack == true) {
                clickOrMove = true;
                MainFunc(pNum);
                if (pAttack == false) {
                    if (pturn == false) {
                        pturn = true;
                    }
                    else {
                        pturn = false;
                    }

                    clickOrMove = false;
                }
            }
            else {
                pturn = false;
                pchoose = false;
            }

        }
        else if (pAttack == false) {
            $("#p" + pPawn).removeClass("pawniy");
            $("#p" + pNum).addClass("pawniy");

            pturn = false;
            pchoose = false;

            $("#table1 tr td div").removeClass("pawnich");
        }

    }



}

function attack(pAttachedN) {

    $("#p" + pAttachedN).removeClass(pEnemy);
    // pAttack = false;


}

function SelectedP() {
    $("#table1 tr td div").css("background-color", "transparent");

}


/*
$("#table1 tr td div").mouseover(function () {
    $(this).css("background-color", "rgba(20, 20, 20, 0.3)");
        });
$("#table1 tr td div").mouseout(function () {
    $(this).css("background-color", "transparent");
        });
  */



//});