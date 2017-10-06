# next-dom-qsa
> A modern dom selector based on next toolkit.
> Simple selector for learning DOM Selector API.
> user query-selector api,not support lower version browser.

##usage:
```js
import { qsa } from 'next-dom-qsa';
//ID selector:
  qsa('#id1');
//Class selector:
  qsa('.cls2');
//Tag selector:
  qsa('div');
//All selector:
  qsa('div.cls2.cls2[role=dialog]');
```
