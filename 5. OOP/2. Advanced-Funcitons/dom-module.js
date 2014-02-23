(function () {
  'use strict';

  var DomUtil = (function () {
    var selectorToChildElements = {
      _keys: [],
      add: function (selector, childElements) {
        var buffer = this._keys[selector] || document.createDocumentFragment();

        for (var i = 0, length = childElements.length; i < length; i += 1) {
          buffer.appendChild(childElements[i]);
        }

        if (buffer.childNodes.length >= 100) {
          document.querySelector(selector).appendChild(buffer);
        }

        this._keys[selector] = buffer;
      }
    };

    return {
      appendChild: function (parentSelector, childEl) {
        document.querySelector(parentSelector).appendChild(childEl);
      },
      appendToBuffer: function appendToBuffer(parentSelector, elements) {
        if (Object.prototype.toString.apply(elements).slice(8, -1) !== 'Array') {
          appendToBuffer(parentSelector, [elements]);
        }

        selectorToChildElements.add(parentSelector, elements);
      },
      createElement: function (type, content) {
        var element = document.createElement(type);
        element.innerHTML = content;
        return element;
      },
      getElement: function (selector) {
        return document.querySelector(selector);
      },
      getElements: function (selector) {
        return document.querySelectorAll(selector);
      },
      removeChild: function (parentSelector, childSelector) {
        var selector = parentSelector + ' > ' + childSelector;
        var children = Array.prototype.slice.call(document.querySelectorAll(selector));

        children.forEach(function (child) {
          child.parentElement.removeChild(child);
        });
      },
      addHandler: function (selector, eventName, listener) {
        document.querySelector(selector).addEventListener(eventName, listener, false);
      }
    };
  })();

  var parentSelector = '#wrapper';

  (function (parentSelector) {
    console.group('Add and remove a child');

    var childEl = DomUtil.createElement('div', 'child element');

    console.log('children count:', DomUtil.getElement(parentSelector).childElementCount);

    console.log('add child');
    DomUtil.appendChild(parentSelector, childEl);
    console.log('children count:', DomUtil.getElement(parentSelector).childElementCount);

    console.log('remove child');
    DomUtil.removeChild(parentSelector, childEl.tagName.toLowerCase());
    console.log('children count:', DomUtil.getElement(parentSelector).childElementCount);

    console.groupEnd();
  })(parentSelector);

  (function (selector) {
    console.group('Add click listener');

    DomUtil.addHandler(selector, 'click', function (event) {
      event.currentTarget.style.backgroundColor = getRandomColor();
    });

    console.groupEnd();
  })(parentSelector);

  (function (parentSelector) {
    console.group('Add children with buffer');

    var childBufferSize = 100,
      childElToAdd = DomUtil.createElement('div', 'child element'),
      childrenToAdd = fillArray(childBufferSize - 1, childElToAdd);

    console.log('buffer size:', childBufferSize);

    console.group('body element');
    console.log('children count:',DomUtil.getElement('body').childElementCount);
    console.log('add', childrenToAdd.length, 'elements');
    DomUtil.appendToBuffer('body', childrenToAdd);
    console.log('children count:', DomUtil.getElement('body').childElementCount);
    console.groupEnd();

    childrenToAdd = fillArray(childBufferSize - 1, childElToAdd);
    console.group(parentSelector, 'element');
    console.log('children count:', DomUtil.getElement(parentSelector).childElementCount);
    console.log('add', childrenToAdd.length, 'elements');
    DomUtil.appendToBuffer(parentSelector, childrenToAdd);
    console.log('children count:', DomUtil.getElement(parentSelector).childElementCount);
    childrenToAdd = fillArray(1, childElToAdd);
    console.log('add', childrenToAdd.length, 'elements');
    DomUtil.appendToBuffer(parentSelector, childrenToAdd[0]);
    console.log('children count:', DomUtil.getElement(parentSelector).childElementCount);
    console.groupEnd();

    console.group('body element');
    console.log('children count:',DomUtil.getElement('body').childElementCount);
    childrenToAdd = fillArray(1, childElToAdd);
    console.log('add', childrenToAdd.length, 'elements');
    DomUtil.appendToBuffer('body', childrenToAdd[0]);
    console.log('children count:', DomUtil.getElement('body').childElementCount);
    console.groupEnd();

    console.groupEnd();
  })(parentSelector);

  (function (parentSelector) {
    console.group('Get elements by CSS selector');

    console.log(
      'Count of even children of', parentSelector, ':',
      DomUtil.getElements(parentSelector + ' *:nth-child(even)').length
    );

    console.groupEnd();
  })(parentSelector);


  function getRandomColor() {
    return 'rgba(' + [
        getRandomInt(0, 255),
        getRandomInt(0, 255),
        getRandomInt(0, 255),
        getRandomInt(1, 10) / 10
      ].join(', ') + ')';
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function fillArray(count, element) {
    var array = [];

    for (var i = 0; i < count; i += 1) {
      array[i] = element.cloneNode(true);
    }

    return array;
  }
})();
