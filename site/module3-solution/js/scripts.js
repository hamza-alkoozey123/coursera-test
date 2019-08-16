$(document).ready(function(){
    $("#searchForm").hide ();
    $("#closeButton").hide();
    $("#searchButton").click(function(){
        $("#searchForm").fadeIn();
        $("#searchButton").hide();
        $("#closeButton").fadeIn();
    });
    $("#closeButton").click(function(){
        $("#searchForm").hide();
        $("#searchButton").fadeIn();
        $("#closeButton").hide();        
    })
});