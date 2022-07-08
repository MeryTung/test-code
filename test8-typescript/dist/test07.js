var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        console.log('clicked!');
    };
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () { }
};
uiElement.addClickListener(h.onClickBad);
