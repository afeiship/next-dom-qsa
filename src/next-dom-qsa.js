(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var idSelectorRE = /^#([\w-]+)$/;
  var classSelectorRE = /^\.([\w-]+)$/;
  var tagSelectorRE = /^[\w-]+$/;
  var NxSelectorId = nx.SelectorId || require('next-selector-id');
  var NxSelectorTag = nx.SelectorTag || require('next-selector-tag');
  var NxSelectorClass = nx.SelectorClass || require('next-selector-class');
  var NxSelectorQueryAll = nx.SelectorQueryAll || require('next-selector-queryAll');

  var NxDomQsa = nx.declare('nx.DomQsa', {
    statics: {
      qsa: function(inSelector, inContext) {
        var result = NxDomQsa.dispatch(inSelector, inContext);
        return nx.mix(result, { selector: inSelector, context: inContext });
      },
      dispatch: function(inString, inContext) {
        switch (true) {
          case idSelectorRE.test(inString):
            return NxSelectorId.qsa(RegExp.$1, inContext);
          case tagSelectorRE.test(inString):
            return NxSelectorTag.qsa(inString, inContext);
          case classSelectorRE.test(inString):
            return NxSelectorClass.qsa(RegExp.$1, inContext);
          default:
            return NxSelectorQueryAll.qsa(inString, inContext);
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomQsa;
  }
})();
