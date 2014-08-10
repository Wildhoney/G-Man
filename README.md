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

G-Man follows a format that allows a readable format in both [GitHub](https://github.com/) and the CLI. By following the standards your output will look something similar to the following:

![G-Man Screenshot v0.1.0](http://i.imgur.com/ae4NA5G.png)

### Documentation Title

When the developer opens the documentation page they will want to know what they're looking at quick glance, for this we specify a main header:

```
# G-Man Documentation
```

Underneath the documentation header you can specify the responsibility and any other information you feel necessary.

```
# G-Man Documentation

Responsible for providing the entry point to the G-Man documentation.
```

We then begin specifying the methods present in the related file followed by the methods themselves.

```
## Methods

### renderTemplate
```

Underneath the `renderTemplate` method we will document its parameters &ndash; specifying additional information between asterisks: `*(private)*`.

```
## Methods

### renderTemplate
    
 * `firstParam` *{String}* Name of your self-invoking method;
 * `secondParam` *{Function}* Optional callback that will be invoked after success;
```

We can also specify the responsibility of the method by adding another header to the documentation.

```
### specifyExitCallback *(private)*

#### Responsible for attaching an event to the exit process.
```