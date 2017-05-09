/**
 * Created by wizard on 5/9/17.
 */

(function () {
    angular
        .module('loc8rApp')
        .controller('locationDetailCtrl', locationDetailCtrl);

    locationDetailCtrl.$inject = ['$routeParams', 'loc8rData'];
    function locationDetailCtrl($routeParams, loc8rData) {
        var vm = this;
        vm.locationid = $routeParams.locationid;

        loc8rData.locationById(vm.locationid)
            .success(function (data) {
                vm.data = { location: data };
                vm.pageHeader = {
                    title: vm.data.location.name
                };
            })
            .error(function (err) {
                console.log(err);
            });
    }
})();