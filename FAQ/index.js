$(".panel-item").click(function() {
    $(this).find(".panel-default").toggleClass("active-panel-default")
    $(this).find(".panel-content").toggleClass("show-panel-content")
});