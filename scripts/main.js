function myFunction () {
  alert("'Did you know that transistor are found in many electronics and they are used to transfer resistance? This means is used as an amplifier or a switch by letting flow current in different intensities and channels?' BYJU'S (n.d.) Transistor Working [online] Available from: https://byjus.com/physics/transistor-working/ [Accessed 04 october 2022]");
}
function myFunction2 () {
  alert('"Did you know vacuum tubes were replaced in the mid 1950s? This is because they used more advanced technology for amplifiers" Lisa Richards (n.d) The Vacuum Tube in Computer History [online] Available from: https://www.mapcon.com/us-en/the-vacuum-tube-in-computer-history [Accessed 4 october 2022]')
}
function myFunction3 () {
  alert("'Did you know PCB or printed circuit boards are the base or building block in any modern device? This is because they allow to put many traces together in order to do certain task allowing to do whatever your imagination wants.' Printed Circuits (n.d.) What is a Printed Circuit (PCB)? [online]. Available from:https://www.printedcircuits.com/what-is-a-pcb/ [Accessed 4 october 2022]")
}
function myFunction4 () {
  alert("'Did you know silicon chips are actually assembled in silicion and are also referred as microchips due to their size?' ASML (N.D) Learn the microchip basics. [online]. Available from: https://www.asml.com/en/technology/all-about-microchips/microchip-basics [Accessed 4 October 2022]")
}
function myFunction5 () {
  alert("'Did you know that the motherboard is the one in-charged of connecting all of the computer's components to work as one?' Computer Hope (2021) What is a Motherboard? [online]. Available from https://www.computerhope.com/jargon/m/mothboar.htm [Accessed 4 October 2022]")
}
function myFunction6 () {
  alert("'Did you know that early CPUs were constructed from vacuum tubes , which required a great deal of energy and physical space compared to modern construction?' Prezi (n.d.). 10 facts about CPU. prezi.com [online]. Available at: https://prezi.com/p/qfmq5rbegbdq/10-facts-about-cpu/. [Acessed 4 October 2022]")
}
function myFunction7 () {
  alert("'Did you know that some of the most exciting applications for GPU technology involve AI and machine learning?' Intel (n.d.). What Is a GPU? Graphics Processing Units Defined. Intel [online]. Available at: https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html. [Acessed 4 October 2022]")
}
function myFunction8 () {
  alert("'Did you know that having more RAM in your computer will allow you to do more tasks at once?' Geeksquare (2020). Important Facts About RAM. geeksquare.ca [online]. Available at: https://geeksquare.ca/blog/2017/important-facts-about-ram [Accessed 4 October 2022]")
}
function myFunction9 () {
  alert("'Did you know the largest SSD on the market can store up to 100TB of information? It’s available for the cost of 40,000 US dollars.' Desire Athow (2022) Largest SSDs and hard drives: the biggest internal, portable and external storage devices you can buy. Tech Radar [online]. Available from: https://www.techradar.com/best/large-hard-drives-and-ssds [Accessed 4 October 2022]")
}
function result() {
  var score=0;
  if (document.getElementById('correct1').checked)
      { score++;
      }
  if (document.getElementById('correct2').checked)
      { score++;
      }
  if (document.getElementById('correct3').checked)
      { score++;
      }
  if (document.getElementById('correct4').checked)
      { score++;
      }
  if (document.getElementById('correct5').checked)
      { score++;
      }
  alert("Your score is:" +score);

}


function newImage() {
    var image = document.getElementById('graphic');
    if (image.src.match("assets/cm_10_4.jpg")) {
        image.src = "assets/cm_10_3.jpg";
    } else {
        image.src = "assets/cm_10_4.jpg";
    }
}
