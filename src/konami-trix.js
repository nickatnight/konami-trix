import $ from 'jQuery';


function konamiTrix() {
  // consts and vars
  const KONAMI_STRING = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  const floor = Math.floor;
  const random = Math.random;

  let cnvs = document.getElementById("konamiCode");
  let ctx = cnvs.getContext("2d");

  // making the canvas hidden and full screen
  cnvs.style.display = "none";
  cnvs.height = window.innerHeight;
  cnvs.width = window.innerWidth;

  // letters characters - taken from the unicode charset
  let letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '+', '-',
    '*', '/', '=', '%', '"', '\'', '#', '&', '_', '(', ')', ',', '.',
    ';', ':', '?', '!', '\\', '|', '{', '}', '<', '>', '[', ']', '^',
    '~', 'あ', 'う', 'け', 'さ', 'す', 'ぐ', 'ア', 'イ', 'キ', 'サ', 'シ',
    'セ', 'グ', 'ピ', '木'
  ];

  let fontSize = 16;
  let columns = cnvs.width / fontSize; //number of columns for the rain
  let drops = []; // an array of drops - one per column

  // x below is the x coordinate
  // 1 = y co-ordinate of the drop(same for every drop initially)
  for(let x = 0; x < columns; x++)
  	drops[x] = 1;

  // drawing the characters
  function draw() {
  	// Black BG for the canvas
  	// translucent BG to show trail
  	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  	ctx.fillRect(0, 0, cnvs.width, cnvs.height);

  	ctx.fillStyle = "rgba(0, 255, 0, 0.8)"; //green text
  	ctx.font = fontSize + "px arial";

  	// looping over drops
  	for(let i = 0; i < drops.length; i++)
  	{
  		// a random letters character to print
  		let text = letters[floor(random()*letters.length)];
  		// x = i*fontSize, y = value of drops[i]*fontSize
  		ctx.fillText(text, i*fontSize, drops[i]*fontSize);

  		//sending the drop back to the top randomly after it has crossed the screen
  		//adding a randomness to the reset to make the drops scattered on the Y axis
  		if(drops[i]*fontSize > cnvs.height && random() > 0.975)
  			drops[i] = 0;

  		//incrementing Y coordinate
  		drops[i]++;
  	}
  }

  let counter = 0;

  $(document).keydown(function(e) {
    // get the pressed key and continue checking each value if the correct
    // keys are being pressed. Reset counter when the incorrect key has been pressed.
    if(e.keyCode == KONAMI_STRING[counter]) {
      counter++;

      // if the counter has reached the end of the string (all successful chars inputed)
      if(counter > 9) {

        // remove all elements on the screen besides canvas that will contain animation
        // add css to page for black background and unhide canvas element
        $('body').children().not('#konamiCode').remove().css('background', 'black');
        $('#konamiCode').css('display', 'block');
        $('*').css({'margin': '0 0 0 0', 'padding': '0 0 0 0'});

        setInterval(draw, 33);

        counter = 0;
      }
      // prevent window from moving
      e.preventDefault();
    } else {
      counter = 0;
    }
  });
}

konamiTrix();

module.exports = {konamiTrix: konamiTrix};
