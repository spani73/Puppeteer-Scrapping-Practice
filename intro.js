const puppeteer = require("puppeteer");
let page;
const browserPromise = puppeteer.launch({headless:false,slowMo:true,defaultViewport:null,args:["--start-maximized"]});
browserPromise.then(function(browser){
    const pagesArrpromise = browser.pages();//currently opened tab
    return pagesArrpromise;
}).then(function(browserPages){
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com");
    return gotoPromise;
}).then(function(){
    //wait for the page to appear
    let waitpagepromise  = page.waitForSelector("input[type = 'text']",{visible:true});
    return waitpagepromise;
}).then(function(){
    //type any element on that page
    let keysspromise = page.type("input[type = 'text']","pepcoding");
    return keysspromise;
}).then(function(){
    //page.keyboard is used to type special characters
    let enterpressed = page.keyboard.press("Enter");
    return enterpressed;
}).then(function(){
    let elempromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
    return elempromise;
}).then(function(){
    let keysWillBeSent = page.click("h3.LC20lb.MBeuO.DKV0Md");
    return keysWillBeSent;
}).then(function(){
    let waitingformodal = page.waitForSelector("h3#lp_modal_close",{visible:true});
    return waitingformodal;
}).then(function(){
    let clickmodal = page.click("h3#lp_modal_close");
    return clickmodal;
}).catch(function(err){
    console.log(err);
})

console.log("After");