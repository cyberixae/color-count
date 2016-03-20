[].slice.call(document.getElementsByTagName('*')).map(x => window.getComputedStyle(x)['background-color']).reduce(((a, b) => {a[b] = a.hasOwnProperty(b) ? a[b] + 1 : 1; return a}), {})
