function DoTracking(data) {
    if (data) {
        var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';

        /* Classic analyticts custom vars and universal analytics dimensions */
        var uaDimensions = {};
        if (data.customVariables.groups) {
            _gaq.push(['_setCustomVar', 1, "Groups", data.customVariables.groups, 1]);
            _gaq.push(['b._setCustomVar', 1, "Groups", data.customVariables.groups, 1]);
            uaDimensions.dimension1 = data.customVariables.groups;
        }

        if (data.customVariables.customerLoyalty) {
            _gaq.push(['_setCustomVar', 2, "Customer", data.customVariables.customerLoyalty, 1]);
            _gaq.push(['b._setCustomVar', 2, "Customer", data.customVariables.customerLoyalty, 1]);
            uaDimensions.dimension2 = data.customVariables.customerLoyalty;
        }

        if (data.customVariables.webstore) {
            _gaq.push(['_setCustomVar', 3, "Web Store", data.customVariables.webstore, 3]);
            _gaq.push(['b._setCustomVar', 3, "Web Store", data.customVariables.webstore, 3]);
            uaDimensions.dimension3 = data.customVariables.webstore;
        }

        if (data.customVariables.brand) {
            _gaq.push(['_setCustomVar', 4, "Brand", data.customVariables.brand, 3]);
            _gaq.push(['b._setCustomVar', 4, "Brand", data.customVariables.brand, 3]);
            uaDimensions.dimension4 = data.customVariables.brand;
        }

        if (data.customVariables.program) {
            _gaq.push(['_setCustomVar', 5, "Program", data.customVariables.program, 3]);
            _gaq.push(['b._setCustomVar', 5, "Program", data.customVariables.program, 3]);
            uaDimensions.dimension5 = data.customVariables.program;
        }
        else {
            var noProgValue = "Program not applicable";
            _gaq.push(['_setCustomVar', 5, "Program", noProgValue, 3]);
            _gaq.push(['b._setCustomVar', 5, "Program", noProgValue, 3]);
            uaDimensions.dimension5 = noProgValue;
        }

        /* Classic e5 account tracking */
        _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
        _gaq.push(['_setAccount', data.config.classicTrackerCode]);
        _gaq.push(['_trackPageview']);

        /* Classic OTH umbrella account tracking */
        _gaq.push(['b._setAccount', data.config.classicUmbrellaTrackerCode]);
        _gaq.push(['b._setDomainName', data.config.umbrellaTrackingDomain]);
        _gaq.push(['b._trackPageview']);

        /* Classic eCommerce Data */
        if (data.eCommerceData && data.eCommerceData.transaction && data.eCommerceData.items) {
            var transaction = data.eCommerceData.transaction;
            var items = data.eCommerceData.items;
            _gaq.push(['_set', 'currencyCode', transaction.currencyCode]);
            _gaq.push(['_addTrans',
                transaction.orderNumber,
                transaction.webStoreName,
                transaction.total,
                transaction.taxTotal,
                transaction.shippingTotal,
                transaction.city,
                transaction.province,
                transaction.country
            ]);
            for (var i = 0; i < items.length; i++) {
                _gaq.push(['_addItem',
                    items[i].orderNumber,
                    items[i].producerName,
                    items[i].offeringDisplayName,
                    items[i].webStoreName,
                    items[i].unitCost,
                    items[i].quantity
                ]);
            }
            _gaq.push(['_trackTrans']);
        }

        /* Classic OTH umbrella eCommerce Data */
        if (data.eCommerceData && data.eCommerceData.transaction && data.eCommerceData.items) {
            var transaction = data.eCommerceData.transaction;
            var items = data.eCommerceData.items;
            _gaq.push(['b._set', 'currencyCode', transaction.currencyCode]);
            _gaq.push(['b._addTrans',
                transaction.orderNumber,
                transaction.webStoreName,
                transaction.total,
                transaction.taxTotal,
                transaction.shippingTotal,
                transaction.city,
                transaction.province,
                transaction.country
            ]);
            for (var i = 0; i < items.length; i++) {
                _gaq.push(['b._addItem',
                    items[i].orderNumber,
                    items[i].producerName,
                    items[i].offeringDisplayName,
                    items[i].webStoreName,
                    items[i].unitCost,
                    items[i].quantity
                ]);
            }
            _gaq.push(['b._trackTrans']);
        }

        /* Google Classic Analyticts */
        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            //ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();

        /* Google Universal Analytics */
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', data.config.universalTrackerCode, data.config.umbrellaTrackingDomain);
        ga('send', 'pageview', uaDimensions);

        /* Universal eCommerce Data */
        if (data.eCommerceData && data.eCommerceData.transaction && data.eCommerceData.items) {
            var transaction = data.eCommerceData.transaction;
            var items = data.eCommerceData.items;
            ga('require', 'ecommerce', 'ecommerce.js');
            ga('set', 'currencyCode', transaction.currencyCode);
            ga('ecommerce:addTransaction', {
                'id': transaction.orderNumber,
                'affiliation': transaction.webStoreName,
                'revenue': transaction.total,
                'shipping': transaction.shippingTotal,
                'tax': transaction.taxTotal
            });
            for (var i = 0; i < items.length; i++) {
                ga('ecommerce:addItem', {
                    'id': items[i].orderNumber,
                    'name': items[i].producerName,
                    'sku': items[i].offeringDisplayName,
                    'category': items[i].webStoreName,
                    'price': items[i].unitCost,
                    'quantity': items[i].quantity
                });
            }
            ga('ecommerce:send');
        }

        /* Establish tracking of Like/Recommend (and un-like) Facebook event(s) */
        _ga.GoogleAnalyticsTrackFacebook = function () {
            try {
                if (FB && FB.Event && FB.Event.subscribe) {
                    FB.Event.subscribe('edge.create', function (targetUrl) {
                        _gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
                        ga('send', 'facebook', 'like', targetUrl);
                    });
                    FB.Event.subscribe('edge.remove', function (targetUrl) {
                        _gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
                        ga('send', 'facebook', 'unlike', targetUrl);
                    });
                }
            } catch (e) { }
        }

        /* Establish tracking of Tweet and Follow Twitter event(s) */
        var extractParamFromUri = function (uri, paramName) {
            if (!uri) {
                return;
            }
            var regex = new RegExp('[\\?&#]' + paramName + '=([^&#]*)');
            var params = regex.exec(uri);
            if (params != null) {
                return unescape(params[1]);
            }
            return;
        }

        try {
            twttr.ready(function (twttr) {
                twttr.events.bind('tweet', function (intent_event) {
                    if (intent_event) {
                        var opt_pagePath;
                        if (intent_event.target && intent_event.target.nodeName == 'IFRAME') {
                            opt_target = extractParamFromUri(intent_event.target.src, 'url');
                        }
                        _gaq.push(['_trackSocial', 'twitter', 'tweet', opt_pagePath]);
                        ga('send', 'twitter', 'tweet', opt_pagePath);
                    }
                });

                twttr.events.bind('follow', function (event) {
                    var followed_user_id = event.data.user_id;
                    _gaq.push(['_trackSocial', 'twitter', 'follow', followed_user_id]);
                    ga('send', 'twitter', 'follow', followed_user_id);
                });
            });
        } catch (e) { }

    } // if (data)
}