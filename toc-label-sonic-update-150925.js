﻿tocLabel.startNo=1,tocLabel.loadNumber=50,tocLabel.total=0,tocLabel.getLabel="N",tocLabel.dateNew="",tocLabel.labelSet=[],tocLabel.labelNow="",tocLabel.json=function(a){var g,h,i,j,k,l,m,n,o,b=[],c=[],d=[],e=tocLabel.labelSet,f=a.feed.entry.length;if(tocLabel.total=a.feed.openSearch$totalResults.$t,"Y"==tocLabel.getLabel){for(k=a.feed.entry[f-1],tocLabel.dateNew=m=k.published.$t.substring(0,10),j=a.feed.category,f=j.length,g=0;f>g;g++)e[g]=j[g].term;e.sort(),tocLabel.labelSet=e,tocLabel.divInit(e)}else{for(g=0;f>g;g++){for(k=a.feed.entry[g],l=k.title.$t,m=k.published.$t.substring(0,10),i=k.link.length,h=0;i>h;h++)if("alternate"==k.link[h].rel){n=k.link[h].href;break}b.push(l),d.push(m),c.push(n)}o=tocLabel.labelNow,tocLabel.main(b,c,d,o)}},tocLabel.divInit=function(a){var h,i,j,k,b=tocLabel.include,c=tocLabel.exclude,d=a.length,e="",f=function(a){var d,c=b.length;for(d=0;c>d;d++)if(a.indexOf(b[d])>-1)return!0;return!1},g=function(a){var d,b=c.length;for(d=0;b>d;d++)if(a.indexOf(c[d])>-1)return!0;return!1};for($("#TOC-label").html(""),h=0;d>h;h++)j=unescape(a[h]),(!b.length||f(j))&&(g(j)||(e||(i=a[h]),k=j.split("-")[j.split("-").length-1],e+="<div class='tocLabel'>",e+="<span class='tocLabelTitle'>"+k+"</span>",e+="<div class='tocLabelToggle' id='tocLabel"+h+"'></div><div style='clear: both;'></div></div>"));for($("#TOC-label").append(e),h=0;d>h;h++)$("#tocLabel"+h).prev().on("click",function(b){return function(){tocLabel.init(a[b])}}(h));if(tocLabel.getLabel="N",tocLabel.showFirstLabel&&"N"==tocLabel.showFirstLabel||tocLabel.init(i),tocLabel.showNewTitle&&"Y"==tocLabel.showNewTitle)for(h=0;d>h;h++)$.getScript("/feeds/posts/summary/-/"+a[h]+"?max-results=1&start-index=1&alt=json-in-script&callback=tocLabel.newTitle")},tocLabel.newTitle=function(a){var f,g,h,i,b=a.feed.link,c=b.length,d=a.feed.entry[0],e=d.published.$t.substring(0,10);for(f=0;c>f;f++)if("alternate"==b[f].rel){g=b[f].href;break}h=g.lastIndexOf("/"),i=decodeURIComponent(g.substring(h+1)),e>=tocLabel.dateNew&&$("#tocLabel"+tocLabel.labelSet.indexOf(i)).before("<span class='tocLabelNewText'>"+tocLabel.newText+"</span>")},tocLabel.main=function(a,b,c,d){var j,k,e=b.length,f=$("#tocLabel"+tocLabel.labelSet.indexOf(d)),g=tocLabel.newText,h="",i="";for(g=0===g.search("http://")?"<img src='"+g+"'/>":g,i+="<ol>",j=0;e>j;j++)k=c[j],h=k>=tocLabel.dateNew?"<span class='tocNewText'>"+g+"</span>":"",i+="<li><a href='"+b[j]+"' target='_blank'>"+a[j]+"</a>"+h+"</li>";return i+="</ol>",1==tocLabel.startNo&&f.html(""),f.append(i).parent().children(0).off("click").on("click",function(){$(this).nextAll("div.tocLabelToggle")[tocLabel.toggleEffect]()}),tocLabel.startNo=tocLabel.loadNumber+tocLabel.startNo,tocLabel.total<tocLabel.startNo?void(tocLabel.startNo=1):void(tocLabel.total>=tocLabel.startNo&&tocLabel.init(d))};tocLabel.init = function(label) {var _0xf3aa=["\x47\x20\x30\x3D\x22\x3C\x36\x20\x38\x3D\x27\x31\x39\x2D\x76\x3A\x20\x77\x3B\x27\x3E\x3C\x78\x20\x38\x3D\x27\x79\x2D\x7A\x3A\x20\x41\x3B\x20\x43\x3A\x20\x62\x3B\x20\x49\x2D\x31\x31\x3A\x20\x62\x3B\x27\x20\x31\x33\x3D\x27\x31\x34\x3A\x2F\x2F\x31\x35\x2E\x31\x36\x2E\x65\x2F\x2D\x31\x6C\x2F\x6C\x2F\x6D\x2F\x6F\x2F\x70\x2F\x71\x2E\x72\x27\x2F\x3E\x26\x23\x73\x3B\x74\x20\x75\x2E\x2E\x2E\x3C\x2F\x36\x3E\x22\x2C\x34\x2C\x35\x2C\x37\x3B\x64\x28\x21\x33\x29\x7B\x24\x28\x22\x23\x63\x2D\x33\x22\x29\x2E\x30\x28\x30\x29\x3B\x24\x28\x42\x28\x29\x7B\x24\x28\x22\x23\x39\x22\x29\x2E\x44\x28\x29\x3B\x30\x3D\x22\x3C\x36\x20\x45\x3D\x27\x39\x27\x3E\x3C\x2F\x36\x3E\x22\x3B\x24\x28\x22\x23\x63\x2D\x33\x22\x29\x2E\x46\x28\x30\x29\x3B\x30\x3D\x22\x3C\x61\x20\x48\x3D\x27\x6B\x3A\x2F\x2F\x4A\x2E\x4B\x2E\x65\x2F\x4C\x2F\x4D\x2F\x4E\x2D\x4F\x2D\x33\x2D\x50\x2D\x51\x2E\x30\x27\x20\x52\x3D\x27\x53\x27\x20\x38\x3D\x27\x54\x2D\x55\x3A\x20\x62\x3B\x27\x20\x56\x3D\x27\u6587\u7AE0\u5217\u8868\u6975\u901F\u7248\uFE4D\u4F9D\u6A19\u7C64\u6392\u5217\x5C\x6E\u7A0B\u5F0F\u8A2D\u8A08\uFF1A\x57\x20\x58\x27\x3E\x5A\x20\x63\x20\x31\x30\x20\x33\x3C\x2F\x61\x3E\x22\x3B\x24\x28\x22\x23\x39\x22\x29\x2E\x30\x28\x30\x29\x7D\x29\x3B\x34\x3D\x32\x2E\x31\x32\x3B\x35\x3D\x31\x3B\x37\x3D\x22\x2F\x67\x2F\x68\x2F\x69\x22\x3B\x32\x2E\x31\x37\x3D\x22\x59\x22\x7D\x31\x38\x7B\x64\x28\x32\x2E\x6A\x3D\x3D\x31\x29\x7B\x24\x28\x22\x23\x32\x22\x2B\x32\x2E\x31\x61\x2E\x31\x62\x28\x33\x29\x29\x2E\x30\x28\x30\x29\x2E\x31\x63\x28\x29\x7D\x34\x3D\x31\x64\x3B\x35\x3D\x32\x2E\x6A\x3B\x37\x3D\x22\x2F\x67\x2F\x68\x2F\x69\x2F\x2D\x2F\x22\x2B\x33\x3B\x32\x2E\x31\x65\x3D\x33\x7D\x24\x2E\x31\x66\x28\x37\x2B\x22\x3F\x31\x67\x2D\x31\x68\x3D\x22\x2B\x34\x2B\x22\x26\x31\x69\x2D\x31\x6A\x3D\x22\x2B\x35\x2B\x22\x26\x31\x6B\x3D\x66\x2D\x31\x6D\x2D\x31\x6E\x26\x31\x6F\x3D\x32\x2E\x66\x22\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x68\x74\x6D\x6C\x7C\x7C\x74\x6F\x63\x4C\x61\x62\x65\x6C\x7C\x6C\x61\x62\x65\x6C\x7C\x6D\x61\x78\x52\x65\x73\x75\x6C\x74\x7C\x73\x74\x61\x72\x74\x49\x6E\x64\x65\x78\x7C\x64\x69\x76\x7C\x66\x65\x65\x64\x55\x72\x6C\x7C\x73\x74\x79\x6C\x65\x7C\x74\x6F\x63\x49\x6E\x66\x6F\x7C\x7C\x6E\x6F\x6E\x65\x7C\x54\x4F\x43\x7C\x69\x66\x7C\x63\x6F\x6D\x7C\x6A\x73\x6F\x6E\x7C\x66\x65\x65\x64\x73\x7C\x70\x6F\x73\x74\x73\x7C\x73\x75\x6D\x6D\x61\x72\x79\x7C\x73\x74\x61\x72\x74\x4E\x6F\x7C\x68\x74\x74\x70\x7C\x54\x36\x79\x66\x4D\x7A\x36\x50\x46\x52\x49\x7C\x41\x41\x41\x41\x41\x41\x41\x41\x43\x6B\x38\x7C\x7C\x46\x72\x6E\x76\x6B\x5F\x67\x39\x64\x54\x45\x7C\x73\x31\x36\x30\x30\x7C\x42\x69\x67\x5F\x46\x6C\x6F\x77\x65\x72\x7C\x67\x69\x66\x7C\x31\x32\x32\x38\x38\x7C\x70\x6C\x65\x61\x73\x65\x7C\x77\x61\x69\x74\x7C\x6C\x65\x66\x74\x7C\x32\x30\x70\x78\x7C\x69\x6D\x67\x7C\x76\x65\x72\x74\x69\x63\x61\x6C\x7C\x61\x6C\x69\x67\x6E\x7C\x6D\x69\x64\x64\x6C\x65\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x62\x6F\x72\x64\x65\x72\x7C\x72\x65\x6D\x6F\x76\x65\x7C\x69\x64\x7C\x61\x66\x74\x65\x72\x7C\x76\x61\x72\x7C\x68\x72\x65\x66\x7C\x62\x6F\x78\x7C\x77\x77\x77\x7C\x77\x66\x75\x62\x6C\x6F\x67\x7C\x32\x30\x31\x35\x7C\x30\x39\x7C\x62\x6C\x6F\x67\x67\x65\x72\x7C\x74\x6F\x63\x7C\x73\x6F\x6E\x69\x63\x7C\x75\x70\x64\x61\x74\x65\x7C\x74\x61\x72\x67\x65\x74\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x74\x65\x78\x74\x7C\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x7C\x74\x69\x74\x6C\x65\x7C\x57\x46\x55\x7C\x42\x4C\x4F\x47\x7C\x7C\x42\x6C\x6F\x67\x67\x65\x72\x7C\x62\x79\x7C\x73\x68\x61\x64\x6F\x77\x7C\x6E\x65\x77\x50\x6F\x73\x74\x7C\x73\x72\x63\x7C\x68\x74\x74\x70\x73\x7C\x6C\x68\x33\x7C\x67\x6F\x6F\x67\x6C\x65\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x67\x65\x74\x4C\x61\x62\x65\x6C\x7C\x65\x6C\x73\x65\x7C\x6D\x61\x72\x67\x69\x6E\x7C\x6C\x61\x62\x65\x6C\x53\x65\x74\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x66\x61\x64\x65\x49\x6E\x7C\x35\x30\x7C\x6C\x61\x62\x65\x6C\x4E\x6F\x77\x7C\x67\x65\x74\x53\x63\x72\x69\x70\x74\x7C\x6D\x61\x78\x7C\x72\x65\x73\x75\x6C\x74\x73\x7C\x73\x74\x61\x72\x74\x7C\x69\x6E\x64\x65\x78\x7C\x61\x6C\x74\x7C\x57\x62\x39\x35\x6B\x56\x30\x69\x78\x6E\x55\x7C\x69\x6E\x7C\x73\x63\x72\x69\x70\x74\x7C\x63\x61\x6C\x6C\x62\x61\x63\x6B","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x1005x1,_0x1005x2,_0x1005x3,_0x1005x4,_0x1005x5,_0x1005x6){_0x1005x5=function(_0x1005x3){return (_0x1005x3<_0x1005x2?_0xf3aa[4]:_0x1005x5(parseInt(_0x1005x3/_0x1005x2)))+((_0x1005x3=_0x1005x3%_0x1005x2)>35?String[_0xf3aa[5]](_0x1005x3+29):_0x1005x3.toString(36))};if(!_0xf3aa[4][_0xf3aa[6]](/^/,String)){while(_0x1005x3--){_0x1005x6[_0x1005x5(_0x1005x3)]=_0x1005x4[_0x1005x3]||_0x1005x5(_0x1005x3)};_0x1005x4=[function(_0x1005x5){return _0x1005x6[_0x1005x5]}];_0x1005x5=function(){return _0xf3aa[7]};_0x1005x3=1;};while(_0x1005x3--){if(_0x1005x4[_0x1005x3]){_0x1005x1=_0x1005x1[_0xf3aa[6]]( new RegExp(_0xf3aa[8]+_0x1005x5(_0x1005x3)+_0xf3aa[8],_0xf3aa[9]),_0x1005x4[_0x1005x3])}};return _0x1005x1;}(_0xf3aa[0],62,87,_0xf3aa[3][_0xf3aa[2]](_0xf3aa[1]),0,{}));};tocLabel.init();