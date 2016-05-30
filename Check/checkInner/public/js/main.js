$("#checkBtn").click(function(){
  $.post("check",
    {
      name: $("#inputName").val(),
    },
    function(results){
      console.log(results.status);
      if(results.status == "success") {
        $("#innerInformationTwo").slideUp();
        $("#innerInformationOne").slideDown();
      }
      if(results.status == "false") {
        $("#innerInformationOne").slideUp();
        $("#innerInformationTwo").slideDown();
      }
    });
});
