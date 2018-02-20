function getInfo() {
    $.ajax({

        url: "https://reqres.in/api/users/10",
        async: false,
        dataType: 'json',
        beforeSend: function () {
            $("#msg").text("..Loading")
        },
        type: "GET",
        //data:
        cache: false,
        success: function (data) {
            $("#msg").text("Loaded.");
            console.log(data)
        },
        error: function (errata) {
            $("#msg").text("..failed");
            console.log(errata)
        }
    })
}

getInfo();