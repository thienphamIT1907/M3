$(() => {
    //empty table
    $('.fetching-table').hide();
    $('#emptyTableBtn').click(() => {
        $('.fetching-table').toggle('slow');
    });

    //table has data
    $('#fetchingAndShowTableBtn').click(() => {
        $('.fetching-table').hide('slow', () => {
            fetchingData().then(show);
        });
    });

    async function fetchingData() {
        console.log('No data !');
        $.ajax({
            type: 'GET',
            url: 'https://spring-student-api.herokuapp.com/info?apiKey=eaf118ab-babf-43ed-a788-b66d2f0ca00c',
            dataType: 'json',
            data: [],
            success:
                    function fetching(data) {
                        let result = {
                            listStudent: data
                        };

                        let loopStudentTemplate = $('#loop-student-template').html();
                        let loopStudentTemplateCompile = Handlebars.compile(loopStudentTemplate);
                        let loopStudentTemplateWithData = loopStudentTemplateCompile(result);

                        $('#list-student').html(loopStudentTemplateWithData);
                    },

            error: function (data) {
                console.log('error');
            }
        });
    }

    function show() {
        $('.fetching-table').slideToggle('slow');
        console.log('Loading data done !')
    }
});