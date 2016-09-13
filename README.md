# D.A.V.E. - The Digital Artifact Viewing Experience
[![Build Status](https://travis-ci.org/ndlib/dave.svg?branch=master)](https://travis-ci.org/ndlib/dave)

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

`npm run deploy`

Files will be compiled to `~/dist`.

## React Routes

:source/:manifestId/:sequence/:view/

:source/:manifestId/:sequence/:view/:canvasId

:source/:manifestId/:sequence/:view/:canvasId/detail

 * :source = `encodeURIComponent(referring url)`
 * :manifest = currently manifest `id`
 * :sequence = `[ 0, 1, 2 ... ]` = current sequence
 * :view = `[ 1, 2, g ]` = 1-up, 2-up, or grid
 * :canvasId = `[ 0, 1, 2 ... ]` = current page of artifact
 * detail = OpenSeadragon Mode enabled

Example:

` http://dave.library.nd.edu/source/manifest-1/0/1/3/detail
`
