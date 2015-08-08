[![inventid logo](https://cdn.inventid.nl/assets/logo-horizontally-ba8ae38ab1f53863fa4e99b977eaa1c7.png)](http://opensource.inventid.nl)

# CDN

This is our general CDN.
This build system pushes generated CSS and Javascript files to this repo.

## Immutability

All the files in this repo are immutable.
The hashes which are appended to the filenames are the `md5` values of the content.

The only exception to this rule are any files which have `-latest` appended.
These are the most recent versions and can be depended on by other services.
