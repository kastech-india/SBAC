$(document).ready(function () {
             $(".panel-heading,.moreText").click(function () {
                 $(this).parent().find(".moreText").toggle();
         
                 if ($(this).find(".panel-title").text().replace(/\s/g, '') == "QuickLook") {
         
                     $("#qucikLinks .panel-title,#Quick ul li").toggleClass("bFont")
                 }
                 else if ($(this).find(".panel-title").text().replace(/\s/g, '') == "Step-by-Step") {
         
                     $("#stepLinks .panel-title,#step ol li").toggleClass("bFont")
                 }
             });
         });