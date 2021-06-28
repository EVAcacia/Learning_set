define("question_answer/reply_item.html.js",[],function(){
return'<section class="qa__reply-item js_qa_reply_item<# if (is_my_reply) { #> js_qa_my_reply<# } #>">\n  <div class="qa__reply-hd">\n    <div class="qa__reply-nickname">\n      <# if (is_biz_reply) { #>\n        作者      <# } else { #>\n        <#=user_info.nickname#>\n      <# } #>\n    </div>\n    <div class="qa__item-action">\n      <# if (is_my_reply && canOp) { #>\n        <div class="qa__action js_delete_reply" data-id="<#=reply_id#>"><i class="icon_delete"></i></div>\n      <# } #>\n      <!-- 精选之后的才能点赞 -->\n      <# if (replyStatus && isLogin) { #>\n        <div class="qa__action qa__action-praise js_qa_like<# if (my_like_status) { #> praised<# } #>" data-type="2" data-id="<#=reply_id#>">\n          <i class="icon_praise_gray"></i>\n          <span class="js_like_num" data-num="<#=like_num#>">\n            <#=likeNumFormated#>\n          </span>\n        </div>\n      <# } #>\n      <# if (!replyStatus) { #>\n        <div class="qa__action qa__action_normal">未精选</div>\n      <# } #>\n    </div>\n  </div>\n  <p class="qa__reply-content js_qa_reply_content"><#=content#></p>\n</section>\n';
});define("question_answer/answer_item.html.js",[],function(){
return'<div class="qa__list-item js_qa_list_item">\n  <!-- 层主头像 -->\n  <section class="qa__item-avatar">\n    <img src="<#=user_info.headimg#>">\n  </section>\n  <section class="qa__item-bd">\n    <div class="qa__item-info">\n      <!-- 层主昵称 -->\n      <div class="qa__item-nickname">\n        <#=user_info.nickname#>\n      </div>\n      <!-- 点赞 -->\n      <div class="qa__item-action">\n        <!-- span加praised点赞 -->\n        <# if (is_my_answer && canOp) { #>\n          <div class="qa__action js_delete_answer" data-id="<#=answer_id#>"><i class="icon_delete"></i></div>\n        <# } #>\n        <!-- 精选之后的才能点赞 -->\n        <# if (answer_status && isLogin) { #>\n          <div class="qa__action qa__action-praise js_qa_like<# if (my_like_status) { #> praised<# } #>" data-type="1" data-id="<#=answer_id#>">\n            <i class="icon_praise_gray"></i>\n            <span class="js_like_num" data-num="<#=like_num#>">\n              <#=likeNumFormated#>\n            </span>\n          </div>\n        <# } #>\n        <# if (!answer_status) { #>\n          <div class="qa__action qa__action_normal">未精选</div>\n        <# } #>\n      </div>\n    </div>\n\n    <!-- 回答内容 -->\n    <p class="qa__item-content js_qa_item_content"><#=content#></p>\n    <!-- <# if (is_my_answer && canOp) { #>\n    <div class="qa__action qa__action-reply js_write_reply" data-answerid="<#=answer_id#>" data-answersn="<#=answer_sn#>" <# if (replyListHtml) { #>style="display: none;"<# } #>><span>回复</span></div>\n    <# } #> -->\n\n    <!-- 回复 -->\n    <section class="qa__reply">\n      <section class="js_qa_reply_list js_qa_reply_list_<#=answer_id#>">\n        <#=replyListHtml#>\n      </section>\n      <# if (replyListHtml && leftReplyCount) { #>\n        <p class="qa__reply-more js_get_more_reply js_get_more_reply_<#=answer_id#>" data-answerid="<#=answer_id#>" data-answersn="<#=answer_sn#>">\n          <#=leftReplyTips#>\n        </p>\n      <# } #>\n      <!-- <# if (is_my_answer && canOp) { #>\n      <div class="qa__action qa__action-reply js_write_reply" data-answerid="<#=answer_id#>" data-answersn="<#=answer_sn#>" <# if (!replyListHtml) { #>style="display: none;"<# } #>><span>回复</span></div>\n      <# } #> -->\n    </section>\n  </section>\n</div>\n';
});define("question_answer/qa_card.html.js",[],function(){
return'<span class="qa__card js_qa_card_inner">\n  <# if (qaDeleted) { #>\n    <span class="qa__card-deleted">讨论内容已被删除</span>\n  <# } else { #>\n    <span>\n      <span class="qa__card-hd">\n        <span class="qa__hd-notice"><#=nickname#> 发起了一个读者讨论</span>\n        <span class="qa__hd-question"><#==title#></span>\n      </span>\n      <# if (!answerCount) { #>\n        <# if (isLogin) { #>\n          <!-- <# if (disableAnswerWord) { #>\n            <span class="qa__list-answer qa__list-answer_desc"><#=disableAnswerWord#></span>\n          <# } else { #>\n            <span class="qa__list-answer js_qa_write_answer">参与讨论</span>\n          <# } #> -->\n          <span class="qa__list-answer qa__list-answer_desc">讨论已结束</span>\n        <# } #>\n      <# } else { #>\n        <span>\n          <span class="qa__list-hd">\n            <span class="qa__list-hd-title js_qa_list_head_title">精选讨论内容</span>\n            <!-- <# if (isLogin) { #>\n              <# if (disableAnswerWord) { #>\n                <span class="qa__list-hd-desc"><#=disableAnswerWord#></span>\n              <# } else { #>\n                <span class="qa__list-hd-action js_qa_write_answer">参与讨论</span>\n              <# } #>\n            <# } #> -->\n          </span>\n          <span class="qa__list js_qa_qna_answer_list"><#==answerListStr#></span>\n          <# if (leftAnswerCnt) { #>\n            <p class="qa__list-more js_more_answer_entry" data-count="<#=answerCount#>"><#=leftAnswerCnt#></p>\n          <# } #>\n        </span>\n      <# } #>\n    </span>\n  <# } #>\n</span>\n';
});define("pages/weapp_tpl.html.js",[],function(){
return'<span class="weapp_card app_context pages_reset appmsg_card_context appmsg_card_active">\n    <span class="weapp_card_bd">\n        <span class="weapp_card_profile flex_context">\n            <span class="radius_avatar weapp_card_avatar">\n                <img src="<#=avatar#>">\n            </span>\n            <span class="flex_bd">\n              <span class="weapp_card_nickname_wrp">\n                <span class="guarantee_icon">交易担保</span>\n                <span class="weapp_card_nickname"><#=nickname#></span>\n              </span>\n            </span>\n        </span>\n        <span class="weapp_card_info">\n            <span class="weapp_card_title"><#=title#></span>\n            <span class="weapp_card_thumb_wrp" style="background-image:url(<#=imageUrl#>);"></span>\n        </span>\n    </span>\n    <span class="weapp_card_ft">\n        <span class="weapp_card_logo">小程序</span>\n    </span>\n</span>\n';
});define("appmsg/poi/poi_tpl.html.js",[],function(){
return'<div class="ct_geography_loc_card weapp_card app_context appmsg_card_context appmsg_card_active" data-id="<#=data.id#>" data-latitude="<#=data.latitude#>" data-longitude="<#=data.longitude#>">\n  <!-- 插入地理位置 -->\n  <!-- 卡片式插入地理位置 -->\n  <div class="location_title line-clamp1"><#=data.name#></div>\n  <div class="location_detail line-clamp1"><#=data.address#></div>\n  <div class="location_img_wrp" style="background-image:url(<#=data.img#>);">\n    <!-- <img style="pointer-events: none;" class="location_img" src="<#=data.img#>" />  -->\n    <!-- <div class="location_img" ></div>  -->\n  </div>\n  \n</div>\n\n<!-- 纯文本式插入地理位置 -->\n<!-- <a class="ct_geography_loc_tip">\n  <i class="geography_loc_icon"></i>\n  广东省广州市天河区华丽路45-64保利香槟花园广东省广州市天河区华丽路45-64保利香槟花园</a> -->\n';
});define("appmsg/search/search_tpl.html.js",[],function(){
return'<span class="appmsg_card_context appmsg_card_active appmsg_search_card">\n  <!-- 搜索推荐 -->\n  <span class="appmsg_search_hd weui-flex">\n    <img class="appmsg_search_avatar" src="<#==data.avatar#>">\n    <span class="weui-flex__item">\n      <span class="appmsg_search_nickname_wrp"><span class="appmsg_search_nickname"><#==data.nickname#></span>推荐搜索</span>\n    </span>\n  </span>\n  <span class="appmsg_search_bd">\n    <span class="appmsg_search_keywords_area">\n      <div class="appmsg_search_keywords_hd">\n        <i class="weui-icon-search"></i>\n      </div>\n      <div class="appmsg_search_keywords_list">\n        <# data.keywords.forEach(function (k, index) { #>\n        <div class="appmsg_search_keywords"><#=k.label#></div>\n        <# }); #>\n      </div>\n    </span>\n  </span>\n</span>\n';
});define("pages/player_tips.js",["biz_common/tmpl.js","pages/audition_tpl.html.js","biz_common/dom/event.js"],function(t){
"use strict";
function i(t){
this.parent=document.body,this.opt=t||{},this.init();
}
var n=t("biz_common/tmpl.js"),e=t("pages/audition_tpl.html.js"),o=t("biz_common/dom/event.js");
return i.prototype.init=function(){
var t=document.createElement("div");
t.innerHTML=n.tmpl(e,this.opt,!1),this.parent.appendChild(t),this.dom=document.getElementById("js_music_dialog");
var i=this;
o.on(i.dom.getElementsByClassName("js_submit")[0],"click",function(){
i.parent.removeChild(t),"function"==typeof i.opt.onClick&&i.opt.onClick();
});
},i;
});define("redpackage/tpl/card_tpl.html.js",[],function(){
return'<#if(!isUpdate){#>\n<section class="js_wap_redpacketcover red_package_cover_wrp" data-coveruri="<#=data.cover_uri#>">\n<#}#>\n    <!--不可操作，这里加className point_event_no-->\n    <!--todo 加载中加className red_package_cover__inner__loading-->\n    <section class="red_package_cover__inner">\n        <section class="red_package_cover__inner__main">\n            <section class="red_package_cover__body">\n                <!--图片没加载处理，这里加className red_package_cover_img_loading-->\n                <span class="red_package_cover_img" style="background-image: url(\'<#=data.receive_image#>\');"></span>\n            </section>\n            <section class="red_package_cover__foot">\n                <#if(data.status * 1===0){#>\n                <span class="red_package_cover__access-link">领取<#=data.name#>红包封面</span>\n                <#}else if(data.status * 1===1){#>\n                <span class="red_package_cover__access-link disabled">已领取红包封面</span>\n                <#}else if(data.status * 1===2){#>\n                <span class="red_package_cover__access-link disabled">红包封面已领取完</span>\n                <#}else{#>\n                <span class="red_package_cover__access-link disabled">红包封面不可领取</span>\n                <#}#>\n            </section>\n        </section>\n        <section class="red_package_cover__extend">\n            <span class="red_package_cover__extend_icon"></span>\n            <span class="red_package_cover__extend_info">微信红包封面</span>\n        </section>\n    </section>\n<#if(!isUpdate){#>\n</section>\n<#}#>';
});define("pages/voice_tpl.html.js",[],function(){
return'<span class="js_audio_frame db pages_reset audio_area <#if(!!albumLink){#>audio_area_tag<#}#>">\n    <#if(show_not_support===true){#>\n    <span class="db">当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放</span>\n    <#}#>\n    <!-- 无话题的时候点击倍数等播放区域外的卡片区域：audio_card加.appmsg_card_custom_active -->\n    <!-- 有话题的时候点击非话题区域，且倍数等播放区域外的卡片区域：audio_card加.appmsg_card_custom_active -->\n    <span aria-labelledby="语音" id="voice_main_<#=voiceid#>_<#=posIndex#>" class="appmsg_card_context db audio_card" <#if(!musicSupport){#>style="display:none;"<#}#>>\n      <span id="audio_card_bd_<#=voiceid#>_<#=posIndex#>" class="audio_card_bd">\n        <strong id="voice_title_<#=voiceid#>_<#=posIndex#>" class="audio_card_title" aria-describedby="语音标题" role="link"><#=title#></strong>\n\n        <!-- <#if(!!nickname){#>\n        <span id="voice_author_<#=voiceid#>_<#=posIndex#>" class="audio_card_desc">来自<#=nickname#></span>\n        <#}#> -->\n\n        <span class="weui-flex weui-flex_align-center">\n          <span class="weui-flex__item">\n            <span class="audio_card_opr">\n              <span id="voice_seekRange_<#=voiceid#>_<#=posIndex#>" class="audio_card_progress_wrp">\n                <span class="audio_card_progress">\n                  <span id="voice_progress_<#=voiceid#>_<#=posIndex#>" style="width:0%" class="audio_card_progress_inner"></span>\n                  <span id="voice_buffer_<#=voiceid#>_<#=posIndex#>" class="audio_card_progress_buffer" style="width:0%;"></span>\n                  <span id="voice_loading_<#=voiceid#>_<#=posIndex#>" class="audio_card_progress_loading" style="display:none;"></span>\n                </span>\n              <span id="voice_playdot_<#=voiceid#>_<#=posIndex#>" class="audio_card_progress_handle" style="display:none;left:0%;"></span>\n              </span>\n              <span class="audio_card_tips" aria-labelledby="时长">\n                <em id="voice_playtime_<#=voiceid#>_<#=posIndex#>" class="audio_card_length_current" aria-hidden="true">00:00</em>\n                <em id="voice_duration_<#=voiceid#>_<#=posIndex#>" class="audio_card_length_total"><#=duration_str#></em>\n              </span>\n            </span>\n          </span>\n          <span id="voice_play_<#=voiceid#>_<#=posIndex#>" aria-labelledby="播放开关" class="audio_card_switch"><em id="audio_play_btn" class="weui-audio-btn" role="button"></em></span>\n        </span>\n\n        <span id="audio_card_control_<#=voiceid#>_<#=posIndex#>" class="weui-flex weui-flex_align-center audio_card_playtool" style="display: none;">\n          <button type="button" id="audio_fast_back_<#=voiceid#>_<#=posIndex#>" class="reset_btn audio_card_playbtn"><span class="aria_hidden_abs">后退15秒</span></button>\n          <button type="button" id="audio_double_speed_<#=voiceid#>_<#=posIndex#>" class="weui-btn weui-btn_mini audio_card_playbtn_multiple">倍速</button>\n          <button type="button" id="audio_fast_forward_<#=voiceid#>_<#=posIndex#>" class="reset_btn audio_card_playbtn"><span class="aria_hidden_abs">快进15秒</span></button>\n        </span>\n      </span>\n\n      <#if(!!albumLink){#>\n      <span class="audio_card_ft">\n        <span role="link" id="voice_album_<#=voiceid#>_<#=posIndex#>" class="audio__tag" data-link="<#=albumLink#>" data-title="<#=albumTitle#>" data-album="<#=albumid#>" target="_blank">\n          <span class="audio__tag-title">话题</span>\n          <span class="weui-flex__item">\n            <span class="audio__tag-name">#<#=albumTitle#></span>\n          </span>\n          <span class="audio__tag-num"><#=albumNum#>个</span>\n        </span>\n      </span>\n      <#}#>\n    </span>\n</span>\n\n';
});define("pages/kugoumusic_ctrl.js",["biz_wap/utils/jsmonitor_report.js","biz_wap/utils/ajax.js","pages/musicUrlReport.js"],function(e){
"use strict";
function r(e,r){
for(var t,a=[/^http(s)?:\/\/singerimg\.kugou\.com([\/?].*)*$/i,/^http(s)?:\/\/imge\.kugou\.com([\/?].*)*$/i],o=!1,s=0;t=a[s++];)if(t.test(e.albumurl)){
o=!0;
break;
}
return o||(e.albumurl=""),e.detailUrl="https://m3ws.kugou.com/kgsong/"+e.jumpurlkey+".html?fromweixin=",
e.webUrl=e.detailUrl,e.musicIcon=n.musicIcon,e.media_id=e.musicid,e.type=1*r.scene===0?5:1*r.scene===1?6:9,
e;
}
function t(e,r){
var t=e,a=t.otherid+(t.albumid||""),s=n.cache[a];
return s&&"function"==typeof r.callback?void r.callback(s):void(n.submiting[a]!==!0&&(n.submiting[a]=!0,
o({
jumpurlkey:t.jumpurlkey,
songId:t.songId,
akey:t.otherid,
albumid:t.albumid||"",
onSuc:function(e){
n.submiting[a]=!1,n.cache[a]=e,"function"==typeof r.callback&&r.callback(e);
},
onError:function(){
n.submiting[a]=!1,"function"==typeof r.callback&&r.callback({
canplay:!1,
msg:"系统繁忙，请稍后再试。返回码：-1",
status:-1,
play_url:"",
duration:0
});
}
})));
}
function a(e){
var r=!0,t="";
switch(1*e){
case 0:
r=!0;
break;

case 1:
r=!1,t="该歌曲版权已过期，无法播放。";
break;

case 1002:
r=!1,t="系统错误，请稍后再试。";
break;

case 1001:
r=!1,t="系统错误，请稍后再试。";
break;

default:
r=!1,t="系统错误，请稍后再试。";
}
return t&&(t+="错误码："+e),{
canplay:r,
msg:t
};
}
function o(e){
u.setSum(n.reportId,87,1);
var r=+new Date,t="/mp/getkugousong?params=#params#",o=[{
akey:e.akey,
albumid:e.albumid||""
}],m=encodeURIComponent(JSON.stringify(o));
t=t.replace("#params#",m),c({
url:t,
type:"GET",
dataType:"json",
success:function(t){
var o=+new Date-r;
if(setTimeout(function(){
i.reportRespData({
type:2,
songid:e.songId,
musicid:e.akey,
jumpurlkey:e.jumpurlkey,
responseData:JSON.stringify(t||{}),
kugouParams:m
});
},0),!t||"undefined"==typeof t.errcode){
var u=1;
return s({
type:"error",
time:o,
code:u
}),void("function"==typeof e.onError&&e.onError({
errcode:u
}));
}
var c=0,n="";
0==t.errcode?t.data&&t.data[0]&&t.data[0].url?(c=0,n=t.data[0].url):c=1001:c=1==t.errcode?1:1002,
s({
type:"success",
time:o,
code:c
});
var p=a(c);
e.onSuc({
canplay:p.canplay,
msg:p.msg,
errcode:c,
play_url:n
});
},
error:function(){
var t=+new Date-r,a=2;
s({
type:"error",
time:t,
code:a
}),"function"==typeof e.onError&&e.onError({
errcode:a
});
}
});
}
function s(e){
var r=Math.max(e.time,0);
if(r=Math.min(r,1e4),r>=0&&500>r?u.setSum(n.reportId,98,1):r>=500&&1e3>r?u.setSum(n.reportId,99,1):r>=1e3&&2e3>r?u.setSum(n.reportId,100,1):r>=2e3&&5e3>r?u.setSum(n.reportId,101,1):r>=5e3&&1e4>=r&&u.setSum(n.reportId,102,1),
"error"==e.type){
switch(1*e.code){
case 1:
u.setSum(n.reportId,94,1);
break;

case 2:
u.setSum(n.reportId,91,1);
break;

case 3:
u.setSum(n.reportId,92,1);
break;

case 4:
u.setSum(n.reportId,93,1);
}
u.setSum(n.reportId,88,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
u.setSum(n.reportId,95,1);
break;

case 0:
u.setSum(n.reportId,97,1);
break;

case 1002:
u.setSum(n.reportId,96,1);
break;

case 1001:
u.setSum(n.reportId,103,1);
}
u.setSum(n.reportId,89,1);
}
}
var u=e("biz_wap/utils/jsmonitor_report.js"),c=e("biz_wap/utils/ajax.js"),i=e("pages/musicUrlReport.js"),n={
reportId:"28306",
musicIcon:window.icon_kugou_source||"",
cache:{},
submiting:{}
};
return{
initData:r,
getPlayUrl:t
};
});define("pages/qqmusic_ctrl.js",["biz_wap/utils/jsmonitor_report.js","pages/player_adaptor.js","biz_wap/jsapi/log.js","biz_wap/utils/ajax.js","pages/musicUrlReport.js"],function(e){
"use strict";
function r(e,r){
if(/^http(s)?:\/\//i.test(e.albumurl)){
for(var t,a=[/^http(s)?:\/\/imgcache\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/y\.gtimg\.cn([\/?].*)*$/i],s=!1,i=0;t=a[i++];)if(t.test(e.albumurl)){
s=!0;
break;
}
s||(e.albumurl="");
}else{
var o=e.albumurl.split("/");
try{
o=o[o.length-1],o=o.split(".")[0];
}catch(n){
o="";
}
e.albumurl=o?m.imgroot2.replace("#mid#",o):m.imgroot+e.albumurl;
}
return e.albumurl=e.albumurl.replace("mid_album_68","mid_album_90").replace("68x68","90x90"),
e.musicIcon=m.musicIcon,e.type=1*r.scene===0?0:1*r.scene===1?1:8,c.inQMClient?(e.allowPause=!0,
e.detailUrl="",e.pauseCss="qqmusic_playing_pause",e.webUrl=e.detailUrl):(e.allowPause=!1,
e.pauseCss="",e.detailUrl=["http://i.y.qq.com/v8/playsong.html?referFrom=music.qq.com&songid=",e.musicid,"&songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),
e.webUrl=e.detailUrl),e;
}
function t(e,r){
var t=e,a=m.cache[t.songId];
return c.inQMClient?void r.callback({
canplay:!0,
play_url:"https://www.qq.com"
}):a&&"function"==typeof r.callback&&(a.canplay||!a.canplay&&!a.retry)?(a.in_cache=!0,
void r.callback(a)):void(m.submiting[t.songId]!==!0&&(m.submiting[t.songId]=!0,a&&o.setSum(m.reportId,122,1),
s({
id:t.songId,
mid:t.mid,
onSuc:function(e){
m.submiting[t.songId]=!1,m.cache[t.songId]&&!m.cache[t.songId].canplay&&e.canplay&&o.setSum(m.reportId,123,1),
m.cache[t.songId]=e,"function"==typeof r.callback&&r.callback(e);
},
onError:function(){
m.submiting[t.songId]=!1,"function"==typeof r.callback&&r.callback({
canplay:!1,
msg:"系统繁忙，请稍后再试。",
status:-1,
play_url:"",
duration:0
});
}
})));
}
function a(e){
var r=!0,t=!1,a="";
switch(1*e){
case 0:
r=!0;
break;

case 1:
r=!1,a="因版权限制，音乐无法播放。";
break;

case 2:
r=!1,a="因版权限制，音乐无法播放。";
break;

case 3:
r=!1,a="因版权限制，音乐无法播放。";
break;

case 4:
r=!1,a="当前区域因版权限制，音乐无法播放。";
break;

case 5:
r=!1,t=!0,a="播放失败，请稍后再试。";
break;

case 6:
r=!1,t=!0,a="系统错误，请稍后再试。";
break;

case 7:
r=!1,t=!0,a="系统错误，请稍后再试。";
break;

case 8:
r=!0,a="该音乐为付费音乐，当前为你播放试听片段。";
break;

default:
r=!1,a="系统错误，请稍后再试。";
}
return{
canplay:r,
msg:a,
retry:t
};
}
function s(e){
o.setSum(m.reportId,18,1);
var r=+new Date,t="//mp.weixin.qq.com/mp/qqmusic?action=get_song_info&song_mid=#mid#";
t=t.replace("#mid#",e.mid),p({
url:t,
type:"GET",
dataType:"json",
success:function(t){
var s=+new Date-r;
if(200==t.http_code){
setTimeout(function(){
u.reportRespData({
type:1,
songid:e.id,
musicid:e.mid,
responseData:t.resp_data||""
});
},0);
var o={};
try{
o=JSON.parse(t.resp_data);
}catch(c){
var p=1;
return i({
type:"error",
time:s,
code:p
}),"function"==typeof e.onError&&e.onError({
errcode:p
}),void n.info("qqmusic_checkCopyright_parsefail mid:"+e.mid+", repsponeData:"+t.resp_data);
}
if("undefined"==typeof o.ret||0!=o.ret||0!=o.sub_ret||0==o.songlist.length){
var p=1;
return i({
type:"error",
time:s,
code:p
}),"function"==typeof e.onError&&e.onError({
errcode:p
}),void n.info("qqmusic_checkCopyright_dataerror mid:"+e.mid+", repsponeData:"+t.resp_data);
}
var m,l=o.songlist[0],d=l.song_play_url,b=l.song_play_time||0;
if(l.playable)m=d?0:6;else if(l.try_playable)l.try_file_size>0&&l.try_30s_url?(m=8,
d=l.try_30s_url,b=30):m=7;else switch(1*l.unplayable_code){
case 1:
m=1;
break;

case 2:
m=2;
break;

case 3:
m=3;
break;

case 4:
m=4;
break;

case 5:
m=5;
break;

default:
m=5;
}
i({
type:"success",
time:s,
code:m
});
var y=a(1*m);
e.onSuc({
canplay:y.canplay,
retry:y.retry,
msg:y.msg,
status:m,
play_url:d||"",
duration:b
}),y.canplay||n.info("qqmusic_checkCopyright_cannotplay mid:"+e.mid+", repsponeData:"+t.resp_data);
}else{
var p=4;
switch(t.http_code){
case 200:
break;

case 400:
p=2;
break;

case 500:
p=3;
break;

default:
p=4;
}
i({
type:"error",
time:s,
code:p
}),"function"==typeof e.onError&&e.onError({
errcode:p
});
}
},
error:function(){
"function"==typeof e.onError&&e.onError({
errcode:4
});
}
});
}
function i(e){
var r=Math.max(e.time,0);
if(r=Math.min(r,6e4),e.time>=0&&e.time<200?o.setSum(m.reportId,24,1):e.time>=200&&e.time<500?o.setSum(m.reportId,25,1):e.time>=500&&e.time<1e3?o.setSum(m.reportId,26,1):e.time>=1e3&&e.time<2e3?o.setSum(m.reportId,27,1):e.time>=2e3&&e.time<1e4?o.setSum(m.reportId,28,1):e.time>=1e4&&o.setSum(m.reportId,29,1),
o.setAvg(m.reportId,23,r),"error"==e.type){
switch(1*e.code){
case 1:
o.setSum(m.reportId,9,1);
break;

case 2:
o.setSum(m.reportId,10,1);
break;

case 3:
o.setSum(m.reportId,11,1);
break;

case 4:
o.setSum(m.reportId,12,1);
}
o.setSum(m.reportId,19,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
o.setSum(m.reportId,8,1);
break;

case 0:
o.setSum(m.reportId,17,1);
break;

case 2:
o.setSum(m.reportId,13,1);
break;

case 3:
o.setSum(m.reportId,14,1);
break;

case 4:
o.setSum(m.reportId,15,1);
break;

case 5:
o.setSum(m.reportId,16,1);
break;

case 6:
o.setSum(m.reportId,47,1);
break;

case 7:
o.setSum(m.reportId,120,1);
break;

case 8:
o.setSum(m.reportId,121,1);
}
o.setSum(m.reportId,20,1);
}
}
var o=e("biz_wap/utils/jsmonitor_report.js"),c=e("pages/player_adaptor.js"),n=e("biz_wap/jsapi/log.js"),p=e("biz_wap/utils/ajax.js"),u=e("pages/musicUrlReport.js"),m={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_90",
imgroot2:"https://y.gtimg.cn/music/photo_new/T002R90x90M000#mid#.jpg",
reportId:"28306",
musicIcon:window.icon_qqmusic_source||"",
cache:{},
submiting:{}
};
return{
initData:r,
getPlayUrl:t
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var a=arguments[t];
for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);
}
return e;
};
define("pages/voice_component.js",["biz_wap/zepto/zepto.js","biz_common/dom/event.js","biz_common/tmpl.js","pages/music_player.js","pages/player_adaptor.js","biz_common/dom/class.js","pages/report.js","pages/music_report_conf.js","pages/player_tips.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","biz_wap/utils/openUrl.js","pages/qqmusic_ctrl.js","pages/kugoumusic_ctrl.js","album/utils/report.js","common/comm_report.js"],function(e){
"use strict";
function t(){
j.hasInit||(i(),n(),p(),j.hasInit=!0);
}
function a(e){
t(),this._o={
protocal:"",
wxIndex:0,
type:0,
comment_id:"",
src:"",
jsapi2Src:"",
mid:"",
songId:"",
otherid:"",
albumid:"",
jumpurlkey:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
appPlay:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
musicbar_url:"",
playingCss:"",
pauseCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0,
playtimeDom:"",
loadingDom:"",
bufferDom:"",
playdotDom:"",
seekRange:"",
seekContainer:""
},this._init(e),j.allComponent.push(this);
}
function o(e){
if(!e.isReport){
var t=(e.getAttribute("data-link"),$(e).parent().parent().siblings()),a=$(e).data("album"),o=t.attr("voice_encode_fileid"),r=$(e).data("title");
e.isReport=1,P.cardReport({
albumId:a,
albumType:7,
eventType:1,
audioid:o,
title:r
});
}
}
function r(e,t,a,o){
j.num++,t.musicSupport=j.musicSupport,t.show_not_support=!1,j.musicSupport||1!=j.num||(t.show_not_support=!0);
var r=document.createElement("div"),n="";
if(n=m.tmpl(e,t,!1),r.innerHTML=n,o===!0)a.appendChild(r.children[0]);else{
var i=a.parentNode;
if(!i)return;
i.lastChild===a?i.appendChild(r.children[0]):i.insertBefore(r.children[0],a.nextSibling);
}
}
function n(){
j.hasInit||h.inQMClient&&s("QMClient_pv",1);
}
function i(){
window.reportMid=[],window.reportVoiceid=[];
for(var e in w)if(w.hasOwnProperty(e)){
var t=w[e],a=t.split("_");
j.reportData2[e]={
id:a[0],
key:a[1],
count:0
};
}
}
function s(e,t){
j.reportData2[e]&&(t=t||1,j.reportData2[e].count+=t,j.debug&&console.log("addpv:"+e+" count:"+j.reportData2[e].count));
}
function p(){
I.gtVersion("7.0.6")||y.on(window,"unload",function(){
for(var e=l(),t=JSON.parse(e.report_list),a=0;a<t.length;a++)x({
type:"POST",
url:"/mp/musicreport?#wechat_redirect",
timeout:2e4,
async:!0,
data:t[a]
});
}),j.repotIntervalId&&clearInterval(j.repotIntervalId),j.repotIntervalId=setInterval(function(){
c();
},3e4);
}
function l(){
f.triggerUnloadPlaying(),c();
for(var e,t={},a=0,o=j.allComponent.length;o>a;a++){
var r=j.allComponent[a];
r.player&&"function"==typeof r.player.getPlayTotalTime&&(j.reportData[r._o.type].play_last_time[r._g.posIndex]=parseInt(1e3*r.player.getPlayTotalTime())),
"number"!=typeof r._status||1!==r._status&&4!==r._status||(e=r._o.songId);
}
e&&(t.current_musicid=e);
var n=[];
for(var a in j.reportData)n=n.concat(D.musicreport({
data:j.reportData[a]
}));
t.report_list=JSON.stringify(n),i();
for(var a=0,o=j.allComponent.length;o>a;a++){
var r=j.allComponent[a];
r&&"function"==typeof r._initReportData&&r._initReportData(),r.player&&"function"==typeof r.player.resetPlayTotalTime&&r.player.resetPlayTotalTime();
}
return t;
}
function c(){
var e=[];
for(var t in j.reportData2)if(j.reportData2.hasOwnProperty(t)){
var a=j.reportData2[t];
a.count>0&&(e.push(a.id+"_"+a.key+"_"+a.count),a.count=0);
}
e.length>0&&x({
type:"POST",
url:"/mp/jsmonitor?#wechat_redirect",
timeout:2e4,
async:!1,
data:{
idkey:e.join(";"),
t:Math.random()
}
});
}
function d(e){
return new a(e);
}
function u(e){
if(isNaN(e))return"00:00";
e=Math.floor(e);
var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),o=e-3600*t-60*a;
return 0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>a&&(a="0"+a),10>o&&(o="0"+o),t+a+":"+o;
}
function _(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function g(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
e("biz_wap/zepto/zepto.js");
var y=e("biz_common/dom/event.js"),m=e("biz_common/tmpl.js"),f=e("pages/music_player.js"),h=e("pages/player_adaptor.js"),v=e("biz_common/dom/class.js"),D=e("pages/report.js"),w=e("pages/music_report_conf.js"),b=e("pages/player_tips.js"),k=e("biz_wap/jsapi/leaveReport.js"),I=e("biz_wap/utils/mmversion.js"),x=e("biz_wap/utils/ajax.js"),C=e("biz_wap/utils/openUrl.js").openUrlWithExtraWebview,j={
allComponent:[],
hasInit:!1,
reportId:"28306",
musicSupport:f.getSurportType(),
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
reportData:{},
posIndex:{},
num:0,
reportData2:{},
adapter:{
m:e("pages/qqmusic_ctrl.js"),
k:e("pages/kugoumusic_ctrl.js")
},
needReport11982:!1,
repotIntervalId:null,
inWechat:I.isWp||/MicroMessenger/.test(window.navigator.userAgent),
inPC:I.isWindows||I.isMac&&!I.isIOS,
fastForwardSec:15,
fastBackSec:15
},P=e("album/utils/report.js"),S=e("common/comm_report.js"),B=null;
return"function"==typeof IntersectionObserver&&(B=new IntersectionObserver(function(e){
e.forEach(function(e){
e.isIntersecting&&o(e.target);
});
})),a.prototype._init=function(e){
this._extend(e),this._g={
posIndex:void 0,
tag:"",
canDragBar:!1,
barDraging:!1,
canGoDetail:!0
},5==this._o.type||6==this._o.type||9==this._o.type?this._g.tag="k":this._o.type>=2&&this._o.type<=4?this._g.tag="v":7==this._o.type?this._g.tag="a":(0==this._o.type||1==this._o.type||8==this._o.type)&&(this._g.tag="m"),
this._initData(),this._initQQmusicLyric(),this._initReportData(),this._initPlayer();
},a.prototype._initData=function(){},a.prototype._initQQmusicLyric=function(){
var e=this._o,t=this._g;
e.webUrl="m"==t.tag?e.webUrl.replace("#songId#",e.songId||"").replace("#referFrom#","music.qq.com"):e.webUrl.replace("#songId#","").replace("#referFrom#","");
},a.prototype._initReportData=function(){
var e=this._o,t=this._g;
"v"==t.tag?window.reportVoiceid.push(e.songId):"m"==t.tag&&window.reportMid.push(e.songId),
"undefined"==typeof j.reportData[e.type]&&(j.reportData[e.type]=D.getMusicReportData(e),
j.posIndex[e.type]=0),"undefined"==typeof t.posIndex&&(t.posIndex=j.posIndex[e.type]++);
var a=j.reportData[e.type];
a.musicid[t.posIndex]=e.songId,a.commentid[t.posIndex]=e.comment_id,a.hasended[t.posIndex]=0,
a.mtitle[t.posIndex]=e.title,a.detail_click[t.posIndex]=0,a.duration2[t.posIndex]=parseInt(1e3*e.duration),
a.errorcode[t.posIndex]=0,a.play_duration2[t.posIndex]=0,a.seek[t.posIndex]=0,a.seek_position[t.posIndex]=[],
a.play_last_time[t.posIndex]=0,a.local_time[t.posIndex]=0,a.seek_loaded[t.posIndex]=[];
},a.prototype._initPlayer=function(){
if(j.musicSupport){
var e=this,t=this._o,a=this._g.tag;
t.onStatusChange=this._statusChangeCallBack(),t.onTimeupdate=this._timeupdateCallBack(),
t.onError=this._errorCallBack(),t.onUpdateSeekRange=this._onUpdateSeekRange(),t.onAndroidForceH5=function(){
s("force_h5",1);
},t.onH5Begin2Play=function(){
s(a+"_pv",1),s(a+"_h5_pv",1);
},t.onH5Error=function(t,o){
s(a+"_h5_err_total",1),s(a+"_h5_err_"+o.code,1),e._reportH5Error({
type:1,
code:o.code
});
},t.onJsapi1Begin2Play=function(){
s(a+"_pv",1),s(a+"_wx_pv",1),s(a+"_wx_pv_1",1);
},t.onJsapi2Begin2Play=function(e,o){
s(a+"_pv",1),s(a+"_wx_pv",1),s(a+"_wx_pv_2",1),t.jsapi2Src&&t.jsapi2Src!=t.src&&s("aac_pv",1),
t.musicPlayerOnJsapi2Begin2Play&&t.musicPlayerOnJsapi2Begin2Play(o);
},t.onJsapi2PlaySuccess=function(e,a){
t.musicPlayerOnJsapi2PlaySuccess&&t.musicPlayerOnJsapi2PlaySuccess(a);
},t.onJsapi2Begin2PlayErr=function(){
if(s(a+"_wx_err_1",1),t.jsapi2Src&&t.jsapi2Src!=t.src){
var e="acc_start_error;type:#type#;uin:"+(window.user_uin||"")+";playurl:"+t.jsapi2Src+";pageurl:"+location.href;
f.isAndroid?(D.logReport("",e.replace("#type#","android"),"ajax"),s("android_aac_err_1",1)):(D.logReport("",e.replace("#type#","ios"),"ajax"),
s("ios_aac_err_1",1));
}
},t.onJsapi2PlayingErr=function(){
if(s(a+"_wx_err_2",1),t.jsapi2Src&&t.jsapi2Src!=t.src){
var e="acc_ing_error;type:#type#;uin:"+(window.user_uin||"")+";playurl:"+t.jsapi2Src+";pageurl:"+location.href;
f.isAndroid?(D.logReport("",e.replace("#type#","android"),"ajax"),s("android_aac_err_2",1)):(D.logReport("",e.replace("#type#","ios"),"ajax"),
s("ios_aac_err_2",1));
}
},t.onJsapi2PlayingStop=function(){
var e=a+"_stoped_";
e+=f.isAndroid?"android":"ios",s(e,1);
},t.onJsapi2PlayingPause=function(){
var e=a+"_paused_";
e+=f.isAndroid?"android":"ios",s(e,1);
},t.onSeekErr=function(){
if(s(a+"_seek_err",1),t.jsapi2Src&&t.jsapi2Src!=t.src){
var e="acc_seek_error;type:#type#;uin:"+(window.user_uin||"")+";playurl:"+t.jsapi2Src+";pageurl:"+location.href;
f.isAndroid?(D.logReport("",e.replace("#type#","android"),"ajax"),s("android_aac_err_3",1)):(D.logReport("",e.replace("#type#","ios"),"ajax"),
s("ios_aac_err_3",1));
}
},t.onUnloadPlaying=function(){
s(a+"_unload_wx_pv",1);
},t.onQMClientPlay=function(){
s("QMClient_play",1);
},t.onSeekNeed2Load=function(){
if(e.player&&e.player.surportSeekRange()&&t.playdotDom){
var a=j.reportData[e._o.type],o=a.seek_position[e._g.posIndex].length;
o>0&&(a.seek_loaded[e._g.posIndex][o-1]=1);
}
},t.onSeekNotNeed2Load=function(){
if(e.player&&e.player.surportSeekRange()&&t.playdotDom){
var a=j.reportData[e._o.type],o=a.seek_position[e._g.posIndex].length;
o>0&&(a.seek_loaded[e._g.posIndex][o-1]=0);
}
},h.create(this._o,{
callback:function(t){
e.player=t,e.afterCreatePlayer();
}
});
}
},a.prototype.afterCreatePlayer=function(){
this._playEvent();
},a.prototype.isInSeekrang=function(e){
var t=this._o.seekRange;
if(!t)return!1;
if(t===e)return!0;
for(var a=t.getElementsByTagName("*"),o=0,r=a.length;r>o;o++)if(a[o]===e)return!0;
return!1;
},a.prototype._playEvent=function(){
var e=this,t=this._o,a=this._g,o=function(e){
if("[object String]"!==Object.prototype.toString.call(e))return!1;
var t=["audio_fast_back","audio_double_speed","audio_fast_forward","audio_play_btn"];
return t.some(function(t){
return-1!==e.indexOf(t);
});
};
if(t.detailUrl&&t.detailArea&&(y.on(t.detailArea,"click",function(r){
if(!o(r.target.getAttribute("id"))&&!a.barDraging&&a.canGoDetail){
var n=r.target||r.srcElement;
n&&e.isInSeekrang(n)||("v"==a.tag?(j.reportData[t.type].detail_click[a.posIndex]=1,
window.__second_open__?C(t.detailUrl):window.location.href=t.detailUrl):("m"==a.tag||"k"==a.tag)&&j.adapter[a.tag].getPlayUrl(t,{
callback:function(e){
e.canplay?(j.reportData[t.type].detail_click[a.posIndex]=1,window.__second_open__?C(t.detailUrl):window.location.href=t.detailUrl):e.msg&&new b({
msg:e.msg
});
}
}));
}
}),t.audioCardBody&&(j.inWechat?(y.on(t.audioCardBody,"touchstart",function(e){
o(e.target.getAttribute("id"))||t.detailArea.classList.add("appmsg_card_custom_active");
}),y.on(t.audioCardBody,"touchend",function(e){
o(e.target.getAttribute("id"))||t.detailArea.classList.remove("appmsg_card_custom_active");
})):j.inPC&&(y.on(t.audioCardBody,"mousedown",function(e){
o(e.target.getAttribute("id"))||t.detailArea.classList.add("appmsg_card_custom_active");
}),y.on(t.audioCardBody,"mouseup",function(e){
o(e.target.getAttribute("id"))||t.detailArea.classList.remove("appmsg_card_custom_active");
})))),t.albumDom&&(B&&B.observe(t.albumDom),y.on(t.albumDom,"click",function(){
var e=t.albumDom.getAttribute("data-link").replace("#wechat_redirect","&scene=173#wechat_redirect"),a=$(t.albumDom).parent().parent().siblings(),o=$(t.albumDom).data("album"),r=a.attr("voice_encode_fileid"),n=$(t.albumDom).data("title");
return P.cardReport({
albumId:o,
albumType:7,
eventType:2,
audioid:r,
title:n
}),C(e),!1;
},!0)),j.musicSupport){
var r=0,n=4,i=5;
switch(1*t.type){
case 0:
r=1;
break;

case 1:
r=13;
break;

case 8:
r=14;
break;

case 2:
r=3;
break;

case 3:
r=6;
break;

case 4:
r=7;
break;

case 5:
r=10;
break;

case 6:
r=15;
break;

case 7:
r=11;
break;

case 9:
r=12;
}
var s="";
s=t.allowPause?t.pauseCss||t.playingCss:t.playingCss,y.tap(t.playArea,function(){
return console.log("click playArea",v.hasClass(t.playCssDom,s)),v.hasClass(t.playCssDom,s)?(t.allowPause?e.player.pause():e.player.stop(),
D.report({
type:r,
comment_id:t.comment_id,
voiceid:t.songId,
action:i
})):"v"==a.tag||"a"==a.tag?e._playMusic(r,n):j.adapter[a.tag].getPlayUrl(t,{
callback:function(o){
o.canplay&&o.play_url?(o.duration&&(t.duration=o.duration,e.player.setDuration(t.duration),
j.reportData[t.type].duration2[a.posIndex]=parseInt(1e3*t.duration)),e.player.setSrc(o.play_url),
8!=o.status||o.in_cache?e._playMusic(r,n):new b({
msg:"该音乐为付费音乐，当前为你播放试听片段",
onClick:function(){
e._playMusic(r,n);
}
})):o.msg&&new b({
msg:o.msg
});
}
}),!1;
}),e._dragEvent(),e._ctrlAreaEvt();
}
},a.prototype.getSeekRangeOffsetLeft=function(){
var e=0,t=this._o.seekRange,a=!1,o=window.__zoom||1;
for(1!=o&&(a=!0);t&&t!=document.body;)e+=a?t.offsetLeft*o:t.offsetLeft,"page-content"==t.id&&(a=!1),
t=t.offsetParent;
return e;
},a.prototype._dragEvent=function(){
var e=this,t=this._o,a=this._g,o=t.seekRange;
if(o){
var r=e.player.getDuration();
a.seekData={
zoom:window.__zoom||1,
duration:r,
startTime:0,
dragTime:0,
downX:0,
moveX:0
},y.on(o,"mousedown",function(t){
a.canDragBar&&(e._pointerDownHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(t.seekContainer,"mousemove",function(t){
a.canDragBar&&a.barDraging&&(e._pointerMoveHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(document.body,"mouseup",function(t){
return a.canDragBar&&a.barDraging?(e._pointerUpHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
}),y.on(o,"touchstart",function(t){
a.canDragBar&&(e._pointerDownHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(o,"touchmove",function(t){
a.canDragBar&&a.barDraging&&(e._pointerMoveHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation());
}),y.on(o,"touchend",function(t){
return a.canDragBar&&a.barDraging?(e._pointerUpHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
});
}
},a.prototype._ctrlAreaEvt=function(){
var e=this,t=this._o;
t.fastBackBtn&&y.tap(t.fastBackBtn,function(){
var t=e.player.getCurTime(),a=Math.max(+t-j.fastBackSec,0);
e.player.seek(a),e.report11899({
Action:33
});
}),t.fastForwardBtn&&y.tap(t.fastForwardBtn,function(){
var t=e.player.getCurTime(),a=e.player.getDuration(),o=Math.min(+t+j.fastForwardSec,+a);
e.player.seek(o),e.report11899({
Action:32
});
}),t.doubleSpeedBtn&&y.tap(t.doubleSpeedBtn,function(){
var a=f.getPlaybackRate();
e.player.doubleSpeed({
succCallback:function(){
var t=f.getPlaybackRate();
e.report11899({
Action:21,
FromPlaybackRate:a+"",
ToPlaybackRate:t+""
});
},
pcCallback:function(){
var e=f.getPlaybackRate();
t.doubleSpeedBtn.innerHTML=1===e?"倍速":e+"倍";
}
});
});
},a.prototype._pointerDownHandler=function(e){
var t=this._g;
t.barDraging=!0,t.canGoDetail=!1,t.seekData.downX=e.x,t.seekData.startTime=this.player.getCurTime();
},a.prototype._pointerMoveHandler=function(e){
var t=this._g,a=t.seekData;
a.moveX=e.x;
var o=this.getSeekRangeOffsetLeft(),r=(a.moveX-o)/a.zoom/this._o.seekRange.offsetWidth;
r=Math.min(r,1),r=Math.max(r,0),a.dragTime=r*a.duration,a.dragTime!=a.startTime&&this._updateProgressBar(a.dragTime);
},a.prototype._pointerUpHandler=function(e){
var t=this._g,a=t.seekData;
a.dragTime||this._pointerMoveHandler({
x:e.x
}),t.barDraging=!1,this.player.seek(a.dragTime),j.reportData[this._o.type].seek[t.posIndex]=1,
j.reportData[this._o.type].seek_position[t.posIndex].push(parseInt(1e3*a.startTime)+","+parseInt(1e3*a.dragTime));
var o=j.reportData[this._o.type].seek_position[t.posIndex].length;
j.reportData[this._o.type].seek_loaded[t.posIndex][o-1]=0,t.seekData.startTime=0,
t.seekData.dragTime=0,t.seekData.downX=0,t.seekData.moveX=0,setTimeout(function(){
t.canGoDetail=!0;
},1e3);
},a.prototype._playMusic=function(e,t){
var a=this._o,o=this._g;
this.player.play(),j.reportData[a.type].hasended[o.posIndex]=1,0==j.reportData[a.type].local_time[o.posIndex]&&(j.reportData[a.type].local_time[o.posIndex]=parseInt(+new Date/1e3)),
D.report({
type:e,
comment_id:a.comment_id,
voiceid:a.songId,
action:t
}),I.gtVersion("7.0.6")&&!j.needReport11982&&(j.needReport11982=!0,k.addSpecificReport("music_data",l),
console.log("music play leave report added"));
},a.prototype._extend=function(e){
for(var t in e)this._o[t]=e[t];
},a.prototype._onUpdateSeekRange=function(){
var e=this,t=e._o,a=e._g;
return function(e){
this.surportSeekRange()&&t.bufferDom&&t.playdotDom?(a.canDragBar=!0,t.playdotDom.style.display="block",
t.bufferDom.style.width=1*e+"%"):(a.canDragBar=!1,t.playdotDom&&(t.playdotDom.style.display="none"));
};
},a.prototype._statusChangeCallBack=function(){
var e=this;
return function(t,a){
e._status=a,e._updatePlayerCss(this,a),e._o.musicPlayerStatusChange&&e._o.musicPlayerStatusChange(a);
};
},a.prototype._timeupdateCallBack=function(){
var e=this,t=this._o,a=this._g;
return function(o,r){
e._updateProgress(r),0!=r&&(j.reportData[t.type].play_duration2[a.posIndex]=parseInt(1e3*r)),
e._o.timeupdateCallBack&&e._o.timeupdateCallBack(r);
};
},a.prototype._errorCallBack=function(){
var e=this,t=this._o,a=this._g;
return function(o,r){
j.reportData[t.type].errorcode[a.posIndex]=r.code,e._updatePlayerCss(this,3);
};
},a.prototype._reportH5Error=function(e){
if("mp.weixin.qq.com"==location.host&&1==e.type||j.debug){
var t=["code:",e.code,";type:",this._o.type,";url:",window.location.href];
this.player&&t.push(";src:"+this.player.getSrc());
var a=new Image;
a.src=["https://badjs.weixinbridge.com/badjs?level=4&id=112&msg=",encodeURIComponent(t.join("")),"&uin=",window.uin||"","&from=",this._o.type].join("");
}
},a.prototype._updatePlayerCss=function(e,t){
!!j.debug&&console.log("status:"+t);
{
var a=this,o=a._o,r=o.playCssDom;
o.progress;
}
if(2===t)v.removeClass(r,o.playingCss),o.pauseCss&&v.removeClass(r,o.pauseCss),o.playdotDom&&(e.surportSeekRange()?(o.playdotDom.style.display="block",
this._g.canDragBar=!0):(o.playdotDom.style.display="none",this._g.canDragBar=!1));else if(3===t)o.ctrlArea&&(o.ctrlArea.style.display="none"),
v.removeClass(r,o.playingCss),o.pauseCss&&v.removeClass(r,o.pauseCss),o.playdotDom&&(o.playdotDom.style.display="none",
this._g.canDragBar=!1),this._updateProgress(0);else if(1===t||4===t){
var n=f.getPlaybackRate();
o.doubleSpeedBtn&&(o.doubleSpeedBtn.innerHTML=1===n?"倍速":n+"倍"),j.allComponent.forEach(function(e){
e===a?o.ctrlArea&&(o.ctrlArea.style.display=""):e._o.ctrlArea&&(e._o.ctrlArea.style.display="none");
}),o.allowPause?v.addClass(r,o.pauseCss||o.playingCss):v.addClass(r,o.playingCss),
o.playdotDom&&(e.surportSeekRange()?(o.playdotDom.style.display="block",this._g.canDragBar=!0):(o.playdotDom.style.display="none",
this._g.canDragBar=!1));
}
o.loadingDom&&(o.loadingDom.style.display=4==t?"block":"none");
},a.prototype._updateProgress=function(e){
this._g.barDraging||this._updateProgressBar(e);
},a.prototype._updateProgressBar=function(e){
var t=this._o,a=this.player,o=a.getDuration();
if(o){
var r=this._countProgress(o,e);
t.progress&&(t.progress.style.width=r),t.playtimeDom&&e>=0&&(t.playtimeDom.innerHTML=u(e)),
t.playdotDom&&(t.playdotDom.style.left=r);
}
},a.prototype._countProgress=function(e,t){
return Math.min(t/e*100,100)+"%";
},a.prototype.destory=function(){
this.player&&this.player.destory();
},a.prototype.setOption=function(e){
e.duration&&(this._g.seekData.duration=e.duration),this._extend(e);
},a.prototype.setMusicPlayerOption=function(e){
e.duration&&this._g&&this._g.seekData&&(this._g.seekData.duration=e.duration),this.player&&this.player.setOption(e);
},a.prototype.getBackgroundAudioState=function(e){
return this.player.getBackgroundAudioState(e);
},a.prototype.report11899=function(e){
var t=this._o,a=2===t.type?3:4===t.type?6:0,o=window.withoutIframe?window:window.parent.window;
"[object Object]"!==Object.prototype.toString.call(e)&&(e={}),S.report(11899,_extends({},{
Type:a,
BizUin:window.biz||"",
Mid:window.parseInt(window.mid,10)||0,
Idx:window.parseInt(window.idx,10)||0,
VoiceId:t.songId||"",
scene:1*o.scene
},e));
},{
init:d,
renderPlayer:r,
formatTime:u,
decodeStr:_,
encodeStr:g
};
});define("pages/qqmusic_tpl.html.js",[],function(){
return'<span id="qqmusic_main_<#=musicid#>_<#=posIndex#>" class="js_wap_qqmusic db pages_reset music_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="db music_card appmsg_card_context appmsg_card_active">\n            <a id="qqmusic_home_<#=musicid#>_<#=posIndex#>" class="music_card_bd">\n                <span class="music_card_title"><#=music_name#></span>\n                <span class="music_card_desc"><#=singer#></span>\n                <span class="music_card_source <#if(musictype==2){#>music_card_source_kugou<#}#>">\n                  <img src="<#=musicIcon#>" alt=""></span>\n            </a>\n            <span id="qqmusic_play_<#=musicid#>_<#=posIndex#>" class="music_card_ft">\n                <i class="weui-play-btn"></i>\n                <!--\n                <img src="<#=window.icon_qqmusic_default#>" alt="" class="pic_qqmusic_default">\n                -->\n                <img src="<#=albumurl#>" data-autourl="<#=audiourl#>" data-musicid="<#=musicid#>" class="music_card_thumb" alt="">\n            </span>\n    </span>\n</span>\n';
});define("new_video/ctl.js",["common/comm_report.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
var i,r=window.withoutIframe?window:window.parent.window,t=e("common/comm_report.js");
if(parent==window)i=window;else try{
{
r.location.href;
}
i=r;
}catch(n){
i=window;
}
var a=i.user_uin,o=Math.floor(i.user_uin/100)%20;
a||(o=-1);
var d=function(){
return o>=0;
};
i.__webviewid||(i.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var s=function(){
var e=i.mid,r=i.idx,t="";
t=e&&r?e+"_"+r:"";
var n=i.__webviewid,o=[a,t,n].join("_");
return o;
},c=function(i){
if(20>o)try{
var t=i.vid||"",n={};
n.__biz=r.biz||"",n.vid=t,n.clienttime=+new Date;
var a=r.mid,c=r.idx,p="";
p=a&&c?a+"_"+c:t,n.type="undefined"!=typeof i.type?i.type:a&&c?1:2,n.id=p,n.hit_bizuin=i.hit_bizuin||"",
n.hit_vid=i.hit_vid||"",n.webviewid=s(),n.step=i.step||0,n.orderid=i.orderid||0,
n.ad_source=i.ad_source||0,n.traceid=i.traceid||0,n.ext1=i.ext1||"",n.ext2=i.ext2||"",
n.r=Math.random(),n.devicetype=r.devicetype,n.version=r.clientversion,n.is_gray=d()?1:0,
n.mid=a||"",n.idx=c||"",n.url=r.location.href,n.screen_num=i.screen_num||0,n.screen_height=i.screen_height||0,
n.ori_status=i.ori_status||3,n.fromid=i.fromid||0,n.sessionid=window.sessionid||"",
n.appmsg_scene=window.source||(i.cgiData?i.cgiData.scene:0)||0,!n.appmsg_scene&&n.fromid?n.appmsg_scene=n.fromid:!n.fromid&&n.appmsg_scene&&(n.fromid=n.appmsg_scene),
n.total_range=i.total_range||0,n.current_range=i.current_range||0,n.duration=i.duration||0;
var m=e("biz_wap/utils/ajax.js");
m({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:n
});
}catch(_){}
},p=function(e){
try{
var i=e.vid||"",n={};
n.BizUin=r.biz||"",n.Vid=i,n.ClientTime=+new Date;
var a=r.mid,o=r.idx,c="";
c=a&&o?a+"_"+o:i,n.Type="undefined"!=typeof e.type?e.type:a&&o?1:2,n.Id=c,n.HitBizUin=parseInt(e.hit_bizuin)||0,
n.HitVid=e.hit_vid||"",n.WebViewId=s(),n.Step=parseInt(e.step,10)||0,n.OrderId=(e.orderid||"").toString(),
n.AdSource=parseInt(e.ad_source,10)||0,n.TraceId=(e.traceid||"").toString(),n.Ext1=(e.ext1||"").toString(),
n.Ext2=(e.ext2||"").toString(),n.r=Math.random(),n.DeviceType=r.devicetype,n.ClientVersion=parseInt(r.clientversion),
n.IsGray=d()?1:0,n.msgid=parseInt(a,10)||0,n.itemidx=parseInt(o,10)||0,n.Url=r.location.href,
n.ScreenNum=parseInt(e.screen_num,10)||0,n.ScreenHeight=parseInt(e.screen_height,10)||0,
n.OrStatus=parseInt(e.ori_status,10)||3,n.Fromid=parseInt(e.fromid,10)||0,n.SessionId=(window.sessionid||"").toString(),
n.AppmsgScene=parseInt(window.source||(e.cgiData?e.cgiData.scene:0),10)||0,!n.AppmsgScene&&n.Fromid?n.AppmsgScene=n.Fromid:!n.Fromid&&n.AppmsgScene&&(n.Fromid=n.AppmsgScene),
n.AppmsgScene=parseInt(n.AppmsgScene,10)||0,n.Fromid=parseInt(n.Fromid,10)||0,n.TotalRange=parseInt(e.total_range,10)||0,
n.CurrentRange=parseInt(e.current_range,10)||0,n.Duration=parseInt(e.duration,10)||0,
n.RemindTrafficSize=parseInt(e.remind_traffic_size,10)||0,n.TrafficReminderType=parseInt(e.traffic_reminder_type,10)||0,
t.report(12710,n);
}catch(p){}
};
return{
report:c,
getWebviewid:s,
showAd:d,
commReport:p
};
});define("appmsg/without_iframe/video_appmsg.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","appmsg/without_iframe/video_appmsg.html.js","biz_common/utils/url/parse.js","appmsg/without_iframe/iframe_communicate.js","appmsg/without_iframe/video_plugin/video_tail.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","pages/qq_video_info.js","pages/video_plugin/pause_tips.js","pages/video_plugin/video_app.js","pages/video_ctrl.js","biz_wap/jsapi/core.js"],function(i){
"use strict";
i("biz_common/utils/string/html.js");
var e=i("biz_common/tmpl.js"),t=i("appmsg/without_iframe/video_appmsg.html.js"),o=i("biz_common/utils/url/parse.js"),n=i("appmsg/without_iframe/iframe_communicate.js"),d=i("appmsg/without_iframe/video_plugin/video_tail.js"),s=i("biz_wap/utils/ajax.js"),a=i("biz_common/dom/event.js"),_=i("pages/qq_video_info.js"),r=i("pages/video_plugin/pause_tips.js"),m=i("pages/video_plugin/video_app.js"),p=i("pages/video_ctrl.js"),v=i("biz_wap/jsapi/core.js");
return function(){
function i(i,e){
var t=e||window.location.search,o=new RegExp("(^|&)"+i+"=([^&]*)(&|$)"),n=t.substr(t.indexOf("?")+1).match(o);
return null!=n?n[2]:"";
}
function c(i){
return document.querySelector("#js_mp_video_container_"+f.vid+" #"+i);
}
function u(){
f.ori_status=1*y.ori_status===1?1:1*y.ori_status===2?2:3,f.showComment=1*y.show_comment===1,
f.comment_id=y.comment_id,f.vid=y.vid,f.ckey=y.ckey,f.ckey_ad=y.ckey_ad,f.__biz=y.__biz,
f.uin=y.uin,f.mid=y.mid,f.idx=y.idx,f.scene=y.scene||i("scene",window.location.href)||0,
f.autoplay=!!f.container.getAttribute("__sec_open_auto_play__"),f.dom={
js_mpvedio:c("js_mpvedio_wrapper_"+f.vid),
page_content:c("page-content")
};
}
function w(){
var i=f.ratio;
y.vw&&y.vh&&(i=y.vw/y.vh);
var e=y.vw||f.dom.js_mpvedio.offsetWidth,t=Math.ceil(e/i),o=[],s=!1;
p.showPauseTips()&&!y.is_mp_video&&(o.push(new r),s=!0),s&&!y.is_mp_video&&o.push(new m),
o.push(new d({
vid:y.vid,
nickname:y.bizNickname,
headImg:y.roundHeadImg,
userName:y.username,
isAppMsg:!0,
cgiData:y,
reportData:{
BizUserName:y.__biz,
MsgId:1*y.mid,
Idx:1*y.idx,
EnterId:y.enterid,
VideoId:y.vid,
Scene:y.scene,
Subscene:1*y.subscene,
OrStatus:1*y.ori_status,
HitBizuin:1*y.hit_bizuin,
HitVid:y.hit_vid,
SessionIdStr:window.sessionid,
Url:window.location.href,
Device:window.devicetype
}
})),f.myPlayer=new _.mpVideoPlayer({
preview:!(1*y.preview!==1),
isInIframe:!0,
hit_bizuin:y.hit_bizuin,
hit_vid:y.hit_vid,
fromid:f.scene,
ori_status:f.ori_status,
is_mp_video:y.txvideo_vid?0:y.is_mp_video,
plugins:o,
oriVid:f.vid,
vid:y.txvideo_vid?y.txvideo_vid:f.vid,
ckey:y.txvideo_vid?"":f.ckey,
ckey_ad:f.ckey_ad,
width:e,
height:t,
container:"#js_mpvedio_wrapper_"+f.vid,
__biz:f.__biz,
uin:f.uin,
mid:f.mid,
idx:f.idx,
comment_id:f.comment_id,
scene_type:0,
autoplay:f.autoplay,
videoMd5:y.video_md5,
headImgUrl:window.round_head_img,
canShareVideo:!y.is_in_pay_subscribe,
leaveReport12710Type:1,
onReady:function(){
if(f.dom.js_mpvedio.style.height="100%",(p.showVideoDetail()||p.showReprint())&&!f.hasShowBotbar){
var i=c("bottom_bar");
i&&(i.style.display="",f.hasShowBotbar=!0,n.postMessage({
type:"addVideoIframeHeight",
data:{
vid:y.txvideo_vid||f.id,
height:f.mpVideoBotH
}
}));
}
n.postMessage({
type:"videoInited",
data:{
vid:f.id,
ori_status:f.ori_status,
hit_bizuin:y.hit_bizuin,
hit_vid:y.hit_vid
}
});
}
},y);
}
function h(){
w();
}
function l(){
var e=c("h5_profile_btn");
e&&2===y.ori_status&&a.tap(e,function(){
var i="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+y.source_encode_biz+"&scene=111#wechat_redirect";
-1!==navigator.userAgent.indexOf("WindowsWechat")||-1!==navigator.userAgent.indexOf("Mac OS")?location.href=i:v.invoke("openUrlWithExtraWebview",{
url:i,
openType:1
},function(e){
-1===e.err_msg.indexOf("ok")&&(location.href=i);
});
});
var t=c("video_detail_btn");
t&&1===y.media_source&&a.tap(t,function(){
var e=["https://mp.weixin.qq.com/mp/video?t=pages/video_detail_new","&vid=",f.vid,"&mid=",f.mid,"&__biz=",f.__biz,"&idx=",f.idx,"&sn=",window.sn||i("sign",window.location.href)||"","&vidsn=",y&&y.vidsn?y.vidsn:"","&scene=100#wechat_redirect"];
f.myPlayer&&f.myPlayer.extendMpReportData({
detail_click:1
}),window.location.href=e.join("");
});
}
function b(i,e){
s({
url:e,
type:"GET",
f:"json",
success:function(e){
var t=JSON.parse(e),o=i.vid,n=i.vh,d=i.vw,s=i.ratio;
y={
hit_bizuin:t.hit_bizuin,
hit_vid:t.hit_vid,
txvideo_vid:t.txvideo_vid,
txvideo_openid:t.txvideo_openid,
ckey:t.ckey,
ckey_ad:t.ckey_ad,
video_title:t.video_title,
ori_status:t.ori_status,
nick_name:window.nickname,
hit_username:t.hit_username,
is_mp_video:t.is_mp_video,
vh:n,
vw:d,
scene:window.scene||0,
ratio:s,
openid:t.openid,
show_comment:window.show_comment,
comment_id:window.comment_id,
vid:o,
__biz:window.biz,
mid:window.mid,
idx:window.idx,
uin:window.uin,
media_source:t.media_source,
vidsn:t.vidsn,
username:t.biz_user_name,
preview:window.preview,
source_encode_biz:window.source_encode_biz,
video_md5:t.video_md5,
is_in_pay_subscribe:1*window.isPaySubscribe||0,
bizNickname:window.nickname,
roundHeadImg:window.round_head_img,
enterid:1*window.enterid,
subscene:window.subscene
},u(),h(),l();
}
});
}
function g(i,n){
for(var d=i.getAttribute("data-src")||i.getAttribute("src"),s=o.getQuery("vid",d),a=i.getAttribute("data-vw"),_=i.getAttribute("data-vh"),r=i.getAttribute("data-ratio"),m=document.createElement("span"),p=i.attributes,v=p.length-1;v>=0;v--)m.setAttribute(p[v].name,p[v].value);
m.id="js_mp_video_container_"+s,m.setAttribute("vid",s),m.style.cssText=i.style.cssText,
m.style.display="none";
var c=e.tmpl(t,{
vid:s,
video_h:_
},!1);
m.innerHTML=c;
var u=i.parentNode;
return u?(u.lastChild===i?u.appendChild(m):u.insertBefore(m,i.nextSibling),u.removeChild(i),
f.container=m,b({
iframe:m,
vid:s,
vh:_,
vw:a,
ratio:r
},n),m):null;
}
var f={
hasShowBotbar:!1,
mpVideoBotH:37,
showComment:!0,
loverCount:{}
},y={};
return{
createMpVideoDom:g
};
};
});