# dave
D.A.V.E. - The Digital Artifact Viewing Engine

Installation:

`npm install`

`npm start`

Open browser to `http://localhost:3024`.

## React Routes

:source/:manifestId/:sequence/:view/

:source/:manifestId/:sequence/:view/:pageID

:source/:manifestId/:sequence/:view/:pageID/detail

 * :source = `encodeURIComponent(referring url)`
 * :manifestId = currently manifest `id`
 * :sequence = `[ 0, 1, 2 ... ]` = current sequence
 * :view = `[ 1, 2, g ]` = 1-up, 2-up, or grid
 * :pageId = `[ 0, 1, 2 ... ]` = current page of artifact
 * detail = Openseadragon Mode enabled

Example:

` http://dave.library.nd.edu/collections.library.nd.edu%2F2fb06059c8%2Fvestigia-vaticana/manifest-1/0/1/3/detail
`
