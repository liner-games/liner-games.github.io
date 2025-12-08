// (function() {
//     'use strict';
//
//     function removeIndexHtml() {
//         const path = window.location.pathname;
//         const search = window.location.search;
//         const hash = window.location.hash;
//
//         if (path.endsWith('index.html')) {
//             const cleanPath = path.replace(/index\.html$/, '');
//             const newUrl = cleanPath + search + hash;
//             history.replaceState({}, '', newUrl);
//         }
//     }
//
//     removeIndexHtml();
//
//     window.removeIndexHtml = removeIndexHtml;
// })();