$(function(){
    $("#signup_btn").click(function(){
        $("#main").animate({left:"22.5%"},400);
        $("#main").animate({left:"30%"},500);
        $("#login_form").css("visibility","hidden");
        $("#login_form").animate({left:"25%"},400);

        $("#signup_form").animate({left:"17%"},400);
        $("#signup_form").animate({left:"30%"},500);
        $("#signup_form").css("visibility","visible");

    });
    $("#login_btn").click(function(){
        $("#main").animate({left:"77.5%"},400);
        $("#main").animate({left:"70%"},500);
        $("#signup_form").css("visibility","hidden");
        $("#signup_form").animate({left:"75%"},400);

        $("#login_form").animate({left:"80.5%"},400);
        $("#login_form").animate({left:"70%"},500);
        $("#login_form").css("visibility","visible");
    });

    $("#login_form button").click(function(){
        var email,password;
        email = $("#login_form #email").val();
        password = $("#login_form #password").val();
        if(email == ""){
            $("#email").css("border-bottom","2px solid gold").css("box-shadow","0 0 3px gold");
            $("#password").css("border-bottom","1px solid black").css("box-shadow","0 0 0");
            $("#message").html("Email boş bırakılamaz.").addClass("warning");
        }else if(password == ""){
            $("#email").css("border-bottom","1px solid black").css("box-shadow","0 0 0");
            $("#password").css("border-bottom","2px solid gold").css("box-shadow","0 0 3px gold");
            $("#message1").html("Şifre boş bırakılamaz.").addClass("warning");
            $("#message").html("").removeClass("warning");
        }else if(email != "test@gmail.com"){
            $("#password").css("border-bottom","1px solid black").css("box-shadow","0 0 0");
            $("#email").css("border-bottom","2px solid red").css("box-shadow","0 0 3px red");
            $("#message").html("Email yanlış. test@gmail.com dene").removeClass("warning").addClass("error");
            $("#message1").html("").removeClass("error");
        }else {
            $("#message1").html("Giriş yapıldı.").removeClass("warning").removeClass("error").addClass("success");
            $("#email").css("border-bottom","1px solid black").css("box-shadow","0 0 0");
        }
    });
});