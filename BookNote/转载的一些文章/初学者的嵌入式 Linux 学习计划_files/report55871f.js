;define('page/pages/bottom_input_bar.css', [], function(require, exports, module) {
	return ".comment__push__mask{position:fixed;top:0;left:0;bottom:0;right:0;z-index:9999}.comment__push__container{-webkit-text-size-adjust:none}.comment__push__container .comment__push__input{background-color:transparent;color:rgba(0,0,0,0.8)}.comment__push{position:fixed;left:0;right:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;background-color:#f7f7f7;-webkit-transition:opacity .2s ease-out,-webkit-transform .2s ease-out;transition:opacity .2s ease-out,-webkit-transform .2s ease-out;transition:transform .2s ease-out,opacity .2s ease-out;transition:transform .2s ease-out,opacity .2s ease-out,-webkit-transform .2s ease-out;padding:8px 12px}.comment__push__input__faker{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-height:20px;max-height:112px;word-break:break-all;opacity:0}.comment__push__input__faker,.comment__push__input{padding:8px 12px;line-height:20px}.comment__push__input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;box-sizing:border-box;border:0;resize:none;font-size:inherit;font-family:inherit;outline:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.comment__push__input::-webkit-input-placeholder{color:rgba(0,0,0,0.1);font-size:15px}.comment__push__input::-moz-placeholder{color:rgba(0,0,0,0.1);font-size:15px}.comment__push__input:-ms-input-placeholder{color:rgba(0,0,0,0.1);font-size:15px}.comment__push__input::-ms-input-placeholder{color:rgba(0,0,0,0.1);font-size:15px}.comment__push__input::placeholder{color:rgba(0,0,0,0.1);font-size:15px}.comment__push__wrp{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:4px;background-color:#fff}.comment__push__extend{line-height:36px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comment__push__send{margin-left:12px;line-height:36px;width:58px;text-align:center;font-weight:500;border-radius:4px;background-color:#07c160;color:#FFF}.comment__push__send:active{background-color:#06ad56;color:#e5e5e5}.comment__push__emoji,.comment__push__keyboard{margin-left:12px;width:32px;height:32px}.comment__push__emoji{background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm-6-8.3h12a6 6 0 11-12 0zm6 4.8a4.802 4.802 0 004.649-3.6H7.35A4.802 4.802 0 0012 17.3zm-3.5-6.8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z' fill-rule='evenodd' fill-opacity='.9'\/%3E%3C\/svg%3E\") no-repeat center \/ cover}.comment__push__keyboard{background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zM6.5 8h2v2h-2V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8zm-9 3h2v2h-2v-2zm3 0h2v2h-2v-2zM9 15h6v2H9v-2zm3.5-4h2v2h-2v-2zm3 0h2v2h-2v-2z' fill-rule='evenodd' fill-opacity='.9'\/%3E%3C\/svg%3E\") no-repeat center \/ cover}.comment__emoji__panel{position:fixed;bottom:0;left:0;right:0;z-index:9999;height:300px;background-color:#f7f7f7;overflow-y:scroll;-webkit-overflow-scrolling:touch;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.comment__emoji__panel .comment_primary_emotion_item{float:none;padding:8px}.comment__emoji__panel .comment_primary_emotion_item .comment_primary_emotion{width:32px;height:32px;background-size:32px}.comment__emoji__panel .comment_primary_emotion_item:hover{background-color:transparent}.comment__push__container__horizontal .comment__push{padding-left:120px;padding-right:120px}.comment__push__container__horizontal .comment__push__emoji{margin-bottom:2px}.comment__push__container__horizontal .comment__emoji__panel{padding-left:120px;padding-right:120px}@media(prefers-color-scheme:dark){.comment__push{background-color:#1d1d1d}.comment__push__wrp{background-color:#2a2a2a}.comment__push__container .comment__push__input{color:rgba(255,255,255,0.8)}.comment__push__container .comment__push__input::-webkit-input-placeholder{color:rgba(255,255,255,0.5);font-size:15px}.comment__push__container .comment__push__input::-moz-placeholder{color:rgba(255,255,255,0.5);font-size:15px}.comment__push__container .comment__push__input:-ms-input-placeholder{color:rgba(255,255,255,0.5);font-size:15px}.comment__push__container .comment__push__input::-ms-input-placeholder{color:rgba(255,255,255,0.5);font-size:15px}.comment__push__container .comment__push__input::placeholder{color:rgba(255,255,255,0.5);font-size:15px}.comment__push__emoji{background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zm-6-8.3h12a6 6 0 11-12 0zm6 4.8a4.802 4.802 0 004.649-3.6H7.35A4.802 4.802 0 0012 17.3zm-3.5-6.8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z' fill-rule='evenodd' fill='%23FFFFFF' fill-opacity='.9'\/%3E%3C\/svg%3E\") no-repeat center \/ cover}.comment__push__keyboard{background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 100-17.6 8.8 8.8 0 000 17.6zM6.5 8h2v2h-2V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8zm-9 3h2v2h-2v-2zm3 0h2v2h-2v-2zM9 15h6v2H9v-2zm3.5-4h2v2h-2v-2zm3 0h2v2h-2v-2z' fill-rule='evenodd' fill='%23FFFFFF' fill-opacity='.9'\/%3E%3C\/svg%3E\") no-repeat center \/ cover}.comment__emoji__panel{background-color:#1d1d1d}a.comment__push__send{color:#FFF}}";
});define("appmsg/emotion/caret.js",[],function(e,t){
"use strict";
var t={};
return t.get=function(e){
var t=0;
if(document.selection){
e.focus();
var a=document.selection.createRange();
a.moveStart("character",-e.value.length),t=Sel.text.length;
}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);
return t;
},t.set=function(e,t){
if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){
var a=e.createTextRange();
a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select();
}
},t;
});define("pages/app_open.js",["pages/version4video.js","biz_wap/jsapi/app.js","biz_wap/jsapi/core.js"],function(o,a,n,e){
"use strict";
function t(o){
this._o={
pc_open_url:"",
packageUrl:"",
packageName:"",
wp_open_url:"",
wp_download_url:"",
ios_open_url:"",
android_open_url:"",
ios_download_url:"",
android_download_url:"",
android_md5:"",
task_name:"",
autoInstall:!0,
download_fail_callback:function(){},
download_remove_callback:function(){},
check_downloading_callback:function(){},
final_fail_callback:function(){},
before_open_callback:function(){},
beforeDownload:function(){},
download_start_callback:function(){},
download_complete_callback:function(){}
},this._g={},l(this._o,o);
}
function d(o){
r.installDownloadTask({
download_id:o
},function(){});
}
function l(o,a){
for(var n in a)o[n]=a[n];
}
function i(){
return w.system;
}
function s(o){
"function"==typeof o.callback&&("ios"==w.system&&o.packageUrl||"android"==w.system&&o.packageName?r.getInstallState({
packageUrl:o.packageUrl||"",
packageName:o.packageName||""
},function(a){
var n=a.err_msg;
o.callback(n.indexOf("get_install_state:yes")>-1?!0:!1);
}):o.callback(!1));
}
var _=o("pages/version4video.js"),c=_.device,r=o("biz_wap/jsapi/app.js"),p=o("biz_wap/jsapi/core.js"),w={
system:"other",
inWechat:c.inWechat,
windowWechat:/WindowsWechat/i.test(navigator.userAgent),
macWechat:/wechat.*mac os/i.test(navigator.userAgent),
debug:parent.window.location.href.indexOf("&vconsole=1")>=0?!0:!1
};
return function(){
w.system=c.is_ios?"ios":c.is_android?"android":c.is_wp?"wp":c.is_pc?"pc":"other";
}(),t.prototype._checkInstallState=function(){
var o=this,a=this._o,n=this._g;
"ios"==w.system&&a.packageUrl||"android"==w.system&&a.packageName?r.getInstallState({
packageUrl:a.packageUrl||"",
packageName:a.packageName||""
},function(a){
var e=a.err_msg;
e.indexOf("get_install_state:yes")>-1?(n.installed=!0,o._openApp()):(n.installed=!1,
o._downloadApp());
}):"wp"==w.system&&a.wp_open_url&&a.wp_download_url?o._openWpApp():a.final_fail_callback.call(o);
},t.prototype._openApp=function(){
function o(o){
p.invoke("launchApplication",{
schemeUrl:o
},function(n){
w.debug&&parent.window.console.log("launchApplication res:"+JSON.stringify(n)),/:ok$/.test(n.err_msg)||a._jumpUrl(o);
});
}
var a=this,n=this._o;
"ios"==w.system&&n.ios_open_url?(n.before_open_callback.call(this,{
type:5
}),o(n.ios_open_url)):"android"==w.system&&n.android_open_url&&(n.before_open_callback.call(this,{
type:3
}),o(n.android_open_url));
},t.prototype._jumpUrl=function(o){
w.inWechat?w.windowWechat||w.macWechat?window.location.href=o:p.invoke("openUrlWithExtraWebview",{
url:o,
openType:1
},function(a){
-1==a.err_msg.indexOf("ok")&&(window.location.href=o);
}):window.location.href=o;
},t.prototype._downloadApp=function(){
var o=this._o,a=this._g;
"ios"==w.system&&o.ios_download_url?(o.before_open_callback.call(this,{
type:4
}),this._jumpUrl(o.ios_download_url)):"android"==w.system&&o.android_download_url&&o.android_md5&&("undefined"!=typeof a.download_id?this._checkDownloadAndroidApp():(o.before_open_callback.call(this,{
type:2
}),this._downloadAndroidApp()));
},t.prototype._openWpApp=function(){
var o=this._o,a=document.createElement("iframe"),n=(new Date).valueOf();
a.style.display="none",a.src=o.wp_open_url,document.body.appendChild(a),setTimeout(function(){
var a=(new Date).valueOf();
1550>a-n&&(window.location.href=o.wp_download_url);
},1500);
},t.prototype._checkDownloadAndroidApp=function(){
var o=this,a=this._o,n=this._g;
r.queryDownloadTask({
download_id:n.download_id
},function(e){
return w.debug&&parent.window.console.log("queryDownloadTask res:"+JSON.stringify(e)),
e&&"undefined"!=typeof e.state&&"default"!=e.state?void("download_succ"==e.state?(a.download_complete_callback.call(o,n.download_id),
a.autoInstall&&o._installAndroidApp()):"download_fail"==e.state?o._downloadFail():"downloading"==e.state&&a.check_downloading_callback.call(o,n.download_id)):void o._downloadRemoved();
});
},t.prototype._downloadAndroidApp=function(){
var o=this,a=this._o,n=this._g;
if(n.download_id=void 0,a.beforeDownload.call(this)!==!1){
var t={
title:a.title||"",
thumb_url:a.thumb_url||"",
task_name:a.task_name,
task_url:a.android_download_url,
file_md5:a.android_md5
};
w.debug&&parent.window.console.log("addDownloadTask param:"+JSON.stringify(t)),r.addDownloadTask(t,function(t){
w.debug&&parent.window.console.log("addDownloadTask res:"+JSON.stringify(t)),/:ok$/.test(t.err_msg)?(n.download_id=t.download_id,
a.download_start_callback.call(o,n.download_id),o._downloadStateChange()):/:fail_network_not_connected$/.test(t.err_msg)?setTimeout(function(){
e("当前网络不可用，请检查");
},0):/:fail_sdcard_not_ready$/.test(t.err_msg)?setTimeout(function(){
e("sd卡不可用，请检查");
},0):/:fail_sdcard_has_not_enough_space$/.test(t.err_msg)&&setTimeout(function(){
e("手机空间不足，请检查");
},0);
});
}
},t.prototype._downloadStateChange=function(){
var o=this,a=this._o,n=this._g;
r.downloadStateChange(function(e){
return w.debug&&parent.window.console.log("downloadStateChange res:"+JSON.stringify(e)),
e&&"undefined"!=typeof e.download_id&&"download_removed"!=e.state?e.download_id!=n.download_id?void o._downloadRemoved():void("download_succ"==e.state?(a.download_complete_callback.call(o,n.download_id),
a.autoInstall&&o._installAndroidApp()):"download_fail"==e.state&&o._downloadFail()):void o._downloadRemoved();
});
},t.prototype._installAndroidApp=function(){
var o=(this._o,this._g);
"undefined"!=typeof o.download_id&&r.installDownloadTask({
download_id:o.download_id
},function(o){
w.debug&&parent.window.console.log("installDownloadTask res:"+JSON.stringify(o));
});
},t.prototype._downloadRemoved=function(){
var o=this._g,a=this._o;
o.download_id=void 0,a.download_remove_callback.call(this);
},t.prototype._downloadFail=function(){
var o=this._g,a=this._o;
o.download_id=void 0,a.download_fail_callback.call(this);
},t.prototype.open=function(){
var o=this._o;
"pc"==w.system&&o.pc_open_url?(o.before_open_callback.call(this,{
type:1
}),top!=window?parent.window.open(o.pc_open_url):window.open(o.pc_open_url)):!w.inWechat||"ios"!=w.system&&"android"!=w.system&&"wp"!=w.system?o.final_fail_callback.call(this):this._checkInstallState();
},{
install:d,
create:t,
getSystemType:i,
checkInstallState:s
};
});define("pages/video_plugin/sha1.js",[],function(){
"use strict";
var r=function(){
function r(r,t,n){
var e,o,h,p,l,d,v,A,w,F=0,R=[],B=0,U=!1,y=[],T=[],H=!1;
if(n=n||{},e=n.encoding||"UTF8",w=n.numRounds||1,h=c(t,e),w!==parseInt(w,10)||1>w)throw Error("numRounds must a integer >= 1");
if("SHA-1"!==r)throw Error("Chosen SHA variant is not supported");
l=512,d=b,v=g,p=160,A=function(r){
return r.slice();
},o=E(r),this.setHMACKey=function(t,n,a){
var u;
if(!0===U)throw Error("HMAC key already set");
if(!0===H)throw Error("Cannot set HMAC key after calling update");
if(e=(a||{}).encoding||"UTF8",n=c(n,e)(t),t=n.binLen,n=n.value,u=l>>>3,a=u/4-1,t/8>u){
for(n=v(n,t,0,E(r),p);n.length<=a;)n.push(0);
n[a]&=4294967040;
}else if(u>t/8){
for(;n.length<=a;)n.push(0);
n[a]&=4294967040;
}
for(t=0;a>=t;t+=1)y[t]=909522486^n[t],T[t]=1549556828^n[t];
o=d(y,o),F=l,U=!0;
},this.update=function(r){
var t,n,e,a=0,u=l>>>5;
for(t=h(r,R,B),r=t.binLen,n=t.value,t=r>>>5,e=0;t>e;e+=u)r>=a+l&&(o=d(n.slice(e,e+u),o),
a+=l);
F+=a,R=n.slice(a>>>5),B=r%l,H=!0;
},this.getHash=function(t,n){
var e,c,h,l;
if(!0===U)throw Error("Cannot call getHash after setting HMAC key");
switch(h=s(n),t){
case"HEX":
e=function(r){
return a(r,p,h);
};
break;

case"B64":
e=function(r){
return u(r,p,h);
};
break;

case"BYTES":
e=function(r){
return i(r,p);
};
break;

case"ARRAYBUFFER":
try{
c=new ArrayBuffer(0);
}catch(b){
throw Error("ARRAYBUFFER not supported by this environment");
}
e=function(r){
return f(r,p);
};
break;

default:
throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
}
for(l=v(R.slice(),B,F,A(o),p),c=1;w>c;c+=1)l=v(l,p,0,E(r),p);
return e(l);
},this.getHMAC=function(t,n){
var e,c,h,b;
if(!1===U)throw Error("Cannot call getHMAC without first setting HMAC key");
switch(h=s(n),t){
case"HEX":
e=function(r){
return a(r,p,h);
};
break;

case"B64":
e=function(r){
return u(r,p,h);
};
break;

case"BYTES":
e=function(r){
return i(r,p);
};
break;

case"ARRAYBUFFER":
try{
e=new ArrayBuffer(0);
}catch(g){
throw Error("ARRAYBUFFER not supported by this environment");
}
e=function(r){
return f(r,p);
};
break;

default:
throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
}
return c=v(R.slice(),B,F,A(o),p),b=d(T,E(r)),b=v(c,p,l,b,p),e(b);
};
}
function t(r,t,n){
var e,o,a,u,i,f=r.length;
if(t=t||[0],n=n||0,i=n>>>3,0!==f%2)throw Error("String of HEX type must be in byte increments");
for(e=0;f>e;e+=2){
if(o=parseInt(r.substr(e,2),16),isNaN(o))throw Error("String of HEX type contains invalid characters");
for(u=(e>>>1)+i,a=u>>>2;t.length<=a;)t.push(0);
t[a]|=o<<8*(3-u%4);
}
return{
value:t,
binLen:4*f+n
};
}
function n(r,t,n){
var e,o,a,u,i=[],i=t||[0];
for(n=n||0,o=n>>>3,e=0;e<r.length;e+=1)t=r.charCodeAt(e),u=e+o,a=u>>>2,i.length<=a&&i.push(0),
i[a]|=t<<8*(3-u%4);
return{
value:i,
binLen:8*r.length+n
};
}
function e(r,t,n){
var e,o,a,u,i,f,s=[],c=0,s=t||[0];
if(n=n||0,t=n>>>3,-1===r.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");
if(o=r.indexOf("="),r=r.replace(/\=/g,""),-1!==o&&o<r.length)throw Error("Invalid '=' found in base-64 string");
for(o=0;o<r.length;o+=4){
for(i=r.substr(o,4),a=u=0;a<i.length;a+=1)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(i[a]),
u|=e<<18-6*a;
for(a=0;a<i.length-1;a+=1){
for(f=c+t,e=f>>>2;s.length<=e;)s.push(0);
s[e]|=(u>>>16-8*a&255)<<8*(3-f%4),c+=1;
}
}
return{
value:s,
binLen:8*c+n
};
}
function o(r,t,n){
var e,o,a,u=[],u=t||[0];
for(n=n||0,e=n>>>3,t=0;t<r.byteLength;t+=1)a=t+e,o=a>>>2,u.length<=o&&u.push(0),
u[o]|=r[t]<<8*(3-a%4);
return{
value:u,
binLen:8*r.byteLength+n
};
}
function a(r,t,n){
var e="";
t/=8;
var o,a;
for(o=0;t>o;o+=1)a=r[o>>>2]>>>8*(3-o%4),e+="0123456789abcdef".charAt(a>>>4&15)+"0123456789abcdef".charAt(15&a);
return n.outputUpper?e.toUpperCase():e;
}
function u(r,t,n){
var e,o,a,u="",i=t/8;
for(e=0;i>e;e+=3)for(o=i>e+1?r[e+1>>>2]:0,a=i>e+2?r[e+2>>>2]:0,a=(r[e>>>2]>>>8*(3-e%4)&255)<<16|(o>>>8*(3-(e+1)%4)&255)<<8|a>>>8*(3-(e+2)%4)&255,
o=0;4>o;o+=1)u+=t>=8*e+6*o?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>6*(3-o)&63):n.b64Pad;
return u;
}
function i(r,t){
var n,e,o="",a=t/8;
for(n=0;a>n;n+=1)e=r[n>>>2]>>>8*(3-n%4)&255,o+=String.fromCharCode(e);
return o;
}
function f(r,t){
var n,e=t/8,o=new ArrayBuffer(e);
for(n=0;e>n;n+=1)o[n]=r[n>>>2]>>>8*(3-n%4)&255;
return o;
}
function s(r){
var t={
outputUpper:!1,
b64Pad:"=",
shakeLen:-1
};
if(r=r||{},t.outputUpper=r.outputUpper||!1,!0===r.hasOwnProperty("b64Pad")&&(t.b64Pad=r.b64Pad),
"boolean"!=typeof t.outputUpper)throw Error("Invalid outputUpper formatting option");
if("string"!=typeof t.b64Pad)throw Error("Invalid b64Pad formatting option");
return t;
}
function c(r,a){
var u;
switch(a){
case"UTF8":
case"UTF16BE":
case"UTF16LE":
break;

default:
throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
}
switch(r){
case"HEX":
u=t;
break;

case"TEXT":
u=function(r,t,n){
var e,o,u,i,f,s=[],c=[],h=0,s=t||[0];
if(t=n||0,u=t>>>3,"UTF8"===a)for(e=0;e<r.length;e+=1)for(n=r.charCodeAt(e),c=[],
128>n?c.push(n):2048>n?(c.push(192|n>>>6),c.push(128|63&n)):55296>n||n>=57344?c.push(224|n>>>12,128|n>>>6&63,128|63&n):(e+=1,
n=65536+((1023&n)<<10|1023&r.charCodeAt(e)),c.push(240|n>>>18,128|n>>>12&63,128|n>>>6&63,128|63&n)),
o=0;o<c.length;o+=1){
for(f=h+u,i=f>>>2;s.length<=i;)s.push(0);
s[i]|=c[o]<<8*(3-f%4),h+=1;
}else if("UTF16BE"===a||"UTF16LE"===a)for(e=0;e<r.length;e+=1){
for(n=r.charCodeAt(e),"UTF16LE"===a&&(o=255&n,n=o<<8|n>>>8),f=h+u,i=f>>>2;s.length<=i;)s.push(0);
s[i]|=n<<8*(2-f%4),h+=2;
}
return{
value:s,
binLen:8*h+t
};
};
break;

case"B64":
u=e;
break;

case"BYTES":
u=n;
break;

case"ARRAYBUFFER":
try{
u=new ArrayBuffer(0);
}catch(i){
throw Error("ARRAYBUFFER not supported by this environment");
}
u=o;
break;

default:
throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
}
return u;
}
function h(r,t){
return r<<t|r>>>32-t;
}
function p(r,t){
var n=(65535&r)+(65535&t);
return((r>>>16)+(t>>>16)+(n>>>16)&65535)<<16|65535&n;
}
function l(r,t,n,e,o){
var a=(65535&r)+(65535&t)+(65535&n)+(65535&e)+(65535&o);
return((r>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(o>>>16)+(a>>>16)&65535)<<16|65535&a;
}
function E(r){
var t=[];
if("SHA-1"!==r)throw Error("No SHA variants supported");
return t=[1732584193,4023233417,2562383102,271733878,3285377520];
}
function b(r,t){
var n,e,o,a,u,i,f,s=[];
for(n=t[0],e=t[1],o=t[2],a=t[3],u=t[4],f=0;80>f;f+=1)s[f]=16>f?r[f]:h(s[f-3]^s[f-8]^s[f-14]^s[f-16],1),
i=20>f?l(h(n,5),e&o^~e&a,u,1518500249,s[f]):40>f?l(h(n,5),e^o^a,u,1859775393,s[f]):60>f?l(h(n,5),e&o^e&a^o&a,u,2400959708,s[f]):l(h(n,5),e^o^a,u,3395469782,s[f]),
u=a,a=o,o=h(e,30),e=n,n=i;
return t[0]=p(n,t[0]),t[1]=p(e,t[1]),t[2]=p(o,t[2]),t[3]=p(a,t[3]),t[4]=p(u,t[4]),
t;
}
function g(r,t,n,e){
var o;
for(o=(t+65>>>9<<4)+15;r.length<=o;)r.push(0);
for(r[t>>>5]|=128<<24-t%32,t+=n,r[o]=4294967295&t,r[o-1]=t/4294967296|0,t=r.length,
o=0;t>o;o+=16)e=b(r.slice(o,o+16),e);
return e;
}
return r;
}(window);
return r;
});define("pages/video_error.html.js",[],function(){
return'<#if(errType==1){#>\n<div style="<#if(typeof width!=\'undefined\'){#>width:<#=width#>px;<#}#><#if(typeof height!=\'undefined\'){#>height:<#=height#>px;<#}#>" class="wrp_pop_tips wx_video_error_box js_error_box">\n   <div class="wx_video_error_msg js_error_area">\n       <p role="heading"><#=msg#></p>\n       <#if(!is_mp_video){#>\n       <i class="wx_video_error_code">错误码：<#=errcode#></i>\n       <#}#>\n       <# if(showBtn){ #>\n       <a class="wx_video_error_msg_btn js_video_errormsg_btn" role="button" href="javascript:void(0);">\n           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAMAAADhynmdAAAAQlBMVEUAAACcnJycnJycnJyoqKicnJycnJycnJycnJycnJyfn5+cnJydnZ2enp6kpKSdnZ2cnJyenp6cnJycnJycnJybm5t8KrXMAAAAFXRSTlMAyeb3CNp3tJRvHIEtJhBgqztWRJ+p5TqGAAABCklEQVQ4y5WTi27DIAxFAUMhgTzX8/+/urB2pdKI0x0pSoRuruyLbf7gF3PBaDE6X44LyY0D1SJQsfd9PpMM/CJx60v8SmV1HMSi1lKyA1n0jnwWSO08l04uJbxpBmTrpDtbGB6fmxC6Tc4BHv9aZDJdJsHW9w43Jez9x8T5M4l31WZsJn2bsYY+nUum2lQkGIVANPZ4FCLWOJImSTgjZE2SkU9crmu57mj9JBc93Qzj9R1d3HSG5bN5MRsnUzcGKK8Ns02z+Da7rYQE4bUE2PG1C6kVnkCyf0pwX8/jwbyxCLhcHpKTFkvkwK3pRmXtRrVFoTGYLvN+t0EUl0qrRaF1pFBz0anp/ptvNB4SY1XDAVMAAAAASUVORK5CYII=" alt="" class="wx_video_error_refresh">\n           刷新       </a>\n       <# } #>\n   </div>\n   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIXRSTlMAOx20pMJbzBQNTDGTh2ohLCZmeUF2hEmXCFdxUquef4yHE17nAAACnklEQVRIx9WW2xqiIBSFRc1AUATJU1a+/1MOm0NYKvnNXM260ZLftRcbqCQinOLI0yiY/iXKuUZPjx5Fk+6RhF1yHiVF0wC6IZfr9fqIkpRqdNyQ9AoiUU8g+YZ8Xn96YmNKvkhkLMskKgEo/yJzaxkXeZsGsjeWKEIFU/FBZgA+D5yEwGtTgR0J18lYUvdcLZ1YkUjLf+a0saYYSG/J3Hury+WSkTCjCETtF6Mvd8QGJMZSWIfsAlKhWGRl5zQ1ZNBDgy/zzvvFavWUK7SyTRs+rsiUZS/4LHIHyo8VgBx7vDkKx2WhPS7dD1Q6cNlu2dTa0gMys4bz/vJR6ph8ADgcVcSVUkfnhzJTc6gRj8fbCOHk30UI2KC+V4gKjskJQqC5frFHli0kafogFIfFkAXVCSqdAFVR8pmtVCWiXCtaarbWpGtQAYx7sjf2GCbfjFRQpH7lTLucveSMBE7+Z6VqViT2/PVs0d7hPk9TUcTaUuVaT8k/f/v6SXOgyG7InZaSvM8vj/309LrbvpSAORDH2/kWGyHhm/u5AYUc8qdFBRRrsV749bRv6I5x1OY50GZUUxQz9aGplAXZcOQ1DL3vwsTyvHQ2YWgjZV2rDTmxYRjUuoBvcQDr7QRLBiiNzJ4BawG3FLtTmEMGBigTRyC2oIKht1vbwLWrKmXKBZal+yApDGhm4q5JCVdNdrZeQBe8B44WnE2NGmxrR1bCvMugHdkhSwMWI9wjIGeosnPlJmNrst6PQrpeFkBSyAmkdD016DYqAVC6HHcNtnCPgazcuytAd5IqB/qYtq4bkP7vnEaL3W4KH9/HhKBAKl8XFUlMIWYIek4hZgh6UtjHBLVA4pPkCKRf9jOQ5Kwp1UvPDyb3qkPJaRG8Ln7f8Q8Bki/Kj5IYnQAAAABJRU5ErkJggg==" class="wx_video_error_loading js_video_errormsg_loading" style="display:none;">\n</div>\n<#}else{#>\n<div style="<#if(typeof width!=\'undefined\'){#>width:<#=width#>px;<#}#><#if(typeof height!=\'undefined\'){#>height:<#=height#>px;<#}#>" class="wx_video_msg_primary js_error_box">\n  <div class="wx_video_msg_primary_inner">\n    <i class="weui-icon-info weui-icon_msg"></i>\n    <p class="wx_video_msg_primary_text"><#=msg#></p>\n  </div>\n</div>\n<#}#>\n';
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("new_video/player.js",["page/pages/video_new.css","biz_common/utils/string/html.js","biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","biz_wap/jsapi/log.js","biz_common/dom/event.js","new_video/player.html.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","new_video/ctl.js","biz_common/tmpl.js","appmsg/without_iframe/iframe_communicate.js","pages/iframe_communicate.js","a/a_utils.js","biz_common/utils/url/parse.js","pages/version4video.js","biz_wap/utils/wapsdk.js","biz_common/base64.js","biz_wap/jsapi/core.js","new_video/plugin/util.js","biz_wap/utils/jsmonitor_report.js","common/utils.js","biz_wap/utils/ajax.js","appmsg/set_font_size.js"],function(e){
"use strict";
function t(){
o(),i();
}
function i(){
T.on("onNetWorkChange",function(e){
if(console.log("networkchanged",e),e.networkType||(e.networkType=e.netType),e.networkType&&e.simType)try{
if(!l.lastNetworkType&&window.networkType&&window.simType)l.lastNetworkType={
networkType:window.networkType,
simType:window.simType
};else if(b.isObjectValueEqual(l.lastNetworkType,e))return;
if(window.simType=e.simType,window.networkType=e.networkType,b.isMobileNetwork(e.networkType)&&1!==e.simType&&l.lastNetworkType&&("wifi"===l.lastNetworkType.networkType||b.isNoneNetwork(l.lastNetworkType.networkType)))for(var t in l.__MpPlayers){
var i=l.__MpPlayers[t];
i._g.isUserPause=!1,i._g.pauseNetType=null,!i.isPlay()&&!i.isEnd()&&i.isPause()&&i.hasBeginPlay()?(i._g.isUserPause=!0,
i._g.pauseNetType=l.lastNetworkType.networkType):i.isPlay()&&("wifi"===l.lastNetworkType.networkType&&b.isVideoNeedFlowNotice(i.opt.flow,2)||b.isNoneNetwork(l.lastNetworkType.networkType)&&b.isVideoNeedFlowNotice(i.opt.flow,4))&&i.__showFlowNotice_1();
}
l.lastNetworkType=e;
}catch(o){}
});
}
function o(){
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",r,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",r,!1):document.visibilityState&&document.addEventListener("visibilitychange",r,!1);
try{
l.__MpBindExitFullPage||(l.__MpBindExitFullPage=!0,j.listenMpPageAction(function(e){
if(e&&"onExitMpVideoFullPage"===e.action)for(var t in l.__MpPlayers)if(Object.prototype.hasOwnProperty.call(l.__MpPlayers,t)){
var i=l.__MpPlayers[t];
if(i&&i.__isInFullScreen){
var o=i.opt&&i.opt.extinfo&&i.opt.extinfo.vid?i.opt.extinfo.vid:"";
if(o&&o===e.videoVid){
if(i.__isInFullScreen=!1,!c.os.android){
var n=1*e.videoCurrTime;
n=-1===n?0/0:n;
var a=i.__getDuration();
parseInt(a,10)===parseInt(n,10)||n>a?i.videoEnd():i.play4outer(n,{
triggerEvent:!1
}),i.onFullScreenChange({
state:!1,
type:"jsapi"
});
}
break;
}
}
}
}));
}catch(e){
d.info("videoplayer jsapi ExitFullPage error:"+e);
}
}
function n(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function a(){
var e=n();
return e?document[e]:!1;
}
function s(e,t){
t?(e.setAttribute("muted",!0),e.muted=!0):(e.removeAttribute("muted"),e.muted=!1);
}
function r(){
if(a())try{
for(var e in l.__MpPlayers){
var t=l.__MpPlayers[e];
if(t.hasBeginPlay()&&t.isPlay()){
t._useWcSlPlayer()||(t.pause4outer(),I.visibilityPausePlayer=t);
break;
}
}
}catch(i){}else{
var o=I.visibilityPausePlayer;
o&&!o._useWcSlPlayer()&&o.hasBeginPlay()&&!o.isEnd()&&(o.play4outer(),I.visibilityPausePlayer=null);
}
}
var l=window.withoutIframe?window:window.parent.window;
e("page/pages/video_new.css"),e("biz_common/utils/string/html.js"),e("biz_wap/zepto/zepto.js"),
e("biz_wap/zepto/event.js"),e("biz_wap/zepto/touch.js");
var d=e("biz_wap/jsapi/log.js"),_=e("biz_common/dom/event.js"),u=e("new_video/player.html.js"),c=e("biz_wap/utils/device.js"),h=e("biz_wap/utils/mmversion.js"),p=e("new_video/ctl.js"),g=e("biz_common/tmpl.js"),f=e(window.withoutIframe?"appmsg/without_iframe/iframe_communicate.js":"pages/iframe_communicate.js"),v=e("a/a_utils.js"),m=e("biz_common/utils/url/parse.js"),y=e("pages/version4video.js"),w=e("biz_wap/utils/wapsdk.js"),S=e("biz_common/base64.js"),T=e("biz_wap/jsapi/core.js"),b=e("new_video/plugin/util.js"),P=e("biz_wap/utils/jsmonitor_report.js"),j=e("common/utils.js"),C=e("biz_wap/utils/ajax.js"),k=e("appmsg/set_font_size.js"),B=18e4,F=3e3,I={
visibilityPausePlayer:null,
wcSlPlayerSupport:!1,
wcSlPlayerAndroidSafeAreaInsets:{
top:0,
left:0,
right:0,
bottom:0
},
hasAutoFlag:!1
};
try{
I._debug=l.location.href.indexOf("&_debug=1")>0;
}catch(x){
I._debug=!1;
}
var R=5e3;
t();
var E=h.getInner();
window.top===window&&h.isWechat&&!h.isInMiniProgram&&(c.os.iphone&&h.gtVersion("7.0.15",1)||c.os.android&&(E>"27001037"&&"27001060">E||E>="27001100"))&&(I.wcSlPlayerSupport=!0,
console.log("support wcslplayer"),c.os.iphone&&T.invoke("handleVideoAction",{
action:"insertSameLayerVideo"
},function(e){
"same layer switch is closed"===e.err_desc&&(P.setSum(221515,13,1),console.log("support wcslplayer but switch is closed"));
})),c.os.android&&T.invoke("handleDeviceInfo",{
action:"getSafeAreaInsets"
},function(e){
console.log("getSafeAreaInsets for wcslplayer",e),-1!==e.err_msg.indexOf(":ok")&&(I.wcSlPlayerAndroidSafeAreaInsets.top=e.top,
I.wcSlPlayerAndroidSafeAreaInsets.left=e.left,I.wcSlPlayerAndroidSafeAreaInsets.right=window.screen.width-e.right,
I.wcSlPlayerAndroidSafeAreaInsets.bottom=window.screen.height-e.bottom);
});
var M=function(e){
I._debug&&console.log(e);
},W=(navigator.userAgent,function(){
return!0;
}()),D=function(){
return!!c.browser.M1;
}(),N=function(e,t){
var i=document.createElement("div");
return e in i.style?(i.style[e]=t,i.style[e]===t):!1;
},L=function(e){
var t=0,i=0,o=0;
return.5>e&&(e=0),e=Math.ceil(e),t=Math.floor(e/3600),i=Math.floor((e-3600*t)/60),
o=e-3600*t-60*i,0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>i&&(i="0"+i),10>o&&(o="0"+o),
t+i+":"+o;
},V=!c.canSupportVideo,H=function(e){
var t=this,i=$(e.container);
"undefined"==typeof e.videoReportType&&(e.videoReportType=-1),e.width=e.width||300,
e.height=e.height||300,e.videoWidth=e.videoWidth||0,e.videoHeight=e.videoHeight||0,
e.duration=e.duration||0,e.formatDuration=L(e.duration),e.videoFit=!1,e.isVideoSharePage=e.isVideoSharePage||!1,
this.cgiData=e.cgiData||window.cgiData;
var o={
needToFit:!1,
supportObjectFit:!1,
os:c.os
};
if(e.width&&e.height&&e.videoWidth&&e.videoHeight){
var n=Math.abs(e.width/e.height-e.videoWidth/e.videoHeight);
.1>=n&&(o.needToFit=!0,N("objectFit","fill")&&(o.supportObjectFit=!0,e.videoFit=!0));
}
if(e.ratio=e.ratio||e.width/e.height,e.autoplay=!!e.autoplay||!1,e.flow=e.flow&&parseFloat(e.flow)||0,
this.opt=e,this.id=e.id=+new Date+"_"+Math.floor(Math.random()*Math.floor(+new Date)),
this.opt.jsapiFullScreen!==!0&&(this.opt.jsapiFullScreen=!1),this.opt.canShareVideo!==!0&&(this.opt.canShareVideo=!1),
this.opt.pauseShowControll!==!0&&(this.opt.pauseShowControll=!1),this.__iosPreloadPause=!1,
this.__iosPreloadPlayFlag=!1,this.__iosIsRealPreload=!1,this.__forcePause=!1,this.__hasFuncControllBar=!0,
this.__dragTimes=[],this.__play_total_time=0,this.__last_playtime=0,this.__always_hide_loading=e.always_hide_loading||!1,
this.__last_loadingtime=0,this.__loadingCountFlag=null,this.__loadingCountFlagAuto=null,
this.__userplaytime=!1,this._playingBufferingStartTime=null,this._g={
oriSrc:this.opt.src,
timeupdateCacheCount:3,
serialTimeupdateCache:[],
resetShowingLoadingTimeoutId:null,
showingLoadingTimeoutId:null,
statusDefine:{
init:1,
play:1,
pause:1,
loading:1,
end:1,
error:1
},
subStatusDefine:{
init:1,
play:1,
playing:1,
waiting:1,
stalled:1,
seeking:1,
seeked:1,
preload:1,
resolutionchange:1
},
status:"init",
subStatus:"init",
triggerTimeupdateLog:!0,
isUserPause:!1,
pauseNetType:null,
hasReportBeginPlay:!1,
coverBase64:"",
loadingCoverBase64:!1,
touchForwarding:!1,
jsapiFullScreenId:null,
jsapiFullScreenErrCnt:0,
jsapiFullScreenErrLimit:2,
iosPreloadTmpPlay:!1,
fallbackFromWcSlVideoToH5Player:!1,
playbackRateBtnInfoId:e.playbackRateBtnInfoDefaultId
},e._mustHideFullScreen=D,e.display=e.autoHide?"none":"block",e.ad_muted_btn=e.ad_muted_btn||!1,
e.videoCrossOrigin=e.jsapiFullScreen&&c.os.ios?!0:!1,j.__useWcSlPlayer=e._initUseWcSlPlayer=this._useWcSlPlayer(),
console.log("use wcslplayer",j.__useWcSlPlayer),this._useWcSlPlayer()){
if(e.resolutionInfo&&e.resolutionInfo.length){
for(var a=0;a<e.resolutionInfo.length;a++){
var s=e.resolutionInfo[a];
if(s.src===e.src){
s.initCurrent=!0,e.initResolutionName=s.name;
break;
}
}
e.initResolutionName||(e.initResolutionName="清晰度");
}
if(e.playbackRateInfo&&e.playbackRateInfo.length){
e.width>e.height&&(e.playbackRateInfo=[].concat(e.playbackRateInfo),e.playbackRateInfo.reverse());
for(var a=0;a<e.playbackRateInfo.length;a++){
var s=e.playbackRateInfo[a];
if(1===s.rate){
s.initCurrent=!0,e.initPlaybackRateName=s.name;
break;
}
}
e.initPlaybackRateName||(e.initPlaybackRateName="倍速");
}
}
e.extinfo&&e.extinfo.vid&&(e.src=e.src+"&vid="+e.extinfo.vid+"&format_id="+e.formatId);
var r=g.tmpl(u,e,!1);
i.append(r);
var d=this.container=$("#js_mpvedio_"+this.id);
this._useWcSlPlayer()?(this.$video=d.find("wx-open-video"),this.__initFullProfile(),
P.setSum(221515,1,1),P.setSum(221515,c.os.android?6:5,1)):this.$video=d.find("video");
var _=this.video=this.$video[0];
this.__initData(),this.__initVideo();
var h=e.src;
if(!h)return this.changeStatus({
status:"error",
subStatus:"5"
}),void this.__triggerOutside("error",{
errorcode:5
});
if(this._useWcSlPlayer()||_.setAttribute("origin_src",h),V)return d.find(".js_btn_play").attr("href",h).show(),
this.__loadedHandler(),void this.__bindBtnEvent();
l&&!l.lastNetworkType&&window.networkType&&window.simType&&(l.lastNetworkType={
networkType:window.networkType,
simType:window.simType
});
var p=e.plugins||[];
this._blockPlugin={};
for(var a=0,f=p.length;f>a;++a){
var v=p[a];
v.setPlayer(this),!!v.init&&v.init();
}
this.plugins=p,this._trigger("afterCheckVideoFit",o),this._trigger("loading",e),
this.__defineEvent(),this.__bindBtnEvent(),this.__bindVideoEvent(),this.__preventFontSizeChange(),
this.__addPostmessageListener();
try{
l.__MpPlayers||(l.__MpPlayers={}),l.__MpPlayers[this.id]=this;
}catch(m){}
this.opt.canShareVideo&&setTimeout(function(){
t.getCoverBase64({
callback:function(){}
});
},1e3);
};
return $.extend(H.prototype,{
_jsapiLog:function(e){
var t=["vid:","videosrc:"];
this.opt&&this.opt.extinfo&&this.opt.extinfo.vid&&(t[0]+=this.opt.extinfo.vid),this.$video&&this.$video[0]&&this.$video[0].src&&(t[1]+=this.$video[0].src),
d.info("videoplayer "+e+";"+t.join(";"));
},
__triggerOutside:function(){
var e=this.opt,t=arguments,i=t[0],o=this,n=this.video;
if(i){
i=i.substr(0,1).toUpperCase()+i.substr(1);
var a=e["on"+i];
"function"==typeof a&&a.apply(this,t),this._useWcSlPlayer()||"BeginPlay"!=i||null!=o.__replaySec&&0!=o.__replaySec||!c.os.ios||(n.currentTime=.1);
}
},
__errorHandler:function(){
this.video.removeAttribute("src");
},
__loadingHandler:function(e){
this.showLoading(),this._trigger("ready",e);
},
__readyHandler:function(e){
var t=this.opt.src;
y.proxyPreloadExper()&&y.proxyPreloadExper().isUsePreload&&this.setSrc(t),this._trigger("loaded",e);
},
__loadedHandler:function(e){
var t=document.getElementById("js_mp_video_container_"+this.opt.extinfo.vid);
return(e&&e.autoplay||this.opt.autoplay||(window.withoutIframe?!!t.getAttribute("__sec_open_auto_play__"):window.__auto_play__))&&y.device.inWechat?(window.withoutIframe?t.removeAttribute("__sec_open_auto_play__"):window.__auto_play__=!1,
this.videoCtlReport({
step:15
}),this._g.hasReportBeginPlay=!0,void this._trigger("readyBeginPlay",e)):void this._setBeginPlayStatus();
},
__readyBeginPlayHandler:function(e){
y.proxyPreloadExper()&&y.proxyPreloadExper().isUsePreload||this.dontReset||this.setSrc(this.opt.src),
this.dontReset&&(this.dontReset=!1),this._trigger("beginPlay",e);
},
__beginPlayHandler:function(e){
function t(e,t){
e.__firstPlayStart=+new Date,e.__userplaytime=!0,e._useWcSlPlayer()||(t.find(".js_video_poster").show(),
e.showControllBar()),e.showCover(),t.find(".js_video_play_controll").hide(),e.__hasBeginPlay=!0,
e.showLoading("firstTime"),e.opt.flowNotice&&e.__firstLoadedFlowNoticeJudge();
}
V&&(location.href=this.opt.src);
var i=this.container,o=this,n=this.video,a=void 0;
setTimeout(function(){
try{
o.__continueSec&&(o.__replaySec=o.__continueSec,o.__continueSec=null),o._jsapiLog("set continue:"+o.__replaySec),
o._useWcSlPlayer()?(e&&e.replay?(o.__canplay=!0,n.currentTime=0,setTimeout(function(){
o.showControllBar(),o.__hideControllTimeout();
},500)):o.opt.autoplay||(o.__canplay=!0,n.play()),t(o,i)):(a=n.play(),"object"===("undefined"==typeof a?"undefined":_typeof(a))?a.then(function(){
t(o,i);
}).catch(function(e){
("AbortError"===e.name||"NotAllowedError"===e.name)&&(o._setBeginPlayStatus(),o.dontReset=!0,
P.setSum(114217,16,1));
}):t(o,i));
}catch(s){
o._jsapiLog("play error");
}
},1);
},
__replayHandler:function(){
if(this.videoCtlReport({
step:9
}),!this._useWcSlPlayer()){
var e=this.video.muted;
this.setSrc(this.src,this.video.preload,!0),this.triggerMuted(e);
}
this._afterReplay();
},
__endHandler:function(){
this.container.find(".js_btn_play_aria").data("status","3").removeClass("video_playing"),
this.container.find(".js_play_bar_wrapper").hide(),this.hideControllBar(),this.hideTouchForward(),
this._hidePlayControllBar(),this.__hasBeginPlay=!1,this.__canplay=!1,this.isInFullScreen()&&this.showWcSlFullEndExitBtn(),
this.__hideSubSettingTimeout();
},
__hideControllTimeoutCallback:function(){
return this.__onTouch?void this.__hideControllTimeout():void(this.isPlay()&&this.hideControllBar());
},
__touchVideoHandler:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(this.opt.blockTouchVideo||this.__onTouch||this.opt.pauseShowControll&&this.isPause()||this.__userplaytime)return!1;
if(!this.__canplay||this.isEnd()&&this.opt.hideControllBarAtEnd)return void this.hideControllBar();
var t=this.container.find(".js_controll");
e.isShow===!0||"none"==t.css("display")?this.showControllBar():this.hideControllBar();
var i=this.container.find(".js_video_flow");
"none"!==i.css("display")&&this._g.isUserPause===!1&&this.__hideFlowNotice(),this.__hideControllTimeout(),
this.__hideSubSettingTimeout();
},
__hideControllTimeout:function(){
var e=this;
this.__touchVideoTimeoutHandler&&clearTimeout(this.__touchVideoTimeoutHandler),this.__touchVideoTimeoutHandler=setTimeout(function(){
e.__hideControllTimeoutCallback();
},R);
},
__hideSubSettingTimeout:function(){
var e=this;
this._useWcSlPlayer()&&(this.__hideSubSettingTimeoutHandler&&clearTimeout(this.__hideSubSettingTimeoutHandler),
this.container.find(".js_sub_setting").addClass("hide"),this.__hideSubSettingTimeoutHandler=setTimeout(function(){
delete e.__hideSubSettingTimeoutHandler;
var t=e.container.find(".js_play_mode_select"),i=e.container.find(".js_playback_mode_select");
t.length&&"flex"===t.css("display")?e._trigger("resolutionChange",{
action:"hide"
}):i.length&&"flex"===i.css("display")&&e._trigger("rateChange",{
action:"hide"
}),e.container.find(".js_play_mode_select").css("display","none"),e.container.find(".js_playback_mode_select").css("display","none");
},500));
},
__initData:function(){
this.log={
hasended:0,
lastsec:0,
duration:0,
video_error:0
},this.__hasBeginPlay=!1,this.__canplay=!1,this._playingBufferingStartTime=null,
this.__userplaytime=!1,this.__hasscroll=!1,this.__replaySec=null,this.__playQueue=[];
},
__initVideo:function(){
var e=this.opt,t=this.video;
t.addEventListener("contextmenu",function(e){
e.preventDefault();
},!1),t.hasAttribute("controls")&&t.removeAttribute("controls"),this._useWcSlPlayer()||(t.setAttribute("webkit-playsinline","isiPhoneShowPlaysinline"),
t.setAttribute("playsinline","isiPhoneShowPlaysinline")),e.loop&&t.setAttribute("loop",e.loop),
e.muted&&s(t,!0),this.$video.off("loadedmetadata durationchange"),this.__hasVideoDurationchange=!1;
},
__initFullProfile:function(){
var e=this,t=this.opt,i=this.container.find(".js_video_fullscreen_profile");
_.tap(i.find(".js_video_fullscreen_profile_exit")[0],function(){
e.exitFullScreen();
}),1!==window.isprofileblock&&_.tap(i.find(".js_video_fullscreen_go_profile")[0],function(){
c.os.iphone&&e.isInFullScreen()&&e.opt.width>e.opt.height?(e.exitFullScreen(),setTimeout(function(){
T.invoke("profile",{
username:t.bizUserName,
tabType:2
},function(){
e._trigger("profileJump",{
scene:"fullscreen"
});
});
},250)):T.invoke("profile",{
username:t.bizUserName,
tabType:2
},function(){
e._trigger("profileJump",{
scene:"fullscreen"
});
});
}),t.videoTitle&&i.find(".js_video_fullscreen_title").text(t.videoTitle),t.headImgUrl&&i.find(".js_video_fullscreen_head").css("background","url("+t.headImgUrl+") no-repeat center / cover;"),
t.bizNickName&&i.find(".js_video_fullscreen_name").text(t.bizNickName);
},
__getDuration:function(){
var e=this.opt,t=this.video,i=t?t.duration:null;
return i&&1!=i?i:e.duration;
},
__videoDurationchange:function(){
var e=this;
if(!e.__hasVideoDurationchange){
var t=this.video,i=this.opt,o=this.container;
if(1/0!=t.duration&&t.duration>0&&1!=t.duration)e.duration=t.duration,e.__hasVideoDurationchange=!0;else{
if(!i.duration)return!1;
e.duration=i.duration,e.__hasVideoDurationchange=!0;
}
e.log.duration=e.duration,e.duration>>=0,o.find(".js_total_time").text(L(e.duration)),
this.__hasFuncControllBar&&o.find(".js_progress_bar").show();
var n=+new Date,a=n-e.log.loadwait_start;
e.log.loadwait=a,e._trigger("durationchange",{
loadwait:a
});
}
},
__startCountTime:function(){
var e=this,t=this.video;
t&&null===e.__last_playtime&&(e.__last_playtime=t.currentTime);
},
__endCountTime:function(){
var e=this,t=this.video;
t&&t.currentTime>e.__last_playtime&&null!==e.__last_playtime&&(e.__play_total_time+=t.currentTime-e.__last_playtime,
e.__last_playtime=null);
},
__bindVideoEvent:function(){
var e=this.$video,t=this,i=this.container,o=i.find(".js_switch"),n=this.video;
e.off("timeupdate").on("timeupdate",function(){
if(t.__forcePause===!0)return void M(t.id+":timeupdate __forcePause return");
if(t.__hasBeginPlay&&!t.__canplay)return t.showLoading(),!1;
n=t.video,null!=t.__replaySec&&(M(t.id+":timeupdate __replaySec"),n.pause(),n.currentTime=t.__replaySec,
t.__last_playtime=t.__replaySec,n.play(),t.__replaySec=null),t.__videoDurationchange();
var e=n.currentTime;
if(e>0){
t.__startCountTime(),t._addSerialTimeupdate(),"loading"===t._g.status&&"seeking"===t._g.subStatus||!t._checkPlayBySerialTimeupdate()||(t.hideLoading(),
t._g.touchForwarding||t.hideTouchForward());
var i=t.__getDuration();
t.__onTouch||(t.__setControllBar(e/i),t.__setPlayTime(e>>0)),t.hideCover(),t._trigger("timeupdate",{
currentTime:e
}),t.afterFirstLoaded();
}
}),e.off("canplay").on("canplay",function(){
null!=t.__replaySec&&(n.currentTime=1*(1*t.__replaySec).toFixed(4),t.__last_playtime=t.__replaySec,
t.__replaySec=null),t.__canplay=!0,t._trigger("canplay");
}),e.off("ended").on("ended",function(){
M("player inner isend:"+t.isEnd()),t.isEnd()&&t.videoEnd();
}),e.off("emptied").on("emptied",function(){}),t.waitingHandlerTimer=null,e.off("stalled").on("stalled",function(){
if(this.__hasBeginPlay&&!t.waitingHandlerTimer){
t.changeStatus({
status:"loading",
subStatus:"stalled"
}),t.showLoading();
var e=n.src,i=n.readyState,o=n.error;
0!=i||o&&0!=o.code||(clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null,
t.showLoading(),t.showCover(),n.pause(),n.src=e,n.load(),n.play(),M(t.id+":stalled"));
}
}),e.on("seeked",function(){
t.__onTouch||t.opt.jsapiFullScreen&&t.__isInFullScreen||(t.changeStatus({
status:"loading",
subStatus:"seeked"
}),t.__isPauseBeforeSeek?t.hideLoading():n.play(),delete t.__isPauseBeforeSeek),
M("video seeked event");
}),e.off("seeking").on("seeking",function(){
M("seeking,__hasBeginPlay:"+t.__hasBeginPlay),t.__hasBeginPlay&&(t.changeStatus({
status:"loading",
subStatus:"seeking"
}),t.showLoading());
}),e.off("waiting").on("waiting",function(){
if(M("waiting,__hasBeginPlay:"+t.__hasBeginPlay),t.__hasBeginPlay){
t.changeStatus({
status:"loading",
subStatus:"waiting"
}),t.showLoading(),t._jsapiLog("waiting counting begin"),t.loadingCountFlag||clearTimeout(t.loadingCountFlag),
t.__last_loadingtime=n.currentTime,t.loadingCountFlag=setTimeout(function(){
if(n.currentTime===t.__last_loadingtime){
if(t._useWcSlPlayer())return void P.setSum(221515,c.os.android?15:14,1);
t.changeStatus({
status:"error",
subStatus:"6"
}),t.__triggerOutside("error",{
errorcode:6
});
}
},B),clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null;
var e=0;
try{
for(var i in l.__MpPlayers)if(l.__MpPlayers.hasOwnProperty(i)&&e++,e>1)break;
}catch(o){}
e>1&&t.__forcePause===!1&&(t.waitingHandlerTimer=setTimeout(function(){
if(t.__forcePause!==!0){
var e=n.error;
if(0==n.readyState&&(!e||0==e.code)){
clearTimeout(t.waitingHandlerTimer),t.waitingHandlerTimer=null;
var i=n.src;
t.showLoading(),t.showCover(),n.pause(),n.src=i,tryReload++,n.load(),n.play(),M(t.id+":waitingHandlerTimer");
}
}
},1e4)),I.hasAutoFlag?(t.__loadingCountFlagAuto||clearTimeout(t.__loadingCountFlagAuto),
t.__loadingCountFlagAuto=setTimeout(function(){
n.currentTime===t.__last_loadingtime&&t._trigger("waiting",{
action:"changeToAuto"
});
},F),t._trigger("waiting",{
action:"normalLoading"
})):t._trigger("waiting");
}
}),e.off("play playing").on("play playing",function(e){
return t.__forcePause===!0||t._g.iosPreloadTmpPlay?void M(t.id+":play playing __forcePause return"):(t.changeStatus({
status:"play",
subStatus:e.type
}),setTimeout(function(){
t.adVideoStatus="play";
},10),M(t.id+":play playing"),o.removeClass("switch_on"),o.addClass("switch_off"),
t._hidePlayControllBar(),t.__startCountTime(),t._trigger("play"),t._useWcSlPlayer()&&t.__canplay&&(t.hideLoading(),
c.os.android&&!t.__hasFixedAndroidWebviewControllerReinitBug&&(t.__hasFixedAndroidWebviewControllerReinitBug=!0,
t.__fixAndroidWebviewControllerReinitBug())),void(o.find(".js_btn_opr")[0].innerHTML="暂停"));
}),e.off("pause").on("pause",function(){
t._g.iosPreloadTmpPlay||(M(t.id+":video pause event"),t.changeStatus({
status:"pause",
subStatus:""
}),setTimeout(function(){
t.adVideoStatus="pause";
},10),o.addClass("switch_on"),o.removeClass("switch_off"),!t.__canplay||t.isEnd()||t.__onTouch?t._hidePlayControllBar():(t.hideControllBar(),
t._showPlayControllBar()),t.__endCountTime(),t._trigger("pause"),o.find(".js_btn_opr")[0].innerHTML="播放");
}),e.off("error").on("error",function(e){
if(t._useWcSlPlayer())return t.changeStatus({
status:"error",
subStatus:"3",
errorMsg:e.detail
}),P.setSum(221515,3,1),P.setSum(221515,c.os.android?10:9,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:Error",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
void t._trigger("error",{
errorcode:3,
error:e.detail
});
var i=void 0,o=void 0;
t.video.error&&(i=t.video.error.code,o=t.video.error.message),t.changeStatus({
status:"error",
subStatus:i||"",
errorMsg:o||""
});
var n="/mp/ad_video_report?action=report_video_play_error",a=encodeURIComponent(t.video.baseURI);
C({
type:"GET",
dataType:"json",
timeout:3e4,
url:n+"&errorCode="+i+"&videoUrl="+a+"&errorMsg="+o,
success:function(){},
error:function(){}
}),t._trigger("error",{
errorcode:i
});
}),e.off("webkitbeginfullscreen webkitendfullscreen webkitfullscreenchange mozfullscreenchange fullscreenchange").on("webkitbeginfullscreen webkitendfullscreen webkitfullscreenchange mozfullscreenchange fullscreenchange",function(e){
var i=void 0;
i=t._useWcSlPlayer()?e.detail.fullscreen:"webkitbeginfullscreen"==e.type?!0:"webkitendfullscreen"==e.type?!1:document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen,
t.onFullScreenChange({
state:i,
type:"h5"
});
}),this._useWcSlPlayer()&&(e.off("binderror").on("binderror",function(e){
t.__fallbackFromWcSlVideoToH5Player(),P.setSum(221515,4,1),P.setSum(221515,c.os.android?12:11,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&e.detail&&window.WX_BJ_REPORT.BadJs.report("WcSlPlayer:BindError",(window.__second_open__?"secopen:":"h5:")+JSON.stringify(e.detail)),
t._trigger("bindError",{
error:e.detail
});
}),e.off("resolutionchange").on("resolutionchange",function(){
t.changeStatus({
status:"loading",
subStatus:"resolutionchange"
});
var e=t.opt.resolutionInfo.filter(function(e){
return e.src===t.video.resolutionSrc;
})[0];
t._trigger("resolutionChange",{
action:"changed",
infoBefore:t.__resolutionInfoBeforeChange,
infoAfter:e
});
}),e.off("ratechange").on("ratechange",function(){
t._trigger("rateChange",{
action:"changed",
rateBefore:t.__playbackRateBeforeChange,
rateAfter:t.video.playbackRate
});
}),e.off("processstatechange").on("processstatechange",function(e){
t._trigger("processStateChange",{
event:e.detail.event,
playerType:e.detail.playerType,
timeStamp:e.detail.__timestamp,
data:e.detail
});
}));
},
__preventFontSizeChange:function(){
var e=this;
c.os.iphone?this.container.css("-webkit-text-size-adjust","none"):c.os.android?k.keepNormalFontSizeForAndroid(this.container[0]):c.os.ipad&&(k.isIPadOS13?k.onFontScaleChange(function(){
return k.setFontSize(e.container[0],1);
}):this.container.css("-webkit-text-size-adjust","none"));
},
__fixAndroidWebviewControllerReinitBug:function(){
var e=this;
c.os.android&&h.ltVersion("7.0.19")&&this._useWcSlPlayer()&&!function(){
var t=function(){
T.invoke("handleMPPageAction",{
action:"hasActivity"
},function(e){
e&&e.err_msg&&-1!==e.err_msg.indexOf(":ok")?++i>=10&&clearInterval(n):o.video&&(console.warn("handleMPPageAction:hasActivity check failed, pause video"),
d.info("handleMPPageAction:hasActivity check failed, pause video"),clearInterval(n),
o.video.pause(),P.setSum(221515,2,1));
});
},i=0,o=e,n=setInterval(t,1e3);
}();
},
__defineEvent:function(){
var e=this;
this._event={
progressBarMousemove:function(t){
e.__hasFuncControllBar&&e.__onTouch&&e._pointerMoveHandler({
x:t.pageX||t.clientX,
y:t.pageY||t.clientY,
e:t
});
},
progressBarMouseup:function(t){
return e.__hasFuncControllBar&&e.__onTouch?(e._pointerUpHandler({
x:t.pageX||t.clientX,
y:t.pageY||t.clientY,
e:t
}),!1):void 0;
},
progressBarTouchmove:function(t){
if(e.__hasFuncControllBar&&e.__onTouch){
var i=t.changedTouches[0];
e._pointerMoveHandler({
x:i.pageX,
y:i.pageY,
e:t
});
}
},
progressBarTouchend:function(t){
if(e.__hasFuncControllBar&&e.__onTouch){
var i=t.changedTouches[0];
return e._pointerUpHandler({
x:i.pageX,
y:i.pageY,
e:t
}),!1;
}
},
broadcastPlay:function(t){
t.id!==e.id&&e.__hasBeginPlay&&!e.isEnd()&&e.pause4outer();
}
};
},
__addPostmessageListener:function(){
f.addListener({
type:"broadcastPlay",
func:this._event.broadcastPlay,
vid:this.opt.extinfo.vid
});
},
__bindBtnEvent:function(){
var e=this,t=this,i=this.opt,o=this.container,n=(o.find(".js_video_play_controll"),
o.find(".js_btn_play")),a=o.find(".js_btn_play_aria"),s=o.find(".js_video_poster"),r=o.find(".js_switch"),l=o.find(".js_progress_bar"),d=o.find(".js_controll"),u=o.find(".js_page_video"),p=o.find(".js_full_mask"),g=(o.find(".js_video_mask"),
o.find(".js_video_pause_controll")),f=o.find(".js_full_screen_control"),v=o.find(".js_share_btn"),m=o.find(".js_sub_setting");
if(this.opt.canShareVideo&&(v[0]&&_.on(v[0],"click",function(){
t.callJsapiShareVideo({
action:"shareEmbedMpVideo"
});
}),_.longtap(this.container[0],function(e){
d[0].contains(e.target)||e.target===d[0]||l[0].contains(e.target)||e.target===l[0]||t.callJsapiShareVideo({
action:"longPressEmbedMpVideo"
});
})),_.on(g[0],"tap",".js_btn_pause",function(){
t.play4outer();
}),t._useWcSlPlayer()){
var y=o.find(".js_video_fullscreen_menu_more");
((c.os.iphone||c.os.ipad)&&h.isWechat&&h.gtVersion("7.0.16",1)||c.os.android&&h.isWechat&&h.gtVersion("7.0.18",1))&&(y.css("display",""),
_.tap(y[0],function(){
t.isInFullScreen()&&(T.invoke("handleMPPageAction",{
action:"showMenu",
forbidFlag:3
},function(){}),console.log("======== _trigger showMenu"),t._trigger("showMenu",{
fullScreen:1
}));
}));
}
var w=void 0,S=void 0,b=0,j=0,C=0,k=t.__getDuration(),B=0,F=0,x=1,R=window.user_uin||0,E=0!==R&&Math.floor(R/100)%1e3<x,M=!1,D=void 0,N=void 0,L=0,V=!0,H=!1,A=!1,z=null,O=this.opt.width/this.opt.height,U=function(e,i){
return h.isIOS&&(!t.isInFullScreen()&&(30>e||e>window.innerWidth-30)||t.isInFullScreen()&&(50>i||i>window.innerHeight-50))?!0:!1;
};
u.on("touchstart",function(e){
1==e.targetTouches.length&&(t.isEnd()||$(e.changedTouches[0].target).parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length||i.blockTouchVideo||(z&&(clearTimeout(z),
z=null),D=w=new Date,N=S={
x:e.targetTouches[0].clientX,
y:e.targetTouches[0].clientY
},t._g.touchForwarding=!1,A=!0,V=!0,F=B=t.getCurTime()));
}),u.on("touchmove",function(e){
if(!t.opt.isTLpage&&V&&1==e.targetTouches.length&&!t.isEnd()&&t.__hasBeginPlay&&!$(e.changedTouches[0].target).parents("div.js_progress_bar,div.js_controll,div.js_video_fullscreen_profile").length&&!U(e.targetTouches[0].clientX,e.targetTouches[0].clientY)&&!i.blockTouchVideo){
var o=new Date,n=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,s=Math.abs(n-N.x),r=Math.abs(a-N.y);
if(H||A&&(r>=20||r>s))return t._useWcSlPlayer()&&t.isInFullScreen()?!function(){
H=!0,t._g.touchForwarding=!0;
var i=(O>1?Math.max:Math.min)(window.screen.height,window.screen.width),o=parseInt(2*(S.y-a)/i*100);
o&&(o/=100,N.x<i/2?(o=t.video.brightness+o,t.video.brightness=o,t.__setUpperBar("亮度",o),
t.__setBrightnessChangeEventEmitTimer&&clearTimeout(t.__setBrightnessChangeEventEmitTimer),
t.__setBrightnessChangeEventEmitTimer=setTimeout(function(){
t.__setBrightnessChangeEventEmitTimer=null,t._trigger("brightnessChange",{
value:o,
touch:!0
});
},1e3)):(o=t.video.volume+o,t.video.volume=o,t.__setUpperBar("音量",o),t.__setVolumeChangeEventEmitTimer&&clearTimeout(t.__setVolumeChangeEventEmitTimer),
t.__setVolumeChangeEventEmitTimer=setTimeout(function(){
t.__setVolumeChangeEventEmitTimer=null,t._trigger("volumeChange",{
value:o,
touch:!0
});
},1e3)),S={
x:n,
y:a
},e.preventDefault());
}():V=!1,void(A=!1);
if(e.preventDefault(),!(20>s)){
z&&(clearTimeout(z),z=null),A=!1,t._g.touchForwarding=!0;
var l=o-w,d=n-S.x,_=a-S.y,u=Math.sqrt(Math.pow(d,2)+Math.pow(_,2))+C,c=Math.min(Math.ceil(u/l),6);
j=Math.floor(.1*u+.2*c*c*c)*Math.ceil(k/500),C=0==j?u:0,0>d&&(j=-j);
var h=180*Math.atan2(_,d)/Math.PI;
t._g.touchForwarding||(h>=-30&&30>=h&&++b,(h>=150&&180>=h||h>=-180&&-150>=h)&&--b,
(b>=4||-4>=b)&&(5>=u?b=0:(L=Math.max(L,c),t._g.touchForwarding=!0))),t._g.touchForwarding&&(B+=j,
0>B&&(B=0),B>k&&(B=1*k),t.__setForwardBar(B)),S={
x:n,
y:a
},w=o;
}
}
}),u.on("touchend",function(e){
if(t._g.touchForwarding&&!H){
if(z=setTimeout(function(){
t.play(B);
},0),E&&(P.setSum(28307,29,1),!M)){
var i=(new Date,{
x:e.changedTouches[0].clientX,
y:e.changedTouches[0].clientY
}),o=i.x-N.x,n=i.y-N.y,a=parseInt(Math.sqrt(Math.pow(o,2)+Math.pow(n,2))),s=parseInt(180*Math.atan2(n,o)/Math.PI);
s>=-30&&30>=s||s>=150&&180>=s||s>=-180&&-150>=s||P.setSum(28307,35,1),P.setSum(28307,31,1),
P.setSum(28307,33,a),P.setSum(28307,34,L),M=!0;
}
t._seekReport(),t._trigger("handDragComplete",{
playTime:B,
startDragVideoTime:F
}),e.preventDefault();
}
t.hideTouchForward(),j=0,A=!1,t._g.touchForwarding=!1,V=!0,H=!1,b=0;
}),u.on("touchmove MSPointerMove pointermove mousemove",function(e){
t.isInFullScreen()&&!W&&e.preventDefault();
}),_.tap(u[0],function(e){
if(e.target!==d[0]&&!d[0].contains(e.target)&&e.target!==v[0]&&!(t._useWcSlPlayer()&&(e.target===m[0]||m[0].contains(e.target))||t.isEnd()||t._g.touchForwarding)){
if(t.__last_touchvideo&&Date.now()-t.__last_touchvideo<300)return t.playSwitch(!0),
void delete t.__last_touchvideo;
t.__last_touchvideo=Date.now(),e.preventDefault(),t.isPause()?t._useWcSlPlayer()&&(t.showControllBar(),
t.__hideSubSettingTimeout()):t._trigger("touchVideo");
}
}),_.tap(p[0],function(){
t.isEnd()||t._trigger("touchVideo");
}),p.on("touchmove MSPointerMove pointermove mousemove",function(e){
t.isInFullScreen()&&!W&&e.preventDefault();
}),_.on(a[0],"click",function(){
var e=$(a[0]),i=1*e.data("status");
0==i?(e.addClass("video_playing").data("status","1"),t.firstPlay()):1==i?(e.removeClass("video_playing").data("status","2"),
t.playSwitch(void 0,!1)):2==i?(e.addClass("video_playing").data("status","1"),t.playSwitch()):3==i&&(e.addClass("video_playing").data("status","1"),
t._trigger("ariaReplay"));
});
var J=function(e){
e.stopPropagation(),t.firstPlay();
};
(h.isIOS||h.isAndroid)&&_.on(n[0],"click",J),_.tap(n[0],function(e){
e.preventDefault(),J(e);
});
var X=function(){
t.playSwitch();
};
(h.isIOS||h.isAndroid)&&_.on(r[0],"click",X),_.tap(r[0],function(e){
e.preventDefault(),X(e);
}),t.__onTouch=!1,l.on("mousedown",function(e){
t.__hasFuncControllBar&&(d.off("mousemove",t._event.progressBarMousemove).on("mousemove",t._event.progressBarMousemove),
s.off("mousemove",t._event.progressBarMousemove).on("mousemove",t._event.progressBarMousemove),
$(document.body).off("mouseup").on("mouseup",t._event.progressBarMouseup),t._pointerDownHandler({
x:e.pageX||e.clientX,
y:e.pageY||e.clientY,
e:e
}));
}),l.on("touchstart",function(e){
if(t.__hasFuncControllBar){
l.off("touchmove",t._event.progressBarTouchmove).on("touchmove",t._event.progressBarTouchmove),
l.off("touchend",t._event.progressBarTouchend).on("touchend",t._event.progressBarTouchend);
var i=e.changedTouches[0];
t._pointerDownHandler({
e:e,
x:i.pageX,
y:i.pageY
});
}
});
var Y=function(e){
return t._useWcSlPlayer()?void(t.isInFullScreen()?t.exitFullScreen():t.enterFullScreen()):(t.isInFullScreen()?W&&t.exitFullScreen():W&&(P.setSum(28307,56,1),
t.enterFullScreen()),e.preventDefault(),!1);
};
(h.isIOS||h.isAndroid)&&_.on(f[0],"click",Y),_.tap(f[0],function(e){
e.preventDefault(),Y(e);
}),this._useWcSlPlayer()&&!function(){
var i=o.find(".js_play_mode_select"),n=o.find(".js_playback_mode_select"),a=o.find(".js_playback_mode_change");
if(e.opt.resolutionInfo&&e.opt.resolutionInfo.length&&!function(){
var a=o.find(".js_play_mode_change");
_.tap(a[0],function(){
t.hideControllBar(),"flex"!==i.css("display")&&(t.__hideSubSettingTimeoutHandler&&clearTimeout(t.__hideSubSettingTimeoutHandler),
m.removeClass("hide"),i.css("display","flex"),n.length&&"flex"===n.css("display")&&n.css("display","none"),
t._trigger("resolutionChange",{
action:"show"
}));
});
for(var s=function(n){
var s=o.find(".js_resolution_"+n);
if(e.opt.resolutionInfo[n].src.indexOf("m3u8")>-1){
I.hasAutoFlag=!0;
var r=$(".js_auto_change_tip")[0];
_.tap(r,function(){
t.hideControllBar(),t._setResolution(n),$(".js_auto_change_tip")[0].style.display="none",
a.text(s.text()),i.find(".video_full-screen__sub-setting__item").removeClass("current"),
s.addClass("current"),t._trigger("resolutionChange",{
action:"select"
}),t.isPause()&&t.showControllBar();
});
}
_.tap(s[0],function(){
t._setResolution(n),t.__hideSubSettingTimeout(),i.find(".video_full-screen__sub-setting__item").removeClass("current"),
a.text(s.text()),s.addClass("current"),t._trigger("resolutionChange",{
action:"select"
}),t.isPause()&&t.showControllBar();
});
},r=0;r<e.opt.resolutionInfo.length;r++)s(r);
}(),_.tap(a[0],function(){
if(t.__isInFullScreen)t.hideControllBar(),"flex"!==n.css("display")&&(t.__hideSubSettingTimeoutHandler&&clearTimeout(t.__hideSubSettingTimeoutHandler),
m.removeClass("hide"),n.css("display","flex"),i.length&&"flex"===i.css("display")&&i.css("display","none"),
t._trigger("rateChange",{
action:"show"
}));else{
var e=t.opt.playbackRateInfo,o=t._g.playbackRateBtnInfoId;
t.video.playbackRate<e[t.opt.playbackRateBtnInfoDefaultId].rate||o>=e.length-1||0>=o?o=t.opt.playbackRateBtnInfoDefaultId:t.opt.width>t.opt.height?o--:o++;
var a=e[o].rate;
t._g.playbackRateBtnInfoId=o,t.showControllBar(),t.__hideControllTimeout(),t._trigger("rateChange",{
action:"show"
}),t._setPlaybackRate(a),t._trigger("rateChange",{
action:"select"
}),t._changePlaybackRateBtn(a);
}
}),e.opt.playbackRateInfo&&e.opt.playbackRateInfo.length)for(var s=function(e){
var i=o.find(".js_playback_"+e);
_.tap(i[0],function(){
var i=t.opt.playbackRateInfo[e].rate;
t._setPlaybackRate(i),t.__hideSubSettingTimeout(),t._changePlaybackRateList(i,e),
t._trigger("rateChange",{
action:"select"
}),t.isPause()&&t.showControllBar();
});
},r=0;r<e.opt.playbackRateInfo.length;r++)s(r);
}();
},
firstPlay:function(){
function e(){
if(V)return location.href=t.opt.src,!1;
t.changeStatus({
status:"loading",
subStatus:"preload"
});
var e=2;
t._g.hasReportBeginPlay?e=9:t.cgiData&&"0"==t.cgiData.media_source&&(e=11),t.videoCtlReport({
step:e
}),t._g.hasReportBeginPlay=!0,t._trigger("readyBeginPlay");
}
var t=this,i=t.opt.canMePlay;
"function"==typeof i?i(e):e();
},
hideTouchForward:function(){
this.container.find(".js_forward").addClass("none");
},
playSwitch:function(e,t){
this.isPlay()?(e||this.videoCtlReport({
step:12
}),this.pause4outer({
doubleTap:e,
triggerEvent:t
})):this.play4outer(0/0,{
doubleTap:e
});
},
__firstLoadedFlowNoticeJudge:function(){
if(y.device.inWechat&&l.lastNetworkType&&l.lastNetworkType.networkType&&l.lastNetworkType.simType&&b.isMobileNetwork(l.lastNetworkType.networkType)&&1!==l.lastNetworkType.simType){
var e=void 0;
e=this.opt.flow<100&&this.opt.flow>0?b.isVideoNeedFlowNotice(this.opt.flow,1):b.isVideoNeedFlowNotice(this.opt.flow,5),
e&&(this.opt.flow<100&&this.opt.flow>0?this.__showFlowNotice_1():this.__showFlowNotice_2(this.opt.flow));
}
},
__showFlowNotice_1:function(){
this.videoCtlReport({
step:16,
noticeType:1
}),this._trigger("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:1
}),this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null);
var e=this.container.find(".js_video_flow").removeClass("flow_fade_out");
this.container.find(".js_flow_notice_1").show(),this.container.find(".js_flow_notice_2").hide(),
e.show(),e.addClass("flow_fade_out");
},
__showFlowNotice_2:function(e){
this.videoCtlReport({
step:16,
noticeType:2
}),this._trigger("flowNotice",{
flow:parseInt(1024*this.opt.flow),
noticeType:2
}),this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null),
this.container.find(".js_flow_notice_2").show(),this.container.find(".js_flow_notice_1").hide(),
this.container.find(".js_video_flow_num").html(e+"M"),this.container.find(".js_video_flow").removeClass("flow_fade_out").show(),
this.container.find(".js_video_flow").addClass("flow_fade_out");
},
__hideFlowNotice:function(){
this.__flowNoticeTimer&&(clearTimeout(this.__flowNoticeTimer),this.__flowNoticeTimer=null),
this.container.find(".js_video_flow").hide();
},
_pointerDownHandler:function(e){
this.__onTouch=!0,this.showControllBar(),this.container.find(".js_progress_bar").addClass("wrp_progress__draging"),
this.__isPauseBeforeSeek=this.isPause(),this.progressBarSeekData={
x1:e.x,
y1:e.y,
startTime:this.video.currentTime
},this.pause(),e.e.preventDefault();
},
_pointerMoveHandler:function(e){
var t=this.container.find(".js_played_bar"),i=this.container.find(".js_progress_bar");
this.__onTouch=!0,this.__has_drag=!0,this.progressBarSeekData.x2=e.x,this.progressBarSeekData.y2=e.y;
var o=t.offset(),n=i.width(),a=(e.x-o.left)/n,s=this.__getDuration(),r=1*(s*a).toFixed(4);
r>s&&(r=s-1);
var l=!1;
"undefined"==typeof this.progressBarSeekData.dragTime&&(l=!0);
var d=Math.abs(1*r-1*this.progressBarSeekData.dragTime);
(l||d>=.5)&&(this.progressBarSeekData.dragTime=r,M("_pointerMoveHandler set currentTime, dragTime:"+this.progressBarSeekData.dragTime+" currentTime:"+this.video.currentTime),
this._useWcSlPlayer()||(this.video.currentTime=this.progressBarSeekData.dragTime),
this.__setPlayTime(this.progressBarSeekData.dragTime>>0)),this.__setControllBar(a),
e.e&&e.e.preventDefault();
},
_pointerUpHandler:function(e){
var t=this;
e.e.preventDefault(),this.container.find(".js_controll").off("mousemove",t._event.progressBarMousemove),
this.container.find(".js_video_poster").off("mousemove",t._event.progressBarMousemove),
$(document.body).off("mouseup",t._event.progressBarMouseup),this.container.find(".js_progress_bar").off("touchmove",t._event.progressBarTouchmove).off("touchend",t._event.progressBarTouchend),
this.container.find(".js_progress_bar").removeClass("wrp_progress__draging"),"undefined"==typeof this.progressBarSeekData.dragTime&&this._pointerMoveHandler({
x:e.x,
y:e.y
});
var i=this.progressBarSeekData.dragTime,o=this.progressBarSeekData.startTime;
i==this.video.currentTime&&(i-=.1),this.progressBarSeekData.startTime&&t.__dragTimes.push(Math.round(1e3*this.progressBarSeekData.startTime)+":#:"+Math.round(1e3*i)),
this.progressBarSeekData=null,M("_pointerUpHandler dragTime:"+i+" currentTime:"+this.video.currentTime),
setTimeout(function(){
t.__onTouch=!1,t.__forcePause=!1,t.isEnd()||(t.showLoading(),t.play(i),t._seekReport(),
t._trigger("barDragComplete",{
playTime:i,
startDragVideoTime:o
}));
},0),this.__hideControllTimeout();
},
_seekReport:function(){
this.videoCtlReport({
step:13
});
},
_hidePlayControllBar:function(){
this.container.find(".js_video_pause_controll").hide(),this._g.isUserPause&&y.device.inWechat&&("wifi"===this._g.pauseNetType&&b.isVideoNeedFlowNotice(this.opt.flow,3)||b.isNoneNetwork(this._g.pauseNetType)&&b.isVideoNeedFlowNotice(this.opt.flow,4)?this.__showFlowNotice_1():(this._g.isUserPause=!1,
this._g.pauseNetType=null)),this.__hideControllTimeout();
},
_showPlayControllBar:function(){
var e=this.container.find(".js_video_pause_controll");
this.isEnd()||(this.opt.pauseShowControll?(e.hide(),this.showControllBar()):(this.hideControllBar({
showShareBtn:!!this.opt.canShareVideo
}),e.show(),this.container.find(".js_video_play_controll").hide(),this.container.find(".js_play_bar_wrapper").hide()));
},
_addSerialTimeupdate:function(){
var e=this.video.currentTime,t=this._g.serialTimeupdateCache.length;
e>0&&(0==t||this._g.serialTimeupdateCache[t-1].currentTime!=e)&&(this._g.serialTimeupdateCache.length>=this._g.timeupdateCacheCount&&this._g.serialTimeupdateCache.shift(),
this._g.serialTimeupdateCache.push({
currentTime:e,
timeStamp:+new Date
}));
},
_checkPlayBySerialTimeupdate:function(){
if(this._g.serialTimeupdateCache.length<this._g.timeupdateCacheCount)return!1;
var e=this._g.serialTimeupdateCache.length,t=this._g.serialTimeupdateCache[e-1],i=this._g.serialTimeupdateCache[e-this._g.timeupdateCacheCount];
return t.timeStamp-i.timeStamp<2500?!0:!1;
},
_showPlayer:function(){
var e=this.container.find(".js_page_video");
e.show();
},
_hidePlayer:function(){
var e=this.container.find(".js_page_video");
e.hide();
},
__setPlayTime:function(e){
return this.opt.isTLpage?(this.container.find(".js_remain_time").text(L(this.opt.duration-e)),
void(this.container.find(".js_remain_time")[0].dataset.playDuration=e)):void this.container.find(".js_now_play_time").text(L(e));
},
__setControllBar:function(e){
e=Math.ceil(100*e),0>e&&(e=0),e>100&&(e=100),this.__setBufferBar(e),e+="%";
var t=this.container;
t.find(".js_played_bar").css({
width:e
}),t.find(".js_played_speed_cnt").css({
left:e
});
},
__setForwardBar:function(e){
var t=this.container,i=this.__getDuration(),o=e/i;
t.find(".js_forward").removeClass("none"),t.find(".js_forward_seperator").text("/"),
t.find(".js_forward_total_time").text(L(i>>0)),t.find(".js_forward_bar").css("width",100*o+"%"),
t.find(".js_forward_play_time").text(L(e));
},
__setUpperBar:function(e,t){
var i=this.container;
t=Math.min(t,1),t=Math.max(t,0),i.find(".js_forward").removeClass("none"),i.find(".js_forward_seperator").text(":"),
i.find(".js_forward_total_time").text(parseInt(100*t)+"%"),i.find(".js_forward_bar").css("width",100*t+"%"),
i.find(".js_forward_play_time").text(e);
},
__setBufferBar:function(e){
var t=this.container,i=this.video,o=this.__getDuration(),n=i.currentTime;
e=e||n/o;
var a=e;
this._useWcSlPlayer()&&i.buffered?a=i.buffered.percent:i.buffered&&i.buffered.length>0&&i.buffered.end&&o&&(a=i.buffered.end(0)/o,
a=Math.max(e,Math.ceil(parseInt(100*a))),a>98&&(a=100)),t.find(".js_buffer_bar").css({
width:a+"%"
});
},
__resetVideo:function(){
this.$video.remove();
var e=this.container,t=e.find(".js_video_poster");
if(this._useWcSlPlayer()){
var i=this.video.src,o=this.video.width,n=this.video.height;
t.append('<wx-open-video src="'+i+'" style="display:block;" width="'+o+'" height="'+n+'"fullscreen-after-orientation-change hide-ios-exit-btn-when-fullscreen></wx-open-video>'),
this.$video=t.find("wx-open-video");
}else t.append("<video></video>"),this.$video=t.find("video");
this.video=this.$video[0],this.__canplay=!1,this.__forcePause=!1,this.__initVideo(),
this.__iosPreloadPause=!1,this.__iosPreloadPlayFlag=!1,this.__bindVideoEvent();
},
__fallbackFromWcSlVideoToH5Player:function(){
console.error("fallback from wcslplayer to h5player",this.video.error),this._jsapiLog("fallback from wcslplayer to h5player: "+this.video.error),
T.invoke("handleDeviceInfo",{
action:"setOrientation",
orientation:0,
lock:!0
}),j.__useWcSlPlayer=!1,this._g.fallbackFromWcSlVideoToH5Player=!0,this.__resetVideo(),
this._trigger("loading"),this.container.find(".js_playback_mode_change").hide();
},
_trigger:function(e,t){
var i=this,o=this;
if("timeupdate"!==e||"timeupdate"===e&&this._g.triggerTimeupdateLog){
"timeupdate"===e&&(this._g.triggerTimeupdateLog=!1,setTimeout(function(){
i._g.triggerTimeupdateLog=!0;
},5e3));
try{
var n="",a=Object.prototype.toString.call(t);
n="[object String]"===a?t:"[object Object]"===a||"[object Array]"===a?JSON.stringify(t):"no params",
this._jsapiLog("trigger:"+e+";arg:"+n+";");
}catch(r){}
}
if("readyBeginPlay"==e&&(o.__iosPreloadPlayFlag=!1),"play"==e&&0==o.__iosPreloadPlayFlag){
if(o.__iosIsRealPreload&&s(o.video,!1),o.__forcePause=!1,o.opt.notPauseOtherVideoWhenPlay||f.broadcastMessage({
type:"broadcastPlay",
data:{
id:this.id
}
}),l.originalVideoAdFrames&&0!=l.originalVideoAdFrames.length)for(var d=0;d<l.originalVideoAdFrames.length;d++)l.originalVideoAdFrames[d].contentWindow.postMessage({
action:"pauseAd",
value:""
},"*");
v.postMessage(l,"onVideoPlayV2",{
vid:o.opt.extinfo.vid
});
}
var _=this.plugins,u=this._blockPlugin[e]||this._blockPlugin.all,c=0;
if(u&&"function"==typeof u.recv&&(c|=u.recv(e,t),1&c))return!1;
for(var d=0,h=_.length;h>d&&(c|=_[d].recv(e,t),!(2&c));++d);
if(!(this._blockInnerHandler||4&c)){
var p=this["__"+e+"Handler"];
p&&p.call(this,t);
}
8&c||this.__triggerOutside(e,t);
},
_setBlockInnerHandler:function(e){
this._blockInnerHandler=e;
},
_setBlockPlugin:function(e,t){
this._blockPlugin[e]=t;
},
_getContainer:function(){
return this.container;
},
_setCover:function(e,t){
this.container.find(".js_poster_cover").css(t),this.opt.cover=e,this._g.coverBase64="";
},
_removeCover:function(e){
e=e||{
"background-image":"none"
},this.container.find(".js_poster_cover").css(e);
},
_afterReplay:function(){
this.__hasBeginPlay=!0,this.__userplaytime=!0,this.__firstPlayStart=+new Date,this.showLoading(),
this.play(),this._trigger("afterReplay");
},
_useWcSlPlayer:function(){
return this.opt.useWcSlPlayer&&this.supportWcSlPlayer();
},
_setResolution:function(e){
var t=this;
if(this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length){
var i=this.opt.resolutionInfo[e];
this.video.resolutionSrc!==i.src&&(this.__resolutionInfoBeforeChange=this.opt.resolutionInfo.filter(function(e){
return e.src===t.video.resolutionSrc;
})[0],this.video.resolutionSrc=i.src);
}
},
_setPlaybackRate:function(e){
this._useWcSlPlayer()&&this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length&&this.video.playbackRate!==e&&(this.__playbackRateBeforeChange=this.video.playbackRate,
this.video.playbackRate=e);
},
_changePlaybackRateList:function(e,t){
var i=this,o=function(t){
i.container.find(".js_playback_"+t).hasClass("current")||(i.container.find(".js_playback_mode_select .video_full-screen__sub-setting__item").removeClass("current"),
i.container.find(".js_playback_"+t).addClass("current"),$("#play_setting_mode__rate").text(1===e?"倍速":i.opt.playbackRateInfo[t].name));
};
if(t)o(t);else if(this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length)for(var n=this.opt.playbackRateInfo,a=0;a<n.length;a++)if(e===n[a].rate){
o(a);
break;
}
},
_changePlaybackRateBtn:function(e,t){
var i=this,o=this.opt.playbackRateInfo,n=function(){
$("#play_setting_mode__rate").text(t&&1===e?"倍速":o[i._g.playbackRateBtnInfoId].name);
};
if(o[this._g.playbackRateBtnInfoId].rate===e)n();else for(var a=0;a<o.length;a++){
var s=o[a];
if(e===s.rate){
this._g.playbackRateBtnInfoId=a,n();
break;
}
}
},
setPlaybackRate:function(e){
this._useWcSlPlayer()&&(this._setPlaybackRate(e),this._changePlaybackRateBtn(e),
this._changePlaybackRateList(e));
},
setSrc:function(e,t,i){
var o=this,n=this.$video,a=(this.opt,this.video);
this.src=e,(!o.__iosPreloadPause||i)&&o.__initData(),o.__initVideo(),this.showCover(),
o.log.loadwait_start=+new Date,(!n.attr("src")||i)&&(n.attr("src",e+("&support_redirect=1&mmversion="+h.get())),
y.proxyPreloadExper()&&y.proxyPreloadExper().isUsePreload&&c.os.ios&&!o.opt.ad_muted_btn&&!function(){
var e=function t(){
o.__iosPreloadPause=!0;
var e=function i(){
o._g.iosPreloadTmpPlay=!1,a.removeEventListener("pause",i,!1);
};
a.addEventListener("pause",e,!1),a.pause(),o._trigger("ready",o.opt),a.removeEventListener("canplay",t,!1);
};
a.addEventListener("canplay",e,!1),4!==a.readyState&&(o._g.iosPreloadTmpPlay=!0,
o.__iosPreloadPlayFlag=!0,o.__iosIsRealPreload=!0,s(a,!0),a.play());
}()),a.preload=t||"metadata",n.on("loadedmetadata",function(){
if(o.__videoDurationchange(),o.__playQueue&&o.__playQueue.length>0){
var e=o.__playQueue[0].sec;
o.__playQueue=[],o.play(e);
}
}),a.duration>0&&1!=a.duration&&o.__videoDurationchange();
},
videoCtlReport:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this.opt.extinfo;
if(t){
var i={
step:e.step,
vid:t.vid,
hit_bizuin:t.hit_bizuin,
hit_vid:t.hit_vid,
traceid:t.pageplayer._getTraceId(),
orderid:t.pageplayer._getOrderid(),
ori_status:t.pageplayer._getOriStatus(),
type:this.opt.videoReportType,
fromid:t.pageplayer._getFromid()
};
e.step>=16?(i.remind_traffic_size=parseInt(1024*this.opt.flow),i.traffic_reminder_type=e.noticeType,
p.commReport(i)):p.report(i);
}
},
videoEnd:function(){
this.changeStatus({
status:"end",
subStatus:""
}),this.__endCountTime(),this._trigger("end");
},
replay:function(){
this.container.find(".js_video_play_controll").hide(),this._trigger("readyBeginPlay",{
replay:!0
}),this._trigger("replay"),this.hideWcSlFullEndExitBtn();
},
resetVideo:function(){
this.opt.autoReplay||(this.opt.autoplay=!1),this._useWcSlPlayer()||this.container.find(".js_video_poster").hide(),
this.showCover(),this.__resetVideo(),this.opt.isTLpage&&(this.container.find(".js_remain_time").text(this.opt.formatDuration),
this.container.find(".js_tlpage_loading").hide(),this.container.find(".js_tlpage_play").show()),
this._trigger("loading");
},
setSrcWithTime:function(e){
var t=this.video.currentTime;
this.resetVideo(),this.setSrc(e,!1,!0),this._jsapiLog("lastPlayTime:"+t),this.__continueSec=t;
},
changeStatus:function(e){
var t=this,i=this._g;
if(i.statusDefine[e.status]&&(!e.subStatus||i.subStatusDefine[e.subStatus]||"error"===e.status)&&(i.status!==e.status||i.subStatus!==e.subStatus)){
var o=0;
"end"===e.status||"error"===e.status?(this._playingBufferingStartTime=null,this.__userplaytime=!1):"pause"===e.status?this._playingBufferingStartTime=null:"play"===e.status&&"playing"===e.subStatus&&null!==this._playingBufferingStartTime?(o=+new Date-this._playingBufferingStartTime,
this._playingBufferingStartTime=null):!this.__hasBeginPlay||!this.__canplay||this.__userplaytime||"loading"!==e.status||"waiting"!==e.subStatus&&"seeking"!==e.subStatus||null!==this._playingBufferingStartTime||(this._playingBufferingStartTime=+new Date);
var n=i.status,a=i.subStatus;
i.status=e.status,i.subStatus=e.subStatus;
var s=["player statusChange, preStatus:",n,"; status:",i.status,"; preSubStatus:",a,"; subStatus:",i.subStatus,"; video_duration:",this.video?this.video.duration:"0","; getvinfo_duration:",this.opt.duration,"; current_time:",this.video?this.video.currentTime:"0","; play_total_time:",this.getPlayTotalTime()].join("");
this._jsapiLog(s),"error"===e.status&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&this.src&&(this._jsapiLog("client api get video begin: "+this.src),
T.invoke("request",{
url:this.src,
method:"GET",
data:{},
header:{
Range:"bytes=0-1"
}
},function(i){
t._jsapiLog("client api get video end: "+t.src);
var o=/^https?:\/\/\[/.test(t.src)?"Player ipv6: error":"Player ipv4: error",n="src: "+t.src+"; errorCode: "+e.subStatus+"; errorMsg: "+e.errorMsg+"; "+(window.__second_open__?"secopen":"h5")+"; res: "+JSON.stringify(i);
window.WX_BJ_REPORT.BadJs.report(o,n);
})),M(s),f.broadcastMessage({
type:"statusChange",
data:{
id:this.id,
preStatus:n,
preSubStatus:a,
status:i.status,
subStatus:i.subStatus
}
}),this._trigger("statusChange",{
currentTime:this.video.currentTime,
preStatus:n,
preSubStatus:a,
status:i.status,
subStatus:i.subStatus
}),o&&this._trigger("playingBufferingTime",{
bufferingTime:o
});
}
},
play:function(e){
var t=this.video,i=this;
if(!i.isEnd()){
if(this._useWcSlPlayer()&&null==t.readyState)return void("number"!=typeof this.opt.initialTime?this.__playQueue[0]={
sec:e
}:(this.__last_playtime=e,this.__setPlayTime(e)));
if(!t||0==t.readyState)return void(this.__playQueue[0]={
sec:e
});
e*=1;
try{
if(isNaN(e)||"number"!=typeof e)i.__canplay&&i.isPause()||0==t.currentTime?t.play().then(null,function(e){
console.log(e);
}):t.currentTime=0;else{
var o=this.__getDuration();
e>=o&&(e=o-1),0>e&&(e=0),e=1*(1*e).toFixed(4),i.__last_playtime=e,i.__setPlayTime(e),
t.currentTime==e?t.play().then(null,function(e){
console.log(e);
}):t.currentTime=e;
}
}catch(n){
0==t.currentTime?t.play():t.currentTime=0;
}
}
},
pause:function(){
var e=this.video;
e&&0==e.readyState||(this.__replaySec=null,this.waitingHandlerTimer&&(clearTimeout(this.waitingHandlerTimer),
this.waitingHandlerTimer=null),e.pause(),M(this.id+":pause function"));
},
getCoverBase64:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this._g.coverBase64?"function"==typeof t.callback&&t.callback({
cover64:this._g.coverBase64||""
}):!function(){
var i=e,o=new Image;
o.crossOrigin="anonymous",o.onload=function(){
this.onload=null,this.onerror=null;
try{
var e=this.naturalWidth||this.width,o=this.naturalHeight||this.height,n=document.createElement("canvas"),a=n.getContext("2d");
n.style.width=e+"px",n.width=e,n.style.height=o+"px",n.height=o,a.drawImage(this,0,0,e,o),
i._g.coverBase64=n.toDataURL("image/jpeg",1);
}catch(s){
this._jsapiLog("jsapi shareEmbedMpVideo error:"+s),i._g.coverBase64="";
}
"function"==typeof t.callback&&t.callback({
cover64:i._g.coverBase64
});
},o.onerror=function(){
this.onload=null,this.onerror=null,"function"==typeof t.callback&&t.callback({
cover64:""
});
},o.src=e.opt.cover;
}();
},
callJsapiShareVideo:function(){
var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
if(this.opt.extinfo&&this.opt.extinfo.preview)return void f.postMessage({
type:"showTips",
data:{
msg:"预览图文中的视频不可分享"
}
});
if(!this._g.loadingCoverBase64){
var i=function(){
var i="",o="",n="";
try{
i=l.msg_link.html(!1),o=l.user_name||(e.cgiData?e.cgiData.username||e.cgiData.user_name:"")||"",
n=l.nickname||(e.cgiData?e.cgiData.nick_name:"")||"";
}catch(a){
e._jsapiLog(t.action+" jsapi error:"+a);
}
var s=e.opt.extinfo,r="";
s&&(r=s.vid);
var d={
action:t.action,
mpUrl:i,
bizUsrName:o,
bizNickName:n,
videoVid:r,
videoUrl:m.addParam(e._g.oriSrc||e.src||e.opt.src,"video_md5",e.opt.videoMd5||""),
videoThumbUrl:e.opt.cover,
videoThumbData:e._g.coverBase64,
videoTitle:e.opt.videoTitle,
videoDuration:1*e.opt.duration
};
T.invoke("handleMPPageAction",d,function(){});
};
this._g.loadingCoverBase64=!0,this.getCoverBase64({
callback:function(){
e._g.loadingCoverBase64=!1,i();
}
});
}
},
onFullScreenChange:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.type,i=e.state,o=this.$video;
if(i?(o.parents(".js_inner").removeClass("not_fullscreen"),this.__isInFullScreen=!0,
this.showWcSlResolution(),this.isEnd()&&this.showWcSlFullEndExitBtn()):(o.parents(".js_inner").addClass("not_fullscreen"),
this.hideLoading(),this.__isInFullScreen=!1,this.hideWcSlResolution(),this.hideWcSlPlayback(),
this.isEnd()&&this.hideWcSlFullEndExitBtn()),this._useWcSlPlayer()){
var n=this.opt.width>this.opt.height?"page_video_skin-horizontal":"page_video_skin-vertical";
if(i){
if(this.container.find(".js_page_video").addClass(n),this.container.find(".js_full_screen_control").css("display","none"),
c.os.android)if(this.opt.width>this.opt.height){
var a=Math.max(I.wcSlPlayerAndroidSafeAreaInsets.top,I.wcSlPlayerAndroidSafeAreaInsets.bottom)+"px";
this.container.find(".js_page_video").find(".video_full-screen__head, .video_opr, .wrp_play_bar").css({
"padding-left":a,
"padding-right":a
}),this.container.find(".js_page_video").find(".js_sub_setting").css({
"padding-right":a
});
}else this.container.find(".js_page_video").find(".video_full-screen__head").css({
"padding-top":I.wcSlPlayerAndroidSafeAreaInsets.top+16+"px"
});
this._changePlaybackRateList(this.video.playbackRate);
}else{
if(this.container.find(".js_page_video").removeClass(n),this.container.find(".js_full_screen_control").css("display",null),
c.os.android)if(this.opt.width>this.opt.height){
var s=this.container.find(".js_page_video").find(".video_full-screen__head, .video_opr, .wrp_play_bar");
s.css("padding-left",null),s.css("padding-right",null);
}else this.container.find(".js_page_video").find(".video_full-screen__head").css("padding-top",null);
this._changePlaybackRateBtn(this.video.playbackRate,!0);
}
this.isEnd()||(this.showControllBar(),this.__hideControllTimeout());
}
this._trigger("fullscreenchange",{
state:i,
type:t
}),f.broadcastMessage({
type:"fullscreenchange",
data:{
fullScreen:this.__isInFullScreen,
type:t,
id:this.id
}
});
},
enterFullScreen:function(){
var e=this;
if(this._useWcSlPlayer()){
var t=this.opt.width>this.opt.height?90:0;
return void this.video.requestFullscreen(t);
}
var i=function(){
e._g.jsapiFullScreenId&&(clearTimeout(e._g.jsapiFullScreenId),e._g.jsapiFullScreenId=null);
var t=e.video;
t.requestFullscreen?(t.requestFullscreen(),e.__isInFullScreen=!0):t.mozRequestFullScreen?(t.mozRequestFullScreen(),
e.__isInFullScreen=!0):t.webkitRequestFullscreen?(t.webkitRequestFullscreen(),e.__isInFullScreen=!0):t.webkitEnterFullscreen&&(t.webkitEnterFullscreen(),
e.__isInFullScreen=!0);
};
if(this._g.jsapiFullScreenId&&(clearTimeout(this._g.jsapiFullScreenId),this._g.jsapiFullScreenId=null),
!this.opt.jsapiFullScreen||this._g.jsapiFullScreenErrCnt>=this._g.jsapiFullScreenErrLimit)return void i();
c.os.android||this.pause4outer({
triggerEvent:!1
});
var o="",n="",a="",s="",r="",d=this;
try{
if(r=l.source||"",o=l.msg_link.html(!1),n=l.user_name||(this.cgiData?this.cgiData.username||this.cgiData.user_name:"")||"",
a=l.nickname||(this.cgiData?this.cgiData.nick_name:"")||"",this.opt.videoCrossOrigin){
var _=document.createElement("canvas"),u=_.getContext("2d");
_.style.width=this.opt.videoWidth+"px",_.width=this.opt.videoWidth,_.style.height=this.opt.videoHeight+"px",
_.height=this.opt.videoHeight,u.drawImage(this.$video[0],0,0,this.opt.videoWidth,this.opt.videoHeight),
s=_.toDataURL("image/jpeg",1);
}
}catch(h){
this._jsapiLog("jsapi enterfullsrceen error:"+h);
}
var p=this.$video[0],g=null,f=null;
try{
for(f=p.getBoundingClientRect(),g={
left:f.left,
top:f.top,
height:f.bottom-f.top,
width:f.right-f.left
};p.ownerDocument.defaultView.parent!==window&&(p=p.ownerDocument.defaultView.frameElement);)f=p.getBoundingClientRect(),
g.left+=f.left,g.top+=f.top;
g.left=Math.round(g.left),g.top=Math.round(g.top),g.height=Math.round(g.height),
g.width=Math.round(g.width);
}catch(h){
this._jsapiLog("jsapi enterfullsrceen error:"+h),g={
left:0,
top:0,
height:0,
width:0
};
}
var v=this.opt.extinfo,y="";
v&&(y=v.vid);
var w={
action:"enterEmbedMpVideo",
mpBizUin:this.opt.__biz||"",
mpAppMsgId:this.opt.mid||"",
mpIndex:this.opt.idx||"",
mpUrl:o,
bizUsrName:n,
bizNickName:a,
videoUrl:m.addParam(this._g.oriSrc||this.src||this.opt.src,"video_md5",this.opt.videoMd5||""),
videoTitle:this.opt.videoTitle,
videoCurrTime:this.getCurTime(),
videoWidth:this.opt.videoWidth,
videoHeight:this.opt.videoHeight,
videoThumbUrl:this.opt.cover,
videoDuration:1*this.opt.duration,
videoVid:y,
playerX:g.left,
playerY:g.top,
playerWidth:g.width,
playerHeight:g.height,
subscene:1*r,
headImgUrl:this.opt.headImgUrl,
currFrameData:s,
forbidForward:this.opt.canShareVideo?0:1
};
this.__isInFullScreen=!0,s&&(this._g.jsapiFullScreenId=setTimeout(function(){
e.__isInFullScreen=!1;
},2e3)),T.invoke("handleMPPageAction",w,function(e){
d._g.jsapiFullScreenId&&(clearTimeout(d._g.jsapiFullScreenId),d._g.jsapiFullScreenId=null),
/:ok$/.test(e.err_msg)?(d.__isInFullScreen=!0,d.onFullScreenChange({
state:!0,
type:"jsapi"
})):(d.__isInFullScreen=!1,c.os.android||d.play4outer(0/0,{
triggerEvent:!1
}),d._g.jsapiFullScreenErrCnt++);
}),c.os.android&&(l.CustomFullscreenApi&&"function"==typeof l.CustomFullscreenApi._customEnterFullscreen&&l.CustomFullscreenApi._customEnterFullscreen(!0),
i());
},
exitFullScreen:function(){
this.hideLoading(),this._useWcSlPlayer()?this.video.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),
this.__isInFullScreen=!1;
},
isInFullScreen:function(){
return!!this.__isInFullScreen;
},
play4outer:function(e){
var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
this.__forcePause=!1,this.play(e),t.triggerEvent!==!1&&this._trigger("userplay",{
doubleTap:t.doubleTap
}),this._hidePlayControllBar();
},
pause4outer:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.hideLoading(),this.pause(),e.triggerEvent!==!1&&this._trigger("userpause",{
doubleTap:e.doubleTap
}),this.hideControllBar(),this._showPlayControllBar();
},
setWidth:function(e){
this.container.find(".js_page_video").css({
width:e
});
},
setHeight:function(e){
this.container.find(".js_page_video").css({
height:e
});
},
showCover:function(){
this.container.find(".js_poster_cover").show();
},
hideCover:function(){
"none"!==this.container.find(".js_poster_cover").css("display")&&this.container.find(".js_poster_cover").hide();
},
showFuncControllBar:function(){
this.container.find(".js_play_bar_wrapper").removeClass("wrp_play_bar_hide_speed-dot"),
this.container.find(".js_progress_bar,.js_full_screen_control").show(),this.__hasFuncControllBar=!0;
},
hideFuncControllBar:function(){
this.container.find(".js_play_bar_wrapper").addClass("wrp_play_bar_hide_speed-dot"),
this.container.find(".js_progress_bar,.js_full_screen_control").hide(),this.__hasFuncControllBar=!1;
},
showControllBar:function(){
this.__touchVideoTimeoutHandler&&clearTimeout(this.__touchVideoTimeoutHandler),this.__timerHideControll&&(clearTimeout(this.__timerHideControll),
this.__timerHideControll=null),this.__userplaytime||(this.container.find(".js_play_bar_wrapper").removeClass("opr_fade_out wrp_play_bar_hide_speed-dot").show(),
this.container.find(".js_played_speed_cnt").removeClass("opr_fade_out"),this.container.find(".js_controll").removeClass("opr_fade_out").show(),
this._useWcSlPlayer()&&this.container.find(".js_video_fullscreen_profile").removeClass("opr_fade_out").css("display",this.isInFullScreen()?null:"none")),
this.opt.canShareVideo&&(this.__userplaytime?this.container.find(".js_page_video").addClass("wx_video_status_initial"):this.container.find(".js_page_video").removeClass("wx_video_status_initial"),
this.container.find(".js_share_btn_contain").removeClass("opr_fade_out").show()),
this._trigger("showControllBar");
},
hideControllBar:function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=this,i=t.container.find(".js_controll"),o=t.container.find(".js_play_bar_wrapper"),n=t.container.find(".js_played_speed_cnt"),a=t.container.find(".js_video_fullscreen_profile"),s=t.container.find(".js_share_btn_contain");
i.removeClass("opr_fade_in"),t.isInFullScreen()?(o.removeClass("opr_fade_in"),t._useWcSlPlayer()&&a.removeClass("opr_fade_in")):n.removeClass("opr_fade_in"),
t.__timerHideControll&&clearTimeout(t.__timerHideControll),i.addClass("opr_fade_out"),
t.isInFullScreen()?(o.addClass("opr_fade_out"),t._useWcSlPlayer()&&a.addClass("opr_fade_out")):n.addClass("opr_fade_out"),
e.showShareBtn!==!0?s.removeClass("opr_fade_in").addClass("opr_fade_out"):s.removeClass("opr_fade_out").show(),
t.__timerHideControll=setTimeout(function(){
t.isInFullScreen()?o.hide():o.addClass("wrp_play_bar_hide_speed-dot"),i.hide(),t._useWcSlPlayer()&&a.css("display","none"),
e.showShareBtn!==!0&&s.hide(),1===t.video.playbackRate&&$("#play_setting_mode__rate").text("倍速"),
t._trigger("hideControllBar");
},100);
},
showLoading:function(e){
var t=this;
this.__always_hide_loading||this.__isshowLoading&&this.video&&this.video.currentTime>1||(this.__isshowLoading=!0,
this._g.resetShowingLoadingTimeoutId&&(clearTimeout(this._g.resetShowingLoadingTimeoutId),
this._g.resetShowingLoadingTimeoutId=null),this._g.resetShowingLoadingTimeoutId=window.setTimeout(function(){
t.__isshowLoading=!1;
},1e3),this._g.showingLoadingTimeoutId&&(clearTimeout(this._g.showingLoadingTimeoutId),
this._g.showingLoadingTimeoutId=null),"firstTime"==e?this._useWcSlPlayer()?this._g.showingLoadingTimeoutId=setTimeout(function(){
t.container.find(".js_loading").addClass("start_loading").show();
},800):this.opt.isTLpage?(this.container.find(".js_tlpage_play").hide(),this.container.find(".js_tlpage_loading").show()):this.container.find(".js_loading").addClass("start_loading").show():this._g.showingLoadingTimeoutId=setTimeout(function(){
t.container.find(".js_loading").show();
},800));
},
hideLoading:function(){
this.opt.isTLpage?this.container.find(".js_tlpage_loading").hide():this.container.find(".js_loading").removeClass("start_loading").hide(),
this._g.showingLoadingTimeoutId&&(clearTimeout(this._g.showingLoadingTimeoutId),
this._g.showingLoadingTimeoutId=null);
},
showWcSlResolution:function(){
this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length&&this.container.find(".js_play_mode_change").css("display",null);
},
hideWcSlResolution:function(){
this._useWcSlPlayer()&&this.opt.resolutionInfo&&this.opt.resolutionInfo.length&&(this.container.find(".js_play_mode_change").css("display","none"),
this.container.find(".js_play_mode_select").css("display","none"));
},
hideWcSlPlayback:function(){
this._useWcSlPlayer()&&this.opt.playbackRateInfo&&this.opt.playbackRateInfo.length&&this.container.find(".js_playback_mode_select").css("display","none");
},
showWcSlFullEndExitBtn:function(){
var e=this;
if(this._useWcSlPlayer()){
var t=this.container.find(".js_video_fullscreen_end");
this.__hasBindWcSlFullEndExitBtnTapEvent||(this.__hasBindWcSlFullEndExitBtnTapEvent=!0,
_.tap(t.find(".js_video_fullscreen_end_exit")[0],function(){
e.exitFullScreen();
})),t.css("display",null);
}
},
hideWcSlFullEndExitBtn:function(){
this._useWcSlPlayer()&&this.container.find(".js_video_fullscreen_end").css("display","none");
},
triggerMuted:function(e){
e?(s(this.video,!0),this.container.find(".js_muted_btn").addClass("muting")):(s(this.video,!1),
this.container.find(".js_muted_btn").removeClass("muting"));
},
setVideoCSS:function(e){
var t=this,i=t.container,o=i.find(".js_page_video");
o.css(e);
},
afterFirstLoaded:function(){
this.__userplaytime&&(this.__userplaytime=!1,this.reportRealLoadingTime(),this._useWcSlPlayer()||this._trigger("touchVideo",{
isShow:!0
}));
},
reportRealLoadingTime:function(){
var e=this;
e.__firstPlayEnd=+new Date;
var t=parseInt(e.__firstPlayEnd-e.__firstPlayStart);
if(console.info("[视频点击播放耗时]",t),e._trigger("firstBufferingTime",{
bufferingTime:t,
initialTime:e.opt.initialTime
}),y.proxyPreloadExper()){
var i=S.toBase64(JSON.stringify({
scene:window.source,
sessionid:window.sessionid
}));
1==y.proxyPreloadExper().experSet?w.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(S.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:21,
time:t
},
user_define:i
}):2==y.proxyPreloadExper().experSet?w.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(S.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:22,
time:t
},
user_define:i
}):3==y.proxyPreloadExper().experSet?w.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(S.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:23,
time:t
},
user_define:i
}):4==y.proxyPreloadExper().experSet&&w.saveSpeeds({
sample:1,
uin:window.encodeURIComponent(S.toBase64(window.user_uin))||uin,
pid:1045,
speeds:{
sid:24,
time:t
},
user_define:i
}),w.send();
}
},
hasFullScreen:function(){
return this.isInFullScreen();
},
hasDrag:function(){
return!!this.__has_drag;
},
getCurTime:function(){
return this.video.currentTime;
},
getPlaybackRate:function(){
return this.video.playbackRate;
},
getResolutionInfo:function(){
var e=this;
return this._useWcSlPlayer()?this.opt.resolutionInfo?this.opt.resolutionInfo.filter(function(t){
return t.src===e.video.resolutionSrc;
})[0]:null:void 0;
},
getEndDom:function(){
return this.container.find(".js_end_dom");
},
getDrag:function(){
return this.__dragTimes;
},
getPlayTotalTime:function(){
return this.__endCountTime(),this.__play_total_time;
},
getWcSlPlayerAndroidSafeAreaInsets:function(){
return I.wcSlPlayerAndroidSafeAreaInsets;
},
supportWcSlPlayer:function(){
return window.__failConfigWxOpen?!1:this._g.fallbackFromWcSlVideoToH5Player?!1:I.wcSlPlayerSupport;
},
getLog:function(){
var e=this.log||{};
return{
hasended:e.hasended,
last_ms:Math.floor(1e3*(e.lastsec||0)),
duration_ms:Math.floor(1e3*(e.duration||0)),
video_error:e.video_error||0,
video_error_code:e.video_error_code||0,
loadwait:e.loadwait||0
};
},
isPlay:function(){
return!this.video.paused&&!this.isEnd();
},
isPause:function(){
return!!this.video.paused;
},
isEnd:function(){
return!!this.video.ended;
},
hasBeginPlay:function(){
return this.__hasBeginPlay;
},
destroy:function(){
f.removeListener({
type:"broadcastPlay",
func:this._event.broadcastPlay,
vid:this.opt.extinfo.vid
});
try{
delete l.__MpPlayers[this.id];
}catch(e){}
I.visibilityPausePlayer===this&&(I.visibilityPausePlayer=null);
},
_setBeginPlayStatus:function(){
var e=this;
this.hideLoading(),this.container.find(".js_video_play_controll").css({
display:"block"
});
var t=this.opt.duration;
t&&t>0&&this.container.find(".js_video_length").html(L(t)).show(),1==this.__iosPreloadPause&&!function(){
var t=e;
setTimeout(function(){
var e=t.container.find(".js_video_pause_controll");
e.hide();
var i=t.container.find(".js_video_play_controll");
i.show();
});
}();
},
showPlayBtn:function(){
this.container.find(".js_video_play_controll").show();
},
hidePlayBtn:function(){
this.container.find(".js_video_play_controll").hide();
},
autoChangeTip:function(e){
var t=this,i=void 0;
switch(e.type){
case"autoChange":
i=".js_auto_change_tip";
break;

case"autoSuc":
i=".js_auto_change_suc_tip";
break;

default:
i=null;
}
switch(e.option){
case"show":
this.container.find(".video__top-tips__mask").removeClass("video__top-tips__showOut").addClass("video__top-tips__showIn"),
this.container.find(".js_auto_change_tip_mask").show(),this.container.find(i).show();
break;

case"hide":
this.container.find(".video__top-tips__mask").removeClass("video__top-tips__showIn").addClass("video__top-tips__showOut"),
setTimeout(function(){
t.container.find(i).hide(),t.container.find(".js_auto_change_tip_mask").hide();
},500);
}
}
}),H._getFormatTime=L,H;
});define("new_video/plugin/danmu.js",["biz_wap/utils/ajax.js","new_video/plugin_base.js","new_video/plugin/danmu_util.js","pages/bottom_input_bar.js","biz_common/utils/url/parse.js","biz_common/utils/emoji_data.js","biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/storage.js","biz_wap/utils/jsmonitor_report.js","page/pages/video_mod/video_danmu.css"],function(t){
"use strict";
function i(t){
var i=this;
this.hasPlayerInit=!1,this._o={
bizUin:t.bizUin||0,
msgId:t.msgId||0,
idx:t.idx||0,
vid:t.vid||0
},this.LS=new d("video_danmu_plugin"),this._g={
step:1/0,
buffer:"",
inputTime:0,
switchOn:!1,
requestCnt:0
};
var n=setTimeout(function(){
return p.setSum(221764,4,1);
},5e3);
e({
type:"GET",
dataType:"json",
url:r.join("mp/danmu?action=get_danmu_info",{
__biz:this._o.bizUin,
vid:this._o.vid
}),
success:function(t){
t&&t.base_resp&&1*t.base_resp.ret===0?(i.danmuInfo={
isAllow:-1!==[9,70].indexOf(1*window.appmsg_type)&&!!t.is_allow_danmu,
isAllowPost:!!t.is_allow_post_danmu,
unitId:t.unit_id,
reasonId:t.reason_id
},console.log("[Danmu Plugin Get Info]",i._o,i.danmuInfo,t),i.hasPlayerInit&&i.init(),
p.setSum(221764,1,1)):(console.error("[Danmu Plugin Get Info Ret != 0]",t),p.setSum(221764,2,1),
window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:GetInfoRet!=0",JSON.stringify(t)));
},
error:function(t,i){
console.error("[Danmu Plugin Get Info Error]",i),p.setSum(221764,3,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:GetInfoError",JSON.stringify(i));
},
complete:function(){
return clearTimeout(n);
}
});
}
var e=t("biz_wap/utils/ajax.js"),n=t("new_video/plugin_base.js"),s=t("new_video/plugin/danmu_util.js"),a=t("pages/bottom_input_bar.js"),r=t("biz_common/utils/url/parse.js"),o=t("biz_common/utils/emoji_data.js"),u=t("biz_wap/utils/mmversion.js"),_=t("biz_common/dom/event.js"),l=t("biz_wap/jsapi/core.js"),d=t("biz_wap/utils/storage.js"),p=t("biz_wap/utils/jsmonitor_report.js"),m=3,c=6,h="xs",f="s",g=.6,w=.6,v=31536e7,y=2,b='<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single #name#" alt="" />',j='<div class="play_bullet-input__container js_danmu_invoke_input_container"><div class="play_bullet-input_mode js_danmu_invoke_input"><div class="play_bullet-input__wrapper"><div class="play_bullet-input">说点什么</div></div></div><div class="play_bullet-screen_mode js_danmu_switch"><a href="javascript:;" class="play_bullet-screen"></a></div></div>';
return n.inherit(i,n.Class),i.prototype.init=function(){
return this.hasPlayerInit=!0,this.danmuInfo&&(this.player._trigger("getDanmuInfo",this.danmuInfo),
this.danmuInfo.isAllow)?this.player._useWcSlPlayer()?void this.__init():void console.log("[Danmu Plugin Not Support]"):void 0;
},i.prototype.statusChangeHandler=function(t,i){
this._g.switchOn&&("loading"===i.status&&"seeked"===i.subStatus?(this._g.step=this.__parseTime(i.currentTime),
this.danmuUtil._clear(),this.danmuUtil.list.reset()):"play"===i.status?this.danmuUtil.switchOn():"pause"===i.status?this.danmuUtil.pause():"end"===i.status&&(this.danmuUtil.switchOff(),
this.danmuUtil.list.reset(),this._g.step=0));
},i.prototype.timeupdateHandler=function(t,i){
if(this._g.switchOn&&!this.player.__onTouch){
var e=parseInt(i.currentTime,10);
this.danmuUtil.updateTime(e),e>this._g.step-y&&(this.__requestDanmu(),this._g.step=this.__getCurTime(5));
}
},i.prototype.fullscreenchangeHandler=function(t,i){
this._g.switchOn&&(this.inputBar.hide(),this.danmuUtil.setLine(i.state?c:m),this.danmuUtil.setFont(i.state?f:h),
this.danmuUtil.setRate(i.state?w:g),this.player.opt.width>this.player.opt.height?this.inputBar.setFullscreenStyle(i.state):i.state?u.isIOS?this.player.container.find(".js_video_danmu").addClass("danmu_full_vertical"):this.player.container.find(".js_video_danmu .txp_barrage_external").css("top",this.player.getWcSlPlayerAndroidSafeAreaInsets().top+"px"):u.isIOS?this.player.container.find(".js_video_danmu").removeClass("danmu_full_vertical"):this.player.container.find(".js_video_danmu .txp_barrage_external").css("top","0px"));
},i.prototype.__init=function(){
var i=this;
this.player.container.find(".js_page_video .js_controll .opr_inner_fr").prepend(j),
_.tap(this.player.container.find(".js_danmu_switch")[0],function(t){
i.player.__hideControllTimeout(),i.__triggerDanmuSwitch(),t.preventDefault();
});
var e=this.player.container.find(".js_danmu_invoke_input");
if(this.inputBar=new a({
limit:30,
placeholder:"说点什么",
submitCallback:function(t){
return i.__submitDanmu(t);
}
}),this.inputBar.addListener("input",function(){
e.find(".play_bullet-input").text(i.inputBar.getContent()?"正在输入...":"说点什么");
}),this.inputBar.addListener("show",function(){
i.player.showControllBar(),i.inputBar.getContent()&&e.find(".play_bullet-input").text("正在输入...");
}),this.inputBar.addListener("hide",function(){
i.player.__hideControllTimeout(),e.find(".play_bullet-input").text("说点什么");
}),this.player.container.find(".js_page_video").append('<div class="js_video_danmu"></div>'),
this.danmuUtil=new s({
wrapper:this.player.container.find(".js_video_danmu")[0],
userNum:m,
rate:g
}),t("page/pages/video_mod/video_danmu.css"),this.danmuInfo.isAllowPost)_.tap(e[0],function(t){
window.is_temp_url?l.invoke("confirmDialog",{
title:"预览状态下无法操作",
contentDesc:"",
confirmText:"确定"
}):(i.inputTime=i.__getCurTime(),i.inputBar.show()),t.preventDefault();
});else{
var n={
"default":"无法发弹幕",
1:"关注可发",
2:"关注3天可发"
};
e.find(".play_bullet-input").text(n[this.danmuInfo.reasonId]||n.default);
}
this._g.switchOn="number"==typeof this.LS.get("switch")?1===this.LS.get("switch"):!0,
this.__triggerDanmuSwitch(!0);
},i.prototype.__triggerDanmuSwitch=function(t){
t||(this._g.switchOn=!this._g.switchOn,this.LS.set("switch",this._g.switchOn?1:2,Date.now()+v),
p.setSum(221764,this._g.switchOn?14:15,1)),this._g.switchOn?(this._g.step=this.__getCurTime(),
this.danmuUtil.switchOn(),this.player.isPause()&&this.danmuUtil.pause(),this.player.container.find(".js_danmu_switch .play_bullet-screen").addClass("active"),
this.player.container.find(".js_danmu_invoke_input").css({
position:"static"
}),t||this.player.container.find(".js_danmu_invoke_input_container").removeClass("unactive").addClass("active")):(this._g.step=1/0,
this.danmuUtil.switchOff(),this.danmuUtil.list.reset(),this.player.container.find(".js_danmu_switch .play_bullet-screen").removeClass("active"),
this.player.container.find(".js_danmu_invoke_input").css({
position:"relative",
left:"-9999px"
}),t?this.player.container.find(".js_danmu_invoke_input_container").addClass("close"):this.player.container.find(".js_danmu_invoke_input_container").removeClass("active").addClass("unactive"));
},i.prototype.__submitDanmu=function(t){
if(t&&this._g.switchOn){
this.danmuUtil.add({
html:'<div class="danmu_self">'+this.__decodeEmoji(t.html(!0))+"</div>",
contentLength:t.length,
mustShow:!0
});
var i=setTimeout(function(){
return p.setSum(221764,12,1);
},5e3);
e({
type:"POST",
url:"mp/danmu?action=post_danmu",
dataType:"json",
data:{
__biz:this._o.bizUin,
unit_id:this.danmuInfo.unitId,
content:t,
vid:this._o.vid,
time_point:this.inputTime,
video_duration:this.player.duration,
appmsgid:this._o.msgId,
idx:this._o.idx
},
success:function(t){
if(t&&t.base_resp){
var i=1*t.base_resp.ret;
switch(i){
case 0:
return void p.setSum(221764,9,1);

case 2:
p.setSum(221764,13,1);
}
}
console.error("[Danmu Plugin Submit Ret != 0]",t),p.setSum(221764,10,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:SubmitRet!=0",JSON.stringify(t));
},
error:function(t,i){
console.error("[Danmu Plugin Submit Error]",i),p.setSum(221764,11,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:SubmitError",JSON.stringify(i));
},
complete:function(){
return clearTimeout(i);
}
});
}
},i.prototype.__requestDanmu=function(){
var t=this;
if(this._g.switchOn){
var i=setTimeout(function(){
return p.setSum(221764,8,1);
},3e3),n=++this._g.requestCnt,s=[];
e({
type:"GET",
dataType:"json",
url:r.join("/mp/danmu?action=pull_danmu",{
__biz:this._o.bizUin,
unit_id:this.danmuInfo.unitId,
vid:this._o.vid,
buffer:this._g.buffer,
step:this._g.step
}),
success:function(i){
if(n!==t._g.requestCnt)return console.warn("[Danmu Plugin Abort Pull Resp]",n,t._g.requestCnt,i),
void p.setSum(221764,16,1);
if(console.log("[Danmu Plugin Pull Resp]",i),i&&i.base_resp&&1*i.base_resp.ret===0){
var e=void 0;
try{
e=JSON.parse(i.json);
}catch(a){
e={};
}
t._g.step=e.next_step||t._g.step,t._g.buffer=e.buffer||t._g.buffer;
var r=e.list||[];
if(r.length){
for(var o=t.__getCurTime(1),u=0;u<r.length;u++){
var _=r[u],l={
html:t.__decodeEmoji(_.content),
index:Math.max(_.time_point,o),
contentLength:_.content.length,
mustShow:!!_.is_self
};
l&&s.push(l);
}
s.length&&(t.danmuUtil.list.reset(),t.danmuUtil.add(s));
}
p.setSum(221764,5,1);
}else console.error("[Danmu Plugin Pull Ret != 0]",i),p.setSum(221764,6,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:PullRet!=0",JSON.stringify(i));
},
error:function(t,i){
console.error("[Danmu Plugin Pull Error]",i),p.setSum(221764,7,1),window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("Danmu:PullError",JSON.stringify(i));
},
complete:function(){
return clearTimeout(i);
}
});
}
},i.prototype.__decodeEmoji=function(t){
if(!/\[[^\[\]]+\]/.test(t))return t;
for(var i=0,e=o.length;e>i;i++){
var n=o[i],s=b.replace("#name#",n.style);
if(n.cn){
var a=new RegExp("\\["+n.cn.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(a,s);
}
if(n.hk){
var r=new RegExp("\\["+n.hk.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(r,s);
}
if(n.us){
var u=new RegExp("\\["+n.us.replace(/\[|\]/g,"")+"\\]","g");
t=t.replace(u,s);
}
}
return t;
},i.prototype.__getCurTime=function(){
var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0];
return this.__parseTime((this.player&&this.player.video&&1*this.player.video.currentTime||0)+t);
},i.prototype.__parseTime=function(t){
return parseInt(1*t||0,10);
},i;
});define("new_video/plugin/ad.js",["biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/jsmonitor_report.js","appmsg/without_iframe/iframe_communicate.js","new_video/plugin_base.js","new_video/ctl.js","a/a_utils.js","a/a_config.js","common/utils.js"],function(t){
"use strict";
function e(t){
r({
url:"/mp/ad_video_report?action="+(t.action||"exposure"),
type:"post",
data:{
step:t.step||"",
view_id:t.view_id||"",
traceid:t.traceid||"",
orderid:t.orderid||0,
ad_source:t.ad_source||0,
report_time:t.report_time,
devicetype:a.devicetype,
version:a.clientversion,
__biz:a.biz||"",
lcount:1,
type:t.type
}
});
}
function i(t,e){
t=1e3*t|0,e.forEach(function(e){
1!=e.reported&&t>=e.report_time&&(e.reported=1,iframe&&iframe.contentWindow&&iframe.contentWindow.postMessage(JSON.stringify({
type:"report",
url:e.url
}),location.protocol+"//"+location.host));
});
}
var a=window.withoutIframe?window:window.parent.window;
t("biz_wap/zepto/zepto.js"),t("biz_wap/zepto/event.js"),t("biz_wap/zepto/touch.js");
var r=t("biz_wap/utils/ajax.js"),o=t("biz_wap/jsapi/core.js"),d=t("biz_wap/utils/jsmonitor_report.js"),s=t("appmsg/without_iframe/iframe_communicate.js"),n=t("new_video/plugin_base.js"),p=t("new_video/ctl.js"),h=t("a/a_utils.js"),_=t("a/a_config.js"),c=t("common/utils.js"),l=5,u=1515,m=888,y=function(t){
"undefined"==typeof t.videoReportType&&(t.videoReportType=-1),this.hasPlayAd=!1,
this.hasError=!1,this.vid=t.vid,this.oriVid=t.oriVid,this.opt=t,this.isMpVideo=t.isMpVideo,
console.log("init ad vid test: "+t.vid),this.initAd=!1;
var e=this;
this._ad_play_time=-1,this.__beforeplayHandler=[],e.__initAd();
};
return n.inherit(y,n.Class),y.prototype.__openWebview=function(t,e){
var i=this.adPlayer,r=this;
r.adData.jump_url=t,o.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(t){
t.err_msg.match(/\:ok$/)?(i.pause(),o.on("activity:state_change",function(t){
"onresume"==t.state.toLowerCase()&&i.play();
})):a.location.hash="complain"==e?"adcomplain"+r.vid:"addetail"+r.vid;
});
},y.prototype.__clickreport=function(){
{
var t=this;
this.player;
}
e({
action:"click",
view_id:t.adData.view_id,
traceid:t.adData.traceid,
orderid:t.adData.orderid,
ad_source:t.adData.ad_source,
report_time:t.getAdPlaytime(),
type:t.opt.videoReportType
}),p.report({
vid:t.vid,
step:8,
ext1:t.getAdPlaytime(),
ext2:t.adData.jump_url,
ad_source:t.adData.ad_source,
orderid:t.getOrderid(),
traceid:t.getTraceId(),
type:t.opt.videoReportType,
fromid:t.opt.fromid
}),t.adData.report_3rd_click_url&&t.adData.report_3rd_click_url.forEach(function(t){
iframe&&iframe.contentWindow&&iframe.contentWindow.postMessage(JSON.stringify({
type:"report",
url:t
}),location.protocol+"//"+location.host);
});
},y.prototype.hasAd=function(t){
if(!t||!t.advertisement_info||!t.advertisement_info.length)return!1;
for(var e=0;e<t.advertisement_info.length;e++){
var i=t.advertisement_info[e];
i.pos_type===_.AD_POS.POS_AD_BEFORE_VIDEO&&1===i.is_mp_video&&i.vid===this.oriVid&&c.report120081(8);
}
for(var a=0;a<t.advertisement_info.length;a++){
var i=t.advertisement_info[a];
if(i.pos_type===_.AD_POS.POS_AD_BEFORE_VIDEO&&0===i.is_mp_video&&i.vid===this.oriVid)return!0;
}
return!1;
},y.prototype.newHasAd=function(){
try{
if(window.withoutIframe)this.adVidFromAppmsg&&h.report115849(67);else for(var t=a.document.getElementsByTagName("iframe"),e=0;e<t.length;e++)(window===t[e].contentWindow&&t[e].adVidFromAppmsg||t[e].adVidFromAppmsg===window.realVid)&&h.report115849(67);
}catch(i){}
},y.prototype.newInitAd=function(){
var t=this,e=this,i=void 0;
window.withoutIframe?(s.addListener({
type:_.AD_VIDEO_FIN_ACTION,
func:function(){
e.hasPlayAd=!0,e.player._trigger("beginPlay");
},
vid:this.vid
}),s.addListener({
type:_.APPMSGAD_READY_ACTION,
func:function(i){
h.report115849(37),e.initAd=!0,t.adVidFromAppmsg&&h.report115849(66),e.newHasAd(),
e.hasAd(i)&&(h.report115849(36),e.hasError=!1);
},
vid:this.vid
}),s.addListener({
type:_.SEND_AD_VID_ACTION,
func:function(t){
i||(t.adVidFromAppmsg&&!e.adVidFromAppmsg&&(e.adVidFromAppmsg=t.adVidFromAppmsg),
t.adVidFromAppmsg&&h.report115849(57),i=!0);
},
vid:this.vid
})):h.listenMessage(window,function(t,r){
if(r.action===_.AD_VIDEO_FIN_ACTION)return e.hasPlayAd=!0,void e.player._trigger("beginPlay");
if(r.action===_.APPMSGAD_READY_ACTION){
if(h.report115849(37),e.initAd=!0,(e.adVidFromAppmsg||window.adVidFromAppmsg)&&h.report115849(66),
e.newHasAd(),!e.hasAd(r.value))return;
h.report115849(36),e.hasError=!1;
}else!e.initAd&&h.postMessage(a,_.GET_APPMSGAD_READY_STATUS_ACTION,{
vid:e.opt.vid
});
r.action!==_.SEND_AD_VID_ACTION||i?!i&&h.postMessage(a,_.GET_AD_VID_ACTION,{
vid:e.opt.vid
}):(r.value.adVidFromAppmsg&&!e.adVidFromAppmsg&&(e.adVidFromAppmsg=r.value.adVidFromAppmsg),
r.value.adVidFromAppmsg&&h.report115849(57),i=!0);
}),h.postMessage(a,_.GET_APPMSGAD_READY_STATUS_ACTION,{
vid:e.opt.vid
}),h.postMessage(a,_.GET_AD_VID_ACTION,{
vid:e.opt.vid
}),e.readyBeginPlayHandler=function(){
return h.report115849(23),this.hasPlayAd||this.hasError||!e.adVidFromAppmsg?n.BASE_BITSET:(h.postMessage(a,"onVideoPlayV2",{
vid:e.adVidFromAppmsg,
playAd:!0
}),this.player._trigger("preload"),8);
},e.beginPlayHandler=function(){
return this.hasPlayAd||this.hasError||!this.adVidFromAppmsg?n.BASE_BITSET:14;
},e.loadingHandler=function(){
if(this.hasSetAdSrc||this.hadPlayAd||this.hasError)return n.BASE_BITSET;
var t=this,e=t.player;
return t._whenGetAdSrc(function(){
h.report115849(65),!this.initAd||this.hasError||this.hasSetAdSrc||(this.hasSetAdSrc=!0,
this.setUnblockEvt("loading")),this.adVidFromAppmsg||(this.hasPlayAd=!0),e.hideLoading(),
e._trigger("loading"),this.adVidFromAppmsg&&h.report115849(50);
}),1;
};
},y.prototype.__initAd=function(){
var t=this;
return window.withoutIframe?s.addListener({
type:_.AD_VIDEO_PLAY_ACTION,
func:function(){
t.player.pause();
},
vid:t.vid
}):h.listenMessage(window,function(e,i){
i.action===_.AD_VIDEO_PLAY_ACTION&&t.player.pause();
}),this.isMpVideo?(t.newInitAd(),void h.report115849(74)):(h.report115849(24),void t.newInitAd());
},y.prototype.__initOriginalVideoAd=function(){
var t=this;
a.postMessage({
action:"originalVideoAdNeedData",
vid:t.opt.vid
},"*"),window.addEventListener("message",function(e){
e.data&&"receiveOriginalVideoData"==e.data.action&&e.data.vid==t.opt.vid&&(t.initAd=!0,
t.hasError=!1,t.adData=e.data.adData,t.adData&&t.adData.vid?c.report120081(1):t.hasError=!0,
t.player&&t.player.hideLoading());
});
},y.prototype.getAdPlaytime=function(){
return this._ad_play_time;
},y.prototype.getTraceId=function(){
return this.adData&&this.adData.traceid?this.adData.traceid:0;
},y.prototype.getOrderid=function(){
return this.adData&&this.adData.orderid?this.adData.orderid:0;
},y.prototype.init=function(){
this.container=$(this.player.opt.container),0==this.hasError&&(this.player.showLoading(),
this.setBlockEvt("loading"));
},y.prototype.noop=function(){
return this.hasPlayAd||this.hasError?n.BASE_BITSET:10;
},y.prototype.loadingHandler=function(){
if(this.hasSetAdSrc||this.hadPlayAd||this.hasError)return n.BASE_BITSET;
var t=this,e=t.player;
return t._whenGetAdSrc(function(){
!this.initAd||this.hasError||this.hasSetAdSrc||(this.hasSetAdSrc=!0,this.setUnblockEvt("loading")),
e._trigger("loading");
}),1;
},y.prototype.readyBeginPlayHandler=function(){
var t=this.__beforeplayHandler;
if(t&&t.length>0)for(var i=null;i=t.shift();){
var a=i.func;
"function"==typeof a&&a.apply(this,i.arg||[]);
}
if(this.hasPlayAd||this.hasError)return n.BASE_BITSET;
{
var r=this,o=this.player,d=this.adPlayer,s=d._getContainer(),p=s.find(".js_ad_controll"),h=s.find(".js_video_poster");
r.adData;
}
return d.hideControllBar&&d.hideControllBar(),d._trigger("beginPlay"),d._showPlayer&&d._showPlayer(),
o._hidePlayer(),p.show(),h.on("touchend",function(){
e({
step:6,
view_id:r.adData.view_id,
traceid:r.adData.traceid,
orderid:r.adData.orderid,
ad_source:r.adData.ad_source,
report_time:r.getAdPlaytime(),
type:r.opt.videoReportType
});
}),o._trigger("preload"),8;
},y.prototype.beginPlayHandler=function(){
if(this.hasPlayAd||this.hasError){
{
var t=this;
t.player;
}
return n.BASE_BITSET;
}
return 14;
},y.prototype.canplayHandler=function(){
return this._adEndedTime&&!this._canplayTime&&(this._canplayTime=+new Date,this._canplayTime-this._adEndedTime>0&&d.setAvg(27822,35,this._canplayTime-this._adEndedTime)),
n.BASE_BITSET;
},y.prototype.timeupdateHandler=function(){
return(this.hasPlayAd||this.hasError)&&this.hasError&&1==this.adVideoRet&&this.adData.report_3rd&&i(0,this.adData.report_3rd),
this._adEndedTime&&this.hasPlayAd&&!this._timeupdateTime&&(this._timeupdateTime=+new Date,
this._timeupdateTime-this._adEndedTime>0&&d.setAvg(27822,37,this._timeupdateTime-this._adEndedTime)),
n.BASE_BITSET;
},y.prototype.timeupdate=function(t,a){
var r=a.currentTime,o=this,d=o.adData,s=d.creative_type,n=this.adPlayer,h=n._getContainer(),_=h.find(".js_btn_can_close_ad"),c=h.find(".js_can_close_time"),y=h.find(".js_btn_close_ad"),A=h.find(".js_play_time");
d.close_time>=0?r>=l?(o.__hasShowCanCloseAd||(o.__hasShowCanCloseAd=!0),_.hide(),
y.show()):(_.show(),y.hide(),c.text("("+Math.round(l-r)+"s)")):_.hide();
var v=this.duration;
o._ad_play_time=1e3*r|0,A.text("("+Math.max(1,Math.floor(v-r))+"s)"),(s==u||s==m)&&this.processWhenInAdTime(),
this.reportData.forEach(function(t){
1!=t.reported&&1e3*r>=t.time&&(t.reported=1,t.report_time=o.getAdPlaytime(),t.type=o.opt.videoReportType,
e(t));
}),this.reportData2.forEach(function(t){
1!=t.reported&&1e3*r>=t.time&&(t.reported=1,p.report({
vid:o.vid,
step:t.step,
ext2:o.adVideoRet,
ad_source:o.adData.ad_source,
orderid:o.getOrderid(),
traceid:o.getTraceId(),
type:o.opt.videoReportType,
fromid:o.opt.fromid
}));
}),i(r,this.adData.report_3rd);
},y.prototype.processWhenInAdTime=function(){
var t=this.adPlayer.video,e=t.currentTime;
t&&this.lastCurrentTime&&e!=this.lastCurrentTime&&Math.abs(e-this.lastCurrentTime)>3?t.currentTime=this.lastCurrentTime:this.lastCurrentTime=e;
},y.prototype.touchVideoHandler=function(){
return this.hasPlayAd||this.hasError?n.BASE_BITSET:14;
},y.prototype.end=function(){
e({
step:5,
view_id:this.adData.view_id,
traceid:this.adData.traceid,
orderid:this.adData.orderid,
ad_source:this.adData.ad_source,
report_time:this.getAdPlaytime(),
type:this.opt.videoReportType
}),this._whenEnded(!0);
},y.prototype._whenEnded=function(t){
var e=this,i=e.player,a=e.adPlayer;
this.hasPlayAd=!0,t&&(e._adEndedTime=+new Date),a&&a._hidePlayer&&a._hidePlayer(),
i._showPlayer(),t&&i._trigger("beginPlay");
},y.prototype._whenGetAdSrc=function(t){
var e=this;
setTimeout(function(){
e.initAd?!!t&&t.call(e):e._whenGetAdSrc(t);
},500);
},y.prototype.setSize=function(t){
var e=this,i=e.adPlayer;
i&&i.setVideoCSS(t);
},y;
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
define("new_video/plugin/proxy.js",["new_video/plugin_base.js","biz_wap/jsapi/core.js","pages/version4video.js"],function(e){
"use strict";
function i(e){
f.invoke("videoProxySetPlayerState",{
webviewVideoProxyPlayState:e
},function(){});
}
function o(e){
try{
1==c.logs.video_cnt&&f.invoke("videoProxyStopPlay",{
webviewVideoProxyPlaydataId:e
},function(e){
console.log("videoProxyStopPlay resp: "+JSON.stringify(e));
});
}catch(i){}
}
function t(e,i,o){
i=i||"",i=["uin:"+c.user_uin,"resp:"+i].join("|"),e=41>e&&p.device.is_ios?e+8:e;
try{
(o||x)&&((new window.Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random());
}catch(t){
window.__moon_report&&window.__moon_report([{
offset:8,
log:s.join(""),
e:t
}]);
}
}
function r(e){
var i=p.device.is_ios?116:142,o=p.device.is_ios?m.ios:m.android;
f.invoke("reportIDKey",{
idKeyDataInfo:[{
id:i,
key:o[e],
value:"1"
}]
},function(){});
}
function n(e){
var i=0,o=+new Date-e;
o/=1e3,o>0&&1>=o?i=1:o>1&&3>=o?i=2:o>3&&7>=o?i=3:o>7&&15>=o?i=4:o>15&&(i=5),e&&i&&r(i);
}
function a(e){
if(e){
var i=0;
switch(e.code){
case h:
i=6;
break;

case I:
i=7;
break;

case b:
i=8;
break;

case T:
i=9;
}
i&&r(i);
}
}
function l(e){
B++,f.invoke("videoProxyInit",{},function(i){
try{
console.log("videoProxyInit callback,resp:"+JSON.stringify(i));
}catch(o){}
return 3>B&&p.device.is_android&&(!i.err_msg||-1==i.err_msg.indexOf("videoProxyInit"))?void l(e):void e(i);
});
}
var s,c=window.withoutIframe?window:window.parent.window;
try{
s=["modle_init_typeof_image:","undefined"==typeof Image?"undefined":_typeof(Image),";modle_init_typeof_winimage:",_typeof(window.Image),";modle_init_typeof_topwinimage:",_typeof(c.Image),";userAgent:",c.navigator.userAgent];
}catch(d){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("Access origin",JSON.stringify({
refer:document.referrer,
src:window.__iframe_src__||0,
withoutIframe:window.withoutIframe||-1,
href:window.location.href
})),s=["modle_init_typeof_image:","undefined"==typeof Image?"undefined":_typeof(Image),";modle_init_typeof_winimage:",_typeof(window.Image)];
}
var y,u=e("new_video/plugin_base.js"),f=e("biz_wap/jsapi/core.js"),p=e("pages/version4video.js"),_=c.navigator.userAgent.match(/MicroMessenger\/((\d+)(\.\d+)*)/),P=_&&_[1]||0,v=5,g=6,w=7,S=8,x=Math.random()>.75,m={
ios:[2,3,4,5,6,7,12,13,14,15],
android:[45,40,41,42,43,44,50,51,52,53]
},h=1,I=2,b=3,T=4,B=0;
y="object"==_typeof(c._playerProxyPluginData)?c._playerProxyPluginData:c._playerProxyPluginData={
callbacks:[],
hasInited:!1,
initing:!1,
initResult:"default"
},!p.isUseProxy()||y.hasInited||y.initing||(y.initing=!0,t(32),l(function(e){
y.hasInited=!0,0==e.videoProxyInitResult?y.initResult="success":(y.initResult="fail",
p.modifyExper(!1,!0));
for(var i=y.callbacks,o=null;o=i.shift();)o&&"function"==typeof o._getLocalSrc&&o._getLocalSrc();
t(41),e.err_msg&&e.err_msg.indexOf("function_not_exist")>0&&t(28),e.err_msg&&-1!=e.err_msg.indexOf("function_not_exist")||0==e.videoProxyInitResult||t(29,JSON.stringify(e),!0);
}));
var E=function(e){
var i=this,o=e.data;
i.cdnUrl=e.cdn_url,i.fileId=e.vid+"."+o.formatid,i.fileSize=o.file_size,i.duration=1*o.time|0,
i.lastWaiting=0,i.useProxy=p.isUseProxy(),i._whenInit(),t(25),f.on("onH5VideoProxyReInit",function(e){
console.log("onH5VideoProxyReInit",e),0===e.videoProxyInitResult?f.invoke("videoProxyStartPlay",{
webviewVideoProxyCdnUrls:i.cdnUrl,
webviewVideoProxyFileId:i.fileId,
webviewVideoProxyFileSize:i.fileSize,
webviewVideoProxyFileDuration:i.duration,
webviewVideoProxyFileType:"1"
},function(e){
i.localSrc=e.videoProxyPlayLocalUrl,i.playId=e.videoProxyPlayDataId,i.player.setSrcWithTime(i.localSrc);
}):i.player.setSrcWithTime(i.cdnUrl);
});
};
return u.inherit(E,u.Class),E.prototype.init=function(){
this.hasInit=!1;
},E.prototype._getLocalSrc=function(){
var e=this;
"success"==y.initResult?(t(42),e._videoProxyStartPlayCallbacked=0,setTimeout(function(){
0==e._videoProxyStartPlayCallbacked&&t(43);
},2e3),f.invoke("videoProxyStartPlay",{
webviewVideoProxyCdnUrls:e.cdnUrl,
webviewVideoProxyFileId:e.fileId,
webviewVideoProxyFileSize:e.fileSize,
webviewVideoProxyFileDuration:e.duration,
webviewVideoProxyFileType:"1"
},function(i){
e.localSrc=i.videoProxyPlayLocalUrl,e.playId=i.videoProxyPlayDataId,e.useProxy=!!e.localSrc,
e.__getLocalSrcCallback&&e.__getLocalSrcCallback(),e.useProxy?t(26):t(30,JSON.stringify(i),!0),
e._videoProxyStartPlayCallbacked=1;
})):(e.useProxy=!1,e.__getLocalSrcCallback&&e.__getLocalSrcCallback());
},E.prototype._whenInit=function(){
var e=this;
y.hasInited?e._getLocalSrc():y.callbacks.push(e);
},E.prototype._whenGetLocalSrc=function(e){
var i=this;
i.localSrc||!i.useProxy?(e&&setTimeout(e,1),i.__getLocalSrcCallback=null):i.__getLocalSrcCallback=e;
},E.prototype.preload=function(e){
var i=this;
if(P>="6.3")f.invoke("videoProxyPreload",{
webviewVideoProxyPlaydataId:i.playId,
webviewVideoProxyPreloadTime:""+e
},function(o){
try{
console.log("videoProxyPreload callback,playId:"+i.playId+",sec:"+e+",resp:"+JSON.stringify(o));
}catch(t){}
o.err_msg.indexOf("videoProxyPreload:ok");
});else{
var o;
!function(){
var t=function r(){
o.buffered.length&&o.buffered.end(0)>e&&(o.removeEventListener("progress",r),o=null);
};
o=document.createElement("video"),o.setAttribute("src",i.localSrc||i.cdnUrl),o.setAttribute("preload","auto"),
o.addEventListener("progress",t);
}();
}
t(45);
},E.prototype.preloadHandler=function(){
var e=this;
return p.isUseAd()&&-1==c.location.search.indexOf("&preload=0")&&e._whenGetLocalSrc(function(){
e.preload(10);
}),u.BASE_BITSET;
},E.prototype.loadingHandler=function(e,i){
var o=this,t=o.player;
return o.hasInit||!o.useProxy?u.BASE_BITSET:(o._whenGetLocalSrc(function(){
o.hasInit=!0,o.localSrc?(p.proxyPreloadExper()&&p.proxyPreloadExper().isUsePreload&&t.setSrc(o.localSrc),
t._trigger("loaded",{
autoplay:i&&i.autoplay
})):t._trigger("loading",i);
}),t.showLoading(),14);
},E.prototype.readyBeginPlayHandler=function(){
var e=this,i=this.player;
return e.useProxy?(i.setSrc(this.localSrc),i._trigger("beginPlay"),14):u.BASE_BITSET;
},E.prototype._getRemainTime=function(){
for(var e=this.player.video,i=e.currentTime,o=e.buffered,t=o&&o.length||0,r=0;t>r;r++){
var n=o.start(r),a=o.end(r);
if(i>=n&&a>=i){
var l=a-i;
return l;
}
}
},E.prototype._syncRemainTime=function(){
var e=this,i=0|e._getRemainTime();
f.invoke("videoProxySetRemainTime",{
webviewVideoProxyPlaydataId:e.playId,
webviewVideoProxyRemainTime:i||0
},function(){}),e.remainTimer=setTimeout(function(){
e._syncRemainTime();
},1e3);
},E.prototype.canplayHandler=function(){
return this.useProxy&&(this.canPlay=!0),u.BASE_BITSET;
},E.prototype.beginPlayHandler=function(){
{
var e=this,i=e.player;
i._getContainer(),i.video;
}
return e.useProxy&&(e.remainTimer=setTimeout(function(){
e._syncRemainTime();
},1e3),t(27),this.setPlayBufferCnt=0),u.BASE_BITSET;
},E.prototype.playHandler=function(){
return this.useProxy&&(i(g),this.canPlay&&n(this.lastWaiting),this.lastWaiting=0),
u.BASE_BITSET;
},E.prototype.replayHandler=function(){
var e=this;
return e.useProxy?(e.localSrc="",e._whenInit(),e._whenGetLocalSrc(function(){
e.player.setSrc(e.localSrc||e.cdnUrl),e.player._afterReplay();
}),14):u.BASE_BITSET;
},E.prototype.pauseHandler=function(){
return this.useProxy&&i(v),u.BASE_BITSET;
},E.prototype.waitingHandler=function(){
return this.useProxy&&this.canPlay&&(i(w),this.setPlayBufferCnt++,this.lastWaiting=+new Date,
r(0)),console.log("waiting event triggered in proxy plugin.",this.useProxy,this.canPlay),
u.BASE_BITSET;
},E.prototype.errorHandler=function(){
var e=this,r=this.player;
return this.useProxy&&(i(S),a(r.video&&r.video.error),t(31,null,!0),o(e.playId)),
u.BASE_BITSET;
},E.prototype.endHandler=function(){
{
var e=this;
e.player;
}
if(e.useProxy){
clearTimeout(e.remainTimer);
var i=this.setPlayBufferCnt+72;
i=i>78?78:i,t(i,null,!0);
}
return u.BASE_BITSET;
},E;
});define("pages/video_plugin/video_monitor.js",["pages/video_plugin/base.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js"],function(t){
"use strict";
function r(){
this._g={
reportData:{},
uid:+new Date,
random:Math.random(),
_debug:i.location.href.indexOf("&vconsole=1")>0?!0:!1
};
}
var i=window.withoutIframe?window:window.parent,a=t("pages/video_plugin/base.js"),o=t("biz_wap/utils/jsmonitor_report.js"),e=t("appmsg/log.js");
return a.inherit(r,a.Class),r.prototype.init=function(){
this.setBlockEvt("initMonitor");
},r.prototype.getuid=function(){
return++this._g.uid;
},r.prototype.initDataByUid=function(t,r){
var i=this._g.reportData;
!r&&i[t]&&i[t].radio&&(r=i[t].radio),this._g.reportData[t]={
data:{},
radio:r||1
};
},r.prototype.initMonitorHandler=function(t,r,i){
var a=this.getuid()+"_"+r;
return this.initDataByUid(a,i),{
data:a,
code:7
};
},r.prototype.minusMonitorHandler=function(t,r,i){
var o=this._g.reportData[r];
if(!o||!i)return a.BASE_BITSET;
o=o.data;
for(var e in i){
var n=i[e];
i.hasOwnProperty(e)&&(o[e]||(o[e]={
key:e,
value:0
}),o[e].value=Math.max(0,o[e].value-n||1));
}
return a.BASE_BITSET;
},r.prototype.setMonitorHandler=function(t,r,i){
var o=this._g.reportData[r];
if(!o||!i)return a.BASE_BITSET;
o=o.data;
for(var e in i){
var n=i[e];
i.hasOwnProperty(e)&&(o[e]||(o[e]={
key:e,
value:0
}),o[e].value=n||1);
}
return a.BASE_BITSET;
},r.prototype.plusMonitorHandler=function(t,r,i){
var o=this._g.reportData[r];
if(!o||!i)return a.BASE_BITSET;
o=o.data;
for(var e in i)if(i.hasOwnProperty(e)){
var n=i[e];
o[e]||(o[e]={
key:e,
value:0
}),o[e].value=o[e].value+n||1;
}
return a.BASE_BITSET;
},r.prototype.clearMonitorHandler=function(t,r){
return this.initDataByUid(r),a.BASE_BITSET;
},r.prototype.sendMonitorHandler=function(t,r){
if(!r||-1==r.indexOf("_"))return a.BASE_BITSET;
var i=this._g.reportData[r];
if(!i)return a.BASE_BITSET;
if(this._g.random>i.radio&&!this._g._debug)return a.BASE_BITSET;
i=i.data;
var n=(r+"").split("_")[1];
for(var u in i)if(i.hasOwnProperty(u)){
var s=i[u];
s.value&&o.setSum(n,s.key,s.value);
}
return e("[Video] "+JSON.stringify(i)),this.initDataByUid(r),a.BASE_BITSET;
},r;
});define("pages/iframe_communicate.js",["biz_common/dom/event.js","biz_common/dom/attr.js","pages/video_ctrl.js"],function(e){
"use strict";
function t(){
window.addEventListener("message",o,!1);
}
function o(e){
var t;
if(e.origin?t=e.origin:e.originalEvent&&(t=e.originalEvent.origin),/^http(s)?\:\/\/mp\.weixin\.qq\.com$/.test(t)&&e.source){
var o=e.data;
if(o&&o.type){
if(!/^mpvideo_/.test(o.type))return;
for(var s=o.type.replace(/^mpvideo_/,""),a=p.postMessageEvt[s]||[],i=0;i<a.length;i++)a[i].func(o.data);
}
}
}
function s(e){
var t=e.type;
/^mpvideo_/.test(t)||(t="mpvideo_"+t);
var o={
data:e.data,
type:t
};
window.parent.postMessage(o,document.location.protocol+"//mp.weixin.qq.com");
}
function a(e){
var t=e.type;
/^broadcast_/.test(t)||(t="broadcast_"+t),s({
type:t,
data:e.data
});
}
function i(e){
var t=e.type;
/^mpvideo_/.test(t)&&(t=t.replace(/^mpvideo_/,"")),p.postMessageEvt[t]||(p.postMessageEvt[t]=[]),
p.postMessageEvt[t].push({
func:e.func
});
}
function n(e){
var t=e.type;
/^mpvideo_/.test(t)&&(t=t.replace(/^mpvideo_/,""));
for(var o=p.postMessageEvt[t]||[],s=0;s<o.length;s++)o[s].func===e.func&&(o.splice(s,1),
s--);
}
var r=(e("biz_common/dom/event.js"),e("biz_common/dom/attr.js")),p=(e("pages/video_ctrl.js"),
r.setProperty,{
postMessageEvt:{}
});
return t(),{
broadcastMessage:a,
postMessage:s,
addListener:i,
removeListener:n
};
});define("biz_wap/zepto/touch.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function t(e,t,o,n){
return Math.abs(e-t)>=Math.abs(o-n)?e-t>0?"Left":"Right":o-n>0?"Up":"Down";
}
function o(){
p=null,g.last&&(g.el&&"function"==typeof g.el.trigger&&g.el.trigger("longTap"),g={});
}
function n(){
p&&clearTimeout(p),p=null;
}
function i(){
a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),p&&clearTimeout(p),a=l=c=p=null,
g={};
}
function r(e){
return("touch"==e.pointerType||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary;
}
function u(e,t){
return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t;
}
var a,l,c,p,s,g={},f=750;
e(document).ready(function(){
var w,y,T,h,d=0,m=0;
"MSGesture"in window&&(s=new MSGesture,s.target=document.body),e(document).bind("MSGestureEnd",function(e){
var t=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;
t&&g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t));
}).on("touchstart MSPointerDown pointerdown",function(t){
(!(h=u(t,"down"))||r(t))&&(T=h?t:t.touches[0],t.touches&&1===t.touches.length&&g.x2&&(g.x2=void 0,
g.y2=void 0),w=Date.now(),y=w-(g.last||w),g.el=e("tagName"in T.target?T.target:T.target.parentNode),
a&&clearTimeout(a),g.x1=T.pageX,g.y1=T.pageY,y>0&&250>=y&&(g.isDoubleTap=!0),g.last=w,
p=setTimeout(o,f),s&&h&&s.addPointer(t.pointerId));
}).on("touchmove MSPointerMove pointermove",function(e){
(!(h=u(e,"move"))||r(e))&&(T=h?e:e.touches[0],n(),g.x2=T.pageX,g.y2=T.pageY,d+=Math.abs(g.x1-g.x2),
m+=Math.abs(g.y1-g.y2));
}).on("touchend MSPointerUp pointerup",function(o){
(!(h=u(o,"up"))||r(o))&&(n(),g.x2&&Math.abs(g.x1-g.x2)>30||g.y2&&Math.abs(g.y1-g.y2)>30?c=setTimeout(function(){
g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t(g.x1,g.x2,g.y1,g.y2))),
g={};
},0):"last"in g&&(30>d&&30>m?l=setTimeout(function(){
var t=e.Event("tap");
t.cancelTouch=i,g.el&&"function"==typeof g.el.trigger&&g.el.trigger(t),g.isDoubleTap?(g.el&&g.el.trigger("doubleTap"),
g={}):a=setTimeout(function(){
a=null,g.el&&g.el.trigger("singleTap"),g={};
},250);
},0):g={}),d=m=0);
}).on("touchcancel MSPointerCancel pointercancel",i),e(window).on("scroll",i);
}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){
e.fn[t]=function(e){
return this.on(t,e);
};
});
}(Zepto);
});define("biz_wap/zepto/event.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function n(e){
return e._zid||(e._zid=d++);
}
function t(e,t,o,u){
if(t=r(t),t.ns)var a=i(t.ns);
return(g[n(e)]||[]).filter(function(e){
return!(!e||t.e&&e.e!=t.e||t.ns&&!a.test(e.ns)||o&&n(e.fn)!==n(o)||u&&e.sel!=u);
});
}
function r(e){
var n=(""+e).split(".");
return{
e:n[0],
ns:n.slice(1).sort().join(" ")
};
}
function i(e){
return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)");
}
function o(e,n){
return e.del&&!y&&e.e in E||!!n;
}
function u(e){
return b[e]||y&&E[e]||e;
}
function a(t,i,a,s,f,d,l){
var v=n(t),h=g[v]||(g[v]=[]);
i.split(/\s/).forEach(function(n){
if("ready"==n)return e(document).ready(a);
var i=r(n);
i.fn=a,i.sel=f,i.e in b&&(a=function(n){
var t=n.relatedTarget;
return!t||t!==this&&!e.contains(this,t)?i.fn.apply(this,arguments):void 0;
}),i.del=d;
var v=d||a;
i.proxy=function(e){
if(e=c(e),!e.isImmediatePropagationStopped()){
e.customData=s;
var n=v.apply(t,e._args==p?[e]:[e].concat(e._args));
return n===!1&&(e.preventDefault(),e.stopPropagation()),n;
}
},i.i=h.length,h.push(i),"addEventListener"in t&&t.addEventListener(u(i.e),i.proxy,o(i,l));
});
}
function s(e,r,i,a,s){
var c=n(e);
(r||"").split(/\s/).forEach(function(n){
t(e,n,i,a).forEach(function(n){
delete g[c][n.i],"removeEventListener"in e&&e.removeEventListener(u(n.e),n.proxy,o(n,s));
});
});
}
function c(n,t){
return(t||!n.isDefaultPrevented)&&(t||(t=n),e.each(_,function(e,r){
var i=t[e];
n[e]=function(){
return this[r]=P,i&&i.apply(t,arguments);
},n[r]=z;
}),(t.defaultPrevented!==p?t.defaultPrevented:"returnValue"in t?t.returnValue===!1:t.getPreventDefault&&t.getPreventDefault())&&(n.isDefaultPrevented=P)),
n;
}
function f(e){
var n,t={
originalEvent:e
};
for(n in e)w.test(n)||e[n]===p||(t[n]=e[n]);
return c(t,e);
}
var p,d=(e.zepto.qsa,1),l=Array.prototype.slice,v=e.isFunction,h=function(e){
return"string"==typeof e;
},g={},m={},y="onfocusin"in window,E={
focus:"focusin",
blur:"focusout"
},b={
mouseenter:"mouseover",
mouseleave:"mouseout"
};
m.click=m.mousedown=m.mouseup=m.mousemove="MouseEvents",e.event={
add:a,
remove:s
},e.proxy=function(t,r){
if(v(t)){
var i=function(){
return t.apply(r,arguments);
};
return i._zid=n(t),i;
}
if(h(r))return e.proxy(t[r],t);
throw new TypeError("expected function");
},e.fn.bind=function(e,n,t){
return this.on(e,n,t);
},e.fn.unbind=function(e,n){
return this.off(e,n);
},e.fn.one=function(e,n,t,r){
return this.on(e,n,t,r,1);
};
var P=function(){
return!0;
},z=function(){
return!1;
},w=/^([A-Z]|returnValue$|layer[XY]$)/,_={
preventDefault:"isDefaultPrevented",
stopImmediatePropagation:"isImmediatePropagationStopped",
stopPropagation:"isPropagationStopped"
};
e.fn.delegate=function(e,n,t){
return this.on(n,e,t);
},e.fn.undelegate=function(e,n,t){
return this.off(n,e,t);
},e.fn.live=function(n,t){
return e(document.body).delegate(this.selector,n,t),this;
},e.fn.die=function(n,t){
return e(document.body).undelegate(this.selector,n,t),this;
},e.fn.on=function(n,t,r,i,o){
var u,c,d=this;
return n&&!h(n)?(e.each(n,function(e,n){
d.on(e,t,r,n,o);
}),d):(h(t)||v(i)||i===!1||(i=r,r=t,t=p),(v(r)||r===!1)&&(i=r,r=p),i===!1&&(i=z),
d.each(function(p,d){
o&&(u=function(e){
return s(d,e.type,i),i.apply(this,arguments);
}),t&&(c=function(n){
var r,o=e(n.target).closest(t,d).get(0);
return o&&o!==d?(r=e.extend(f(n),{
currentTarget:o,
liveFired:d
}),(u||i).apply(o,[r].concat(l.call(arguments,1)))):void 0;
}),a(d,n,i,r,t,c||u);
}));
},e.fn.off=function(n,t,r){
var i=this;
return n&&!h(n)?(e.each(n,function(e,n){
i.off(e,t,n);
}),i):(h(t)||v(r)||r===!1||(r=t,t=p),r===!1&&(r=z),i.each(function(){
s(this,n,r,t);
}));
},e.fn.trigger=function(n,t){
return n=h(n)||e.isPlainObject(n)?e.Event(n):c(n),n._args=t,this.each(function(){
"dispatchEvent"in this?this.dispatchEvent(n):e(this).triggerHandler(n,t);
});
},e.fn.triggerHandler=function(n,r){
var i,o;
return this.each(function(u,a){
i=f(h(n)?e.Event(n):n),i._args=r,i.target=a,e.each(t(a,n.type||n),function(e,n){
return o=n.proxy(i),i.isImmediatePropagationStopped()?!1:void 0;
});
}),o;
},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.trigger(n);
};
}),["focus","blur"].forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.each(function(){
try{
this[n]();
}catch(e){}
}),this;
};
}),e.Event=function(e,n){
h(e)||(n=e,e=n.type);
var t=document.createEvent(m[e]||"Events"),r=!0;
if(n)for(var i in n)"bubbles"==i?r=!!n[i]:t[i]=n[i];
return t.initEvent(e,r,!0),c(t);
};
}(Zepto);
});define("pages/video_collection/weapp_channel.js",["appmsg/weapp_common.js","biz_common/utils/url/parse.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
var s=e("appmsg/weapp_common.js"),o=e("biz_common/utils/url/parse.js"),a=e("biz_wap/jsapi/core.js"),n="wx792f0292c9a85439",i="gh_f92d56086797",p=!!o.getQuery("channel_session_id");
s.preloadMiniProgram(i);
var c=function(e,c,r){
p?a.invoke("closeWindow"):(r=void 0===r?1:r,s.jumpUrl({
options:{
appId:n,
userName:i,
relativeURL:e?o.addParam(e,"subScene",r):"pages/doubleVideos/doubleVideos.html?subScene="+r,
scene:c||1130,
sceneNote:r
},
appid:n
}));
};
return{
openChannel:c
};
});define("pages/video_collection/report.js",["pages/utils.js","biz_wap/jsapi/core.js","common/utils.js","biz_wap/utils/localstorage.js","biz_wap/utils/device.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","biz_common/base64.js"],function(e){
"use strict";
function i(e){
switch(e.EventType){
case 1:
y=e.StartTime;
break;

case 10:
k=e.StartTime;
break;

case 12:
b=e.StartTime;
break;

case 13:
f=e.StartTime;
break;

case 14:
T=e.StartTime;
break;

case 15:
if(!y)return;
var i=e.EndTime,n=k-y,t=i-y,o=i-k,a=e.extInfo,s=0===a.playCount&&a.previousCompletedSize>0,d=s?.2:g;
if(k&&n>0){
var r=window.__second_open__?21:24;
s&&(r=window.__second_open__?29:31),c.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:n
}
});
}
if(t>0){
var r=window.__second_open__?22:25;
s&&(r=window.__second_open__?27:28),c.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:t
}
}),console.log("[Video Save Speed] enterToPlayTime: "+t+" sid: "+r);
}
if(k&&o>0){
var r=window.__second_open__?23:26;
s&&(r=window.__second_open__?30:32),c.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:o
}
});
}
b&&k&&c.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:34,
time:b-k
}
}),f&&b&&c.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:35,
time:f-b
}
}),i&&T&&c.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:36,
time:i-T
}
}),c.send(),y=0,console.log("[system]","是否预加载: "+s),console.log("[system]","extInfo: "+JSON.stringify(a));
}
}
function n(e){
c.saveSpeeds({
sample:e.sample||g,
uin:l,
pid:v,
speeds:{
sid:e.sid,
time:e.time
}
});
}
function t(e){
"number"!=typeof e.StartTime&&(e.StartTime=Date.now()),"number"!=typeof e.EndTime&&(e.EndTime=Date.now()),
S.push({
type:5,
item:Object.keys(e).map(function(i){
return{
key:i,
val:e[i]+""
};
})
}),i(e);
}
function o(e){
j||(j=!0,t({
EventType:3
}),w.reportNow(function(i){
"function"==typeof e&&e(i),setTimeout(function(){
j=!1;
},1e3);
}));
}
var a=e("pages/utils.js"),s=e("biz_wap/jsapi/core.js"),d=e("common/utils.js"),r=e("biz_wap/utils/localstorage.js"),p=e("biz_wap/utils/device.js"),w=e("biz_wap/jsapi/leaveReport.js"),c=e("biz_wap/utils/wapsdk.js"),_=e("biz_common/base64.js").toBase64,m="function"==typeof window.btoa?window.btoa:_,l="";
try{
l=window.encodeURIComponent(m(window.user_uin));
}catch(u){
l="";
}
var v=2181,g=.02;
c.setBasicTime({
sample:g,
uin:l,
pid:v
});
var y=0,k=0,b=0,f=0,T=0,S=[],j=!1;
return s.invoke("handleMPPageAction",{
action:"getEnterTime"
},function(e){
var i=e.clickTimeMs,n=r.get("__get_enter_video_common_time__");
i+""!==n?(r.set("__get_enter_video_common_time__",i),console.log("[Video Enter Time]",i)):i=0,
t({
EventType:1,
MiaoKai:window.__second_open__?1:0,
StartTime:i||window.enter_time||Date.now(),
EndTime:i||window.enter_time||Date.now()
});
}),window.addEventListener("load",function(){
t({
EventType:7
});
}),window.top===window&&w.addReport(function(e){
if(!d.isWcSlPage())return!1;
window.__second_open_auth_time__&&t({
EventType:6,
StartTime:window.__second_open_auth_time__,
EndTime:window.__second_open_auth_time__
}),e||t({
EventType:2
});
var i=navigator.userAgent.match(/Mozilla.*?\((.*?)\)(\s|$)/),n=navigator.userAgent.match(/Language\/(.*?)(\s|$)/),o=0,s=window.networkType;
switch(s||(s=navigator.userAgent.match(/NetType\/(.*?)(\s|$)/),s=s&&s[1]&&s[1].toLowerCase()),
s){
case"wifi":
o=1;
break;

case"2g":
o=2;
break;

case"3g":
o=3;
break;

case"2g/3g":
o=3;
break;

case"4g":
o=4;
}
var r={
type:5,
item:[{
key:"DeviceModel",
val:i&&i[1]||"unknown"
},{
key:"DeviceBrand",
val:i&&i[1]||"unknown"
},{
key:"OsName",
val:["ios","android","windows","Mac"].filter(function(e){
return p.os[e];
})[0]||"unknown"
},{
key:"OsVersion",
val:p.os.version||"unknown"
},{
key:"LanguageVersion",
val:n&&n[1]||"unknown"
},{
key:"NetType",
val:o+""
},{
key:"EnterId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"EnterPageId",
val:1*(window.enterid||window.cgiData.enterid||parseInt(Date.now()/1e3,10))+""
},{
key:"AppMsgUrl",
val:window.location.href
},{
key:"Vid",
val:window.cgiData.vid
},{
key:"Scene",
val:1*(window.scene||window.cgiData.scene||a.getParam("scene"))+""
},{
key:"SubScene",
val:1*(window.subscene||window.cgiData.subscene||a.getParam("subscene"))+""
}]
},w=S;
return S=[],{
reportUrl:"https://mp.weixin.qq.com/mp/videoh5report",
reportData:JSON.stringify({
report:w,
comm_fields:r
}),
method:"POST"
};
}),{
add19735ExtData:t,
leaveReportNowForSwitchVideo:o,
saveSpeedsForVideo:n
};
});