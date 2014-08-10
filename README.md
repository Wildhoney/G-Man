G-Man
===================

![Travis](https://api.travis-ci.org/Wildhoney/G-Man.png)
&nbsp;
![npm](https://badge.fury.io/js/gman.png)

* **npm:** `npm install gman -g`

G-Man is a documentation engine which uses [GitHub.com](https://github.com/) as the doc source, and parses Markdown documents to provide an easy way for developers to read documentation. All of the [options in G-Man can be configured](#configuration) with the `.gman.yml` configuration.

![G-Man and Cat](http://wpcdn1.ripten.com/wp-content/uploads/2012/09/gmancat.jpg)<br />
Source: [ViaEstelar](http://viaestelar.deviantart.com/) on [DeviantArt.com](http://viaestelar.deviantart.com/art/About-that-cat-319586420).

---

## Getting Started

G-Man follows a format that allows a readable format in both [GitHub](https://github.com/) and the CLI. By following the standards your output will look something similar to the following

![G-Man Screenshot v0.1.0](http://i.imgur.com/ae4NA5G.png)

Please follow the [example for the G-Man documentation](https://raw.githubusercontent.com/Wildhoney/G-Man/master/documentation/G-Man.md) in creating your own documentation files.

When the developer types `gman` in the root of your application, G-Man will cleverly find all of your documentation files and enumerate them to the developer. Developers can also perform searches on your G-Man documentation &ndash; all from the command prompt, and without you having to do anything special!

## Searching Documentation

As a developer you're likely to want information on a given method. Using G-Man you can locate the documentation for a function by specifying the `gman -f methodName` command &ndash; where `methodName` is the function you would like further information about. G-Man will iterate over the documentation to discover the files which contain your desired method &ndash; if only one file has the method then that is output, otherwise you'll be given a choice.

## YAML Configuration
 
Using the `.gman.yaml` file you can modify default G-Man parameters.

Currently G-Man supports the `directory` property which you can modify to alter the documentation location.

Configuration parameters are specified in the traditional YAML way:

```yaml
directory: documentation
```