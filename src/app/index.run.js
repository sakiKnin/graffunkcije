(function() {
  'use strict';

  angular
    .module('newTry')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
