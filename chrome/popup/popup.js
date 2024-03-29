const SunmoonHomeURL = "https://lily.sunmoon.ac.kr/MainDefault.aspx";
const SunmoonPotalURL = "https://lily.sunmoon.ac.kr/MainPortal.aspx";
const SunmoonLmsURL = "http://lms.sunmoon.ac.kr/";
const openSunmoonSwsURL = "https://sws.sunmoon.ac.kr/";
const openSunmoonCallURL = "http://info.sunmoon.ac.kr/PageN/content/facility_03.aspx";
const openSunmooncalendarURL = "https://lily.sunmoon.ac.kr/Page/Story/SMEvents.aspx";
const openSunmoonBusURL = "https://lily.sunmoon.ac.kr/Page/About/About08_04_01.aspx";
const openSunmoonNoticeURL = "https://lily.sunmoon.ac.kr/Page/Story/Notice.aspx";
const openSunmoonGuideURL = "https://info.sunmoon.ac.kr/MainDefaultN.aspx";
const openSunmoonWebMailURL = "https://mail.sunmoon.ac.kr/index.ds"
const openGmailURL = "https://mail.google.com/"
const everyTimeURL = "https://sunmoon.everytime.kr/"

function openURL(url) {
  chrome.tabs.create({ url });
}

document.getElementById("homeSunmoon").addEventListener("click", () => { openURL(SunmoonHomeURL) }, false);
document.getElementById("potalSunmoon").addEventListener("click", () => { openURL(SunmoonPotalURL) }, false);
document.getElementById("lmsSunmoon").addEventListener("click", () => { openURL(SunmoonLmsURL) }, false);
document.getElementById("swsSunmoon").addEventListener("click", () => { openURL(openSunmoonSwsURL) }, false);
document.getElementById("callSunmoon").addEventListener("click", () => { openURL(openSunmoonCallURL) }, false);
document.getElementById("calendarSunmoon").addEventListener("click", () => { openURL(openSunmooncalendarURL) }, false);
document.getElementById("busSunmoon").addEventListener("click", () => { openURL(openSunmoonBusURL) }, false);
document.getElementById("noticeSunmoon").addEventListener("click", () => { openURL(openSunmoonNoticeURL) }, false);
document.getElementById("guideSunmoon").addEventListener("click", () => { openURL(openSunmoonGuideURL) }, false);
document.getElementById("webMail").addEventListener("click", () => { openURL(openSunmoonWebMailURL) }, false);
document.getElementById("gMail").addEventListener("click", () => { openURL(openGmailURL) }, false);
document.getElementById("everyTime").addEventListener("click", () => { openURL(everyTimeURL) }, false)