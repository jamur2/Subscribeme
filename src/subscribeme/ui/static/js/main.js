dojo.require("dijit.form.Button");

var subscribeme = {};

dojo.addOnLoad(function() {
    subscribeme.add_auth_button = function() {
        button = new dijit.form.Button({
            label: "Get my Twitter feed",
            onClick: function(){
                window.location = '/api/oauth/twitter/login';
            }
        }, 'get-feed-button');
    };

    subscribeme.add_feed_link = function(uid) {
        url = 'http://jamur2-subscribeme.appspot.com/api/feed?id=' + uid;
        dojo.byId("link_area").innerHTML = ("Your Twitter feed: " +
            "<a href='" + url +"'>" + url + "</a>");
    };

    subscribeme.on_auth_status_check = function(response) {
        resp = eval('(' + response + ')');
        if (resp.auth_cookie == '') {
            subscribeme.add_auth_button();
        }
        else {
            subscribeme.add_feed_link(resp.auth_cookie);
        }
    };

    subscribeme.check_auth_status = function() {
        dojo.xhrPost({
            url: "/api/main/is_authenticated",
            content: {},
            load: subscribeme.on_auth_status_check
        });
    }

    subscribeme.check_auth_status();
});
