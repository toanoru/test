/*******************************************
* WYB Comment List
* Copyright (c) 2011 WFU BLOG
* Publish : 2014-1-3
* All rights reserved.
* This program is free to use, but the ban on selling behavior.
*
* WYB 留言列表__表情符號
*
* 保留所有權利。
* 本程式可任意使用，但是禁止販售行為。
* 欲編輯、修改本程式，記得儲存的格式要選 unicode。
*
* WFU Blog : http://wayne-fu.blogspot.com/
***********************************/

function PushListTable(pp,pn,pt,time,pu,pti,pc,rn){
  var ps,pst;
  if(pp==1){
    ps="style='color:#e69138; border:#e69138 1px solid; float: left;'";
    pst="推";
  }
  if(pp==2){
    ps="style='color:#3d85c6; border:#3d85c6 1px solid; float: left;'";
    pst="→";
  } 
  if(pp==3){
    ps="style='color:#6aa84f; border:#6aa84f 1px solid; float: left;'";
    pst="噓";
  }
  if(pp==4){
    ps="style='color:#cc0000; border:#cc0000 1px solid; float: left;'";
    pst="？";
  }
  if(pp==5){
    ps="style='color:#98245E; border:#98245E 1px solid; float: left;'";
    pst="➥";
    rn = " " + opener.WYB_prog.replyText + " <span style='color: #0b5394;'>" + rn + "</span>";
  }
  if(pc) {
    pn = "<a href='" + pc + "' target='_blank' style='text-decoration: none;'>" + pn + "</a>";
  }
  if(pti == "即時留言板") {pti = ""}
  else {pti = "-- <a href='"+ pu +"' target='_blank'>"+ pti +"</a> ";
  }
  var html = "<tr><td style='border-bottom: dotted 1px #ccc;'><span style='float:right;'> "+ pti +"～ <i>"+ time +"</i></span><span "+ ps +">"+ pst +"</span><div style='margin-left: 30px'><span style='color: #0b5394;'><b>"+ pn +"</b></span>"+ rn +"：<span style='word-wrap:break-word;'>"+ pt +"</span></div></td></tr>";
  return html;
}

function PushListMain(json) {
    var a = json.feed.entry.length,
        PostUrl = [],
       PushPost = [],
     PushName = [],
     PushText = [],
     PushTime = [],
     PushTitle = [],
     PushContact = [],
     ReplyName = [];

    for (var i = 0; i < a; i++) {
var entry = json.feed.entry[i],
ipush = (entry.gsx$ipush) ? entry.gsx$ipush.$t : "",
push = (entry.gsx$push) ? entry.gsx$push.$t : "",
       pu = entry.gsx$url.$t,
       pp = ipush || push,
       pn = unescape(entry.gsx$name.$t),
       pt = unescape(entry.gsx$text.$t),
       pti = unescape(entry.gsx$title.$t),
       time = entry.gsx$時間戳記.$t,
       pc = entry.gsx$contact.$t,
       rn = unescape(entry.gsx$temp.$t);
      
      PostUrl.push(pu); 
      PushPost.push(pp);
      PushName.push(pn);
      PushText.push(pt);
      PushTime.push(time);
      PushContact.push(pc);
      PushTitle.push(pti);
      ReplyName.push(rn);
    }

    var WebTitle = opener.document.title;
    var html = "<div style='background:url(http://lh6.ggpht.com/_aBGIyeaH_hM/TQbqkfsmkjI/AAAAAAAAA8g/vqz3hYUma9I/bg_white.jpg);'><center style='color: #073763; font-size: 18pt; font-family: \"標楷體\"; font-weight: bold;'>"+ WebTitle +" 留言列表</center><div style='text-align:right; font-size: 10pt;'>Designed By <a href=\"http://wayne-fu.blogspot.com/\" target=\"_blank\">WFU BLOG</a></div><p/><table valign='middle' width='100%'>";
    
    for(var i=0; i<a; i++){
      html += PushListTable(PushPost[i],PushName[i],PushText[i],PushTime[i],PostUrl[i],PushTitle[i],PushContact[i],ReplyName[i]);
    }

    html += "</table></div>";
    document.getElementById("WyCommentList").innerHTML = opener.WYB_prog.emotion(html);
}

function PushListJson(){
  var a = window.location.hostname,
    b, c, url;
  if (opener.WYB_prog.homepage) {url = opener.WYB_prog.homepage;}
  else if (a.search("blogspot") > 0) {
    b = a.lastIndexOf(".");
    c = a.substring(0, b);
    url = "http://" + c + ".com";
  } else {
    url = a;
  }

  document.write("<div id='WyCommentList'><center><img style='vertical-align:middle' src='https://lh3.googleusercontent.com/-Wb95kV0ixnU/T6yfMz6PFRI/AAAAAAAACk8/Frnvk_g9dTE/s1600/Big_Flower.gif'/>&#12288;please wait...</center></div>")
  document.write("<scr"+"ipt type='text/javascript' src='https://spreadsheets.google.com/feeds/list/"+ opener.WYB_prog.sheetFeed +"/od6/public/values?hl=zh_TW&q="+url+"&alt=json-in-script&callback=PushListMain'></sc"+"ript>")
}
PushListJson();