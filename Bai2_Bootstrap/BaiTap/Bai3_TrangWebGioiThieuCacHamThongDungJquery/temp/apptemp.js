$(function () {
    // Grab the template script
    var theTemplateScript = $('#loop-customer').html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Define our data object
    var data = {
        listCustomer: [
            {
                "firstName": "Thien Pham",
                "idCustomer": 1907
            },
            {
                "firstName": "Thien Pham",
                "idCustomer": 1907
            },
            {
                "firstName": "Thien Pham",
                "idCustomer": 1907
            }
        ]
    }

    // Pass our data to the template
    var theCompiledHtml = theTemplate(data);

    // Add the compiled html to the page
    // $(document.body).append(theCompiledHtml);
    $('#list-customer').html(theCompiledHtml);
});