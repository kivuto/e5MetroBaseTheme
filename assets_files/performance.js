var __csm_PF=function(){var b=null,c=true,d=false;this._csm_CrossDomainChecker=function(f,h){var b="/",a=this;a.inited=d;a.pageProtocol="";a.pageDomain="";a.documentDomain="";a.documentDomainLength=-1;a.RemoveDefaultPort=function(a){var b=a.lastIndexOf(":80");return-1!=b?a.substr(0,b):a};var e=f.indexOf("://");if(-1!=e){a.pageProtocol=f.substr(0,e);var g=f.indexOf(b,e+3);if(-1!=g)g==f.length-1;a.pageDomain=a.RemoveDefaultPort(f.substr(e+3,g-e-3)).toLowerCase();a.documentDomain=a.RemoveDefaultPort(h).toLowerCase();a.documentDomainLength=a.documentDomain.length;if(0==a.documentDomainLength)a.documentDomainLength=-1;a.inited=c}a.CompareURLForCrossDomain=function(a){var g=this;if(d==g.inited)return d;var e=a.indexOf("://");if(-1==e)if(a.charAt(0)!=b||a.charAt(1)!=b)return c;if(a.charAt(0)!=b||a.charAt(1)!=b){var h=a.substr(0,e);if(h!=g.pageProtocol)return d}var f=a.indexOf(b,e+3);f=-1!=f?f:a.length-1;var i=g.RemoveDefaultPort(a.substr(e+3,f-e-3)).toLowerCase();return i==g.pageDomain?c:d}};var a={CrossDomainChecker:new this._csm_CrossDomainChecker(document.URL,document.domain),AjaxRequestObject:new __csm_st.AjaxRequestObject,scriptsCollectingLimit:__csm_st.Limits.GetScriptsCountLimit(),cssCollectingLimit:__csm_st.Limits.GetCssCountLimit(),htcCollectingLimit:__csm_st.Limits.GetHtcCountLimit(),cssRulesCollectingLimit:__csm_st.Limits.GetCssRulesCountLimit(),Codes:{_ok:"OK",_none:"none",_invalidContent:"invalidContent",_XDomain:"XDomain",_unknownError:"UnknownError"},NeedToIncludeContentItem:function(f,e,b){var a=d;if(e)if(b){if(f>=__csm_pa.D1.A27)a=c}else a=c;return a},GetSizeBySrc:function(g,j){var e={code:a.Codes._unknownError,_size:-1};if(a.CrossDomainChecker.CompareURLForCrossDomain(g)){var f=a.AjaxRequestObject.Instance();if(f!=b)try{while(g.indexOf('"')>-1)g=g.replace('"',"");f.open("GET",g,d);f.setRequestHeader("Connection","Keep-Alive");f.send(b);var m=f.status;if(200==m){for(var l=f.getResponseHeader("Content-Type").toLowerCase(),k=d,n=j.length,i=0;i<n;i++)if(l.indexOf(j[i])>-1){k=c;break}if(k){var h=f.getResponseHeader("Content-length");if(h!=b&&h!="")e._size=parseInt(h);else e._size=f.responseText.length;e.code=a.Codes._ok}else{e.code=a.Codes._invalidContent;e._size=-1}}}catch(o){e.code=a.Codes._unknownError;e._errorMessage=o.message;e._size=-1}}else{e.code=a.Codes._XDomain;e._size=-1}if(isNaN(e._size))e._size=-1;return e},GetImageLoadingTime:function(h,c){var g=+new Date,i=g-c,b={startTime:-1,endTime:-1,loadingTime:-1,isCached:-1};if(typeof __csm_pr!=__csm_st.Constants.udf&&typeof __csm_pr.ContentManager!=__csm_st.Constants.udf){var a=__csm_pr.ContentManager.imagesManager[h];if(a){var f=typeof a.s!=__csm_st.Constants.udf,e=typeof a.e!=__csm_st.Constants.udf;if(f&&e&&a.e>=a.s){var d=__csm_st.ExcludedFunctions.GetBlocksDuration(c,a.s);b.startTime=a.s-c-d;b.endTime=a.e-c-d;b.loadingTime=a.e-a.s}else if(!f&&e){var d=__csm_st.ExcludedFunctions.GetBlocksDuration(c,a.e);b.endTime=a.e-c-d;b.loadingTime=-1}else if(f&&!e){var d=__csm_st.ExcludedFunctions.GetBlocksDuration(c,a.s);b.startTime=a.s-c-d;b.loadingTime=-1}else{b.loadingTime=-1;b.startTime=-1}}}return b},GetImages:function(){return document.images},GetImageSize:function(e){var a=-1,b=10,c=d;while(b>0&&!c){a=e.fileSize;c=a>-1;b--}a=parseInt(a);return a},GetImagesInfo:function(){var e={totalSize:0,totalCount:0,domTotalCount:0,imagesInfo:[],beforeDomCount:0,beforeDomSize:0},k=a.GetImages(),o=k.length;e.domTotalCount=o;var r=__csm_pa.B21.getTime(),n=__csm_st.ExcludedFunctions.GetReducedIntervalTime(__csm_st.A70.t7,r);if(o>0){var s=d;if(typeof k[0].fileSize!=__csm_st.Constants.udf)s=c;for(var v=[],u=0,w=d,p=d,m=d,x=Math.min(o,__csm_st.A70.imagesCollectingLimit),l=0;l<x;l++){var i=k[l].src,t=d;t=typeof i!=__csm_st.Constants.udf&&i!=b&&i.length>0;if(t==d)continue;var q=i.toLowerCase();if(__csm_st.Common.GetIndexOf(v,q)==-1){v.push(q);var f=a.GetImageLoadingTime(q,r),g=-1;if(f.startTime>=0&&f.loadingTime>=0)g=f.startTime+f.loadingTime;else if(f.endTime>=0&&f.loadingTime==-1)g=f.endTime;var z=f.loadingTime,h=-1;if(s)h=a.GetImageSize(k[l]);var j={code:a.Codes._none,_size:-1};if(h!=-1){j._size=h;j.code=a.Codes._ok}else if(__csm_pa.D1.A24)j=a.GetSizeBySrc(i,["image"]);var y=c;switch(j.code){case a.Codes._ok:h=j._size;e.totalSize+=parseInt(h);if(g>-1&&g<=n){e.beforeDomCount++;e.beforeDomSize+=h}e.totalCount++;break;case a.Codes._none:e.totalCount++;if(h==-1){w=c;if(g>-1&&g<=n){e.beforeDomCount++;p=c}else m=c}else e.totalSize+=parseInt(h);break;case a.Codes._XDomain:case a.Codes._unknownError:case a.Codes._invalidContent:w=c;if(g>-1&&g<=n){e.beforeDomCount++;p=c}else m=c;e.totalCount++}if(y){e.imagesInfo[u]={__$$type:"ImageInfo",__source:i,__fileSize:h,__loadingTime:z,__isCached:f.isCached,__startTime:f.startTime,__endTime:g};u++}}}if(p)e.beforeDomSize=-1*e.beforeDomSize;if(m)e.totalSize=-1*e.totalSize}return e},GetScriptsInfo:function(){var e={totalSize:0,totalCount:0,scriptsInfo:[],inlineJavaScript:0},g=document.getElementsByTagName("script"),j=g.length;e.domTotalCount=j;if(j>0){var n=0,o=[],p=d,m=Math.min(a.scriptsCollectingLimit,j),r=__csm_st.GetUxScriptsCount();m+=r;for(var f=0;f<m;f++)if(b!=g[f]){var h=new String;h=g[f].src;var k=h.toLowerCase(),s=g[f].id;if(__csm_st.Common.GetIndexOf(o,k)==-1)if(h.length>0&&h!="."&&k.indexOf("javascript:")!=0&&s.indexOf("__csm")==-1){o.push(k);var l=-1,i={code:a.Codes._none,_size:-1};if(__csm_pa.D1.A24)i=a.GetSizeBySrc(h,["script","text/html"]);var q=c;switch(i.code){case a.Codes._ok:l=i._size;e.totalSize+=parseInt(l);e.totalCount++;break;case a.Codes._none:case a.Codes._XDomain:case a.Codes._unknownError:case a.Codes._invalidContent:e.totalCount++;p=c}if(q){e.scriptsInfo[n]={__$$type:"ScriptInfo",__source:g[f].src,__fileSize:l};n++}}}if(p)e.totalSize=-1*e.totalSize}return e},BehaviourUrls:[],ReachedRulesLimit:d,BehaviourUrlsLowerCase:[],CollectRules:function(g,m){if(m==d&&!__csm_st.DisabledContent.HtcDisabled()){var e=b;try{var n=typeof g.rules,o=typeof g.cssRules;if(__csm_st.Common.GetIndexOf([__csm_st.Constants.udf,"unknown"],n)==-1)e=g.rules;else if(__csm_st.Common.GetIndexOf([__csm_st.Constants.udf,"unknown"],o)==-1)e=g.cssRules}catch(p){}if(e!=b)for(var l=a.cssRulesCollectingLimit-1,h=0;h<e.length;h++){var k=e[h].style;if(k!=b){var f=new String;f=k.behavior;if(f!=b&&f.toLowerCase().indexOf("url")==0){var i=f.substr(4,f.length-5),j=i.toLowerCase();if(__csm_st.Common.GetIndexOf(a.BehaviourUrlsLowerCase,j)==-1&&i.indexOf("#")!=0){a.BehaviourUrls.push(i);a.BehaviourUrlsLowerCase.push(j)}}}if(h==l){a.ReachedRulesLimit=c;break}}}},GetCssInfo:function(){var p=__csm_st.BrowserDetect,v=p.isFirefox(),w=p.isExplorer(),f={totalSize:0,totalCount:0,cssStyles:[]},i=document.styleSheets,l=i.length;f.domTotalCount=l;a.BehaviourUrls=[];a.BehaviourUrlsLowerCase=[];if(l>0){for(var o=0,q=[],n=d,s=Math.min(a.cssCollectingLimit,l),h=0;h<s;h++){var t=w;if(i[h]!=b){var g=i[h].href,k=d;if(g!=b&&g!=""){if(g.length>3){var m=g.toLowerCase();if(!__csm_st.StringUtils.EndsWith(g,"__ux.css")){var u=m.substr(g.length-3,3);if(u=="css"&&__csm_st.Common.GetIndexOf(q,m)==-1){k=c;q.push(m)}}}}else k=c;if(k){a.CollectRules(i[h],v);if(g!=b&&g!=""){var e=-1;if(t)try{e=i[h].cssText.length;e=parseInt(e);if(isNaN(e))e=-1}catch(x){}var j={code:a.Codes._none,_size:-1};if(e==-1&&__csm_pa.D1.A24)j=a.GetSizeBySrc(g,["css"]);var r=c;switch(j.code){case a.Codes._ok:e=j._size;f.totalSize+=parseInt(e);f.totalCount++;break;case a.Codes._none:f.totalCount++;if(e==-1)n=c;else f.totalSize+=parseInt(e);break;case a.Codes._XDomain:case a.Codes._unknownError:case a.Codes._invalidContent:f.totalCount++;n=c}if(r){f.cssStyles[o]={__$$type:"CssStyleInfo",__source:g,__fileSize:e};o++}}}}}if(n)f.totalSize=-1*f.totalSize}return f},GetHtcInfo:function(n){var e={totalSize:0,totalCount:0,htcInfo:[],domTotalCount:0},f=a.BehaviourUrls;if(typeof f!=__csm_st.Constants.udf&&f!=b){var k=0,l=d,j=f.length;e.domTotalCount=j;for(var p=Math.min(a.htcCollectingLimit,j),i=0;i<p;i++){var m=f[i],g=-1,h={code:a.Codes._none,_size:-1};if(__csm_pa.D1.A24)h=a.GetSizeBySrc(m,["component"]);var o=c;switch(h.code){case a.Codes._ok:g=h._size;e.totalSize+=parseInt(g);e.totalCount++;break;case a.Codes._none:case a.Codes._XDomain:case a.Codes._unknownError:case a.Codes._invalidContent:e.totalCount++;l=c}var q=a.NeedToIncludeContentItem(g,o,n);if(q){e.htcInfo[k]={__$$type:"HtcInfo",__source:m,__fileSize:g};k++}}f=b;delete a.BehaviourUrls;a.BehaviourUrls=[];if(l)e.totalSize=-1*e.totalSize}return e},GetViewStateSize:function(){var h="__ViewState",g="__VIEWSTATE",e={viewStateSize:0};try{var f=0,c=document.getElementById(g);if(c==b)c=document.getElementById(h);if(c!=b&&c.value!=b)f+=c.value.length;var i=document.getElementById("__VIEWSTATEFIELDCOUNT");if(i!=b)for(var j=parseInt(i.value),d=1;d<j;d++){var a=document.getElementById(g+d);if(a==b)a=document.getElementById(h+d);if(a!=b&&a.value!=b)f+=a.value.length}e.viewStateSize=f}catch(k){e.viewStateSize=-1}return e},ExtendPerformanceEventData:function(c){var k="undefined",j=0,i=-1;if(typeof __csm_pz!=__csm_st.Constants.udf&&typeof __csm_pz.A82!=k&&typeof __csm_pz.A82.A67!=k){i=__csm_pz.A82.A67;if(i>-1)i-=__csm_pz.A82.A41;j-=__csm_pz.A82.A41}var l=__csm_st.AjaxMonitoring.GetUrlBaseString(),n=a.GetViewStateSize(),m=0;c.__contentInformation={__$$type:"ContentInfo",__pageSize:i,__viewStateSize:n.viewStateSize,__inlineScriptsSize:j,__inlineCssStylesSize:m,__disabledContent:__csm_pa.D1.B1};c.__contentInformation.__contentLimits={__$$type:"ContentLimits",__images:__csm_st.A70.imagesCollectingLimit,__scripts:a.scriptsCollectingLimit,__css:a.cssCollectingLimit,__htc:a.htcCollectingLimit,__rules:a.cssRulesCollectingLimit};var f=b,g=b,h=b,e=b;if(d===__csm_st.IsPageComplex()){if(!__csm_st.DisabledContent.ScriptsDisabled()){f=a.GetScriptsInfo();j=f.inlineJavaScript}if(!__csm_st.DisabledContent.CssDisabled())g=a.GetCssInfo();var o=__csm_st.BrowserDetect.isFirefox();if(!__csm_st.DisabledContent.HtcDisabled()&&o==d)h=a.GetHtcInfo();if(!__csm_st.DisabledContent.ImagesDisabed())e=a.GetImagesInfo()}if(e!=b){c.__contentInformation.__imagesInfo=e.imagesInfo;c.__contentInformation.__imagesTotalSize=e.totalSize;c.__contentInformation.__imagesTotalCount=e.totalCount;c.__contentInformation.__imagesBDomCount=e.beforeDomCount;c.__contentInformation.__imagesBDomSize=e.beforeDomSize;c.__contentInformation.__imagesDomTotalCount=e.domTotalCount}else c.__contentInformation.__imagesDomTotalCount=__csm_st.GetImagesCount();if(f!=b){c.__contentInformation.__scriptsInfo=f.scriptsInfo;c.__contentInformation.__scriptsTotalSize=f.totalSize;c.__contentInformation.__scriptsTotalCount=f.totalCount}c.__contentInformation.__scriptsDomTotalCount=__csm_st.GetExtrenalScriptsCount();if(g!=b){c.__contentInformation.__cssStyles=g.cssStyles;c.__contentInformation.__cssTotalSize=g.totalSize;c.__contentInformation.__cssTotalCount=g.totalCount;c.__contentInformation.__cssDomTotalCount=g.domTotalCount}else c.__contentInformation.__cssDomTotalCount=__csm_st.GetExtrenalStyleSheetsCount();if(h!=b){c.__contentInformation.__htcBehaviors=h.htcInfo;c.__contentInformation.__htcTotalSize=h.totalSize;c.__contentInformation.__htcTotalCount=h.totalCount;c.__contentInformation.__htcDomTotalCount=h.domTotalCount}else c.__contentInformation.__htcDomTotalCount=0;__csm_st.PropertiesManager.AddCommonProperty(new __csm_st.PropertyType("isRulesDataCollectingLimitReached",a.ReachedRulesLimit));if(l.length>0)c.__contentInformation.__basePathForRelatives=l;return c}};this.ContentProcessor=a};try{__csm_pf=new __csm_PF;if(typeof __csm_st!="undefined"){__csm_st.IntegrityPolicy.mainPerformanceScriptIsLoaded=true;__csm_st.IntegrityPolicy.RegisterLoadedScript("performance.js");__csm_st.A70.SendPerformanceInfo()}}catch(_exc){}
// SIG // Begin signature block
// SIG // MIIbMwYJKoZIhvcNAQcCoIIbJDCCGyACAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFCmvc8WQoojt
// SIG // /tpbr9zqHZKCf8HYoIIV8jCCBKAwggOIoAMCAQICCmEa
// SIG // 9eoAAAAAAGowDQYJKoZIhvcNAQEFBQAweTELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWljcm9zb2Z0IENv
// SIG // ZGUgU2lnbmluZyBQQ0EwHhcNMTExMTAxMjIzOTE3WhcN
// SIG // MTMwMjAxMjI0OTE3WjCBgzELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjENMAsGA1UECxMETU9QUjEeMBwGA1UEAxMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAw6kfz3wjfzEeBiWJ3XV5uc+T
// SIG // S2GStpXy76olnXfzS1ptSZDM4DG4pgI3h3Sv8qygYJS4
// SIG // x04l/ofYWNIgTi3xOmUuklumXeaVdeA05VAhnH05l7aO
// SIG // RCNmFqZlIOA264r6neLLYAH8KmTIh0UU8R7KzSisuuVX
// SIG // WSbc7MVKbJrmAxopMj8AnoOsJQ2EzN1vtmq7LfeEOm1m
// SIG // Meg2cP+EkpD3QHaeiC5H1isR94/gEmUrvF/vFfz37AFo
// SIG // t0UM7sAEsA63vXhrro3kUPE14p4B0uHrW3GCYSEg89TJ
// SIG // 3hy4AkVlSb5+tTeGp83sWt+4diD8ERNR/PoqUKq0HtA6
// SIG // gL5jytyBRwIDAQABo4IBHTCCARkwEwYDVR0lBAwwCgYI
// SIG // KwYBBQUHAwMwHQYDVR0OBBYEFAADpuWixHGigsOPds0s
// SIG // DRLinUooMA4GA1UdDwEB/wQEAwIHgDAfBgNVHSMEGDAW
// SIG // gBRXRXQcXbD2yEMF4IxULY8yp/5IljBWBgNVHR8ETzBN
// SIG // MEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NybC9wcm9kdWN0cy9NaWNDb2RTaWdQQ0FfMDgt
// SIG // MzEtMjAxMC5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsG
// SIG // AQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY0NvZFNpZ1BDQV8wOC0zMS0yMDEw
// SIG // LmNydDANBgkqhkiG9w0BAQUFAAOCAQEAkPf4eZJpyI9r
// SIG // imDufMGuPoE4UvS6z5mM8C09E/Su9mHwdThOWcY/B0P5
// SIG // B3zHU+SRYtaodhR1lIZZsroQwn9sFT8ZFcMOL345w8/+
// SIG // VCdYlDVhB3ltUVewEuHqY3KKFmbrnzkqMwQ1i4PeCl4x
// SIG // vJ8d7jVFDV3Hl98q4J1/Okn740hFMt82bQludlVVrDTF
// SIG // eV1uAtXMl4nzqGh9FOppewtVfQKMxE0wvGL3e6XsoJLw
// SIG // DioOr1ebKUjNtiGl6h3v3An1q2LWDew1X2uZ1LHwd1L5
// SIG // d+k/bJhWwFw2oU5eEPSMehGXICAxCHluchZfHDBXm8t8
// SIG // olX1cGx47KFDIK7ssDWLGDCCBLowggOioAMCAQICCmEF
// SIG // GZYAAAAAABswDQYJKoZIhvcNAQEFBQAwdzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRp
// SIG // bWUtU3RhbXAgUENBMB4XDTExMDcyNTIwNDIxOVoXDTEy
// SIG // MTAyNTIwNDIxOVowgbMxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // DTALBgNVBAsTBE1PUFIxJzAlBgNVBAsTHm5DaXBoZXIg
// SIG // RFNFIEVTTjo5RTc4LTg2NEItMDM5RDElMCMGA1UEAxMc
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCCASIw
// SIG // DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANPLO1Oi
// SIG // n0SjeqtNVnFTineqN5N+AT79qwKjU6n/0bEixQCQ53Vu
// SIG // 7hjogQ4TxdhhAL4foHY7BA0ExQSgqPxDUwahBAS5C5KY
// SIG // AmI479QzEvcrPXvvrUVXhZUgn9djNJxiRo6+ruDZnjn2
// SIG // qVX9z+d35jUT71zov0iTTxpDB1g4in+FFGzqydBLeoJu
// SIG // y9MVYAgUiZSoWz86yT8gfW0vWBp9yoo4vMPCOWjYLVga
// SIG // I+0qEAhaIIyCpe3Rl0WShczDN4PfDZh8xdO24JlT2HgI
// SIG // 9eUjIQdihlpqaRn9cPlTNIH3JTEZhoeLwFWa/apMNRX9
// SIG // W+mVyatTmClfLKXhJQ9kxfKwJ3UCAwEAAaOCAQkwggEF
// SIG // MB0GA1UdDgQWBBR5I+ehDb5VLGgYKWKCZ9bz4TY4WjAf
// SIG // BgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7syuwwzWzDzBU
// SIG // BgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNyb3Nv
// SIG // ZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsGAQUFBwEBBEww
// SIG // SjBIBggrBgEFBQcwAoY8aHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRUaW1lU3Rh
// SIG // bXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMIMA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQBHwnaBWzHdb9M8mfJ6bH6X
// SIG // E1AsBRcbELhEobWM9FbPvbAhtGRtYRzY7ujr9ZLuQ6IY
// SIG // RMP6+u+ttlx/l21LtUP7J2F4CFR8sfmvmAq0dMSq6C1Q
// SIG // xH3+fU6hmdYnKLeu2N+xj4Mijs7zefxhFG2/68yEsN+j
// SIG // u1sFt+pU9WIdbCemY0v646H6u9+FlmVpU7C2cZhkJma9
// SIG // xfFcYryR9D2cS0IADc84BRQmWtwqBUt/apk42N1zmaLO
// SIG // jFAknqTr9T+KeMxUmV0lZqRBBiivScS0UpTs3gKDZP5N
// SIG // 1P9LovwpgNvuP6s87TOIyr8iYNBcOwSwCrSYbTynOk+a
// SIG // 0QEWEWKKQXagMIIGBzCCA++gAwIBAgIKYRZoNAAAAAAA
// SIG // HDANBgkqhkiG9w0BAQUFADBfMRMwEQYKCZImiZPyLGQB
// SIG // GRYDY29tMRkwFwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0
// SIG // MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZp
// SIG // Y2F0ZSBBdXRob3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcN
// SIG // MjEwNDAzMTMwMzA5WjB3MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSEwHwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQ
// SIG // Q0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCfoWyx39tIkip8ay4Z4b3i48WZUSNQrc7dGE4kD+7R
// SIG // p9FMrXQwIBHrB9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkH
// SIG // D/cOBJjwicwfyzMkh53y9GccLPx754gd6udOo6HBI1PK
// SIG // jfpFzwnQXq/QsEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yG
// SIG // T1VSDOQDLPtqkJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3
// SIG // U21StEWQn0gASkdmEScpZqiX5NMGgUqi+YSnEUcUCYKf
// SIG // hO1VeP4Bmh1QCIUAEDBG7bfeI0a7xC1Un68eeEExd8yb
// SIG // 3zuDk6FhArUdDbH895uyAc4iS1T/+QXDwiALAgMBAAGj
// SIG // ggGrMIIBpzAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQW
// SIG // BBQjNPjZUkZwCu1A+3b7syuwwzWzDzALBgNVHQ8EBAMC
// SIG // AYYwEAYJKwYBBAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCB
// SIG // jYAUDqyCYEBWJ5flJRP8KuEKU5VZ5KShY6RhMF8xEzAR
// SIG // BgoJkiaJk/IsZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZ
// SIG // FgltaWNyb3NvZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBS
// SIG // b290IENlcnRpZmljYXRlIEF1dGhvcml0eYIQea0WoUqg
// SIG // pa1Mc1j0BxMuZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRw
// SIG // Oi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9k
// SIG // dWN0cy9taWNyb3NvZnRyb290Y2VydC5jcmwwVAYIKwYB
// SIG // BQUHAQEESDBGMEQGCCsGAQUFBzAChjhodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29m
// SIG // dFJvb3RDZXJ0LmNydDATBgNVHSUEDDAKBggrBgEFBQcD
// SIG // CDANBgkqhkiG9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bSt
// SIG // d9vOeVFNAbEudHFbbQwTq86+e4+4LtQSooxtYrhXAstO
// SIG // IBNQmd16QOJXu69YmhzhHQGGrLt48ovQ7DsB7uK+jwoF
// SIG // yI1I4vBTFd1Pq5Lk541q1YDB5pTyBi+FA+mRKiQicPv2
// SIG // /OR4mS4N9wficLwYTp2OawpylbihOZxnLcVRDupiXD8W
// SIG // mIsgP+IHGjL5zDFKdjE9K3ILyOpwPf+FChPfwgphjvDX
// SIG // uBfrTot/xTUrXqO/67x9C0J71FNyIe4wyrt4ZVxbARcK
// SIG // FA7S2hSY9Ty5ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/
// SIG // qhh6YinvopspNAZ3GmLJPR5tH4LwC8csu89Ds+X57H21
// SIG // 46SodDW4TsVxIxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+A
// SIG // eSGAnhUwZuhCEl4ayJ4iIdBD6Svpu/RIzCzU2DKATCYq
// SIG // SCRfWupW76bemZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9
// SIG // iaF2YbRuoROmv6pH8BJv/YoybLL+31HIjCPJZr2dHYcS
// SIG // ZAI9La9Zj7jkIeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1
// SIG // GtmShxN1Ii8yqAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcB
// SIG // ZW+JC33Iacjmbuqnl84xKf8OxVtc2E0bodj6L54/LlUW
// SIG // a8kTo/0wggaBMIIEaaADAgECAgphFQgnAAAAAAAMMA0G
// SIG // CSqGSIb3DQEBBQUAMF8xEzARBgoJkiaJk/IsZAEZFgNj
// SIG // b20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3NvZnQxLTAr
// SIG // BgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRpZmljYXRl
// SIG // IEF1dGhvcml0eTAeFw0wNjAxMjUyMzIyMzJaFw0xNzAx
// SIG // MjUyMzMyMzJaMHkxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xIzAh
// SIG // BgNVBAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // n43fhTeMsQZWZjZO1ArrNiORHq+rjVjpxM/BnzoKJMTE
// SIG // xF6w7hUUxfo+mTNrGWly9HwFX+WZJUTXNRmKkNwojpAM
// SIG // 79WQYa3e3BhwLYPJb6+FLPjdubkw/XF4HIP9yKm5gmcN
// SIG // erjBCcK8FpdXPxyY02nXMJCQkI0wH9gm1J57iNniCe2X
// SIG // SUXrBFKBdXu4tSK4Lla718+pTjwKg6KoOsWttgEOas8i
// SIG // tCMfbNUn57d+wbTVMq15JRxChuKdhfRX2htZLy0mkinF
// SIG // s9eFo55gWpTme5x7XoI0S23/1O4n0KLc0ZAMzn0OFXyI
// SIG // rDTHwGyYhErJRHloKN8igw24iixIYeL+EQIDAQABo4IC
// SIG // IzCCAh8wEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0OBBYE
// SIG // FFdFdBxdsPbIQwXgjFQtjzKn/kiWMAsGA1UdDwQEAwIB
// SIG // xjAPBgNVHRMBAf8EBTADAQH/MIGYBgNVHSMEgZAwgY2A
// SIG // FA6sgmBAVieX5SUT/CrhClOVWeSkoWOkYTBfMRMwEQYK
// SIG // CZImiZPyLGQBGRYDY29tMRkwFwYKCZImiZPyLGQBGRYJ
// SIG // bWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHmCEHmtFqFKoKWt
// SIG // THNY9AcTLmUwUAYDVR0fBEkwRzBFoEOgQYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvbWljcm9zb2Z0cm9vdGNlcnQuY3JsMFQGCCsGAQUF
// SIG // BwEBBEgwRjBEBggrBgEFBQcwAoY4aHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRS
// SIG // b290Q2VydC5jcnQwdgYDVR0gBG8wbTBrBgkrBgEEAYI3
// SIG // FS8wXjBcBggrBgEFBQcCAjBQHk4AQwBvAHAAeQByAGkA
// SIG // ZwBoAHQAIACpACAAMgAwADAANgAgAE0AaQBjAHIAbwBz
// SIG // AG8AZgB0ACAAQwBvAHIAcABvAHIAYQB0AGkAbwBuAC4w
// SIG // EwYDVR0lBAwwCgYIKwYBBQUHAwMwDQYJKoZIhvcNAQEF
// SIG // BQADggIBADC8sCCkYqCn7zkmYT3crMaZ0IbELvWDMmVe
// SIG // Ij6b1ob46LafyovWO3ULoZE+TN1kdIxJ8oiMGGds/hVm
// SIG // Rrg6RkKXyJE31CSx56zT6kEUg3fTyU8FX6MUUr+WpC8+
// SIG // VlsQdc5Tw84FVGm0ZckkpQ/hJbgauU3lArlQHk+zmAwd
// SIG // lQLuIlmtIssFdAsERXsEWeDYD7PrTPhg3cJ4ntG6n2v3
// SIG // 8+5+RBFA0r26m0sWCG6kvlXkpjgSo0j0HFV6iiDRff6R
// SIG // 25SPL8J7a6ZkhU+j5Sw0KV0Lv/XHOC/EIMRWMfZpzoX4
// SIG // CpHs0NauujgFDOtuT0ycAymqovwYoCkMDVxcViNX2hyW
// SIG // DcgmNsFEy+Xh5m+J54/pmLVz03jj7aMBPHTlXrxs9iGJ
// SIG // ZwXsl521sf2vpulypcM04S+f+fRqOeItBIJb/NCcrnyd
// SIG // EfnmtVMZdLo5SjnrfUKzSjs3PcJKeyeY5+JOmxtKVDhq
// SIG // Ize+ardI7upCDUkkkY63BC6Xb+TnRbuPTf1g2ddZwtiA
// SIG // 1mA0e7ehkyD+gbiqpVwJ6YoNvihNftfoD+1leNExX7lm
// SIG // 299C5wvMAgeN3/8gBqNFZbSzMo0ukeJNtKnJ+rxrBA6y
// SIG // n+qf3qTJCpb0jffYmKjwhQIIWaQgpiwLGvJSBu1p5WQY
// SIG // G+Cjq97KfBRhQ7hl9TajVRMrZyxNGzBMMYIErTCCBKkC
// SIG // AQEwgYcweTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UE
// SIG // AxMaTWljcm9zb2Z0IENvZGUgU2lnbmluZyBQQ0ECCmEa
// SIG // 9eoAAAAAAGowCQYFKw4DAhoFAKCB2jAZBgkqhkiG9w0B
// SIG // CQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4w
// SIG // DAYKKwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQUqfJp
// SIG // fvjzruFJ2s4S0PhWiHeKlMEwegYKKwYBBAGCNwIBDDFs
// SIG // MGqgTIBKAFMAeQBzAHQAZQBtACAAQwBlAG4AdABlAHIA
// SIG // IABPAHAAZQByAGEAdABpAG8AbgBzACAATQBhAG4AYQBn
// SIG // AGUAcgAgADIAMAAxADKhGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAA1/cGDA
// SIG // yIZS6Ei4HQPUcft/1fMB9vgYsrjxc9AMqcD7d06Ud9uH
// SIG // k/GN4TxaC7HXv9vBeqFw63PAiYv47dp+OObmjC61U0uV
// SIG // Om7r7cULLHWns4A950r9ocns4vpk0P83+XZZFsTPUt7O
// SIG // Xf4jZQrDzxpueU2oC5O3gVjjikBgsen8wkK2nKlptEpp
// SIG // +jH7qvtN+yOYo2FZKZ73un+up2Dvv13XTMY9Tz6aKptv
// SIG // uCV4pLLaqkzJJrrurKvjrqiXRmUYMt5OTNNBztqYd/WV
// SIG // eDbugw0qHGvToXoxm0kEELq1r3+fws+Cf7fkfhsp/STP
// SIG // cZA+JpoXKOt/kBriM4e2iH8WriqhggIdMIICGQYJKoZI
// SIG // hvcNAQkGMYICCjCCAgYCAQEwgYUwdzELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBAgphBRmWAAAAAAAbMAcGBSsOAwIaoF0w
// SIG // GAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG
// SIG // 9w0BCQUxDxcNMTIwMTI2MDc0MjM5WjAjBgkqhkiG9w0B
// SIG // CQQxFgQU4X45M3gcegNfNmgRmHW5D3lwEiMwDQYJKoZI
// SIG // hvcNAQEFBQAEggEAkSN4Cicb8TN3QsrJTEZT7T/1MiD0
// SIG // CZP7PMaRaziWnXDHSseTS1+w8QyMq4QTIbsoUCabNSsw
// SIG // W64vzNHqMMu7kmgEa9giiRcYLG8amqn8NRo+KGBDSoqb
// SIG // hJGqMwtOyQzOpdtFFkdr8cENzO4wY1yDDyajFYxK2Q0O
// SIG // 6DSyC2jhAqpxvswpioVVcwye3U11NiWx9AwAmilvjLhf
// SIG // rum7aAUJYIydTbapOShWjF97gAK8lPBPXUQfNHIzEXyx
// SIG // aN8q1BcX88x0WS/YSOU8EXEFTKPfTvuQ40S2JqDiLkNJ
// SIG // lT+A6AjAxSrdRMMkZE3JxqIUZO/UJINWExNWp3FYNVpg
// SIG // OAtX8w==
// SIG // End signature block
