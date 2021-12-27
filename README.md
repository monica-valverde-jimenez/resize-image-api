# resize-image-api - Resize Images API

As a simple placeholder and serve scaled images API, the first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Pre-requisites
1. Node version 16.13.0
1. npm version 13.13.0

## Step-by-step install guide
1. Install project specific dependencies with `npm install`
1. An image folder should exist in root project.
1. An cache folder should exist inside image main folder. (/image/cache)
1. Run the resize-image-api server with `npm run start`
1. Test Resize Images is yielding data and not an error with `open http://localhost:3000/api/images/santamonica.jpg?width=600&height=200`

## Component Testing

Run `npm run test` to execute the tests.

## Build project
Run `npm run build` to build project.
Run `node ./dist` to run project from build version.

## Package Lock

Package locks packages to specific versions. This information is stored in the `package-lock.json` file.

## Changing/Adding Dependencies

* Make changes to dependencies, via `npm add [package]` or `npm remove [package]`.
* If the new package is only required for development environments (e.g. test frameworks) then append `--save-dev`.

## Troubleshooting

* Make sure you're using the right version of Node by executing `npm version` from the root directory.
* Grab the latest dependencies with `npm`.
