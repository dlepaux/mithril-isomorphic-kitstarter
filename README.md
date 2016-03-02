# [Mithril][] Isomorphic KitStarter

Build thanks to 

- [Installation](#installation)
- [Components](#components)
- [TODO](#todo)
- [Thanks](#thanks)
- [Licence](#licence)


## <a name="installation"></a> Installation

1. `git clone https://github.com/dlepaux/mithril-isomorphic-starterkit`
2. `cd mithril-isomorphic-starterkit`
3. `npm install`
4. `bower install`
5. `brunch build`
6. `node server`

All in one : `git clone https://github.com/dlepaux/mithril-isomorphic-starterkit && cd mithril-isomorphic-starterkit && npm install && bower install && brunch build && node server`

If you want to run it in production mode (JS minification) just run `NODE_ENV=production node server`

## <a name="components"></a> Components

Project
- Friendly Arborescence
- [Brunch][] builder

Server (Back)
- Express
- [Mithril][]     v0.2.2-rc.1
- MySQL           driver
- Sequilize       ORM

Client (Front)
- [Mithril][]     v0.2.2-rc.1
- [Foundation][]  v6.1.2

## <a name="todo"></a> TODO

- Full CoffeeScript
- SPA optimize for only one request per load 
- Add jQuery OK
- Use Jade for templation + lazy loading templates CANCELED
- DOC usefull example : http://ratfactor.com/daves-guide-to-mithril-js
- Fb-Flo server preconfigured

## <a name="thanks"></a> Thanks

Thanks to [Stephan Hoyer][] for his [Mihtril Isomorphic Example][]


## <a name="licence"></a> Licence

The MIT License (MIT)

Copyright (c) 2016 David Lepaux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[Stephan Hoyer]: https://github.com/StephanHoyer
[Mihtril Isomorphic Example]: https://github.com/StephanHoyer/mithril-isomorphic-example
[Mithril]: http://mithril.js.org
[Brunch]: http://brunch.io
[Foundation]: http://foundation.zurb.com/
