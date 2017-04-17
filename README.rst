konami-trix
===========

.. image:: https://media.giphy.com/media/v7WM6sLcnGIc8/giphy.gif

This is a fun JavaScript library that adds Konami-Code easter egg to your site. Upon
successful code entry, all elements will disappear from the screen and be replaced with
a canvas animation of Matrix rain.

Add canvas element with id of ``konamiCode`` as first child within ``body``

.. code:: html

   <body>
     <canvas id="konamiCode"></canvas>
     ...
   </body>

Include script ``konami-trix.umd.js``

.. code:: html

   <script src="path/to/konami-trix.umd.js"></script>

Enter :arrow_up: :arrow_up: :arrow_down: :arrow_down: :arrow_left: :arrow_right: :arrow_left: :arrow_right: :b: :a:

original Matrix rain code taken from here_.

.. _here: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript
