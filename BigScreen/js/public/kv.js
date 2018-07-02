/* 获取链接参数 */
function kv(key){
    var v = new RegExp("[?&]"+key+"\=([^&]+)", "g").exec(location.search);
    return v ? v[1] : '';
}
