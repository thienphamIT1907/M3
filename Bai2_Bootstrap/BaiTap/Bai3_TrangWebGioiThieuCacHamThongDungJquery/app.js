$(document).ready(function () {
    let getTemplate = $('#loop-function').html();
    let templateCompile = Handlebars.compile(getTemplate);

    let data = {
        listFunction: [
            {
                "no": "1",
                "functionName": ".find()",
                "description": "Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.",
                "codeDemo": "$( \"li.item-ii\" ).find( \"li\" ).css( \"background-color\", \"red\" );"
            },
            {
                "no": "2",
                "functionName": ".hide()",
                "description": "Hide the matched elements.",
                "codeDemo": "$( \".target\" ).hide();"
            },
            {
                "no": "3",
                "functionName": ".toggle()",
                "description": "Hide/show the matched elements",
                "codeDemo": "$( \".target\" ).toggle();"
            },
            {
                "no": "4",
                "functionName": ".show()",
                "description": "Show the matched elements",
                "codeDemo": "$( \".target\" ).show();"
            },
            {
                "no": "5",
                "functionName": ".animate()",
                "description": "Perform a custom animation of a set of CSS properties.",
                "codeDemo": "$( \"#book\" ).animate({\n" +
                        "    opacity: 0.25,\n" +
                        "    left: \"+=50\",\n" +
                        "    height: \"toggle\"\n" +
                        "  }, 5000, function() {\n" +
                        "  });"
            },
            {
                "no": "6",
                "functionName": ".fadeIn()",
                "description": "Display the matched elements by fading them to opaque.",
                "codeDemo": "$( \"#clickme\" ).click(function() {\n" +
                        "  $( \"#book\" ).fadeIn( \"slow\", function() {\n" +
                        "    // Animation complete\n" +
                        "  });\n" +
                        "});"
            },
            {
                "no": "7",
                "functionName": ".fadeOut()",
                "description": "Hide the matched elements by fading them to transparent.",
                "codeDemo": "$( \"#clickme\" ).click(function() {\n" +
                        "  $( \"#book\" ).fadeOut( \"slow\", function() {\n" +
                        "    // Animation complete.\n" +
                        "  });\n" +
                        "});"
            },
            {
                "no": "8",
                "functionName": ".slideUp()",
                "description": "Hide the matched elements with a sliding motion.",
                "codeDemo": "$( \"#clickme\" ).click(function() {\n" +
                        "  $( \"#book\" ).slideUp( \"slow\", function() {\n" +
                        "    // Animation complete.\n" +
                        "  });\n" +
                        "});"
            },
            {
                "no": "9",
                "functionName": ".slideDown()",
                "description": "Display the matched elements with a sliding motion.",
                "codeDemo": "$( \"#clickme\" ).click(function() {\n" +
                        "  $( \"#book\" ).slideDown( \"slow\", function() {\n" +
                        "    // Animation complete.\n" +
                        "  });\n" +
                        "});"
            },
            {
                "no": "10",
                "functionName": ".html()",
                "description": "Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.",
                "codeDemo": "$( \"div.demo-container\" ).html();"
            },
            {
                "no": "11",
                "functionName": ".append()",
                "description": "Insert content, specified by the parameter, to the end of each element in the set of matched elements.",
                "codeDemo": "$( \".container\" ).append( $( \"h2\" ) );"
            },
            {
                "no": "12",
                "functionName": ".prepend()",
                "description": "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.",
                "codeDemo": "$( \".container\" ).prepend( $( \"h2\" ));"
            },
            {
                "no": "13",
                "functionName": ".on()",
                "description": "Attach an event handler function for one or more events to the selected elements.",
                "codeDemo": "$( \"#dataTable tbody tr\" ).on( \"click\", function() {\n" +
                        "  console.log( $( this ).text() );\n" +
                        "});"
            },
            {
                "no": "14",
                "functionName": ".off()",
                "description": "Remove an event handler.",
                "codeDemo": "$( \"body\" ).off( \"click\", \"p\", foo );"
            },
            {
                "no": "15",
                "functionName": ".css()",
                "description": "Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.",
                "codeDemo": "$( \"div.example\" ).css( \"width\", function( index ) {\n" +
                        "  return index * 50;\n" +
                        "});"
            },
            {
                "no": "16",
                "functionName": ".attr()",
                "description": "Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.",
                "codeDemo": "$( \"#greatphoto\" ).attr( \"title\", \"Photo by Kelly Clark\" );"
            },
            {
                "no": "17",
                "functionName": ".val()",
                "description": "Get the current value of the first element in the set of matched elements or set the value of every matched element.",
                "codeDemo": "$( \"select#foo option:checked\" ).val();"
            },
            {
                "no": "18",
                "functionName": ".text()",
                "description": "Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.",
                "codeDemo": "$( \"ul li\" ).text(function( index ) {\n" +
                        "  return \"item number \" + ( index + 1 );\n" +
                        "});"
            },
            {
                "no": "19",
                "functionName": ".each()",
                "description": "Iterate over a jQuery object, executing a function for each matched element.",
                "codeDemo": "$( \"li\" ).each(function( index ) {\n" +
                        "  console.log( index + \": \" + $( this ).text() );\n" +
                        "});"
            },

        ]
    };

    let templateInsertData = templateCompile(data);

    $('#list-function').html(templateInsertData);

});