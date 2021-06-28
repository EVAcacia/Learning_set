define("pages_new/common_share/video/like_and_share/constants.js",[],function(){
"use strict";
var E={
SET_PRAISE_STATUS:"SET_PRAISE_STATUS",
SET_RECOMMEND_STATUS:"SET_RECOMMEND_STATUS",
REPORT_SHARE_CLICK:"REPORT_SHARE_CLICK",
REPORT_JUMP_TO_WOW:"REPORT_JUMP_TO_WOW",
REPORT_OPEN_RECOMMEND_COMMENT:"REPORT_OPEN_RECOMMEND_COMMENT",
REPORT_RECOMMEND_EXPOSE:"REPORT_RECOMMEND_EXPOSE",
REPORT_EDUCATE_EXPOSE:"REPORT_EDUCATE_EXPOSE"
},_={
SET_PRAISE_NUM:"SET_PRAISE_NUM",
SET_RECOMMEND_NUM:"SET_RECOMMEND_NUM"
};
return{
ACTIONS:E,
MUTATIONS:_
};
});define("biz_wap/jsapi/app.js",["biz_wap/jsapi/core.js"],function(n){
"use strict";
var a=n("biz_wap/jsapi/core.js"),o={
getInstallState:function(n,o){
a.invoke("getInstallState",n,o);
},
launch3rdApp:function(n,o){
a.invoke("launch3rdApp",n,o);
},
addDownloadTask:function(n,o){
a.invoke("addDownloadTask",n,o);
},
cancelDownloadTask:function(n,o){
a.invoke("cancelDownloadTask",n,o);
},
queryDownloadTask:function(n,o){
a.invoke("queryDownloadTask",n,o);
},
installDownloadTask:function(n,o){
a.invoke("installDownloadTask",n,o);
},
downloadStateChange:function(n){
a.on("wxdownload:state_change",n);
}
};
return o;
});define("new_video/plugin/util.js",["biz_wap/utils/storage.js"],function(e){
"use strict";
var t=e("biz_wap/utils/storage.js"),n=new t("player"),r=function(e){
var t="VIDEO_NOTICE_"+e,r=n.get(t),i=void 0,o=(new Date).getHours();
i=4>o?(new Date).setHours(0,0,0,0)+144e5:(new Date).setHours(0,0,0,0)+1008e5;
var u=1;
r&&r.noticeTime&&(u=r.noticeTime+1),n.set(t,{
noticeTime:u
},i);
},i=function(e){
var t=["2g","3g","4g","2g/3g"];
return e?t.indexOf(e)>-1:!1;
},o=function(e,t){
var i="VIDEO_NOTICE_"+t,o=n.get(i);
if(!o)return r(t),!0;
if(o&&5===t){
var u=o.noticeTime;
if(1===u&&e>=200||2===u&&e>=300)return r(e,t),!0;
}
return!1;
},u=function(e,t){
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);
if(n.length!==r.length)return!1;
for(var i=0;i<n.length;i++){
var o=n[i],u=e[o],s=t[o];
if(u!==s)return!1;
}
return!0;
},s=function(e){
return"no"===e||"none"===e;
};
return{
storeNoticeInfo:r,
isMobileNetwork:i,
isVideoNeedFlowNotice:o,
isObjectValueEqual:u,
isNoneNetwork:s
};
});define("new_video/player.html.js",[],function(){
return'<!-- isTLpage 是由推荐理由落地页传入，用来控制一些展示形态 -->\n<div id="js_mpvedio_<#=id#>" class="js_mpvedio <#if(isTLpage) {#>TL-page<#}#>">\n    <!--\n        page_video_skin-vertical 落地页 竖屏 全屏\n        page_video_skin-horizontal 落地页 横屏 全屏\n    -->\n    <div class="js_page_video page_video ratio_primary <#if(ratio==(4/3)){#>video_skin_primary<#}#>" style="width:<#=width#>px;height:<#=height#>px;display:<#=display#>;">\n        <!--ps: @拉风\n            1.全屏body添加扩展类： full_screen_mv\n            2.全屏是竖屏播放的情况：需要给page_video这个div加一个margin-left,margin-top\n            这两个值是page_video设置的高度和宽度的一半的负数；\n            3.如果是横屏的话(横屏默认为全屏)，page_video上设置的宽度和高度去掉即可。\n        -->\n    \n        <!-- <div class="wrp_loading js_loading">\n            <div class="wrp_svg">\n                <svg  class="rotate_svg" width="64" height="64" xmlns="http://www.w3.org/2000/svg">\n                    <circle cx="50%" cy="50%" r="40%" stroke-width="4"/>\n                    <path fill="#fff" stroke="#f00" stroke-width="4" fill-opacity="0" d="M4.5 35\n                   A 26 26, 0,0,0, 27 56" transform="rotate(330.191 30 30)">\n                 <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="5s" repeatCount="indefinite"></animateTransform>\n    \n              </path>\n                </svg>\n                <svg class="loader_bg" xmlns="http://www.w3.org/2000/svg" width="64" height="64">\n                    <circle cx="50%" cy="50%" r="40%" style="fill:#a5a4a2;stroke:#a5a4a2;stroke-width:4;fill-opacity:0;"></circle>\n                </svg>\n            </div>\n        </div> -->\n        <!--全屏时播放结束，展示尾贴内容的时候，显示退出全屏按钮-->\n        <div class="js_video_fullscreen_end video_full-screen__head" style="display: none; z-index: 9999;">\n            <div class="video_full-screen__article-title">\n                <a href="javascript:;" class="js_video_fullscreen_end_exit video_full-screen__article-arrow exit"></a>\n            </div>\n        </div>\n        <!--全屏时顶部profile信息-->\n        <div class="js_video_fullscreen_profile video_full-screen__head" style="display: none;">\n            <div class="video_full-screen__head__inner">\n                <div class="video_full-screen__head__body">\n                    <div class="js_video_fullscreen_profile_exit video_full-screen__head__item">\n                        <div class="video_full-screen__article-title">\n                            <a href="javascript:;" class="video_full-screen__article-arrow"></a>\n                            <span class="js_video_fullscreen_title video_full-screen__article-title-text"></span>\n                        </div>\n                    </div><br/>\n                    <div class="js_video_fullscreen_go_profile video_full-screen__head__item">\n                        <div class="video_full-screen__account-info">\n                            <span class="js_video_fullscreen_head video_full-screen__account-avatar"></span>\n                            <span class="js_video_fullscreen_name video_full-screen__account-name"></span>\n                        </div>\n                    </div>\n                </div>\n                <!-- 更多菜单入口-->\n                <a class="video_menu_more js_video_fullscreen_menu_more" href="javascript:;" style="display: none;"></a>\n            </div>\n        </div>\n\n        <!-- 清晰度切换，顶部tips-->\n        <div class="change_tip_container js_auto_change_tip_mask" style="display: none;">\n            <!--\n                tips 出现动画加className video__top-tips__showIn\n                tips 隐藏动画加className video__top-tips__showOut\n            -->\n            <div class="video__top-tips__mask">\n                <div class="video__top-tips js_auto_change_tip" style="display: none;">视频卡顿，建议切换到自动 <a class="video__top-tips__link js_auto_change_link" href="javascript:;">立即切换</a></div>\n                <div class="video__top-tips js_auto_change_suc_tip" style="display: none;">已成功切换至自动模式</div>\n            </div>\n        </div>\n        \n        <!--下载腾讯视频-->\n        <div id="ing_download_<#=id#>" class="app_download_container" style="display:none;">\n            <# if (window.cgiData) { #>\n            <img class="app_thumb" src="<#=window.cgiData.appImg||""#>">\n            <# } else { #>\n            <img class="app_thumb" src="">\n            <# } #>\n            <span class="btn_app_download_wrp js_download_btn">\n                <span class="btn_app_download js_download_text">下载</span>\n            </span>\n            <span class="btn_app_download_wrp js_progress_main" style="display:none;">\n                <span class="btn_app_download progress_text js_progress_text"></span>\n                <span class="app_download_progress js_progress" style="width:0%;"></span>\n            </span>\n            <div class="app_download_info">\n                <strong class="app_download_title">提升3倍流畅度</strong>\n                <p class="app_download_desc"><span class="js_installStatus"></span>腾讯视频客户端</p>\n            </div>\n        </div>\n    \n        <!-- 视频加载失败 -->\n        <!--\n        <div class="wx_video_error_box">\n            <div class="wx_video_error_msg">\n                <p>视频加载失败，请刷新重试</p>\n                <a class="wx_video_error_msg_btn" href="javascript:;">刷新</a>\n            </div>\n            <img class="wx_video_error_loading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIXRSTlMAOx20pMJbzBQNTDGTh2ohLCZmeUF2hEmXCFdxUquef4yHE17nAAACnklEQVRIx9WW2xqiIBSFRc1AUATJU1a+/1MOm0NYKvnNXM260ZLftRcbqCQinOLI0yiY/iXKuUZPjx5Fk+6RhF1yHiVF0wC6IZfr9fqIkpRqdNyQ9AoiUU8g+YZ8Xn96YmNKvkhkLMskKgEo/yJzaxkXeZsGsjeWKEIFU/FBZgA+D5yEwGtTgR0J18lYUvdcLZ1YkUjLf+a0saYYSG/J3Hury+WSkTCjCETtF6Mvd8QGJMZSWIfsAlKhWGRl5zQ1ZNBDgy/zzvvFavWUK7SyTRs+rsiUZS/4LHIHyo8VgBx7vDkKx2WhPS7dD1Q6cNlu2dTa0gMys4bz/vJR6ph8ADgcVcSVUkfnhzJTc6gRj8fbCOHk30UI2KC+V4gKjskJQqC5frFHli0kafogFIfFkAXVCSqdAFVR8pmtVCWiXCtaarbWpGtQAYx7sjf2GCbfjFRQpH7lTLucveSMBE7+Z6VqViT2/PVs0d7hPk9TUcTaUuVaT8k/f/v6SXOgyG7InZaSvM8vj/309LrbvpSAORDH2/kWGyHhm/u5AYUc8qdFBRRrsV749bRv6I5x1OY50GZUUxQz9aGplAXZcOQ1DL3vwsTyvHQ2YWgjZV2rDTmxYRjUuoBvcQDr7QRLBiiNzJ4BawG3FLtTmEMGBigTRyC2oIKht1vbwLWrKmXKBZal+yApDGhm4q5JCVdNdrZeQBe8B44WnE2NGmxrR1bCvMugHdkhSwMWI9wjIGeosnPlJmNrst6PQrpeFkBSyAmkdD016DYqAVC6HHcNtnCPgazcuytAd5IqB/qYtq4bkP7vnEaL3W4KH9/HhKBAKl8XFUlMIWYIek4hZgh6UtjHBLVA4pPkCKRf9jOQ5Kwp1UvPDyb3qkPJaRG8Ln7f8Q8Bki/Kj5IYnQAAAABJRU5ErkJggg==">\n        </div>\n        -->\n        <!--菊花-->\n        <div class="wrp_loading js_loading start_loading"  style="display:none; <#if(isTLpage) {#>transform: scale(0);<#}#>">\n            <div class="mid_opr">\n                <i class="wx_video_loading">\n                </i>\n                <!--\n                <div style="display:none" class="spinner" role="progressbar"\n                    style="position: absolute; width: 0px; z-index: 2000000000; left: 50%; top: 50%;backface-visibility:hidden; -webkit-backface-visibility:hidden;">\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-0-12 1.25s linear infinite;-webkit-animation: opacity-60-25-0-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(0deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(0deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-1-12 1.25s linear infinite;-webkit-animation: opacity-60-25-1-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(30deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(30deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-2-12 1.25s linear infinite;-webkit-animation: opacity-60-25-2-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(60deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(60deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-3-12 1.25s linear infinite;-webkit-animation: opacity-60-25-3-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(90deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(90deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-4-12 1.25s linear infinite;-webkit-animation: opacity-60-25-4-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(120deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(120deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-5-12 1.25s linear infinite;-webkit-animation: opacity-60-25-5-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(150deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(150deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-6-12 1.25s linear infinite;-webkit-animation: opacity-60-25-6-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(180deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(180deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-7-12 1.25s linear infinite;-webkit-animation: opacity-60-25-7-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(210deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(210deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-8-12 1.25s linear infinite;-webkit-animation: opacity-60-25-8-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(240deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(240deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-9-12 1.25s linear infinite;-webkit-animation: opacity-60-25-9-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(270deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(270deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-10-12 1.25s linear infinite;-webkit-animation: opacity-60-25-10-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(300deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(300deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                    <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-11-12 1.25s linear infinite;-webkit-animation: opacity-60-25-11-12 1.25s linear infinite;">\n                        <div\n                            style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(330deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(330deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                    </div>\n                </div>\n                -->\n            </div>\n            <!--\n            <svg version="1.1" class="svg_loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">\n    \n            <circle cx="30" cy="30" r="26" style="fill:#a5a4a2;stroke:#a5a4a2;stroke-width:4;fill-opacity:0" />\n            <path  fill="#fff" stroke="#fff"  stroke-width="4"  fill-opacity="0" d="M4.5 35A 26 26, 0,0,0, 27 56" style="stroke-linecap:round;">\n            <animateTransform attributeType="xml"\n            attributeName="transform"\n            type="rotate"\n            from="0 30 30"\n            to="360 30 30"\n            dur="0.5s"\n            repeatCount="indefinite"/>\n            </path>\n            </svg>\n            -->\n        </div>\n    \n        <!-- 播放按钮 z-index:12 -->\n        <div class="video_pause_controll js_video_pause_controll" style="display: none; <#if(isTLpage) {#>transform: scale(0);<#}#>">\n            <a class="btn_pause js_btn_pause">\n                <i class="icon_pause"></i>\n            </a>\n        </div>\n    \n        <!-- 互选视频广告 静音btn 静音状态className:muting -->\n        <# if(ad_muted_btn){ #>\n        <span class="js_muted_btn video_muted_btn muting">静音</span>\n        <# } #>\n    \n        <!-- 视频广告 z-index:13 -->\n        <div class="video_ad js_ad_controll" style="display:none;">\n            <span class="button_left_time video_ad_time_meta mpad_more_innervideo_container js_ad_opt_list_btn">广告                <!--投诉入口 begin-->\n                <div href="javascript:;" class="mpad_more js_ad_opt_list_btn" style="<# if(!parseInt(parent.window.can_see_complaint)){ #>display: none<# } #>">\n                    <ul class="mpad_more_list js_ad_opt_list" style="display:none;">\n                        <li class="mpad_more_list_ele">\n                            <a class="mpad_more_list_ele_container js_complain_btn" href="javascript:;">投诉</a>\n                        </li>\n                    </ul>\n                </div>\n                <!--投诉入口 end-->\n                <span class="button_left_time_num js_play_time"></span></span>\n            <a href="javascript:;" class="btn_close js_btn_can_close_ad video_ad_time_meta" style="display:none;">可在<span class="js_can_close_time">(5s)</span>后关闭</a>\n            <a href="javascript:;" class="btn_close js_btn_close_ad video_ad_time_meta" style="display:none;">关闭<i></i></a>\n    \n        </div>\n        <!-- 视频广告详情入口 -->\n        <div class="video_ad_detail js_ad_detail" style="display:none;">\n            <!--带小程序logo时，className 去掉with_arrow，加className with_weapp-->\n            <a href="javascript:;" class="btn btn_ad_detail with_arrow js_btn_ad_detail">\n                <!-- 小程序图标 -->\n                <span class="icon26_weapp_white js_video_post_weapp_icon" style="display:none;"></span>了解详情            </a>\n        </div>\n        <!--带小程序icon-->\n        <!-- <div class="video_ad_detail js_ad_detail" style="display:none;">\n            <a href="javascript:;" class="btn btn_ad_detail with_weapp js_btn_ad_detail">\n                <span class="icon26_weapp_white js_video_post_weapp_icon"></span>\n                了解详情\n            </a>\n        </div> -->\n    \n        <div class="video_ad_detail js_ad_app" style="display:none;">\n            <a href="javascript:;" class="btn btn_ad_detail with_arrow js_btn_ad_app">下载应用</a>\n        </div>\n    \n         <!--最后的视频推荐 z-index:11-->\n        <div class="js_end_dom continue_play none">\n            <!--\n            <div class="continue_inner">\n                <div class="hd_opr"><a href="#" class="btn_replay"><i class="icon_replay"></i>重新播放</a></div>\n                <div class="tit_desc">以下视频将跳到腾讯视频播放</div>\n                <ul class="video_list">\n                   <li class="video_item">\n                       <a href="#" class="inner_item">\n                           <img  class="cover" src="<%@GetResFullName($images_path$pages/default_avator.png)%>"/>\n                           <div class="desc">\n                            这里是video的标题啊标题京东覅是\n                           </div>\n                       </a>\n                   </li>\n                </ul>\n            </div>\n            -->\n        </div>\n        \n        <!-- 无障碍按钮 不需要了 -->\n        <em data-status="0" style="display:none" class="js_btn_play_aria btn_pause_accessibility"></em> \n        \n\n        <!--封面-->\n        <!-- 跟播放器相同比例是style加上：\n            -webkit-background-size:cover;background-size:cover;  -->\n        <#if(cover){#>\n        <div class="js_poster_cover poster_cover" style="background-image:url(<#=cover#>);-webkit-background-size:<#if(useWcSlPlayer){#>contain<#}else{#>cover<#}#>;background-size:<#if(useWcSlPlayer){#>contain<#}else{#>cover<#}#>;">\n            <!-- <img class="js_poster_cover poster_cover" aria-labelledby="封面" alt="封面" src="<#=cover#>"> -->\n            <!-- <div class="poster_cover_mask"></div> -->\n        </div>\n        <#}#>\n\n        <!-- 推荐页才有的时间结构 -->\n        <div class="video_time-wrp">\n            <div class="video_time-loading_icon js_tlpage_loading" style="display: none;"></div>\n            <div class="video_time-play_icon js_tlpage_play"></div>\n            <div class="video_time js_remain_time"><#=formatDuration#></div>\n        </div>\n\n        <!--大播放-->\n        <div style="display:none; <#if(isTLpage) {#>transform: scale(0);<#}#>" class="full_screen_opr js_video_play_controll">\n            <div class="mid_play_box js_btn_play">\n                <!-- 旧播放icon -->\n                <i role="button" aria-label="播放视频" class="icon_mid_play"></i>\n                <!-- 新播放icon -->\n                <i role="button" aria-label="播放视频" class="icon_mid_new_play"></i> \n                <div role="option">\n                  <span class="aria_hidden_abs">时长</span>\n                  <p class="js_video_length video_length" style="display:none;"></p>\n                </div>\n            </div>\n        </div>\n\n        <!-- 视频分享 -->\n        <#if(canShareVideo){#>\n        <div class="js_share_btn_contain top_screen_opr" style="display: none;">\n            <div class="wx_video_share_area">\n            <button type="button" class="js_share_btn wx_video_share_btn">分享视频</button>\n            </div>\n        </div>\n        <#}#>\n    \n        <!--流量提示-->\n        <div class="top_screen_opr flex_screen_hide js_video_flow" style="display: none">\n            <div class="wx_video_flow">\n                <p class="wx_video_flow_tips js_flow_notice_1" style="display: none">\n                    当前为非Wi-Fi环境，请注意流量消耗                </p>\n                <p class="wx_video_flow_tips js_flow_notice_2" style="display: none">\n                    正在使用流量播放，该视频预计消耗                    <span class="js_video_flow_num"></span>\n                </p>\n            </div>\n        </div>\n    \n        <!--mask,暂停状态下，提醒状态等的半透明蒙层-->\n        <div class="video_mask none"></div>\n    \n        <!--快进。后退 操作 快进：next,快退，pre-->\n        <!--亮度，音量调节也复用一波-->\n        <div  class="mid_opr fast_pre_next none js_forward">\n            <p class="video_length">\n                <span class="played_time js_forward_play_time">03:30</span>\n                <span class="js_forward_seperator">/</span>\n                <span class="total_time js_forward_total_time">03:30</span>\n            </p>\n            <div class="video_processor_bar">\n                <div class="processor_bar_inner js_forward_bar" style="width:30%;"></div>\n            </div>\n        </div>\n\n        <!--控制栏-->\n        <!--消失opr_fade_out  出现opr_fade_in-->\n        <!--消失opr_fade_out  出现opr_fade_in-->\n        <div class="js_controll video_opr" style="display:none; <#if(isTLpage) {#>transform: scale(0);<#}#>">\n             <div class="opr_inner">\n                <div class="opr_inner_fl">\n                    <div role="button" class="js_switch switch switch_on"><!--switch_off 关闭，switch on开启-->\n                        <span href="javascript:;" class="js_btn_opr btn_opr"></span>\n                    </div>\n                    <div class="played_time js_now_play_time">00:00</div>/<div class="total_time js_total_time">00:00</div>\n                </div>\n                <!-- <div class="wrp_pop_play"><a href="#" class="pop_play">小窗</a></div> -->\n                \n\n                <div class="opr_inner_fr">\n                    <#if(_initUseWcSlPlayer){#>\n                        <!--倍速播放-->\n                        <#if(playbackRateInfo && playbackRateInfo.length){#>\n                        <div class="play_setting_mode play_setting_mode__rate js_playback_mode_change">\n                            <a href="javascript:;" id="play_setting_mode__rate" class="play_setting">倍速</a>\n                        </div>\n                        <#}#>\n                        <!--清晰度切换-->\n                        <#if(resolutionInfo && resolutionInfo.length){#>\n                        <div class="play_setting_mode js_play_mode_change" style="display: none;">\n                            <a href="javascript:;" class="play_setting"><#=initResolutionName#></a>\n                        </div>\n                        <#}#>\n                    <#}#>\n                    <#if(!_mustHideFullScreen){#>\n                    <div role="button" class="js_full_screen_control screenSize_control full"><i class="icon_control">全屏</i></div>  <!--全屏className：full,小窗className：small-->\n                    <#}#>\n                </div>\n             </div>\n        </div>\n\n        <#if(_initUseWcSlPlayer){#>\n        <div class="js_sub_setting video_full-screen__footer video_full-screen__footer__sub-setting">\n            <#if(playbackRateInfo && playbackRateInfo.length){#>\n            <div class="video_full-screen__sub-setting video_full-screen__sub-setting__speed js_playback_mode_select" style="display: none;">\n                <#playbackRateInfo.forEach(function(_info, idx){#>\n                <a href="javascript:;" class="video_full-screen__sub-setting__item <#if(_info.initCurrent){#>current<#}#> js_playback_<#=idx#>"><#=_info.name#></a>\n                <#});#>\n            </div>\n            <#}#>\n            <#if(resolutionInfo && resolutionInfo.length){#>\n            <div class="video_full-screen__sub-setting video_full-screen__sub-setting__ratio js_play_mode_select" style="display: none;">\n                <#resolutionInfo.forEach(function(_info, idx){#>\n                <a href="javascript:;" class="video_full-screen__sub-setting__item <#if(_info.initCurrent){#>current<#}#> js_resolution_<#=idx#>"><#=_info.name#></a>\n                <#});#>\n            </div>\n            <#}#>\n        </div>\n        <#}#>\n        <!--进度条-->\n        <!--收起滑块wrp_play_bar_hide_speed-dot-->\n        <div class="js_play_bar_wrapper wrp_play_bar wrp_play_bar_hide_speed-dot" <#if(isTLpage) {#>style="transform: scale(0);"<#}#>>\n            <!--\n                拖动进度条\n                加className wrp_progress__draging\n            -->\n            <div class="js_progress_bar wrp_progress" style="display:none;">\n                <div class="progress_bar">\n                    <div class="background_bar"></div><!--背景条-->\n                    <div class="js_played_bar played_bar" style="width:0%"></div><!--进度条-->\n                    <div class="js_buffer_bar buffer_bar" style="width:0%"></div><!--缓冲条-->\n                    <div class="js_played_speed_cnt wrp_speed_dot"><i class="speed_dot" style="left:0%; max-width: none !important;"></i></div>\n                </div>\n            </div>\n        </div>\n        <!--视频-->\n        <div class="js_inner inner not_fullscreen">\n            <div class="js_video_poster video_poster" <#if(!_initUseWcSlPlayer){#>style="display:none;"<#}#>>\n                <div class="video_mask js_video_mask"></div>\n                \n               \n                \n                <#if(_initUseWcSlPlayer){#>\n                <wx-open-video src="<#=src#>" width="<#=width#>" height="<#=height#>" style="display:block;"\n                    fullscreen-after-orientation-change hide-ios-exit-btn-when-fullscreen\n                    <#if(typeof initialTime===\'number\' && autoplay){#>initial-time="<#=initialTime#>" autoplay<#}#>\n                >\n                </wx-open-video>\n                <#}else{#>\n                <video class="<#if(videoFit){#>video_fill<#}#>" webkit-playsinline playsinline <#if(videoCrossOrigin){#>crossorigin="anonymous"<#}#>>\n                    您的浏览器不支持 video 标签                </video>\n                <#}#>\n            </div>\n        </div>\n    \n    </div>\n    \n        <!--全屏遮罩-->\n    <div class="js_full_mask full_mask" style=""></div>\n    <!--\n    11 菊花\n    10 最后的视频推荐\n    9封面上边的控制按钮\n    8  以后的广告浮层\n    7 封面\n    6 视频+控制条 （在里边控制条z-index>视频） -->\n</div>\n    \n';
});;define('page/pages/video_new.css', [], function(require, exports, module) {
	return ".mpad_more{display:inline-block;vertical-align:middle;margin-left:6px;position:relative;top:-1px;width:16px;height:12px;left:0}.mpad_more:before{content:' ';display:block;width:12px;height:6px;background:url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAANCAYAAACzbK7QAAAAAXNSR0IArs4c6QAAALlJREFUOBFjXLRoETczM3NTdHR0MQMVwdKlS3v\/\/v1bxwQy88+fP5FAgT3UMh9kFshMkHmMIALki\/\/\/\/99mYWG5BvSJC0iMXAA1XIuRkVE1Li7uK9gCkGHUsATdcJC5cAsotQSb4RgWkGsJLsOxWkCqJfgMx2kBsZYQMhyvBYQsIcZwghbgsoRYw4myAN0SEB+YieDpHMTHB1CSKT6FoHwCzDwvgBkSpEwClInwqSdLbt68eaIgTIpmALM0rc2QYhZLAAAAAElFTkSuQmCC) no-repeat center;background-size:cover;position:absolute;top:50%;margin-top:-3px;left:0}.mpad_more_list{background-color:#fff;position:absolute;right:-13px;top:17px;z-index:11;min-width:74px;list-style-type:none;max-width:initial!important}.mpad_more_list:before{content:\" \";position:absolute;top:0;left:0;right:0;border:1px solid #e1e1e1;width:200%;height:200%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:0 0;transform-origin:0 0;z-index:-1}.mpad_more_list_ele{position:relative}.mpad_more_list_ele:last-child .mpad_more_list_ele_container:after{display:none}.mpad_more_list_ele:last-child:before{display:none}.mpad_more_list_ele_container{cursor:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:block;height:30px;line-height:30px;width:100%;text-align:center;z-index:2;font-size:14px;box-sizing:content-box}.mpad_more_list_ele_container:active{background-color:#ececec}.mpad_more_list_ele_container:after{display:block;content:\" \";position:absolute;bottom:0;left:10px;right:10px;border-bottom:1px solid #e1e1e1;height:0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);-webkit-transform-origin:0 0;transform-origin:0 0}body{--weui-BTN-DISABLED-FONT-COLOR:rgba(0,0,0,0.2)}body[data-weui-theme='dark']{--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}}body{--weui-BTN-DEFAULT-BG:#f2f2f2}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}}body{--weui-BTN-DEFAULT-COLOR:#06ae56}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}}body{--weui-BTN-DEFAULT-ACTIVE-BG:#e6e6e6}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}}body{--weui-DIALOG-LINE-COLOR:rgba(0,0,0,0.1)}body[data-weui-theme='dark']{--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}}body{--weui-BG-0:#ededed;--weui-BG-1:#f7f7f7;--weui-BG-2:#fff;--weui-BG-3:#f7f7f7;--weui-BG-4:#4c4c4c;--weui-BG-5:#fff;--weui-FG-0:rgba(0,0,0,0.9);--weui-FG-HALF:rgba(0,0,0,0.9);--weui-FG-1:rgba(0,0,0,0.5);--weui-FG-2:rgba(0,0,0,0.3);--weui-FG-3:rgba(0,0,0,0.1);--weui-RED:#fa5151;--weui-ORANGE:#fa9d3b;--weui-YELLOW:#ffc300;--weui-GREEN:#91d300;--weui-LIGHTGREEN:#95ec69;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1485ee;--weui-PURPLE:#6467f0;--weui-WHITE:#fff;--weui-LINK:#576b95;--weui-TEXTGREEN:#06ae56;--weui-FG:black;--weui-BG:white;--weui-TAG-TEXT-ORANGE:#fa9d3b;--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:#06ae56;--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:#10aeff;--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(0,0,0,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(0,0,0,0.05)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-WHITE:rgba(255,255,255,0.8);--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}}body[data-weui-theme='dark']{--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}body{--weui-BG-COLOR-ACTIVE:#ececec}body[data-weui-theme='dark']{--weui-BG-COLOR-ACTIVE:#282828}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-COLOR-ACTIVE:#282828}}[class^=\"weui-icon-\"],[class*=\" weui-icon-\"]{display:inline-block;vertical-align:middle;width:24px;height:24px;-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:100%;mask-size:100%;background-color:currentColor}.weui-icon-circle{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%221000%22%20height%3D%221000%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M500%20916.667C269.881%20916.667%2083.333%20730.119%2083.333%20500%2083.333%20269.881%20269.881%2083.333%20500%2083.333c230.119%200%20416.667%20186.548%20416.667%20416.667%200%20230.119-186.548%20416.667-416.667%20416.667zm0-50c202.504%200%20366.667-164.163%20366.667-366.667%200-202.504-164.163-366.667-366.667-366.667-202.504%200-366.667%20164.163-366.667%20366.667%200%20202.504%20164.163%20366.667%20366.667%20366.667z%22%20fill-rule%3D%22evenodd%22%20fill-opacity%3D%22.9%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%221000%22%20height%3D%221000%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M500%20916.667C269.881%20916.667%2083.333%20730.119%2083.333%20500%2083.333%20269.881%20269.881%2083.333%20500%2083.333c230.119%200%20416.667%20186.548%20416.667%20416.667%200%20230.119-186.548%20416.667-416.667%20416.667zm0-50c202.504%200%20366.667-164.163%20366.667-366.667%200-202.504-164.163-366.667-366.667-366.667-202.504%200-366.667%20164.163-366.667%20366.667%200%20202.504%20164.163%20366.667%20366.667%20366.667z%22%20fill-rule%3D%22evenodd%22%20fill-opacity%3D%22.9%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-download{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.25%2012.04l-1.72-1.72-1.06%201.06%202.828%202.83a1%201%200%20001.414-.001l2.828-2.828-1.06-1.061-1.73%201.73V7h-1.5v5.04zm0-5.04V2h1.5v5h6.251c.55%200%20.999.446.999.996v13.008a.998.998%200%2001-.996.996H4.996A.998.998%200%20014%2021.004V7.996A1%201%200%20014.999%207h6.251z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.25%2012.04l-1.72-1.72-1.06%201.06%202.828%202.83a1%201%200%20001.414-.001l2.828-2.828-1.06-1.061-1.73%201.73V7h-1.5v5.04zm0-5.04V2h1.5v5h6.251c.55%200%20.999.446.999.996v13.008a.998.998%200%2001-.996.996H4.996A.998.998%200%20014%2021.004V7.996A1%201%200%20014.999%207h6.251z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-info{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.75-12v7h1.5v-7h-1.5zM12%209a1%201%200%20100-2%201%201%200%20000%202z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.75-12v7h1.5v-7h-1.5zM12%209a1%201%200%20100-2%201%201%200%20000%202z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-safe-success{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20d%3D%22M500.9%204.6C315.5%2046.7%20180.4%2093.1%2057.6%20132c0%20129.3.2%20231.7.2%20339.7%200%20304.2%20248.3%20471.6%20443.1%20523.7C695.7%20943.3%20944%20775.9%20944%20471.7c0-108%20.2-210.4.2-339.7C821.4%2093.1%20686.3%2046.7%20500.9%204.6zm248.3%20349.1l-299.7%20295c-2.1%202-5.3%202-7.4-.1L304.4%20506.1c-2-2.1-2.3-5.7-.6-8l18.3-24.9c1.7-2.3%205-2.8%207.2-1l112.2%2086c2.3%201.8%206%201.7%208.1-.1l274.7-228.9c2.2-1.8%205.7-1.7%207.7.3l17%2016.8c2.2%202.1%202.2%205.3.2%207.4z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23070202%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20d%3D%22M500.9%204.6C315.5%2046.7%20180.4%2093.1%2057.6%20132c0%20129.3.2%20231.7.2%20339.7%200%20304.2%20248.3%20471.6%20443.1%20523.7C695.7%20943.3%20944%20775.9%20944%20471.7c0-108%20.2-210.4.2-339.7C821.4%2093.1%20686.3%2046.7%20500.9%204.6zm248.3%20349.1l-299.7%20295c-2.1%202-5.3%202-7.4-.1L304.4%20506.1c-2-2.1-2.3-5.7-.6-8l18.3-24.9c1.7-2.3%205-2.8%207.2-1l112.2%2086c2.3%201.8%206%201.7%208.1-.1l274.7-228.9c2.2-1.8%205.7-1.7%207.7.3l17%2016.8c2.2%202.1%202.2%205.3.2%207.4z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23070202%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-safe-warn{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20d%3D%22M500.9%204.5c-185.4%2042-320.4%2088.4-443.2%20127.3%200%20129.3.2%20231.7.2%20339.6%200%20304.1%20248.2%20471.4%20443%20523.6%20194.7-52.2%20443-219.5%20443-523.6%200-107.9.2-210.3.2-339.6C821.3%2092.9%20686.2%2046.5%20500.9%204.5zm-26.1%20271.1h52.1c5.8%200%2010.3%204.7%2010.1%2010.4l-11.6%20313.8c-.1%202.8-2.5%205.2-5.4%205.2h-38.2c-2.9%200-5.3-2.3-5.4-5.2L464.8%20286c-.2-5.8%204.3-10.4%2010-10.4zm26.1%20448.3c-20.2%200-36.5-16.3-36.5-36.5s16.3-36.5%2036.5-36.5%2036.5%2016.3%2036.5%2036.5-16.4%2036.5-36.5%2036.5z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23020202%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201000%201000%22%3E%3Cpath%20d%3D%22M500.9%204.5c-185.4%2042-320.4%2088.4-443.2%20127.3%200%20129.3.2%20231.7.2%20339.6%200%20304.1%20248.2%20471.4%20443%20523.6%20194.7-52.2%20443-219.5%20443-523.6%200-107.9.2-210.3.2-339.6C821.3%2092.9%20686.2%2046.5%20500.9%204.5zm-26.1%20271.1h52.1c5.8%200%2010.3%204.7%2010.1%2010.4l-11.6%20313.8c-.1%202.8-2.5%205.2-5.4%205.2h-38.2c-2.9%200-5.3-2.3-5.4-5.2L464.8%20286c-.2-5.8%204.3-10.4%2010-10.4zm26.1%20448.3c-20.2%200-36.5-16.3-36.5-36.5s16.3-36.5%2036.5-36.5%2036.5%2016.3%2036.5%2036.5-16.4%2036.5-36.5%2036.5z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23020202%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-success{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-1.177-7.86l-2.765-2.767L7%2012.431l3.119%203.121a1%201%200%20001.414%200l5.952-5.95-1.062-1.062-5.6%205.6z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-1.177-7.86l-2.765-2.767L7%2012.431l3.119%203.121a1%201%200%20001.414%200l5.952-5.95-1.062-1.062-5.6%205.6z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-success-circle{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6zm-1.172-6.242l5.809-5.808.848.849-5.95%205.95a1%201%200%2001-1.414%200L7%2012.426l.849-.849%202.98%202.98z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6zm-1.172-6.242l5.809-5.808.848.849-5.95%205.95a1%201%200%2001-1.414%200L7%2012.426l.849-.849%202.98%202.98z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-success-no-circle{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-waiting{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.75%2011.38V6h-1.5v6l4.243%204.243%201.06-1.06-3.803-3.804zM12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.75%2011.38V6h-1.5v6l4.243%204.243%201.06-1.06-3.803-3.804zM12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-waiting-circle{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.6%2011.503l3.891%203.891-.848.849L11.4%2012V6h1.2v5.503zM12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.6%2011.503l3.891%203.891-.848.849L11.4%2012V6h1.2v5.503zM12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-warn{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-info-circle{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6zM11.4%2010h1.2v7h-1.2v-7zm.6-1a1%201%200%20110-2%201%201%200%20010%202z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6zM11.4%2010h1.2v7h-1.2v-7zm.6-1a1%201%200%20110-2%201%201%200%20010%202z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-cancel{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6z%22%20fill-rule%3D%22nonzero%22%2F%3E%3Cpath%20d%3D%22M12.849%2012l3.11%203.111-.848.849L12%2012.849l-3.111%203.11-.849-.848L11.151%2012l-3.11-3.111.848-.849L12%2011.151l3.111-3.11.849.848L12.849%2012z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6z%22%20fill-rule%3D%22nonzero%22%2F%3E%3Cpath%20d%3D%22M12.849%2012l3.11%203.111-.848.849L12%2012.849l-3.111%203.11-.849-.848L11.151%2012l-3.11-3.111.848-.849L12%2011.151l3.111-3.11.849.848L12.849%2012z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)}.weui-icon-search{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16.31%2015.561l4.114%204.115-.848.848-4.123-4.123a7%207%200%2011.857-.84zM16.8%2011a5.8%205.8%200%2010-11.6%200%205.8%205.8%200%200011.6%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M16.31%2015.561l4.114%204.115-.848.848-4.123-4.123a7%207%200%2011.857-.84zM16.8%2011a5.8%205.8%200%2010-11.6%200%205.8%205.8%200%200011.6%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-clear{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13.06%2012l3.006-3.005-1.06-1.06L12%2010.938%208.995%207.934l-1.06%201.06L10.938%2012l-3.005%203.005%201.06%201.06L12%2013.062l3.005%203.005%201.06-1.06L13.062%2012zM12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13.06%2012l3.006-3.005-1.06-1.06L12%2010.938%208.995%207.934l-1.06%201.06L10.938%2012l-3.005%203.005%201.06%201.06L12%2013.062l3.005%203.005%201.06-1.06L13.062%2012zM12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-back{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm1.999-6.563L10.68%2012%2014%208.562%2012.953%207.5%209.29%2011.277a1.045%201.045%200%20000%201.446l3.663%203.777L14%2015.437z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm1.999-6.563L10.68%2012%2014%208.562%2012.953%207.5%209.29%2011.277a1.045%201.045%200%20000%201.446l3.663%203.777L14%2015.437z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-delete{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6.774%206.4l.812%2013.648a.8.8%200%2000.798.752h7.232a.8.8%200%2000.798-.752L17.226%206.4H6.774zm11.655%200l-.817%2013.719A2%202%200%200115.616%2022H8.384a2%202%200%2001-1.996-1.881L5.571%206.4H3.5v-.7a.5.5%200%2001.5-.5h16a.5.5%200%2001.5.5v.7h-2.071zM14%203a.5.5%200%2001.5.5v.7h-5v-.7A.5.5%200%200110%203h4zM9.5%209h1.2l.5%209H10l-.5-9zm3.8%200h1.2l-.5%209h-1.2l.5-9z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6.774%206.4l.812%2013.648a.8.8%200%2000.798.752h7.232a.8.8%200%2000.798-.752L17.226%206.4H6.774zm11.655%200l-.817%2013.719A2%202%200%200115.616%2022H8.384a2%202%200%2001-1.996-1.881L5.571%206.4H3.5v-.7a.5.5%200%2001.5-.5h16a.5.5%200%2001.5.5v.7h-2.071zM14%203a.5.5%200%2001.5.5v.7h-5v-.7A.5.5%200%200110%203h4zM9.5%209h1.2l.5%209H10l-.5-9zm3.8%200h1.2l-.5%209h-1.2l.5-9z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-success-no-circle-thin{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.864%2016.617l-5.303-5.303-1.061%201.06%205.657%205.657a1%201%200%20001.414%200L21.238%206.364l-1.06-1.06L8.864%2016.616z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.864%2016.617l-5.303-5.303-1.061%201.06%205.657%205.657a1%201%200%20001.414%200L21.238%206.364l-1.06-1.06L8.864%2016.616z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-arrow{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-arrow-bold{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20height%3D%2224%22%20width%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.157%2012.711L4.5%2018.368l-1.414-1.414%204.95-4.95-4.95-4.95L4.5%205.64l5.657%205.657a1%201%200%20010%201.414z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20height%3D%2224%22%20width%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.157%2012.711L4.5%2018.368l-1.414-1.414%204.95-4.95-4.95-4.95L4.5%205.64l5.657%205.657a1%201%200%20010%201.414z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-back-arrow{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.343%2012l7.071%207.071L9%2020.485l-7.778-7.778a1%201%200%20010-1.414L9%203.515l1.414%201.414L3.344%2012z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.343%2012l7.071%207.071L9%2020.485l-7.778-7.778a1%201%200%20010-1.414L9%203.515l1.414%201.414L3.344%2012z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-back-arrow-thin{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-close{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2010.586l5.657-5.657%201.414%201.414L13.414%2012l5.657%205.657-1.414%201.414L12%2013.414l-5.657%205.657-1.414-1.414L10.586%2012%204.929%206.343%206.343%204.93%2012%2010.586z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2010.586l5.657-5.657%201.414%201.414L13.414%2012l5.657%205.657-1.414%201.414L12%2013.414l-5.657%205.657-1.414-1.414L10.586%2012%204.929%206.343%206.343%204.93%2012%2010.586z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-close-thin{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.25%2010.693L6.057%204.5%205%205.557l6.193%206.193L5%2017.943%206.057%2019l6.193-6.193L18.443%2019l1.057-1.057-6.193-6.193L19.5%205.557%2018.443%204.5z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.25%2010.693L6.057%204.5%205%205.557l6.193%206.193L5%2017.943%206.057%2019l6.193-6.193L18.443%2019l1.057-1.057-6.193-6.193L19.5%205.557%2018.443%204.5z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-back-circle{-webkit-mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6zm1.999-5.363L12.953%2016.5%209.29%2012.723a1.045%201.045%200%20010-1.446L12.953%207.5%2014%208.563%2010.68%2012%2014%2015.438z%22%2F%3E%3C%2Fsvg%3E);mask-image:url(data:image\/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm0-1.2a8.8%208.8%200%20100-17.6%208.8%208.8%200%20000%2017.6zm1.999-5.363L12.953%2016.5%209.29%2012.723a1.045%201.045%200%20010-1.446L12.953%207.5%2014%208.563%2010.68%2012%2014%2015.438z%22%2F%3E%3C%2Fsvg%3E)}.weui-icon-success{color:#07c160;color:var(--weui-BRAND)}.weui-icon-waiting{color:#10aeff;color:var(--weui-BLUE)}.weui-icon-warn{color:#fa5151;color:var(--weui-RED)}.weui-icon-info{color:#10aeff;color:var(--weui-BLUE)}.weui-icon-success-circle{color:#07c160;color:var(--weui-BRAND)}.weui-icon-success-no-circle,.weui-icon-success-no-circle-thin{color:#07c160;color:var(--weui-BRAND)}.weui-icon-waiting-circle{color:#10aeff;color:var(--weui-BLUE)}.weui-icon-circle{color:rgba(0,0,0,0.3);color:var(--weui-FG-2)}.weui-icon-download{color:#07c160;color:var(--weui-BRAND)}.weui-icon-info-circle{color:rgba(0,0,0,0.3);color:var(--weui-FG-2)}.weui-icon-safe-success{color:#07c160;color:var(--weui-BRAND)}.weui-icon-safe-warn{color:#ffc300;color:var(--weui-YELLOW)}.weui-icon-cancel{color:#fa5151;color:var(--weui-RED)}.weui-icon-search{color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.weui-icon-clear{color:rgba(0,0,0,0.3);color:var(--weui-FG-2)}.weui-icon-clear:active{color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.weui-icon-delete.weui-icon_gallery-delete{color:#fff;color:var(--weui-WHITE)}.weui-icon-arrow,.weui-icon-arrow-bold,.weui-icon-back-arrow,.weui-icon-back-arrow-thin{width:12px}.weui-icon-arrow,.weui-icon-arrow-bold{color:rgba(0,0,0,0.3);color:var(--weui-FG-2)}.weui-icon-back-arrow,.weui-icon-back-arrow-thin{color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-icon-back,.weui-icon-back-circle{color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-icon_msg{width:64px;height:64px}.weui-icon_msg.weui-icon-warn{color:#fa5151;color:var(--weui-RED)}.weui-icon_msg-primary{width:64px;height:64px}.weui-icon_msg-primary.weui-icon-warn{color:#ffc300;color:var(--weui-YELLOW)}.weui-textarea{-webkit-tap-highlight-color:rgba(0,0,0,0);background-color:transparent;display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-flex{display:-webkit-box;display:-webkit-flex;display:flex}.weui-flex__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0}.weui-media-box{padding:16px;position:relative}.weui-media-box:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid rgba(0,0,0,0.1);border-top:1px solid var(--weui-FG-3);color:rgba(0,0,0,0.1);color:var(--weui-FG-3);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);left:16px}.weui-media-box:first-child:before{display:none}a.weui-media-box{color:#000;-webkit-tap-highlight-color:rgba(0,0,0,0)}a.weui-media-box:active{background-color:#ececec;background-color:var(--weui-BG-COLOR-ACTIVE)}.weui-media-box__title{font-weight:400;font-size:17px;line-height:1.4;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.weui-media-box__desc{color:rgba(0,0,0,0.3);color:var(--weui-FG-2);font-size:14px;line-height:1.4;padding-top:4px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.weui-media-box__info{margin-top:16px;padding-bottom:4px;font-size:13px;color:rgba(0,0,0,0.3);color:var(--weui-FG-2);line-height:1em;list-style:none;overflow:hidden}.weui-media-box__info__meta{float:left;padding-right:1em}.weui-media-box__info__meta_extra{padding-left:1em;border-left:1px solid rgba(0,0,0,0.3);border-left:1px solid var(--weui-FG-2)}.weui-media-box_appmsg{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-media-box_appmsg .weui-media-box__hd{margin-right:16px;width:60px;height:60px;line-height:60px;text-align:center}.weui-media-box_appmsg .weui-media-box__thumb{width:100%;max-height:100%;vertical-align:top}.weui-media-box_appmsg .weui-media-box__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0}.weui-media-box_small-appmsg{padding:0}.weui-media-box_small-appmsg .weui-cells{margin-top:0}.weui-media-box_small-appmsg .weui-cells:before{display:none}.weui-btn{position:relative;display:block;width:184px;margin-left:auto;margin-right:auto;padding:8px 24px;box-sizing:border-box;font-weight:700;font-size:17px;text-align:center;text-decoration:none;color:#fff;line-height:1.41176471;border-radius:4px;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-btn_block{width:auto}.weui-btn_inline{display:inline-block}.weui-btn_default{color:#06ae56;color:var(--weui-BTN-DEFAULT-COLOR);background-color:#f2f2f2;background-color:var(--weui-BTN-DEFAULT-BG)}.weui-btn_default:not(.weui-btn_disabled):visited{color:#06ae56;color:var(--weui-BTN-DEFAULT-COLOR)}.weui-btn_default:not(.weui-btn_disabled):active{background-color:#e6e6e6;background-color:var(--weui-BTN-DEFAULT-ACTIVE-BG)}.weui-btn_primary{background-color:#07c160;background-color:var(--weui-BRAND)}.weui-btn_primary:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_primary:not(.weui-btn_disabled):active{background-color:#06ae56;background-color:var(--weui-TAG-TEXT-GREEN)}.weui-btn_warn{color:#fa5151;color:var(--weui-RED);background-color:#f2f2f2;background-color:var(--weui-BTN-DEFAULT-BG)}.weui-btn_warn:not(.weui-btn_disabled):visited{color:#fa5151;color:var(--weui-RED)}.weui-btn_warn:not(.weui-btn_disabled):active{background-color:#e6e6e6;background-color:var(--weui-BTN-DEFAULT-ACTIVE-BG)}.weui-btn_disabled{color:rgba(0,0,0,0.2);color:var(--weui-BTN-DISABLED-FONT-COLOR);background-color:#f2f2f2;background-color:var(--weui-BTN-DEFAULT-BG)}.weui-primary-loading{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;position:relative;width:20px;height:20px;-webkit-animation:loading 1s steps(60,end) infinite;animation:loading 1s steps(60,end) infinite}.weui-primary-loading__dot{position:absolute;top:0;left:50%;margin-left:-1px;width:2px;height:2px;border-radius:100%;background:currentColor}.weui-primary-loading:before,.weui-primary-loading:after{content:\"\";display:block;width:10px;height:20px;box-sizing:border-box;border:2px solid;border-color:currentColor;opacity:.5}.weui-primary-loading:before{border-right-width:0;border-top-left-radius:20px;border-bottom-left-radius:20px;-webkit-mask-image:-webkit-gradient(linear,left top,left bottom,from(#000),color-stop(96%,rgba(0,0,0,0.3)));-webkit-mask-image:linear-gradient(180deg,#000,rgba(0,0,0,0.3) 96%)}.weui-primary-loading:after{border-left-width:0;border-top-right-radius:20px;border-bottom-right-radius:20px;-webkit-mask-image:linear-gradient(225deg,rgba(0,0,0,0) 60%,rgba(0,0,0,0.3) 92%)}.weui-primary-loading_wechat-theme{color:#07c160;color:var(--weui-BRAND)}.weui-primary-loading_wechat-theme:before,.weui-primary-loading_wechat-theme:after{opacity:.7}.weui-btn_loading .weui-loading{margin:-0.2em .34em 0 0}.weui-btn_loading.weui-btn_primary{background-color:#06ae56;background-color:var(--weui-TAG-TEXT-GREEN);color:#fff;color:var(--weui-WHITE)}.weui-btn_loading.weui-btn_default{background-color:#e6e6e6;background-color:var(--weui-BTN-DEFAULT-ACTIVE-BG)}.weui-btn_loading.weui-btn_warn{background-color:#e6e6e6;background-color:var(--weui-BTN-DEFAULT-ACTIVE-BG)}.weui-btn_cell{position:relative;display:block;margin-left:auto;margin-right:auto;box-sizing:border-box;font-weight:700;font-size:17px;text-align:center;text-decoration:none;color:#fff;line-height:1.41176471;padding:16px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden;background-color:#fff;background-color:var(--weui-BG-5)}.weui-btn_cell+.weui-btn_cell{margin-top:16px}.weui-btn_cell:active{background-color:#ececec;background-color:var(--weui-BG-COLOR-ACTIVE)}.weui-btn_cell__icon{display:inline-block;vertical-align:middle;width:24px;height:24px;margin:-0.2em .34em 0 0}.weui-btn_cell-default{color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-btn_cell-primary{color:#576b95;color:var(--weui-LINK)}.weui-btn_cell-warn{color:#fa5151;color:var(--weui-RED)}button.weui-btn,input.weui-btn{border-width:0;outline:0;-webkit-appearance:none}button.weui-btn:focus,input.weui-btn:focus{outline:0}button.weui-btn_inline,input.weui-btn_inline,button.weui-btn_mini,input.weui-btn_mini{width:auto}.weui-btn_mini{display:inline-block;width:auto;padding:0 .75em;line-height:2;font-size:16px}.weui-btn:not(.weui-btn_mini)+.weui-btn:not(.weui-btn_mini){margin-top:16px}.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline{margin-top:auto;margin-left:16px}.weui-btn-area{margin:48px 16px 8px}.weui-btn-area_inline{display:-webkit-box;display:-webkit-flex;display:flex}.weui-btn-area_inline .weui-btn{margin-top:auto;margin-right:16px;width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.weui-btn-area_inline .weui-btn:last-child{margin-right:0}.weui-btn_reset{background:transparent;border:0;padding:0;outline:0}.weui-btn_icon{font-size:0}.weui-btn_icon:active [class*=\"weui-icon-\"]{color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.weui-btn_plain-primary{color:#07c160;border:1px solid #07c160}.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{color:#06ae56;border-color:#06ae56;background-color:rgba(0,0,0,0.1)}.weui-btn_plain-primary:after{border-width:0}.weui-btn_plain-default{color:#353535;border:1px solid #353535}.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{color:#323232;border-color:#323232;background-color:rgba(0,0,0,0.1)}.weui-btn_plain-default:after{border-width:0}.weui-btn_plain-disabled{color:rgba(0,0,0,0.2);border-color:rgba(0,0,0,0.2)}button.weui-btn_plain-primary,input.weui-btn_plain-primary,button.weui-btn_plain-default,input.weui-btn_plain-default{border-width:1px;background-color:transparent}.weui-toast_text-more .weui-icon_toast{margin-bottom:12px}.weui-toast_text-more .weui-toast__content{font-size:14px;line-height:1.6}body{--weui-BTN-DISABLED-FONT-COLOR:rgba(0,0,0,0.2)}body[data-weui-theme='dark']{--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DISABLED-FONT-COLOR:rgba(255,255,255,0.2)}}body{--weui-BTN-DEFAULT-BG:#f2f2f2}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-BG:rgba(255,255,255,0.08)}}body{--weui-BTN-DEFAULT-COLOR:#06ae56}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-COLOR:rgba(255,255,255,0.8)}}body{--weui-BTN-DEFAULT-ACTIVE-BG:#e6e6e6}body[data-weui-theme='dark']{--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BTN-DEFAULT-ACTIVE-BG:rgba(122,122,122,0.1536)}}body{--weui-DIALOG-LINE-COLOR:rgba(0,0,0,0.1)}body[data-weui-theme='dark']{--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-DIALOG-LINE-COLOR:rgba(255,255,255,0.1)}}body{--weui-BG-0:#ededed;--weui-BG-1:#f7f7f7;--weui-BG-2:#fff;--weui-BG-3:#f7f7f7;--weui-BG-4:#4c4c4c;--weui-BG-5:#fff;--weui-FG-0:rgba(0,0,0,0.9);--weui-FG-HALF:rgba(0,0,0,0.9);--weui-FG-1:rgba(0,0,0,0.5);--weui-FG-2:rgba(0,0,0,0.3);--weui-FG-3:rgba(0,0,0,0.1);--weui-RED:#fa5151;--weui-ORANGE:#fa9d3b;--weui-YELLOW:#ffc300;--weui-GREEN:#91d300;--weui-LIGHTGREEN:#95ec69;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1485ee;--weui-PURPLE:#6467f0;--weui-WHITE:#fff;--weui-LINK:#576b95;--weui-TEXTGREEN:#06ae56;--weui-FG:black;--weui-BG:white;--weui-TAG-TEXT-ORANGE:#fa9d3b;--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:#06ae56;--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:#10aeff;--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(0,0,0,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(0,0,0,0.05)}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-WHITE:rgba(255,255,255,0.8);--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}}body[data-weui-theme='dark']{--weui-BG-0:#111;--weui-BG-1:#1e1e1e;--weui-BG-2:#191919;--weui-BG-3:#202020;--weui-BG-4:#404040;--weui-BG-5:#2c2c2c;--weui-FG-0:rgba(255,255,255,0.8);--weui-FG-HALF:rgba(255,255,255,0.6);--weui-FG-1:rgba(255,255,255,0.5);--weui-FG-2:rgba(255,255,255,0.3);--weui-FG-3:rgba(255,255,255,0.05);--weui-RED:#fa5151;--weui-ORANGE:#c87d2f;--weui-YELLOW:#cc9c00;--weui-GREEN:#74a800;--weui-LIGHTGREEN:#3eb575;--weui-BRAND:#07c160;--weui-BLUE:#10aeff;--weui-INDIGO:#1196ff;--weui-PURPLE:#8183ff;--weui-LINK:#7d90a9;--weui-TEXTGREEN:#259c5c;--weui-FG:white;--weui-BG:black;--weui-TAG-TEXT-ORANGE:rgba(250,157,59,0.6);--weui-TAG-BACKGROUND-ORANGE:rgba(250,157,59,0.1);--weui-TAG-TEXT-GREEN:rgba(6,174,86,0.6);--weui-TAG-BACKGROUND-GREEN:rgba(6,174,86,0.1);--weui-TAG-TEXT-BLUE:rgba(16,174,255,0.6);--weui-TAG-BACKGROUND-BLUE:rgba(16,174,255,0.1);--weui-TAG-TEXT-BLACK:rgba(255,255,255,0.5);--weui-TAG-BACKGROUND-BLACK:rgba(255,255,255,0.05)}body{--weui-BG-COLOR-ACTIVE:#ececec}body[data-weui-theme='dark']{--weui-BG-COLOR-ACTIVE:#282828}@media(prefers-color-scheme:dark){body:not([data-weui-theme='light']){--weui-BG-COLOR-ACTIVE:#282828}}.weui-loadmore.weui-loadmore_line .weui-loadmore__tips{padding:0 8px}.weui-loadmore.weui-loadmore_dot{width:68px}.weui-loadmore.weui-loadmore_dot .weui-loadmore__tips{padding:0 8px}.weui-loadmore_default.weui-loadmore{width:auto;line-height:1.4;margin:0 56px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-loadmore_default.weui-loadmore_line{margin-top:0;margin-bottom:0;border:0}.weui-loadmore_default.weui-loadmore_line:before,.weui-loadmore_default.weui-loadmore_line:after{content:\"\";width:24px;height:1px;background:rgba(0,0,0,0.1)}.weui-loadmore_default.weui-loadmore_line .weui-loadmore__tips{top:auto;padding:0 8px;background:transparent;color:rgba(0,0,0,0.3)}.weui-loadmore_default.weui-loadmore_dot{margin-top:0;margin-bottom:0}@media(prefers-color-scheme:dark){.weui-loadmore_default.weui-loadmore_line:before,.weui-loadmore_default.weui-loadmore_line:after{background:rgba(255,255,255,0.05)}.weui-loadmore_default.weui-loadmore_line .weui-loadmore__tips{color:rgba(255,255,255,0.3)}}.weui-pop-zindex-primary .weui-mask{z-index:10000}.weui-pop-zindex-primary .weui-toast,.weui-pop-zindex-primary .weui-actionsheet,.weui-pop-zindex-primary .weui-dialog{z-index:50000}.weui-dialog{position:fixed;z-index:5000;top:50%;left:16px;right:16px;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);background-color:#fff;background-color:var(--weui-BG-2);text-align:center;border-radius:12px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;max-height:90%}.weui-dialog__hd{padding:32px 24px 16px}.weui-dialog__title{font-weight:700;font-size:17px;line-height:1.4}.weui-dialog__bd{overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 24px;margin-bottom:32px;font-size:17px;line-height:1.4;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.weui-dialog__bd:first-child{min-height:40px;padding:32px 24px 0;font-weight:700;color:rgba(0,0,0,0.9);color:var(--weui-FG-0);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.weui-dialog__ft{position:relative;line-height:56px;min-height:56px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid rgba(0,0,0,0.1);border-top:1px solid var(--weui-DIALOG-LINE-COLOR);color:rgba(0,0,0,0.1);color:var(--weui-DIALOG-LINE-COLOR);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#576b95;color:var(--weui-LINK);font-weight:700;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#ececec;background-color:var(--weui-BG-COLOR-ACTIVE)}.weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid rgba(0,0,0,0.1);border-left:1px solid var(--weui-DIALOG-LINE-COLOR);color:rgba(0,0,0,0.1);color:var(--weui-DIALOG-LINE-COLOR);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:rgba(0,0,0,0.9);color:var(--weui-FG-HALF)}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.weui-skin_android .weui-dialog__title{font-size:22px;line-height:1.4}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:rgba(0,0,0,0.5);color:var(--weui-FG-1);text-align:left}.weui-skin_android .weui-dialog__bd:first-child{color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:40px;min-height:40px;padding:0 24px 16px}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-0.8em}.weui-skin_android .weui-dialog__btn_default{color:rgba(0,0,0,0.9);color:var(--weui-FG-HALF)}@media screen and (min-width:352px){.weui-dialog{width:320px;margin:0 auto}}.weui-toast{position:fixed;z-index:5000;width:136px;height:136px;top:40%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;border-radius:12px;color:rgba(255,255,255,0.9);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#4c4c4c;background-color:var(--weui-BG-4);box-sizing:border-box;line-height:1.4}.weui-toast_text{height:auto;min-width:152px;max-width:216px;padding:12px 0}.weui-toast_text .weui-toast__content{font-size:14px}.weui-icon_toast{display:block;width:40px;height:40px;margin-bottom:16px}.weui-icon_toast.weui-icon-success-no-circle{color:rgba(255,255,255,0.9)}.weui-icon_toast.weui-icon-warn{color:rgba(255,255,255,0.9)}.weui-icon_toast.weui-loading{width:36px;height:36px}.weui-icon_toast.weui-primary-loading{width:36px;height:36px}.weui-icon_toast.weui-primary-loading:before,.weui-icon_toast.weui-primary-loading:after{content:\"\";display:block;width:18px;height:36px}.weui-icon_toast.weui-primary-loading:before{border-top-left-radius:36px;border-bottom-left-radius:36px}.weui-icon_toast.weui-primary-loading:after{border-top-right-radius:36px;border-bottom-right-radius:36px}.weui-toast__content{font-size:17px;padding:0 12px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12,end) infinite;animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(\"data:image\/svg+xml;charset=utf8, %3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'\/%3E%3C\/svg%3E\") no-repeat;background-size:100%}.weui-loading.weui-loading_transparent,.weui-btn_loading.weui-btn_primary .weui-loading{background-image:url(\"data:image\/svg+xml;charset=utf8, %3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'\/%3E%3Crect xmlns='http:\/\/www.w3.org\/2000\/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'\/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'\/%3E%3C\/svg%3E\")}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg);transform:rotate3d(0,0,1,360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg);transform:rotate3d(0,0,1,360deg)}}.weui-loadmore{width:65%;margin:1.5em auto;line-height:1.6em;font-size:14px;text-align:center}.weui-loadmore__tips{display:inline-block;vertical-align:middle;color:rgba(0,0,0,0.9);color:var(--weui-FG-0)}.weui-loadmore_line{border-top:1px solid rgba(0,0,0,0.1);border-top:1px solid var(--weui-FG-3);margin-top:2.4em}.weui-loadmore_line .weui-loadmore__tips{position:relative;top:-0.9em;padding:0 .55em;background-color:#fff;background-color:var(--weui-BG-2);color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.weui-loadmore_dot .weui-loadmore__tips{padding:0 .16em}.weui-loadmore_dot .weui-loadmore__tips:before{content:\" \";width:4px;height:4px;border-radius:50%;background-color:rgba(0,0,0,0.1);background-color:var(--weui-FG-3);display:inline-block;position:relative;vertical-align:0;top:-0.16em}.weui-play-btn{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:40px;height:40px;background:rgba(237,237,237,0.9);border-radius:50%;font-size:0}.weui-play-btn:before{content:\"\";display:inline-block;width:60%;height:60%;vertical-align:middle;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%23151515' fill-rule='evenodd' d='M9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852z'\/%3E%3C\/svg%3E\")}.weui-play-btn_pause:before{background-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M7 5h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933H7c-.552 0-1-.418-1-.933V5.933C6 5.418 6.448 5 7 5zm8 0h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933h-2c-.552 0-1-.418-1-.933V5.933c0-.515.448-.933 1-.933z' fill-rule='evenodd' fill-opacity='.9'\/%3E%3C\/svg%3E\")}.weui-play-btn_stop:before{width:100%;height:100%;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Crect width='8' height='8' fill='%23000' fill-rule='nonzero' rx='.8' transform='translate(8 8)'\/%3E    %3Cpath d='M0 0h24v24H0z'\/%3E  %3C\/g%3E%3C\/svg%3E\")}.weui-play-btn_primary{display:inline-block;vertical-align:middle;width:48px;height:48px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='48' height='48' viewBox='0 0 48 48'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Ccircle cx='24' cy='24' r='24' fill='%23000' fill-opacity='.15'\/%3E    %3Cpath fill='%23FFF' fill-rule='nonzero' d='M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0zm0 1.44C11.54 1.44 1.44 11.54 1.44 24c0 12.46 10.1 22.56 22.56 22.56 12.46 0 22.56-10.1 22.56-22.56 0-12.46-10.1-22.56-22.56-22.56zm-4.8 13.828a1.2 1.2 0 0 1 .595.158l13.182 7.532a1.2 1.2 0 0 1 0 2.084l-13.182 7.532A1.2 1.2 0 0 1 18 31.532V16.468a1.2 1.2 0 0 1 1.2-1.2z'\/%3E  %3C\/g%3E%3C\/svg%3E\")}.weui-play-loading{display:inline-block;vertical-align:middle;width:32px;height:32px;background:transparent url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEH0lEQVR42uXb2U9UZxzG8d+wzCKLQylLEbUIopVNBUGoIIuIVkWbWtDGlLZWoWrRqtRq3bvbpvtFL\/qH9Lo3TXrfv6Hpbf8B+p3kOcmbN0Nimw4w532STw7xAuZ5wsyccwat0FleXq5ED45iDu\/jMX7F3\/gTty1OoVAzprGEb\/AtvsP3+BG\/wM+MFXMokMIIbuIJvgI0gEbQAH\/Az89WjOGBZ3AI9\/E5vniKAX6DnztWTOEBJ7AXH+JTfBYNIF\/K197T4Af8hL8Q5XdUWrGEB5vFBXyET0QDIP8AH+MKZjGJMcxhFGVWLOHBbsESHgkjQL8FzhBPsIADaLQ4hCJ7cA8PAW8A6N8mkbW4hDIlOIy7uI8H8hCPHdNF9Vz+F+VfVXkNAA2AR5hFrcUxeou7jTtyVx7gHnZbXKNT2Fv4IM8AN7DZ4hqdzt6EBgA0wnlstLiGctW4jCXckmiIt5C0uEZneGdwQ5acIRZRbXEOBTtx3R9AX2+yOIeCaczjGt6T69JpcQ8l9+MqrkVHlT9ucQ8lk7iYZ4DFWJ3WrhRd2r6LRbkqYxZCKHoWl3BZrmAeGyzuoWSdyvsDDFgIoegQFuQduYQqCyG62pvHgnOcthCim5oXMO9YCOJ9XwO0aICLnhoLIbrNdd7xNs5ZKNHdWX+AYxZKKHsCb+BNx5CFEsqe1gBzuaN0WSjRtf+cZ6eFktwLHl73bLNQQtnXcM7TYqGEsjN5Bmi3UKJPc856dlkooewUznj6LJRQdhCzKj6bE8xNEA3QodIzjpMWSvQJ0GnHKzmxv\/\/vDJBaYYA2CyX6BPhlzwELJZTtxinHSR0zFkIomnWL6zgd2jXBeFRcTuAlpCyEULRVpY\/LMemwEELRMhzJM8AUKiyEULQdR+VIJNZ\/B+QNUI4JTKn4lKPJQghFm70BJmU8lE+JExjAYZmUCQwjbXGPPi06iEMYlzHpQ6nFPTo5msC4jOKgjr3r6fwg91tbqG\/chFGJBhjBMPrXwxWjnrJlKMkpxA9oU\/HIsLyIIdSvYflSlBV6gAQ6MRIVl0HZj+2r+eKoskmkkJRSSeQUYoRt7gAqPuAce7EV5QUunkIF0khJwQbwH0CDCg86xfuxD73SjUYk\/+fiGWxEpWxAxhmiXEpW4++I+5wB9jkD7MVu9GiIVtQi9R+vTTKoxjPIaoAqaABoACRRspq30TrQjz7ZI+4AXdgl27EZ9ahRsUqpkqzK1ksdav0BpELSKp9Yi7efOhXui8pLD7qcAV7ATuxAm7TgeWzFFmySRjR4A0ADMJw3QBkSa30Z3aSyPdKNTnHLtz\/FAM95I9RKjTdCCglbL9ErcL2KFmSAdVl8pWsJlWiLyjsDtIo\/QLP4A9Sgsqj+c2Wep0gVnlW5ZpWGBlBxNDiF06vxqv4PFQWElSE4GpoAAAAASUVORK5CYII=) 0 0 no-repeat;background-size:100%;-webkit-animation:weuiLoading 1000ms steps(60,end) 0ms infinite;animation:weuiLoading 1000ms steps(60,end) 0ms infinite;font-size:0;color:transparent}.weui-audio-btn{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:40px;height:40px;background:#fff;border-radius:50%;font-size:0}.weui-audio-btn:before{content:\"\u64ad\u653e\u97f3\u9891\";display:inline-block;vertical-align:middle;width:24px;height:24px;color:rgba(0,0,0,0.9);-webkit-mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\") no-repeat 50% 50%;mask:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\") no-repeat 50% 50%;-webkit-mask-size:cover;mask-size:cover;background-color:currentColor}.weui-audio-btn_playing:before{color:#07c160!important;-webkit-animation:weuiAudioPlaying 1.2s step-start infinite}@-webkit-keyframes weuiAudioPlaying{30%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M7.97 15a4.251 4.251 0 0 0 1.23-3 4.25 4.25 0 0 0-1.23-3L5 12l2.97 3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M7.97 15a4.251 4.251 0 0 0 1.23-3 4.25 4.25 0 0 0-1.23-3L5 12l2.97 3z'\/%3E%3C\/svg%3E\")}31%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}61%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}62%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}100%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}}@keyframes weuiAudioPlaying{30%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M7.97 15a4.251 4.251 0 0 0 1.23-3 4.25 4.25 0 0 0-1.23-3L5 12l2.97 3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M7.97 15a4.251 4.251 0 0 0 1.23-3 4.25 4.25 0 0 0-1.23-3L5 12l2.97 3z'\/%3E%3C\/svg%3E\")}31%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}61%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M11.435 5.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}62%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}100%{-webkit-mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\");mask-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%2307C160' d='M14.9 2A14.17 14.17 0 0 1 19 12a14.17 14.17 0 0 1-4.1 10l-1.485-1.5A12.036 12.036 0 0 0 16.9 12c0-3.233-1.267-6.259-3.485-8.5L14.899 2zm-3.465 3.5A9.21 9.21 0 0 1 14.1 12a9.21 9.21 0 0 1-2.665 6.5L9.95 17A7.077 7.077 0 0 0 12 12a7.077 7.077 0 0 0-2.05-5l1.485-1.5zM7.97 9a4.251 4.251 0 0 1 1.23 3 4.25 4.25 0 0 1-1.23 3L5 12l2.97-3z'\/%3E%3C\/svg%3E\")}}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:-apple-system-font,BlinkMacSystemFont,\"Helvetica Neue\",\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei UI\",\"Microsoft YaHei\",Arial,sans-serif;font-size:16px}body,h1,h2,h3,h4,h5,p,ul,ol,dl,dd,fieldset,textarea{margin:0}.page_video ul,.page_video ol{padding-left:0;list-style-type:none}.page_video fieldset,.page_video legend,.page_video textarea,.page_video input,.page_video button{padding:0}.page_video button,.page_video input,.page_video select,.page_video textarea{font-family:inherit;font-size:100%;margin:0;*font-family:-apple-system-font,BlinkMacSystemFont,\"Helvetica Neue\",\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei UI\",\"Microsoft YaHei\",Arial,sans-serif}.page_video a img,.page_video fieldset{border:0}.page_video a{text-decoration:none}.top_screen_opr{z-index:12;position:absolute;top:0;left:0;height:56px;right:0;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0))}.wx_video_share_area{padding:0 8px;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.wx_video_share_btn{font-size:0;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0;border:0;color:transparent;background-color:currentColor;padding:0;display:inline-block;vertical-align:middle;width:28px;height:28px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%23FFF' fill-rule='evenodd' d='M18.8 8.2H16V7h3.001c.55 0 .999.446.999.996v13.008a.998.998 0 0 1-.996.996H4.996A.998.998 0 0 1 4 21.004V7.996A1 1 0 0 1 4.999 7H8v1.2H5.2v12.6h13.6V8.2zm-6.2-3.938V13.5h-1.2V4.262L9.313 6.349 8.464 5.5l2.829-2.828a1 1 0 0 1 1.414 0L15.536 5.5l-.849.849L12.6 4.262z'\/%3E%3C\/svg%3E\")}.white_video_page .rich_media_area_primary_inner .video__relate.vertical_column{padding-bottom:14px}.pages_skin_primary .video__relate{background-color:#191919}.video__relate{background-color:#191919;padding:20px 0 18px;margin-top:12px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.video__relate::before{content:\"\";display:block;position:absolute;left:0;right:0;top:0;border-top:1px solid rgba(255,255,255,0.06);-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.video__relate.vertical_column .video__relate-info{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1}.video__relate.vertical_column .video__relate-info::after{content:\" \";position:absolute;left:0;bottom:-6px;right:0;height:1px;border-bottom:1px solid rgba(0,0,0,0.1);-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.video__relate.vertical_column .video__relate-title{margin-bottom:14px}.video__relate.vertical_column .video__relate-list{margin-right:0;padding:0 4px}.video__relate.vertical_column .video__relate-item{float:none;width:100%}.video__relate.vertical_column .video__relate-item:last-child .video__relate-item__right::before{height:0}.video__relate.vertical_column .video__relate-item:last-child .video__relate-info::after{display:none}.video__relate.vertical_column .video__relate-duration{display:-webkit-box;display:-webkit-flex;display:flex;font-size:12px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;right:4px;bottom:2px}.video__relate.vertical_column .video__relate-duration:before{content:'';position:relative;top:1px;display:inline-block;width:14px;height:14px;margin-right:2px;background-repeat:no-repeat;background-image:url(\"data:image\/svg+xml,%3Csvg width='16' height='16' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M5.556 2.88l5.887 3.623a.583.583 0 0 1 0 .994L5.556 11.12a.583.583 0 0 1-.89-.497V3.377a.583.583 0 0 1 .89-.497z' fill='%23FFF'\/%3E%3C\/g%3E%3C\/svg%3E\");background-position:center;background-size:cover}.video__relate.vertical_column .video__relate-item-wrp{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin-right:0;padding:6px 0}.video__relate.vertical_column .video__relate-image{margin-bottom:0;width:142px;padding-bottom:80px;-webkit-flex-shrink:0;flex-shrink:0;margin-right:12px}.video__relate.vertical_column .video__relate-item__right{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;position:relative;padding:4px 0}.video__relate.vertical_column .video__relate-item__right:before{content:'';position:absolute;bottom:-6px;left:0;right:0;display:block;height:1px;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);background-color:rgba(0,0,0,0.1)}.video__relate.vertical_column .video__relate-view{font-size:14px;line-height:1.28;color:rgba(0,0,0,0.5)}.video__relate.vertical_column .video__relate-desc{font-size:16px;line-height:22px;margin-bottom:8px;padding:0;word-wrap:break-word;word-break:break-all}.video__relate.vertical_column .video__relate-tail{color:rgba(0,0,0,0.3);font-size:0;line-height:1.43}.video__relate.vertical_column .video__relate-tail .video__relate-tail-item{margin-right:8px;font-size:14px}.video__relate-title{color:rgba(255,255,255,0.8);margin-bottom:16px;line-height:1.4;font-size:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.video__relate_right{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video__relate_right_word{color:rgba(0,0,0,0.3);margin-right:2px}.video__relate_right_arrow{display:inline-block;vertical-align:middle;width:10px;height:20px;background-position:center;background-size:contain;background-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath d='M7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 010-1.413L6.527.52l1.06 1.06-5.424 5.425 5.425 5.425z' id='a'\/%3E%3C\/defs%3E%3Cuse fill-opacity='.3' transform='rotate(-180 5.02 9.505)' xlink:href='%23a' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}.video__album-title{margin-bottom:16px;line-height:1.4;font-size:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.video__album-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.video__album-link{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-flex-shrink:1;flex-shrink:1;margin-left:8px}.video__album-link_word{color:rgba(0,0,0,0.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.video__album-link_icon{margin-left:2px;display:inline-block;vertical-align:middle;width:.67em;height:1.33em;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink' width='10' height='20' viewBox='0 0 10 20'%3E  %3Cdefs%3E    %3Cpath id='ebaa2f8a-ce41-4953-86a3-97fed1be8d0d-a' d='M6.323 10.358l-.884.884L.623 6.426a.83.83 0 0 1 0-1.177L5.44.433l.884.884-4.52 4.52 4.52 4.521z'\/%3E  %3C\/defs%3E  %3Cuse fill-opacity='.5' fill-rule='evenodd' transform='rotate(-180 4.184 7.921)' xlink:href='%23ebaa2f8a-ce41-4953-86a3-97fed1be8d0d-a'\/%3E%3C\/svg%3E\")}.video__relate-list{overflow:hidden;-ms-overflow-style:none;overflow:-moz-scrollbars-none}.video__relate-list::-webkit-scrollbar{display:none}.video__relate-item{float:left;width:33.8%;cursor:pointer;-webkit-flex-shrink:0;flex-shrink:0}.video__relate-item:last-child{padding-right:8px}.video__relate-item-wrp{margin-right:8px}.video__relate-image{background-color:#999;width:100%;padding-bottom:57%;border-radius:4px;background-size:cover;background-position:center center;position:relative;margin-bottom:8px}.video__relate-duration{position:absolute;color:#fff;right:6px;bottom:4px;font-size:10px;text-shadow:0 0 2px rgba(0,0,0,0.3)}.video__relate-desc{color:rgba(255,255,255,0.5);line-height:17px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;font-size:12px;padding:0 1px}.video__relate-image-invisible{opacity:0;position:absolute;width:100%}.video__relate-img-mask{position:absolute;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,0.02)}.video_tail_module{padding:24px}.video_tail_module .video__relate{background-color:transparent}.video_tail_module .video__relate_right_word{color:rgba(255,255,255,0.8)}.video_tail_module .video__relate_right_arrow{background-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath d='M7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 010-1.413L6.527.52l1.06 1.06-5.424 5.425 5.425 5.425z' id='a'\/%3E%3C\/defs%3E%3Cuse fill='%23FFFFFF' fill-opacity='.8' transform='rotate(-180 5.02 9.505)' xlink:href='%23a' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}.video__relate-last-item{width:27.75%;box-sizing:content-box;height:0;-webkit-flex-shrink:0;flex-shrink:0;float:left;cursor:pointer;position:relative}.video__relate-last-item .video__relate-item-wrp{padding-bottom:66.04%;position:relative;left:-4px;margin-right:0}.video__relate-more-wrp{width:100%;position:absolute;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video__relate-more{position:relative;width:32%;padding-top:32%;height:0;box-sizing:content-box;border-radius:50%;background-color:#f7f7f7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video__relate-more-icon{position:absolute;top:15%;left:36%;display:inline-block;vertical-align:middle;width:35.3%;padding-top:70.6%;height:0;box-sizing:content-box;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='12' height='24' viewBox='0 0 12 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M2.454 6.58l1.06-1.06 5.78 5.779a.996.996 0 0 1 0 1.413l-5.78 5.779-1.06-1.061 5.425-5.425-5.425-5.424z' opacity='.3'\/%3E%3C\/svg%3E\")}.video__relate-more-word{font-size:12px;margin-top:6px;color:rgba(0,0,0,0.3)}.video__relate-account-name{padding-top:2px;font-size:12px;color:rgba(0,0,0,0.3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pc-video__relate.video__relate .video__relate-list{overflow:hidden;margin:0 8px 0 16px;padding:0}.pc-video__relate.video__relate .video__relate-item{width:33.33%}.pc-video__relate.video__relate .video__relate-item:last-child{padding-right:0}.pc-video__relate .video__relate-list{margin-right:0}@media screen and (max-width:321px){.video__relate-item{width:40.28%}}@media screen and (min-width:415px){.video__relate-item{width:121px}}@media(prefers-color-scheme:dark){.video__relate_right_word{color:rgba(255,255,255,0.3)}.video__relate_right_arrow{background-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath d='M7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 010-1.413L6.527.52l1.06 1.06-5.424 5.425 5.425 5.425z' id='a'\/%3E%3C\/defs%3E%3Cuse fill='%23FFFFFF' fill-opacity='.3' transform='rotate(-180 5.02 9.505)' xlink:href='%23a' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}.video__relate.vertical_column .video__relate-info::after{border-color:rgba(255,255,255,0.05)}.video__relate.vertical_column .video__relate-view{color:rgba(255,255,255,0.5)}.video__relate.vertical_column .video__relate-item__right:before{background-color:rgba(255,255,255,0.05)}.video__relate.vertical_column .video__relate-tail{color:rgba(255,255,255,0.3)}.video__relate-more{background-color:#202020}.video__relate-more-icon{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='12' height='24' viewBox='0 0 12 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M2.454 6.58l1.06-1.06 5.78 5.779a.996.996 0 0 1 0 1.413l-5.78 5.779-1.06-1.061 5.425-5.425-5.425-5.424z' fill='%23FFFFFF' opacity='.3'\/%3E%3C\/svg%3E\")}.video__relate-more-word{color:rgba(255,255,255,0.3)}.video__relate-account-name{color:rgba(255,255,255,0.3)}}.white_video_page .video_tail_module .video__relate-title{color:rgba(255,255,255,0.8)}.white_video_page .video_tail_module .video__relate-desc{color:rgba(255,255,255,0.5)}.video_tail_module .video__relate-account-name{margin-top:4px;color:rgba(255,255,255,0.3);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.video_tail_module{padding:64px 44px 30px;padding:calc(64px + constant(safe-area-inset-top)) calc(44px + constant(safe-area-inset-right)) calc(30px + constant(safe-area-inset-bottom)) calc(44px + constant(safe-area-inset-left));padding:calc(64px + env(safe-area-inset-top)) calc(44px + env(safe-area-inset-right)) calc(30px + env(safe-area-inset-bottom)) calc(44px + env(safe-area-inset-left));display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;position:absolute;width:100%;z-index:13;box-sizing:border-box;overflow:hidden}.video_tail_module .video_tail_module__hd{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;position:relative;z-index:2}.video_tail_module .have_expand{margin-top:24px}.video_tail_module .have_expand .video__relate-list{display:-webkit-box!important;display:-webkit-flex!important;display:flex!important;-webkit-flex-wrap:wrap;flex-wrap:wrap}.video_tail_module .video__relate{margin-top:0;width:100%}.video_tail_module .video__relate-title{padding:0;margin-bottom:16.7px}.video_tail_module .video__relate-list{padding:0;margin-right:-12px}.video_tail_module .video__relate-item-wrp{margin-right:12px}.video_tail_module .video__relate-duration{font-size:12px}.video_tail_module .account_info_wrp{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;position:absolute;min-width:0;margin-right:16px;z-index:1}.video_tail_module .profile_info_wrp{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video_tail_module .account_avatar{width:36px;height:36px;border-radius:50%;margin-right:8px}.video_tail_module .account_name{font-size:16px;color:rgba(255,255,255,0.8);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.video_tail_module .subscription_info{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video_tail_module .subscription_info .account_subscription_tips{font-size:16px;color:rgba(255,255,255,0.5);margin-left:8px;white-space:nowrap;display:none}.video_tail_module .subscription_info .account_link_icon{display:inline-block;vertical-align:middle;margin-left:4px;width:10px;height:20px;-webkit-flex-shrink:0;flex-shrink:0;opacity:.8;background-position:center;background-size:contain;background-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath d='M7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 010-1.413L6.527.52l1.06 1.06-5.424 5.425 5.425 5.425z' id='a'\/%3E%3C\/defs%3E%3Cuse fill='%23FFFFFF' fill-opacity='1' transform='rotate(-180 5.02 9.505)' xlink:href='%23a' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}.video_tail_module .subscription_info.subscription_success .account_subscription_tips{display:block}.video_tail_module .subscription_info.subscription_success .account_link_icon{opacity:.5}.video_tail_module .recommend_item_wrp{position:relative}.video_tail_module .recommend_item_wrp.opr_item_wrp:last-child{margin-left:46.5px;padding-left:36.5px}.video_tail_module .recommend_item_wrp:before{content:' ';display:block;width:1px;height:24px;background-color:rgba(255,255,255,0.1);-webkit-transform:scaleX(0.5);transform:scaleX(0.5);position:absolute;left:0}.video_tail_module .recommend_item_wrp .opr_item_text{position:relative}.video_tail_module .recommend_item_wrp .opr_item_text:after{position:absolute;top:50%;right:0;margin-right:-10px;margin-top:-10px;content:' ';display:block;width:10px;height:20px;background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='12' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath d='M7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 010-1.413L6.527.52l1.06 1.06-5.424 5.425 5.425 5.425z' id='a'\/%3E%3C\/defs%3E%3Cuse fill='%23FFFFFF' fill-opacity='.8' transform='rotate(-180 5.02 9.505)' xlink:href='%23a' fill-rule='evenodd'\/%3E%3C\/svg%3E\") no-repeat center \/ contain}.video_tail_module .btn_account_subscription{background:rgba(255,255,255,0.3);border-radius:2.4px;color:#fff;font-weight:500;padding:3px 14px;font-size:14px;line-height:1.29;margin-left:8px;white-space:nowrap}.video_tail_module .btn_account_subscription:active{background:rgba(255,255,255,0.2)}.video_tail_module .opr_wrp{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:0 auto;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;top:2px}.video_tail_module .opr_item_wrp{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:24px;font-size:15px;color:rgba(255,255,255,0.8)}.video_tail_module .opr_item_wrp:last-child{margin-left:78px}.video_tail_module .opr_item_wrp:first-child{margin-left:0}.video_tail_module .opr_item{display:inline-block;vertical-align:middle;width:36px;height:36px;-webkit-flex-shrink:0;flex-shrink:0;background-size:contain;background-repeat:no-repeat;background-position:center;margin-bottom:8px}.video_tail_module .refresh_icon{background-image:url(\"data:image\/svg+xml,%3Csvg width='28' height='28' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M13.506 6.08a9.1 9.1 0 1 0 6.929 2.652l.99-.99c1.9 1.9 3.075 4.525 3.075 7.425 0 5.799-4.701 10.5-10.5 10.5s-10.5-4.701-10.5-10.5C3.5 9.694 7.686 5.2 13.03 4.71l-1.387-1.388.99-.99 2.888 2.888a.583.583 0 0 1 0 .825l-.578.577-2.31 2.31-.99-.99 1.863-1.863z' opacity='.8' fill='%23FFF' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}.video_tail_module .video-logo_icon{border-radius:50%;background-color:#FFF;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video_tail_module .video-logo_icon:before{content:' ';display:block;width:18px;height:15px;background:url(\"data:image\/svg+xml,%3Csvg width='15' height='12' viewBox='0 0 15 12' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='14.509' height='11.607' rx='.871' fill='%2307C160'\/%3E%3Cpath d='M9.41 6.387L6.34 8.36a.348.348 0 0 1-.536-.292V4.12a.348.348 0 0 1 .536-.293l3.07 1.974a.348.348 0 0 1 0 .586z' fill='%23FFF'\/%3E%3C\/g%3E%3C\/svg%3E\") no-repeat center \/ contain}.video_tail_module .like_icon{background:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cg fill='%23576B95' fill-rule='evenodd'%3E    %3Cpath fill='%23FFFFFF' fill-opacity='.8' d='M14.496 4.136c-.288-.424-1.136-.654-1.756-.366-.358.166-.405.283-.453 1.613-.013.377-.015.426-.023.588-.063 1.333-.128 1.832-.344 2.403-.37.977-.913 1.617-1.793 2.133-.685.402-1.08.581-1.583.692a7.54 7.54 0 0 1-1.682.187H4.987a.343.343 0 0 0-.352.334V19c0 .183.152.334.348.335 6.585.042 9.525.042 10.09-.004.836-.068 1.991-.501 2.486-.908 1.658-1.365 2.38-5.964 1.482-7.965-.117-.26-.376-.473-.831-.637a3.625 3.625 0 0 0-1.103-.213 2.04 2.04 0 0 1-1.024-.276c-.694-.4-1.017-1.109-1.017-2.017 0-1.837-.139-2.544-.57-3.179zm.993-.674c.612.902.777 1.853.777 3.853 0 .546.157.828.416.978a.85.85 0 0 0 .405.115c.41.006.963.08 1.53.284.705.254 1.245.663 1.52 1.275.98 2.184.486 7.487-1.816 9.382-.69.57-2.078 1.09-3.15 1.178-.668.055-4.087.047-10.196.008a1.541 1.541 0 0 1-1.54-1.534v-7.28c0-.85.697-1.535 1.552-1.535h1.875c.467 0 .903-.044 1.424-.159.368-.08.673-.226 1.234-.555.63-.369 1-.787 1.278-1.523.157-.416.21-.825.268-2.034.007-.16.01-.21.022-.574.059-1.648.233-2.236 1.146-2.66 1.22-.566 2.678-.07 3.255.781z'\/%3E    %3Cpath fill='%23FFFFFF' fill-opacity='.8' d='M7 11h1.2v9H7z'\/%3E  %3C\/g%3E%3C\/svg%3E\") no-repeat center \/ contain}.video_tail_module .selected .like_icon{background:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%23FFFFFF' fill-opacity='.8' fill-rule='evenodd' d='M15.49 3.462c.611.902.776 1.853.776 3.853 0 .546.157.828.416.978a.85.85 0 0 0 .405.115c.41.006.963.08 1.53.284.705.254 1.245.663 1.52 1.275.98 2.184.486 7.487-1.816 9.382-.69.57-2.078 1.09-3.15 1.178-.668.055-4.087.047-10.196.008a1.541 1.541 0 0 1-1.54-1.534v-7.28c0-.85.697-1.535 1.552-1.535h1.875c.467 0 .903-.044 1.424-.159.368-.08.673-.226 1.234-.555.63-.369 1-.787 1.278-1.523.157-.416.21-.825.268-2.034.007-.16.01-.21.022-.574.059-1.648.233-2.236 1.146-2.66 1.22-.566 2.678-.07 3.255.781zM7.6 10.838a.6.6 0 0 0-.6.6v7.645a.6.6 0 1 0 1.2 0v-7.645a.6.6 0 0 0-.6-.6z'\/%3E%3C\/svg%3E\") no-repeat center \/ contain}.video_tail_module .share_icon{background-image:url(\"data:image\/svg+xml,%3Csvg width='28' height='28' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M21.933 9.567h-3.266v-1.4h3.5c.642 0 1.166.52 1.166 1.161v15.177c0 .638-.52 1.162-1.161 1.162H5.828c-.638 0-1.161-.52-1.161-1.162V9.328c0-.638.521-1.161 1.165-1.161h3.501v1.4H6.067v14.7h15.866v-14.7zM14.7 4.972V15.75h-1.4V4.972l-2.435 2.435-.99-.99 3.3-3.3a1.167 1.167 0 0 1 1.65 0l3.3 3.3-.99.99L14.7 4.972z' opacity='.8' fill='%23FFF' fill-rule='evenodd'\/%3E%3C\/svg%3E\")}.video_tail_module [disabled='true'] .share_icon{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='30' viewBox='0 0 24 30'%3E  %3Cpath fill='%23FFF' d='M6 7.5v1.8H1.8v18.9h20.4V9.3H18V7.5h4.502c.824 0 1.498.669 1.498 1.494v19.512c0 .82-.669 1.494-1.494 1.494H1.494C.674 30 0 29.331 0 28.506V8.994C0 8.174.67 7.5 1.498 7.5H6zm7.06-6.493l4.243 4.243-1.272 1.273-3.131-3.13V17.25h-1.8V3.392l-3.13 3.13L6.696 5.25l4.242-4.243a1.5 1.5 0 0 1 2.122 0z' opacity='.3'\/%3E%3C\/svg%3E\")}.video_tail_module [disabled='true'] .share_word{color:rgba(255,255,255,0.3)}.video_tail_module .video__relate{padding-top:24px}.video_tail_module .video__relate-item{width:25%}.video_tail_module .video__relate-item:last-child{padding-right:0}.video_tail_module .ad_area{display:none}.video_tail_module.has_ad{padding-bottom:0}.video_tail_module.has_ad .have_expand{display:none}.video_tail_module.expand .video_tail_module__hd,.video_tail_module.has_ad .video_tail_module__hd{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.video_tail_module.expand .opr_wrp,.video_tail_module.has_ad .opr_wrp{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;width:auto;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-shrink:0;flex-shrink:0;margin:0;position:relative;top:4px}.video_tail_module.expand .opr_item_wrp,.video_tail_module.has_ad .opr_item_wrp{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.video_tail_module.expand .opr_item_wrp:last-child,.video_tail_module.has_ad .opr_item_wrp:last-child{margin-left:16px}.video_tail_module.expand .opr_item,.video_tail_module.has_ad .opr_item{width:28px;height:28px;margin-bottom:0;margin-right:4px}.video_tail_module.expand .account_info_wrp,.video_tail_module.has_ad .account_info_wrp{position:static;margin-bottom:10px}.video_tail_module.expand .ad_area,.video_tail_module.has_ad .ad_area{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;overflow:hidden}.video_tail_plugin{position:absolute;left:0;right:0;z-index:13;height:100%;background-color:black}.video_tail_plugin .video_tail_module{position:static;z-index:auto}.video_tail_plugin .has_ad .iframe_ad_container{display:block;height:100%}.add_bg_color .video_tail_module{background-color:rgba(0,0,0,0.9)}.video_tail_module.has_ad .opr_wrp{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.video_tail_module.has_ad .opr_item_wrp.recommend_item_wrp,.video_tail_module.has_ad .opr_item_wrp.like_item_wrp,.video_tail_module.has_ad .opr_item_wrp.share_item_wrp{display:none}.video_tail_module.video_screen_half,.video_tail_module.video_screen_half.expand{padding:12px 16px}.video_tail_module.video_screen_half .account_avatar,.video_tail_module.video_screen_half.expand .account_avatar{width:28px;height:28px}.video_tail_module.video_screen_half .account_name,.video_tail_module.video_screen_half.expand .account_name{font-size:16px}.video_tail_module.video_screen_half .have_expand,.video_tail_module.video_screen_half.expand .have_expand{display:none}.video_tail_module.video_screen_half.has_ad{padding-bottom:0}.video_tail_module.horizontal_full .video_tail_module .opr_item_wrp{margin-left:68px}.video_tail_module.horizontal_full .video_tail_module .recommend_item_wrp.opr_item_wrp:last-child{margin-left:41.5px;padding-left:36.5px}.video_tail_module.expand .video-logo_icon:before{width:14px;height:11px}.video_tail_module.expand .opr_item_wrp.recommend_item_wrp{margin-left:20px;padding-left:20px;position:relative}.video_tail_module.expand .recommend_item_wrp .opr_item{margin-right:8px}.video_tail_module.expand .recommend_item_wrp .opr_item_text{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.video_tail_module.expand .recommend_item_wrp .opr_item_text:after{position:static;margin-left:3px;margin-top:initial}.video_tail_module.vertical_full{padding:64px 20px 30px;padding:calc(64px + constant(safe-area-inset-top)) calc(20px + constant(safe-area-inset-right)) calc(30px + constant(safe-area-inset-bottom)) calc(20px + constant(safe-area-inset-left));padding:calc(64px + env(safe-area-inset-top)) calc(20px + env(safe-area-inset-right)) calc(30px + env(safe-area-inset-bottom)) calc(20px + env(safe-area-inset-left))}.video_tail_module.vertical_full.expand .video_tail_module__hd{display:block}.video_tail_module.vertical_full.expand .opr_wrp{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:23px;margin-top:50px}.video_tail_module.vertical_full.expand .opr_item_wrp{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:47px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.video_tail_module.vertical_full.expand .opr_item_wrp.recommend_item_wrp{margin-left:29.5px;padding-left:23.5px}.video_tail_module.vertical_full.expand .opr_item{margin-right:0;margin-bottom:4px}.video_tail_module.vertical_full.expand .recommend_item_wrp .opr_item{margin-right:0}.video_tail_module.vertical_full.expand .have_expand{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;margin-top:30px;padding-top:0}.video_tail_module.vertical_full.expand .have_expand .video__relate-item{width:50%;margin-bottom:20px}.video_tail_module.vertical_full.expand .have_expand .video__relate{padding-top:28px}.video_tail_module.vertical_full .opr_wrp{top:0}.video_tail_module.vertical_full .opr_item_wrp{margin-left:35px}.video_tail_module.vertical_full .opr_item_wrp:first-child{margin-left:0}.video_tail_module.vertical_full .opr_item_wrp:last-child{margin-left:35px}.video_tail_module.vertical_full .opr_item_wrp.recommend_item_wrp{position:relative;margin-left:29.5px;padding-left:26.5px}.video_tail_module.vertical_full .opr_item_wrp.recommend_item_wrp:before{content:' ';display:block;width:1px;height:20px;position:absolute;background-color:rgba(255,255,255,0.15);-webkit-transform:scaleX(0.5);transform:scaleX(0.5);left:0}.video_tail_module.vertical_full.expand.has_ad .video_tail_module__hd{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:flex}.video_tail_module.vertical_full.expand.has_ad .opr_wrp{margin-top:0;top:4px;margin-bottom:0}.video_tail_module.vertical_full.expand.has_ad .opr_item_wrp{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.video_tail_module.vertical_full.expand.has_ad .opr_item{margin-right:4px;margin-bottom:0}.appmsg_video .video_tail_module .account_info_wrp,.appmsg_video .video_tail_module .share_item_wrp{display:none}.paster_store.paster_show .paster_store_container{right:0}.paster_store .paster_store_container{position:relative;z-index:1;right:-100%;-webkit-transition:.25s;transition:.25s;font-size:32px;line-height:1.5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:8px;padding:2px;border-radius:4px;overflow:hidden;background-color:rgba(0,0,0,0.7)}.paster_store .paster_store_container:before{top:0;height:100%;position:absolute;left:0;right:0;z-index:0;content:' ';display:block;border-radius:4px;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);-webkit-filter:saturate(180%) blur(20px);filter:saturate(180%) blur(20px)}.paster_store .paster_store_main{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.paster_store .paster_store_avatar{display:block;width:48px;height:48px;border-radius:3px 1px 1px 3px;margin-right:6px}.paster_store .paster_store_content{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:6px 0 5px}.paster_store .paster_store_title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.paster_store .paster_store_title:after{display:block;content:' ';width:6px;height:12px;margin-left:5px;background:url(data:image\/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNnB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA2IDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4yICg3ODE4MSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bmV4dDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSIxOTA3MDUt6KeG6aKR5omT54K56KeG6KeJIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjgwMDAwMDAxMiI+CiAgICAgICAgPGcgaWQ9IjMuSWNvbnMvRmlsbGVkL2JhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCA2LjAwMDAwMCkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTMuMDAwMDAwLCAtNi4wMDAwMDApICIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSLlm77moIfpopzoibIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjUwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNjcxNTcyODgsNC41IEw1LjIwNzEwNjc4LDguMDM1NTMzOTEgTDQuNSw4Ljc0MjY0MDY5IEwwLjYxMDkxMjcwMyw0Ljg1MzU1MzM5IEMwLjQxNTY1MDU1OCw0LjY1ODI5MTI0IDAuNDE1NjUwNTU4LDQuMzQxNzA4NzYgMC42MTA5MTI3MDMsNC4xNDY0NDY2MSBMNC41LDAuMjU3MzU5MzEzIEw1LjIwNzEwNjc4LDAuOTY0NDY2MDk0IEwxLjY3MTU3Mjg4LDQuNSBaIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) no-repeat center;background-size:contain}.paster_store .paster_store_title_inner{font-size:14px;line-height:18px;color:rgba(255,255,255,0.8);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:10em}.paster_store .paster_store_desc{font-size:12px;color:rgba(255,255,255,0.6);opacity:.6;line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:12em}.paster_store .paster_store_extend{display:block;width:12px;height:12px;background:url(data:image\/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSIxOTA3MDUt6KeG6aKR5omT54K56KeG6KeJIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i57yW57uELTEwIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLlm77moIfpopzoibIiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMzAwMDAwMDEyIiBwb2ludHM9IjYuODIyMjQ5MzcgNS45OTk5OTk3NSAxMSAxMC4xNzc3NTA2IDEwLjE3Nzc1MDYgMTEgNiA2LjgyMjI0OTE3IDEuODIyMjQ5MzcgMTEgMSAxMC4xNzc3NTA2IDUuMTc3NzUwNjMgNS45OTk5OTk3NSAxLjAwMDAwMDQ5IDEuODIyMjQ5NDEgMS44MjIyNDk4NiAxIDYgNS4xNzc3NTAzNCAxMC4xNzc3NTAxIDEgMTAuOTk5OTk5NSAxLjgyMjI0OTQxIj48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) no-repeat center;background-size:12px;font-size:15px;text-align:right;padding:18px 10px;margin-left:8px;position:relative;z-index:2}.content_paster_for_android .paster_store .paster_store_container{background-color:rgba(25,25,25,0.9)}.paster_content{display:inline-block;overflow:hidden;position:absolute;-webkit-transition:.25s;transition:.25s;margin-left:constant(safe-area-inset-left);margin-left:env(safe-area-inset-left);margin-right:constant(safe-area-inset-right);margin-right:env(safe-area-inset-right)}.paster_content,.paster_container{background-color:transparent}.page_video.page_video_skin-vertical.page_video_control .paster_content,.page_video.page_video_skin-horizontal.page_video_control .paster_content{margin-bottom:calc(72px + constant(safe-area-inset-bottom));margin-bottom:calc(72px + env(safe-area-inset-bottom))}.page_video .db{display:block}.page_video .tips_global_primary{color:rgba(0,0,0,0.3)}.page_video .reset_btn{-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0;background-color:transparent;border:0;font-family:inherit;display:inline-block;vertical-align:middle}.page_video .aria_hidden_abs{position:absolute;width:0;height:0;overflow:hidden}.page_video .weui-flex_align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page_video .weui-flex_justify-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_video a{color:#576b95;color:var(--weui-LINK);text-decoration:none}.page_video .tips_global{color:rgba(0,0,0,0.5);color:var(--weui-FG-1)}.page_video .tc{text-align:center}.page_video .tr{text-align:right}.page_video .line_wrp{line-height:58px;color:#576b95;color:var(--weui-LINK)}.page_video .none.page_video .none.page_video .none{display:none}.page_video .clearfix:after{content:\" \";display:block;clear:both;height:0}.page_video .clearfix{zoom:1}body,html{-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.wrp_pop_tips{width:100%;height:100%;background-color:#000;position:absolute;left:0;top:0;z-index:20;line-height:100%;text-align:center}.wrp_pop_tips .pop_tips{position:absolute;top:50%;left:0;margin-top:-36px;display:inline-block;padding:15px 0;text-align:center;color:#fff;width:100%}.wrp_pop_tips .pop_tips .error_code{display:block;font-style:normal;font-size:12px;color:#888;margin-top:10px}.wrp_load_failed{width:100%;height:100%;background-color:#000;position:absolute;left:0;top:0;z-index:20;line-height:100%;text-align:center}.wrp_load_failed .wrp_icon_info{width:60px;height:60px;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;border:1px solid #fff;position:absolute;left:50%;top:50%;display:block;margin-left:-30px;margin-top:-50px}.wrp_load_failed .wrp_icon_info:after{content:\"\";position:absolute;left:50%;top:50%;display:block;width:50px;height:50px;margin-left:-25px;margin-top:-25px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_load_faild55871f.png) no-repeat 0 0;background-size:100% auto}.wrp_load_failed p{width:100%;height:60px;position:absolute;top:50%;display:block;margin-top:30px;color:#fff}.page_video{max-height:100%;position:relative;background-color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page_video.wx_video_status_initial .top_screen_opr{background:transparent}.page_video .wrp_loading{width:100%;height:100%;position:absolute;left:0;top:0;z-index:8}.page_video .wrp_loading .svg_loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px}.page_video .wrp_loading .mid_opr{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page_video .wrp_loading.start_loading .mid_opr{width:100%;height:100%;top:0;left:0;bottom:0;right:0;margin:0;border-radius:0}.page_video .wrp_loading.start_loading .wx_video_loading{width:40px;height:40px}.page_video .wx_video_loading{display:inline-block;vertical-align:middle;width:32px;height:32px;background:transparent url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEH0lEQVR42uXb2U9UZxzG8d+wzCKLQylLEbUIopVNBUGoIIuIVkWbWtDGlLZWoWrRqtRq3bvbpvtFL\/qH9Lo3TXrfv6Hpbf8B+p3kOcmbN0Nimw4w532STw7xAuZ5wsyccwat0FleXq5ED45iDu\/jMX7F3\/gTty1OoVAzprGEb\/AtvsP3+BG\/wM+MFXMokMIIbuIJvgI0gEbQAH\/Az89WjOGBZ3AI9\/E5vniKAX6DnztWTOEBJ7AXH+JTfBYNIF\/K197T4Af8hL8Q5XdUWrGEB5vFBXyET0QDIP8AH+MKZjGJMcxhFGVWLOHBbsESHgkjQL8FzhBPsIADaLQ4hCJ7cA8PAW8A6N8mkbW4hDIlOIy7uI8H8hCPHdNF9Vz+F+VfVXkNAA2AR5hFrcUxeou7jTtyVx7gHnZbXKNT2Fv4IM8AN7DZ4hqdzt6EBgA0wnlstLiGctW4jCXckmiIt5C0uEZneGdwQ5acIRZRbXEOBTtx3R9AX2+yOIeCaczjGt6T69JpcQ8l9+MqrkVHlT9ucQ8lk7iYZ4DFWJ3WrhRd2r6LRbkqYxZCKHoWl3BZrmAeGyzuoWSdyvsDDFgIoegQFuQduYQqCyG62pvHgnOcthCim5oXMO9YCOJ9XwO0aICLnhoLIbrNdd7xNs5ZKNHdWX+AYxZKKHsCb+BNx5CFEsqe1gBzuaN0WSjRtf+cZ6eFktwLHl73bLNQQtnXcM7TYqGEsjN5Bmi3UKJPc856dlkooewUznj6LJRQdhCzKj6bE8xNEA3QodIzjpMWSvQJ0GnHKzmxv\/\/vDJBaYYA2CyX6BPhlzwELJZTtxinHSR0zFkIomnWL6zgd2jXBeFRcTuAlpCyEULRVpY\/LMemwEELRMhzJM8AUKiyEULQdR+VIJNZ\/B+QNUI4JTKn4lKPJQghFm70BJmU8lE+JExjAYZmUCQwjbXGPPi06iEMYlzHpQ6nFPTo5msC4jOKgjr3r6fwg91tbqG\/chFGJBhjBMPrXwxWjnrJlKMkpxA9oU\/HIsLyIIdSvYflSlBV6gAQ6MRIVl0HZj+2r+eKoskmkkJRSSeQUYoRt7gAqPuAce7EV5QUunkIF0khJwQbwH0CDCg86xfuxD73SjUYk\/+fiGWxEpWxAxhmiXEpW4++I+5wB9jkD7MVu9GiIVtQi9R+vTTKoxjPIaoAqaABoACRRspq30TrQjz7ZI+4AXdgl27EZ9ahRsUqpkqzK1ksdav0BpELSKp9Yi7efOhXui8pLD7qcAV7ATuxAm7TgeWzFFmySRjR4A0ADMJw3QBkSa30Z3aSyPdKNTnHLtz\/FAM95I9RKjTdCCglbL9ErcL2KFmSAdVl8pWsJlWiLyjsDtIo\/QLP4A9Sgsqj+c2Wep0gVnlW5ZpWGBlBxNDiF06vxqv4PFQWElSE4GpoAAAAASUVORK5CYII=) 0 0 no-repeat;background-size:100%;-webkit-animation:loading 1000ms steps(60,end) 0ms infinite;animation:loading 1000ms steps(60,end) 0ms infinite;top:0;left:0;margin:0;position:relative}.page_video .mid_opr{width:56px;height:56px;position:absolute;left:50%;top:50%;margin-left:-28px;margin-top:-28px;z-index:10;background-color:rgba(0,0,0,0.5);text-align:center;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;color:#fff}.page_video .mid_opr .spinner{transform:scale(0.7);-webkit-transform:scale(0.7);-moz-transform:scale(0.7);-ms-transform:scale(0.7)}.page_video .mid_opr .icon_mid_play{display:inline-block;width:0;height:0;margin-top:25px;margin-left:25px;border-width:14px 25px;overflow:hidden;border-color:transparent transparent transparent #fff;border-style:dotted dotted dotted solid}.page_video .mid_opr .icon_mid_speed_play{display:inline-block;width:35px;height:20px;margin-top:27px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_speed_play55871f.png) no-repeat 0 0;background-size:100% auto}.page_video .mid_opr .video_length{color:#cbcbcb;font-size:12px}.page_video .mid_opr .video_length .played_time{color:#fff;font-weight:400}.page_video .mid_opr .video_length em{margin:0 2px}.page_video .mid_opr.fast_pre_next{width:132px;height:52px;border-radius:3px;margin-left:-66px;margin-top:-26px;background-color:rgba(0,0,0,0.5)}.page_video .mid_opr.fast_pre_next .video_length{padding-top:10px;padding-bottom:7px;font-weight:400}.page_video .mid_opr .video_processor_bar{position:relative;margin:0 auto;width:106px;height:3px;border-radius:2px;background-color:rgba(0,0,0,0.4);text-align:left}.page_video .mid_opr .processor_bar_inner{position:absolute;display:inline-block;width:106px;height:3px;border-radius:2px;background-color:#09bb07;opacity:.9}.page_video .mid_opr.next .icon_mid_speed_play{transform:rotate(180deg);-webkit-transform:rotate(180deg)}.page_video .full_screen_opr{z-index:12;text-align:center;position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.5)}.page_video .full_screen_opr .icon_mid_play{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:48px;height:48px;background:rgba(237,237,237,0.9);border-radius:50%}.page_video .full_screen_opr .icon_mid_play:before{content:\"\";text-indent:-999em;display:inline-block;width:28px;height:28px;vertical-align:middle;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%23151515' fill-rule='evenodd' d='M9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852z'\/%3E%3C\/svg%3E\")}.page_video .full_screen_opr .icon_mid_new_play{display:none;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:48px;height:48px;border-radius:50%}.page_video .full_screen_opr .icon_mid_new_play:before{content:\"\";text-indent:-999em;display:inline-block;vertical-align:middle;width:48px;height:48px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='48' height='48' viewBox='0 0 48 48'%3E  %3Cg fill='none' fill-rule='evenodd'%3E    %3Ccircle cx='23.834' cy='23.834' r='23.834' fill='%23000' fill-opacity='.15'\/%3E    %3Cpath fill='%23FFF' fill-rule='nonzero' d='M23.834 0C36.998 0 47.67 10.671 47.67 23.834c0 13.164-10.671 23.835-23.835 23.835C10.671 47.669 0 36.998 0 23.834 0 10.671 10.671 0 23.834 0zm0 1.43C11.461 1.43 1.43 11.46 1.43 23.834S11.46 46.24 23.834 46.24 46.24 36.209 46.24 23.834c0-12.373-10.03-22.404-22.405-22.404zm-4.766 13.733c.207 0 .41.054.59.157L32.75 22.8a1.192 1.192 0 0 1 0 2.07l-13.09 7.48a1.192 1.192 0 0 1-1.783-1.035v-14.96c0-.659.533-1.192 1.192-1.192z'\/%3E  %3C\/g%3E%3C\/svg%3E\")}.page_video .full_screen_opr .video_length{color:#fefefe;font-size:12px;padding-top:8px}.page_video .full_screen_opr .video_length .played_time{color:#fff;font-weight:400}.page_video .full_screen_opr .video_length em{margin:0 2px}.page_video .full_screen_opr .mid_play_box{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}.page_video .full_screen_opr .mid_play_box .video_length{position:absolute;top:100%;left:0;right:0;line-height:1.4;font-size:14px;font-weight:400;color:#fff}.page_video .top_screen_opr{z-index:12;text-align:center;position:absolute;top:0;height:18.8%;left:0;right:0;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0));overflow:hidden}.page_video .poster_cover{text-align:center;position:absolute;overflow:hidden;left:0;top:0;z-index:7;width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-color:#000}.page_video .poster_cover img{height:100%;width:100%;position:absolute;left:0;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.page_video .poster_cover_mask{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.35)}.page_video .continue_play{position:absolute;left:0;top:0;right:0;bottom:0;z-index:11;color:#fff;font-size:14px;background-color:#000}.page_video .continue_play .continue_opr{position:absolute;text-align:right;bottom:15px;right:4%;z-index:2}.page_video .continue_play .continue_opr .btn_replay{color:#fff}.page_video .continue_play .continue_opr .icon_replay{display:inline-block;width:12px;height:13px;margin-right:5px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_replay55871f.png) no-repeat 0 0;background-size:100% auto;vertical-align:middle}.page_video .continue_play .continue_nav{position:absolute;z-index:3;bottom:15px;left:50%;margin-left:-20px;width:40px}.page_video .continue_play .continue_nav .nav_dot{width:4px;height:4px;font-size:0;text-indent:-999em;display:inline-block;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;border:1px solid #949494;margin-right:3px}.page_video .continue_play .continue_nav .nav_dot.current{background-color:#fff;border-color:#fff}.page_video .continue_play .tit_desc{width:94%;position:absolute;height:150px;top:50%;margin-top:-98px;left:50%;margin-left:-47%;color:#959494;text-align:left}.page_video .continue_play .tit_desc span{display:block;border-bottom:1px solid #2c2c2c;padding-bottom:8px}.page_video .continue_play .wrp_video_continue{position:relative;height:100%;left:0;top:0}.page_video .continue_play .dl_video_continue{position:absolute;height:100%;left:0;right:0;top:0;z-index:1}.page_video .continue_play .dd_continue_inner{width:100%;position:relative;top:50%;height:150px;margin-top:-68px;text-align:center;z-index:0}.page_video .continue_play .dd_continue_inner .video_list{display:table;width:94%;text-align:left;margin:15px auto 0;font-size:12px}.page_video .continue_play .dd_continue_inner .video_list .video_item{height:35px;margin-bottom:15px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item{display:block;position:relative;color:#fff}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:60px;height:35px;position:absolute;left:0;top:0}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{padding-left:70px;margin-top:-5px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;box-sizing:border-box;-webkit-box-sizing:border-box}.page_video .continue_play .dd_continue_inner .video_list .video_item:last-child{margin-bottom:0}.page_video .video_mask{width:100%;height:100%;background-color:rgba(0,0,0,0.5);position:absolute;left:0;top:0;z-index:1}.page_video .inner{width:100%;height:100%;z-index:6;overflow:hidden;position:relative;background-color:#000}.page_video .inner .video_poster{width:100%;height:100%}.page_video .inner .video_poster video{width:100%;height:100%;vertical-align:middle;position:relative;z-index:1;padding:0;top:0}.page_video .inner .video_poster .video_mask{width:100%;height:100%;vertical-align:middle;position:absolute;z-index:1999;background-color:transparent}.page_video .video_opr{color:#fff;z-index:9;position:absolute;left:0;right:0;bottom:0;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,0.7)));background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7));overflow:hidden;height:56px}.page_video .video_opr .opr_inner{min-height:56px;height:56px;position:relative;font-size:12px;padding:0 12px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page_video .video_opr .opr_inner_fl .switch{display:inline-block;vertical-align:middle;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none;padding-right:0;margin-right:12px}.page_video .video_opr .opr_inner_fl .switch .btn_opr{text-indent:-999em;display:inline-block;vertical-align:middle;width:32px;height:32px;background-size:cover}.page_video .video_opr .opr_inner_fl .switch.switch_on .btn_opr{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23FFF' d='M10.032 6.584l13.456 8.28a1.333 1.333 0 0 1 0 2.272l-13.456 8.28A1.333 1.333 0 0 1 8 24.281V7.719a1.333 1.333 0 0 1 2.032-1.135z'\/%3E%3C\/svg%3E\")}.page_video .video_opr .opr_inner_fl .switch.switch_off .btn_opr{background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M7 5h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933H7c-.552 0-1-.418-1-.933V5.933C6 5.418 6.448 5 7 5zm8 0h2c.552 0 1 .418 1 .933v12.134c0 .515-.448.933-1 .933h-2c-.552 0-1-.418-1-.933V5.933c0-.515.448-.933 1-.933z'\/%3E%3C\/svg%3E\")}.page_video .video_opr .opr_inner_fl .played_time{display:inline-block;vertical-align:middle;color:#fff;font-weight:500;font-size:12px;min-width:auto}.page_video .video_opr .opr_inner_fl .total_time{display:inline-block;vertical-align:middle;color:#fff;font-weight:500;font-size:12px;min-width:auto}.page_video .video_opr .opr_inner_fr .screenSize_control{display:inline-block;vertical-align:middle;padding:2px 0 2px 20px;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.page_video .video_opr .opr_inner_fr .screenSize_control .icon_control{text-indent:-999em;display:inline-block;vertical-align:middle;width:24px;height:24px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M21 15v5a1 1 0 01-1 1h-5v-2h4v-4h2zM9 3v2H5v4H3V4a1 1 0 011-1h5zm8.584 2H15V3h5a1 1 0 011 1v5h-2V6.414l-4.366 4.364-1.414-1.414L17.584 5zM6.416 18.998H9v2H4a1 1 0 01-1-1v-5h2v2.587l4.366-4.365 1.414 1.414-4.364 4.364z' fill-rule='evenodd' fill='%23FFF'\/%3E%3C\/svg%3E\")}.page_video .video_opr .play_mode{display:none;-webkit-box-flex:1;width:32px;text-align:center;padding-right:12px;position:relative}.page_video .video_opr .play_mode .btn_mode{text-align:center;color:#fff;font-size:12px;font-weight:700}.page_video .video_opr .play_mode .btn_mode.current{color:#09bb07}.page_video .video_opr .play_mode .pop_mode_select{position:absolute;bottom:31px;text-align:center;background-color:#242424;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;width:62px;display:none;left:-15px}.page_video .video_opr .play_mode .pop_mode_select .clarity{display:inline-block;padding:2px 0 2px 0;width:62px}.page_video .video_opr .play_mode .pop_mode_select .clarity .clarity_item{border-bottom:1px solid #3e3e3e;padding:11px 0;width:62px;color:#fff;font-size:12px}.page_video .video_opr .play_mode .pop_mode_select .clarity .clarity_item:last-child{border-bottom:0}.page_video .video_opr .play_mode .pop_mode_select .clarity .clarity_item.current{color:#09bb07}.page_video .video_opr .play_mode .pop_mode_select .icon_arrow_down{width:0;height:0;display:inline-block;position:absolute;bottom:-7px;left:50%;margin-left:-2px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #242424;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.wrp_play_bar{position:absolute;left:6px;right:6px;bottom:0;z-index:9}.wrp_play_bar .wrp_progress{position:relative;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);top:.1em;font-size:12px}.wrp_play_bar .wrp_progress .progress_bar{height:2px;position:relative;background:0}.wrp_play_bar .wrp_progress .progress_bar .played_bar{position:absolute;height:2px;padding-left:6px;left:-6px;top:0;background-color:#07c160;z-index:4;border-radius:1px}.wrp_play_bar .wrp_progress .progress_bar .background_bar{position:absolute;height:2px;top:0;left:-6px;right:-6px;z-index:2;border-radius:1px;background:rgba(255,255,255,0.3)}.wrp_play_bar .wrp_progress .progress_bar .buffer_bar{position:absolute;height:2px;padding:0 6px;left:-6px;top:0;z-index:3;border-radius:1px;background:rgba(255,255,255,0.3)}.wrp_play_bar .wrp_progress .progress_bar .bar_mark{position:absolute;height:2px;padding:0;top:0;width:4px;z-index:4;border-radius:1px;background:rgba(255,255,255,0.8)}.wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot{z-index:5;position:absolute;left:-1px;top:50%;margin-top:-10px;width:6px;height:20px;line-height:15px}.wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot .speed_dot{width:12px;height:12px;margin-top:-6px;margin-left:-6px;position:absolute;top:50%;background-color:#fff;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%}.wrp_play_bar .wrp_progress__draging .progress_bar{height:3px}.wrp_play_bar .wrp_progress__draging .progress_bar .background_bar,.wrp_play_bar .wrp_progress__draging .progress_bar .played_bar,.wrp_play_bar .wrp_progress__draging .progress_bar .buffer_bar,.wrp_play_bar .wrp_progress__draging .progress_bar .bar_mark{height:100%}.wrp_play_bar .wrp_progress__draging .progress_bar .wrp_speed_dot .speed_dot{margin-left:-8px;margin-top:-8px;width:16px;height:16px}.wrp_play_bar.wrp_play_bar_hide_speed-dot .wrp_progress .progress_bar .background_bar,.wrp_play_bar.wrp_play_bar_hide_speed-dot .wrp_progress .progress_bar .played_bar,.wrp_play_bar.wrp_play_bar_hide_speed-dot .wrp_progress .progress_bar .buffer_bar,.wrp_play_bar.wrp_play_bar_hide_speed-dot .wrp_progress .progress_bar .bar_mark{height:1px}.wrp_play_bar.wrp_play_bar_hide_speed-dot .wrp_progress .progress_bar .wrp_speed_dot{display:none}.full_mask{position:fixed;bottom:0;top:0;left:0;right:0;z-index:1;background-color:#000;display:none}.full_screen_mv .page_video{position:absolute;left:50%;top:50%;margin-left:-150px;margin-top:-100px;background-color:#000;z-index:10}.full_screen_mv .page_video .inner{overflow:visible;position:absolute;left:0;top:0}.full_screen_mv .page_video .inner .video_poster video{background-color:#000;max-height:100%;max-width:100%;display:inline-block}.full_screen_mv .page_video .video_opr{position:fixed;bottom:0}.full_screen_mv .page_video .video_opr .screenSize_control .icon_control{background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_rebackplay@2x55871f.png) no-repeat 0 0;background-size:100% auto}.full_screen_mv .page_content{height:100%;overflow:hidden}.full_screen_mv .full_mask{display:block}@media all and (orientation:portrait){.full_screen_mv .opr_fade_out{pointer-events:none;-webkit-animation:opr_fade_out .1s ease-in-out 1}.full_screen_mv .opr_fade_in{-webkit-animation:opr_fade_in .1s ease-in-out 1}@-webkit-keyframes opr_fade_out{0%{filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}100%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}}@-webkit-keyframes opr_fade_in{0%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}100%{bottom:0;filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}}.full_screen_mv .flow_fade_out{-webkit-animation:opr_fade_out .7s ease-in-out 3s 1 forwards}}@media all and (orientation:landscape){.full_screen_mv .page_video .video_opr .opr_inner{padding:0 25px}.full_screen_mv .page_video .video_opr .opr_inner .opr_inner_fl{left:25px}.full_screen_mv .page_video .video_opr .opr_inner .opr_inner_fr{right:25px}}.interact_video{text-align:right;background-color:#f7f7f7;line-height:2.5;overflow:hidden;font-size:11px;padding:0 10px;font-size:14px;position:relative;border-bottom-left-radius:2px;-moz-border-radius-bottomleft:2px;-webkit-border-bottom-left-radius:2px;border-bottom-right-radius:2px;-moz-border-radius-bottomright:2px;-webkit-border-bottom-right-radius:2px}.interact_video:before{display:none;content:\" \";position:absolute;top:0;left:0;border:1px solid #e6e6e6;border-bottom-left-radius:4px;-moz-border-radius-bottomleft:4px;-webkit-border-bottom-left-radius:4px;border-bottom-right-radius:4px;-moz-border-radius-bottomright:4px;-webkit-border-bottom-right-radius:4px;border-top:0;width:200%;height:200%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:0 0;transform-origin:0 0}.interact_video .access_original{-webkit-tap-highlight-color:rgba(0,0,0,0);color:#959494;position:absolute;left:0;right:0;top:0;bottom:0;text-align:left;padding:0 10px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.interact_video .access_original:after{content:\" \";display:inline-block;height:7px;width:7px;border-width:1px 1px 0 0;border-color:#c8c7cd;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px;margin-left:.3em;display:none}.interact_video .video_original{text-align:left;padding-left:15px;padding-right:25px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.interact_video .video_original:after{position:absolute;top:50%;margin-top:-4px;right:15px}.interact_video .video_resource{float:left;color:#959494}.interact_video .inter_opr{float:left;color:#607fa6}.interact_video .inter_opr .praise_area{padding-left:10px;float:right}.interact_video .inter_opr .btn_detail{display:inline-block;text-align:center;position:relative}.interact_video .inter_opr .love_num{font-size:13px;line-height:13px}.interact_video .inter_opr .icon_love{width:12px;height:12px;vertical-align:middle;display:inline-block;vertical-align:0;position:relative;top:1px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/qqmusic\/icon_love_mini_sprite.2x55871f.png) no-repeat 0 0;background-size:12px auto}.interact_video .inter_opr .loved .icon_love{background-image:url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/qqmusic\/icon_love_mini_sprite.2x55871f.png);background-position:0 -17px}.pages_common_area{overflow:hidden}.tc{text-align:center}.tr{text-align:right}.tips_global{color:rgba(0,0,0,0.5)}.video_info_area{margin-top:1em}.video_info_area.empty_data .praise_access_wrp{float:none}.video_info_area.empty_data .praise_user_list{padding:0}.video_info_area.empty_data .praise_access_wrp,.video_info_area.empty_data .comment_access_wrp{text-align:center}.video_info_area.empty_data .discuss_container{margin-right:15px;padding-right:0}.video_info_hd{overflow:hidden;font-size:14px;line-height:2.2em;padding:0 15px;position:relative}.video_info_hd:before{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dfdfdd;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.video_info_bd{padding:0 0 0 15px}.video_extend_inner{padding-right:15px}.no_in_mm{padding-top:2em}.video_abstract{position:relative;margin-top:10px;font-size:14px;padding:15px}.video_abstract .video_title{font-size:16px;font-weight:400;font-style:normal}.video_abstract .inner_abstract{padding-top:10px;color:#8c8c8c;line-height:1.6;max-height:4.7em;overflow:hidden;margin-bottom:.5em;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-webkit-transition:max-height .3s ease-in}.video_abstract .inner_abstract.hide{position:absolute;left:15px;right:15px;visibility:hidden;z-index:-1;max-height:none}.opr_fade_out{pointer-events:none;-webkit-animation:opr_fade_out .1s ease-in 1 forwards}.opr_fade_in{pointer-events:auto;-webkit-animation:opr_fade_in .1s ease-in 1 forwards}.flow_fade_out{-webkit-animation:opr_fade_out .7s ease-in-out 3s 1 forwards}@-webkit-keyframes opr_fade_out{0%{filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}100%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}}@-webkit-keyframes opr_fade_in{0%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}100%{filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}}.video_pause_controll{position:absolute;z-index:12;left:0;top:0;width:100%;height:100%;display:none;background-color:rgba(0,0,0,0.5)}.video_pause_controll .btn_pause{position:absolute;left:50%;top:50%;z-index:10;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);text-align:center;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;color:#fff}.video_pause_controll .btn_pause .icon_pause{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:48px;height:48px;background:rgba(237,237,237,0.9);border-radius:50%}.video_pause_controll .btn_pause .icon_pause:before{content:\"\";display:inline-block;width:28px;height:28px;vertical-align:middle;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%23151515' fill-rule='evenodd' d='M9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852z'\/%3E%3C\/svg%3E\")}.btn_pause_accessibility{display:none}.video_ad{position:absolute;z-index:13;right:0;top:0;width:100%;height:54px;text-align:right;padding-top:4px;padding-right:10px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(51,51,51,0.43)),to(rgba(255,255,255,0)));background-image:linear-gradient(to bottom,rgba(51,51,51,0.43) 0,rgba(255,255,255,0) 100%)}.video_ad_detail{position:absolute;z-index:14;right:0;bottom:0;width:100%;height:30px}.video_ad_detail .btn_ad_detail{position:absolute;right:10px;bottom:10px;background-color:rgba(37,37,37,0.7);padding:2px 10px;border-radius:4px;font-size:12px;color:#fff}.video_ad_detail .btn_ad_detail.primary{color:#09ba07;border:1px solid #09ba07;overflow:hidden}.video_ad_detail .btn_ad_detail.with_arrow{background-color:rgba(45,45,45,0.7);padding:0;line-height:2.3;min-width:98px;text-align:center}.video_ad_detail .btn_ad_detail.with_arrow:after{content:\" \";display:inline-block;height:7px;width:7px;border-width:1px 1px 0 0;border-color:#fff;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:0;margin-top:-2px;margin-left:4px;vertical-align:middle}.video_ad_detail .btn_ad_detail.with_weapp{padding:0 10px;min-width:auto}.icon26_weapp_white{display:inline-block;width:14px;height:14px;background-image:url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAY1BMVEVHcEz\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/80LMUcAAAAIHRSTlMAfBg4AeNjmS\/2\/PDnrcyG1Qt1az8ys4MhUcLc6UWcl7QkidAAAADFSURBVHhetdFJqsMwEEVRWZ0luYm79E5y97\/Kz6cQQXaATPJGDw4UpZL6OuN8a+O9vuzFOACIk91IiORUpdgB6Pz13EAyBT0A\/1+0g66gCnppHtaCXvCUyQvEgmqopR1g+Ei2SnBQkuNs3hR6oNXynBMknWl0QBNEGsCNmTRwEtEt0If3wGU6qrwNqbLFhjlD3mZPERZpT3gVtIKX1m8P3oHTcjh4FGQSNOer74Bh84MVOTGoMnaKIs6oXS71Pa63eVS\/zR\/btROXGlgZggAAAABJRU5ErkJggg==);background-size:cover;background-repeat:no-repeat;vertical-align:middle;margin-right:4px}.video_ad_time_meta{font-size:12px;margin-left:.7em;padding-left:.7em;color:#fff;position:relative}.video_ad_time_meta:before{content:\" \";width:1px;height:10px;background-color:#fff;position:absolute;left:-2px;top:50%;margin-top:-5px}.video_ad_time_meta:first-child:before{display:none}.btn_close .left_time{color:#fcd037;position:relative;margin-right:10px;font-weight:400;font-style:normal}.imgad_cover{text-align:center;position:absolute;overflow:hidden;left:0;top:0;z-index:7;width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat}.imgad_cover img{height:100%;width:100%}.imgad_cover_border{border:1px solid #d8d8d8;position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px}@media(min-device-width:480px){.page_video .continue_play .continue_inner .video_list{margin-top:20px}.page_video .continue_play .continue_inner .video_list .video_item{margin-bottom:20px}.page_video .continue_play .continue_inner{height:210px;margin-top:-105px}}@media(min-device-width:360px){.video_ad_time_meta{font-size:13px}.video_ad_detail .btn_ad_detail{font-size:14px}}@media only screen and (min-width:375px){.page_video .continue_play .tit_desc{margin-top:-120px}.page_video .continue_play .dd_continue_inner{margin-top:-88px}.page_video .continue_play .dd_continue_inner .video_list{font-size:14px}.page_video .continue_play .dd_continue_inner .video_list .video_item{height:50px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:80px;height:50px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{padding-left:95px}}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.page_video .continue_play .continue_inner .video_list{margin-top:20px}.page_video .continue_play .continue_inner .video_list .video_item{margin-bottom:20px}.page_video .continue_play .continue_inner{height:210px;margin-top:-105px}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.page_video .continue_play .continue_inner .video_list{margin-top:20px}.page_video .continue_play .continue_inner .video_list .video_item{margin-bottom:20px}.page_video .continue_play .continue_inner{height:210px;margin-top:-105px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{font-size:14px}}@-webkit-keyframes opacity-60-25-0-12{0%{opacity:.25}0.01%{opacity:.25}0.02%{opacity:1}60.01%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-1-12{0%{opacity:.25}8.34333%{opacity:.25}8.35333%{opacity:1}68.3433%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-2-12{0%{opacity:.25}16.6767%{opacity:.25}16.6867%{opacity:1}76.6767%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-3-12{0%{opacity:.25}25.01%{opacity:.25}25.02%{opacity:1}85.01%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-4-12{0%{opacity:.25}33.3433%{opacity:.25}33.3533%{opacity:1}93.3433%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-5-12{0%{opacity:.270958333333333}41.6767%{opacity:.25}41.6867%{opacity:1}1.67667%{opacity:.25}100%{opacity:.270958333333333}}@-webkit-keyframes opacity-60-25-6-12{0%{opacity:.375125}50.01%{opacity:.25}50.02%{opacity:1}10.01%{opacity:.25}100%{opacity:.375125}}@-webkit-keyframes opacity-60-25-7-12{0%{opacity:.479291666666667}58.3433%{opacity:.25}58.3533%{opacity:1}18.3433%{opacity:.25}100%{opacity:.479291666666667}}@-webkit-keyframes opacity-60-25-8-12{0%{opacity:.583458333333333}66.6767%{opacity:.25}66.6867%{opacity:1}26.6767%{opacity:.25}100%{opacity:.583458333333333}}@-webkit-keyframes opacity-60-25-9-12{0%{opacity:.687625}75.01%{opacity:.25}75.02%{opacity:1}35.01%{opacity:.25}100%{opacity:.687625}}@-webkit-keyframes opacity-60-25-10-12{0%{opacity:.791791666666667}83.3433%{opacity:.25}83.3533%{opacity:1}43.3433%{opacity:.25}100%{opacity:.791791666666667}}@-webkit-keyframes opacity-60-25-11-12{0%{opacity:.895958333333333}91.6767%{opacity:.25}91.6867%{opacity:1}51.6767%{opacity:.25}100%{opacity:.895958333333333}}.app_download_container{overflow:hidden;padding:10px 12px;color:#fff;background-color:rgba(0,0,0,0.65);position:absolute;left:0;right:0;bottom:0;z-index:13}.app_download_container .app_thumb{float:left;width:45px;height:45px}.app_download_container .btn_app_download_wrp{float:right;position:relative;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;font-size:0;margin-top:10px}.app_download_container .btn_app_download{display:inline-block;border:1px solid #09ba07;text-align:center;width:3.2em;box-sizing:border-box;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;font-size:14px;color:#09ba07;line-height:1.75;position:relative;z-index:1}.app_download_container .btn_app_download.progress_text{color:#fff}.app_download_container .app_download_progress{position:absolute;top:0;bottom:0;left:0;background-color:rgba(9,186,7,0.75)}.app_download_container .app_download_info{overflow:hidden;padding:0 10px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.app_download_container .app_download_title{display:block;font-weight:400;font-size:17px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;margin-bottom:-3px}.app_download_container .app_download_desc{font-size:15px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.inner_app_download_container{position:absolute;left:0;right:0;bottom:0;z-index:5;text-align:center;color:#fff}.inner_app_download_container .inner_app_download_bd{background-color:#459aea;display:table-cell;padding:0 20px;vertical-align:middle;word-wrap:break-word;word-break:break-all;width:2000px;height:45px}.inner_app_download_container .inner_app_download_bd.success{background-color:#09ba07}.inner_app_download_container .app_download_progress_wrp{background-color:#398bd7;height:3px;position:relative;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;overflow:hidden;margin-top:5px;margin-bottom:3px}.inner_app_download_container .app_download_progress{position:absolute;left:0;top:0;bottom:0;background-color:#fff;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px}.wx_video_msg_primary{text-align:center;font-size:0;background-color:#f6f8f9;position:relative}.wx_video_msg_primary:after{content:\" \";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.wx_video_msg_primary .weui-icon_msg{color:#ccd1d5;width:40px;height:40px}.wx_video_msg_primary_inner{display:inline-block;vertical-align:middle;font-size:12px;color:rgba(0,0,0,0.3)}.wx_video_msg_primary_text{padding-top:1em}.wx_video_error_box{position:relative;z-index:25;background-color:#262626;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.wx_video_error_msg{color:#fff}.wx_video_error_msg_btn{display:inline-block;padding:0 1.34em;line-height:1.7;color:#fff;margin-top:2em;-webkit-tap-highlight-color:rgba(0,0,0,0)}.wx_video_error_loading{width:26px;margin-top:-0.2em;vertical-align:middle;-webkit-animation:loading 1000ms steps(13,end) 0ms infinite;animation:loading 1000ms steps(13,end) 0ms infinite}.wx_video_error_refresh{width:17px;margin:-0.2em .34em 0 0;vertical-align:middle}.wx_video_error_code{display:block;font-style:normal;font-size:12px;color:#888;margin-top:10px}@-webkit-keyframes loading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes loading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.not_fullscreen .video_fill{-o-object-fit:fill;object-fit:fill}.not_fullscreen video::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}.not_fullscreen video::-webkit-media-controls{display:none!important}.not_fullscreen .video_time{display:none}.video_time-wrp{display:none}.TL-page .page_video .full_screen_opr .icon_mid_play{display:none}.TL-page .page_video .full_screen_opr .icon_mid_new_play{display:-webkit-box;display:-webkit-flex;display:flex}.TL-page .page_video{position:relative}.TL-page .page_video .video_time-wrp{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;bottom:0;right:0;z-index:99;font-size:14px;padding:10px 8px}.TL-page .page_video .video_time-loading_icon{display:inline-block;vertical-align:middle;-webkit-flex-shrink:0;flex-shrink:0;width:12px;height:12px;margin-right:4px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='80' height='80' viewBox='0 0 80 80'%3E  %3Cdefs%3E    %3ClinearGradient id='ed40f422-eee4-4359-919c-867913d5a2f1-a' x1='94.087%25' x2='94.087%25' y1='0%25' y2='90.559%25'%3E      %3Cstop offset='0%25' stop-color='%23EDEDED' stop-opacity='0'\/%3E      %3Cstop offset='100%25' stop-color='%23EDEDED' stop-opacity='.3'\/%3E    %3C\/linearGradient%3E    %3ClinearGradient id='ed40f422-eee4-4359-919c-867913d5a2f1-b' x1='100%25' x2='100%25' y1='8.674%25' y2='90.629%25'%3E      %3Cstop offset='0%25' stop-color='%23EDEDED'\/%3E      %3Cstop offset='100%25' stop-color='%23EDEDED' stop-opacity='.3'\/%3E    %3C\/linearGradient%3E  %3C\/defs%3E  %3Cg fill='none' opacity='.9'%3E    %3Cpath fill='url(%23ed40f422-eee4-4359-919c-867913d5a2f1-a)' d='M40 0c22.091 0 40 17.909 40 40S62.091 80 40 80v-7c18.225 0 33-14.775 33-33S58.225 7 40 7V0z'\/%3E    %3Cpath fill='url(%23ed40f422-eee4-4359-919c-867913d5a2f1-b)' d='M40 0v7C21.775 7 7 21.775 7 40s14.775 33 33 33v7C17.909 80 0 62.091 0 40S17.909 0 40 0z'\/%3E    %3Ccircle cx='40.5' cy='3.5' r='3.5' fill='%23EDEDED'\/%3E  %3C\/g%3E%3C\/svg%3E\");-webkit-animation:animal .5s infinite linear;animation:animal .5s infinite linear}.TL-page .page_video .video_time-play_icon{display:inline-block;vertical-align:middle;width:14px;height:14px;-webkit-flex-shrink:0;flex-shrink:0;margin-right:2px;background-size:cover;background-image:url(\"https:\/\/res.wx.qq.com\/op_res\/kuh4QQBjdrMCoSMIqzWtyKoZVSBqELqyX6EErg8dHuzhlsMnKfDRlY--CLePQ2GT\")}.TL-page .page_video .video_time{display:inline-block;color:#fff;min-width:32px;font-size:12px;text-align:right}@-webkit-keyframes animal{0%{transform:rotate(0deg);-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@keyframes animal{0%{transform:rotate(0deg);-ms-transform:rotate(0deg);-webkit-transform:rotate(0deg)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)}}.video_muted_btn{position:absolute;left:5px;bottom:3px;z-index:13;line-height:300px;overflow:hidden;border-width:12px 10px;border-style:solid;border-color:transparent;background:transparent url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABCCAMAAAAYE8oxAAABRFBMVEUAAAABAQEAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEGBgb\/\/\/\/+\/v4ICAj+\/v7+\/v7\/\/\/\/+\/v78\/Pz6+vqCgoL5+fn4+Pjy8vL4+Pjv7+\/e3t7w8PDHx8evr69DQ0M7OzspKSlTU1P+\/v7+\/v79\/f319fX29vbu7u729vbc3Nzn5+fU1NTb29vr6+vk5OTX19e+vr7b29vHx8fz8\/O6urqBgYHc3NxjY2OGhob7+\/v19fX7+\/vx8fH7+\/vu7u7y8vL4+Pjs7Ozr6+vS0tLR0dHHx8fo6OiysrLY2Njb29uHh4ft7e16enpnZ2cxMTHPz89YWFjExMRlZWWTk5MoKCiEhITn5+f7+\/vi4uLq6urm5ub4+Pjj4+Pw8PCwsLDa2trNzc2fn5+MjIzf399zc3NcXFydnZ2xsbH\/\/\/9PhljfAAAAa3RSTlMABQcLDhoXER0TJzIhJfvsLPXv9+no3zTjxsW1rpqDbEouJyAR+fLg0Mu3jo6MioN2dGhkWVJRIiAcGxba2NHMyr+yoZaPgH96aF1ORkU\/PDo6NDItKyopDr+4r6yclol4bmFhYFRQSUA0LriWdMcAAAObSURBVFjD7ZdXd9swDIVLUaIkV44dZ+\/Ymc1q9t6r2Xt178n\/\/14ANB8kubGGTx96ipfkCvGnCwKwlCf\/4+8GY6Ostjy2Iw1WQ6Dx0CElN1jtgCttUkqTs5oBF9YlhBsmMrZ0xhIAb4YkhuBGKDWfyy0xFhd41SgV0TSCqW64\/IozFg94UpAqrBCRn+D1yVjny\/hsg\/wz0d6D6\/VXnMUAHtbJR4hu3zAk1qPPFeMfEPWIR+e0HjKHEU0yxkfl40RTeBOQGeo3WBSewXdkmEhDOM+YNlnMQWqqwqgCIBC8v0MGiXoI687IFNxUeGOQWvXvE6VktdBE9vAOfm9cUEhuW9eDoI99RLpXNCKtJA38pjo6MOl0gewwQfqbFp1oztWpudYmL0A3LPMA0Y1M5Kb1HFXjijbptYP85Ft6vBzDo\/DWUHZrk84+qE5\/2YZpRSXSyc2gLCxypu5wjiNp84REOrnssNRDiCfmNIG6S0wkRI\/U\/aWyR0BNQzYx0bSKA1L3l8GHccjHoexkRDJJ7ZWzvHywaLkzFdF2aIB2y2WLXhDP3KRE+nNB3d4GW2S5BUSrSE7UrmSbq4j2LYhcOiK5ks2iTOwDUS+4kZxIDIJQs5USZipiS5mo9vIWhZWO2EtVayLycymJnyUODBI1vzUlkeZxRBOnEZ+O6NLOvNW9fo87k67Xi\/Q1PlMmutu41yLVzkyjbii5iiiaQPWIVHvdhnrLoS00+E9ULW4a4izpfbjAcHimQDQhPvn34yrKQhF7oR13WsmJBp8kOeaUj\/Gujo4RskmfM8fU6FxRF70HaqAEjUn6dL0pkJrQFhcHcdj9x0gPo0z+aSAuXwaI5Il3k9jIWqbq9DjKI0j6ibZwshl\/5PNPX1ciunPN0NoLbXEZLTd70KXAm5TtCssfjpfJd1Ug2s5918CRJ8iUoSy\/oKIDSM5NX9i2sLL5iTDRhHKuPRoWUL\/wFFvvkV\/9jZTblpc\/8L\/ZUzlQjbA5Nbp\/EzMHdATVgtFnvfzHBh8RKFgNR6B+UR\/Oqr5UZ1KFmS8FHxFvhTyq+Rs9HE7JYqRQyK9NwW8zCPq50khtUV2Kg\/zeqonBduIgtWdVlyIjcfh\/rFUmmqLUlTt3RKz\/5ZkByOzlRphIKcsrOYKWJx4SBnOLHvGhM3GFcAkYD4mDmXkjBQ8SmRok6FN8pHCc3fCIqLVAYHyk6Qar8w1SEiRXa1KroD0x0gPD5f0r8RsZhZXDnmumggAAAABJRU5ErkJggg==) no-repeat 0 0;width:27px;height:22px;vertical-align:middle;display:inline-block;background-size:27px auto}.video_muted_btn.muting{background-image:url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABCCAMAAAAYE8oxAAABTVBMVEUAAAAAAAAAAAABAQEAAAAAAAAFBQXq6uoAAAD\/\/\/8AAAAAAAABAQEWFhba2tr4+PgWFhYAAABLS0sBAQH+\/v719fX+\/v7\/\/\/\/9\/f3y8vJJSUliYmJBQUElJSX+\/v77+\/v7+\/v6+vr19fXy8vLt7e3v7+\/g4ODp6enW1tbQ0NDIyMiBgYEVFRU0NDT+\/v78\/Pz5+fn39\/fs7Ozh4eHs7Ozn5+fw8PDz8\/Otra2AgIDCwsIAAABoaGgcHBzc3NyMjIxoaGj6+vr19fX7+\/v29vbu7u7q6urm5ub6+vr4+Pj7+\/vr6+vOzs61tbXo6OjX19fAwMC6urrd3d3R0dHHx8fb29vt7e12dnZQUFBpaWmZmZktLS2+vr6EhIT7+\/v7+\/vb29vy8vL19fXBwcHk5OSfn5+MjIygoKAeHh7V1dU5OTmSkpJRUVGysrL\/\/\/+xlHuyAAAAbnRSTlMABxkLDgQSuiD7FSMTLGSxLicNMvXM6\/jvsywaER\/y6OHR0cS3rZyOiIFsNCga6OPguJWIeXVbUUpGMC0rJBwcCdvYxsXAv62ooZGFeWpoaGJZWFBNRj89PDgvKCMO0riPjX58cWBUPjs3LSomIUfhR2IAAAQqSURBVFjD7djXe9MwEABwzpJM4hhKShJCEkahbCi0FEoLbdl777330P\/\/yJ1s92rJRojvgyf0Qs\/Cv550Z0fpmv\/jHw919U9uOn75tKqZOn1Fgwr14HhTj1WT8GJaawGBIoFaj41DxdTyOZySQoWlKC5rXU3Cj5c0k1aIaulhfYoi3VxJKljYbiYS6f6uuV5vSdWKyeKkQxL4ZUqbETkivMXLr4SqW3UaHVzrkAoebNU1ohIPaOuP1ZAKZNJYZ5MK7m7S9WK8B693FoBJaz6ySQU3m\/oXYrplB05McF\/5SCVmDVifYzTfwZmbQv0WqUC8Ya+yMjJq7MWZw6O6JKFEivErulJUS3NqJYWvvZriKAU4hEyjVkEOx3SVqGCu33yY4VTN1zh1RoKTXX5Xc31CJDOOqF5cxZ+nnkOR5IC6656dJAjtIwsRnvcoODcO+XPR2E0LkmCXRDMZEVkvynum\/rMmKwVx9ATjTUOhrMbSPpLFaC9FU8OVJHdiuJ57Mt9gbZEbmHTE1lkKrwmV7+Q+jHZJS4y0h2QRk7pB4dZlyO99RC0ZC2WJXpLEfOdaXYrf50mmjW0YPXVEP0liTuyneFpCvuxJ2kgJlughWaT\/Pdiki\/pSeBSjPbEt+kgWKUkqr74rICsrpbwr30gWvSQ\/1xBnDTSTLzs5gUE39YlMuqKMbtOFzZQWpXwAg+2JR2TSFU1WnJaIT2HQ84tMuqLJSh\/JEIi3YNDJp1n0k3yLQIOQ1WLTEf3klpVbANfJaYE85c3RJbkQmfiJLhwuRNqDniv6ybERFOIdiidyMT5Bta4RPeQ45OJRCncW4i0qvCMGkFjraYp2J4JCYfxdjhhAKnGoT8HtJO\/wzfRcO\/3oI1d\/jstb5vIgzcSE3mb7HTGAFPF5+mlHZIoP8ilFB9IA0SJH8X1N43rRPMcw2Ia8JQaQhybon\/4zUxhFGVNhnPdjAHlGm0o38m381qRtjGSY6B4N+k+KRc\/Q+3zAheFPVx+ZJFGDyX2NvHeW6ZQyydu48p5vn9xojc8Xy2QSp0zuOIgbhwaIaxTe4UXzwbHVLo91JzdeskTJh8ELiwkZCoY9elNiwmCdpPD32wPT3l3+5BICyeJNdIgMELNmC3jRfBYVsjzimCqxt3xqBiL5TaSUWOjQe+cZL5pNBdYwCa17hySLKiP56RlNmF43jeQddDd+H7lR\/vZROliP5B5TpRan6DGFTBrtD\/1VokXepxV05k2KAeTHbSxaZDPrTE7RTwKR80dYtEgcO9um0AFkGrUfn2XRJvuPsl4MI1uPuyxa5IXs4QkiBZIbLrLIJLd60Mh68OCl0jd24L7sDkVAinx71JihFnHJ7neqSzgp0yTlv3zwwie7A96MMFJIydvF5OIgSvl62GbiUBWZc+rhpnIvAWXuB8Mz\/8vjJ5ndr64kqpVrAAAAAElFTkSuQmCC)}.page_video.ratio_primary .continue_play{white-space:nowrap;font-size:0}.page_video.ratio_primary .continue_play .wrp_video_continue{position:static;display:inline-block;vertical-align:middle;height:auto;width:100%;top:auto;left:auto;white-space:normal;font-size:13px;padding:10px 15px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc{position:static;width:auto;height:auto;margin:0}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:5px;border-bottom:0}.page_video.ratio_primary .continue_play .wrp_video_continue_inner{overflow:hidden}.page_video.ratio_primary .continue_play .dl_video_continue{height:auto;position:relative}.page_video.ratio_primary .continue_play .dd_continue_inner{height:auto;margin:0;top:auto}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list{display:block;width:auto;margin:0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item{height:auto;margin:7px 0 0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item{overflow:hidden}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:75px;height:42.1875px;position:static;float:left;margin-right:10px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{margin:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;padding-left:0;font-size:14px;line-height:1.4}.page_video.ratio_primary .continue_play .continue_nav,.page_video.ratio_primary .continue_play .continue_opr{bottom:10px}.page_video.video_skin_primary .wrp_video_continue_inner{padding-top:15px}.mpad_more_innervideo_container .mpad_more{margin-left:1px}.mpad_more_innervideo_container .mpad_more_list{right:-7px}.flex_screen_hide{display:none}.flex_screen{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.wx_video_flow{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.wx_video_flow_inner{padding:0 32px}.wx_video_flow_tips{font-size:14px;line-height:1.4;color:#fff}.full_screen_opr .wx_video_flow_btn{border:0;outline:0;background-color:rgba(255,255,255,0.5);border-radius:4px;line-height:1.4;font-size:16px;font-weight:700;letter-spacing:1px;color:#fff;padding:4.8px 12px}.full_screen_opr .wx_video_flow_btn:active{background-color:rgba(0,0,0,0.061)}@media(max-device-width:413px){.page_video.ratio_primary .continue_play .wrp_video_continue{padding:7px 10px;font-size:12px}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:4px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item{margin:6px 0 0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:68px;height:38.25px;margin-right:10px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{font-size:14px}}@media(max-device-width:360px){.page_video.ratio_primary .continue_play .wrp_video_continue{padding:6px 10px;font-size:11px}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item{margin:5px 0 0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:56px;height:31.5px;margin-right:7px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{font-size:12px}.page_video.ratio_primary .continue_play .continue_nav,.page_video.ratio_primary .continue_play .continue_opr{bottom:8px}.video_skin_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:4px}}@-webkit-keyframes weuiProcessCircleRight{0%{-webkit-transform:rotate(-135deg)}50%,100%{-webkit-transform:rotate(45deg)}}@-webkit-keyframes weuiProcessCircleLeft{0%,50%{-webkit-transform:rotate(-135deg)}100%{-webkit-transform:rotate(45deg)}}.mp-video-player{height:100%;width:100%}.page_video .video_ad_wrapper{z-index:8;position:absolute;width:100%;top:0;left:0}.page_video .video_ad_frame{height:100%;width:100%;background-color:black}.page_video .video_ad_frame__show_in{-webkit-animation:midAdShowIn .3s ease-out 1 forwards;animation:midAdShowIn .3s ease-out 1 forwards}.page_video .video_ad_advance__tips{position:absolute;margin-right:12px;margin-top:10px;right:constant(safe-area-inset-right);right:env(safe-area-inset-right);border-radius:4px;background-color:rgba(0,0,0,0.5);color:rgba(255,255,255,0.9);padding:0 6px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:12px;line-height:21px;height:21px;-webkit-transition:margin-top .25s;transition:margin-top .25s}.page_video .video_ad_advance__tips.with_topbar{margin-top:56px}.page_video .video_ad_advance__tips__loading{margin-left:4px;display:inline-block;position:relative;width:10px;height:10px}.page_video .video_ad_advance__tips__loading .weui-process-circle-process{width:200%;height:100%;border:2px solid transparent;border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);box-sizing:border-box;-webkit-transition:-webkit-transform;transition:-webkit-transform;transition:transform;transition:transform,-webkit-transform}.page_video .video_ad_advance__tips__loading .weui-process-circle-wrapper{width:50%;height:100%;position:absolute;top:0;overflow:hidden}.page_video .video_ad_advance__tips__loading .weui-process-circle-process-right{border-top:2px solid rgba(255,255,255,0.9);border-right:2px solid rgba(255,255,255,0.9);right:0}.page_video .video_ad_advance__tips__loading .weui-process-circle-process-left{border-bottom:2px solid rgba(255,255,255,0.9);border-left:2px solid rgba(255,255,255,0.9);left:0}.page_video .video_ad_advance__tips__loading .weui-process-circle-wrapper-right{right:0}.page_video .video_ad_advance__tips__loading .weui-process-circle-wrapper-left{left:0}.page_video .video_ad_advance__tips__loading .weui-process-circle-path{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;box-sizing:border-box;border:2px solid rgba(255,255,255,0.12)}.page_video .video__advance__tips{position:absolute;z-index:1999;left:24px;right:24px;width:initial;max-width:366px;box-sizing:border-box;background-color:rgba(0,0,0,0.7);color:rgba(255,255,255,0.9);font-weight:450;font-size:14px;display:-webkit-box;display:-webkit-flex;display:flex;border-radius:4px;padding:8px 62px 8px 8px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:constant(safe-area-inset-left);margin-left:env(safe-area-inset-left);-webkit-transition:bottom .25s;transition:bottom .25s}.page_video .video__advance__tips.video__end__advance__tips{background-color:#1f1f1f}.page_video .weui-toast.weui-toast_text{max-width:initial;width:initial;height:auto;padding:12px 0;border-radius:8px;position:absolute;top:50%}.page_video .video__advance__tips__head{-webkit-flex-shrink:0;flex-shrink:0;color:rgba(255,255,255,0.8);margin-right:8px;font-size:12px;font-weight:normal}.page_video .video__advance__cover{position:relative;display:block;width:40px;height:40px;border-radius:4px;background-size:cover;background-color:black;background-position:center}.page_video .video__advance__cover:before{content:' ';display:block;width:24px;height:24px;border-radius:50%;border:1px solid rgba(255,255,255,0.9);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.page_video .video__advance__cover:after{content:' ';display:block;width:18px;height:18px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M9.524 4.938l10.092 6.21a1 1 0 010 1.704l-10.092 6.21A1 1 0 018 18.21V5.79a1 1 0 011.524-.852z' fill-opacity='.9' fill='%23FFFFFF' fill-rule='evenodd'\/%3E%3C\/svg%3E\") no-repeat center \/ contain}.page_video .video__advance__tips__main{overflow:hidden}.page_video .video__advance__tips__head{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page_video .video__advance__tips__account{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:rgba(255,255,255,0.9)}.page_video .video__advance__tips__account__info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.page_video .video__advance__tips__head-item{position:relative;padding-right:8px;margin-right:8px}.page_video .video__advance__tips__head-item:after{position:absolute;top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);content:' ';display:block;height:7px;width:1px;background-color:rgba(255,255,255,0.3)}.page_video .video__advance__tips__head-item:last-child{padding-right:0;margin-right:0}.page_video .video__advance__tips__head-item:last-child:after{display:none}.page_video .video__advance__tips__count-time{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;position:relative;color:rgba(255,255,255,0.5)}.page_video .video__advance__tips__avatar{display:block;width:16px;height:16px;border-radius:50%;margin-right:6px}.page_video .video__advance__tips__info{position:relative;top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page_video .video__advance__tips__foot{height:100%;position:absolute;padding:0 17px;text-align:center;width:initial;top:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0;color:rgba(255,255,255,0.5)}.page_video .video__advance__tips__foot:active{opacity:.7}.page_video .video_opr .opr_inner{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page_video .video_opr .opr_inner .opr_inner_fr{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.page_video .video_opr .opr_inner .opr_inner_fr .screenSize_control{padding:2px 0 2px 19px}.page_video .video_opr .opr_inner_fl{-webkit-flex-shrink:0;flex-shrink:0}.page_video .video_opr .opr_inner_fl .switch:active{opacity:.5}.page_video .video_opr .opr_inner_fl .played_time{min-width:35px}.page_video .change_tip_container{width:100%;height:100%;background-color:transparent;position:absolute;left:0;top:0;z-index:1000;overflow:hidden}.page_video .video__top-tips__mask{line-height:56px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.45)),to(rgba(0,0,0,0)));background-image:linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0));position:absolute;top:constant(safe-area-inset-top);top:env(safe-area-inset-top);left:0;right:0;z-index:10001;-webkit-transform:translateY(-56px);transform:translateY(-56px)}.page_video .video__top-tips__showIn{-webkit-animation:topTipsShowIn .5s ease-in 1 forwards;animation:topTipsShowIn .5s ease-in 1 forwards}.page_video .video__top-tips__showOut{-webkit-animation:topTipsShowOut .5s ease-in 1 forwards;animation:topTipsShowOut .5s ease-in 1 forwards}.page_video .video__top-tips{color:#FFF;font-size:15px;font-weight:500;text-align:center;z-index:10002}.page_video .video__top-tips__link{color:#44b549}.page_video .video__top-tips__close{position:absolute;top:50%;margin-top:-12px;left:16px;width:24px;height:24px;background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg' xmlns:xlink='http:\/\/www.w3.org\/1999\/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M8 6.943L1.807.75.75 1.807 6.943 8 .75 14.193l1.057 1.057L8 9.057l6.193 6.193 1.057-1.057L9.057 8l6.193-6.193L14.193.75z'\/%3E%3C\/defs%3E%3Cuse fill='%23FFFFFF' fill-opacity='.9' xlink:href='%23a' transform='translate(4 4)' fill-rule='evenodd'\/%3E%3C\/svg%3E\") no-repeat center \/ contain}.page_video .video_full-screen__head{position:absolute;z-index:9;top:0;left:0;right:0;padding:16px 8px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0))}.page_video .video_full-screen__head .video_full-screen__head__inner{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.page_video .video_full-screen__head .video_full-screen__head__item{display:inline-block}.page_video .video_full-screen__head .video_full-screen__article-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:26px;font-size:17px;color:#fff;font-weight:450}.page_video .video_full-screen__head .video_full-screen__article-title .video_full-screen__article-title-text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:75vw}.page_video .video_full-screen__head .video_full-screen__article-arrow{width:26px;height:26px;background-position:center;background-size:contain;background-image:url('data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFFElEQVR4Xu2dzYvOURTHz1lZ2JDtFGt2ZEFZ+COMkr9gVljJipUlO3+B1ExEiIiIiIiIiLxMiGi8hIhcXXOnefE889xzfk+de+\/5Puv7cu7387nnmXleZpjwcJ0Auz49Dk8QwLkEEAACOE\/A+fHRASCA8wScHx8dAAI4T8D58dEBIIDzBJwfHx0AAjhPwPnx0QEggPMEnB8fHQACOE\/A+fHRASCA8wScHx8dAAI4T8D58dEBIIDzBJwfHx0AAjhPwPnx0QEggPMEOhw\/hDASpzPzqw7LmE5FB1DEH0LYTkRjRLQhTb9OROPMfFCxnOkUCCCMP4QwTkRb+kw7wszbhEuaDocAgvgHwJ9ZaRMzXxUsazoUAmTGnwk\/rnaYmeNTRBUPCJCBSQA\/rjbFzCsyli1iCAQYgEEIP652iZk3F0E3owgIsEhICvhxtX3MvDcj+yKGQIA+GJTwHxDRRmb+UgTdjCIgQI+QlPADEW1l5omM3IsZAgEWoFDC\/0NEo8x8tBiymYVAgDlBKeH\/Tjf\/WGbmRQ2DAAmHEv6vdPOPF0VVUAwEICIl\/J\/p5p8Q5F3cUPcCKOH\/SDf\/ZHFEhQW5FkAJ\/3u6+aeEWRc53K0ASvjfEvzTRdJUFOVSACX8r6ntn1HkXOwUdwIo4cdX9uKLPGeLJakszJUASvif080\/p8y46GluBFDC\/5hu\/vmiKXYozoUASvhT6eZf6JBv8VObF0AJ\/0O6+ReLJ9ixwKYFUMJ\/n27+pY7ZVjG9WQGU8N+lm3+5CnpDKLJJAZTw36abf2UIuVazRHMCKOG\/STe\/mo9zD8uwpgRQwn+dbv61YYVa0zrNCKCEH7\/TFz\/JE7\/a5fLRhABK+JMJ\/g2X5NOhqxdACf9lgn\/TM\/x49qoFUMJ\/nuDf8g6\/agGU8J8l+LcBfzqBKjuAEv7TBP8O4M8mUJ0ASvhPEvy7gD8\/gaoECCHsIKIDQoiPE\/x7wnkuhtcmQPzBbZ2AzKME\/75gjquhtQkQ36NfnknoYYIfv7CJR58EahMgfjBzaSbNCD6+yhdFwKMRAeILN+sFNCHBgLBq6wC7iWi\/QIA4FBIsElhtAiwhoviu3VpIIEyghaeAeIYQwur4RxmJaI0wAnSCHoFV1QFm6ocEQvVbeQqYew5IMBwJquwA6ATDgR9XqVoA\/EzQXYTqBYAE3SRoQgBIoJegGQEggU6CpgSABHIJmhMAEsgkaFIASJAvQbMCQII8CZoWABIMlqB5ASDB4hK4EAAS9JfAjQCQoLcErgSABP9L4E4ASDBfApcCQIJZCdwKAAmmJXAtACSAAP9ugeePl7nvADPPhl4lgABzfij2KAEEWPCrsTcJIECPF8g6SFDVP47GbwGLvE\/SQQL88+jBb0LWMUIpQVVdAE8BA1zUSMDM1eRaTaGWPUMowQQzj1rWK9kbAmSmJZBgjJkPZS5rPgwCCBBkSDDJzCsFS5oPhQBCBCGEESLaRUQ7F0zdw8zSv14i3H34wyGAMtMQwjIiWpWmv2DmT8qlTKdBANP47TeHAPYMTCuAAKbx228OAewZmFYAAUzjt98cAtgzMK0AApjGb785BLBnYFoBBDCN335zCGDPwLQCCGAav\/3mEMCegWkFEMA0fvvNIYA9A9MKIIBp\/PabQwB7BqYVQADT+O03hwD2DEwrgACm8dtvDgHsGZhWAAFM47ffHALYMzCtAAKYxm+\/OQSwZ2BaAQQwjd9+cwhgz8C0gr+I27aQq9eQ+AAAAABJRU5ErkJggg==')}.page_video .video_full-screen__head .video_full-screen__article-arrow.exit{width:36px;height:36px}.page_video .video_full-screen__head .video_menu_more{position:relative;display:block;width:50px;height:50px}.page_video .video_full-screen__head .video_menu_more:active{opacity:.6}.page_video .video_full-screen__head .video_menu_more:after{content:' ';display:block;width:24px;height:24px;position:absolute;right:0;background:url(\"data:image\/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cpath d='M6.75 12a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM12 10.25a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm7 0a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5z' fill-rule='evenodd' fill='%23FFFFFF'\/%3E%3C\/svg%3E\") no-repeat}.page_video .video_full-screen__head .video_full-screen__account-info{margin-top:6px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:24px;font-size:15px;color:#fff}.page_video .video_full-screen__head .video_full-screen__account-avatar{display:block;width:24px;height:24px;border-radius:50%;margin:0 8px 0 6px}.page_video .video_full-screen__footer{position:absolute;right:0;bottom:0;z-index:8}.page_video .video_full-screen__footer__sub-setting{-webkit-transition:right .5s,bottom .5s;transition:right .5s,bottom .5s}.page_video .video_full-screen__sub-setting{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:15px;font-weight:450}.page_video .video_full-screen__sub-setting .video_full-screen__sub-setting__item{line-height:30px;color:#fff}.page_video .video_full-screen__sub-setting .video_full-screen__sub-setting__item.current{color:var(--weui-BRAND)}.page_video .video_full-screen__sub-setting .video_full-screen__sub-setting__item:active{opacity:.5}.page_video .video_full-screen__sub-setting .video_full-screen__sub-setting__item__desc{font-size:12px;color:rgba(255,255,255,0.5)}.page_video .play_setting_mode{display:inline-block;line-height:24px;margin-left:24px;font-size:15px;font-weight:450;word-break:keep-all}.page_video .play_setting_mode:active{opacity:.5}.page_video .play_setting_mode .play_setting{color:#fff}.page_video .play_setting_mode.play_setting_mode__rate{width:40px;margin-left:8px;word-break:keep-all;text-align:center}.page_video .play_bullet-screen_mode{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;pointer-events:auto}.page_video .play_bullet-screen_mode:active{opacity:.5}.page_video .play_bullet-screen_mode:before{content:' ';display:block;height:19px;width:1px;background-color:rgba(255,255,255,0.3);position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:0}.page_video .play_bullet-screen{display:block;width:22px;height:22px;margin:0 8px;background:url(\"data:image\/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cg transform='translate(1 3)' fill='none' fill-rule='evenodd'%3E%3Cpath d='M14.031 7.402h-2.04v1.77l1.56-.001a5.45 5.45 0 0 0-2.194 7.801 2.109 2.109 0 0 1-.368.028c-.322 0-.558-.076-.707-.228-.15-.151-.224-.426-.224-.823v-1.804h-3.92l-.102-.005a.56.56 0 0 1-.246-.082.513.513 0 0 1-.197-.298 2.276 2.276 0 0 1-.063-.613c.012-.362.108-.598.287-.71.179-.11.459-.166.84-.166h3.401v-1.208h-2.22l-.197-.004c-.572-.026-.969-.164-1.19-.416-.244-.28-.366-.754-.366-1.42V3.988l.005-.214c.028-.554.166-.955.416-1.204.28-.28.73-.432 1.35-.456l-.055-.087-.06-.088a2.966 2.966 0 0 1-.117-.175c-.203-.315-.292-.59-.268-.823.024-.234.19-.461.5-.683.275-.199.556-.28.842-.245.286.035.537.245.752.63.13.234.253.47.367.71.113.239.23.493.349.761h1.682l.149-.24c.095-.157.183-.307.263-.451.119-.216.244-.453.375-.71.191-.373.409-.598.654-.674.244-.076.51-.038.796.114.298.163.486.356.564.578.077.222.015.513-.188.875a4.978 4.978 0 0 0-.134.246c-.042.081-.093.169-.153.262h.072l.198.005c.572.025.969.167 1.19.424.244.286.366.768.366 1.445V8.61h-.037c-.68 0-1.331.125-1.932.353v-1.56zM3.67.852l.184.006c.475.032.814.19 1.015.476.227.321.34.797.34 1.427v2.102l-.004.214c-.025.55-.145.938-.363 1.16-.244.252-.635.377-1.172.377H2.416l-.1.003c-.122.008-.202.03-.24.067-.048.047-.077.152-.09.316l-.143 1.278-.009.097c-.006.119.015.194.063.227.06.041.185.061.376.061h1.414l.207.005c.199.01.374.035.527.074a.967.967 0 0 1 .492.29c.125.14.217.338.277.595.06.257.096.59.108.998.035 1.133-.006 2.084-.126 2.855-.12.77-.298 1.395-.537 1.874-.238.478-.528.823-.868 1.033-.34.21-.713.315-1.118.315-.454 0-.99-.169-1.611-.508-.418-.21-.704-.446-.859-.709-.155-.263-.125-.598.09-1.007a.876.876 0 0 1 .617-.438c.28-.058.564.024.85.245.215.176.406.292.573.35a.79.79 0 0 0 .438.044.593.593 0 0 0 .322-.201 1.35 1.35 0 0 0 .224-.385c.084-.257.152-.593.206-1.007.054-.415.08-1.007.08-1.778 0-.304-.023-.493-.071-.57-.048-.075-.155-.113-.322-.113H1.575l-.216-.003a5.161 5.161 0 0 1-.554-.04.847.847 0 0 1-.51-.237c-.125-.129-.208-.315-.25-.56-.042-.246-.033-.59.027-1.034l.232-2.347.03-.203c.038-.26.08-.482.122-.664.054-.227.132-.408.233-.543a.787.787 0 0 1 .42-.28c.18-.052.424-.079.734-.079h1.271l.08-.004c.1-.01.172-.04.215-.092.054-.064.08-.213.08-.447v-.77l-.002-.112a.797.797 0 0 0-.06-.309c-.041-.081-.146-.122-.313-.122H.913L.78 2.774c-.254-.018-.443-.093-.565-.223C.072 2.4 0 2.148 0 1.798c0-.362.072-.61.215-.744C.358.919.59.852.913.852h2.756zm6.39 6.55H8.035V8.98l.002.056c.005.05.016.084.034.101.023.024.083.035.179.035h1.807V7.402zm3.793-3.432h-1.86v1.786h2.04V4.127l-.008-.056c-.019-.068-.076-.101-.172-.101zm-3.794 0H8.251l-.065.003c-.058.005-.097.019-.114.04-.024.03-.036.085-.036.167v1.576h2.022V3.97z' fill='%23FFF' fill-rule='nonzero'\/%3E%3Crect fill='%23FFF' x='12' y='10' width='11' height='8' rx='4'\/%3E%3Cpath d='M19 16.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z' fill-opacity='.3' fill='%23000'\/%3E%3C\/g%3E%3C\/svg%3E\") no-repeat center \/ contain}.page_video .play_bullet-screen.active{background:url(\"data:image\/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http:\/\/www.w3.org\/2000\/svg'%3E%3Cg transform='translate(1 3)' fill='none' fill-rule='evenodd'%3E%3Cpath d='M14.031 7.402h-2.04v1.77l1.56-.001a5.45 5.45 0 0 0-2.194 7.801 2.109 2.109 0 0 1-.368.028c-.322 0-.558-.076-.707-.228-.15-.151-.224-.426-.224-.823v-1.804h-3.92l-.102-.005a.56.56 0 0 1-.246-.082.513.513 0 0 1-.197-.298 2.276 2.276 0 0 1-.063-.613c.012-.362.108-.598.287-.71.179-.11.459-.166.84-.166h3.401v-1.208h-2.22l-.197-.004c-.572-.026-.969-.164-1.19-.416-.244-.28-.366-.754-.366-1.42V3.988l.005-.214c.028-.554.166-.955.416-1.204.28-.28.73-.432 1.35-.456l-.055-.087-.06-.088a2.966 2.966 0 0 1-.117-.175c-.203-.315-.292-.59-.268-.823.024-.234.19-.461.5-.683.275-.199.556-.28.842-.245.286.035.537.245.752.63.13.234.253.47.367.71.113.239.23.493.349.761h1.682l.149-.24c.095-.157.183-.307.263-.451.119-.216.244-.453.375-.71.191-.373.409-.598.654-.674.244-.076.51-.038.796.114.298.163.486.356.564.578.077.222.015.513-.188.875a4.978 4.978 0 0 0-.134.246c-.042.081-.093.169-.153.262h.072l.198.005c.572.025.969.167 1.19.424.244.286.366.768.366 1.445V8.61h-.037c-.68 0-1.331.125-1.932.353v-1.56zM3.67.852l.184.006c.475.032.814.19 1.015.476.227.321.34.797.34 1.427v2.102l-.004.214c-.025.55-.145.938-.363 1.16-.244.252-.635.377-1.172.377H2.416l-.1.003c-.122.008-.202.03-.24.067-.048.047-.077.152-.09.316l-.143 1.278-.009.097c-.006.119.015.194.063.227.06.041.185.061.376.061h1.414l.207.005c.199.01.374.035.527.074a.967.967 0 0 1 .492.29c.125.14.217.338.277.595.06.257.096.59.108.998.035 1.133-.006 2.084-.126 2.855-.12.77-.298 1.395-.537 1.874-.238.478-.528.823-.868 1.033-.34.21-.713.315-1.118.315-.454 0-.99-.169-1.611-.508-.418-.21-.704-.446-.859-.709-.155-.263-.125-.598.09-1.007a.876.876 0 0 1 .617-.438c.28-.058.564.024.85.245.215.176.406.292.573.35a.79.79 0 0 0 .438.044.593.593 0 0 0 .322-.201 1.35 1.35 0 0 0 .224-.385c.084-.257.152-.593.206-1.007.054-.415.08-1.007.08-1.778 0-.304-.023-.493-.071-.57-.048-.075-.155-.113-.322-.113H1.575l-.216-.003a5.161 5.161 0 0 1-.554-.04.847.847 0 0 1-.51-.237c-.125-.129-.208-.315-.25-.56-.042-.246-.033-.59.027-1.034l.232-2.347.03-.203c.038-.26.08-.482.122-.664.054-.227.132-.408.233-.543a.787.787 0 0 1 .42-.28c.18-.052.424-.079.734-.079h1.271l.08-.004c.1-.01.172-.04.215-.092.054-.064.08-.213.08-.447v-.77l-.002-.112a.797.797 0 0 0-.06-.309c-.041-.081-.146-.122-.313-.122H.913L.78 2.774c-.254-.018-.443-.093-.565-.223C.072 2.4 0 2.148 0 1.798c0-.362.072-.61.215-.744C.358.919.59.852.913.852h2.756zm6.39 6.55H8.035V8.98l.002.056c.005.05.016.084.034.101.023.024.083.035.179.035h1.807V7.402zm3.793-3.432h-1.86v1.786h2.04V4.127l-.008-.056c-.019-.068-.076-.101-.172-.101zm-3.794 0H8.251l-.065.003c-.058.005-.097.019-.114.04-.024.03-.036.085-.036.167v1.576h2.022V3.97z' fill='%23FFF' fill-rule='nonzero'\/%3E%3Crect fill='%23FFF' x='12' y='10' width='11' height='8' rx='4'\/%3E%3Cpath d='M16 16.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z' fill='%2307C160'\/%3E%3C\/g%3E%3C\/svg%3E\") no-repeat center \/ contain}.page_video .play_bullet-input__container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;max-width:200px;margin-left:20px;border:1px solid rgba(255,255,255,0.2);background-color:rgba(0,0,0,0.3);border-radius:16px}.page_video .play_bullet-input__container.close{border-color:transparent;background:0;pointer-events:none}.page_video .play_bullet-input__container.close .play_bullet-input__wrapper{color:transparent}.page_video .play_bullet-input__container.close .play_bullet-screen_mode:before{opacity:0}.page_video .play_bullet-input__container.active{pointer-events:auto;border:1px solid rgba(255,255,255,0.2);background-color:rgba(0,0,0,0.3);-webkit-transition:all .1s;transition:all .1s}.page_video .play_bullet-input__container.active .play_bullet-input__wrapper{color:rgba(255,255,255,0.8);-webkit-transition:all .1s;transition:all .1s}.page_video .play_bullet-input__container.active .play_bullet-screen_mode:before{opacity:1;-webkit-transition:all .1s;transition:all .1s}.page_video .play_bullet-input__container.unactive{pointer-events:none;border-color:transparent;background-color:transparent;-webkit-transition:all .2s;transition:all .2s}.page_video .play_bullet-input__container.unactive .play_bullet-input__wrapper{color:transparent;-webkit-transition:all .2s;transition:all .2s}.page_video .play_bullet-input__container.unactive .play_bullet-screen_mode:before{opacity:0;-webkit-transition:all .2s;transition:all .2s}.page_video .play_bullet-input_mode{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.page_video .play_bullet-input__wrapper{line-height:32px;padding:0 12px;text-align:left;font-size:12px;color:rgba(255,255,255,0.8);opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page_video .play_bullet-input__wrapper:active{opacity:.3}.page_video .play_bullet-input{width:60px;word-break:keep-all}.page_video .ratio_primary .video_opr .opr_inner{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.page_video .ratio_primary .total_time{display:inline-block;margin-left:5px;font-size:12px;vertical-align:middle;font-weight:700}.page_video .ratio_primary.page_video .video_opr .opr_inner_fl .played_time{min-width:initial}.page_video .wrp_loading .mid_opr .processor_bar_inner{background-color:var(--weui-BRAND)}.page_video .wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot .speed_dot{box-shadow:0 0 4px rgba(88,88,88,0.2)}.page_video .video_popup{position:absolute}.page_video .setting__item__fadeout{-webkit-animation:itemFadeOut .5s 1 forwards;animation:itemFadeOut .5s 1 forwards}.page_video .video_poster__info__play{position:absolute;left:0;top:0;bottom:0;width:135px;padding:20px 51px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;z-index:2999}.page_video .video_poster__info__play i{text-indent:-999em;display:inline-block;vertical-align:middle;width:32px;height:32px;background-size:cover;background-image:url(\"data:image\/svg+xml;charset=utf8,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23FFF' d='M10.032 6.584l13.456 8.28a1.333 1.333 0 0 1 0 2.272l-13.456 8.28A1.333 1.333 0 0 1 8 24.281V7.719a1.333 1.333 0 0 1 2.032-1.135z'\/%3E%3C\/svg%3E\")}.page_video .video_poster__info__play i.refresh{position:relative;top:-3px;width:24px;height:24px;background-size:contain;background-repeat:no-repeat;background-position:center center;background-image:url(https:\/\/res.wx.qq.com\/t\/fed_upload\/6c785d08-30d7-465d-8d3e-e2b7f4271671\/icon_reload.png)}.page_video .video_poster__info{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 12px;font-size:14px;color:#000;background-color:#FFF;position:absolute;top:0;height:inherit;left:135px;width:calc(100vw - 135px);box-sizing:border-box;z-index:2999}.page_video .video_poster__info .video_poster__info__desc{margin-top:2px;color:rgba(0,0,0,0.6);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page_video .video_poster__info__mask{-webkit-transition:width .2s ease-out;transition:width .2s ease-out;background-color:black;position:absolute;z-index:-1;top:0;left:0;bottom:0}@-webkit-keyframes itemFadeOut{0%{opacity:1}100%{opacity:0}}@keyframes itemFadeOut{0%{opacity:1}100%{opacity:0}}.page_video_control .video__advance__tips{bottom:56px}.page_video_without-control .video__advance__tips{bottom:12px}.page_video.page_video_skin-vertical .video__top-tips,.page_video.page_video_skin-horizontal .video__top-tips{font-size:17px}.page_video.page_video_skin-vertical.page_video_control .video__advance__tips,.page_video.page_video_skin-horizontal.page_video_control .video__advance__tips{margin-bottom:12px;bottom:72px;bottom:calc(72px + constant(safe-area-inset-bottom));bottom:calc(72px + env(safe-area-inset-bottom))}.page_video.page_video_skin-vertical .video_opr .opr_inner,.page_video.page_video_skin-horizontal .video_opr .opr_inner,.page_video.page_video_skin-vertical .wrp_progress,.page_video.page_video_skin-horizontal .wrp_progress{padding:0 12px}.page_video.page_video_skin-vertical .video_opr,.page_video.page_video_skin-horizontal .video_opr{padding-top:36px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page_video.page_video_skin-vertical .wrp_play_bar,.page_video.page_video_skin-horizontal .wrp_play_bar{bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom);margin-bottom:66px}.page_video.page_video_skin-vertical wx-open-video,.page_video.page_video_skin-horizontal wx-open-video{position:absolute!important}.page_video.page_video_skin-vertical.page_video_without-control .video__advance__tips,.page_video.page_video_skin-horizontal.page_video_without-control .video__advance__tips{bottom:24px}.page_video_skin-vertical .video_full-screen__head{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.page_video_skin-vertical .video_opr{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page_video_skin-vertical .video_full-screen__footer__sub-setting{left:0;padding-bottom:96px;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),color-stop(rgba(0,0,0,0.35)),color-stop(rgba(0,0,0,0.58)),to(rgba(0,0,0,0.8)));background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.35),rgba(0,0,0,0.58),rgba(0,0,0,0.8))}.page_video_skin-vertical .video_full-screen__footer__sub-setting .video_full-screen__sub-setting__item{padding:12px;margin:48px 0}.page_video_skin-vertical .video_full-screen__footer__sub-setting.hide{bottom:-400px}.page_video_skin-vertical .video_full-screen__sub-setting__speed .video_full-screen__sub-setting__item{padding-left:16px;padding-right:16px}.page_video_skin-vertical .video_full-screen__sub-setting__ratio .video_full-screen__sub-setting__item{padding-left:24px;padding-right:24px}.page_video_skin-vertical .wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot .speed_dot{border:0}.page_video_skin-vertical .play_setting_mode{margin-left:14px}.page_video_skin-vertical .video_popup{padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left);padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-right);padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page_video_skin-vertical .video_ad_advance__tips{top:constant(safe-area-inset-top);top:env(safe-area-inset-top)}.page_video_skin-horizontal .video_full-screen__head,.page_video_skin-horizontal .video_opr,.page_video_skin-horizontal .wrp_play_bar{padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left);padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.page_video_skin-horizontal .video_full-screen__head .video_menu_more:after{right:9px}.page_video_skin-horizontal .video__advance__tips{max-width:390px;left:10px}.page_video_skin-horizontal .video__advance__tips.video__end__advance__tips{margin-left:44px;margin-left:calc(44px + constant(safe-area-inset-left));margin-left:calc(44px + env(safe-area-inset-top))}.page_video_skin-horizontal .video_opr{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page_video_skin-horizontal .video_full-screen__footer__sub-setting{padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right);top:0;background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,0)),color-stop(rgba(0,0,0,0.4)),color-stop(rgba(0,0,0,0.6)),to(rgba(0,0,0,0.8)));background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8))}.page_video_skin-horizontal .video_full-screen__footer__sub-setting .video_full-screen__sub-setting{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.page_video_skin-horizontal .video_full-screen__footer__sub-setting .video_full-screen__sub-setting__item{padding:0 24px;margin:0 22px 40px 92px}.page_video_skin-horizontal .video_full-screen__footer__sub-setting .video_full-screen__sub-setting__item:last-child{margin-bottom:0}.page_video_skin-horizontal .video_full-screen__footer__sub-setting.hide{right:-400px}.page_video_skin-horizontal .video_full-screen__sub-setting__speed .video_full-screen__sub-setting__item{margin-bottom:28px}.page_video_skin-horizontal .wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot .speed_dot{border:0}.page_video_skin-horizontal .video_popup{padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left);padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-right);padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page_video_skin-horizontal .wrp_progress{padding:0 16px}.not_fullscreen{box-shadow:0 0 16px rgba(0,0,0,0.02)}@-webkit-keyframes topTipsShowIn{0%{-webkit-transform:translateY(-56px);transform:translateY(-56px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes topTipsShowIn{0%{-webkit-transform:translateY(-56px);transform:translateY(-56px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes topTipsShowOut{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-56px);transform:translateY(-56px)}}@keyframes topTipsShowOut{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-56px);transform:translateY(-56px)}}@-webkit-keyframes videoLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes videoLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@-webkit-keyframes midAdShowIn{0%{-webkit-transform:translateX(100vw);transform:translateX(100vw);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes midAdShowIn{0%{-webkit-transform:translateX(100vw);transform:translateX(100vw);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@media(max-width:368px){.page_video .video_opr .opr_inner .opr_inner_fr .screenSize_control{padding-left:8px}.page_video .video_opr .opr_inner_fl .switch{margin-right:8px}}@media(max-width:352px){.page_video .video_opr .opr_inner{padding:0 8px}.page_video .video_opr .opr_inner .opr_inner_fr .screenSize_control{padding-left:4px}.page_video .video_opr .opr_inner_fl .switch{margin-right:0}}@media(max-width:332px){.page_video .video_opr .opr_inner{padding:0 4px}.page_video .play_setting_mode.play_setting_mode__rate{margin-left:4px}.page_video .play_bullet-input__wrapper{padding:0 8px}}@media(max-width:374px){.page_video.page_video_skin-vertical .video_opr .opr_inner{padding:0 16px 0 8px}.page_video .play_bullet-input{width:auto}.page_video .play_bullet-input__container{margin-left:12px}.page_video .video_opr .opr_inner_fl .switch{margin-right:4px}.page_video_skin-vertical .play_setting_mode{margin-left:8px}}@media(prefers-color-scheme:dark){.not_fullscreen{box-shadow:0 0 16px rgba(0,0,0,0.02)}.page_video .video_poster__info{color:rgba(255,255,255,0.8);background-color:#191919}.page_video .video_poster__info .video_poster__info__desc{color:rgba(255,255,255,0.6)}}";
});;define('page/pages/video_mod/video_danmu.css', [], function(require, exports, module) {
	return ".page_video .txp_barrage_external{z-index:7!important;opacity:.8!important;bottom:auto}.page_video .txp_barrage_external .danmu_self{padding:1.5px 4px;border:1px solid #07c160;border-radius:6px}.page_video .txp_barrage_external .danmu_self img.icon_emotion_single{margin-top:-0.2em}.page_video .txp_barrage_external img.icon_emotion_single{-webkit-transform:scale(0.85);transform:scale(0.85);font-size:inherit}.page_video .danmu_full_vertical .txp_barrage_external{margin-top:constant(safe-area-inset-top);margin-top:env(safe-area-inset-top)}.page_video .txp_mod_barrage{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;position:relative;height:50px;background:#26262b;user-select:none}.page_video .txp_mod_barrage .txp_none{display:none!important}.page_video .txp_mod_barrage .txp_svg_icon{display:inline-block;vertical-align:top}.page_video .txp_mod_barrage .txp_btn_drag{display:none}.page_video .txp_mod_barrage .txp_barrage_form{display:block;position:relative;width:auto;height:32px;margin-top:8px;margin-right:118px;margin-left:70px;border-radius:17px;background-color:#111226;-webkit-transition:width .15s ease,margin-left .15s ease;transition:width .15s ease,margin-left .15s ease}.page_video .txp_mod_barrage .txp_barrage_form .txp_inp_text{zoom:1;box-sizing:border-box;display:block;z-index:1;position:relative;width:100%;padding:6px 10px;overflow:hidden;border:0;border-radius:17px 0 0 17px;background:0;background-size:0;color:#ccc;font-size:14px;line-height:20px;text-indent:0}.page_video .txp_mod_barrage .txp_barrage_form .txp_inp_text:focus{outline:0;color:#fff}.page_video .txp_mod_barrage .stars_pendant_info,.page_video .txp_mod_barrage .txp_barrage_input_box{display:inline-block;position:relative;margin-right:-10px;vertical-align:middle;white-space:nowrap}.page_video .txp_mod_barrage .txp_barrage_input_box{width:-ms-calc(-30%);width:calc(-30%)}.page_video .txp_mod_barrage .stars_pendant_avatar,.page_video .txp_mod_barrage .stars_pendant_name{display:inline-block;position:relative;max-width:84px;margin:0 3px;overflow:hidden;color:#666;font-size:12px;line-height:18px;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.page_video .txp_mod_barrage .stars_pendant_name{box-sizing:border-box;padding-right:10px}.page_video .txp_mod_barrage .stars_pendant_name:after{position:absolute;right:0;color:#666;font-size:12px;line-height:18px;content:\"\uff1a\"}.page_video .txp_mod_barrage .stars_pendant_avatar{width:24px;height:24px;margin-left:10px;border-radius:50%;background:no-repeat .5% auto}.page_video .txp_mod_barrage .txp_barrage_form_nohotbtn{margin-right:10px}.page_video .txp_mod_barrage .txp_barrage_inp{position:absolute;right:115px;left:0;height:32px;overflow:hidden;border-radius:16px 0 0 16px;text-align:left}.page_video .txp_mod_barrage .txp_barrage_inp_whole{right:66px;padding-right:0}.page_video .txp_mod_barrage .txp_barrage_star{position:absolute;right:118px;height:32px}.page_video .txp_mod_barrage .txp_btn_submit{position:absolute;top:0;right:0;width:66px;height:32px;border:0;border-radius:0 16px 16px 0;outline:0;background-color:#292a3c;color:#eee;font-size:14px;line-height:32px;cursor:pointer}.page_video .txp_mod_barrage .txp_btn_submit:hover{background:#ff6428;background:-webkit-gradient(linear,left top,right top,color-stop(0,#ff850b),to(#ff5945));background:linear-gradient(90deg,#ff850b 0,#ff5945);color:#fff}.page_video .txp_mod_barrage .txp_btn_fonts{right:80px}.page_video .txp_mod_barrage .txp_hl{color:#ff6428}.page_video .txp_mod_barrage .txp_barrage_avatar_list{display:none}.page_video .txp_mod_barrage .txp_popup_barrage_toast{-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);display:inline-block;z-index:6;position:absolute;top:-35px;right:0;left:0;max-width:200px;margin:auto;padding:7px 20px;transform:translateY(-50%);border-radius:50px;background:#111;background:rgba(17,17,17,0.9);color:#999;font-size:12px;line-height:20px;text-align:center}.page_video .txp_mod_barrage_live .txp_barrage_form{margin-right:10px;margin-left:70px}.page_video .txp_mod_barrage .txp_svg_icon path,.page_video .txp_mod_barrage .txp_svg_icon use{fill:currentColor}.page_video .txp_barrage_switch{display:inline-block;position:absolute;top:13px;left:10px;width:50px;height:24px;border-radius:12px;background-color:#111226;font-size:12px;line-height:24px;text-align:left;vertical-align:top;cursor:pointer}.page_video .txp_barrage_switch .txp_btn_text{display:inline-block;margin-left:24px;color:#fff}.page_video .txp_barrage_switch .txp_btn_toggle{box-sizing:content-box;display:inline-block;position:absolute;top:9px;left:12px;width:6px;height:6px;border-radius:6px;background-color:#67676b;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.page_video .txp_barrage_switch.txp_open .txp_btn_text{color:#ff6428}.page_video .txp_barrage_switch.txp_open .txp_btn_toggle{top:6px;left:9px;border:3px solid #4b2c24;background-color:#ff6428}.page_video .txp_mod_barrage .txp_btn_type{color:#666;text-decoration:none;cursor:pointer}.page_video .txp_barrage_form .txp_btn_type{display:none;position:absolute;top:0;left:-28px}.page_video .txp_mod_barrage .txp_btn_face:hover,.page_video .txp_mod_barrage .txp_btn_fonts:hover,.page_video .txp_mod_barrage .txp_btn_type:hover{color:#ff5c38}.page_video .txp_mod_barrage .txp_icon{display:inline-block;width:20px;height:20px;margin-top:6px;vertical-align:top}.page_video .txp_mod_barrage .txp_btn_submit.txp_disabled,.page_video .txp_mod_barrage .txp_btn_submit.txp_disabled:hover{right:-1px;background:#414141;cursor:default;opacity:.6}.page_video .txp_barrage_login,.page_video .txp_barrage_tips{position:absolute;top:0;right:0;left:0;padding-left:10px;overflow:hidden;border-radius:16px 0 0 16px;color:#666;font-size:12px;line-height:32px;text-align:left;cursor:pointer}.page_video .txp_barrage_login .txp_barrage_pendant,.page_video .txp_barrage_tips .txp_barrage_pendant{-o-object-fit:contain;display:inline-block;width:24px;height:24px;margin:0 4px;object-fit:contain;vertical-align:middle}.page_video .txp_barrage_login .txp_barrage_desc,.page_video .txp_barrage_tips .txp_barrage_desc{display:inline-block;vertical-align:middle}.page_video .txp_barrage_login .txp_link,.page_video .txp_barrage_tips .txp_link{padding-right:2px;color:#ff6428;vertical-align:middle}.page_video .txp_barrage_login .txp_link:hover,.page_video .txp_barrage_tips .txp_link:hover{color:#ff5945}.page_video .txp_barrage_login{z-index:1}.page_video .x_mod_bubble{right:0;bottom:35px}.page_video .txp_mod_barrage{zoom:1;font-size:0;text-align:right}.page_video .txp_mod_barrage:after,.page_video .txp_mod_barrage:before{display:table;content:\"\"}.page_video .txp_mod_barrage:after{clear:both}.page_video .txp_html_fullscreen #mod_barrage_container,.page_video .txp_html_fullscreen .mod_action,.page_video .txp_html_fullscreen .mod_barrage_container{position:static}.page_video .txp_html_fullscreen .txp_mod_barrage,.page_video .txp_html_fullscreen .txp_mod_barrage *{visibility:visible}.page_video .container_short .txp_mod_barrage,.page_video .player_container .txp_mod_barrage{position:absolute;top:0;right:0;background:0}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage,.page_video .txp_html_fullscreen .txp_mod_barrage{-webkit-transform:translate(-50%);-ms-transform:translate(-50%);z-index:0;position:fixed;top:inherit;bottom:67px;left:50%;width:80%!important;max-width:1280px;height:56px;transform:translate(-50%);border-radius:28px;background-color:#000;background-color:rgba(0,0,0,0.7);opacity:.7}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage:hover,.page_video .txp_html_fullscreen .txp_mod_barrage:hover{opacity:1}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_switch,.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_btn_barrage_list,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_switch,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_btn_barrage_list{display:none}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_inp,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_inp{height:40px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form{position:absolute!important;right:84px!important;left:8px!important;width:auto!important;height:40px;margin-left:32px;border-radius:20px;background-color:#1e1e20;background-color:rgba(30,30,32,0.7);font-size:16px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_barrage_login,.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_barrage_tips,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_barrage_login,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_barrage_tips{line-height:40px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_barrage_inp,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_barrage_inp{height:40px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_inp_text,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_inp_text{height:40px;line-height:40px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_fonts,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_fonts{right:103px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_face,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_face{right:125px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_icon,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_icon{margin-top:10px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_type,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_type{top:2px;right:-32px;left:auto}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_submit,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_submit{width:96px;height:40px;border-radius:0 20px 20px 0;font-size:18px;line-height:40px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_popup_barrage{right:80px;bottom:50px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_text,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_text{right:104px;bottom:50px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_type,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_type{right:-54px;left:auto}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_type .txp_popup_barrage_triangle,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_type .txp_popup_barrage_triangle{left:auto}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_barrage_star,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_barrage_star{right:138px;height:40px}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_drag,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_drag{display:block;position:absolute;top:2px;right:-60px;color:#666;text-decoration:none;cursor:pointer}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_drag:hover,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_drag:hover{color:#ff6428}.page_video .txp_html_fullscreen .player_container .txp_mod_barrage .txp_barrage_form .txp_btn_drag .txp_icon,.page_video .txp_html_fullscreen .txp_mod_barrage .txp_barrage_form .txp_btn_drag .txp_icon{width:20px;height:20px}.page_video .txp_html_fullscreen .txp_mod_barrage.txp_focus .txp_barrage_form{width:auto!important;margin-left:0}.page_video .txp_html_fullscreen.txp_html_barrage_on .mod_action{visibility:hidden}.page_video .txp_mod_barrage .txp_btn_face,.page_video .txp_mod_barrage .txp_btn_fonts{z-index:2;position:absolute;top:0;color:#d8d8d8;text-decoration:none;cursor:pointer}.page_video .txp_mod_barrage .txp_btn_face{right:98px}.page_video .txp_mod_barrage .txp_btn_fonts{right:73px}.page_video .container_short .txp_mod_barrage .txp_barrage_input_box,.page_video .screen_xs .txp_mod_barrage .txp_barrage_input_box,.page_video .screen_xxs .txp_mod_barrage .txp_barrage_input_box{width:-ms-calc(30%);width:calc(30%)}.page_video .container_short .txp_mod_barrage .stars_pendant_avatar,.page_video .container_short .txp_mod_barrage .stars_pendant_name,.page_video .screen_xs .txp_mod_barrage .stars_pendant_avatar,.page_video .screen_xs .txp_mod_barrage .stars_pendant_name,.page_video .screen_xxs .txp_mod_barrage .stars_pendant_avatar,.page_video .screen_xxs .txp_mod_barrage .stars_pendant_name{max-width:34px}.page_video li{list-style:none}.page_video .none{display:none!important}.page_video .txp_popup_barrage{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;z-index:3000;position:absolute;right:41px;bottom:32px;border-radius:5px 5px 0 0;color:#999;font-family:PingFangSC-Regular,Tahoma,Microsoft Yahei,Arial,Hiragino Sans GB;font-size:14px;text-align:left;user-select:none}.page_video .txp_popup_barrage .txp_icon{width:24px;height:24px;margin:0}.page_video .txp_popup_barrage .txp_btn{z-index:2;position:absolute;top:50%;width:24px;height:24px;margin-top:-12px;cursor:pointer}.page_video .txp_popup_barrage .txp_btn svg{fill:#9b9d9d;pointer-events:none}.page_video .txp_popup_barrage .txp_btn:hover .txp_icon{fill:#ff6e0b}.page_video .txp_popup_barrage .txp_btn_prev{left:0}.page_video .txp_popup_barrage .txp_btn_next{right:0}.page_video .txp_popup_barrage[data-status=\"0\"] .txp_popup_barrage_inner{height:100px}.page_video .txp_popup_barrage[data-status=\"0\"] .txp_popup_barrage_inner_scroll{left:0}.page_video .txp_popup_barrage[data-status=\"1\"] .txp_popup_barrage_inner{height:200px}.page_video .txp_popup_barrage[data-status=\"1\"] .txp_popup_barrage_inner_scroll{left:-410px}.page_video .txp_popup_barrage.hide .txp_btn{display:none}.page_video .txp_popup_barrage.hide .txp_popup_barrage_inner{height:0}.page_video .txp_popup_barrage_emoji{width:410px;height:200px}.page_video .txp_popup_barrage_type{bottom:40px;left:-54px}.page_video .txp_popup_barrage .txp_iframe_mask{z-index:1;position:absolute;width:100%;height:100%;border-radius:5px;filter:alpha(opacity=0);opacity:0}.page_video .txp_popup_barrage_inner{z-index:2;position:relative;width:410px;margin:0 24px;overflow:hidden;background-color:#28292d;background-color:rgba(40,41,45,0.93);box-shadow:0 1px 6px 0 rgba(0,0,0,0.5);font-size:0;-webkit-transition:height .4s ease-in;transition:height .4s ease-in}.page_video .txp_popup_barrage_inner_scroll{position:relative;width:820px;-webkit-transition:left .5s;transition:left .5s}.page_video .txp_popup_barrage_inner_scroll .txp_popup_barrage_emoji,.page_video .txp_popup_barrage_inner_scroll .txp_popup_barrage_text{display:inline-block;vertical-align:top}.page_video .txp_popup_barrage .txp_popup_barrage_hd{position:relative;padding:8px 20px;overflow:hidden;text-align:right}.page_video .txp_popup_barrage_bd{height:164px}.page_video .txp_popup_barrage .txp_popup_barrage_title{color:#999;font-size:14px}.page_video .txp_popup_barrage .txp_popup_barrage_title .txp_list_item{margin-right:30px;float:left;list-style:none;cursor:pointer}.page_video .txp_popup_barrage .txp_popup_barrage_title .txp_current{color:#ff6428}.page_video .txp_popup_barrage .txp_link{color:#ff6428;font-size:14px;text-decoration:none;cursor:pointer}.page_video .txp_popup_barrage .txp_link:hover{color:#ff2424}.page_video .txp_popup_barrage .x_mod_bd{position:relative}.page_video .txp_popup_barrage .txp_bubble_list:after,.page_video .txp_popup_barrage .txp_bubble_list:before{display:table;content:\"\"}.page_video .txp_popup_barrage .txp_bubble_list:after{clear:both}.page_video .txp_popup_barrage .txp_scroll_wrap{*zoom:1;-webkit-transform:translateZ(0);-webkit-overflow-scrolling:touch;scrollbar-base-color:#222225;scrollbar-face-color:#4c4c4c;scrollbar-arrow-color:#000;scrollbar-3dlight-color:#4c4c4c;scrollbar-highlight-color:#4c4c4c;scrollbar-shadow-color:#4c4c4c;scrollbar-darkshadow-color:#4c4c4c;scrollbar-track-color:#333338;position:relative;_height:150px;max-height:135px;margin-right:9px;margin-left:2px;padding-top:16px;overflow-x:hidden;overflow-y:auto;transform:translateZ(0);font-size:0;list-style:none}.page_video .txp_popup_barrage .txp_scroll_wrap .scroll_wrap_inner{position:relative;height:100%;overflow:auto}.page_video .txp_popup_barrage .txp_scroll_wrap .mod_playlist{margin-bottom:10px}.page_video .txp_popup_barrage .txp_scroll_wrap .mb0{margin-bottom:0}.page_video .txp_popup_barrage .txp_scroll_wrap::-webkit-scrollbar{width:5px;background:#333338}.page_video .txp_popup_barrage .txp_scroll_wrap::-webkit-scrollbar-track-piece{background:0}.page_video .txp_popup_barrage .txp_scroll_wrap::-webkit-scrollbar-button{display:none}.page_video .txp_popup_barrage .txp_scroll_wrap::-webkit-scrollbar-thumb{border-radius:5px;background:#555}.page_video .txp_bubble_list .txp_list_item{display:inline-block;position:relative;width:161px;height:34px;margin:0 0 10px 16px;border:2px solid transparent;border-radius:7px;cursor:pointer}.page_video .txp_bubble_list .txp_list_item img{display:inline-block;position:absolute;bottom:0;left:0;width:161px}.page_video .txp_bubble_list .txp_current img{border-radius:6px}.page_video .txp_bubble_list .txp_list_item .txp_barrage_icon_slted{display:none;z-index:1;position:absolute;top:2px;left:2px;width:8px;height:6px;overflow:hidden;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-70px -38px;background-size:112px auto}.page_video .txp_bubble_list .txp_current{border:2px solid #ff6428}.page_video .txp_bubble_list .txp_current .txp_barrage_icon_slted{display:inline-block}.page_video .txp_popup_barrage .txp_emoticon_list{padding-top:12px;padding-left:20px;color:#eaeaea;line-height:30px}.page_video .txp_popup_barrage .txp_emoticon_list .txp_list_item{font-size:14px;cursor:pointer}.page_video .txp_popup_barrage .txp_emoticon_list .txp_current,.page_video .txp_popup_barrage .txp_emoticon_list .txp_list_item:hover{color:#ff6428}.page_video .txp_popup_barrage_text{width:410px;height:100px}.page_video .txp_barrage_settings{box-sizing:content-box;position:relative;margin:0 20px;padding:16px 0 16px 70px;overflow:hidden;border-bottom:1px solid #2c2c31;font-size:14px}.page_video .txp_barrage_settings_title{position:absolute;top:16px;left:0}.page_video .txp_popup_barrage_text .txp_barrage_settings{display:inline-block;width:168px;margin:16px 0 0;padding:0 0 0 28px;border-bottom:0;vertical-align:top}.page_video .txp_popup_barrage_text .txp_barrage_settings:first-child{border-right:1px solid #393a3d}.page_video .txp_popup_barrage_text .txp_barrage_settings_title{position:static;line-height:1}.page_video .txp_barrage_settings_color{margin-right:-12px;overflow:hidden;font-size:0}.page_video .txp_barrage_settings_color .txp_list_item{display:inline-block;margin-top:8px;margin-right:12px;cursor:pointer}.page_video .txp_barrage_settings_color .txp_list_item span{box-sizing:content-box;display:block;width:16px;height:16px;margin:2px;border-radius:16px;opacity:.8}.page_video .txp_barrage_settings_color .txp_list_item:hover span{opacity:1}.page_video .txp_barrage_settings_color .txp_current span{margin:0;border:2px solid #ff5c38;border:2px solid rgba(255,92,56,0.6);opacity:1}.page_video .txp_barrage_mode_title{font-size:12px}.page_video .txp_barrage_mode{margin-top:8px;margin-right:-11px;overflow:hidden;font-size:0}.page_video .txp_barrage_mode .txp_list_item{display:inline-block;margin-right:11px;text-align:center;cursor:pointer}.page_video .txp_barrage_mode .txp_barrage_mode_box{position:relative;width:47px;height:32px;margin:0 0 2px;overflow:hidden}.page_video .txp_barrage_mode .txp_barrage_mode_box:after{display:block;position:absolute;top:0;left:0;width:38px;height:24px;border:2px solid #515155;border-radius:4px;content:\"\"}.page_video .txp_barrage_mode .txp_barrage_mode_box .txp_barrage_mode_line{display:block;width:18px;height:2px;margin-top:4px;margin-left:12px;background-color:#515155}.page_video .txp_barrage_mode .txp_barrage_mode_box .txp_barrage_mode_line1{margin-top:6px}.page_video .txp_barrage_mode .txp_barrage_mode_scroll .txp_barrage_mode_line1{margin-left:12px}.page_video .txp_barrage_mode .txp_barrage_mode_scroll .txp_barrage_mode_line2{margin-left:6px}.page_video .txp_barrage_mode .txp_barrage_mode_scroll .txp_barrage_mode_line3{width:8px;margin-left:18px}.page_video .txp_barrage_mode .txp_barrage_mode_top .txp_barrage_mode_line2{width:10px;margin-left:16px}.page_video .txp_barrage_mode .txp_barrage_mode_bottom .txp_barrage_mode_line1{width:10px;margin-top:14px;margin-left:16px}.page_video .txp_barrage_mode .txp_current .txp_barrage_mode_box:after{width:42px;height:28px;border:0;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-70px 0;background-size:112px auto}.page_video .txp_barrage_mode .txp_current .txp_barrage_mode_box:before{display:block;position:absolute;right:0;bottom:0;width:14px;height:14px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-25px -54px;background-repeat:no-repeat;background-size:112px auto;content:\"\"}.page_video .txp_barrage_mode .txp_current .txp_barrage_mode_line{background-color:#999}.page_video .txp_barrage_mode .txp_current .txp_barrage_mode_title{color:#999}.page_video .txp_barrage_mode .txp_barrage_mode_box:hover:after{border-color:#999}.page_video .txp_barrage_mode .txp_barrage_mode_box:hover .txp_barrage_mode_line{background-color:#999}.page_video .txp_barrage_mode_block{margin-top:0;margin-right:-26px}.page_video .txp_barrage_mode_block .txp_list_item{margin-right:26px}.page_video .txp_barrage_mode_block .txp_barrage_mode_box{width:62px;height:46px}.page_video .txp_barrage_mode_block .txp_barrage_mode_box:after{width:56px;height:40px}.page_video .txp_barrage_mode_block .txp_barrage_mode_box .txp_barrage_mode_line{width:28px;margin-top:8px}.page_video .txp_barrage_mode_block .txp_barrage_mode_scroll .txp_barrage_mode_line1{margin-left:18px}.page_video .txp_barrage_mode_block .txp_barrage_mode_scroll .txp_barrage_mode_line2{margin-left:9px}.page_video .txp_barrage_mode_block .txp_barrage_mode_scroll .txp_barrage_mode_line3{margin-left:16px}.page_video .txp_barrage_mode_block .txp_barrage_mode_top .txp_barrage_mode_line2{width:18px}.page_video .txp_barrage_mode_block .txp_barrage_mode_bottom .txp_barrage_mode_line1{width:18px;margin-top:23px}.page_video .txp_barrage_mode_block .txp_current .txp_barrage_mode_box:after{width:60px;height:44px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:0 0;background-size:112px auto}.page_video .txp_barrage_mode_block .txp_current .txp_barrage_mode_box:before{width:14px;height:14px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-49px -54px;background-size:112px auto}.page_video .txp_barrage_settings_checkbox{padding-left:0;border-bottom:0}.page_video .txp_barrage_settings_checkbox .txp_checkbox{display:inline-block;position:relative;top:2px;width:12px;height:12px;margin-right:6px;border:1px solid #999;border-radius:7px;cursor:pointer}.page_video .txp_barrage_settings_checkbox .txp_checkbox:hover{border-color:#ff5c38}.page_video .txp_barrage_settings_checkbox .txp_checkbox_selected{width:14px;height:14px;border:0;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-25px -54px;background-size:112px auto}.page_video .txp_popup_barrage_type .txp_barrage_settings{width:225px;line-height:20px}.page_video .txp_popup_barrage_type .txp_popup_barrage_inner{width:auto;height:auto;margin:0}.page_video .txp_barrage_progress{height:20px;font-size:0}.page_video .txp_barrage_progress .txp_barrage_progress_value{display:inline-block;position:absolute;top:16px;right:0;font-size:12px}.page_video .txp_popup_barrage_text .txp_barrage_settings_checkbox{padding-left:0}.page_video .txp_barrage_progress_bar{position:relative;width:180px;height:4px;margin:8px 0;border-radius:2px;background-color:#222225;cursor:pointer}.page_video .txp_barrage_progress_bar:before{display:block;position:absolute;top:-13px;left:0;width:100%;height:30px;content:\"\"}.page_video .txp_barrage_progress_bar .txp_barrage_progress_play{position:absolute;top:0;left:0;height:4px;border-radius:2px;background-color:#ff5945;cursor:pointer}.page_video .txp_barrage_progress_bar .txp_barrage_progress_handler{position:absolute;top:-4px;width:12px;height:12px;margin-left:-6px;border-radius:6px;background-color:#ff5945;cursor:pointer}.page_video .txp_barrage_progress_bar .txp_barrage_progress_handler:hover:after{display:block;position:absolute;top:-4px;left:-4px;width:20px;height:20px;border-radius:10px;background-color:#ff5945;content:\"\";opacity:.2}.page_video .txp_popup_barrage_type{width:335px;height:auto}.page_video .txp_popup_barrage_type .txp_barrage_progress_bar,.page_video .txp_popup_barrage_type .txp_barrage_settings_title{display:inline-block}.page_video .txp_popup_barrage_type .txp_list_item{margin-right:18px}.page_video .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_v2 .txp_popup_barrage_emoji,.page_video .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_v2 .txp_popup_barrage_inner,.page_video .player_container .txp_mod_barrage .txp_barrage_form .txp_popup_barrage_v2 .txp_popup_barrage_text{width:364px}.page_video .txp_html_fullscreen .txp_popup_barrage_v2 .svg_icon_close{margin-top:-10px}.page_video .txp_popup_barrage_v2 .txp_barrage_box{display:block;position:relative;width:100%;overflow:hidden}.page_video .txp_popup_barrage_v2 .txp_barrage_mode{position:relative;left:0;margin-top:0;overflow:visible;white-space:nowrap;-webkit-transition:all .2s ease;transition:all .2s ease}.page_video .txp_popup_barrage_v2 .txp_list_item{margin-right:10px}.page_video .txp_popup_barrage_v2 .txp_popup_barrage_inner{width:364px}.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box:before{background-image:none}.page_video .txp_popup_barrage_v2 .txp_barrage_settings{width:auto;padding:18px 0 0;overflow:visible;border:0}.page_video .txp_popup_barrage_v2 .txp_barrage_settings_checkbox{height:35px;margin:15px 10px 0;padding:0;border-top:1px solid rgba(255,255,255,0.08);color:#999;font-size:12px;line-height:35px;text-align:right}.page_video .txp_popup_barrage_v2 .txp_barrage_settings_checkbox .setting_icon,.page_video .txp_popup_barrage_v2 .txp_barrage_settings_checkbox .txp_setting_icon{display:inline-block;width:16px;height:16px;margin:-1px 5px 0;vertical-align:middle}.page_video .txp_popup_barrage_v2 .txp_barrage_settings_checkbox .setting_icon_pic,.page_video .txp_popup_barrage_v2 .txp_barrage_settings_checkbox .txp_setting_icon_pic{display:block;width:100%;height:100%}.page_video .txp_popup_barrage_v2 .txp_barrage_settings_title{display:block;position:static;margin-bottom:10px;color:#eee;font-size:12px;font-weight:700;line-height:1}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box{display:inline-block;width:22px;height:16px;overflow:visible;vertical-align:middle}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box .txp_barrage_mode_line,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box .txp_barrage_mode_line{z-index:2;position:relative;width:12px;height:1px;margin-top:2px;background:#999}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box .txp_barrage_mode_line1,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box .txp_barrage_mode_line1{margin-top:3px;margin-left:7px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box .txp_barrage_mode_line2,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box .txp_barrage_mode_line2{margin-left:4px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box .txp_barrage_mode_line3,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box .txp_barrage_mode_line3{width:8px;margin-left:9px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box:after,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box:after{box-sizing:border-box;width:22px;height:16px;border:1px solid #999;border-radius:2px;background-image:none}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box:hover .txp_barrage_mode_line,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box:hover .txp_barrage_mode_line{background-color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_box:hover:after,.page_video .txp_popup_barrage_v2 .txp_current .txp_barrage_mode_box:hover:after{border-color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_top .txp_barrage_mode_line1{width:14px;margin-left:4px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_top .txp_barrage_mode_line2{width:8px;margin-left:7px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_bottom .txp_barrage_mode_line1{width:8px;margin-top:9px;margin-left:7px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_bottom .txp_barrage_mode_line2{width:14px;margin-left:4px}.page_video .txp_popup_barrage_v2 .txp_barrage_mode_title{display:inline-block;margin-left:7px;font-size:12px;line-height:16px;vertical-align:middle}.page_video .txp_popup_barrage_v2 .txp_barrage_btn{box-sizing:border-box;position:relative;width:64px;height:30px;border:2px solid transparent;border-radius:30px;outline:0;background:0;color:#fff;font-size:12px;cursor:pointer}.page_video .txp_popup_barrage_v2 .txp_barrage_btn.current,.page_video .txp_popup_barrage_v2 .txp_barrage_btn:hover{border:2px solid #ff5c38!important}.page_video .txp_popup_barrage_v2 .txp_barrage_btn.current:after{display:block;position:absolute;right:-2px;bottom:-2px;width:10px;height:10px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-73px -54px;background-repeat:no-repeat;background-size:112px auto;content:\"\"}.page_video .txp_popup_barrage_v2 .txp_barrage_btn .star_bg{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:no-repeat 50% \/ auto 100%}.page_video .txp_popup_barrage_v2 .txp_barrage_color .txp_list_item{margin-right:22px}.page_video .txp_popup_barrage_v2 .txp_barrage_color .current .txp_barrage_btn{border:2px solid #ff5c38!important}.page_video .txp_popup_barrage_v2 .txp_barrage_color .current .txp_barrage_btn .txp_barrage_btn_mark{top:-2px;right:-2px}.page_video .txp_popup_barrage_v2 .txp_barrage_color .current .txp_barrage_btn:after{display:block;position:absolute;right:-2px;bottom:-2px;width:10px;height:10px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-73px -54px;background-repeat:no-repeat;background-size:112px auto;content:\"\"}.page_video .txp_popup_barrage_v2 .txp_barrage_color .text,.page_video .txp_popup_barrage_v2 .txp_barrage_color .txp_text{display:block;position:relative;max-width:48px;margin:0 auto;overflow:hidden;text-align:center}.page_video .txp_popup_barrage_v2 .txp_barrage_genre{padding-bottom:5px}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .current .txp_barrage_mode_box .hover_mark,.page_video .txp_popup_barrage_v2 .txp_barrage_genre .current .txp_barrage_mode_box .txp_hover_mark{display:inline-block;z-index:1;position:absolute;right:-1px;bottom:-1px;width:10px;height:10px}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .current .txp_barrage_mode_box .hover_mark:before,.page_video .txp_popup_barrage_v2 .txp_barrage_genre .current .txp_barrage_mode_box .txp_hover_mark:before{display:block;position:absolute;right:-3px;bottom:-3px;width:10px;height:10px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-73px -54px;background-repeat:no-repeat;background-size:112px auto;content:\"\"}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .current .txp_barrage_mode_box .txp_barrage_mode_line{background:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .current .txp_barrage_mode_box:after{-webkit-clip-path:polygon(0 0,28px 0,0 25px);border-color:#ff5c38;clip-path:polygon(0 0,28px 0,0 25px)}.page_video .txp_popup_barrage_v2 .txp_barrage_color_vip .txp_barrage_btn{border:0}.page_video .txp_popup_barrage_v2 .txp_barrage_color_vip .txp_barrage_btn .txp_barrage_btn_mark{display:block;position:absolute;top:0;right:0;width:20px;height:10px;background:no-repeat 50% \/ cover;content:\"\"}.page_video .txp_popup_barrage_v2 .txp_barrage_color_vip .txp_barrage_btn:hover{border:2px solid #ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_color_vip .txp_barrage_btn:hover .txp_barrage_btn_mark{top:-2px;right:-2px}.page_video .txp_popup_barrage_v2 .stars_avatar,.page_video .txp_popup_barrage_v2 .txp_stars_avatar{box-sizing:border-box;display:block;position:relative;width:60px;height:60px;margin:0 auto;border:1px solid #fff;border:1px solid rgba(255,255,255,0.24);border-radius:4px}.page_video .txp_popup_barrage_v2 .stars_avatar .txp_barrage_btn_mark,.page_video .txp_popup_barrage_v2 .txp_stars_avatar .txp_barrage_btn_mark{display:block;position:absolute;right:-1px;bottom:-1px;width:20px;height:10px;background:no-repeat 50% \/ cover}.page_video .txp_popup_barrage_v2 .stars_avatar_pic,.page_video .txp_popup_barrage_v2 .txp_stars_avatar_pic{z-index:-1;position:absolute;top:0;right:-1px;bottom:0;left:-1px;width:60px;height:auto;margin:auto}.page_video .txp_popup_barrage_v2 .stars_name,.page_video .txp_popup_barrage_v2 .txp_stars_name{display:block;width:60px;margin-top:4px;overflow:hidden;color:#ccc;font-size:12px;line-height:1;text-align:center;white-space:nowrap}.page_video .txp_popup_barrage_v2 .txp_barrage_stars{margin-right:0;line-height:1}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .txp_list_item{margin-right:28px}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .stars_avatar,.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .txp_stars_avatar{border-width:2px;border-color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .stars_avatar:after,.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .txp_stars_avatar:after{display:block;position:absolute;top:-2px;right:-2px;width:15px;height:15px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:0 -54px;background-repeat:no-repeat;background-size:112px auto;content:\"\"}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .stars_avatar_pic,.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .txp_stars_avatar_pic{right:-2px;left:-2px}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .txp_barrage_btn_mark{right:-2px;bottom:-2px}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .stars_name,.page_video .txp_popup_barrage_v2 .txp_barrage_stars .current .txp_stars_name{color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .txp_list_item:hover .stars_avatar,.page_video .txp_popup_barrage_v2 .txp_barrage_stars .txp_list_item:hover .txp_stars_avatar{border-width:2px;border-color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .txp_list_item:hover .stars_avatar_pic,.page_video .txp_popup_barrage_v2 .txp_barrage_stars .txp_list_item:hover .txp_stars_avatar_pic{right:-2px;left:-2px}.page_video .txp_popup_barrage_v2 .txp_barrage_stars .txp_list_item:hover .txp_barrage_btn_mark{right:-2px;bottom:-2px}.page_video .txp_popup_barrage_v2 .txp_barrage_btn_next,.page_video .txp_popup_barrage_v2 .txp_barrage_btn_prev{box-sizing:content-box;position:absolute;top:0;bottom:0;width:20px;height:20px;margin:auto;cursor:pointer}.page_video .txp_popup_barrage_v2 .txp_barrage_btn_next:hover,.page_video .txp_popup_barrage_v2 .txp_barrage_btn_prev:hover{color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_btn_prev{left:-30px}.page_video .txp_popup_barrage_v2 .txp_barrage_btn_next{right:-30px}.page_video .txp_popup_barrage_v2 .txp_barrage_btn_stars{padding:51px 10px 27px}.page_video .txp_popup_barrage_v2 .txp_barrage_btn_color{padding:37px 10px 0}.page_video .txp_popup_barrage_v2 .txp_icon{fill:currentColor;display:block;width:100%;height:100%}.page_video .txp_popup_barrage_v2 .txp_barrage_title{color:#eee;font-size:14px;font-weight:700;text-align:center}.page_video .txp_popup_barrage_v2 .txp_barrage_title .text,.page_video .txp_popup_barrage_v2 .txp_barrage_title .txp_text{display:inline-block;position:relative}.page_video .txp_popup_barrage_v2 .txp_barrage_title .text:after,.page_video .txp_popup_barrage_v2 .txp_barrage_title .text:before,.page_video .txp_popup_barrage_v2 .txp_barrage_title .txp_text:after,.page_video .txp_popup_barrage_v2 .txp_barrage_title .txp_text:before{display:block;position:absolute;top:0;bottom:0;width:10px;height:1px;margin:auto;background:#999;content:\"\"}.page_video .txp_popup_barrage_v2 .txp_barrage_title .text:before,.page_video .txp_popup_barrage_v2 .txp_barrage_title .txp_text:before{left:-20px}.page_video .txp_popup_barrage_v2 .txp_barrage_title .text:after,.page_video .txp_popup_barrage_v2 .txp_barrage_title .txp_text:after{right:-20px}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item{width:64px}.page_video .txp_popup_barrage_v2.txp_popup_barrage_alert .txp_popup_barrage_inner{background:#000;background:rgba(0,0,0,0.76)}.page_video .txp_popup_barrage_v2 .txp_popup_get_vip{padding:30px;color:#d6ab56;font-size:12px;text-align:center}.page_video .txp_popup_barrage_v2 .txp_barrage_vip_desc{margin-bottom:19px}.page_video .txp_popup_barrage_v2 .txp_barrage_vip_title{margin-bottom:12px;font-size:14px;font-weight:700}.page_video .txp_popup_barrage_v2 .txp_barrage_vip_btn{width:116px;height:32px;border:0;border-radius:20px;outline:0;background:#d5ab56;color:#fff;font-size:12px;font-weight:700;cursor:pointer}.page_video .txp_popup_barrage_v2 .txp_barrage_vip_btn:active{background:#d5ab56;color:#fff;opacity:.6}.page_video .txp_popup_barrage_v2 .txp_barrage_vip_btn:hover{background:#e8bd69}.page_video .txp_popup_barrage_v2 .txp_popup_up_vip{margin:0;padding:0}.page_video .txp_popup_barrage_v2 .txp_up_vip_pic{width:100%;height:auto}.page_video .txp_popup_barrage_v2 .txp_barrage_close{box-sizing:border-box;box-sizing:content-box;display:block;position:absolute;top:0;right:0;width:10px;height:10px;padding:13px;color:#ededed}.page_video .txp_popup_barrage_v2 .txp_barrage_close:hover{color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_popup_emoji{max-height:92px;margin:20px 0;padding:0 16px 0 21px;overflow:auto;font-size:0}.page_video .txp_popup_barrage_v2 .txp_emoji_tips{box-sizing:border-box;display:block;height:92px;margin:20px 15px;padding:0;color:#999;line-height:92px;text-align:center}.page_video .txp_popup_barrage_v2 .svg_icon_emoji_tips{display:inline-block;width:18px;height:18px;vertical-align:middle}.page_video .txp_popup_barrage_v2 .txp_popup_emoji_text{display:inline-block;vertical-align:middle}.page_video .txp_popup_barrage_v2 .txp_popup_emoji_icon{display:inline-block;position:relative;width:36px;height:36px;margin:5px;cursor:pointer}.page_video .txp_popup_barrage_v2 .txp_popup_emoji_icon .txp_barrage_btn_mark{position:absolute;right:0;bottom:0;width:20px;height:10px;background:no-repeat 50% \/ cover}.page_video .txp_popup_barrage_v2 .txp_popup_emoji_pic{-o-object-fit:contain;display:inline-block;width:100%;height:100%;object-fit:contain}.page_video .txp_popup_barrage_v2 .txp_popup_toast{-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);display:inline-block;position:absolute;top:50%;right:0;left:0;max-width:200px;margin:auto;padding:7px 20px;transform:translateY(-50%);border-radius:50px;background:#111;background:rgba(17,17,17,0.9);font-size:12px;line-height:20px;text-align:center}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item.current .txp_barrage_mode_box:after,.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item:hover .txp_barrage_mode_box:after{border-color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item.current .txp_barrage_mode_line,.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item:hover .txp_barrage_mode_line{background-color:#ff5c38}.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item.current .txp_barrage_mode_title,.page_video .txp_popup_barrage_v2 .txp_barrage_genre .txp_list_item:hover .txp_barrage_mode_title{color:#ff5c38}.page_video .lte_ie8 svg{display:none}.page_video .lte_ie8 .txp_popup_barrage .txp_btn_next,.page_video .lte_ie8 .txp_popup_barrage .txp_btn_prev{width:12px;height:18px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:0 -79px;background-size:112px auto}.page_video .lte_ie8 .txp_popup_barrage .txp_btn_next{width:12px;height:18px;background-image:url(\/tencentvideo\/txp\/style\/img\/sprite\/txp_barrage_set.png?v=c37949b74c);background-position:-22px -79px;background-size:112px auto}@-webkit-keyframes txp_barrage{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}90%{opacity:1}to{-webkit-transform:translateX(-2800px);transform:translateX(-2800px);opacity:0}}@keyframes txp_barrage{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}90%{opacity:1}to{-webkit-transform:translateX(-2800px);transform:translateX(-2800px);opacity:0}}@-webkit-keyframes txp_barrage_plusone{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}to{-webkit-transform:translateY(-40px);transform:translateY(-40px);opacity:0}}@keyframes txp_barrage_plusone{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}to{-webkit-transform:translateY(-40px);transform:translateY(-40px);opacity:0}}@-webkit-keyframes txp_barrage_star{0%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}50%{-webkit-transform:rotate(180deg) scale(1.1);transform:rotate(180deg) scale(1.1)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@keyframes txp_barrage_star{0%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}50%{-webkit-transform:rotate(180deg) scale(1.1);transform:rotate(180deg) scale(1.1)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@-webkit-keyframes txp_barrage_item_star_show{0%{opacity:0}to{opacity:1}}@keyframes txp_barrage_item_star_show{0%{opacity:0}to{opacity:1}}@-webkit-keyframes txp_barrage_item_star{0%{top:200px}to{top:15px}}@keyframes txp_barrage_item_star{0%{top:200px}to{top:15px}}@keyframes txp_barrage_item_show{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}@-webkit-keyframes txp_barrage_item_show{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}.page_video .txp_barrage{-webkit-transform:translateZ(0);z-index:3;position:absolute;top:0;left:0;width:100%;height:100%;transform:translateZ(0);text-overflow:ellipsis;pointer-events:none}.page_video .txp_barrage_item{stroke-width:1px;stroke:rgba(0,0,0,0.5);position:absolute;top:0;left:0;padding:4px;background-color:#fff;background-color:rgba(255,255,255,0.01);font-size:18px;line-height:24px;text-shadow:0 0 1px rgba(0,0,0,0.3),0 1px 0 rgba(0,0,0,0.3),0 0 1px rgba(0,0,0,0.3),0 0 1px rgba(0,0,0,0.3);white-space:nowrap;cursor:pointer;pointer-events:auto;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page_video .txp_barrage_item .txp_text{display:inline-block;max-width:680px;overflow:hidden;text-overflow:ellipsis;vertical-align:top}.page_video .txp_barrage_item .txp_img{display:inline-block;width:auto;height:28px;vertical-align:top}.page_video .txp_barrage_item .txp_barrage_content{display:inline-block;vertical-align:top}.page_video .txp_barrage_item_bottom,.page_video .txp_barrage_item_top{-webkit-transform:translate(-50%);-ms-transform:translate(-50%);stroke-width:1px;stroke:rgba(0,0,0,0.5);-webkit-backface-visibility:hidden;position:absolute;top:20px;left:50%;width:auto;padding:4px;transform:translate(-50%);backface-visibility:hidden;font-size:18px;line-height:24px;text-align:center;text-shadow:0 0 1px #000;white-space:nowrap;cursor:pointer;opacity:0;pointer-events:auto}.page_video .txp_barrage_item_bottom.txp_animate,.page_video .txp_barrage_item_top.txp_animate{-webkit-animation:txp_barrage_item_show 5s ease both;animation:txp_barrage_item_show 5s ease both}.page_video .txp_barrage_item_top{top:20px}.page_video .txp_barrage_item_bottom{top:auto;bottom:24%}.page_video .txp_barrage_item_bottom2{margin-bottom:40px}.page_video .txp_svg_icon_like{fill:currentColor;width:20px;height:20px}.page_video .txp_icon_like{width:20px;height:20px}.page_video .txp_barrage_hide_bottom .txp_barrage_item_bottom,.page_video .txp_barrage_hide_roll .txp_barrage_item,.page_video .txp_barrage_hide_top .txp_barrage_item_star,.page_video .txp_barrage_hide_top .txp_barrage_item_top{display:none}.page_video .txp_barrage_hide_bottom .txp_barrage_item_bottom.txp_barrage_item_mine,.page_video .txp_barrage_hide_roll .txp_barrage_item.txp_barrage_item_mine,.page_video .txp_barrage_hide_top .txp_barrage_item_star.txp_barrage_item_mine,.page_video .txp_barrage_hide_top .txp_barrage_item_top.txp_barrage_item_mine{display:block}.page_video .txp_barrage_pause{-webkit-animation-play-state:paused;animation-play-state:paused}.page_video .txp_barrage_plusone{-webkit-animation:txp_barrage_plusone 1s linear both;position:absolute;top:-20px;right:10px;color:#ff4200;font-size:20px;animation:txp_barrage_plusone 1s linear both}.page_video .txp_barrage_emotion{display:inline-block;width:24px;height:24px;margin-right:2px;vertical-align:-3px}.page_video .txp_barrage_report{z-index:999;position:absolute;top:0;left:0;width:80px;height:30px;border-radius:15px;background-color:#373742;background-color:rgba(55,55,66,0.95);color:#fff;font-size:14px;line-height:30px;text-align:center;cursor:pointer}.page_video .txp_barrage_report:hover{color:#ff920b}.page_video .txp_barrage_report:hover .txp_svg_icon_report{fill:#ff920b}.page_video .txp_svg_icon_report{fill:#fff;width:20px;height:20px;margin-top:7px;vertical-align:top;pointer-events:none}.page_video .txp_barrage_item_bubble{padding:4px 50px 4px 4px;border:1px solid #fff;border:1px solid rgba(255,255,255,0.5);border-radius:20px;background-position:100%;background-repeat:no-repeat;background-size:contain!important}.page_video .txp_player_live .txp_barrage_item_bubble{padding-right:10px}.page_video .txp_barrage_vipicon{position:absolute;top:19px;left:15px;height:13px}.page_video .txp_barrage_item_mine{z-index:1;width:auto;padding:4px 6px 4px 4px;border:1px solid #fff;border-radius:20px}.page_video .txp_barrage_avatar,.page_video .txp_barrage_emoji{display:inline-block;position:relative;width:24px;height:24px;margin-right:6px;border-radius:100%;background:no-repeat .5% auto;vertical-align:top;pointer-events:auto}.page_video .txp_barrage_emoji{margin:0 1px}.page_video .txp_barrage_badge,.page_video .txp_barrage_text{display:inline-block;vertical-align:top}.page_video .txp_barrage_badge{margin-left:4px}.page_video .txp_barrage_badge .txp_icon_text{display:inline-block;margin-left:3px}.page_video .txp_barrage_lv1{color:#ff4200}.page_video .txp_barrage_lv2{color:#ff7800}.page_video .txp_barrage_lv3{color:#edc88d}.page_video .txp_barrage_lv4{color:#fff}.page_video .txp_barrage_lv5{color:#37a5e4}.page_video .txp_barrage_item_mine.txp_barrage_item_bubble{padding:4px 50px 4px 4px}.page_video .txp_barrage_item_star{-webkit-transform:translate(-50%);-ms-transform:translate(-50%);-webkit-animation:txp_barrage_item_star_show .2s ease 1 both,txp_barrage_item_star .4s linear .1s 1 both;z-index:2;position:absolute;left:50%;width:auto;transform:translate(-50%);animation:txp_barrage_item_star_show .2s ease 1 both,txp_barrage_item_star .4s linear .1s 1 both;cursor:pointer;pointer-events:auto}.page_video .txp_barrage_item_star .txp_barrage_avatar{z-index:3;position:absolute;top:-1px;left:0;width:36px;height:36px}.page_video .txp_barrage_item_star .txp_barrage_star{-webkit-transform-origin:30px 32px;-ms-transform-origin:30px 32px;-webkit-animation:txp_barrage_star .6s linear .4s 1 both;z-index:2;position:absolute;top:-16px;left:-12px;width:60px;height:60px;transform-origin:30px 32px;background:url(\/tencentvideo\/txp\/style\/img\/avatar_star.svg) 0 0 no-repeat;-webkit-animation:txp_barrage_star .6s linear .4s 1 both;animation:txp_barrage_star .6s linear .4s 1 both}.page_video .txp_barrage_item_star .txp_barrage_content{-webkit-backface-visibility:hidden;display:inline-block;z-index:1;position:relative;padding:4px 15px 4px 50px;border:1px solid #ffcc02;border-radius:20px;backface-visibility:hidden;background-color:#000;background-color:rgba(0,0,0,0.6);font-size:22px;font-size:20px;line-height:24px;text-shadow:0 0 1px rgba(0,0,0,0.5);white-space:nowrap;cursor:pointer}.page_video .txp_barrage_item_img{display:none;z-index:-1;position:absolute;top:0;left:0;cursor:pointer;pointer-events:auto}.page_video .txp_html_fullscreen .txp_barrage_item_star{margin-top:40px}.page_video .txp_html_fullscreen .txp_barrage{overflow:hidden}.page_video .txp_barrage_item_prop{z-index:1;width:auto;padding:2px 58px 2px 2px;border:1px solid #ff5c38;border:1px solid rgba(255,92,56,0.6);border-radius:20px;background-color:#ff5c38;background-color:rgba(255,92,56,0.4)}.page_video .txp_barrage_item_prop .txp_prop_img{position:absolute;top:0;right:10px;width:auto;height:30px}.page_video .txp_barrage_animate{position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;background:repeat-x 0 \/ auto 100%;pointer-events:none}.page_video .txp_barrage_animate.animated{background-image:url(\/tencentvideo\/txp\/style\/img\/apng\/stars.png)}.page_video .txp_barrage_animate_pendant{position:absolute;top:0;bottom:0;width:10px;height:10px;margin:auto}.page_video .txp_barrage_animate_pendant .pic{-o-object-fit:contain;display:block;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain}.page_video .animated .txp_barrage_animate_pendant1{-webkit-animation:txp_barrage_pendant1 10s linear infinite;animation:txp_barrage_pendant1 10s linear infinite}.page_video .animated .txp_barrage_animate_pendant2{-webkit-animation:txp_barrage_pendant2 10s linear infinite;animation:txp_barrage_pendant2 10s linear infinite}.page_video .txp_barrage_item_v2{padding:6px 4px 6px 50px}.page_video .txp_barrage_item_v2 .txp_barrage_avatar{position:absolute;top:-2px;left:5px;width:40px;height:40px}.page_video .txp_barrage_item_v2.txp_barrage_item_mine{padding-right:6px}.page_video .txp_barrage_item .txp_text.txp_gradation,.page_video .txp_barrage_item_bottom .txp_text.txp_gradation,.page_video .txp_barrage_item_top .txp_text.txp_gradation{font-weight:700}@media(max-width:1269px){.page_video .txp_mod_barrage .txp_barrage_input_box{width:-ms-calc(30%);width:calc(30%)}.page_video .txp_mod_barrage .stars_pendant_avatar,.page_video .txp_mod_barrage .stars_pendant_name{max-width:34px}}";
});function _typeof2(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var i=arguments[e];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);
}
return t;
};
define("new_video/plugin/danmu_util.js",[],function(){
"use strict";
function t(e){
return(t="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){
return"undefined"==typeof t?"undefined":_typeof2(t);
}:function(t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":_typeof2(t);
})(e);
}
function e(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
function i(t,e){
for(var i=0;i<e.length;i++){
var n=e[i];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
function n(t,e,n){
return e&&i(t.prototype,e),n&&i(t,n),t;
}
function a(t,e){
if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");
t.prototype=Object.create(e&&e.prototype,{
constructor:{
value:t,
writable:!0,
configurable:!0
}
}),e&&o(t,e);
}
function s(t){
return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){
return t.__proto__||Object.getPrototypeOf(t);
})(t);
}
function o(t,e){
return(o=Object.setPrototypeOf||function(t,e){
return t.__proto__=e,t;
})(t,e);
}
function r(t){
if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}
function l(t,e){
return!e||"object"!==("undefined"==typeof e?"undefined":_typeof2(e))&&"function"!=typeof e?r(t):e;
}
function h(t,e){
return c(t)||u(t,e)||f();
}
function c(t){
return Array.isArray(t)?t:void 0;
}
function u(t,e){
var i=[],n=!0,a=!1,s=void 0;
try{
for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);
}catch(l){
a=!0,s=l;
}finally{
try{
n||null==r["return"]||r["return"]();
}finally{
if(a)throw s;
}
}
return i;
}
function f(){
throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function d(t,e){
return e={
exports:{}
},t(e,e.exports),e.exports;
}
function p(t,e,i){
this.now=0,this.afternow=0,this.delta=0,this.fps=t||10,this.interval=parseInt(1e3/t,10),
this.callback=e||"",this.timecount=0,this.running=!1,this.timemode=i||"auto",this.index=Date.now(),
"timeout"!==this.timemode&&(this.timemode="auto"),window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
}
function m(t,e,i){
return new p(t,e,i);
}
function g(t){
var e=[],i=0,n=200,a=[],s={
get:function(){
if(e.length)return e.shift();
if(n>i){
i+=1;
var a=new t;
return a;
}
return null;
},
save:function(t){
t&&e.push(t);
},
getLength:function(){
return e.length;
},
getAll:function(){
return a;
}
};
return s;
}
function _(t,i,o,r){
var c=i||null,u=o||null,f=!!r,d=function(){
function t(){
e(this,t),this._left=0,this._top=0,this._bottom=0,this._dom=null,this._animate=null,
this._trail=-1,this._width=0,this.el=null,this.elText=null,this.fontSize=0,this.height=0,
this.enableColor=!0,this.currentColor="",this.id=null,this.originContent="",this.isSys=!1,
this.count=0,this.isStar=!1;
}
return n(t,[{
key:"render",
value:function(t,e,i){
this.el||(this.write(),this.addClickEvent());
var n;
t.html?(this.el.innerHTML=t.html,n=t.html.length||0):(this.el.innerText=t.content,
n=t.content.length||0),t.contentLength||(t.contentLength=n),this._width=t.width?t.width:e?t.contentLength*e:t.contentLength*i/1.5,
this.font(e,i),t.gradienColor?this.gradienColor(t.gradienColor):this.color(t.color||"#ffffff"),
this.id=t.id?t.id:null,this.originContent=t.originContent?t.originContent:"",this.isSys=!!t.isSys,
this.isStar=!!t.isStar,this.count=0,this.isStar?he.addClass(this.el,"txp_barrage_item_speaker"):he.removeClass(this.el,"txp_barrage_item_speaker"),
t.isself?he.addClass(this.el,"txp_barrage_item_self"):he.removeClass(this.el,"txp_barrage_item_self");
}
},{
key:"font",
value:function(t,e){
t?this.fontSize!==+t&&(this.fontSize=t,this.height=Math.ceil(1.5*t),this.el.style.fontSize="".concat(t,"px"),
this.el.style.lineHeight="".concat(this.height-6,"px"),this.el.style.height="".concat(this.height,"px")):e&&this.height!==+e&&(this.height=e,
this.el.style.height="".concat(this.height,"px"),this.el.style.lineHeight="".concat(this.height,"px"),
this.el.style.padding=0);
}
},{
key:"color",
value:function(t){
t&&(this.disableColor(),he.css(this.el,"color",t));
}
},{
key:"gradienColor",
value:function(t){
t?t[1]!==t[0]?(he.css(this.el,"color",t[1]),he.css(this.el,"background-image","linear-gradient(to right,".concat(t[0]," 0,").concat(t[1]," 100%)")),
he.css(this.el,"-webkit-text-fill-color","transparent"),he.css(this.el,"background-repeat","repeat"),
he.css(this.el,"-webkit-background-clip","text"),he.css(this.el,"text-shadow","none")):this.color(t[1]):this.disableColor();
}
},{
key:"disableColor",
value:function(){
he.css(this.el,"background-image",""),he.css(this.el,"-webkit-text-fill-color",""),
he.css(this.el,"background-repeat",""),he.css(this.el,"-webkit-background-clip",""),
he.css(this.el,"text-shadow","");
}
},{
key:"addClickEvent",
value:function(){
var t=this;
c&&this.el.addEventListener("click",function(){
c(t);
}),u&&this.el.addEventListener("contextmenu",function(e){
t.isSys||(e.stopPropagation(),e.preventDefault(),u({
danmuItem:t,
x:e.clientX,
y:e.clientY
}));
});
}
},{
key:"left",
get:function(){
return this._left;
}
},{
key:"trail",
get:function(){
return this._trail;
},
set:function(t){
this._trail=t>0?t:-1;
}
},{
key:"width",
get:function(){
return this._width;
}
}]),t;
}(),p=function(i){
function o(){
var t;
return e(this,o),t=l(this,s(o).call(this)),t.isHove=!1,t;
}
return a(o,i),n(o,[{
key:"write",
value:function(){
var e=this,i=document.createElement("div");
i.innerHTML=oe,this.el=i.firstChild,t.appendChild(this.el);
var n=this.el.getElementsByClassName("txp_text"),a=h(n,1),s=a[0];
this.elText=s,f&&(this.el.addEventListener("mouseenter",function(){
e.isSys||e.isStar||(he.addClass(e.el,"txp_barrage_item_hover"),e.isHove=!0);
}),this.el.addEventListener("mouseleave",function(){
e.isSys||e.isStar||(he.removeClass(e.el,"txp_barrage_item_hover"),e.isHove=!1);
}));
}
},{
key:"move",
value:function(t,e){
return this.isStar&&3>t&&t>-10&&this.count<120?void(this.count+=1):(this._left=t,
e>=0&&e!==this._top&&(this._top=e),this.el.style.transform="translate3D(".concat(this._left,"px, ").concat(this._top,"px, 1px)"),
void("number"!=typeof window.top.__fontScaleBackForAndroid__||1===window.top.__fontScaleBackForAndroid__||this.el.getAttribute("mp-original-font-size")||(this.el.style.transform+=" scale3d(".concat(window.top.__fontScaleBackForAndroid__,", ").concat(window.top.__fontScaleBackForAndroid__,", 1)"))));
}
}]),o;
}(d),m=function(t){
function i(){
var t;
return e(this,i),t=l(this,s(i).call(this)),t["class"]="txp_animate",t.hide="txp_none",
t.available=!0,t.isHover=!1,t.paused=!1,t;
}
return a(i,t),n(i,[{
key:"pauseAnimate",
value:function(t){
t&&(this.paused=!0),he.css(this.el,"opacity",1),he.css(this.el,"animation-play-state","paused"),
he.css(this.el,"-webkit-animation-play-state","paused");
}
},{
key:"resumeAnimate",
value:function(t){
t&&(this.paused=!1),he.css(this.el,"opacity",""),he.css(this.el,"animation-play-state","running"),
he.css(this.el,"-webkit-animation-play-state","running");
}
},{
key:"removeAnimate",
value:function(){
var t=this;
this.el&&(he.removeClass(this.el,this["class"]),he.addClass(this.el,this.hide)),
setTimeout(function(){
t.available=!0;
},100);
}
},{
key:"startAnimate",
value:function(){
this.available=!1,he.addClass(this.el,this["class"]),he.removeClass(this.el,this.hide);
}
},{
key:"setBottom",
value:function(t){
t>=0&&t!==this._bottom&&(this._bottom=t),this.el.style.bottom="".concat(this._bottom,"px"),
this.startAnimate();
}
},{
key:"setTop",
value:function(t){
t>=0&&t!==this._top&&(this._top=t),this.el.style.top="".concat(this._top,"px"),this.startAnimate();
}
},{
key:"addEvent",
value:function(){
var t=this;
this.el.addEventListener("animationend",function(){
t.removeAnimate();
}),this.el.addEventListener("mouseenter",function(){
he.addClass(t.el,"txp_barrage_item_hover"),t.pauseAnimate(),t.isHover=!0;
}),this.el.addEventListener("mouseleave",function(){
he.removeClass(t.el,"txp_barrage_item_hover"),t.paused||t.resumeAnimate(),t.isHover=!1;
});
}
}]),i;
}(d),g=function(i){
function o(){
return e(this,o),l(this,s(o).apply(this,arguments));
}
return a(o,i),n(o,[{
key:"write",
value:function(){
var e=document.createElement("div");
e.innerHTML=re,this.el=e.firstChild,t.appendChild(this.el);
var i=this.el.getElementsByClassName("txp_text"),n=h(i,1),a=n[0];
this.elText=a,this.addEvent();
}
}]),o;
}(m),_=function(i){
function o(){
return e(this,o),l(this,s(o).apply(this,arguments));
}
return a(o,i),n(o,[{
key:"write",
value:function(){
var e=document.createElement("div");
e.innerHTML=le,this.el=e.firstChild,t.appendChild(this.el);
var i=this.el.getElementsByClassName("txp_text"),n=h(i,1),a=n[0];
this.elText=a,this.addEvent();
}
}]),o;
}(m);
return{
baseBarrage:d,
scrollBarrage:p,
TopBarrage:g,
BottomBarrage:_
};
}
function b(t){
return"string"!=typeof t?t:t.replace(/\?.+/g,"");
}
function y(){}
function v(t){
return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t);
}
function x(t,e){
var i,n={
xs:{
xxs:12,
xs:14,
s:16,
m:18,
l:20,
xl:22,
xxl:26
},
s:{
xxs:13,
xs:17,
s:19,
m:21,
l:23,
xl:25,
xxl:29
},
m:{
xxs:15,
xs:19,
s:21,
m:23,
l:25,
xl:27,
xxl:31
},
l:{
xxs:17,
xs:21,
s:23,
m:25,
l:27,
xl:29,
xxl:33
},
xl:{
xxs:25,
xs:29,
s:31,
m:33,
l:35,
xl:37,
xxl:41
}
};
return i=1024>=t?n.xs:t>1024&&1240>=t?n.s:t>1240&&1600>=t?n.m:t>1600&&1920>=t?n.l:t>1920?n.xl:n.m,
i[e];
}
function w(t){
t.prototype.start=function(t){
this.dataset.state=1,this._start(t);
},t.prototype.pause=function(){
this.dataset.state=2,this._pause();
},t.prototype.setFont=function(t){
var e=["xxs","xs","s","m","l","xl","xxl"];
e.indexOf(t)>-1&&(this.dataset.fontSetting=t),this.updateFont(),this.updateLineNum();
},t.prototype.setRate=function(t){
this.dataset.rate!==t&&(this.dataset.rate=t,this.dataset.realSpeed={
0:this.dataset.speed*this.dataset.rate*1.2,
1:this.dataset.speed*this.dataset.rate
});
},t.prototype.setOpacity=function(t){
this._setOpacity(t);
},t.prototype.setLine=function(t){
this.dataset.userNum=t,this.updateLineNum();
},t.prototype.enableColor=function(){
this._toggleColor(!0);
},t.prototype.disableColor=function(){
this._toggleColor(!1);
},t.prototype.hideScroll=function(){
this._clearScroll(),this.dataset.enableScroll=!1;
},t.prototype.showScroll=function(){
this.dataset.enableScroll=!0;
},t.prototype.hideTop=function(){
this._handlePosition("top","clear"),this.dataset.enableTop=!1;
},t.prototype.showTop=function(){
this.dataset.enableTop=!0;
},t.prototype.hideBottom=function(){
this._handlePosition("bottom","clear"),this.dataset.enableBottom=!1;
},t.prototype.showBottom=function(){
this.dataset.enableBotton=!0;
},t.prototype.switchOn=function(){
this.start();
},t.prototype.play=t.prototype.switchOn,t.prototype.switchOff=function(){
this.pause(),this._clear();
},t.prototype.end=t.prototype.switchOff,t.prototype.updateTime=function(t){
this.index=t;
},t.prototype.add=function(t){
t&&this._addDanmu(JSON.parse(JSON.stringify(t)));
};
}
function k(t){
t.prototype._createTopDanmu=function(){
var t=5;
this.dataset.topList||(this.dataset.topList=[]);
var e,i,n=this.dataset.topList;
if(n.length<t)e=new this.Factory.TopBarrage,n.push(e),i=n.length;else for(var a=0,s=n.length;s>a;a+=1)if(n[a].available){
e=n[a],i=a;
break;
}
if(e){
var o=this.list.get(this.dataset.index,5);
o&&(this.dataset.enableColor||(o.color="#ffffff",o.gradienColor=[],o.gradienColor.push("#ffffff"),
o.gradienColor.push("#ffffff")),this.emit("showDanmu",o),e.render(o,this.dataset.fontSize,this.dataset.lineHeight),
e.setTop(i*this.dataset.lineHeight));
}
},t.prototype._createBottomDanmu=function(){
var t=5;
this.dataset.bottomList||(this.dataset.bottomList=[]);
var e,i,n=this.dataset.bottomList;
if(n.length<t)e=new this.Factory.BottomBarrage,n.push(e),i=n.length;else for(var a=0,s=n.length;s>a;a+=1)if(n[a].available){
e=n[a],i=a;
break;
}
if(e){
var o=this.list.get(this.dataset.index,6);
o&&(this.emit("showDanmu",o),this.dataset.enableColor||(o.color="#ffffff",o.gradienColor=[],
o.gradienColor.push("#ffffff"),o.gradienColor.push("#ffffff")),e.render(o,this.dataset.fontSize,this.dataset.lineHeight),
e.setBottom(i*this.dataset.lineHeight+this.dataset.marginBottom));
}
},t.prototype._handlePosition=function(t,e){
var i,n={
clear:"removeAnimate",
pause:"pauseAnimate",
resume:"resumeAnimate"
},a=n[e]||"";
switch(t){
case"top":
i=this.dataset.topList;
break;

case"bottom":
i=this.dataset.bottomList;
}
if(i&&a)for(var s=0,o=i.length;o>s;s+=1)i[s][a]&&i[s][a](!0);
},t.prototype._createTop=function(){
this.dataset.enableTop&&this._createTopDanmu();
},t.prototype._createBottom=function(){
this.dataset.enableBottom&&this._createBottomDanmu();
},t.prototype._createPositionDanmu=function(){
this._createScroll(),this._createTop(),this._createBottom();
};
}
"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{
value:function(t){
if(null==t)throw new TypeError("Cannot convert undefined or null to object");
for(var e=Object(t),i=1;i<arguments.length;i+=1){
var n=arguments[i];
if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);
}
return e;
},
writable:!0,
configurable:!0
});
{
var S=void 0,C=function(t){
return t!==S&&null!==t;
},O={
object:!0,
"function":!0,
undefined:!0
},B=function(t){
return C(t)?hasOwnProperty.call(O,"undefined"==typeof t?"undefined":_typeof2(t)):!1;
},A=function(t){
if(!B(t))return!1;
try{
return t.constructor?t.constructor.prototype===t:!1;
}catch(e){
return!1;
}
},j=function(t){
if("function"!=typeof t)return!1;
if(!hasOwnProperty.call(t,"length"))return!1;
try{
if("number"!=typeof t.length)return!1;
if("function"!=typeof t.call)return!1;
if("function"!=typeof t.apply)return!1;
}catch(e){
return!1;
}
return!A(t);
},T=/^\s*class[\s{\/}]/,E=Function.prototype.toString,P=function(t){
return j(t)?T.test(E.call(t))?!1:!0:!1;
},L=function(){
var t,e=Object.assign;
return"function"!=typeof e?!1:(t={
foo:"raz"
},e(t,{
bar:"dwa"
},{
trzy:"trzy"
}),t.foo+t.bar+t.trzy==="razdwatrzy");
},N=function(){
try{
return Object.keys("primitive"),!0;
}catch(t){
return!1;
}
},z=function(){},H=z(),F=function(t){
return t!==H&&null!==t;
},D=Object.keys,M=function(t){
return D(F(t)?Object(t):t);
},q=N()?Object.keys:M,$=function(t){
if(!F(t))throw new TypeError("Cannot use null or undefined");
return t;
},R=Math.max,I=function(t,e){
var i,n,a,s=R(arguments.length,2);
for(t=Object($(t)),a=function(n){
try{
t[n]=e[n];
}catch(a){
i||(i=a);
}
},n=1;s>n;++n)e=arguments[n],q(e).forEach(a);
if(void 0!==i)throw i;
return t;
},U=L()?Object.assign:I,J=Array.prototype.forEach,W=Object.create,X=function(t,e){
var i;
for(i in t)e[i]=t[i];
},Y=function(){
var t=W(null);
return J.call(arguments,function(e){
F(e)&&X(Object(e),t);
}),t;
},G="razdwatrzy",K=function(){
return"function"!=typeof G.contains?!1:G.contains("dwa")===!0&&G.contains("foo")===!1;
},Q=String.prototype.indexOf,V=function(t){
return Q.call(this,t,arguments[1])>-1;
},Z=K()?String.prototype.contains:V,te=d(function(t){
var e=t.exports=function(t,e){
var i,n,a,s,o;
return arguments.length<2||"string"!=typeof t?(s=e,e=t,t=null):s=arguments[2],C(t)?(i=Z.call(t,"c"),
n=Z.call(t,"e"),a=Z.call(t,"w")):(i=a=!0,n=!1),o={
value:e,
configurable:i,
enumerable:n,
writable:a
},s?U(Y(s),o):o;
};
e.gs=function(t,e,i){
var n,a,s,o;
return"string"!=typeof t?(s=i,i=e,e=t,t=null):s=arguments[3],C(e)?P(e)?C(i)?P(i)||(s=i,
i=void 0):i=void 0:(s=e,e=i=void 0):e=void 0,C(t)?(n=Z.call(t,"c"),a=Z.call(t,"e")):(n=!0,
a=!1),o={
get:e,
set:i,
configurable:n,
enumerable:a
},s?U(Y(s),o):o;
};
}),ee=function(t){
if("function"!=typeof t)throw new TypeError(t+" is not a function");
return t;
},ie=d(function(t,e){
var i,n,a,s,o,r,l,h=Function.prototype.apply,c=Function.prototype.call,u=Object.create,f=Object.defineProperty,d=Object.defineProperties,p=Object.prototype.hasOwnProperty,m={
configurable:!0,
enumerable:!1,
writable:!0
};
i=function(t,e){
var i;
return ee(e),p.call(this,"__ee__")?i=this.__ee__:(i=m.value=u(null),f(this,"__ee__",m),
m.value=null),i[t]?"object"===_typeof2(i[t])?i[t].push(e):i[t]=[i[t],e]:i[t]=e,this;
},n=function(t,e){
var n,s;
return ee(e),s=this,i.call(this,t,n=function(){
a.call(s,t,n),h.call(e,this,arguments);
}),n.__eeOnceListener__=e,this;
},a=function(t,e){
var i,n,a,s;
if(ee(e),!p.call(this,"__ee__"))return this;
if(i=this.__ee__,!i[t])return this;
if(n=i[t],"object"===("undefined"==typeof n?"undefined":_typeof2(n)))for(s=0;a=n[s];++s)(a===e||a.__eeOnceListener__===e)&&(2===n.length?i[t]=n[s?0:1]:n.splice(s,1));else(n===e||n.__eeOnceListener__===e)&&delete i[t];
return this;
},s=function(t){
var e,i,n,a,s;
if(p.call(this,"__ee__")&&(a=this.__ee__[t]))if("object"===("undefined"==typeof a?"undefined":_typeof2(a))){
for(i=arguments.length,s=new Array(i-1),e=1;i>e;++e)s[e-1]=arguments[e];
for(a=a.slice(),e=0;n=a[e];++e)h.call(n,this,s);
}else switch(arguments.length){
case 1:
c.call(a,this);
break;

case 2:
c.call(a,this,arguments[1]);
break;

case 3:
c.call(a,this,arguments[1],arguments[2]);
break;

default:
for(i=arguments.length,s=new Array(i-1),e=1;i>e;++e)s[e-1]=arguments[e];
h.call(a,this,s);
}
},o={
on:i,
once:n,
off:a,
emit:s
},r={
on:te(i),
once:te(n),
off:te(a),
emit:te(s)
},l=d({},r),t.exports=e=function(t){
return null==t?u(l):d(Object(t),r);
},e.methods=o;
});
ie.methods;
}
p.prototype={
setCallBack:function(t){
t&&(this.callback=t);
},
start:function(t){
t&&(this.callback=t),this.running||(this.running=!0,this.afternow=Date.now(),this._timeupdate());
},
stop:function(){
this.running&&(this.running=!1),window.requestAnimationFrame?window.cancelAnimationFrame(this.timecount):clearTimeout(this.timecount),
this.timecount=0;
},
isRunning:function(){
return this.running;
},
_timeupdate:function(){
window.requestAnimationFrame&&"timeout"!==this.timemode?this._rafMode():this._timeoutMode();
},
_rafMode:function(){
var t=this;
this.timecount=requestAnimationFrame(function(){
t._timeupdate();
}),this.now=Date.now(),this.delta=this.now-this.afternow,this.delta>=this.interval&&this.callback&&(this.afternow=this.now-this.delta%this.interval,
this.callback((this.delta/this.interval).toFixed(2)));
},
_timeoutMode:function(){
this.timecount=setTimeout(this._timeupdate,this.interval),this.callback();
}
};
var ne=m,ae='<txpdiv class="txp_barrage txp_barrage_external" style="position:absolute;top:0;left:0;width:100%;height:100%;overflow: hidden;">\n        <style type="text/css">\n            .txp_barrage{\n                top: 0px;\n                right:0px;\n                bottom: 0px;\n                left: 0px;\n                \n                position: absolute;\n                margin: auto;\n            }\n            .txp_barrage .txp_barrage_avatar,.txp_barrage .txp_barrage_emoji{\n                height: 100%;\n                width:unset;\n            }\n            .txp_barrage .txp_barrage_avatar{\n                margin-right:unset; \n            }\n            .txp_barrage .txp_barrage_item .txp_text{\n                height: 100%;\n                background: inherit;\n                -webkit-text-fill-color: inherit;\n                padding: 0 10px;\n            }\n            .txp_barrage .txp_barrage_item_bubble{\n                border-radius:  9999px;\n            }\n            .txp_barrage_item_bubble_front{\n                display: inline-block;\n                position: relative;\n                height: 100%;\n                vertical-align: unset;\n            }\n            .txp_barrage_item_bubble_front .txp_barrage_vipicon{\n                right: 0;\n                bottom: 0;\n                top:unset;\n                left: unset;\n                height: 40%;\n            }\n            .txp_barrage .txp_svg_icon_like{\n                height: 60%;\n                width:unset;\n                vertical-align: unset;\n            }\n            .txp_barrage .txp_barrage_badge{\n                height: 100%;\n                background: unset;\n                -webkit-text-fill-color: white;\n                color: white;\n            }\n            .txp_barrage .txp_barrage_badge .txp_icon_text{\n                -webkit-text-fill-color: white;\n            }\n            .txp_barrage .txp_barrage_item_hover {\n                background: rgba(0,0,0,0.7) !important;\n                color:white !important;\n                border-radius: 99999px;\n                z-index: 1;\n                -webkit-text-fill-color:unset !important;\n            }\n            .txp_barrage .txp_barrage_item_speaker {\n                background-image: linear-gradient(to right,rgba(255,92,56,0.9) 0,rgba(253,177,41,0.9) 100%)!important;\n                color:white !important;\n                border-radius: 99999px;\n                z-index: 1;\n                -webkit-text-fill-color:unset !important;\n                text-shadow: unset !important;\n                stroke: unset !important;           \n\n            }\n            .txp_barrage .txp_barrage_item_speaker .txp_barrage_item_wrapper{\n                background: unset !important;\n            }\n            .txp_barrage .txp_barrage_itxp_barrage_item_speakertem_star .txp_text{\n                background: unset !important;\n            }\n\n            .txp_barrage .txp_barrage_item {\n                padding: 4px 20px 4px 10px;            \n            }\n            .txp_barrage .txp_barrage_item_wrapper{\n                background: inherit;\n                -webkit-text-fill-color: inherit;\n            }\n            \n\n            .txp_barrage .txp_barrage_item_hover .txp_barrage_item_wrapper{\n                background: unset !important;\n            }\n            .txp_barrage .txp_barrage_item_hover .txp_text{\n                background: unset !important;\n            }\n            .txp_barrage .txp_barrage_badge{\n                background: inherit;\n                -webkit-text-fill-color: inherit;\n            }\n            .txp_barrage .txp_icon_text{\n                background: inherit;\n                -webkit-text-fill-color: inherit;\n            }\n            .txp_barrage .txp_barrage_item_self{\n                \n                border: 1px solid white;\n                border-radius: 99999px;\n    \n            }\n            .txp_barrage .like{\n                -webkit-text-fill-color: red;\n            }\n    </style>\n    <svg class="txp_svg_sprite" display="none" version="1.1" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="txp_svg_icon_like" viewBox="0 0 20 20">\n            <path d="M18.4 8.5l-2 9.4c-0.2 0.6-0.2 1.1-0.6 1.3 -0.4 0.3-1 0.2-1.9 0.2 -2.9 0-10.4 0-10.4 0l0-12 2.1-5c0 0 0.6-2 1.7-2 1.4 0 1.2 2 1.2 2s0 1.3 0 3c0 0.7 0.2 1 1 1 6.5 0 6.9 0 6.9 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0 1.6-0.2 1.9 0.5C18.5 7.4 18.6 7.9 18.4 8.5zM1.5 19.5c-0.6 0-1-0.4-1-1v-10c0-0.6 0.4-1 1-1s1 0.4 1 1v10C2.5 19.1 2.1 19.5 1.5 19.5z"></path>\n        </symbol>\n    </svg>\n    \n</txpdiv>',se=g,oe='<txpdiv class="txp_barrage_item">\n    <txpdiv class="txp_text"></txpdiv>\n</txpdiv>',re='<txpdiv class="txp_barrage_item_top">\n    <txpdiv class="txp_text"></txpdiv>\n</txpdiv>',le='<txpdiv class="txp_barrage_item_bottom">\n    <txpdiv class="txp_text"></txpdiv>\n</txpdiv>',he={
hasClass:function(t,e){
return t&&t.className&&t.className.indexOf(e)>-1;
},
addClass:function(t,e){
if(!this.hasClass(t,e)&&t)if(t.className&&0!==t.className.length){
var i=t.className.split(" ");
i.push(e),t.className=i.join(" ");
}else t.className=e;
},
removeClass:function(t,e){
if(this.hasClass(t,e)){
var i=t.className.split(" "),n=i.indexOf(e);
i.splice(n,1),t.className=i.join(" ");
}
},
css:function ge(e,i,n){
if(e&&i){
if("undefined"==typeof n&&"string"==typeof i)return;
if("undefined"==typeof n&&"object"===t(i)){
var ge=i;
for(var a in ge)ge.hasOwnProperty(a)&&(/width|height|left|right|top|bottom/.test(a)&&"number"==typeof ge[a]&&(ge[a]="".concat(ge[a],"px")),
e.style[a]=ge[a]);
}else if("string"==typeof i&&("string"==typeof n||"number"==typeof n)){
var s=n;
/width|height|left|right|top|bottom/i.test(i)&&"number"==typeof n&&(s="".concat(n,"px")),
e.style[i]=s;
}
}
}
},ce={},ue={
loadCss:function(t){
var e=1,i=function s(t,i,n){
var a=document.createElement("link");
a.rel="stylesheet",a.type="text/css",a.onload=function(){
i();
},a.onerror=function(){
return e>=3?void n():(e+=1,a.parentNode.removeChild(a),void s("".concat(b(t),"?v=").concat(parseInt(1e10*Math.random())),i,n));
},a.href=t,document.head.appendChild(a);
},n=function(){
for(var e=document.querySelectorAll('link[rel="stylesheet"]'),i=function(t){
var e=t,i=e.indexOf("?");
i>0&&(e=e.slice(0,i));
var n=e.lastIndexOf("/");
return n>0&&(e=e.slice(n+1,e.length)),e;
},n=i(t),a=null,s=e.length,o=0;s>o;o+=1)if(a=e[o],a&&a.href){
var r=i(a.href);
if(r===n)return!0;
}
return!1;
},a=new Promise(function(e,a){
var s=n();
s?e():i(t,e,a);
});
return a;
},
loadScript:function(t){
function e(){
s.test(n.readyState)&&(n.onload=null,n.onerror=null,n.onreadystatechange=null,n=null,
r(!0));
}
var i=t||{};
i.onsuccess=i.onsuccess||y;
var n=document.createElement("script"),a=document.getElementsByTagName("head")[0],s=/^(?:loaded|complete|undefined)$/;
if(i.url){
var o=b(i.url),r=function(t){
var e;
if(ce[o])for(;ce[o].length>0;)e=ce[o].shift(),"function"==typeof e&&e(t);
};
if(ce[o]&&ce[o].length)return void ce[o].push(i.onsuccess);
ce[o]=[i.onsuccess],n.async="async",n.src=i.url,n.charset="utf-8",i.crossorigin&&n.setAttribute("crossorigin",""),
n.onerror=function(){
n.onload=null,n.onerror=null,n.onreadystatechange=null,n=null,r(!1);
},n.onload=e,n.onerror=e,n.onreadystatechange=e,a.appendChild(n);
}
},
hasExsit:function(t){
for(var e=b(t),i=document.getElementsByTagName("script"),n=0,a=i.length;a>n;n+=1)if(i[n].src&&-1!==i[n].src.indexOf(e))return!0;
return!1;
}
},fe=function(){
function t(){
e(this,t),this.domlist=[],this.lastDom={};
}
return n(t,[{
key:"handleDom",
value:function(t){
for(var e=this.domlist.length-1;e>=0;e-=1)t&&t(this.domlist[e])&&this.domlist.splice(e,1);
}
},{
key:"checkLast",
value:function(t){
var e=this;
Object.keys(this.lastDom).forEach(function(i){
t(e.lastDom[i],i);
});
}
},{
key:"push",
value:function(t,e){
this.domlist.push(t),this.lastDom[e]=t;
}
}]),t;
}(),de=function(){
function t(i){
e(this,t),this.list={
scroll:{
show:{},
cache:{}
}
},this.enablePosition=!!i,this.enablePosition&&(this.list.top={
show:{},
cache:{}
},this.list.bottom={
show:{},
cache:{}
});
}
return n(t,[{
key:"addList",
value:function(t){
if(v(t))for(var e=0,i=t.length;i>e;e+=1)this.addBarrage(t[e]);else this.addBarrage(t);
}
},{
key:"addBarrage",
value:function(t){
if("[object Object]"===Object.prototype.toString.call(t)&&(t.html||t.content)){
var e=t.position||1;
this.enablePosition||(e=1),this.add(t,e);
}
}
},{
key:"getList",
value:function(t){
var e;
switch(t){
case 1:
e=this.list.scroll;
break;

case 5:
e=this.list.top;
break;

case 6:
e=this.list.bottom;
break;

default:
e=this.list.scroll;
}
return e;
}
},{
key:"add",
value:function(t,e){
var i,n=this.getList(e);
i=t.mustShow?n.show:n.cache,t.index?(i[t.index]||(i[t.index]=[]),i[t.index].push(t)):(i.priority||(i.priority=[]),
i.priority.push(t));
}
},{
key:"get",
value:function(t,e){
var i=this.getList(e);
return i.show.priority&&i.show.priority.length?i.show.priority.shift():i.show[t]&&i.show[t].length?i.show[t].shift():i.cache[t]&&i.cache[t].length?i.cache[t].shift():i.cache.priority&&i.cache.priority.length?i.cache.priority.shift():null;
}
},{
key:"reset",
value:function(){
this.list.scroll.show={},this.list.scroll.cache={},this.enablePosition&&(this.list.top.show={},
this.list.top.cache={},this.list.bottom.show={},this.list.bottom.cache={});
}
},{
key:"clear",
value:function(){
this.list.scroll.cache={},this.enablePosition&&(this.list.top.cache={},this.list.bottom.cache={});
}
}]),t;
}(),pe={
fps:60,
speed:2,
rate:1,
top:!1,
bottom:!1,
star:!1,
gift:!1,
lineHeight:36,
enableSetArea:!1,
userNum:5,
interval:30,
cssUrl:"",
fontSize:"xs",
opacity:1,
enableColor:!0,
enablePosition:!1,
enableEgg:!1,
autoFont:!0,
loop:!1,
marginBottom:0,
enableMouseEvent:!1
},me=function(){
function t(i){
e(this,t),ie(this);
var n={};
_extends(n,pe,i),n.cssUrl&&this._loadStyle(n.cssUrl),this._initDataset(n),this._write(n.wrapper),
this._windowResize(),this.Timer=ne(n.fps),this.Timer.setCallBack(this.Animation.bind(this));
var a,s;
this._clickHandler&&(a=this._clickHandler.bind(this)),this._menuHandler&&(s=this._menuHandler.bind(this)),
this.Factory=_(this.dataset.$container,a,s,this.dataset.enableMouseEvent),this.BarragePool=se(this.Factory.scrollBarrage),
this.active=new fe,this.list=new de(this.dataset.enablePosition);
}
return n(t,[{
key:"_loadStyle",
value:function(t){
var e=this;
ue.loadCss(t).then(function(){
e.updateSize();
});
}
},{
key:"_initDataset",
value:function(t){
this.dataset={
currentBlock:0,
index:0,
interval:t.interval,
width:"",
height:"",
speed:t.speed,
rate:t.rate,
realSpeed:{
0:t.speed*t.rate*1.2,
1:t.speed*t.rate*1
},
keyMap:{},
lineHeight:t.lineHeight,
state:3,
timerState:3,
fps:t.fps,
count:0,
fontSetting:t.fontSize,
fontSize:t.autoFont?x(window.innerWidth,t.fontSize):0,
opacity:t.opacity,
userNum:t.userNum,
maxNum:0,
actualNum:0,
enableColor:t.enableColor,
enableScroll:!0,
enableTop:!0,
enableBottom:!0,
enableStar:!0,
enablePosition:t.enablePosition,
enableEgg:t.enableEgg,
autoFont:t.autoFont,
loop:t.loop,
marginBottom:t.marginBottom,
enableMouseEvent:t.enableMouseEvent
};
}
},{
key:"_write",
value:function(t){
var e=document.createElement("div");
e.innerHTML=ae,this.dataset.$container=e.firstChild,this.dataset.$scroll=this.dataset.$container.querySelector(".txp_barrage_scroll_wrap"),
t.appendChild(this.dataset.$container),this.updateSize(),this._setOpacity(this.dataset.opacity);
}
},{
key:"_setOpacity",
value:function(t){
this.dataset.$container.style.opacity=t||1;
}
},{
key:"_start",
value:function(t){
this.dataset.timerState=1,this.updateSize(),this.Timer.start(t),this._handlePosition("top","resume"),
this._handlePosition("bottom","resume");
}
},{
key:"_pause",
value:function(){
this.dataset.timerState=2,this.Timer.stop(),this._handlePosition("top","pause"),
this._handlePosition("bottom","pause");
}
},{
key:"Animation",
value:function(){
this._defaultAnimation();
}
},{
key:"_defaultAnimation",
value:function(t){
this.dataset.count>this.dataset.fps/2&&(this.dataset.count=0,this._create()),this._animate(t),
this.dataset.count+=1;
}
},{
key:"_getAvailable",
value:function(){
var t=this,e=[],i=0;
e.push({
start:0,
end:0
}),this.active.checkLast(function(n,a){
if(n.left+n.width+50>=t.dataset.width){
var s=n.height,o=a*s,r=(a-1)*s;
if(r===e[i].end)e[i].end=o;else if(r>e[i].end)e.push({
start:r,
end:o
}),i+=1;else for(var l=0,h=e.length;h-1>l;l+=1)if(e[l].start>=o&&(0===l||e[l-1].end<=r)){
e.splice(l,0,{
start:r,
end:o
}),i+=1;
break;
}
}
});
for(var n=this.dataset.actualNum,a=1,s=0,o=[];n>=a;){
var r=(a-1)*this.dataset.lineHeight,l=a*this.dataset.lineHeight;
e[s+1]?(r>=e[s].end&&l<=e[s+1].start&&o.push(a),l>e[s+1].end&&(s+=1)):r>=e[s].end&&o.push(a),
a+=1;
}
return o;
}
},{
key:"_create",
value:function(){
this.dataset.enablePosition?this._createPositionDanmu():this._createScroll();
}
},{
key:"_createScroll",
value:function(){
if(this.dataset.enableScroll){
var t=this._getAvailable();
if(t.length)for(var e=0,i=t.length;i>e;e+=1){
var n=t[e],a=this.list.get(this.dataset.index,1);
if(this.dataset.loop&&this._addDanmu(a),!a)break;
this._createScrollDanmu(a,n);
}
}
}
},{
key:"_createScrollDanmu",
value:function(t,e){
this.emit("showDanmu",t);
var i=this.BarragePool.get();
i&&((!this.dataset.enableColor||t.isStar)&&(t.color="#ffffff",t.gradienColor=[],
t.gradienColor.push("#ffffff"),t.gradienColor.push("#ffffff")),i.render(t,this.dataset.fontSize,this.dataset.lineHeight),
i.move(this.dataset.width,(e-1)*this.dataset.lineHeight),i.trail=e,this.active.push(i,e));
}
},{
key:"_animate",
value:function(){
var t=this;
this.active.handleDom(function(e){
if(!e.isHove){
var i=t.dataset.realSpeed[e.trail%2];
e.isSys&&(i*=2);
var n=e.left-i;
if(e.move(n),n+e.width+50<0)return t.BarragePool.save(e),!0;
}
return!1;
});
}
},{
key:"_toggleColor",
value:function(t){
t?this.dataset.enableColor=!0:(this.dataset.enableColor=!1,this.active.handleDom(function(t){
return t.color("#ffffff"),!1;
}));
}
},{
key:"_clear",
value:function(){
this._clearScroll(),this.dataset.enablePosition&&(this._handlePosition("top","clear"),
this._handlePosition("bottom","clear"));
}
},{
key:"_clearScroll",
value:function(){
this.active.handleDom(function(t){
return t.move(-t.width-100),!1;
});
}
},{
key:"_addDanmu",
value:function(t){
this.list.addList(t);
}
},{
key:"_windowResize",
value:function(){
var t=this,e=null;
window.onresize=function(){
1===t.dataset.state&&1===t.dataset.timerState&&t._pause(),e&&clearTimeout(e),e=setTimeout(function(){
1===t.dataset.state&&t._start(),t.updateSize();
},300);
};
}
},{
key:"updateSize",
value:function(){
this.dataset.width=this.dataset.$container.clientWidth,this.dataset.height=this.dataset.$container.clientHeight,
this.updateFont(),this.updateLineNum();
}
},{
key:"updateLineNum",
value:function(){
this.dataset.maxNum=parseInt((this.dataset.height-this.dataset.marginBottom)/this.dataset.lineHeight,10),
this.dataset.maxNum=this.dataset.maxNum>=0?this.dataset.maxNum:0,this.dataset.actualNum=this.dataset.userNum>this.dataset.maxNum?this.dataset.maxNum:this.dataset.userNum,
this.emit("lineUpdate",this.dataset.maxNum);
}
},{
key:"updateFont",
value:function(){
this.dataset.autoFont&&(this.dataset.fontSize=x(this.dataset.width,this.dataset.fontSetting),
this.dataset.lineHeight=Math.ceil(1.5*this.dataset.fontSize));
}
},{
key:"index",
set:function(t){
var e=t?parseInt(t,10):0;
if(e!==this.dataset.index&&(this.dataset.index=e,1===this.dataset.state)){
var i=Math.floor((e+1)/this.dataset.interval);
i!==this.dataset.currentBlock&&(this.dataset.currentBlock=i,this.emit("blockChange",e));
}
},
get:function(){
return this.dataset.index;
}
}]),t;
}();
return k(me),w(me),me;
});define("new_video/plugin_base.js",[],function(){
"use strict";
var t=0,o=function(t,o){
var e=function(){};
e.prototype=o.prototype,t.prototype=new e,t.prototype.constructor=t,t.uber=o.prototype;
},e=function(){
this.player=null;
};
return e.prototype.setPlayer=function(t){
this.player=t;
},e.prototype.setBlockEvt=function(t){
this.player._setBlockPlugin(t,this);
},e.prototype.setUnblockEvt=function(t){
this.player._setBlockPlugin(t,null);
},e.prototype.recv=function(o){
var e=this[o+"Handler"];
return"function"==typeof e?e.apply(this,arguments):t;
},{
Class:e,
inherit:o,
BASE_BITSET:t
};
});define("pages_new/common_share/video/like_and_share/mutations.js",[],function(){
"use strict";
return{};
});function _defineProperty(e,a,i){
return a in e?Object.defineProperty(e,a,{
value:i,
enumerable:!0,
configurable:!0,
writable:!0
}):e[a]=i,e;
}
define("pages_new/common_share/video/like_and_share/actions.js",["pages_new/common_share/video/like_and_share/constants.js","appmsg/retry_ajax.js","biz_wap/utils/ajax.js","common/comm_report.js","appmsg/log.js"],function(e){
"use strict";
var a,i=e("pages_new/common_share/video/like_and_share/constants.js"),t=e("appmsg/retry_ajax.js"),s=e("biz_wap/utils/ajax.js"),p=e("common/comm_report.js"),c=e("appmsg/log.js");
return a={},_defineProperty(a,i.ACTIONS.SET_PRAISE_STATUS,function(e,a){
var i=e.rootState,s=e.commit,p=void 0,c=void 0;
p=-1===a.hasPraised?!i.extRes.appmsgstat.old_liked:a.hasPraised,c=p?i.extRes.appmsgstat.old_like_num+1:i.extRes.appmsgstat.old_like_num-1,
s("SET_PRAISE_STATUS",{
hasPraised:p
},{
root:!0
}),s("SET_PRAISE_NUM",{
praiseNum:c
},{
root:!0
}),t({
url:"/mp/appmsg_like?__biz="+i.cgiData.biz+"&mid="+i.cgiData.appmsgid+"&idx="+i.cgiData.idx+"&like="+(p?1:0)+"&f=json&appmsgid="+i.cgiData.appmsgid+"&itemidx="+i.cgiData.idx,
data:{
scene:i.cgiData.source,
appmsg_like_type:1,
item_show_type:parseInt(i.cgiData.item_show_type,10),
client_version:i.cgiData.clientversion,
is_temp_url:i.cgiData.is_temp_url||0,
style:0,
exptype:i.cgiData.exptype||"",
expsessionid:i.cgiData.expsessionid||""
},
type:"POST"
});
}),_defineProperty(a,i.ACTIONS.SET_RECOMMEND_STATUS,function(e,a){
var i=e.rootState;
return new Promise(function(e,t){
var p=void 0;
p=a.hasRecommended?a.type:2,s({
url:"/mp/appmsg_like?__biz="+i.cgiData.biz+"&mid="+i.cgiData.appmsgid+"&idx="+i.cgiData.idx+"&like="+(a.hasRecommended?1:0)+"&f=json&appmsgid="+i.cgiData.appmsgid+"&itemidx="+i.cgiData.idx,
data:{
is_temp_url:i.cgiData.is_temp_url||0,
scene:i.cgiData.source,
subscene:i.cgiData.subscene,
appmsg_like_type:i.cgiData.appmsg_like_type,
item_show_type:parseInt(i.cgiData.item_show_type,10),
client_version:i.cgiData.clientversion,
comment:a.comment?a.comment:"",
prompted:1,
action_type:p,
style:a.styleType,
passparam:i.cgiData.passparam,
request_id:(new Date).getTime(),
device_type:i.cgiData.devicetype,
exptype:i.cgiData.exptype||"",
expsessionid:i.cgiData.expsessionid||""
},
type:"POST",
success:function(i){
var t=JSON.parse(i);
c("[Appmsg] success send appmsglike like "+a.hasRecommended+" return value is "+JSON.stringify(t)),
e(t);
},
error:function(e){
t(e);
}
});
});
}),_defineProperty(a,i.ACTIONS.REPORT_SHARE_CLICK,function(e){
var a=e.rootState,i=0;
try{
i=1*window.atob(a.cgiData.biz);
}catch(t){}
var s={
BizUin:i,
BizUinStr:a.cgiData.biz||"",
AppMsgId:window.parseInt(a.cgiData.appmsgid,10)||0,
ItemIdx:window.parseInt(a.cgiData.idx,10)||0,
ItemShowType:window.parseInt(a.cgiData.item_show_type,10)||0,
SessionIdStr:a.cgiData.sessionid||"",
EnterId:window.parseInt(a.cgiData.enterid,10)||0,
Scene:window.parseInt(a.cgiData.source,10)||0,
SubScene:window.parseInt(a.cgiData.subscene,10)||0,
EventType:4
};
p.report(19048,s);
}),_defineProperty(a,i.ACTIONS.REPORT_JUMP_TO_WOW,function(e){
var a=e.rootState,i=a.cgiData.appmsgid,t=a.cgiData.idx,p=a.cgiData.enterid;
s({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+a.cgiData.biz,
type:"POST",
data:{
logid:18266,
buffer:["",window.atob(a.cgiData.biz),i,t,a.cgiData.source,a.cgiData.subscene,2,a.cgiData.item_show_type,a.cgiData.sessionid,p]
},
async:!1,
timeout:2e3
});
}),_defineProperty(a,i.ACTIONS.REPORT_OPEN_RECOMMEND_COMMENT,function(e){
var a=e.rootState;
s({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+a.cgiData.biz+"&mid="+a.cgiData.appmsgid+"&idx="+a.cgiData.idx+"&f=json&appmsgid="+a.cgiData.appmsgid+"&itemidx="+a.cgiData.idx,
data:{
is_temp_url:a.cgiData.is_temp_url||0,
scene:a.cgiData.source,
subscene:a.cgiData.subscene,
appmsg_like_type:a.cgiData.appmsg_like_type,
item_show_type:parseInt(a.cgiData.item_show_type,10),
client_version:a.cgiData.clientversion,
device_type:a.cgiData.devicetype
},
type:"POST"
});
}),_defineProperty(a,i.ACTIONS.REPORT_RECOMMEND_EXPOSE,function(e){
var a=e.rootState;
s({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+a.cgiData.biz+"&mid="+a.cgiData.appmsgid+"&idx="+a.cgiData.idx+"&f=json&appmsgid="+a.cgiData.appmsgid+"&itemidx="+a.cgiData.idx,
data:{
is_temp_url:a.cgiData.is_temp_url||0,
scene:a.cgiData.source,
subscene:a.cgiData.subscene,
appmsg_like_type:a.cgiData.appmsg_like_type,
item_show_type:parseInt(a.cgiData.item_show_type,10),
client_version:a.cgiData.clientversion,
device_type:a.cgiData.devicetype
},
type:"POST"
});
}),_defineProperty(a,i.ACTIONS.REPORT_EDUCATE_EXPOSE,function(e){
var a=e.rootState;
s({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+a.cgiData.biz,
type:"POST",
data:{
logid:18266,
buffer:["",window.atob(a.cgiData.biz),a.cgiData.appmsgid,a.cgiData.itemidx,a.cgiData.source,a.cgiData.subscene,1,a.cgiData.itemShowType,a.cgiData.sessionid,a.cgiData.enterid]
},
async:!1,
timeout:2e3
});
}),a;
});define("pages_new/common_share/video/report.js",["pages/utils.js","biz_wap/jsapi/core.js","common/utils.js","biz_wap/utils/localstorage.js","biz_wap/utils/device.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","biz_common/base64.js"],function(e){
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
T=e.StartTime;
break;

case 14:
f=e.StartTime;
break;

case 15:
if(!y)return;
var i=e.EndTime,n=k-y,s=i-y,a=i-k,o=e.extInfo,t=0===o.playCount&&o.previousCompletedSize>0,d=t?.2:g;
if(k&&n>0){
var r=window.__second_open__?21:24;
t&&(r=window.__second_open__?29:31),w.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:n
}
});
}
if(s>0){
var r=window.__second_open__?22:25;
t&&(r=window.__second_open__?27:28),w.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:s
}
}),console.log("[Video Save Speed] enterToPlayTime: "+s+" sid: "+r);
}
if(k&&a>0){
var r=window.__second_open__?23:26;
t&&(r=window.__second_open__?30:32),w.saveSpeeds({
sample:d,
uin:l,
pid:v,
speeds:{
sid:r,
time:a
}
});
}
b&&k&&w.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:34,
time:b-k
}
}),T&&b&&w.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:35,
time:T-b
}
}),i&&f&&w.saveSpeeds({
sample:g,
uin:l,
pid:v,
speeds:{
sid:36,
time:i-f
}
}),w.send(),y=0,console.log("[system]","是否预加载: "+t),console.log("[system]","extInfo: "+JSON.stringify(o));
}
}
function n(e){
w.saveSpeeds({
sample:e.sample||g,
uin:l,
pid:v,
speeds:{
sid:e.sid,
time:e.time
}
});
}
function s(e){
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
function a(){
window.top===window&&(S=[],_.addReport(function(e){
if(!d.isWcSlPage())return!1;
window.__second_open__&&window.__second_open_auth_time__&&s({
EventType:6,
StartTime:window.__second_open_auth_time__,
EndTime:window.__second_open_auth_time__
}),e||s({
EventType:2
});
var i=navigator.userAgent.match(/Mozilla.*?\((.*?)\)(\s|$)/),n=navigator.userAgent.match(/Language\/(.*?)(\s|$)/),a=0,t=window.networkType;
switch(t||(t=navigator.userAgent.match(/NetType\/(.*?)(\s|$)/),t=t&&t[1]&&t[1].toLowerCase()),
t){
case"wifi":
a=1;
break;

case"2g":
a=2;
break;

case"3g":
a=3;
break;

case"2g/3g":
a=3;
break;

case"4g":
a=4;
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
val:a+""
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
val:1*(window.scene||window.cgiData.scene||o.getParam("scene"))+""
},{
key:"SubScene",
val:1*(window.subscene||window.cgiData.subscene||o.getParam("subscene"))+""
}]
},_=S;
return S=[],{
reportUrl:"https://mp.weixin.qq.com/mp/videoh5report",
reportData:JSON.stringify({
report:_,
comm_fields:r
}),
method:"POST"
};
}));
}
var o=e("pages/utils.js"),t=e("biz_wap/jsapi/core.js"),d=e("common/utils.js"),r=e("biz_wap/utils/localstorage.js"),p=e("biz_wap/utils/device.js"),_=e("biz_wap/jsapi/leaveReport.js"),w=e("biz_wap/utils/wapsdk.js"),c=e("biz_common/base64.js").toBase64,m="function"==typeof window.btoa?window.btoa:c,l="";
try{
l=window.encodeURIComponent(m(window.user_uin));
}catch(u){
l="";
}
var v=2181,g=.02;
w.setBasicTime({
sample:g,
uin:l,
pid:v
});
var y=0,k=0,b=0,T=0,f=0,S=[];
return t.invoke("handleMPPageAction",{
action:"getEnterTime"
},function(e){
var i=e.clickTimeMs,n=r.get("__get_enter_video_common_time__");
i+""!==n?(r.set("__get_enter_video_common_time__",i),console.log("[Video Enter Time]",i)):i=0,
s({
EventType:1,
MiaoKai:window.__second_open__?1:0,
StartTime:i||window.enter_time||Date.now(),
EndTime:i||window.enter_time||Date.now()
});
}),window.addEventListener("load",function(){
s({
EventType:7
});
}),a(),{
saveSpeedsForVideo:n,
init19735Report:a,
add19735ExtData:s
};
});define("appmsg/emotion/emotion_pc.html.js",[],function(){
return'<div class="comment_primary_emotion_panel_wrp js_emotion_panel" style="display: none">\n  <div class="comment_primary_emotion_panel">\n    <ul class="comment_primary_emotion_list js_emotion_list">\n      <# list.forEach(function(item, index) { #>\n        <li class="comment_primary_emotion_item js_emotion_item" data-index="<#=index#>">\n          <span class="comment_primary_emotion" style="<#=item.bp#>">\n          </span>\n        </li>\n      <# }); #>\n    </ul>\n  </div>\n</div>\n';
});;define('widget/wx-widget/wx_emotion_panel.css', [], function(require, exports, module) {
	return ".comment_primary_emotion_list_mobile{padding:8px 0;overflow-y:scroll}.comment_primary_emotion_item{float:left;padding:4px;cursor:pointer;list-style:none}.comment_primary_emotion_item:hover{background-color:#f7f7f7}.comment_primary_emotion{display:block;width:24px;height:24px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/common\/emotion_panel\/icon_emotion_panel.2x55871f.png) no-repeat 0 0;background-size:24px}@media(prefers-color-scheme:dark){.comment_primary_emotion_item:hover{background-color:#202020}}";
});