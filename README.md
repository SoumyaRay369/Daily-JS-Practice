# Daily-JS-Practice
Daily JS Practice files


## Basics:

-  **.reduce()**
<object>.reduce((acc, item) => {
    ...
    return acc
}, {})

- **.map()**
<object>.map((entry, index) => ...)

- **.entries()**
Object.entries(<object>) converts from {} to [] to make it easy for iteration by .map()

- **.fromEntries()**
Plain opposite of Object.entries()

- **.flat()**
converts [['a', 'b'], ['c', 'd']] to ['a', 'b', 'c', 'd']

- **[...new Set(<Array>)]**
filters only the unique elements from the Array
