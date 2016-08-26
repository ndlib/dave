# dave
D.A.V.E. - The Digital Artifact Viewing Experience

Installation and running the application:

`npm install`

`npm start`

Open browser to `http://localhost:3024`.

## Testing

To run tests:

`npm run test`

## React Routes

:source/:manifestId/:sequence/:view/

:source/:manifestId/:sequence/:view/:pageID

:source/:manifestId/:sequence/:view/:pageID/detail

 * :source = `encodeURIComponent(referring url)`
 * :manifest = currently manifest `id`
 * :sequence = `[ 0, 1, 2 ... ]` = current sequence
 * :view = `[ 1, 2, g ]` = 1-up, 2-up, or grid
 * :pageId = `[ 0, 1, 2 ... ]` = current page of artifact
 * detail = Openseadragon Mode enabled

Example:

` http://dave.library.nd.edu/source/manifest-1/0/1/3/detail
`
