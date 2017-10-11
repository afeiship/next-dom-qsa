(function () {

    var global = global || this || self || window;
    var nx = global.nx || require('next-js-core2');

    var idSelectorRE = /^#([\w-]+)$/;
    var classSelectorRE = /^\.([\w-]+)$/;
    var tagSelectorRE = /^[\w-]+$/;
    var document = global.document;

    var NxDomQsa = nx.declare('nx.dom.Qsa', {
      statics: {
        qsa: function (inSelector, inContext) {
          var context = inContext || document;
          var result = NxDomQsa.dispatch(inSelector, context);
          return nx.mix(result,{ selector: inSelector, context: context });
        },
        dispatch: function (inString, inContext) {
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
        idSelector: function (inId, inContext) {
          var el = inContext.getElementById(inId);
          return el ? [el] : [];
        },
        tagSelector: function (inTag, inContext) {
          var els = inContext.getElementsByTagName(inTag);
          return nx.slice(els);
        },
        classSelector: function (inClassName, inContext) {
          var els = inContext.getElementsByClassName(inClassName);
          return nx.slice(els);
        },
        querySelectorAll: function (inSelector, inContext) {
          var els = inContext.querySelectorAll(inSelector);
          return nx.slice(els);
        }
      }
    });

    if (typeof module !== 'undefined' && module.exports) {
      module.exports = NxDomQsa;
    }

  }());
