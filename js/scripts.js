$(document).ready(function(){
  $("form#task-list").submit(function(event){
    event.preventDefault();

    var name = $("input#new-list").val();
    var inputtedTask = $("input#newDescription").val();
    var newList = { list: name, tasks: []};

    $("ul#list").append("<li><span class='list'>" + newList.list + "</span></li>");
    $("input#new-list").val("");

    $(".list").last().click(function() {
      $("#show-lists").show();
      $("#show-lists h2").text(newList.list);
      $("table#tasks").empty();
      newList.tasks.forEach(function(task) {
        $("table#tasks").append("<tr><td>" + task.description + "</td><td>" + task.amount + "</td></tr>");
      });

      $("form#add-tasks").unbind('submit').submit(function(event){
        event.preventDefault();
        var inputtedTask = $("input#newDescription").val();
        var inputtedAmount = $("input#newAmount").val();
        var newTask = { description: inputtedTask, amount: inputtedAmount };
        newList.tasks.push(newTask);
        $("table#tasks").empty();
        $("input#newDescription").val("");
        $("input#newAmount").val("");
        newList.tasks.forEach(function(task) {
          $("table#tasks").append("<tr><td>" + task.description + "</td><td>" + task.amount + "</td></tr>");
        });
      });
    });
  });
});
