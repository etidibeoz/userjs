// START: internal custom pref to test for syntax errors
user_pref("_user.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

// 0000: disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);




/*** [SECTION 0100]: STARTUP ***/
user_pref("_user.js.parrot", "0100 syntax error: the parrot's dead!");

// 0101: disable default mail client check
user_pref("mail.shell.checkDefaultClient", false);

// 0102: set startup page
user_pref("mailnews.start_page.enabled", false);




/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's dead!");

// 0201: use mozilla geolocation service instead of google if permission is granted
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// 0202: disable using the os's geolocation service
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]

// 0203: disable region updates
user_pref("browser.region.update.enabled", false);
user_pref("browser.region.network.url", "");

// 0204: set search region
user_pref("browser.search.region", "US");

// 0210: set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en, ru");

// 0211: use us english locale regardless of the system locale
user_pref("javascript.use_us_english_locale", true);




/*** [SECTION 0300]: QUIETER FOX ***/
user_pref("_user.js.parrot", "0300 syntax error: the parrot's dead!");

// 0301: disable auto-installing firefox updates [NON-WINDOWS]
user_pref("app.update.auto", false);

// 0302: disable auto-installing firefox updates via a background service [WINDOWS]
user_pref("app.update.background.scheduling.enabled", false);

// 0306: disable search engine updates (e.g. opensearch)
user_pref("browser.search.update", false);

// 0320: disable recommendation pane in about:addons (uses google analytics)
user_pref("extensions.getAddons.showPane", false);

// 0321: disable recommendations in about:addons' extensions and themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// 0322: disable personalized extension recommendations in about:addons and amo
user_pref("browser.discovery.enabled", false);

// 0330: disable new telemetry data submission
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// 0331: disable telemetry health reports
user_pref("datareporting.healthreport.uploadEnabled", false);

// 0332: disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);

// 0333: disable telemetry coverage
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// 0334: disable pingcentre telemetry (used in several system add-ons)
user_pref("browser.ping-centre.telemetry", false);

// 0340: disable studies
user_pref("app.shield.optoutstudies.enabled", false);

// 0341: disable normandy/shield
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// 0350: disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// 0351: enforce no submission of backlogged crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// 0361: disable network connectivity checks
user_pref("network.connectivity-service.enabled", false);

// 0362: enforce disabling of web compatibility reporter
user_pref("extensions.webcompat-reporter.enabled", false);




/*** [SECTION 0400]: SAFE BROWSING (SB) ***/
user_pref("_user.js.parrot", "0400 syntax error: the parrot's dead!");

// 0403: disable sb checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");




/*** [SECTION 0600]: BLOCK IMPLICIT OUTBOUND ***/
user_pref("_user.js.parrot", "0600 syntax error: the parrot's dead!");

// 0601: disable link prefetching
user_pref("network.prefetch-next", false);

// 0602: disable dns prefetching
user_pref("network.dns.disablePrefetch", true);

// 0603: disable predictor / prefetching
user_pref("network.predictor.enabled", false);

// 0604: disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);

// 0605: enforce no "hyperlink auditing" (click tracking)
user_pref("browser.send_pings", false);




/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS / IPv6 ***/
user_pref("_user.js.parrot", "0700 syntax error: the parrot's dead!");

// 0702: set the proxy server to do any dns lookups when using socks
user_pref("network.proxy.socks_remote_dns", true);

// 0703: disable using unc (uniform naming convention) paths
user_pref("network.file.disable_unc_paths", true);

// 0704: disable gio as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", "");

// 0706: disable proxy direct failover for system requests
user_pref("network.proxy.failover_direct", false);




/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("_user.js.parrot", "0800 syntax error: the parrot's dead!");

// 0802: disable location bar domain guessing
user_pref("browser.fixup.alternate.enabled", false);

// 0803: display all parts of the url in the location bar
user_pref("browser.urlbar.trimURLs", false);

// 0804: disable live search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

// 0805: disable location bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// 0806: disable location bar leaking single words to a dns provider **after searching**
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

// 0811: disable form autofill (for addresses and credit cards)
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// 0820: disable coloring of visited links
user_pref("layout.css.visited_links_enabled", false);




/*** [SECTION 0900]: PASSWORDS ***/
user_pref("_user.js.parrot", "0900 syntax error: the parrot's dead!");

