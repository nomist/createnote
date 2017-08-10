$(document).ready(function(){
  $("#telephone").mask("+380(99) 999-99-99");
  $( "#popup__info" ).validate({
    rules: {
      name: {
        required: true
      },
      surname: {
        required: true
      },
      telephone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Это поле обязательно к заполнению"
      },
      surname: {
        required: "Это поле обязательно к заполнению"
      },
      telephone: {
        required: "Это поле обязательно к заполнению"
      },
      email: {
        required: "Это поле обязательно к заполнению",
        email: "Введите, пожалуйста, корректный мейл"
      }
    }
  });
});
