$(document).ready(function () {
    let getTemplate = $('#loop-function').html();
    let templateCompile = Handlebars.compile(getTemplate);

    let data = {
        listFunction: [
            {
                "no": "1",
                "functionName": "Draggable",
                "description": "Allow elements to be moved using the mouse.",
                "codeDemo": "https://jqueryui.com/draggable/"
            },
            {
                "no": "2",
                "functionName": "Droppable",
                "description": "Create targets for draggable elements.",
                "codeDemo": "https://jqueryui.com/droppable/"
            },
            {
                "no": "3",
                "functionName": "Resizable",
                "description": "Change the size of an element using the mouse.",
                "codeDemo": "https://jqueryui.com/resizable/"
            },
            {
                "no": "4",
                "functionName": "Selectable",
                "description": "Use the mouse to select elements, individually or in a group.",
                "codeDemo": "https://jqueryui.com/selectable/"
            },
            {
                "no": "5",
                "functionName": "Sortable",
                "description": "Reorder elements in a list or grid using the mouse.",
                "codeDemo": "https://jqueryui.com/sortable/"
            },
            {
                "no": "6",
                "functionName": "Accordion",
                "description": "Displays collapsible content panels for presenting information in a limited amount of space.",
                "codeDemo": "https://jqueryui.com/accordion/"
            },
            {
                "no": "7",
                "functionName": "Autocomplete",
                "description": "Enables users to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering.",
                "codeDemo": "https://jqueryui.com/autocomplete/"
            },
            {
                "no": "8",
                "functionName": "Datepicker",
                "description": "Select a date from a popup or inline calendar",
                "codeDemo": "https://jqueryui.com/datepicker/"
            },
            {
                "no": "9",
                "functionName": "Dialog",
                "description": "Open content in an interactive overlay.",
                "codeDemo": "https://jqueryui.com/dialog/"
            },
            {
                "no": "10",
                "functionName": "Slider",
                "description": "Drag a handle to select a numeric value.",
                "codeDemo": "https://jqueryui.com/slider/"
            },
            {
                "no": "11",
                "functionName": "Progressbar",
                "description": "Display status of a determinate or indeterminate process.",
                "codeDemo": "https://jqueryui.com/progressbar/"
            },
            {
                "no": "12",
                "functionName": "Spinner",
                "description": "Enhance a text input for entering numeric values, with up/down buttons and arrow key handling.",
                "codeDemo": "https://jqueryui.com/spinner/"
            },
            {
                "no": "13",
                "functionName": "Tabs",
                "description": "A single content area with multiple panels, each associated with a header in a list.",
                "codeDemo": "https://jqueryui.com/tabs/"
            },
            {
                "no": "14",
                "functionName": "Add Class",
                "description": "Adds class(es) to elements while animating all style changes.",
                "codeDemo": "https://jqueryui.com/addClass/"
            },
            {
                "no": "15",
                "functionName": "Remove Class",
                "description": "Removes class(es) from elements while animating all style changes.",
                "codeDemo": "https://jqueryui.com/removeClass/"
            },
        ]
    };

    let templateInsertData = templateCompile(data);

    $('#list-function').html(templateInsertData);

});