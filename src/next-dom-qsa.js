(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxDomQsa = nx.declare('nx.DomQsa', {
    statics: {
      qsa: function(inSelector, inContext) {
        var context = inContext || document;
        var result = NxDomQsa.dispatch(inSelector, context);
        return nx.mix(result, { selector: inSelector, context: context });
      },
      dispatch: function(inString, inContext) {
        switch (true) {
          case idSelectorRE.test(inString):
            return this.idSelector(RegExp.$1, inContext);
          case tagSelectorRE.test(inString):
            return this.tagSelector(inString, inContext);
          case classSelectorRE.test(inString):
            return this.classSelector(RegExp.$1, inContext);
          default:
            return this.querySelectorAll(inString, inContext);
        }
      },
      idSelector: function(inSelector, inContext) {
        var el = inContext.getElementById(inSelector);
        return el ? [el] : [];
      },
      tagSelector: function(inSelector, inContext) {
        var els = inContext.getElementsByTagName(inSelector);
        return nx.slice(els);
      },
      classSelector: function(inSelector, inContext) {
        var els = inContext.getElementsByClassName(inSelector);
        return nx.slice(els);
      },
      querySelectorAll: function(inSelector, inContext) {
        var els = inContext.querySelectorAll(inSelector);
        return nx.slice(els);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomQsa;
  }
})();
