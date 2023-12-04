<!-- SuperVision README -->

<!-- variables -->
[ccs]: https://cosmodiumcs.com
[youtube]: https://www.youtube.com/c/CosmodiumCS
[supervision]: https://supervision-ccs.herokuapp.com/

<!-- title -->
# SuperVision
> Blue Cosmo | 07/02/22

---

<!-- ascii art logo -->
```                                                     
                      .::::::.  ...    :::::::::::::. .,:::::: :::::::..         
                     ;;;`    `  ;;     ;;; `;;;```.;;;;;;;'''' ;;;;``;;;;        
                     '[==/[[[[,[['     [[[  `]]nnn]]'  [[cccc   [[[,/[[['        
                       '''    $$$      $$$   $$$""     $$""""   $$$$$$c          
                      88b    dP88    .d888   888o      888oo,__ 888b "88bo,      
                       "YMmMY"  "YmmMMMM""   YMMMb     """"YUMMMMMMM   "W"       
                                                    :~?J555J?~:
              :::      .::.::: .::::::. :::     .~YG&@B5J?J5B@&GY~.   :::.    :::.
              ';;,   ,;;;' ;;;;;;`    ` ;;;   :JB@@@B~.~?J7~.~B@@@BJ: `;;;;,  `;;;
               \[[  .[[/   [[['[==/[[[[,[[[ .5&@@@@&: P@@G^PP :&@@@@&5  [[[[[. '[[
                Y$c.$$"    $$$  '''    $$$$ .5&@@@@&: P@@@&@P :&@@@@&5. $$$ "Y$c$$
                 Y88P      888 88b    dP888   :JB@@@B~.~?YJ~.~B@@@BJ:   888    Y88
                  MP       MMM  "YMmMY" MMM     .~YB&@B5J?J5B@&BY~.     MMM     YM
                                                    :~?J555J?~:                   
```

<!-- disclaimer -->
## Disclaimer:
SuperVision serves to aid security research and become a reminder of the level of government surveillance that exists today. SuperVision got all its shit from a lot of googling, I did this in my spare time, I can only imagine the level of automated surveillance the government is capable of.

Also note that Supervision is rendering a lot of data, so **it may take a fair bit of time to render the map** [no more than 20-30 secs].

<!-- descripiton -->
## Overview:
[SuperVision][supervision] is an open source *"Google Maps"* for hackers developed by [CosmodiumCS][ccs]. SuperVision's map centralizes public data and maps it. Allowing you to see traffic cameras, transportation, and other data systems **in live time**. It is developed with a type of hacking called "Public Data Hacking" [PDH]. This is basically the process in which you exploit data thats publically available. Whats cool about PDH is that its completely legal, because the data we exploit is already publically available. So by the magical powers of Python, JavaScript, and several markup languages, we generate a powerful map that is ready to use whenever you need! 

---

<!-- map visualization -->
![SuperVision Map](https://github.com/CosmodiumCS/SuperVision/blob/main/assets/ccs-styled-plots.png?raw=true)

---

<!-- how it works -->
**How It Works:**

SuperVision works by using Python to generate Keyhole Markup Language [KML] files. KML files are used to map geographic data. There is a [KML](https://github.com/CosmodiumCS/SuperVision/tree/main/kml) directory that contains all of the generated KML files used in this project. **These files CAN be imported into Google Earth** and you will be able to view all of the markers showing the cameras and other public data that SuperVision has mapped. But Google Earth has two problems...

1. Google Earth is **NOT** open source
2. Google Earth only maps data statically

SuperVision's open source magic allows us to do so much more than what propriatary software limited us to. SuperVision has not only mapped thing like cameras, but it can track live data like the locations of public transportation. We can fully customize the tracking of public data to the fullest extent possible [with a lot of debugging of course XP]. 

---

<!-- youtube embed -->
[![Devlog One](https://github.com/CosmodiumCS/SuperVision/blob/main/assets/supervision-tn.png?raw=true)](https://www.youtube.com/watch?v=knagAWTn7FQ "SuperVision : The Hacker Google Mapper")

---

Watch the first devlog for SuperVision now!! It will give you an update on what the project is and how it was built in the best way possible :D

<!-- resources -->
## Resources:
- [SuperVision][supervision]
- [YouTube Video](https://youtu.be/knagAWTn7FQ)
- [YouTube Channel][youtube]
- [Website][ccs]

<!-- requirements -->
## Requirements:
- A Modern Web Browser
    - i.e [Chrome, Firefox, Opera, Safari]
- An Internet Connection

<!-- executing program -->
## Local Hosting
**SuperVision does have a website [here][supervision]** but if you wish to run it locally you can clone the repository and run the [main.py](https://github.com/CosmodiumCS/SuperVision/blob/main/main.py) file. You then can navigate to `127.0.0.1:5000` in your browser to view the map.

<!-- extraneous -->
## What Can SuperVision Track?

### Cameras

---

<!-- camera footage of cosmo -->
![Cosmo Camera](https://github.com/CosmodiumCS/SuperVision/blob/main/assets/cosmo-cam.png)

---

SuperVision is capable of plotting traffic, security, and other cameras on its map. The above is a photo of a traffic camera showing developer [Blue Cosmo][ccs] at an intersection. This shows the vast amount of possible surveillance with a tool as simple as this.

### Vehicles

---

<!-- buses in chicago -->
![Chicago Buses](https://github.com/CosmodiumCS/SuperVision/blob/main/assets/chicago-bus.png?raw=true)

---

SuperVision is capable of plotting live data. Above we can see the current positions of buses in chicago. Every 10 seconds SuperVision will update any data that it has plotted live for a more consistent flow of where certain live data is on the map.

### Aircraft

---

<!-- airplanes -->
![Airplanes](https://github.com/CosmodiumCS/SuperVision/blob/main/assets/airplane-plot.png?raw=true)

---

SuperVision plots the positions of aircraft in live time. Every 10 seconds, SuperVision updates their positions and displays their country of origin in a popup [when hovered].

<!-- data policy -->
## Data Policy
- SuperVision **only** asks for your device's approximate location. If you say yes it will display the available data closest to you. If you say no, it will display all the full map. 
- SuperVision **does not** collect any user data...read the code 

<!-- credits -->
## Credits
The original concept comes from an old friend of mine, Shepherd. He had the idea to map specific camera locations to kml files and map them on Google Earth. I joined the project and discovered methods of automatically mapping data instead of doing such a thing manually. But after a falling out I took the project to the next step by creating a dynamic mapping environment outside of Google Earth. This has allowed me to map not only all the cameras simultaneously, but also to map live data in real time.

---

<!-- copyright -->
© 2022 by Cosmodium CyberSecurity, LLC
