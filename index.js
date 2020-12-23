var q = 0;
var txt = 'We technology for the greater good.';
var speed = 50;
//document.getElementById("wec").innerHTML = " ";


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function typeWriter() {

  if (q < txt.length)
  {
        

        if(document.getElementById("wec").innerText == "We")
        {
            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">c</span>';

            //sleep(speed);
            //setTimeout(typeWriter, speed);


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">cr</span>';

            //sleep(speed);
            //setTimeout(typeWriter, speed);


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">cre</span>';

            //sleep(speed);
            //setTimeout(typeWriter, speed);


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">crea</span>';

            //sleep(speed);
            //setTimeout(typeWriter, speed);


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">creat</span>';

            //sleep(speed);
            //setTimeout(typeWriter, speed);


            document.getElementById("wec").innerHTML = 'We <span class="bg-white-txt">create</span>';

            //sleep(speed);
           //setTimeout(typeWriter, speed);
        }

        if(document.getElementById("wec").innerText == "We create technology")
        {
            document.getElementById("wec").innerHTML += " ";
            document.getElementById("wec").innerHTML += "<br>";
        }

        document.getElementById("wec").innerHTML += txt.charAt(q);
        q++;
        setTimeout(typeWriter, speed);
        
  }
  

}
typeWriter();

















