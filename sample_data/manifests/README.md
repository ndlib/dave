# Sample Manifests

Full documentation exists at (https://docs.google.com/document/d/1IZeQGFM5g0MkpRHtw_funPvKax9FZ1cK_N1kaecoVb0/edit#)

1. manifest-1.json - A simple manifest for a book with 20 image files, 16 pages of actual content. Very straightforward.
2. manifest-2.json - A copy of manifest-2 with the addition of 2 ranges, one for the covers and one for the 16 pages of content.
3. manifest-3.json - A copy of manifest-3 with an attempt at adding a second sequence. Realized during the creation of this file that a great deal of the work was duplicative.
4. manifest-4.json - Same essential contents as manifest-3.json but made the second sequence simply an array of canvases which reference the canvas within the JSON above.
5. manifest-5.json - Same essential contents as manifest-4.json but emulated the second sequence in the ranges.
6. manifest-single.json - A simple manifest for a single item that should just be viewed. Sorry it's not actually a very cool image.
7. manifest-mix-and-match.json - Copy of manifest-5.json but the second sequence and the second range each have one interjection of fuller information that differs from their main canvas for some reason.

Recommendation would be to use `manifest-1.json`, `manifest-5.json`, `manifest-single.json` for testing with design. If these work, then `manifest-mix-and-match.json` would be the next goal. If these don't work, `manifest-2.json` shows a more thorough way to do ranges, `manifest-3.json` shows a very thorough way to do second sequences. However it seems wiser to only declare the canvas once and only override that canvas with info if info comes up where it should be overridden (as done in `manifest-mix-and-match.json`).

At this point, I think ranges within ranges should be out-of-scope for our phase of the project.
