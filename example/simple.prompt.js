var prompt = require('prompt');

  prompt.start(
    console.log("Choose a square to play"),
    console.log(" 1|2|3" + '\n',
                "4|5|6" + '\n',
                "7|8|9"     
              )

  );

 
  prompt.get(['player1', 'player2'], function (err, result) {
    if (result.player1 === '2') {
      console.log( "__| x |__");
    } else {
    console.log(result.player1 + "|__|__");
    console.log(result.player2 + "|__|__");
    console.log("_|__|__");
    }
  });
 