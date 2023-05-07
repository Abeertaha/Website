 
            document.getElementById("myButton").addEventListener("click", function() {
            document.getElementById("myText").style.display = "block"; 
            document.getElementById("myText").style.color = "darkred";
            document.getElementById("myText").style.fontFamily = "'Times New Roman', Times, serif";
            document.getElementById("myText").style.fontWeight = "bolder";
            document.getElementById("myText").style.backgroundColor = "lightyellow";
            document.getElementById("myText").style.textAlign = "center";
          });

  
         var today = new Date();
         var date = today.toDateString();
         document.getElementById('date').innerHTML = date
