const got = require('got')
const child_process = require("child_process");
const axios = require('axios');


async function  commonRequest(name,curl)  {
  // 通用请求

 await child_process.exec(curl, function(err, stdout, stderr) {
    
console.log(name, stdout);
    });
}

//京东京豆
//commonRequest(`京东京豆`,`curl -H "Host: api.m.jd.com" -H "Cookie: __jd_ref_cls=JingDou_SceneHome_SignIn; mba_muid=16759196286341879089113.1025.1690768966871; mba_sid=1025.7; __jda=122270672.16759196286341879089113.1675919628.1690726743.1690768235.112; __jdb=122270672.5.16759196286341879089113|112.1690768235; __jdc=122270672; __jdv=122270672%7Capi%7Ct_1001802371_207944_19637%7Cadrealizable%7C_2_app_0_837cb236762b4590bfeb1af6e16f779a-p_19637%7C1689494633000; pre_seq=4; pre_session=a3ac6d941ebb287b6d60429b638cf869d42304b4|1783; shshshfpa=faa8d114-55f4-9786-33ec-97aa610c2456-1667016591; shshshfpb=eGrmY8KdLEY_22aAOYB_pTDr6O1uAY90tDVULJRtBpweRolzJFTMSBwmS0jO081wmbgADiUYUNjA0CwBkP7vDpW_0ErvtPQk7_AHYfXY3ZBkVUvGMyYf6ClO3gtfVehOoRkE2CVfX2Gyt6nTqns3pUJAF_okhZiwsbvDqSfDbdVBnyz2KSvnCoJordc_-NDdk; unionwsws=%7B%22devicefinger%22%3A%22eidI12598122c7se%2BaYMEvzBTxC%2BB1n22INaIPmmDYUzkxskbcM%2Bxks7w8zidzfz%2FZamTnlkpXt3JYL%2BdD%2Fdy%2FheK9BTkut2KUI78p2CMTJ3on4nRy9m%22%7D; unpl=ADC_E27v9hYP3wNMv7doNOWFfNUiHZYRWtZ32YDpIlHSzuODb8tLofA3F4ewIHhVkd0oZWAVrilJEyUeCfEjF5MOttr5LwZRJD9mJ9mdbVsYzu0NY6fRXYyS291TIHNnAXdeZksFRFQz3aN79LyrIqHAJA%3D%3D%7CADC_ZKFF3HSlMMr6FgrkvbjHb%252f5oHMqCngRt0LJa0fUHf%252b%252bS7zho%252fzBG6CbQVTVU34Ns7zw4DbNykwGA9jYGbXFd7ECRIQA2CTsKRicwo%252faDyPu44hfDsxrEFuuMt1dLu1rjy%252fuhDlwMpjdvO7C3mjiyGqDQjctrEKGpyNHKhLyuYJgDkHmf2zYQKfmRDX6TZfF5Myfq1DBtAeZsilAmeMFAc8BvCBFpFixGuzxMc0InHGuEX25Q%252fPoXomXL2cp2%252fef%252bhCjJ9t15Ksw25rP6tVkZ6I3bLUHwJnxPeb31B%252fEyGDrEU9qNM4Ssr4RyoC6EVfVg4vOHrzAMWbkPUbvqwwyABImRAFtemOgxL63bFrjJm3RNrcedkZDoSArvD4KTMM%252bL26VkVOhZeyizh2HyA26z2zjNng7yebONDB%252f2EXkExQOSiiL22bbAWGHdaaKulDSwaIgeqp3a8q2zlS7HnPbj2cENiDyA31Nc0LTjj%252bamNqp%252b1el5g1hcunIkvMOOkALppDgPekMorBhaPxxW95equcRRZ0XIZKHF%252fhgzpBbY8lvf989Yfuw9S9YmFNJEyFRlAE%252frh8rmfTq2RDXny0I9kA%253d%253d; 3AB9D23F7A4B3C9B=AG7RTMDS26PWQLTLZHJHSBGXJV2DKNPJY4UX62ZMTYCL6PIE4QTXARFDCRNYOZEWXL6LXW6Z75CEXVRGQU2RI6FLFA; 3AB9D23F7A4B3CSS=jdd03AG7RTMDS26PWQLTLZHJHSBGXJV2DKNPJY4UX62ZMTYCL6PIE4QTXARFDCRNYOZEWXL6LXW6Z75CEXVRGQU2RI6FLFAAAAAMJVGXAOOYAAAAADM7GTQYJLE65UEX; _gia_d=1; pt_key=app_openAAJkxnFWADAE7NvCWFU2sd72_FzGOOTt211wVtn8qR5JJMoUIYiv7Zh1KaLvD1Vd0ZB_MW7Ijv4; pt_pin=118134207-196382; pwdt_id=118134207-196382; sid=05b27247a22e5ac3ee195059775ed4dw; shshshfpx=faa8d114-55f4-9786-33ec-97aa610c2456-1667016591; __wga=1689036754949.1689036754949.1688634489158.1678535657937.1.8; cid=8; retina=1; joyya=1689036566.0.32.11pph63; shshshfpv=JD0111d47dmldNCgG2by168903646565106ruMr12wGmFGv94OmBNDIr1KfSo9gWYJ-jqAiOwoMQUHE_0wGrRvJiB7wGZU11WiOo-EfG43n-3_bfo1fonCFKPIzVCCzuQef5Mxb2L9nUos1tw3r4e~tVs1ZfFGnGEo2cq7p/nPhbvjSHiQG09XRmuibyQlsI9WpaEzHYXP+xcRFF15Ye80hrrX5aeKnjtHwgFaVHG7wAQ==; sc_width=390; shshshfp=80824c4b42256a2588eaa56d34e48309; visitkey=51834783578584438; b_avif=1; b_dh=844; b_dpr=3; b_dw=390; b_webp=1; webp=1; abtest=20220428203011894_42" -H "accept: */*" -H "sec-fetch-site: same-site" -H "accept-language: zh-CN,zh-Hans;q=0.9" -H "sec-fetch-mode: no-cors" -H "user-agent: jdapp;iPhone;12.0.8;;;M/5.0;appBuild/168782;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22YJDrYzZuEJGnZWTsCtq3YtZuDtK0CtvsDtC4Y2Y4DtvuDNSzCNHsDK%3D%3D%22%2C%22sv%22%3A%22CJYkDI4n%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1690768920%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;" -H "referer: https://h5.m.jd.com/" -H "request-from: native" -H "sec-fetch-dest: script" --compressed "https://api.m.jd.com/client.action?functionId=signBeanAct&body=%7B%22fp%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22rnVersion%22%3A%223.9%22%7D&appid=ld&client=apple&clientVersion=12.0.8&networkType=wifi&osVersion=16.5.1&loginType=2&screen=390*753&uuid=a3ac6d941ebb287b6d60429b638cf869d42304b4&openudid=a3ac6d941ebb287b6d60429b638cf869d42304b4&d_model=iPhone13,2&jsonp=jsonp_1690768966877_12759"`)
//王者营地
//commonRequest(`王者营地`,`curl -H "Host: kohcamp.qq.com" -H "accept: */*" -H "sec-fetch-site: same-site" -H "access-control-request-method: POST" -H "sec-fetch-mode: cors" -H "accept-language: zh-CN,zh-Hans;q=0.9" -H "origin: https://camp.qq.com" -H "access-control-request-headers: accept-encrypt,algorithm,appid,areaid,camproleid,cclientversionname,content-type,csystem,encode,gameid,gameopenid,h5get,msdkencodeparam,msdktoken,noencrypt,openid,roleid,serverid,sig,source,timestamp,userid,version,x-client-proto" -H "user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;GameHelper;smobagamehelper,iphoneX" -H "referer: https://camp.qq.com/" -H "sec-fetch-dest: empty" --data-binary "" -X OPTIONS --compressed "https://kohcamp.qq.com/operation/action/signin"`)
//阿里云盘
//commonRequest(`阿里云`，`curl -H "Host: member.aliyundrive.com" -H "Cookie: isg=BDc32nGLH96WnptIcE7Bj2kJzC-B_Ate4K0p7YnkU4ZtOFd6kcybrvUKHB5my-PW; _nk_=t-2216291909665-52; _tb_token_=e3e761ae46335; cookie2=248691d19183dd71cf97c5c8c45b9918; csg=8bd6ac77; munb=2216291909665; t=279cd013c8ec3a0027ea891ba1f7fbe8; cna=3vZQHdcwR0gCAXwO4QXDxk0r" -H "content-type: application/json; charset=UTF-8" -H "authorization: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ODBlYmIyMGU0NjI0MjhiYjQ4Nzk2YmQ0YmNkZjUyMiIsImN1c3RvbUpzb24iOiJ7XCJjbGllbnRJZFwiOlwicEpaSW5OSE4yZFpXazhxZ1wiLFwiZG9tYWluSWRcIjpcImJqMjlcIixcInNjb3BlXCI6W1wiRFJJVkUuQUxMXCIsXCJGSUxFLkFMTFwiLFwiVklFVy5BTExcIixcIlNIQVJFLkFMTFwiLFwiU1RPUkFHRS5BTExcIixcIlNUT1JBR0VGSUxFLkxJU1RcIixcIlVTRVIuQUxMXCIsXCJCQVRDSFwiLFwiQUNDT1VOVC5BTExcIixcIklNQUdFLkFMTFwiLFwiSU5WSVRFLkFMTFwiLFwiU1lOQ01BUFBJTkcuTElTVFwiXSxcInJvbGVcIjpcInVzZXJcIixcInJlZlwiOlwiXCIsXCJkZXZpY2VfaWRcIjpcImNjYmVjOTdjMTU2MzQ2NmFhMmFmMTc3NzM4Njc1YzU0XCJ9IiwiZXhwIjoxNjkxMzc3NDY3LCJpYXQiOjE2OTEzNzAyMDd9.nqlJgB0SLLiNZFUc-6orS6LPuSXGNcnHdHhL10nc-1ZOppG6nxc3MRtro-E9ujOByTPaKz3fE18PpVN1kpaL-QN30uZ-uVr3SYehIcziEZGorwJVpxxCIZhILL8JvR-QpGSYnbKRlIoqbnTxRMdjTa2M1TYu_Bffl9EWLSbYH7o" -H "accept: */*" -H "x-signature: a679803d6f81c70b73d6eaae464fd0df37439e2ae221a54127d4c7cef6883d9f507e28c4b4687b29d4e5f80fbae134f309b10760f4bb1391a83336cf9cb1091d00" -H "x-umt: 5TQBvD9LPICWRBKJzWUDwIa9hjFoUyu0" -H "x-sign: izK9q4002xAALMX/KblRfkZPjuJxjMX8yOxJWo81ALx55uXkBrh2On9r9NReroMW3NXm1NZxs6RG/gGQlcWBuxfLF1zF7MX8xezF/M" -H "x-canary: client=web,app=other,version=v0.1.0" -H "x-sgext: JAdTrj4fYCBqwFYH5sRnS65mnmKNa51hn3CZYo1wn2WXYp1knmGYZY1jnmGYY55jnmOeY55jnmOecJ5wnnCeY41jnmOecJ5wnnCecJ5wnnCecJ5wnnCeY55jng==" -H "accept-language: zh-CN,zh-Hans;q=0.9" -H "x-mini-wua: iFgT2qEZqXON2VjVwpqB22VCN/jAsXuHcOXMSIr9I2uR9fEyLD76jWZdSm0XKnEM1FkRSjQqpgYpALvIvJMT5poyjwm2nJlBtX+bRqaa9LjpFTQBAxexCd86cO4BBowwx3aPublL6F4rOTCym3p8WORp+FH9Ri1W1Pv48YAPWYuGy4w==" -H "user-agent: AliApp(AYSD/4.9.1) com.alicloud.smartdrive/4.9.1 Version/16.6 Channel/201200 Language/zh-Hans-CN /iOS Mobile/iPhone13,2" -H "x-device-id: yWYB/4xLPC/bcBKJtQNLn1D5MntzC+M8" -H "referer: https://aliyundrive.com/" --data-binary "{\"signInDay\":\"114\"}" --compressed "https://member.aliyundrive.com/v2/activity/sign_in_task_reward?_rx-s=mobile"`)
axios.post(
 "https://api.m.jd.com/client.action?functionId=signBeanAct&appid=ld&client=apple",
       {
       
           
        },
  {
headers: {
    Cookie: 'pt_key=app_openAAJk00Y3ADDEK4sZn_dBws3IomaxSbITSP1Xq_cJxnSwIYc5YfZGfUdH1njEa2sfAxgpZq9hMs0;pt_pin=118134207-196382'
  }}
).then(res=>{
  console.log(res);
})
