layout: post
slug: "instagram"
title: 相册 
noDate: "true"
---
<div class="instagram" data-client-id="12b7f12a06b04b6a9852e1871b738214" data-user-id="1673073688">
    <a href="https://instagram.com/sqrtthree/" target="_blank" class="open-ins">图片来自instagram，正在加载中…</a>
</div>
<script type="text/javascript">
function myAddEvent(obj,ev,fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    } else {
        obj.addEventListener(ev,fn,false);
    }
}
function appendscript(src, charset) {
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.charset = charset ? charset : document.characterSet ? document.characterSet : document.charset;
    try {
        if(src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function () {
                scriptNode.onloadDone = true;
             };
             scriptNode.onreadystatechange = function () {
                 if((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                }
             };
        }
        document.getElementsByTagName('body')[0].appendChild(scriptNode);
    } catch(e) {}
}
myAddEvent(window, 'load', function() {
    appendscript('/js/jquery.lazyload.js');
    appendscript('/js/instagram.js');
});
</script>
