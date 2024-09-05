( function() {  var mapping = [{"appname":"", "appid":"NET_APPS_SAMA7D6_H3_TCP_IP_APP_SAMA7D6_FAMILY", "path":"GUID-32FAA57C-FE87-47D0-AAC7-388EBE0BC94A.html"},{"appname":"", "appid":"NET_APPS_SAMA7D6_TCP_IP_IPERF_APP", "path":"GUID-537DC8A4-C90E-48B8-9AB8-347B08B23D37.html"},{"appname":"", "appid":"NET_APPS_SAMA7D6_TCP_IP_TCP_CLIENT", "path":"GUID-A1CEDE19-A023-4AD6-9F9E-577513C76F82.html"},{"appname":"", "appid":"NET_APPS_SAMA7D6_TCP_IP_TCP_SERVER", "path":"GUID-79E8D764-56A8-4578-8D3B-BAFDCD19A885.html"},{"appname":"", "appid":"NET_APPS_SAMA7D6_TCP_IP_UDP_SERVER", "path":"GUID-704ED65B-73F7-4ABB-90EE-76DBC659CC2D.html"},{"appname":"", "appid":"NET_APPS_SAMA7D6_TCP_IP_WEB_NET_SERVER_SDCARD_FATFS", "path":"GUID-E29B01A6-2BD7-4B83-9B7A-E48A3FACE889.html"},{"appname":"", "appid":"NET_APPS_SAMA7D6_TCP_IP_WEB_NET_SUPER_SET_SDCARD_FATFS", "path":"GUID-0EB8BD6A-106B-4085-860C-DB5E1CC7EEB8.html"}];
            var mchp = (function (mchp) {
                var mchp = mchp || {};
                var mapping = [];
        
                mchp.utils = {};
        
                mchp.utils.getQueryParam = function (name, url = window.location.href) {
                  name = name.replace(/[\[\]]/g, "\\$&");
                  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                  if (!results) return null;
                  if (!results[2]) return "";
                  return decodeURIComponent(results[2].replace(/\+/g, " "));
                };

                mchp.utils.isFirefox = typeof InstallTrigger !== 'undefined';
        
                mchp.init = function (options) {
                  mchp.mapping = options.mapping || [];
                  mchp.bindEvents();
                };
        
                mchp.bindEvents = function () {
                    if (mchp.utils.isFirefox) {
                      window.onload = mchp.checkRedirect;
                    } else {
                      document.onreadystatechange = mchp.checkRedirect;
                    }
                };

                mchp.checkRedirect = function() {
                  var contextId = mchp.utils.getQueryParam("contextId") || "";
                  if (contextId && contextId != undefined) {
                    var record = mchp.mapping.find(function(x){
                      return x.appid && x.appid.toLowerCase() == contextId.toLowerCase();
                    });
                    if (record && record.path) {
                      window.stop();
                      window.location = record.path;
                    }
                  }
                };
        
                return {
                  init: mchp.init,
                };
              })();
        
              mchp.init({
                mapping: mapping
              });

        })();