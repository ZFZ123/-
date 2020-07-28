;
(function (window) {
	function Drag(id, boxId) {
		if (id && document.getElementById(id)) {
			this.dragObj = document.getElementById(id)
			this.outBox = boxId ? document.getElementById(boxId) : document.body
			this.dragObj.style.position = "absolute"
			this.outBox.style.position = "relative"
			this.init()
		} else {
			throw new Error('请传入正确的元素id444')
		}
	}
	Drag.prototype = {
		init() {
			this.dragObj.onmousedown = (evt) => {
				evt = evt || window.event;
				var disX = evt.offsetX;
				var disY = evt.offsetY;
				document.onmousemove = (evt) => {
					evt = evt || window.event;
					var Left = evt.clientX - disX - this.outBox.offsetLeft;
					var Top = evt.clientY - disY - this.outBox.offsetTop;

					if (Left <= 0) {
						Left = 0
					}
					if (Left >= this.outBox.offsetWidth - this.dragObj.offsetWidth) {
						Left = this.outBox.offsetWidth - this.dragObj.offsetWidth
					}
					if (Top < 0) {
						Top = 0
					}
					if (Top >= this.outBox.offsetHeight - this.dragObj.offsetHeight) {
						Top = this.outBox.offsetHeight - this.dragObj.offsetHeight
					}
					this.dragObj.style.left = Left + "px";
					this.dragObj.style.top = Top + "px";
				}
			}
			document.onmouseup = () => {
				document.onmousemove = null;
			}
		}
	}
	window.Drag = Drag
})(window)