function testing(){
  $("textarea").on('input',function(e){
    let text = e.target.value;
    let fieldId = e.target.id;
    console.log(text + " " + fieldId)
  });
}
