### Unable to build

Run

```
npx nx build-rsbuild main
```

Fails with error:

```
Failed to compile, check the errors for troubleshooting.
File: **/main/src/styles.scss:1:1
  × Module parse failed:
  ╰─▶   × JavaScript parsing error: Expression expected
         ╭─[2:0]
       1 │ /* You can add global styles to this file, and also import other style files */
       2 │ @import '@angular/cdk/overlay-prebuilt.css';
         · ─
         ╰────

  help:
        To enable support for Sass, use "@rsbuild/plugin-sass".

error   Failed to build.
error   Rspack build failed!
```
