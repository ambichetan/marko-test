# marko-test
we can build our bundle for the browser:

lasso --main client.js --plugins lasso-marko --inject-into index.html

This builds a client.js file to the newly created static/ directory and injects the required <script> tags into our HTML page to load our application in the browser. If we had css in the view then <link> tags would have also been added.

Load up that page in your browser and you should see Hello Marko staring back at you.
