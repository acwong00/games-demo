var AppView = require("./js/app-view.js")

$(function () {
    var commands = [
{
    command: "test",
    messages: [
    {
        message: "testtesttest",
        color: "white"
    },
    {
        message: "testtesttest",
        color: "white"
    }]
},
{
    command: "test2",
    messages: [
        {
            message: "test2test2test2test2",
            color: "yellow"
        },
        {
            message: "test2test2test2test2",
            color: "yellow",
            link: "http://acwong.org"
        }
    ]
}],

    greeting = [
    {
        message: "Welcome",
    }];

    new AppView(commands, "test >", greeting);
});