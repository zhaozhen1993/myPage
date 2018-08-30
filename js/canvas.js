$(function(){
	var oc=$('#oC');
	
	var ogc=oc.get(0).getContext('2d');
	var x=oc.get(0).width/2;
	var y=oc.get(0).height/2;
	var rad=Math.PI/100;
	var speed=0.1
	
	
	function blueCircle(n){
		ogc.save();
	    ogc.strokeStyle='#fff';
	   
	    ogc.lineWidth=5;
	    ogc.beginPath();
	    ogc.arc(x,y,100,-Math.PI/2, -Math.PI/2 +n*rad,false);
	    ogc.stroke();
	    ogc.closePath()
	    ogc.restore();
	}
	
	
	
	function redCircle(){
		ogc.save();
		ogc.beginPath();
	    ogc.strokeStyle='red';
	    ogc.lineWidth=2;
	   
	    ogc.arc(x,y,100,0,360*Math.PI/180,false);
	    ogc.stroke();
	    ogc.closePath()
	    ogc.restore();
	}
	
	function textCricle(n){
		ogc.save();
	    ogc.strokeStyle='#ffffff';
	    ogc.font='40px Arial'
	   
	    ogc.strokeText(n.toFixed(0)+"%", x-25, y+10)
	    ogc.stroke();
	    ogc.restore();
	}
	
//  textCricle(speed);
//	(function drawFrame(){
//          window.requestAnimationFrame(drawFrame);
//          ogc.clearRect(0, 0, oc.get(0).width, oc.get(0).height);
//          redCircle();
//          textCricle(speed);          
//          blueCircle(speed);
//          if(speed > 100) speed = 0;
//          speed += 0.1;
//      }());
     t(30);
    function t(s){    
    var timer=setInterval(function(){
    	 ogc.clearRect(0, 0, oc.get(0).width, oc.get(0).height);
    	 redCircle();
         textCricle(speed);          
         blueCircle(speed);
         speed+=0.1;
         console.log(s)
         if(speed>=s){
         	clearInterval(timer);
         }
    },10)
    }
	
})