// 0901: set when firefox should prompt for the primary password
// 0=once per session (default), 1=every time it's needed, 2=after n minutes
user_pref("security.ask_for_password", 2);

// 0902: set how long in minutes firefox should remember the primary password
user_pref("security.password_lifetime", 5);

// 0903: disable auto-filling username and password form fields
user_pref("signon.autofillForms", false);

// 0904: disable formless login capture for password manager
user_pref("signon.formlessCapture.enabled", false);

// 0905: limit (or disable) http authentication credentials dialogs triggered by sub-resources
// 0 = don't allow sub-resources to open http authentication credentials dialogs
// 1 = don't allow cross-origin sub-resources to open http authentication credentials dialogs
// 2 = allow sub-resources to open http authentication credentials dialogs (default)
user_pref("network.auth.subresource-http-auth-allow", 1);

// 0906: enforce no automatic authentication on microsoft sites [WINDOWS 10+]
user_pref("network.http.windows-sso.enabled", false);




/*** [SECTION 1000]: DISK AVOIDANCE ***/
user_pref("_user.js.parrot", "1000 syntax error: the parrot's dead!");

// 1001: disable disk cache
user_pref("browser.cache.disk.enable", false);

// 1002: disable media cache from writing to disk in private browsing
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 262144);

// 1003: disable storing extra session data, such as form content, cookies and post data
user_pref("browser.sessionstore.privacy_level", 2);

// 1004: set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 30000);

// 1005: disable automatic firefox start and session restore after reboot [WINDOWS]
user_pref("toolkit.winRegisterApplicationRestart", false);

// 1006: disable favicons in shortcuts
user_pref("browser.shell.shortcutFavicons", false);




/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
user_pref("_user.js.parrot", "1200 syntax error: the parrot's dead!");

// 1201: require safe negotiation
user_pref("security.ssl.require_safe_negotiation", true);

// 1203: reset tls 1.0 and 1.1 downgrades i.e. session only
user_pref("security.tls.version.enable-deprecated", false);

// 1206: disable tls1.3 0-rtt (round-trip time)
user_pref("security.tls.enable_0rtt_data", false);

// 1211: enforce ocsp fetching to confirm current validity of certificates
user_pref("security.OCSP.enabled", 1);

// 1212: set ocsp fetch failures (non-stapled, see 1211) to hard-fail
user_pref("security.OCSP.require", true);

// 1220: disable or limit sha-1 certificates
user_pref("security.pki.sha1_enforcement_level", 1);

// 1221: disable windows 8.1's microsoft family safety cert [WINDOWS]
user_pref("security.family_safety.mode", 0);

// 1223: enable strict pinning
user_pref("security.cert_pinning.enforcement_level", 2);

// 1224: enable crlite
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

// 1241: disable insecure passive content (such as images) on https pages
user_pref("security.mixed_content.block_display_content", true);

// 1244: enable https-only mode in all windows
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);

// 1246: disable http background requests if https request doesn't respond
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// 1270: display warning on the padlock for "broken security" (if 1201 is false)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// 1271: control "add security cxception" dialog on ssl warnings
user_pref("browser.ssl_override_behavior", 1);

// 1272: display advanced information on insecure connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// 1273: display "not secure" text on http sites
user_pref("security.insecure_connection_text.enabled", true);




/*** [SECTION 1600]: HEADERS / REFERERS ***/
user_pref("_user.js.parrot", "1600 syntax error: the parrot's dead!");

// 1603: enable the dnt (do not track) http header
user_pref("privacy.donottrackheader.enabled", true);




/*** [SECTION 1700]: CONTAINERS ***/
user_pref("_user.js.parrot", "1700 syntax error: the parrot's dead!");

// 1701: enable container tabs and its ui setting
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// 1702: set behaviour on "+ tab" button to display container menu on left click
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);




/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
user_pref("_user.js.parrot", "2000 syntax error: the parrot's dead!");

// 2002: limit webrtc ip leaks if using webrtc
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// 2030: disable autoplay of html5 media
user_pref("media.autoplay.default", 5);




/*** [SECTION 2400]: DOM (DOCUMENT OBJECT MODEL) ***/
user_pref("_user.js.parrot", "2400 syntax error: the parrot's dead!");

// 2402: prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// 2403: block popup windows
user_pref("dom.disable_open_during_load", true);

// 2404: limit events that can cause a popup
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");




