(function(){
  angular.module('popbox',[])
      .directive('popbox', [function(){
        return {
          restrict: 'A',
          scope : {
            popboxText : '='
          },
          link : function(scope, el, attrs){
            var $el = $(el),
                direction = attrs.popboxDirection || 'down',
                updateElement = function(value){
                  scope.popbox.text = value;
                };

            $el.popbox({ direction : direction });
            scope.popbox = $el.data('popbox');

            scope.$watch('popboxText',function(newValue){
              updateElement(newValue);
            });
          }
        };
      }]);
})();