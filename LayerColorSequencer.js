#target illustrator

    function rvbn (min, max) {
    // random value between numbers 
    return min + Math.floor(Math.random() * (max - min));
}

// Define the Layer Default Colors
var lightBlue = new RGBColor();
lightBlue.red = 79;
lightBlue.green = 128;
lightBlue.blue = 255;

var lightRed = new RGBColor();
lightRed.red = 255;
lightRed.green = 79;
lightRed.blue = 79;

var green = new RGBColor();
green.red = 255;
green.green = 79;
green.blue = 255;

var mediumBlue = new RGBColor();
mediumBlue.red = 79;
mediumBlue.green = 79;
mediumBlue.blue = 255;

var magenta = new RGBColor();
magenta.red = 255;
magenta.green = 79;
magenta.blue = 255;

var cyan = new RGBColor();
cyan.red = 79;
cyan.green = 255;
cyan.blue = 255;

var yellow = new RGBColor();
yellow.red = 255;
yellow.green = 255;
yellow.blue = 79;

var lightGray = new RGBColor();
lightGray.red = 187;
lightGray.green = 187;
lightGray.blue = 187;

var black = new RGBColor();
black.red = 0;
black.green = 0;
black.blue = 0;

var orange = new RGBColor();
orange.red = 255;
orange.green = 102;
orange.blue = 0;

var darkGreen = new RGBColor();
darkGreen.red = 0;
darkGreen.green = 85;
darkGreen.blue = 0;

var teal = new RGBColor();
teal.red = 0;
teal.green = 153;
teal.blue = 153;

var tan = new RGBColor();
tan.red = 204;
tan.green = 153;
tan.blue = 102;

var brown = new RGBColor();
brown.red = 153;
brown.green = 51;
brown.blue = 0;

var violet = new RGBColor();
violet.red = 153;
violet.green = 51;
violet.blue = 255;

var gold = new RGBColor();
gold.red = 255;
gold.green = 153;
gold.blue = 0;

var darkBlue = new RGBColor();
darkBlue.red = 0;
darkBlue.green = 0;
darkBlue.blue = 136;

var pink = new RGBColor();
pink.red = 255;
pink.green = 153;
pink.blue = 204;

var lavender = new RGBColor();
lavender.red = 153;
lavender.green = 153;
lavender.blue = 255;

var brickRed = new RGBColor();
brickRed.red = 153;
brickRed.green = 0;
brickRed.blue = 0;

var olive = new RGBColor();
olive.red = 102;
olive.green = 102;
olive.blue = 0;

var peach = new RGBColor();
peach.red = 255;
peach.green = 153;
peach.blue = 153;

var burgundy = new RGBColor();
burgundy.red = 153;
burgundy.green = 0;
burgundy.blue = 51;

var grassGreen = new RGBColor();
grassGreen.red = 153;
grassGreen.green = 204;
grassGreen.blue = 0;

var ochre = new RGBColor();
ochre.red = 153;
ochre.green = 102;
ochre.blue = 0;

var purple = new RGBColor();
purple.red = 102;
purple.green = 0;
purple.blue = 102;

var gray = new RGBColor();
gray.red = 128;
gray.green = 128;
gray.blue = 128;

//Create and Populate Array with Default Colors
var illustratorLayerColors = new Array (lightBlue, 
                                        lightRed, 
                                        green, 
                                        mediumBlue, 
                                        magenta, 
                                        cyan, 
                                        yellow, 
                                        lightGray, 
                                        black,
                                        orange,
                                        darkGreen,
                                        teal,
                                        tan,
                                        brown,
                                        violet,
                                        gold,
                                        darkBlue,
                                        pink,
                                        lavender,
                                        brickRed,
                                        olive,
                                        peach,
                                        burgundy,
                                        grassGreen,
                                        ochre,
                                        purple,
                                        gray);

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var docLayers = doc.layers;
    var layerCount = docLayers.length;
    
    for (var a=0; a<layerCount; a++) {
    // Deselect any Object
    app.activeDocument.selection = null;
        
    // Set Layer Color to for-loop index 
    doc.layers[a].color = illustratorLayerColors[a % 28];
    }
}