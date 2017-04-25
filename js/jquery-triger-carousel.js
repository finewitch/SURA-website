//triger jquery corousel
$(document).ready(function() {
    $(".links a").tosrus({
        pagination: {
            add: true
        },
        keys: true,
        drag: true,
    });
});