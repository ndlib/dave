# D.A.V.E. - The Digital Artifact Viewing Experience
[![Build Status](https://travis-ci.org/ndlib/dave.svg?branch=master)](https://travis-ci.org/ndlib/dave)
[![Code Climate](https://codeclimate.com/github/ndlib/dave/badges/gpa.svg)](https://codeclimate.com/github/ndlib/dave)

## Installing and running for development

Installation and running the application:

`npm install`

`npm start`

Open browser to `http://localhost:3024`.

## Testing

To run tests:

`npm run test`

## Building

To build for deployment:

`npm run deploy:prod`

Files will be compiled to `~/dist`.

## React Routes

:base/:manifestId/:sequence/:view

:base/:manifestId/:sequence/:view/:canvasId

:base/:manifestId/:sequence/:view/:canvasId/detail

 * :base = `[ 0, 1, 2 ... ]` = base uri for the manifest file
 * :manifest = currently manifest filename without `.json` extension
 * :sequence = `[ 0, 1, 2 ... ]` = current sequence
 * :view = `[ 1, 2, g ]` = 1-up, 2-up, or grid
 * :canvasId = `[ 0, 1, 2 ... ]` = current page of artifact
 * detail = OpenSeadragon Mode enabled

Source may be passed by appending ?ref=URI which will be retained while navigating within the interface.

Example:

` http://dave.library.nd.edu/0/manifest-1/0/1/3/detail?ref=http://google.com
`

## Deploy Pre Production

1.  Assume a role that can write to the bucket.
2.  Run ./awsbuild.sh
