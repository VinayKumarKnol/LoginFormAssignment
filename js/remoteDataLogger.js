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
            var obj = JSON.parse(data);
            $("#content").text("<h2>Id: obj.id</h2>")
                .append("<h2>first name: obj.first_name</h2>")
                .append("<h2>last name: obj.last_name</h2>")
                .append("<img src='obj.avatar'>");
        },
        error: function (errata) {
            $("#msg").text("..failed");
            console.log(errata)
        }
    })
}

getInfo();