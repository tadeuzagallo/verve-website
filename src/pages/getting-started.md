---
path: "/getting-started"
---

# Getting Started with Verve

For now, the only way to install Verve is to build it from source.

## Installing from Source

First, you'll need to clone the project:

```bash
$ git clone https://github.com/tadeuzagallo/verve-lang
```

Verve is written in [Haskell] and built using the Haskell Tool [Stack], so you'll need to install it in order to build the project. You can refer to the [Stack documentation][Stack], but the TL;DR is that you can install it using [brew][Homebrew] if you use macOS:

```bash
$ brew install stack
```

Before building the project for the first time, you'll need to use `stack` to setup your environment:

```bash
$ stack setup
```

Once that's done, you should be all set to actually build verve:

```bash
$ stack build
```

You can try running all the tests to check that your build works (it should only take a few seconds):

```bash
$ make test
```

If everything is working fine, you should now be able to run your verve programs. There a few ways one can use it:

- Install it and just call `verve`:

```bash
# from within the verve repo
$ ln -s $(pwd)/verve /usr/local/bin

# then you can run a file
$ verve file.vrv

# or start the REPL:
$ verve
```

- Directly using the wrapper script that ships with Verve:

```bash
$ path/to/verve file.vrv
```

- Directly using `stack`

```bash
$ stack exec verve -- file.vrv
```
(If you had any issues following these steps, it would be great if you could [create an issue][Issues]. Thanks!)

## Contributing

The language is still constantly changing, but if you too would like hack on it, feel free to open an [issue][Issue] or send a [pull request][Pulls] with your patch. Any contribution is welcome.

If you decide to contribute any code, please make sure that your change include at least one test that would not pass without your patch. Tests are written using LLVM [lit] and you can find a number of existing tests in the [repo][tests].

[Haskell]: https://www.haskell.org/
[Stack]: https://docs.haskellstack.org/
[Homebrew]: https://brew.sh/
[Issues]: https://github.com/tadeuzagallo/verve-lang/issues
[Pulls]: https://github.com/tadeuzagallo/verve-lang/pulls
[lit]: https://llvm.org/docs/CommandGuide/lit.html
[tests]: https://github.com/tadeuzagallo/verve-lang/tree/master/tests
