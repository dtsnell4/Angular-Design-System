// (function () {

//     angular
//       .module('AppCentral.designsystem')
//       .factory('DesignsystemResource', DesignsystemResource);

//     /* @ngInject */
//     function DesignsystemResource($resource, config) {
//         return $resource(config.appCentralApi + 'instances/:instanceId/help', { instanceId: '@instanceId' }, {
//             update: {
//                 method: 'PUT'
//             },
//             save: {
//                 method: 'POST'
//             },
//             summary: {
//                 method: 'GET',
//                 url: config.appCentralApi + 'instances/help',
//                 isArray: true
//             },
//             cache: true
//         });
//     }
// })();