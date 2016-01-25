(function (nx, global) {

  var idSelectorRE = /^#([\w-]+)$/;
  var classSelectorRE = /^\.([\w-]+)$/;
  var tagSelectorRE = /^[\w-]+$/;
  var document = global.document;
  var slice = [].slice;

  var QuerySelector = nx.declare('nx.dom.QuerySelector', {
    statics: {
      select: function (inSelector, inContext) {
        var selectorType = nx.type(inSelector);
        var context = inContext || document;
        var result;
        switch (selectorType) {
          case 'String':
            result = this.dispatcher(inSelector, context);
            result.selector = inSelector;
            break;
        }
        return result;
      },
      dispatcher: function (inString, inContext) {
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
        return slice.call(els);
      },
      classSelector: function (inClassName, inContext) {
        var els = inContext.getElementsByClassName(inClassName);
        return slice.call(els);
      },
      querySelectorAll: function (inSelector, inContext) {
        var els = inContext.querySelectorAll(inSelector);
        return slice.call(els);
      }
    }
  });

  nx.$ = QuerySelector.select.bind(QuerySelector);

}(nx, nx.GLOBAL));
