## What is REPL

About read-eval-print-loop

A Read-Eval-Print Loop (REPL) is an interactive interpreter to a programming language. It originated with [**LISP**](https://en.wikipedia.org/wiki/Lisp_%28programming_language%29) systems, but many other languages (Python, Ruby, Haskell, Tcl, etc.) use REPL's to manage interactive sessions. They allow for simple experimentation with a language by bypassing the compile stage of the **"code -> compile -> execute" cycle.**

There are 4 components to a REPL (named in **LISP** notation):

-   A **R**ead function, which reads input from the keyboard
-   An **E**val function, which evaluates code passed to it
-   A **P**rint function, which formats and displays results
-   A **L**oop function, which runs the three previous commands until termination