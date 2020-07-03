/**
 * GDPR cookies setup
 * 
 * https://github.com/acoustep/gdpr-cookie
 */

$.gdprcookie.init({
    title: "🍪 Cookies",
    message: "We would like to employ Google Analytics (GA), which uses cookies to obtain and store metrics.",
    delay: 600,
    expires: 1,
    acceptBtnLabel: "Accept cookies",
    cookieTypes: [
        {
            type: "Analytics",
            value: "analytics",
            description: "Cookies related to site visits, browser types, etc.",
            checked: true,
        }
    ]
});
