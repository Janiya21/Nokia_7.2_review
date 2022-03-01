var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue  = rotateSum;
    
}

downBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue  = rotateSum;
    
}

function doChnageImage1(){
    document.getElementById("contentView2").innerHTML = "   <h2>Triple Camera By<br>Zeiss Optics.</h2><br>"+
                                                            "<p> The primary camera uses a 1/2-inch 48Mp Quad<br>"+
                                                            "-Bayer sensor with 0.8µm pixels coupled to a<br>"+
                                                            "standard wide-angle f / 1.8- aperture lens with<br>"+
                                                            "PDAF autofocus. Forgoing a tele-lens camera,<br>"+
                                                            "Nokia instead opted for an ultra-wide seco<br>"+
                                                            "-nd shooter built around an 8MP sensor with<br>"+
                                                            "a 13mm-equivalent f/2.2-aperture lens.<br></br>"+
                                                            "The 5MP dedicated depth sensor will be called<br>"+
                                                            "into action when using Portrait mode on the<br>"+
                                                            "Nokia 7.2.Users can capture video at eithe<br>"+
                                                            "2016p/30fps (4K) or lower-resolution 1080p/<br>"+
                                                            "30fps (full HD) in default mode.";

    document.getElementById("changeImageSet").src = "images/camera8.jpg";
}
function doChnageImage2(){
    document.getElementById("contentView2").innerHTML =  "   <h2>Android™ 10 download <br>now available</h2><br> <p>Privacy settings made easy,replies"+
                                                            " written faster<br> and all-round improvements that make using<br>your phone feelmore"+
                                                            " natural - Android 10 (pie)<br> comes with heaps of new features that will<br> help you get"+
                                                            " the most out of your Nokia smart<br>-phone. <br><br>Nokia smartphones are always getting"+
                                                            " better.<br>With 2 years of software upgrades and 3 years<br> of monthly security updates,"+
                                                            " our commitme<br>-nt to delivering on this promise means that<br> we rank highest for "+
                                                            "software updates and<br>security, putting us ahead of everyonelse.</p>";

    document.getElementById("changeImageSet").src = "images/screen.jpg";
}
function doChnageImage3(){
    document.getElementById("contentView2").innerHTML = "   <h2>Premium Design <br>With Slim Metal Body</h2><br>"+
                                                            "<p>Nokia 7.2 has been in the news recently as the<br>"+
                                                            "rumours suggested a possible launch timeline al<br>"+
                                                            "-ong with key specifications of the smartphone. <br>"+
                                                            "Now, alleged new renders of the phone, as well<br>"+
                                                            "as more detail shave popped up online.HMD Glo<br>"+
                                                            "-bal has confirmed a launch event at IFA '19 next  <br>"+
                                                            "month where the company is expected to anno <br>"+
                                                            "-unce two new smartphones.<br><br> These migh turn out to be the"+
                                                            "Nokia 6.2 and<br> Nokia 7.2. This will be the first"+
                                                            "time HMD Global<br> will be making an appearance"+
                                                            "at IFA.</p>";

                                                              

    document.getElementById("changeImageSet").src = "images/bizzel.png";
}

//-----------------------------------------------------------------------------------------------------

function doChnageimageColor1(){
    document.getElementById("changingImagesNokia").src = "images/whiteN.png";
}   

function doChnageimageColor2(){
    document.getElementById("changingImagesNokia").src = "images/greenN.png";
}  

function doChnageimageColor3(){
    document.getElementById("changingImagesNokia").src = "images/blackN.png";
}     