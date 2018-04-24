

$(document).ready(function () {
    //set up variables 
    var heroHp = "";
    var enemyHp = "";
    var attackPower = "";
    var counterAttack = "";
    var characterremaing = 3;
    var isHero = true;
    var isEnemy = true;
    var visibleImg;
    var visibleHero;


   


    //reset variables    
    function reset() {
        heroHp = "";
        enemyHp = "";
        attackPower = "";
        counterAttack = "";
        characterremaing = 3;
        isHero = true;
        isEnemy = true;
        $(".attack").attr("style", "display: none");
        $("#thor").attr("style", "display: block");
        $("#captain_america").attr("style", "display: block");
        $("#ironman").attr("style", "display: block");
        $("#black_panther").attr("style", "display: block");
        console.log("reset");


       
    }

    // select the hero 
    $(".container").on("click", ".character", function () {

        

        if (isHero == false && isEnemy == false) {
            return false;
        }
        if (isHero == true) {
            visibleHero= $(this).attr("id");
            console.log(visibleHero);
            alert("Your hero is "+visibleHero);
            heroHp = $(this).attr("data-value");
            heroHP = parseInt(heroHp);
            console.log("hero: " + heroHp);
            attackPower = $(this).attr("data-attack");
            attackPower = parseInt(attackPower);
            console.log("hero attack power: " + attackPower);
            isHero = false;
            console.log("isHero: " + isHero + " and isEnemy: " + isEnemy);
            //movie hero image to left 
        } else {
            visibleImg = $(this).attr("id");
            
            enemyHp = $(this).attr("data-value");
            enemyHp = parseInt(enemyHp);
            console.log("enemy: " + enemyHp);
            counterAttack = $(this).attr("data-attack");
            counterAttack = parseInt(counterAttack);
            console.log("enenmy attack power: " + counterAttack);
            isEnemy = false;
            console.log("isHero: " + isHero + " and isEnemy: " + isEnemy);
            $(".attack").attr("style", "display: inline-block");
            //movie enemy image to left
        }

        //attack 
    }).on("click", ".attack", function () {
        enemyHp = enemyHp - attackPower;
        heroHp = heroHp - counterAttack;

        $("#result").text("current enemyHP :" + enemyHp + "     current heroHp :" + heroHp + "     hero attack power: " + attackPower);

        ////////////////////////
        console.log("current enemyHP :" + enemyHp);
        console.log("current heroHp :" + heroHp);
        console.log("hero attack power: " + attackPower);
        //////////////////////
        attackPower = attackPower + 6;


        //if enemy die 

        if (enemyHp <= 0 && heroHp <= 0) {
            alert("your hero and enemy die");
            reset();
        } else if (enemyHp <= 0) {
            alert("You win ");
            characterremaing--;
            isEnemy = true;
            $(".attack").attr("style", "display: none");

             //dead enemy make it invisible 
            if (visibleImg == "thor") {
                $("#thor").attr("style", "display: none");
            } else if (visibleImg == "captain_america") {
                $("#captain_america").attr("style", "display: none");
            } else if (visibleImg == "ironman") {
                $("#ironman").attr("style", "display: none");
            } else if (visibleImg == "black_panther") {
                $("#black_panther").attr("style", "display: none");
            }


           

        } else if (characterremaing == 0) {
            alert("There is no enemy");
            reset();
        } else if (heroHp <= 0) {
            alert("You lose. click other hero to play again.");
            reset();
        }

    });








});





