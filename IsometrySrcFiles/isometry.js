class IsoEngine {
    constructor() {
      var canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 322;
      canvas.id = "Iso_Engine_Canvas";
      canvas.style.border = 'none';
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.src = 'https://github.com/stalepretzels/isoengine/blob/Indev-1/src/Iso_Basic_Element/Base.png?raw=true';
      img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        document.body.appendChild(canvas);
      };
    }
    RenderEngine = class {
      TestCube() {
        var canvasIso = document.getElementById('Iso_Engine_Canvas')
        var ctx = canvasIso.getContext('2d');
        var img = new Image();
        img.src = 'https://github.com/stalepretzels/isoengine/blob/Indev-1/src/Iso_Basic_Element/element_0.png?raw=true';
        img.onload = function () {
          ctx.drawImage(img, 144, 64);//0, 0
        }
      }
      cube(x = 0, y = 0) {
        var canvasIso = document.getElementById('Iso_Engine_Canvas')
        var ctx = canvasIso.getContext('2d');
        var img = new Image();
        img.src = 'https://github.com/stalepretzels/isoengine/blob/Indev-1/src/Iso_Basic_Element/element_0.png?raw=true';
        img.onload = function () {
          ctx.drawImage(img, 144 - (Math.round(y) * 16) + (Math.round(x) * 16), 64 + (Math.round(y) * 8) + (Math.round(x) * 8));//0, 0
        }
  
      }
    };
  };
  