var doms={audio:document.querySelector("audio"),container:document.querySelector(".container"),lrcList:document.querySelector(".lrc-list")};function parseLrc(){for(var e=lrc.split("\n"),t=[],r=0;r<e.length;r++){var i=e[r].split("]"),n={time:parseTime(i[0].substring(1)),words:i[1]};t.push(n)}return t}function parseTime(e){var t=e.split(":");return 60*+t[0]+ +t[1]}var lrcData=parseLrc();function findIndex(){const e=doms.audio.currentTime;for(let t=0;t<lrcData.length;t++)if(e<=lrcData[t].time)return t-1;return lrcData.length-1}function createLrcElements(){let e=document.createDocumentFragment();for(let t=0;t<lrcData.length;t++){const r=document.createElement("li");r.textContent=lrcData[t].words,e.appendChild(r)}doms.lrcList.appendChild(e)}createLrcElements();let containerHeight=doms.container.clientHeight,liHeight=doms.lrcList.children[0].clientHeight,maxOffset=doms.lrcList.clientHeight-containerHeight;function setOffset(){let e=findIndex(),t=e*liHeight+liHeight/2-containerHeight/2;t<0&&(t=0),t>maxOffset&&(t=maxOffset);let r=doms.lrcList.querySelector(".active");r&&r.classList.remove("active"),doms.lrcList.style.transform=`translateY(-${t}px`;let i=doms.lrcList.children[e];i&&i.classList.add("active")}doms.audio.addEventListener("timeupdate",setOffset);