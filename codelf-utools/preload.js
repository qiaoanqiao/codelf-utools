var searchText= "";
var onSearch = function(text)
{
    searchText =text;
    // window.utools.ubrowser.goto('https://unbug.github.io/codelf/#' + text).run({ width: 1000, height: 600 })
};
window.utools.onPluginEnter(({code, type, payload}) => {
    searchText = payload;
    console.log(document.URL)
    window.location.href=document.URL + "#" + payload;
    console.log('用户进入插件', code, type, payload)
})
window.exports = {

    "pinText": {
        mode: "none",
        args: {
            // 进入插件时调用
            enter: (action) => {
                console.log(action);
                onSearch(action.payload);
            }
        }
    },
};

var onCopy = function(dom){
    console.log(dom);
}
window.onCopyUtools = function (text){
    window.utools.copyText(text);
    window.utools.hideMainWindow();
}






