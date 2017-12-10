function drag(id,boxId){
			var obj = document.getElementById(id)
			var oBox = document.getElementById(boxId)
			obj.style.position="absolute"
			oBox.style.position="relative"
			obj.onmousedown = function(evt){
				 evt = evt || window.event;
				 var disX = evt.offsetX;
				 var disY = evt.offsetY;
				 document.onmousemove = function(evt){
				 	evt = evt || window.event;
				 	var Left = evt.clientX - disX-oBox.offsetLeft;
				 	var Top = evt.clientY - disY-oBox.offsetTop;
				 	
				 	if(Left <= 0){
				 		Left = 0
				 	}if(Left >= oBox.offsetWidth-obj.offsetWidth){
				 		Left = oBox.offsetWidth-obj.offsetWidth
				 	}
				 	if(Top<0){
				 		Top = 0
				 	}if(Top >=oBox.offsetHeight-obj.offsetHeight){
				 		Top = oBox.offsetHeight-obj.offsetHeight
				 	}
				 	obj.style.left = Left + "px";
				 	obj.style.top = Top + "px";
				 }
				 document.onmouseup = function(){
				 	document.onmousemove = null;
				 }
			}
		}	
