$(document).ready(function(){
    // if (localStorage.getItem('token').length < 0) {
    //     window.location = "file:///C:/Users/Raphael%20D/Desktop/TRAVAIL/Kwick/login"
    // }
    let smiley = ""


    ////////////////////////       AFFICHAGE DES USERS         ///////////////////////////////



    showUser()
    setInterval(function(){
        showUser()
    },5000)
    if (localStorage.getItem("user_list") === null){
        localStorage.setItem("user_list","")
    }
    // localStorage.setItem("user_list","")
    function showUser(){
        $.ajax({
            url: "http://greenvelvet.alwaysdata.net/kwick/api/user/logged/" + localStorage.getItem('token'),
            dataType: 'jsonp',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function(result, status, xhr) {
                $( ".userrs" ).remove();
                for (let index = 0; index < result.result.user.length; index++) {
                    if (localStorage.getItem("user_list").split(" ").indexOf(result.result.user[index].split(" ").join("_")) == -1) {
                        localStorage.setItem("user_list" ,localStorage.getItem("user_list") + result.result.user[index].split(" ").join("_") + " ")
                    }
                    if (result.result.user[index].toLowerCase() != localStorage.getItem("name")) {
                        $("#user").append("<div class='userrs'><i class='dot_green far fa-dot-circle'></i><p class='all_user'>" + result.result.user[index].split(" ").join("_") + "</b></div>")
                    }else{
                        $("#user").append("<div class='userrs me'><i class='dot_green far fa-dot-circle'></i><p class='all_user'>Vous (" + result.result.user[index] + ") </p></div>")
                    }
                }  
                for (let index = 0; index < localStorage.getItem("user_list").split(" ").length-1; index++) {
                    if ( result.result.user.indexOf(localStorage.getItem("user_list").split(" ")[index]) == -1) {
                        $("#user").append("<div class='userrs'><i class='dot_red far fa-dot-circle'></i><p class='all_user'>" + localStorage.getItem("user_list").split(" ")[index].split(" ").join("_") + "</b></div>")
                    }
                }
            },
            error: function(xhr, status, error) {
            }
        })
    }
    /////////////////////////     affichage des messages ////////////////////////

    sessionStorage.setItem("time",0)

    showmessage()

    setInterval(function(){showmessage()},3000)

    function showmessage() {
        $.ajax({
            url: "http://greenvelvet.alwaysdata.net/kwick/api/talk/list/" + localStorage.getItem('token') + "/" + sessionStorage.getItem('time'),
            dataType: 'jsonp',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function(result, status, xhr) {
                for (let index = 0; index < result.result.talk.length; index++) {
                    if (localStorage.getItem("name") == result.result.talk[index].user_name.toLowerCase()) {
                        $("#messageList").append("<div class='msg personnal'><span  >" + result.result.talk[index].user_name + "</span><p>" + result.result.talk[index].content + "</p><span>" + result.result.talk[index].timestamp + "</span></div>");
                    }else{
                        $("#messageList").append("<div class='msg'><span>" + result.result.talk[index].user_name + "</span><p>" + result.result.talk[index].content + "</p><span>" + result.result.talk[index].timestamp + "</span></div>");
                    }
                    sessionStorage.setItem("time",result.result.last_timestamp);
                    scrollBot();
                }
            },
            error: function(xhr, status, error) {
            }
        })
    }
    function scrollBot(){ // permet de scroll en bas des message
        $('#messageList').scrollTop($('#messageList')[0].scrollHeight);
    }
    

    ///////////////////////////  smiley   ///////////////////////
    
    let smileyMenuState = 0;

    // ouverture menu smiley

    $("#smileyMenuButton").on("click", function(){  // ouverture menu smiley
        if (smileyMenuState == 0) {
            $("#smileyMenu").css("display","flex")
            smileyMenuState = 1
        }else{
            $("#smileyMenu").css("display","none")
            smileyMenuState = 0
        }
    })


    $("#messageList").on("click", function(){
        $("#smileyMenu").css("display","none")
        smileyMenuState = 0
    })
    $("#message_content").on("click", function(){
        $("#smileyMenu").css("display","none")
        smileyMenuState = 0
    })



    $("#⚪").on("click", function(){
        $("#message_content").val($("#message_content").val() + "⚪")
    })
    $("#😀").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😀")
    })
    $("#😎").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😎") 
    })
    $("#😍").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😍") 
    })
    $("#💩").on("click", function(){
        $("#message_content").val($("#message_content").val() + "💩") 
    })
    $("#😂").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😂") 
    })
    $("#😅").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😅") 
    })
    $("#🤩").on("click", function(){
        $("#message_content").val($("#message_content").val() + "🤩") 
    })
    $("#😰").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😰") 
    })
    $("#😴").on("click", function(){
        $("#message_content").val($("#message_content").val() + "😴") 
    })
    $("#🖕").on("click", function(){
        $("#message_content").val($("#message_content").val() + "🖕") 
    })
    $("#👌").on("click", function(){
        $("#message_content").val($("#message_content").val() + "👌") 
    })
    $("#👍").on("click", function(){
        $("#message_content").val($("#message_content").val() + "👍") 
    })
    $("#💪").on("click", function(){
        $("#message_content").val($("#message_content").val() + "💪") 
    })
    $("#❔").on("click", function(){
        $("#message_content").val($("#message_content").val() + "❔") 
    })
    $("#❤️").on("click", function(){
        $("#message_content").val($("#message_content").val() + "❤️") 
    })
    $("#😏").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "😏")
    })
    $("#🤠").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "🤠")
    })
    $("#💦").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "💦")
    })
    $("#🔥").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "🔥")
    })
    $("#💔").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "💔")
    })
    $("#🤑").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "🤑")
    })
    $("#🍑").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "🍑")
    })
    $("#🍆").on("click", function(){ 
        $("#message_content").val($("#message_content").val() + "🍆")
    })

    
    ///////////////////////////    envoie d'un message     /////////////////////////

    
    $('#message_content').keypress(function(event){
        if(event.which == 13){
            send_message()	
        }
    });

    $("#send_message").on("click", function(){
        send_message()
    })
    
    function send_message() {
        let i = 0
        for (let index = 0; index < $("#message_content").val().split(" ").length; index++) {
            if ($("#message_content").val().split(" ")[index] == "") {
                i++
                console.log(i)
            }
            
        }
        if (i != $("#message_content").val().split(" ").length) {
            let yourmessage = $("#message_content").val()
            console.log(yourmessage)
            $.ajax({
                url: "http://greenvelvet.alwaysdata.net/kwick/api/say/" + localStorage.getItem('token') + "/" + localStorage.getItem('id') + "/" + encodeURIComponent(yourmessage),
                dataType: 'jsonp',
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function(result, status, xhr) {
                    $("#message_content").val('')
                    $("#message_content").css("border", "#fcd2d6 1px solid")
                    smiley = ""
                    showmessage()
                    scrollBot()
                    $("#smileyMenu").css("display","none")
                },
                error: function(xhr, status, error) {
                    $("#message_content").css("border", "#ec4e20 1px solid")
                }
            })
        }else{
            $("#message_content").css("border", "#ec4e20 1px solid")
        }
        
    }



    /////////////////////////////   disconnect     //////////////

    $("#disconnect").on("click",function(){
        $("#disconnect_menu_background").css("display","flex");
        $("#disconnect_menu").css("display","flex");
    });
    $("#disconnect_yes").on("click",function(){
        $.ajax({
            url: "http://greenvelvet.alwaysdata.net/kwick/api/logout/" + localStorage.getItem('token') + "/" + localStorage.getItem('id'),
            dataType: 'jsonp',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            success: function(result, status, xhr) {
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                localStorage.removeItem("name");
                window.location = "login.html";
            },
            error: function(xhr, status, error) {
            }
        });
    });
    $("#disconnect_no").on("click",function(){
        $("#disconnect_menu_background").css("display","none");
        $("#disconnect_menu").css("display","none");
    });

});
