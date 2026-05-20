let img;

function preload() {
  // כאן שמתי את השם הנכון שציינת: crocshand_.png
  img = loadImage('images/crocshand_.png'); 
}

function setup() {
  // יצירת הקנבס פעם אחת בלבד
  let canvas = createCanvas(windowWidth, windowHeight);
  
  // הגדרות מיקום - כדי שיצוף מעל האתר
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '10000'); 
  canvas.style('pointer-events', 'none'); 
}

function draw() {
  clear(); // ניקוי המסך בכל פריים לשמירה על שקיפות
  
  if (img) {
    imageMode(CENTER);
    // ציור הקרוקס במיקום העכבר
    image(img, mouseX, mouseY, 80, 80);
  }
}

function windowResized() {
  // התאמת הקנבס אם חלון הדפדפן משנה גודל
  resizeCanvas(windowWidth, windowHeight);
}