/*** [SECTION 2600]: MISCELLANEOUS ***/
user_pref("_user.js.parrot", "2600 syntax error: the parrot's dead!");

// 2601: prevent accessibility services from accessing your browser
user_pref("accessibility.force_disabled", 1);

// 2602: disable sending additional analytics to web servers
user_pref("beacon.enabled", false);

// 2603: remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// 2604: disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true);

// 2606: disable uitour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// 2608: reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false);

// 2611: disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);

// 2615: disable websites overriding firefox's keyboard shortcuts
user_pref("permissions.default.shortcuts", 2);

// 2616: remove special permissions for certain mozilla domains
user_pref("permissions.manager.defaultsUrl", "");

// 2617: remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");

// 2620: enforce pdfjs, disable pdfjs scripting
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);

// 2623: disable permissions delegation
user_pref("permissions.delegation.enabled", false);

// 2651: enable user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);

// 2652: disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

// 2660: lock down allowed extension directories
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.autoDisableScopes", 15);

// 2661: disable bypassing 3rd party extension install prompts
user_pref("extensions.postDownloadThirdPartyPrompt", false);




/*** [SECTION 2700]: PERSISTENT STORAGE ***/
user_pref("_user.js.parrot", "2700 syntax error: the parrot's dead!");

// 2701: disable or isolate 3rd-party cookies and site-data
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.cookieBehavior", 1);

// 2710: enable enhanced tracking protection (etp) in all windows
user_pref("privacy.trackingprotection.enabled", true);

// 2711: enable various etp lists
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

// 2760: enable local storage next generation (lsng)
user_pref("dom.storage.next_gen", true);

// 2804: reset default items to clear with ctrl-shift-del
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", false);

// 2806: reset default "time range to clear" for "clear recent history"
user_pref("privacy.sanitize.timeSpan", 0);




/*** [SECTION 10000]: THUNDERBIRD SPECIFIC ***/
user_pref("_user.js.parrot", "10000 syntax error: the parrot's dead!");

// 10001: disable auto-configuration
// user_pref("mailnews.auto_config.guess.enabled", false);
// user_pref("mailnews.auto_config.fetchFromISP.enabled", false);
// user_pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
// user_pref("mailnews.auto_config.fetchFromExchange.enabled", false);
// user_pref("mailnews.auto_config_url", "");
// user_pref("mailnews.auto_config.addons_url", "");

// 10002: disable account provisioning
user_pref("mail.provider.enabled", false);

// 10003: disable "filelink for large attachments" feature
user_pref("mail.cloud_files.enabled", false);
user_pref("mail.cloud_files.inserted_urls.footer.link", "");

// 10010: show full email instead of just name from address book
user_pref("mail.showCondensedAddresses", false);

// 10020: show sender header in message pane
user_pref("mailnews.headers.showSender", true);

// 10021: show user agent header in message pane
user_pref("mailnews.headers.showUserAgent", true);

// 10030: disable thunderbird internal address book email collection
user_pref("mail.collect_email_address_outgoing", false);

// 10040: prevent fallback encoding to windows-1252, prefer 7bit or 8bit utf-8
user_pref("intl.fallbackCharsetList.ISO-8859-1", "UTF-8");

// 10041: Sset encoding of incoming mail
user_pref("mailnews.view_default_charset", "UTF-8");

// 10042: set encoding of outgoing mail
user_pref("mailnews.send_default_charset", "UTF-8");

// 10043: forces encoding in reply to be the default charset
user_pref("mailnews.reply_in_default_charset", true);

// 10050: behavior when sending html message
user_pref("mail.default_html_action", 1);

// 10051: Send email in plaintext unless expressly overridden.
user_pref("mail.html_compose", false);
user_pref("mail.identity.default.compose_html", false);

// 10052: Downgrade email to plaintext by default
user_pref("mailnews.sendformat.auto_downgrade", false);

// 10060: Disable chat functionality
user_pref("mail.chat.enabled", false);
user_pref("purple.logging.log_chats", false);
user_pref("purple.logging.log_ims", false);
user_pref("purple.logging.log_system", false);
user_pref("purple.conversations.im.send_typing", false);
user_pref("messenger.startup.action", 0);
user_pref("messenger.status.reportIdle", false);

// 10061: Disable calendar integration
user_pref("mail.calendar-integration.opt-out", false);
user_pref("calendar.useragent.extra", "");
