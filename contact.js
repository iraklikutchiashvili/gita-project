
const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$("#email").on("change", validateEmail);

function validateEmail(){
    if(validEmailRegex.test($("#email").val())){
        $(".invalidEmailP").css("display", "none");
    }else{
        $(".invalidEmailP").css("display", "block");
    }
};

$(".btn").on("click", (e) => {
    if(!validEmailRegex.test($("#email").val()) || !$("#email").val() || !$("#msg").val()){
        e.preventDefault();
        $("b").css('visibility', 'visible');
    }
});
