# less-livereload

Monitor, parse and Live Reload LESS files in your browser.

## Features

- Automatic refresh parsed LESS files in your browser.
- Watch and parse found files and @import dependencies.
- Automatic backwards @import parsing.
- Work in progress! More features to come.

This tool is suggested for development use only.

## Instalation

### Requirements:
- Node.js Platform and npm package manager:
	- [Visit node.js website](http://nodejs.org/).
- Browser extension:
	- [Chrome extension 2.0.8](http://download.livereload.com/2.0.8/LiveReload.crx)
	- [Firefox extension 2.0.8](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
	- [Safari extension 2.0.8](http://download.livereload.com/2.0.8/LiveReload-2.0.8.safariextz)

### Note:
>In Chrome 21+ off-store installation requires you to [save the file and then drag it manually into the extensions page](http://code.google.com/p/chromium/issues/detail?id=128748).

### Installing less-livereload

```
npm install less-livereload -g
```

Browser extensions
-----
You can use both major LiveReload versions. For old one you can find instructions bellow, for new ones please visit [New browser extensions](http://help.livereload.com/kb/general-use/browser-extensions "New browser extensions") or try [self loading version](http://help.livereload.com/kb/general-use/using-livereload-without-browser-extensions "self loading version").


### [Google Chrome extension](https://chrome.google.com/extensions/detail/jnihajbhpnppcggbcgedagnkighmdlei)

![](https://github.com/mockko/livereload/raw/master/docs/images/chrome-install-prompt.png)

Click “Install”. Actually, LiveReload does not access your browser history. The warning is misleading.

![](https://github.com/mockko/livereload/raw/master/docs/images/chrome-button.png)

If you want to use it with local files, be sure to enable “Allow access to file URLs” checkbox in Tools > Extensions > LiveReload after installation.

### Safari extension

For now it only works with self loading version:

    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>


## Usage

### Command line tool

Go to your .less folder and type:
```
less-livereload [options]
```

To get the option list, type:
```
less-livereload -h
```

For more information, see [less-monitor docs](https://github.com/gdupont/less-monitor).

### Browser plugin

Now, if you are using Safari, right-click the page you want to be livereload'ed and choose “Enable LiveReload”:

![](https://github.com/mockko/livereload/raw/master/docs/images/safari-context-menu.png)

If you are using Chrome or Firefox, just click the toolbar button (it will turn green to indicate that LiveReload is active).

### Options

```
 --port, -p          Sets the server port of LiveReload. Defaults to 35729.

 --urlpath, -r       Sets the root HTTP directory.
```


```
  --directory, -d     Define the root directory to watch, if this is not
                      defined the program will use the current working
                      directory.

  --output, -o        Define the directory to output the files, if this is not
                      defined the program will use the same directory from file.



  --match, -m         Matching files that will be processed. Defaults to
                      **/*.less

  --extension, -e     Sets the extension of the files that will be generated.
                      Defaults to .css

  --force, -f         Force to recompile all files on startup before start
                      watching files.

  --ignore, -i        Define the ignore file list. Can be a file or directory.
                      Ex: **/src/_*.less

  --interval, -t      Sets the interval in miliseconds of the files that will
                      be watching. Defaults to 250

  --nofollow, -n      If set will not follow @import dependencies. Defaults to
                      false.

  --optimization, -p  Sets the optimization level for the less compiler,
                      options are: 0, 1, and 2.

  --compress, -c      Compresses the output

  --silent, -s        Sets to silent mode. Starts without log output.

  --options, -u       Show options on startup.

  --master, -x        Process only master files. Master files are not dependent
                      from any others. Defaults to false

  --help, -h          Show this message
```

## License 

(The MIT License)

Copyright (c) 2012 Guilherme Dupont &lt;guilhermedupont@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.