$(document).ready(function() {
  $.get({
    url : './mi.json',
    type : 'get',
    dataType : 'json',
    success : function (data) {
      console.log(data);
    }
  })
});
