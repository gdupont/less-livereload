# less-livereload

Monitor and Live Reload LESS files in your browser.

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

### Browser plugin

Now, if you are using Safari, right-click the page you want to be livereload'ed and choose “Enable LiveReload”:

![](https://github.com/mockko/livereload/raw/master/docs/images/safari-context-menu.png)

If you are using Chrome or Firefox, just click the toolbar button (it will turn green to indicate that LiveReload is active).

