$(function(){
	function get(q ,num){
		var oc=$(q);
	
	var ogc=oc.get(0).getContext('2d');
	var x=oc.get(0).width/2;
	var y=oc.get(0).height/2;
	var rad=Math.PI*2/100;
	var r=100;
	var speed=0.1;
	
	
	
	function blueCircle(n){
		ogc.save();
	    ogc.strokeStyle='#2C3E50';
	   
	    ogc.lineWidth=10;
	    ogc.beginPath();
	    ogc.arc(x,y,r-4,-Math.PI/2,  n*rad-Math.PI/2,false);
	    ogc.stroke();
	    ogc.closePath()
	    ogc.restore();
	}
	
	
	
	function redCircle(){
		ogc.save();
		ogc.beginPath();
	    ogc.strokeStyle='#DDDDDD';
	    ogc.lineWidth=10;
	   
	    ogc.arc(x,y,r-4,0,2*Math.PI,false);
	    ogc.stroke();
	    ogc.closePath()
	    ogc.restore();
	}
	
	function textCricle(n){
		ogc.save();
	    ogc.strokeStyle='#2C3E50';
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
     t(num);
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
    },5)
    }
	}
	get('#oC',70);
	get('#oC1',80)
	get('#oC2',70)
	get('#oC3',70)
})