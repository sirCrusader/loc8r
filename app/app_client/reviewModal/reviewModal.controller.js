/**
 * Created by wizard on 5/9/17.
 */

(function () {
    angular
        .module('loc8rApp')
        .controller('reviewModalCtrl', reviewModalCtrl);

    reviewModalCtrl.$inject = ['$modalInstance', 'locationData'];
    function reviewModalCtrl($modalInstance, locationData) {
        var vm = this;
        vm.locationData = locationData;
        vm.modal = {
            cancel: function () {
                $modalInstance.dismiss();
            }
        };
    }
})();