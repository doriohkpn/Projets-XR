// Garden Gnome Software - Skin
// Pano2VR 8.0.6/22615
// Filename: CeGPA Skins.ggsk
// Generated 2026-09-01T08:44:11Z

function pano2vrSkin(player,base) {
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	var pano=player;
	player.setApiVersion(7);
	this.rasterizeHTML = player.getRasterizeHTML();
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	me.fontsLoaded=0;
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i,hs,el,els,elo,ela,geometry,material;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	this._=function(text, params) {
		return player._(text, params);
	}
	
	player.setMargins({'left': {'value': 0, 'unit': 'px'}, 'top': {'value': 0, 'unit': 'px'}, 'right': {'value': 0, 'unit': 'px'}, 'bottom': {'value': 0, 'unit': 'px'}});
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		if (player.is3dModel()) {
			let hg = player.get3dHotspotGroup();
			if (hg) {
				let startObject = null;
				if (startElement !== undefined && startElement != me.divSkin) {
					if (startElement.ggId) {
						hg.traverse(function(el) {
							if (el.userData && el.userData.ggId === startElement.ggId) {
								startObject = el;
							}
						});
					}
				} else {
					startObject = hg;
				}
				if (startObject) {
					startObject.traverse(function(el) {
						if (el.userData && el.userData.ggUpdatePosition) {
							el.userData.ggUpdatePosition();
						}
					});
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	
	this.getClassStyles = function(className) {
		className = '.' + className;
		for (let sheet of document.styleSheets) {
			try {
				for (let rule of sheet.cssRules || sheet.rules) {
					if (rule.selectorText === className) {
						return rule.style;
					}
				}
			} catch (e) {
				console.warn("Cannot access stylesheet: ", e);
			}
		}
		return null;
	};
	this.paintTextDivToCanvas = function(el, stylesString, textureHeightFromEl, autoSize, scrollbar, measureOnly) {
		if (measureOnly === undefined) measureOnly = false;
		const skinStyles = skin.getClassStyles('ggskin');
		const skinTextStyles = skin.getClassStyles('ggskin_text');
		const skinStylesString = skinStyles ? skinStyles.cssText : '';
		const skinTextStylesString = skinTextStyles ? skinTextStyles.cssText : '';
		let elementStylesString = '';
		if (Array.isArray(el.userData.cssClasses)) {
			el.userData.cssClasses.forEach(function(className) {
				const classStyles = skin.getClassStyles(className);
				if (classStyles) {
					elementStylesString += classStyles.cssText;
				}
			});
		}
		const outerDiv = document.createElement('div');
		const textDiv = document.createElement('div');
		textDiv.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
		textDiv.style = skinStylesString + skinTextStylesString + elementStylesString + stylesString;
		textDiv.innerHTML = el.userData.ggText;
		textDiv.style.position = 'absolute';
		textDiv.style.left = '0px';
		textDiv.style.top = '0px';
		const styleTag = document.createElement('style');
		styleTag.type = 'text/css';
		styleTag.appendChild(document.createTextNode("@font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; src: local(''), url('fonts/montserrat-latin-regular.woff2') format('woff2'); } .montserrat_regular { font-family: 'Montserrat', sans-serif; font-weight: 400; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }"));
		outerDiv.appendChild(styleTag);
		outerDiv.appendChild(textDiv);
		document.body.appendChild(outerDiv);
		el.userData.boxWidthCanv = textDiv.clientWidth;
		el.userData.totalHeightCanv = textDiv.clientHeight;
		elStyle = window.getComputedStyle(textDiv);
		const lineHeight = elStyle.lineHeight;
		if (lineHeight !== 'normal') {
			el.userData.lineHeight = parseFloat(lineHeight);
		} else {
			el.userData.lineHeight = parseFloat(elStyle.fontSize) * 1.2;
		}
		if (measureOnly) {
			document.body.removeChild(outerDiv);
			return;
		}
		var canv = el.userData.tmpCanvas;
		var ctx = el.userData.tmpCanvasContext;
		canv.width = textDiv.clientWidth * 2;
		canv.height = textDiv.clientHeight * 2;
		ctx.clearRect(0, 0, canv.width, canv.height);
		if (autoSize) {
			el.userData.boxHeightCanv = el.userData.totalHeightCanv;
		} else {
			el.userData.boxHeightCanv = el.userData.height;
		}
		if (scrollbar && textDiv.clientHeight > el.userData.height) {
			el.userData.textCanvas.width = el.userData.width * 2;
		} else {
			el.userData.textCanvas.width = el.userData.boxWidthCanv * 2;
		}
		el.userData.textCanvas.height = el.userData.boxHeightCanv * 2;
		this.rasterizeHTML.drawHTML(outerDiv.innerHTML, canv, {zoom: 2, baseUrl: player.getBasePath() }).then((renderResult) => {
			el.userData.ggTextureFromCanvas();
		}, (err) => {
			console.error('Error rendering HTML to canvas:', err);
		});
		document.body.removeChild(outerDiv);
	};
	this.rectMaxRadius = function(el) {
		return Math.min(el.userData.width / 2.0 + (el.userData.borderWidth.left + el.userData.borderWidth.right) / 2.0, el.userData.height / 2.0 + (el.userData.borderWidth.top + el.userData.borderWidth.bottom) / 2.0);
	}
	this.rectCalcBorderRadiiInnerShape = function(el) {
		let maxRad = skin.rectMaxRadius(el);
		let bwTopLeft = (el.userData.borderWidth.top + el.userData.borderWidth.left) / 2.0;
		let brTopLeft = Math.max(el.userData.borderRadius.topLeft - bwTopLeft, 0.0);
		brTopLeft = Math.min(brTopLeft, maxRad - bwTopLeft);
		let bwTopRight = (el.userData.borderWidth.top + el.userData.borderWidth.right) / 2.0;
		let brTopRight = Math.max(el.userData.borderRadius.topRight - bwTopRight, 0.0);
		brTopRight = Math.min(brTopRight, maxRad - bwTopRight);
		let bwBottomRight = (el.userData.borderWidth.bottom + el.userData.borderWidth.right) / 2.0;
		let brBottomRight = Math.max(el.userData.borderRadius.bottomRight - bwBottomRight, 0.0);
		brBottomRight = Math.min(brBottomRight, maxRad - bwBottomRight);
		let bwBottomLeft = (el.userData.borderWidth.bottom + el.userData.borderWidth.left) / 2.0;
		let brBottomLeft = Math.max(el.userData.borderRadius.bottomLeft - bwBottomLeft, 0.0);
		brBottomLeft = Math.min(brBottomLeft, maxRad - bwBottomLeft);
		el.userData.borderRadiusInnerShape = {
			topLeft: brTopLeft,
			topRight: brTopRight,
			bottomRight: brBottomRight,
			bottomLeft: brBottomLeft
		};
	}
	this.rectHasRoundedCorners = function(el) {
		return (el.userData.borderRadius.topLeft > 0 || el.userData.borderRadius.topRight > 0 || el.userData.borderRadius.bottomRight > 0 || el.userData.borderRadius.bottomLeft > 0);
	}
	this.disposeGeometryAndMaterial = function(el) {
		if (el.geometry) el.geometry.dispose();
		el.geometry = null;
		if (el.material) el.material.dispose();
	}
	this.removeChildren = function(el, filter) {
		if (filter === undefined) filter ='^.*$';
		const pattern = new RegExp(filter);
		for (let i = el.children.length - 1; i >= 0; i--) {
			let child = el.children[i];
			if (pattern.test(child.name)) {
				if (child.isMesh) {
					skin.disposeGeometryAndMaterial(child);
				}
				el.remove(child);
			}
		}
	};
	this.getDepthFrom = function(root, object) {
		let depth = 0;
		let current = object;
		while (current && current !== root) {
			if (current.userData && current.userData.hasOwnProperty('ggId')) depth++;
			current = current.parent;
		}
		return current === root ? depth : -1;
	};
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.addSkin=function() {
		var hs='';
		var el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		el.userData=el;
		hs ='';
		hs+='height : 119px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXpvb20taW4iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPgogPGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+CiA8bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9Ij'+
			'giIHkyPSIxNCIvPgogPGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz4KPC9zdmc+Cg==';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXpvb20taW4iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz4KIDxsaW5lIHgxPSIyMSIgeDI9IjE2LjY1IiB5MT0iMjEiIHkyPSIxNi42NSIvPgogPGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz4KID'+
			'xsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+Cjwvc3ZnPgo=';
		me._svg_5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_5.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me._svg_5.onmouseenter=function (e) {
			me._svg_5__img.style.visibility='hidden';
			me._svg_5__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_5']=true;
		}
		me._svg_5.onmouseleave=function (e) {
			me._svg_5__img.style.visibility='inherit';
			me._svg_5__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_5']=false;
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_5);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXpvb20tb3V0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz4KIDxsaW5lIHgxPSIyMSIgeDI9IjE2LjY1IiB5MT0iMjEiIHkyPSIxNi42NSIvPgogPGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9Ij'+
			'ExIiB5Mj0iMTEiLz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXpvb20tb3V0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+CiA8bGluZSB4MT0iMjEiIHgyPSIxNi42NSIgeTE9IjIxIiB5Mj0iMTYuNjUiLz4KIDxsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+Cj'+
			'wvc3ZnPgo=';
		me._svg_6__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 122px;';
		hs+='height : 48px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_6.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me._svg_6.onmouseenter=function (e) {
			me._svg_6__img.style.visibility='hidden';
			me._svg_6__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_6']=true;
		}
		me._svg_6.onmouseleave=function (e) {
			me._svg_6__img.style.visibility='inherit';
			me._svg_6__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_6']=false;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_6);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiLz4KIDxwb2x5bGluZSBwb2ludHM9IjkgMjEgMyAyMSAzIDE1Ii8+CiA8bGluZSB4MT0iMjEiIHgyPSIxNCIgeTE9IjMiIH'+
			'kyPSIxMCIvPgogPGxpbmUgeDE9IjMiIHgyPSIxMCIgeTE9IjIxIiB5Mj0iMTQiLz4KPC9zdmc+Cg==';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_8__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBwb2ludHM9IjE1IDMgMjEgMyAyMSA5Ii8+CiA8cG9seWxpbmUgcG9pbnRzPSI5IDIxIDMgMjEgMyAxNSIvPgogPGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiLz4KIDxsaW'+
			'5lIHgxPSIzIiB4Mj0iMTAiIHkxPSIyMSIgeTI9IjE0Ii8+Cjwvc3ZnPgo=';
		me._svg_8__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_8.onclick=function (e) {
			player.enterFullscreen();
		}
		me._svg_8.onmouseenter=function (e) {
			me._svg_8__img.style.visibility='hidden';
			me._svg_8__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_8']=true;
		}
		me._svg_8.onmouseleave=function (e) {
			me._svg_8__img.style.visibility='inherit';
			me._svg_8__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_8']=false;
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_8);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGxpbmUgeDE9IjE5IiB4Mj0iNSIgeTE9IjEyIiB5Mj0iMTIiLz4KIDxwb2x5bGluZSBwb2ludHM9IjEyIDE5IDUgMTIgMTIgNSIvPgo8L3N2Zz4K';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_11__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWxlZnQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxsaW5lIHgxPSIxOSIgeDI9IjUiIHkxPSIxMiIgeTI9IjEyIi8+CiA8cG9seWxpbmUgcG9pbnRzPSIxMiAxOSA1IDEyIDEyIDUiLz4KPC9zdmc+Cg==';
		me._svg_11__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 11";
		el.ggDx=-111;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) - 111px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_11.onclick=function (e) {
			player.changePanLog(1,true);
		}
		me._svg_11.onmouseenter=function (e) {
			me._svg_11__img.style.visibility='hidden';
			me._svg_11__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_11']=true;
		}
		me._svg_11.onmouseleave=function (e) {
			me._svg_11__img.style.visibility='inherit';
			me._svg_11__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_11']=false;
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_11);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXVwIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTkiIHkyPSI1Ii8+CiA8cG9seWxpbmUgcG9pbnRzPSI1IDEyIDEyIDUgMTkgMTIiLz4KPC9zdmc+Cg==';
		me._svg_12__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_12__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXVwIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjE5IiB5Mj0iNSIvPgogPHBvbHlsaW5lIHBvaW50cz0iNSAxMiAxMiA1IDE5IDEyIi8+Cjwvc3ZnPgo=';
		me._svg_12__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 12";
		el.ggDx=31;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 31px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_12.onclick=function (e) {
			player.changeTiltLog(1,true);
		}
		me._svg_12.onmouseenter=function (e) {
			me._svg_12__img.style.visibility='hidden';
			me._svg_12__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_12']=true;
		}
		me._svg_12.onmouseleave=function (e) {
			me._svg_12__img.style.visibility='inherit';
			me._svg_12__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_12']=false;
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_12);
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWRvd24iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSI1IiB5Mj0iMTkiLz4KIDxwb2x5bGluZSBwb2ludHM9IjE5IDEyIDEyIDE5IDUgMTIiLz4KPC9zdmc+Cg==';
		me._svg_13__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_13__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LWRvd24iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iNSIgeTI9IjE5Ii8+CiA8cG9seWxpbmUgcG9pbnRzPSIxOSAxMiAxMiAxOSA1IDEyIi8+Cjwvc3ZnPgo=';
		me._svg_13__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 13";
		el.ggDx=-38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) - 38px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_13.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_13.onclick=function (e) {
			player.changeTiltLog(-1,true);
		}
		me._svg_13.onmouseenter=function (e) {
			me._svg_13__img.style.visibility='hidden';
			me._svg_13__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_13']=true;
		}
		me._svg_13.onmouseleave=function (e) {
			me._svg_13__img.style.visibility='inherit';
			me._svg_13__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_13']=false;
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_13);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxsaW5lIHgxPSI1IiB4Mj0iMTkiIHkxPSIxMiIgeTI9IjEyIi8+CiA8cG9seWxpbmUgcG9pbnRzPSIxMiA1IDE5IDEyIDEyIDE5Ii8+Cjwvc3ZnPgo=';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8bGluZSB4MT0iNSIgeDI9IjE5IiB5MT0iMTIiIHkyPSIxMiIvPgogPHBvbHlsaW5lIHBvaW50cz0iMTIgNSAxOSAxMiAxMiAxOSIvPgo8L3N2Zz4K';
		me._svg_10__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 10";
		el.ggDx=97;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 97px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_10.onclick=function (e) {
			player.changePanLog(-1,true);
		}
		me._svg_10.onmouseenter=function (e) {
			me._svg_10__img.style.visibility='hidden';
			me._svg_10__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_10']=true;
		}
		me._svg_10.onmouseleave=function (e) {
			me._svg_10__img.style.visibility='inherit';
			me._svg_10__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_10']=false;
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_10);
		el=me._vr_button=document.createElement('div');
		els=me._vr_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJDYWxxdWVfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PS'+
			'IwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LjMsMThjLTAuNSwwLjYtMS4yLDEtMiwxSDQuNUMzLjEsMTksMiwxNy45LDIsMTYuNXYtN0MyLDguMywyLjksNy4zLDQsN2MwLjItMS4yLDEuMi0yLDIuNS0yaDExICBjMS4yLDAsMi4yLDAuOSwyLjUsMmMxLjIsMC4yLDIsMS4yLDIsMi41djdjMCwxLjQtMS4xLDIuNS0yLjUsMi41aC0yLjhjLTAuOCwwLTEuNS0wLjQtMi0xSDkuM3ogTTkuOCwxN2g0LjNjLTAuNC0wLjYtMS4xLTEtMS45LTEgIGgtMC42QzEwLjksMTYsMTAuMiwxNi40LDkuOCwx'+
			'N3ogTTUuMSw3aDEzLjhjLTAuMi0wLjYtMC44LTEtMS40LTFoLTExQzUuOCw2LDUuMyw2LjQsNS4xLDd6IE04LjgsMTYuOGMwLjUtMS4xLDEuNy0xLjgsMi45LTEuOGgwLjYgIGMxLjIsMCwyLjMsMC43LDIuOSwxLjhsMC4yLDAuNGMwLjMsMC41LDAuOCwwLjgsMS4zLDAuOGgyLjhjMC44LDAsMS41LTAuNywxLjUtMS41di03QzIxLDguNywyMC4zLDgsMTkuNSw4aC0xNUMzLjcsOCwzLDguNywzLDkuNSAgdjdDMywxNy4zLDMuNywxOCw0LjUsMThoMi44YzAuNiwwLDEuMS0wLjMsMS4zLTAuOEw4LjgsMTYuOHogTTcuNSwxNUM2LjEsMTUsNSwxMy45LDUsMTIuNVM2LjEsMTAsNy41LDEwczIuNSwxLj'+
			'EsMi41LDIuNSAgUzguOSwxNSw3LjUsMTV6IE03LjUsMTRDOC4zLDE0LDksMTMuMyw5LDEyLjVTOC4zLDExLDcuNSwxMVM2LDExLjcsNiwxMi41UzYuNywxNCw3LjUsMTR6IE0xNi41LDE1Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjUgIHMxLjEtMi41LDIuNS0yLjVzMi41LDEuMSwyLjUsMi41UzE3LjksMTUsMTYuNSwxNXogTTE2LjUsMTRjMC44LDAsMS41LTAuNywxLjUtMS41UzE3LjMsMTEsMTYuNSwxMWMtMC44LDAtMS41LDAuNy0xLjUsMS41ICBTMTUuNywxNCwxNi41LDE0eiIvPgo8L3N2Zz4K';
		me._vr_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vr_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik05LjI2NDAyNjA0LDE4IEM4Ljc5NzE5NDMzLDE4LjYyMjYxOTggOC4wNTkyMjY5NSwxOSA3LjI2MzkzMjAyLDE5IEw0LjUsMTkgQzMuMTE5Mjg4MTMsMTkgMiwxNy44ODA3MTE5IDIsMTYuNSBMMiw5LjUgQzIsOC4yNzU3Njg1NiAyLjg3OTk1OTgsNy4yNTcwNjI3NSA0LjA0MTg4MDk4LDcuMDQxODgwOTggQzQuMjU3MDYyNzUsNS44Nzk5NTk4IDUuMjc1NzY4NTYsNSA2LjUsNSBMMTcuNSw1IEMxOC43MjQyMzE0LDUgMTkuNzQyOT'+
			'M3Myw1Ljg3OTk1OTggMTkuOTU4MTE5LDcuMDQxODgwOTggQzIxLjEyMDA0MDIsNy4yNTcwNjI3NSAyMiw4LjI3NTc2ODU2IDIyLDkuNSBMMjIsMTYuNSBDMjIsMTcuODgwNzExOSAyMC44ODA3MTE5LDE5IDE5LjUsMTkgTDE2LjczNjA2OCwxOSBDMTUuOTQwNzczLDE5IDE1LjIwMjgwNTcsMTguNjIyNjE5OCAxNC43MzU5NzQsMTggTDkuMjY0MDI2MDQsMTggWiBNOS44MjU3Njk4NSwxNyBMMTQuMTc0MjMwMSwxNyBDMTMuNzY4NTExOSwxNi4zODA3NzczIDEzLjA3NDY1MjMsMTYgMTIuMzIyOTQ5LDE2IEwxMS42NzcwNTEsMTYgQzEwLjkyNTM0NzcsMTYgMTAuMjMxNDg4MSwxNi4zODA3NzczIDku'+
			'ODI1NzY5ODUsMTcgWiBNNS4wODUzNTI4NSw3IEwxOC45MTQ2NDcxLDcgQzE4LjcwODcyODksNi40MTc0MDM4MSAxOC4xNTMxMDk0LDYgMTcuNSw2IEw2LjUsNiBDNS44NDY4OTA1OSw2IDUuMjkxMjcxMDYsNi40MTc0MDM4MSA1LjA4NTM1Mjg1LDcgWiBNOC44MDI3ODY0LDE2Ljc3NjM5MzIgQzkuMzQ3MTMxOTYsMTUuNjg3NzAyMSAxMC40NTk4NTczLDE1IDExLjY3NzA1MSwxNSBMMTIuMzIyOTQ5LDE1IEMxMy41NDAxNDI3LDE1IDE0LjY1Mjg2OCwxNS42ODc3MDIxIDE1LjE5NzIxMzYsMTYuNzc2MzkzMiBMMTUuMzk0NDI3MiwxNy4xNzA4MjA0IEMxNS42NDg1MTUyLDE3LjY3ODk5NjQgMTYuMT'+
			'Y3OTA5OSwxOCAxNi43MzYwNjgsMTggTDE5LjUsMTggQzIwLjMyODQyNzEsMTggMjEsMTcuMzI4NDI3MSAyMSwxNi41IEwyMSw5LjUgQzIxLDguNjcxNTcyODggMjAuMzI4NDI3MSw4IDE5LjUsOCBMNC41LDggQzMuNjcxNTcyODgsOCAzLDguNjcxNTcyODggMyw5LjUgTDMsMTYuNSBDMywxNy4zMjg0MjcxIDMuNjcxNTcyODgsMTggNC41LDE4IEw3LjI2MzkzMjAyLDE4IEM3LjgzMjA5MDExLDE4IDguMzUxNDg0NzksMTcuNjc4OTk2NCA4LjYwNTU3MjgxLDE3LjE3MDgyMDQgTDguODAyNzg2NCwxNi43NzYzOTMyIFogTTcuNSwxNSBDNi4xMTkyODgxMywxNSA1LDEzLjg4MDcxMTkgNSwxMi41IEM1'+
			'LDExLjExOTI4ODEgNi4xMTkyODgxMywxMCA3LjUsMTAgQzguODgwNzExODcsMTAgMTAsMTEuMTE5Mjg4MSAxMCwxMi41IEMxMCwxMy44ODA3MTE5IDguODgwNzExODcsMTUgNy41LDE1IFogTTcuNSwxNCBDOC4zMjg0MjcxMiwxNCA5LDEzLjMyODQyNzEgOSwxMi41IEM5LDExLjY3MTU3MjkgOC4zMjg0MjcxMiwxMSA3LjUsMTEgQzYuNjcxNTcyODgsMTEgNiwxMS42NzE1NzI5IDYsMTIuNSBDNiwxMy4zMjg0MjcxIDYuNjcxNTcyODgsMTQgNy41LDE0IFogTTE2LjUsMTUgQzE1LjExOTI4ODEsMTUgMTQsMTMuODgwNzExOSAxNCwxMi41IEMxNCwxMS4xMTkyODgxIDE1LjExOTI4ODEsMTAgMTYuNS'+
			'wxMCBDMTcuODgwNzExOSwxMCAxOSwxMS4xMTkyODgxIDE5LDEyLjUgQzE5LDEzLjg4MDcxMTkgMTcuODgwNzExOSwxNSAxNi41LDE1IFogTTE2LjUsMTQgQzE3LjMyODQyNzEsMTQgMTgsMTMuMzI4NDI3MSAxOCwxMi41IEMxOCwxMS42NzE1NzI5IDE3LjMyODQyNzEsMTEgMTYuNSwxMSBDMTUuNjcxNTcyOSwxMSAxNSwxMS42NzE1NzI5IDE1LDEyLjUgQzE1LDEzLjMyODQyNzEgMTUuNjcxNTcyOSwxNCAxNi41LDE0IFoiLz4KPC9zdmc+Cg==';
		me._vr_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="vr_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 48px;';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='position : absolute;';
		hs+='right : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		hs+='-webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.75)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.75)); will-change: transform;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vr_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vr_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vr_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vr_button.style.transition='';
				if (me._vr_button.ggCurrentLogicStateVisible == 0) {
					me._vr_button.style.visibility=(Number(me._vr_button.style.opacity)>0||!me._vr_button.style.opacity)?'inherit':'hidden';
					me._vr_button.ggVisible=true;
				}
				else {
					me._vr_button.style.visibility=(Number(me._vr_button.style.opacity)>0||!me._vr_button.style.opacity)?'inherit':'hidden';
					me._vr_button.ggVisible=true;
				}
			}
		}
		me._vr_button.onclick=function (e) {
			player.enterVR();
		}
		me._vr_button.onmouseenter=function (e) {
			me._vr_button__img.style.visibility='hidden';
			me._vr_button__imgo.style.visibility='inherit';
			me.elementMouseOver['vr_button']=true;
		}
		me._vr_button.onmouseleave=function (e) {
			me._vr_button__img.style.visibility='inherit';
			me._vr_button__imgo.style.visibility='hidden';
			me.elementMouseOver['vr_button']=false;
		}
		me._vr_button.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._vr_button);
		el=me._url_popup=document.createElement('div');
		el.ggId="url_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._url_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._url_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._url_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._url_popup.ggCurrentLogicStateSize == 0) {
					me._url_popup.style.width='calc(100% - 240px)';
					me._url_popup.style.height='calc(100% - 320px)';
					me._url_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._url_popup.style.top = 'calc(50% - (calc(100% - 320px) / 2))';
					setTimeout(function() {skin.updateSize(me._url_popup);}, 850);
				}
				else {
					me._url_popup.style.width='calc(100% - 240px)';
					me._url_popup.style.height='calc(100% - 240px)';
					me._url_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._url_popup.style.top = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._url_popup);}, 850);
				}
			}
		}
		me._url_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._url_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._url_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._url_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._url_popup.ggCurrentLogicStateAlpha == 0) {
					me._url_popup.style.visibility=me._url_popup.ggVisible?'inherit':'hidden';
					me._url_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._url_popup.style.opacity == 0.0) { me._url_popup.style.visibility="hidden"; } }, 505);
					me._url_popup.style.opacity=0;
				}
			}
		}
		me._url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_popup_bg=document.createElement('div');
		el.ggId="url_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_bg);
		el=me._url_popup_iframe=document.createElement('div');
		els=me._url_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_iframe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_iframe);
		el=me._url_popup_title=document.createElement('div');
		els=me._url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_title);
		el=me._url_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="url_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_top.onclick=function (e) {
			player.setVariableValue('vis_url_popup', false);
		}
		me._url_popup_top.onmouseenter=function (e) {
			me.elementMouseOver['url_popup_top']=true;
			me._url_popup_close_btn.logicBlock_visible();
			me._url_popup_close_btn_active.logicBlock_visible();
		}
		me._url_popup_top.onmouseleave=function (e) {
			me.elementMouseOver['url_popup_top']=false;
			me._url_popup_close_btn.logicBlock_visible();
			me._url_popup_close_btn_active.logicBlock_visible();
		}
		me._url_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_popup_close_btn=document.createElement('div');
		els=me._url_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._url_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="url_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['url_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_popup_close_btn.style.transition='';
				if (me._url_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._url_popup_close_btn.style.visibility="hidden";
					me._url_popup_close_btn.ggVisible=false;
				}
				else {
					me._url_popup_close_btn.style.visibility=(Number(me._url_popup_close_btn.style.opacity)>0||!me._url_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._url_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._url_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup_top.appendChild(me._url_popup_close_btn);
		el=me._url_popup_close_btn_active=document.createElement('div');
		els=me._url_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._url_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="url_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['url_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_popup_close_btn_active.style.transition='';
				if (me._url_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._url_popup_close_btn_active.style.visibility=(Number(me._url_popup_close_btn_active.style.opacity)>0||!me._url_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._url_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._url_popup_close_btn_active.style.visibility="hidden";
					me._url_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._url_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup_top.appendChild(me._url_popup_close_btn_active);
		me._url_popup.appendChild(me._url_popup_top);
		me.divSkin.appendChild(me._url_popup);
		el=me._pdf_popup=document.createElement('div');
		el.ggId="pdf_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._pdf_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._pdf_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._pdf_popup.ggCurrentLogicStateSize == 0) {
					me._pdf_popup.style.width='calc(100% - 240px)';
					me._pdf_popup.style.height='calc(100% - 320px)';
					me._pdf_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._pdf_popup.style.top = 'calc(50% - (calc(100% - 320px) / 2))';
					setTimeout(function() {skin.updateSize(me._pdf_popup);}, 850);
				}
				else {
					me._pdf_popup.style.width='calc(100% - 240px)';
					me._pdf_popup.style.height='calc(100% - 240px)';
					me._pdf_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._pdf_popup.style.top = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._pdf_popup);}, 850);
				}
			}
		}
		me._pdf_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._pdf_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._pdf_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._pdf_popup.ggCurrentLogicStateAlpha == 0) {
					me._pdf_popup.style.visibility=me._pdf_popup.ggVisible?'inherit':'hidden';
					me._pdf_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._pdf_popup.style.opacity == 0.0) { me._pdf_popup.style.visibility="hidden"; } }, 505);
					me._pdf_popup.style.opacity=0;
				}
			}
		}
		me._pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_bg=document.createElement('div');
		el.ggId="pdf_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_bg);
		el=me._popup_pdf=document.createElement('div');
		els=me._popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._popup_pdf__pdf.setAttribute('frameborder', '0');
		me._popup_pdf__pdf.setAttribute('width', '100%');
		me._popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._popup_pdf.ggPdfSource == file) return;
				me._popup_pdf.pdfNotLoaded = false;
				me._popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._popup_pdf.ggPdfSource.indexOf(':') != -1 || me._popup_pdf.ggPdfSource.startsWith('/') || me._popup_pdf.ggPdfSource.startsWith('./')) ? me._popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._popup_pdf.ggPdfSource;
				me._popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._popup_pdf__pdf.style.display = 'block';
			} else {
				me._popup_pdf__pdf.setAttribute('src', '');
				me._popup_pdf__pdf.style.display = 'none';
				me._popup_pdf.pdfNotLoaded = true;
				me._popup_pdf.ggPdfSource = '';
			}
		}
		me._popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0 && me._popup_pdf__pdf) me._popup_pdf__pdf.setAttribute('data-ggnome-goto-page', String(page));
			let viewer = me._popup_pdf__pdf && me._popup_pdf__pdf.contentWindow ? me._popup_pdf__pdf.contentWindow.GGnomePDFViewer : null;
			return !isNaN(page) && page > 0 && (!viewer || viewer.gotoPage(page));
		}
		me._popup_pdf.ggInitPdf('');
		el.ggId="popup_pdf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 25px;';
		hs+='height : calc(100% - 110px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_pdf.style.transition='';
				if (me._popup_pdf.ggCurrentLogicStateVisible == 0) {
					me._popup_pdf.style.visibility=(Number(me._popup_pdf.style.opacity)>0||!me._popup_pdf.style.opacity)?'inherit':'hidden';
					if (me._popup_pdf.ggPdfNotLoaded) {
						me._popup_pdf.ggInitPdf(me._popup_pdf.ggPdfSource);
					}
					me._popup_pdf.ggVisible=true;
				}
				else {
					me._popup_pdf.style.visibility="hidden";
					if (me._popup_pdf.ggInitPdf) me._popup_pdf.ggInitPdf();
					me._popup_pdf.ggVisible=false;
				}
			}
		}
		me._popup_pdf.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
		}
		me._popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._popup_pdf);
		el=me._pdf_popup_title=document.createElement('div');
		els=me._pdf_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_title);
		el=me._pdf_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="pdf_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup_top.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
		}
		me._pdf_popup_top.onmouseenter=function (e) {
			me.elementMouseOver['pdf_popup_top']=true;
			me._pdf_popup_close_btn.logicBlock_visible();
			me._pdf_popup_close_btn_active.logicBlock_visible();
		}
		me._pdf_popup_top.onmouseleave=function (e) {
			me.elementMouseOver['pdf_popup_top']=false;
			me._pdf_popup_close_btn.logicBlock_visible();
			me._pdf_popup_close_btn_active.logicBlock_visible();
		}
		me._pdf_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_close_btn=document.createElement('div');
		els=me._pdf_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._pdf_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pdf_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pdf_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_close_btn.style.transition='';
				if (me._pdf_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_close_btn.style.visibility="hidden";
					me._pdf_popup_close_btn.ggVisible=false;
				}
				else {
					me._pdf_popup_close_btn.style.visibility=(Number(me._pdf_popup_close_btn.style.opacity)>0||!me._pdf_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._pdf_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._pdf_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup_top.appendChild(me._pdf_popup_close_btn);
		el=me._pdf_popup_close_btn_active=document.createElement('div');
		els=me._pdf_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._pdf_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pdf_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pdf_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_close_btn_active.style.transition='';
				if (me._pdf_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_close_btn_active.style.visibility=(Number(me._pdf_popup_close_btn_active.style.opacity)>0||!me._pdf_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._pdf_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._pdf_popup_close_btn_active.style.visibility="hidden";
					me._pdf_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._pdf_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup_top.appendChild(me._pdf_popup_close_btn_active);
		me._pdf_popup.appendChild(me._pdf_popup_top);
		me.divSkin.appendChild(me._pdf_popup);
		el=me._info_popup=document.createElement('div');
		el.ggId="info_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(60% - 240px);';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(60% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_popup.style.transition='opacity 500ms ease 0ms';
				if (me._info_popup.ggCurrentLogicStateAlpha == 0) {
					me._info_popup.style.visibility=me._info_popup.ggVisible?'inherit':'hidden';
					me._info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_popup.style.opacity == 0.0) { me._info_popup.style.visibility="hidden"; } }, 505);
					me._info_popup.style.opacity=0;
				}
			}
		}
		me._info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_bg=document.createElement('div');
		el.ggId="info_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_bg);
		el=me._info_popup_text=document.createElement('div');
		els=me._info_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_text);
		el=me._info_popup_title=document.createElement('div');
		els=me._info_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_title);
		el=me._info_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="info_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_top.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_info', false);
		}
		me._info_popup_top.onmouseenter=function (e) {
			me.elementMouseOver['info_popup_top']=true;
			me._info_popup_close_btn.logicBlock_visible();
			me._info_popup_close_btn_active.logicBlock_visible();
		}
		me._info_popup_top.onmouseleave=function (e) {
			me.elementMouseOver['info_popup_top']=false;
			me._info_popup_close_btn.logicBlock_visible();
			me._info_popup_close_btn_active.logicBlock_visible();
		}
		me._info_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_close_btn=document.createElement('div');
		els=me._info_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._info_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_close_btn.style.transition='';
				if (me._info_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._info_popup_close_btn.style.visibility="hidden";
					me._info_popup_close_btn.ggVisible=false;
				}
				else {
					me._info_popup_close_btn.style.visibility=(Number(me._info_popup_close_btn.style.opacity)>0||!me._info_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._info_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._info_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_top.appendChild(me._info_popup_close_btn);
		el=me._info_popup_close_btn_active=document.createElement('div');
		els=me._info_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._info_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_close_btn_active.style.transition='';
				if (me._info_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._info_popup_close_btn_active.style.visibility=(Number(me._info_popup_close_btn_active.style.opacity)>0||!me._info_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._info_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._info_popup_close_btn_active.style.visibility="hidden";
					me._info_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._info_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_top.appendChild(me._info_popup_close_btn_active);
		me._info_popup.appendChild(me._info_popup_top);
		me.divSkin.appendChild(me._info_popup);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._image_popup.ggCurrentLogicStateSize == 0) {
					me._image_popup.style.width='calc(100% - 240px)';
					me._image_popup.style.height='calc(100% - 320px)';
					me._image_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._image_popup.style.top = 'calc(50% - (calc(100% - 320px) / 2))';
					setTimeout(function() {skin.updateSize(me._image_popup);}, 850);
				}
				else {
					me._image_popup.style.width='calc(100% - 240px)';
					me._image_popup.style.height='calc(100% - 240px)';
					me._image_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					me._image_popup.style.top = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._image_popup);}, 850);
				}
			}
		}
		me._image_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, top 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._image_popup.ggCurrentLogicStateAlpha == 0) {
					me._image_popup.style.visibility=me._image_popup.ggVisible?'inherit':'hidden';
					me._image_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._image_popup.style.opacity == 0.0) { me._image_popup.style.visibility="hidden"; } }, 505);
					me._image_popup.style.opacity=0;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_popup_bg=document.createElement('div');
		el.ggId="image_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_bg);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;z-index: 2;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._popup_image.ggText_untranslated = img;
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._popup_image.ggText != player._(me._popup_image.ggText_untranslated)) {
				me._popup_image.ggText = player._(me._popup_image.ggText_untranslated);
				me._popup_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='height : calc(100% - 110px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9Ij'+
			'AiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMTI1cyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjI1cyIgY2FsY01vZGU9InNwbGlu'+
			'ZSIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MzswOzAiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4zNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZG'+
			'VmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjYyNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNzVzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBrZXlTcGxpbmVzPS'+
			'IwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMDszOzA7MCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjg3NXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDsw'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgcj0iMCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOzM7MDswIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._popup_image.appendChild(me._loading_image);
		me._image_popup.appendChild(me._popup_image);
		el=me._image_popup_title=document.createElement('div');
		els=me._image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_popup_title.ggUpdateText();
		el.appendChild(els);
		me._image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_title);
		el=me._image_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="image_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_top.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_top.onmouseenter=function (e) {
			me.elementMouseOver['image_popup_top']=true;
			me._image_popup_close_btn.logicBlock_visible();
			me._image_popup_close_btn_active.logicBlock_visible();
		}
		me._image_popup_top.onmouseleave=function (e) {
			me.elementMouseOver['image_popup_top']=false;
			me._image_popup_close_btn.logicBlock_visible();
			me._image_popup_close_btn_active.logicBlock_visible();
		}
		me._image_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_popup_close_btn=document.createElement('div');
		els=me._image_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._image_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="image_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['image_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close_btn.style.transition='';
				if (me._image_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close_btn.style.visibility="hidden";
					me._image_popup_close_btn.ggVisible=false;
				}
				else {
					me._image_popup_close_btn.style.visibility=(Number(me._image_popup_close_btn.style.opacity)>0||!me._image_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._image_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._image_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup_top.appendChild(me._image_popup_close_btn);
		el=me._image_popup_close_btn_active=document.createElement('div');
		els=me._image_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._image_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="image_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['image_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close_btn_active.style.transition='';
				if (me._image_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close_btn_active.style.visibility=(Number(me._image_popup_close_btn_active.style.opacity)>0||!me._image_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._image_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._image_popup_close_btn_active.style.visibility="hidden";
					me._image_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._image_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup_top.appendChild(me._image_popup_close_btn_active);
		me._image_popup.appendChild(me._image_popup_top);
		me.divSkin.appendChild(me._image_popup);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 500ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 505);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRGQjVDMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		me._screentint_phone.appendChild(me._close_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._screentint_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0 && me._pdf_popup_phone__pdf) me._pdf_popup_phone__pdf.setAttribute('data-ggnome-goto-page', String(page));
			let viewer = me._pdf_popup_phone__pdf && me._pdf_popup_phone__pdf.contentWindow ? me._pdf_popup_phone__pdf.contentWindow.GGnomePDFViewer : null;
			return !isNaN(page) && page > 0 && (!viewer || viewer.gotoPage(page));
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((4px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#3c3c3c';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-13px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 2 + 0) * percent);
					playheadpos += -13;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(90,90,90,0.392157) ' + currPos +'%, rgba(90,90,90,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(90,90,90,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._screentint_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true; }
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
			me._youtube_popup_phone__vid.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
			me._vimeo_popup_phone__vid.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.ggParameter.sx=1.5;me._video_file_popup_phone_play.ggParameter.sy=1.5;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_file_popup_phone_play);}, 350);
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.ggParameter.sx=1;me._video_file_popup_phone_play.ggParameter.sy=1;
			me._video_file_popup_phone_play.style.transform=parameterToTransform(me._video_file_popup_phone_play.ggParameter);
			skin.updateSize(me._video_file_popup_phone_play);
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseenter=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=true;
			me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_file_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_phone_play.onmouseleave=function (e) {
			me.elementMouseOver['video_file_popup_phone_play']=false;
			me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_file_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_popup_phone_play_icon_active=document.createElement('div');
		els=me._video_file_popup_phone_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._video_file_popup_phone_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_phone_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_phone_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_file_popup_phone_play_icon_active.style.visibility=me._video_file_popup_phone_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_file_popup_phone_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_file_popup_phone_play_icon_active.style.opacity == 0.0) { me._video_file_popup_phone_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_file_popup_phone_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_file_popup_phone_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon_active);
		el=me._video_file_popup_phone_play_icon=document.createElement('div');
		els=me._video_file_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_file_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_file_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_file_popup_phone_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_file_popup_phone_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_file_popup_phone_play_icon.style.opacity == 0.0) { me._video_file_popup_phone_play_icon.style.visibility="hidden"; } }, 205);
					me._video_file_popup_phone_play_icon.style.opacity=0;
				}
				else {
					me._video_file_popup_phone_play_icon.style.visibility=me._video_file_popup_phone_play_icon.ggVisible?'inherit':'hidden';
					me._video_file_popup_phone_play_icon.style.opacity=1;
				}
			}
		}
		me._video_file_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_popup_phone_play.appendChild(me._video_file_popup_phone_play_icon);
		me._screentint_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 300ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.ggParameter.sx=1.5;me._video_url_popup_phone_play.ggParameter.sy=1.5;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			setTimeout(function() {skin.updateSize(me._video_url_popup_phone_play);}, 350);
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.ggParameter.sx=1;me._video_url_popup_phone_play.ggParameter.sy=1;
			me._video_url_popup_phone_play.style.transform=parameterToTransform(me._video_url_popup_phone_play.ggParameter);
			skin.updateSize(me._video_url_popup_phone_play);
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._screentint_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseenter=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=true;
			me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_url_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_phone_play.onmouseleave=function (e) {
			me.elementMouseOver['video_url_popup_phone_play']=false;
			me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
			me._video_url_popup_phone_play_icon.logicBlock_alpha();
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_popup_phone_play_icon_active=document.createElement('div');
		els=me._video_url_popup_phone_play_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+Cjwvc3ZnPgo=';
		me._video_url_popup_phone_play_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon_active";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_phone_play_icon_active.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_phone_play_icon_active.ggCurrentLogicStateAlpha == 0) {
					me._video_url_popup_phone_play_icon_active.style.visibility=me._video_url_popup_phone_play_icon_active.ggVisible?'inherit':'hidden';
					me._video_url_popup_phone_play_icon_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_url_popup_phone_play_icon_active.style.opacity == 0.0) { me._video_url_popup_phone_play_icon_active.style.visibility="hidden"; } }, 205);
					me._video_url_popup_phone_play_icon_active.style.opacity=0;
				}
			}
		}
		me._video_url_popup_phone_play_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon_active);
		el=me._video_url_popup_phone_play_icon=document.createElement('div');
		els=me._video_url_popup_phone_play_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwb2x5Z29uIGZpbGw9Im'+
			'5vbmUiIHBvaW50cz0iNy41LDQuNSAmI3hhOyYjeDk7MjguNSwxOCA3LjUsMzEuNSAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_url_popup_phone_play_icon";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['video_url_popup_phone_play'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_url_popup_phone_play_icon.style.transition='opacity 200ms ease 0ms';
				if (me._video_url_popup_phone_play_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._video_url_popup_phone_play_icon.style.opacity == 0.0) { me._video_url_popup_phone_play_icon.style.visibility="hidden"; } }, 205);
					me._video_url_popup_phone_play_icon.style.opacity=0;
				}
				else {
					me._video_url_popup_phone_play_icon.style.visibility=me._video_url_popup_phone_play_icon.ggVisible?'inherit':'hidden';
					me._video_url_popup_phone_play_icon.style.opacity=1;
				}
			}
		}
		me._video_url_popup_phone_play_icon.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_popup_phone_play.appendChild(me._video_url_popup_phone_play_icon);
		me._screentint_phone.appendChild(me._video_url_popup_phone_play);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._screentint_phone.appendChild(me._info_popup_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._code_element_feather_orb_hotspot_component=document.createElement('div');
		el.ggId="code_element_feather_orb_hotspot_component";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		el.userData=el;
		hs ='';
		hs+='height : 67px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 61px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._code_element_feather_orb_hotspot_component.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code_element_feather_orb_hotspot_component.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code_element_feather_orb_hotspot_component);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWhlbHAtY2lyY2xlIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+CiA8cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiLz4KIDxsaW5lIHgxPSIxMiIgeDI9Ij'+
			'EyLjAxIiB5MT0iMTciIHkyPSIxNyIvPgo8L3N2Zz4K';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_7__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWhlbHAtY2lyY2xlIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPgogPHBhdGggZD0iTTkuMDkgOWEzIDMgMCAwIDEgNS44MyAxYzAgMi0zIDMtMyAzIi8+CiA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE3Ii'+
			'B5Mj0iMTciLz4KPC9zdmc+Cg==';
		me._svg_7__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 256px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_7.onmouseenter=function (e) {
			me._svg_7__img.style.visibility='hidden';
			me._svg_7__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_7']=true;
		}
		me._svg_7.onmouseleave=function (e) {
			me._svg_7__img.style.visibility='inherit';
			me._svg_7__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_7']=false;
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_7);
		me.elementMouseOver['svg_5']=false;
		me.elementMouseOver['svg_6']=false;
		me.elementMouseOver['svg_8']=false;
		me.elementMouseOver['svg_11']=false;
		me.elementMouseOver['svg_12']=false;
		me.elementMouseOver['svg_13']=false;
		me.elementMouseOver['svg_10']=false;
		me.elementMouseOver['vr_button']=false;
		me._vr_button.logicBlock_visible();
		me._url_popup.logicBlock_size();
		me._url_popup.logicBlock_alpha();
		me.elementMouseOver['url_popup_top']=false;
		me._url_popup_close_btn.logicBlock_visible();
		me._url_popup_close_btn_active.logicBlock_visible();
		me._pdf_popup.logicBlock_size();
		me._pdf_popup.logicBlock_alpha();
		me._popup_pdf.logicBlock_visible();
		me.elementMouseOver['pdf_popup_top']=false;
		me._pdf_popup_close_btn.logicBlock_visible();
		me._pdf_popup_close_btn_active.logicBlock_visible();
		me._info_popup.logicBlock_alpha();
		me.elementMouseOver['info_popup_top']=false;
		me._info_popup_close_btn.logicBlock_visible();
		me._info_popup_close_btn_active.logicBlock_visible();
		me._image_popup.logicBlock_size();
		me._image_popup.logicBlock_alpha();
		me.elementMouseOver['image_popup_top']=false;
		me._image_popup_close_btn.logicBlock_visible();
		me._image_popup_close_btn_active.logicBlock_visible();
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._youtube_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me.elementMouseOver['video_file_popup_phone_play']=false;
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_file_popup_phone_play_icon.logicBlock_alpha();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone.logicBlock_visible();
		me.elementMouseOver['video_url_popup_phone_play']=false;
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play_icon_active.logicBlock_alpha();
		me._video_url_popup_phone_play_icon.logicBlock_alpha();
		me._info_popup_phone.logicBlock_visible();
		el = me._code_element_feather_orb_hotspot_component;
		;
		me.elementMouseOver['svg_7']=false;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_pdf'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_info'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_image'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_pdf__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_pdf__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_info__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_info__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_image__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_image__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_pdf'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_info'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_image'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_pdf__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_pdf__3d'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_info__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_info__3d'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_image__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_image__3d'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changenode();
				}
			}
			me._url_popup.logicBlock_size();
			me._url_popup.logicBlock_alpha();
			me._pdf_popup.logicBlock_size();
			me._pdf_popup.logicBlock_alpha();
			me._popup_pdf.logicBlock_visible();
			me._info_popup.logicBlock_alpha();
			me._image_popup.logicBlock_size();
			me._image_popup.logicBlock_alpha();
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_pdf'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_info'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_image'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_pdf__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_pdf__3d'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_info__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_info__3d'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_image__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_image__3d'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_configloaded();
				}
			}
			me._url_popup.logicBlock_size();
			me._url_popup.logicBlock_alpha();
			me._pdf_popup.logicBlock_size();
			me._pdf_popup.logicBlock_alpha();
			me._popup_pdf.logicBlock_visible();
			me._info_popup.logicBlock_alpha();
			me._image_popup.logicBlock_size();
			me._image_popup.logicBlock_alpha();
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._image_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_menu_center', function(event) {
			me._url_popup.logicBlock_size();
			me._pdf_popup.logicBlock_size();
			me._image_popup.logicBlock_size();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._pdf_popup.logicBlock_alpha();
			me._popup_pdf.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._screentint_phone.logicBlock_alpha();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._url_popup.logicBlock_alpha();
		});
		player.addListener('vrchanged', function(event) {
			me._vr_button.logicBlock_visible();
		});
	};
	function SkinHotspotClass_ht_node__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_node.visible = (v>0 && me._ht_node.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_node';
		el.userData.x = -6.2;
		el.userData.y = 1.73;
		el.translateZ(0.000);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.000;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 0;
		el.userData.renderOrder = 0;
		el.userData.isVisible = function() {
			let vis = me._ht_node.visible
			let parentEl = me._ht_node.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node.userData.opacity = v;
			v = v * me._ht_node.userData.parentOpacity;
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node.userData.parentOpacity = v;
			v = v * me._ht_node.userData.opacity
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node = el;
		el.userData.ggId="ht_node";
		me._ht_node.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.hasOwnClickAction = true;
		me._ht_node.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_bg.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_bg.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: player.getTHREESkinColor('#26170f'), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 52;
		el.userData.height = 52;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_node_bg.visible
			let parentEl = me._ht_node_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_bg.userData.opacity = v;
			v = v * me._ht_node_bg.userData.parentOpacity;
			if (me._ht_node_bg.userData.setOpacityInternal) me._ht_node_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_bg.children.length; i++) {
				let child = me._ht_node_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_bg.userData.parentOpacity = v;
			v = v * me._ht_node_bg.userData.opacity
			if (me._ht_node_bg.userData.setOpacityInternal) me._ht_node_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_bg.children.length; i++) {
				let child = me._ht_node_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 26;
		el.userData.borderRadius.default.topRight = 26;
		el.userData.borderRadius.default.bottomRight = 26;
		el.userData.borderRadius.default.bottomLeft = 26;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_bg);
			if (skin.rectHasRoundedCorners(me._ht_node_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_node_bg.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_node_bg.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_node_bg.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_node_bg.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_node_bg_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_node_bg.userData.backgroundColorAlpha = 1;
		me._ht_node_bg.userData.borderColorAlpha = 1;
		me._ht_node_bg.userData.setOpacityInternal = function(v) {
			me._ht_node_bg.material.opacity = v * me._ht_node_bg.userData.backgroundColorAlpha;
			if (me._ht_node_bg.userData.ggSubElement) {
				me._ht_node_bg.userData.ggSubElement.material.opacity = v
				me._ht_node_bg.userData.ggSubElement.visible = (v>0 && me._ht_node_bg.userData.visible);
			}
			me._ht_node_bg.visible = (v>0 && me._ht_node_bg.userData.visible);
		}
		me._ht_node_bg.userData.setBackgroundColor = function(v) {
			me._ht_node_bg.material.color = v;
		}
		me._ht_node_bg.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_bg.userData.backgroundColorAlpha = v;
			me._ht_node_bg.userData.setOpacity(me._ht_node_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 26, 26, 26, 26);
		el.userData.ggId="ht_node_bg";
		me._ht_node_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.userData.transitionValue_scale = {x: 1.9, y: 1.9, z: 1.0};
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_node_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_bg.scale.set(transition_scale.startScale.x + (me._ht_node_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_node_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_node_bg.position.x = (me._ht_node_bg.position.x - me._ht_node_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_node_bg.userData.curScaleOffX = scaleOffX;
							me._ht_node_bg.position.y = (me._ht_node_bg.position.y - me._ht_node_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_node_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._ht_node_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_node_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_bg.scale.set(transition_scale.startScale.x + (me._ht_node_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_node_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_node_bg.position.x = (me._ht_node_bg.position.x - me._ht_node_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_node_bg.userData.curScaleOffX = scaleOffX;
							me._ht_node_bg.position.y = (me._ht_node_bg.position.y - me._ht_node_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_node_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_node_bg.visible=false;
			player.repaint();
			me._ht_node_bg.userData.visible=false;
				}
				else {
			me._ht_node_bg.visible=((!me._ht_node_bg.material && Number(me._ht_node_bg.userData.opacity>0)) || (me._ht_node_bg.material && Number(me._ht_node_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_bg.userData.visible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.userData.transitionValue_backgroundcolor = {};
					me._ht_node_bg.userData.transitionValue_backgroundcolor.color = player.getTHREESkinColor('#ffffff');
					me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha = 1;
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'backgroundcolor') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_backgroundcolor = {};
						transition_backgroundcolor.property = 'backgroundcolor';
						transition_backgroundcolor.startTime = Date.now();
						transition_backgroundcolor.startBackgroundColor = structuredClone(me._ht_node_bg.material.color);
						transition_backgroundcolor.startBackgroundColorAlpha = me._ht_node_bg.userData.backgroundColorAlpha;
						transition_backgroundcolor.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_backgroundcolor.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							let startColor = new THREE.Color(transition_backgroundcolor.startBackgroundColor.r, transition_backgroundcolor.startBackgroundColor.g, transition_backgroundcolor.startBackgroundColor.b);
							let targetColor = me._ht_node_bg.userData.transitionValue_backgroundcolor.color;
							startColor.lerp(targetColor, tfval);
							me._ht_node_bg.userData.setBackgroundColor(player.getTHREESkinColor(startColor.r, startColor.g, startColor.b));
							let newAlpha = THREE.MathUtils.lerp(transition_backgroundcolor.startBackgroundColorAlpha, me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha, tfval);
							me._ht_node_bg.userData.setBackgroundColorAlpha(newAlpha);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_backgroundcolor.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_backgroundcolor), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_backgroundcolor);
					}
				}
				else {
					me._ht_node_bg.userData.transitionValue_backgroundcolor = {};
					me._ht_node_bg.userData.transitionValue_backgroundcolor.color = player.getTHREESkinColor('#26170f');
					me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha = 1;
					for (var i = 0; i < me._ht_node_bg.userData.transitions.length; i++) {
						if (me._ht_node_bg.userData.transitions[i].property == 'backgroundcolor') {
							clearInterval(me._ht_node_bg.userData.transitions[i].interval);
							me._ht_node_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_backgroundcolor = {};
						transition_backgroundcolor.property = 'backgroundcolor';
						transition_backgroundcolor.startTime = Date.now();
						transition_backgroundcolor.startBackgroundColor = structuredClone(me._ht_node_bg.material.color);
						transition_backgroundcolor.startBackgroundColorAlpha = me._ht_node_bg.userData.backgroundColorAlpha;
						transition_backgroundcolor.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_backgroundcolor.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							let startColor = new THREE.Color(transition_backgroundcolor.startBackgroundColor.r, transition_backgroundcolor.startBackgroundColor.g, transition_backgroundcolor.startBackgroundColor.b);
							let targetColor = me._ht_node_bg.userData.transitionValue_backgroundcolor.color;
							startColor.lerp(targetColor, tfval);
							me._ht_node_bg.userData.setBackgroundColor(player.getTHREESkinColor(startColor.r, startColor.g, startColor.b));
							let newAlpha = THREE.MathUtils.lerp(transition_backgroundcolor.startBackgroundColorAlpha, me._ht_node_bg.userData.transitionValue_backgroundcolor.alpha, tfval);
							me._ht_node_bg.userData.setBackgroundColorAlpha(newAlpha);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_backgroundcolor.interval);
								me._ht_node_bg.userData.transitions.splice(me._ht_node_bg.userData.transitions.indexOf(transition_backgroundcolor), 1);
							}
						}, 20);
						me._ht_node_bg.userData.transitions.push(transition_backgroundcolor);
					}
				}
			}
		}
		me._ht_node_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_image.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.userData.ontouchend=function (e) {
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_image.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_title_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.36);
		el.scale.set(0.50, 0.50, 1.0);
		el.userData.width = 132;
		el.userData.height = 44;
		el.userData.scale = {x: 0.50, y: 0.50, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_title';
		el.userData.x = 0;
		el.userData.y = -0.36;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_node_title.visible
			let parentEl = me._ht_node_title.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_title.userData.opacity = v;
			v = v * me._ht_node_title.userData.parentOpacity;
			if (me._ht_node_title.userData.setOpacityInternal) me._ht_node_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_title.children.length; i++) {
				let child = me._ht_node_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_title.userData.parentOpacity = v;
			v = v * me._ht_node_title.userData.opacity
			if (me._ht_node_title.userData.setOpacityInternal) me._ht_node_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_title.children.length; i++) {
				let child = me._ht_node_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_title = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_title;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_title);
			if (skin.rectHasRoundedCorners(me._ht_node_title)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_node_title.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_node_title.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_node_title.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_node_title.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_title_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_node_title_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_node_title.userData.backgroundColorAlpha = 1;
		me._ht_node_title.userData.borderColorAlpha = 1;
		me._ht_node_title.userData.setOpacityInternal = function(v) {
			me._ht_node_title.material.opacity = v;
			if (me._ht_node_title.userData.hasScrollbar) {
				me._ht_node_title.userData.scrollbar.material.opacity = v;
				me._ht_node_title.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_node_title.userData.ggSubElement) {
				me._ht_node_title.userData.ggSubElement.material.opacity = v
				me._ht_node_title.userData.ggSubElement.visible = (v>0 && me._ht_node_title.userData.visible);
			}
			me._ht_node_title.visible = (v>0 && me._ht_node_title.userData.visible);
		}
		me._ht_node_title.userData.setBackgroundColor = function(v) {
			me._ht_node_title.material.color = v;
		}
		me._ht_node_title.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_title.userData.backgroundColorAlpha = v;
			me._ht_node_title.userData.setOpacity(me._ht_node_title.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = player.getTHREESkinColor('#ffffff');
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat_regular', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 264;
		canvas.height = 88;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_node_title;
			var canv = me._ht_node_title.userData.textCanvas;
			var ctx = me._ht_node_title.userData.textCanvasContext;
			var tmpCanv = me._ht_node_title.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_node_title.userData.scrollPosPercent ? tmpCanv.height * me._ht_node_title.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_node_title.userData.boxWidthCanv / 100.0;
		height = me._ht_node_title.userData.boxHeightCanv / 100.0;
		me._ht_node_title.userData.width = me._ht_node_title.userData.boxWidthCanv;
		me._ht_node_title.userData.height = me._ht_node_title.userData.boxHeightCanv;
		me._ht_node_title.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_node_title, 0, 36);
		me._ht_node_title.position.x = newPos.x;
		me._ht_node_title.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_node_title_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_node_title.material.map) {
				me._ht_node_title.material.map.dispose();
			}
			me._ht_node_title.material.map = textTexture;
			me._ht_node_title.material.needsUpdate = true;
			player.repaint();
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_node_title, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_node_title, 'box-sizing: border-box; width: auto; height: auto; font-size: 20px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_node_title.userData.textColor + ' !important;', false, true, false);
			me._ht_node_title.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_title.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_title.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_node_title.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_node_title.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_node_title";
		me._ht_node_title.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node_title.userData.transitions.length; i++) {
						if (me._ht_node_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_title.userData.transitions[i].interval);
							me._ht_node_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_title.material ? me._ht_node_title.material.opacity : me._ht_node_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_title.userData.transitions.splice(me._ht_node_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_title.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node_title.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node_title.userData.transitions.length; i++) {
						if (me._ht_node_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_title.userData.transitions[i].interval);
							me._ht_node_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_title.material ? me._ht_node_title.material.opacity : me._ht_node_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_title.userData.transitions.splice(me._ht_node_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_title.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node_title.userData.ggUpdatePosition=function (useTransition) {
				me._ht_node_title.userData.ggUpdateText(true);
		}
		me._ht_node_bg.add(me._ht_node_title);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_node_icon.visible
			let parentEl = me._ht_node_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_icon.userData.opacity = v;
			v = v * me._ht_node_icon.userData.parentOpacity;
			if (me._ht_node_icon.userData.setOpacityInternal) me._ht_node_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon.children.length; i++) {
				let child = me._ht_node_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_icon.userData.parentOpacity = v;
			v = v * me._ht_node_icon.userData.opacity
			if (me._ht_node_icon.userData.setOpacityInternal) me._ht_node_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon.children.length; i++) {
				let child = me._ht_node_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_icon.userData.materialNormal) me._ht_node_icon.userData.materialNormal.opacity = v;
			if (me._ht_node_icon.userData.materialOver) me._ht_node_icon.userData.materialOver.opacity = v;
			if (me._ht_node_icon.userData.materialActive) me._ht_node_icon.userData.materialActive.opacity = v;
			me._ht_node_icon.visible = (v>0 && me._ht_node_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAHSklEQVR4nO2cTWxVRRTH/9cUGq0UApIqifEjQdgYKRpxYaLRREqsG8EFAoGN4MZqogtloWmoCxZEXBlMxI2btmvY+bGoRokoJiRIGyhVtGqrAVpFUPtzMWd808dr79z77nuv6vsnL7ev73zduWfOzJw5c6UmmmiiicYhabQBwHWSbpTUbh9JumSf6SRJZhplm1TnBgJaJN0n6RFJ6yStkbRa0vVzsFyWNCLptKQTkj6Q9HmSJH/W3to6AVgEPAEMABepHhdNVjewqNb218yDgJskvSBpt6SV4U+SvpR0TM4zRiSNy3WpKaNZItfdbpHzsDWS7pfUWWbzhKS3Jb2RJMnPtbqXQgEsA/YD08FTvwz0A5uB5VXIXm4y+k2mx7TpXFrkvRQKIAGeBn4IDD'+
	'8D7AHa0yVk1tduss8E+n4wGxo++MwCsBI4Ghg6BmzHBeVa624xXWOB/qPWxRsP4EHgvBl2BegDbmiAHTeY7itmy3ngwXrbUW7UDuAPM2gYWNdQg5xN68wWzLbtjTLkpcClB4ElDTGkAoAlZpPHS/U2IGycg7jZ8IICcB3wZmDni/VSvCNQ+uqCGzEC4EbW1wJ7a9vdLCD7mHOwyMaxm1lhn6Llek/6o2aBGzeU+9FqoJpuZUavt1FnCBgNRh/s71H7rc9oczeadTcfk85T9BTAbsjPc4bzBmRgKbAPOEd2nDPeXLNl3MRyxGQdKdJLhZud+iebeSgHFgPPA5PBDc8AnwK9wE7gMeBu+zxm/+s1mpmAbxLoARbnsKMTuGpytmbln0voMkrLh74c/GuBr4MbPAM8A3RkkNEB7AbOBnJOAWtz2PO68Y/n9cZygftN4BgZ'+
	'Z8jAJkopjgnguTxPPpC32GRMmMwLQFdGGW2UliX789rihd1EaVWeaYjELST/Mt6Ps3hMhOwOk4np2JOR309VpoEV1RjSF3SL6IWneY5vnHeA1txGzK2jFTgcNNLGDLwtQXfdl9eARYErRz8hXMzx3eowNZxI4kZX30gXgDUZeJ81vp/Ik5nEpUnBJaai8jkWI3xA/rgWnlNBZ2vQ3U4RGeNwUw6fdOvOo3jAmPsz8PQYz0SRMSdCb0fg7T0Z+DLfo2dsCbrJ5kieZZTmOc9lUlgAgoczSeTwDWwxnotkSe4BDxjjDJE5ZNwsF1xAzzWU44bgtpy8rWQMvLh1n5+EbsiibK8xHY+kTygtH56JVqR/lgAHgG8o4Rv7X6ZcNm4yCW4dFzU4AF8Yz94sinzffCuSfn3gcVlmyA8z/7rsHPBQBnkdAW9nJM9bRl8xDs21Iv'+
	'fD5elI256067EkSX6MNOxhuZ3S2ySNSnpF0ib7vCLpnP32odGmwnQfK7MpDcN2jZsi4FIDv1mrPh7JM2T0vZH07YHnvEeFuIOLR+8FnhQ71eg1nqFI+m6j/y2qW5rxHusjlYwa/c5I+gNGf7ZS4wR0bYHsA5Gyd3nZkfQ+PECFNE6lLhY+qUsRChJJq+zreIxRkp6y69tJkvw6F5H9dqiMJw3ehlVRHlHa7pZm37uk9AaaqvB7OZZL8sN6agOZx9xqX09EyPc0t87nbQG+t2ur2ZaG0AmiGqiJAJUaKGzRmNTqL5Ku2t+3pBFbt/nWvsZkJz3Nt/N1xwC+u18x29Iwb0hJa6DUkSNJElRy69QGMgzadXdakJbkMwmDc9GVwdvwvdmWhtAJohpoWq6yK1SWhu/semckfa+kMUl3SDo01zAvF6BvN9qoKYTJlEoPLQ3e'+
	'4y7L3fssXNNAVhM4Yl9XRyr5yK5RSaskSS5J2ilXTLVN0kngZaDLPi9LOmm/IWmn8cTAp2A/jKT39zgc6XHNpUYMU3OxmsLUTHekMOZJmC3l/5IwM+ZmyjWFOW/S/pTx1TNp/4nprGvSvpptnwvGV49tn3dNV323fUxI3o3DLkobh4dr4UnmOb5x6r9xaIL+61vPU1Sz9WzCqile6GJ28UKuspVAXqvJCIsXoj3HZBRXvGACiy5/OYub0GWZcd9M5fKX6JgTyCq2/MWEFlFA1cPsAiqAz3A55F3ARkoFVBvtf71GE2KSnGU01KKAygQvhBK8URZqCZ4pCIs4B6m+iLPTbngI13V+Dxrjd/vfkNF0VnND1LqIM1DULAOOULg9eNKvFe6qBYJrC8m31Utx8yhChAHlh1kKPzSXFxaQBxvWOIEh4XGoESKzeDW2qZPSaN'+
	'W441CBQeGBuqu4iViupFeVdrSZbj/PafyBOg/cmu1I4NL1PpK5g9lHMo+wUI5ketiIsRU3hfeo5aHepbiURXiod9xsWLAjqze80rHwAVyKs9pj4VtMVl2OhdcymbVC7sUCe3TtiwVOSPpMrnhpRG6Tb0qlnc12uR3PVXL7VndJ2iC3DV3+YoFDkg7+a14sUA5cZrIb9zKAol5N0Q88zr/51RSVgAva90p6VNI9cmVvd2n+l5sMy5UCfiXpfUnH6/lyk4YHMwuo870eJ247uIkmmmjiP4i/AVmVZTb8RMHlAAAAAElFTkSuQmCC');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_node_icon.userData.width / 100.0, me._ht_node_icon.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_node_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_node_icon";
		me._ht_node_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_icon.ggCurrentLogicStateVisible == 0) {
			me._ht_node_icon.visible=false;
			player.repaint();
			me._ht_node_icon.userData.visible=false;
				}
				else {
			me._ht_node_icon.visible=((!me._ht_node_icon.material && Number(me._ht_node_icon.userData.opacity>0)) || (me._ht_node_icon.material && Number(me._ht_node_icon.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_icon.userData.visible=true;
				}
			}
		}
		me._ht_node_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_icon']=true;
		}
		me._ht_node_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_icon']=false;
		}
		me._ht_node_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.add(me._ht_node_icon);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_icon_visited';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.120);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_node_icon_visited.visible
			let parentEl = me._ht_node_icon_visited.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_icon_visited.userData.opacity = v;
			v = v * me._ht_node_icon_visited.userData.parentOpacity;
			if (me._ht_node_icon_visited.userData.setOpacityInternal) me._ht_node_icon_visited.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon_visited.children.length; i++) {
				let child = me._ht_node_icon_visited.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_icon_visited.userData.parentOpacity = v;
			v = v * me._ht_node_icon_visited.userData.opacity
			if (me._ht_node_icon_visited.userData.setOpacityInternal) me._ht_node_icon_visited.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_icon_visited.children.length; i++) {
				let child = me._ht_node_icon_visited.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_icon_visited = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_icon_visited.userData.materialNormal) me._ht_node_icon_visited.userData.materialNormal.opacity = v;
			if (me._ht_node_icon_visited.userData.materialOver) me._ht_node_icon_visited.userData.materialOver.opacity = v;
			if (me._ht_node_icon_visited.userData.materialActive) me._ht_node_icon_visited.userData.materialActive.opacity = v;
			me._ht_node_icon_visited.visible = (v>0 && me._ht_node_icon_visited.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAIFElEQVR4nO2ca4xdVRXH/7u2tKVT66NIrY8WsbQxAYmhhsQHpU142ZZgwJhAWhMMPlDwFQUxJYFPLUL8IFAJjQb8ZNCUSAOhwihtQhMfaQeNMyhqwLYGkE47fYxT6c8Pe53cPWfOvWfvc8890zHzT07uufes11l3P9Zee50jTWMa05jG5MFNtgFAn6SzJM2X1CfplKRDkt6QdMg5999JNK9ZB5kzPiFptaQLJa2Q9N4StgOSfh8cu51zw720s1EA84GNwE7gJN1jDHgc+Cwwrwb7rgL2Al8sut6zFgQslXSbpA2S5uYuj0raK2lQ0pCkg5JGJB2VNEPS2+14h6Tlkj4i39pm5OQck/SQpC3OuX9VsHGtpF9ImiVpn3PuwlQZyQAWA9sKWssgcBdwCT'+
	'C7gtx5wKXAA8BrOdnHgXuBsxPkrbXWCPAf4KpUm5IAzARuBY4Eho8CW4GLgNpaKzDLusbOnKP+Cbwlgj/vnLV12dZO4VJgT2DoCWAzsKinir3ujwPPBA6aWUK/rmnnrAcOBc55AvhAT5UW23EBsLCEpnHnfCNwzAhwfZ1dqU7knDPWU+cAM4B7AucMAOf1TGGXaNQ5pjB0zrPAW3uqsAvYENCoc8JutR2Y01OFXWAynLM+13KS45k2ch2w0Aba82uS2bhzlgaz1QCwoAtZZwCXAw8CL9mMEmJdAc95wMPAmgj5eedMkFcr8EFgFueMVB2QgbOBHwLDdEaRgx62ax2nZ+DqRp1jSm8NjL++An8fcCdwNOeIYeBn+CXIl4BrgAvayFhDSZeZLOcsprV8eILEOAc4H/h74JQx/PLjUmBWoqy17RyQ6hz8eHdWiv52graZ'+
	'0hMkRsj4sWDE+E8BjwLndGlPPqZZX+Cc9REywC9Nqs/C+IE5W5VvTuT9gjkF4N/A6sqGTJQdOilEqXOM/9qAZ2M3hmw1IaMkLDyBy4A3jfeF1JYXqSOcqaKdY7yzgP3G9zuqLI/wmcDjJmRrAt8KWrPUEPC2ZOXxurKuFe2cgPd7gXMvrqJ8YyDgokiemcAfjecwsDxZcbqd51BhXAPeFbTAH1RRnCWjBmObIHBT4NSrk5U2DOBps/UvqYx9tAbnuyJ55gEHjedXlSxuGMDXgj90WQrjlQHjJZE83w54ViYaOhe/9PiqHZcD+UR/7QCWBTZ/JYUxS2ecIHJBCuwznicT9MwGNlG89Bi2a0kLYuBM4KNAfgekHf2rpu+hFCXZ+PN8JP25wY3dFMmzENhd4Jg8dlOSSs3J/aXxxQ4Nv8n0FF1v5+UV9jkYadc1wfmOCK'+
	'NmS9ou6WP2068lXSdpmR3X2W8ymu0JLSkLK66MpP+zfX6ImMkIP0BnuC1GA36nE2Agkn5ToOOOIsPwad07ArpNkbK/b/QniRjHgG8GOspjNnxckSEqDAd+a/SPR9DOpTXmPNvpXzMn9RvtcOQNfyawvzR+A24M6N+Xv17UxeYH5yNlCgyL7fNgBO0nJWXJtgecc7QjdM6dknS/fV1gvGX4W4FdnXAkOJ+QWy9yUF9wfrRMOn4nM1unxeyPh8m2vRH0IU1Mou5AcP7uCPpkB011nOqCd0J3L3JQ2Gr6Cq6Pl+jcm2q1nJgV/4vBeUw1RUjzYluqFkIb9kfQh/c4YUgpclBINL/gehGyZh3TpJ+TdNjOby4bpCXdbF8PG28Zeu6g14LzmBuWWg4qXVU7505Ius++rpL0XQqiXvvtdqORpPuMtwxLCuzqhHAgfz2CXgJe'+
	'sWnvx5H03wqmyvdE0M9mfBTdj8/yfdCOa4PpHWAX8UuenxvPS51aZ0D/E6N/OUZ+xnQ6LTV2EbnUMMdnOfB7I3meN/qnY+gzpim5WAWuCPhLYyZgDj6dDHBPrJ4pme7Ab18/Z/r3U1JIZTyrApuvSFFWNWF2wHgaT5jhS/IyfD6S526jHyO1YpYplHK1rvKC6f1TZOtx+E0FgJ1VlG4MbrZq0n5FOVd3sBt9JLD1U5F8KwOeDVUUn/bbPqYvTFdEzVzGl+35HcM/AVBJ+em8cejwe1vZ7u0OIkqAjXcRrdnrwW6MOF23nvuAx4KW8wcSygDxJcrYvS0p5+gsrJvihXWML174aTetCT/G3Qi8HDjnsZQugg9qs9azraotocBelL/8CFhNZPkLsARfPzTIeNxJ5O6FyXHWFbF7ikmoRQmuo4BqU9CaMhzGF1DdDXwZ+D'+
	'Q+SP0ccDtwP61ZMUQ/icGo2XFDIOOWVP5OgpsuwWuHPebA5GoMYDmtCrc9RMRKqQqWUm8R52X4J3f+ysQizgyvAk/hu1dplqCDvgVmM8AbdDswd1AUlgH3U1ONNH5seCd+vLoYeD9wRk2y5zA+ddLzitepVEg+x2zM8PWmFIePIvR30916BetWYcvZ0qTyGcCWQPkADRRLxQI/IA+EziEhHKjTkLC7HcVPo5P2OJSNZTcwvh67mW7Vwah1NjNk2MHkPFB3Lq0gELOp94XkMWDiI5mjNPdI5iLTNRro30OvpvKqwAeTt1D8UO/KOruedaWV+CVL6JgjZkO9QWCdoP1j4UP4JcUqKoQG+Cl7lckYysk+aTpj9/Gi0esXC3xH/sUCZ+YuZy8WGLLjgPyWd7bt3WfHYvkXCyyX34LOO/a4pEckbXbO/aPue2gE+MzkBnyO'+
	'u+jxgVSMmawNVM0EJqDpl5vMk3+5yRpJH5Yv9ZtQtJTDK/KlgPskPSNpl3PuWC/tDDHpj3BbK1goXyiRFUuM2PG6c660Rmka05jGNP5f8T+sEnfoTUdwxQAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_icon_visited_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_icon_visited;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_node_icon_visited.userData.width / 100.0, me._ht_node_icon_visited.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_node_icon_visited_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_node_icon_visited";
		me._ht_node_icon_visited.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_icon_visited.ggCurrentLogicStateVisible == 0) {
			me._ht_node_icon_visited.visible=((!me._ht_node_icon_visited.material && Number(me._ht_node_icon_visited.userData.opacity>0)) || (me._ht_node_icon_visited.material && Number(me._ht_node_icon_visited.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_icon_visited.userData.visible=true;
				}
				else {
			me._ht_node_icon_visited.visible=false;
			player.repaint();
			me._ht_node_icon_visited.userData.visible=false;
				}
			}
		}
		me._ht_node_icon_visited.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_icon_visited']=true;
		}
		me._ht_node_icon_visited.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_icon_visited']=false;
		}
		me._ht_node_icon_visited.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.add(me._ht_node_icon_visited);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(0.50, 0.50, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 0.50, y: 0.50, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 50;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 50;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 50;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 50;
		el.name = 'ht_node_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.150);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_image.material) me._ht_node_image.material.opacity = v;
			me._ht_node_image.visible = (v>0 && me._ht_node_image.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._ht_node_image.visible
			let parentEl = me._ht_node_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_image.userData.opacity = v;
			v = v * me._ht_node_image.userData.parentOpacity;
			if (me._ht_node_image.userData.setOpacityInternal) me._ht_node_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_image.children.length; i++) {
				let child = me._ht_node_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_image.userData.parentOpacity = v;
			v = v * me._ht_node_image.userData.opacity
			if (me._ht_node_image.userData.setOpacityInternal) me._ht_node_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_image.children.length; i++) {
				let child = me._ht_node_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_image = el;
		loader = new THREE.TextureLoader();
		el.userData.ggNodeId=nodeId;
		texture = loader.load(basePath + 'images/ht_node_image_' + nodeId + '.png');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_image_material';
		el.material = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		let width = me._ht_node_image.userData.width / 100.0;
		let height = me._ht_node_image.userData.height / 100.0;
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_node_image.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_node_image.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_node_image.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_node_image.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_image_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
		el.geometry = geometry;
		}
		el.userData.createGeometry(50, 50, 50, 50);
		el.userData.ggId="ht_node_image";
		me._ht_node_image.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.userData.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			return this.userData.ggNodeId;
		}
		me._ht_node_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_image.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node_image.userData.transitions.length; i++) {
						if (me._ht_node_image.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_image.userData.transitions[i].interval);
							me._ht_node_image.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_image.material ? me._ht_node_image.material.opacity : me._ht_node_image.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_image.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_image.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_image.userData.transitions.splice(me._ht_node_image.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_image.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node_image.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node_image.userData.transitions.length; i++) {
						if (me._ht_node_image.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_image.userData.transitions[i].interval);
							me._ht_node_image.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_image.material ? me._ht_node_image.material.opacity : me._ht_node_image.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_image.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_image.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_image.userData.transitions.splice(me._ht_node_image.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_image.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_image']=true;
		}
		me._ht_node_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_image']=false;
		}
		me._ht_node_image.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.add(me._ht_node_image);
		me._ht_node.add(me._ht_node_bg);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_node_custom_image.visible
			let parentEl = me._ht_node_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_custom_image.userData.opacity = v;
			v = v * me._ht_node_custom_image.userData.parentOpacity;
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_custom_image.userData.parentOpacity = v;
			v = v * me._ht_node_custom_image.userData.opacity
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_custom_image);
		}
		me._ht_node_custom_image.userData.backgroundColorAlpha = 1;
		me._ht_node_custom_image.userData.borderColorAlpha = 1;
		me._ht_node_custom_image.userData.setOpacityInternal = function(v) {
			if (me._ht_node_custom_image.userData.ggSubElement) {
				me._ht_node_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_node_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_node_custom_image.userData.visible);
			}
			me._ht_node_custom_image.visible = (v>0 && me._ht_node_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 100;
		currentHeight = 100;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_node_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_node_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_node_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_node_custom_image_subElementMaterial';
				me._ht_node_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_node_custom_image.userData.ggUpdatePosition();
				me._ht_node_custom_image.userData.ggText = extUrl;
				me._ht_node_custom_image.userData.setOpacity(me._ht_node_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_node_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_node_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 100;
		el.userData.clientHeight = 100;
		el.userData.ggId="ht_node_custom_image";
		me._ht_node_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_node_custom_image.visible=((!me._ht_node_custom_image.material && Number(me._ht_node_custom_image.userData.opacity>0)) || (me._ht_node_custom_image.material && Number(me._ht_node_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=true;
				}
				else {
			me._ht_node_custom_image.visible=false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_node_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_custom_image']=true;
		}
		me._ht_node_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_custom_image']=false;
		}
		me._ht_node_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.userData.clientWidth;
			var parentHeight = me._ht_node_custom_image.userData.clientHeight;
			var img = me._ht_node_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_node_custom_image_imgGeometry';
			}
		}
		me._ht_node.add(me._ht_node_custom_image);
		me._ht_node.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node']=false;
		me._ht_node_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_bg']=false;
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_title.userData.setOpacity(0.00);
			me._ht_node_title.userData.ggUpdateText(true);
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_icon']=false;
		me._ht_node_icon.logicBlock_visible();
		me._ht_node_icon_visited.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_icon_visited']=false;
		me._ht_node_icon_visited.logicBlock_visible();
		me._ht_node_image.userData.setOpacity(0.00);
		me.elementMouseOver['ht_node_image']=false;
		me._ht_node_image.logicBlock_alpha();
		me._ht_node_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_custom_image']=false;
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_bg.logicBlock_visible();
					me._ht_node_title.userData.ggUpdateText();
				me._ht_node_icon.logicBlock_visible();
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_icon.logicBlock_visible();
				me._ht_node_icon_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.__obj = me._ht_node;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 136px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_bg.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_bg.logicBlock_backgroundcolor();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #26170f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 200ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.ggParameter.sx = 1.9;
					me._ht_node_bg.ggParameter.sy = 1.9;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
				else {
					me._ht_node_bg.ggParameter.sx = 1;
					me._ht_node_bg.ggParameter.sy = 1;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
			}
		}
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 200ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms, background-color 200ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_node_bg.style.backgroundColor="rgba(38,23,15,1)";
				}
			}
		}
		me._ht_node_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_image.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_image.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggDx=0;
		el.ggDy=36;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 36px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.style.visibility=me._ht_node_title.ggVisible?'inherit':'hidden';
					me._ht_node_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_title.style.opacity == 0.0) { me._ht_node_title.style.visibility="hidden"; } }, 205);
					me._ht_node_title.style.opacity=0;
				}
			}
		}
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_title);
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMTYuNyIvPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMTAiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIwIiBjeT0iMjAiIHI9IjMuMyIvPgo8L3N2Zz4K';
		me._ht_node_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_icon.style.transition='';
				if (me._ht_node_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_node_icon.style.visibility="hidden";
					me._ht_node_icon.ggVisible=false;
				}
				else {
					me._ht_node_icon.style.visibility=(Number(me._ht_node_icon.style.opacity)>0||!me._ht_node_icon.style.opacity)?'inherit':'hidden';
					me._ht_node_icon.ggVisible=true;
				}
			}
		}
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon);
		el=me._ht_node_icon_visited=document.createElement('div');
		els=me._ht_node_icon_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0zMS40LD'+
			'ExJiN4YTsmI3g5O2MxLjEsMi4yLDEuNiw0LjUsMS42LDdjMCw4LjMtNi43LDE1LTE1LDE1UzMsMjYuMywzLDE4UzkuNywzLDE4LDNjMi43LDAsNS4yLDAuNyw3LjQsMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxwYXRoIGQ9Ik0yNi43LDE1LjUmI3hhOyYjeDk7YzAuMiwwLjksMC40LDEuNiwwLjQsMi41YzAsNS4xLTQsOS05LDlzLTktNC05LTlzNC05LDktOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Ut'+
			'bGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIGZpbGw9Im5vbmUiIHI9IjMuMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KIDxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjMyLjgsMy43ICYjeGE7JiN4OTsyNC41LDEyIDIxLjgsOS4zICIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bm'+
			'QiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._ht_node_icon_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_icon_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_icon_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_icon_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_icon_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_icon_visited.style.transition='';
				if (me._ht_node_icon_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_icon_visited.style.visibility=(Number(me._ht_node_icon_visited.style.opacity)>0||!me._ht_node_icon_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_icon_visited.ggVisible=true;
				}
				else {
					me._ht_node_icon_visited.style.visibility="hidden";
					me._ht_node_icon_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_icon_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon_visited);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_image_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._ht_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_image.style.transition='opacity 200ms ease 0ms';
				if (me._ht_node_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_image.style.visibility=me._ht_node_image.ggVisible?'inherit':'hidden';
					me._ht_node_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_image.style.opacity == 0.0) { me._ht_node_image.style.visibility="hidden"; } }, 205);
					me._ht_node_image.style.opacity=0;
				}
			}
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_image);
		me._ht_node.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
			el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
				if (hotspot.changeLanguage__) hotspot.changeLanguage__();
			if (hotspot.customimage && me._ht_node_custom_image.ggText != hotspot.customimage) {
				me._ht_node_custom_image.ggText=me._ht_node_custom_image.ggText_untranslated=hotspot.customimage;
				me._ht_node_custom_image.ggSubElement.setAttribute('src', hotspot.customimage);
				me._ht_node_custom_image.ggSubElement.style.width=hotspot.customimagewidth + 'px';
				me._ht_node_custom_image.ggSubElement.style.height=hotspot.customimageheight + 'px';
				me._ht_node_custom_image.ggUpdatePosition();
			}
		}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me.elementMouseOver['ht_node']=false;
		me.elementMouseOver['ht_node_bg']=false;
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_icon.logicBlock_visible();
		me._ht_node_icon_visited.logicBlock_visible();
		me._ht_node_image.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_icon.logicBlock_visible();
				me._ht_node_icon_visited.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_icon.logicBlock_visible();
				me._ht_node_icon_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_url__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_url.visible = (v>0 && me._ht_url.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_url';
		el.userData.x = -6.9;
		el.userData.y = 1.73;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_url.visible
			let parentEl = me._ht_url.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url.userData.opacity = v;
			v = v * me._ht_url.userData.parentOpacity;
			if (me._ht_url.userData.setOpacityInternal) me._ht_url.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url.children.length; i++) {
				let child = me._ht_url.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url.userData.parentOpacity = v;
			v = v * me._ht_url.userData.opacity
			if (me._ht_url.userData.setOpacityInternal) me._ht_url.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url.children.length; i++) {
				let child = me._ht_url.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url = el;
		el.userData.ggId="ht_url";
		me._ht_url.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.userData.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.hasOwnClickAction = true;
		me._ht_url.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: player.getTHREESkinColor('#4fb5c2'), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_url_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 52;
		el.userData.height = 52;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_url_bg.visible
			let parentEl = me._ht_url_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url_bg.userData.opacity = v;
			v = v * me._ht_url_bg.userData.parentOpacity;
			if (me._ht_url_bg.userData.setOpacityInternal) me._ht_url_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_bg.children.length; i++) {
				let child = me._ht_url_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_bg.userData.parentOpacity = v;
			v = v * me._ht_url_bg.userData.opacity
			if (me._ht_url_bg.userData.setOpacityInternal) me._ht_url_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_bg.children.length; i++) {
				let child = me._ht_url_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 26;
		el.userData.borderRadius.default.topRight = 26;
		el.userData.borderRadius.default.bottomRight = 26;
		el.userData.borderRadius.default.bottomLeft = 26;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_url_bg);
			if (skin.rectHasRoundedCorners(me._ht_url_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_url_bg.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_url_bg.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_url_bg.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_url_bg.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_url_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_url_bg_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_url_bg.userData.backgroundColorAlpha = 1;
		me._ht_url_bg.userData.borderColorAlpha = 1;
		me._ht_url_bg.userData.setOpacityInternal = function(v) {
			me._ht_url_bg.material.opacity = v * me._ht_url_bg.userData.backgroundColorAlpha;
			if (me._ht_url_bg.userData.ggSubElement) {
				me._ht_url_bg.userData.ggSubElement.material.opacity = v
				me._ht_url_bg.userData.ggSubElement.visible = (v>0 && me._ht_url_bg.userData.visible);
			}
			me._ht_url_bg.visible = (v>0 && me._ht_url_bg.userData.visible);
		}
		me._ht_url_bg.userData.setBackgroundColor = function(v) {
			me._ht_url_bg.material.color = v;
		}
		me._ht_url_bg.userData.setBackgroundColorAlpha = function(v) {
			me._ht_url_bg.userData.backgroundColorAlpha = v;
			me._ht_url_bg.userData.setOpacity(me._ht_url_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 26, 26, 26, 26);
		el.userData.ggId="ht_url_bg";
		me._ht_url_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_url_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._ht_url_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_url_bg.userData.transitionValue_scale = {x: 1.2, y: 1.2, z: 1.0};
					for (var i = 0; i < me._ht_url_bg.userData.transitions.length; i++) {
						if (me._ht_url_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_url_bg.userData.transitions[i].interval);
							me._ht_url_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_url_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_bg.scale.set(transition_scale.startScale.x + (me._ht_url_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_url_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_url_bg.position.x = (me._ht_url_bg.position.x - me._ht_url_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_url_bg.userData.curScaleOffX = scaleOffX;
							me._ht_url_bg.position.y = (me._ht_url_bg.position.y - me._ht_url_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_url_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_url_bg.userData.transitions.splice(me._ht_url_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_url_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._ht_url_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._ht_url_bg.userData.transitions.length; i++) {
						if (me._ht_url_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_url_bg.userData.transitions[i].interval);
							me._ht_url_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_url_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_bg.scale.set(transition_scale.startScale.x + (me._ht_url_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_url_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_url_bg.position.x = (me._ht_url_bg.position.x - me._ht_url_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_url_bg.userData.curScaleOffX = scaleOffX;
							me._ht_url_bg.position.y = (me._ht_url_bg.position.y - me._ht_url_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_url_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_url_bg.userData.transitions.splice(me._ht_url_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_url_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_url_bg.visible=false;
			player.repaint();
			me._ht_url_bg.userData.visible=false;
				}
				else {
			me._ht_url_bg.visible=((!me._ht_url_bg.material && Number(me._ht_url_bg.userData.opacity>0)) || (me._ht_url_bg.material && Number(me._ht_url_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url_bg.userData.visible=true;
				}
			}
		}
		me._ht_url_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_bg']=true;
			me._ht_url_icon.logicBlock_alpha();
			me._ht_url_title.logicBlock_alpha();
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.userData.ontouchend=function (e) {
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_bg']=false;
			me._ht_url_icon.logicBlock_alpha();
			me._ht_url_title.logicBlock_alpha();
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_icon_active';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_url_icon_active.visible
			let parentEl = me._ht_url_icon_active.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url_icon_active.userData.opacity = v;
			v = v * me._ht_url_icon_active.userData.parentOpacity;
			if (me._ht_url_icon_active.userData.setOpacityInternal) me._ht_url_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon_active.children.length; i++) {
				let child = me._ht_url_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_icon_active.userData.parentOpacity = v;
			v = v * me._ht_url_icon_active.userData.opacity
			if (me._ht_url_icon_active.userData.setOpacityInternal) me._ht_url_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon_active.children.length; i++) {
				let child = me._ht_url_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url_icon_active = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_url_icon_active.userData.materialNormal) me._ht_url_icon_active.userData.materialNormal.opacity = v;
			if (me._ht_url_icon_active.userData.materialOver) me._ht_url_icon_active.userData.materialOver.opacity = v;
			if (me._ht_url_icon_active.userData.materialActive) me._ht_url_icon_active.userData.materialActive.opacity = v;
			me._ht_url_icon_active.visible = (v>0 && me._ht_url_icon_active.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAHn0lEQVR4nO2cW6xdRRnH/3PapoHS055TwFtCq6QthkbOCaaSUC9BH0TqixUELPEai9FEEwlqVEikJvICNZGovGmi8Rx8LRGj5QFiIhHawgNwmmqLlTZgwbYnaQ+3Hw/zjXv22mvvs9bM2pfG83+Ztfea7z/fzJr55vbNSEtYwhKWMDy4YSsAjEm6SNK4pPX291FJpyXNO+feGpZu0oALCFgu6YOSrpM0JWmzpI2SLugiclbSIUnPSzogaZ+kvzvn3ui/tgMCsAL4NDALnCIfp4xrO7Ci3/r3rQYBF0v6tqSvSbokfiVpv6Qn5GvGPyX9SNLVBYonJd0j6b3yNW2rpOmCzi9LelDS/c65k83nog8A1gL3AvPRVz8LzAA7gMlC/AeieDcCN0W/f16IO2'+
	'kcM8YZMG9prhlsbmsAcMCtwIlI8cPALmC8i8z1Udy7ov/vjv7/ZBfZceM+HMU9YToMvfNpA3AJ8HCk6FFgJ94od5OZBF60+PvwvVl4NwY8au/+DUz04FluaR2N0n8Y38SHD2AbcMwUWwB2AxdWkPudyZwCLit5vx44bXF+W4HvQkt7wWSOAdtS89UIgNuA102hOWCqotwnoq/9hR7xvhjF+3hF7inTBdNtZ9X8NArgjkj5h4DVFeWWAU+b3CP0sBd4u/Yni3sQWFYxjdWmU8AdVfPVCAqFs4fIflSQ/arJvQlsqRB/i8UF+EqNdMaAn0V6fqeqbBasWQXc1asGlMiuotXL/aKG3C9N5gSwqoaco71H7G9zwxvkYHP21Ckck/+myZ4BLq0hd6nJAHyjZpouqkmv0y/Dje/KQ281W6dZmfwyWmOW+xLSv99kD1PRFkWy'+
	'Y7Rs0jGaHgLYVwjjnDkqGuQCxw6TfwNYv7hEh/wGWrboMwny48Ahk99bt/YvRn6rES9QsSsv4XjMOH6foceMcTyWKD8NvGYct6TqUSRdS8uw7k7k2EAL12bosi3iqV0LjeMnJn+cJuZu+Ekg+KH8oiPkLhzfM44jOVXbbEmYUnw3kWNVxHFvqi6B7GJas/LkLhI4YBw/zVJIbR9sfwZHGKrMA+tylNltRIfpMfFchGNj1CyuSlamxTcV8W1M5FgO/MM47klVZAXwspHsSiLxPF83jhdymlfE54wL4PYMntuN4yVSVibxy6TgF6ZK13Mq8oTxx69TOUo4f2Ocsxkca2gtum1PIZg14ZkMJcaiWvilVJ4S3i9HX7/WgLXAk5ZHa6NhgX1HhgJXRvbifak8JbyXR7xXZvB81jhOUcfGAteY4FsU1pBrKnCz8bzShP2JeB'+
	'3wqnF/LoNnneUR4ENlcbpVz+ss3O+ceyVVAUnvt/BZ5xwZPG0wrmcLaaTwnJTfb5Ok0gW5bgUUphNPpCZu+F8BZfKUIbuADH+zsHQI0q2ANlv4fGbiV1g4ygU0Z+HmspcdBWS9QhiAHcpM/N0WvpDJU4bA+a5MnpDHTWV2sqwGXaTWXvnx1FTxazbBwP8nlacHAudkTlcv6UULL5DPexvKurZ4ULga2JCY8IRa28QrM3i6YaWFY5I+APw3kWe88HwmftlRpfDLEY8nJna+41rn3F/jP3Kq5v8FyprY0ej5Y4XfdTAh6Sl7vl7Sc4k83XC5pD/b81Z5T48UbJD0qD135LWsgE5Hz2ecc0dSUgX+Je/q4iQtpPL04H9n9PMZ59y5RJ54pnC6+L6sic3Le3ZJGV2oc+5NSWEU3g9HgrUWLqQWjiEMRc7K570NHQVkPoFh'+
	'bJC0IBUhdKEdzgkN4D0WvpTJE/I4VzYd6makwwi6dHRZA8Hu5I52yxBG6bm2bZOFpbOGbgUUJnBbMxNvajpQhqYKKMziD5a97FZA+yyczlnuUFRATS53GLLnefgF+zAx/0sdwVFfMJuI1nE+ksGz6IJZaQ0yP+RH7OdNqQrIf90wZ/poBk8RH5YfPpxT3pJMyNsfa/teM9qL9vcZZ/Vm0cmRvWg/kts+xvmUcf4ggyNv28dIRnHj8LKI75pEjvyNQyMaxa3nO43rCInrQLS2ns+Qs/VsZCPjvGBcWYVNk84LRjhK7i9bcpsrTbu/GOmoOFA9aBxPp9RE+uFAZcSj4IL3DuCccdTexqafLniWQOzE+RCDd+L8cdQ0Vi4u0SbbXyfOKKFhuQFPACdN9vs10xyMG3CU4E5auLtOIZHuSB5cgF+lx8mfErmiI/nnq8pmgc'+
	'EeRbgiqrXfqpHOcI4iRAoUD7NUmq9R/zDLXov7HBWnBHiDHB9mGWzhRIrEx6EOAdMV5aoeh4qb8w0Vuadp9VbDOw4VKRQfqHsNPxBb9MAJ7QfqOrp9/JwrrEn9oVdNs/irLO0wzhn+gboA/JwtNAVo9kjmCXp0y/iJ5220H8nc20tmKMDbi1vw45SAJg71fqqL7Br8kkV8qPe46TBah3pjmOJlx8Jn8UucdY6FP1CIO2kcswzoWHg/LxZYJ3+xwC51XixwQN6za07+YoEfqvxigd3yFwtskt99mFLnxQK/krTnvLlYoAj8yuR2/Emdpq6mmAFu4Hy+mqIMeKN9tbzD5FXyG5Ob1Ptykzn5Tb2D8lszTw7ycpOhGzMzqL2ux2nMO3YJS1jCEs43vA0xtom7V6yhsQAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_url_icon_active_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_icon_active;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_url_icon_active.userData.width / 100.0, me._ht_url_icon_active.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_url_icon_active_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_url_icon_active";
		me._ht_url_icon_active.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon_active.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_icon_active']=true;
		}
		me._ht_url_icon_active.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_icon_active']=false;
		}
		me._ht_url_icon_active.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.add(me._ht_url_icon_active);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_url_icon.visible
			let parentEl = me._ht_url_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url_icon.userData.opacity = v;
			v = v * me._ht_url_icon.userData.parentOpacity;
			if (me._ht_url_icon.userData.setOpacityInternal) me._ht_url_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon.children.length; i++) {
				let child = me._ht_url_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_icon.userData.parentOpacity = v;
			v = v * me._ht_url_icon.userData.opacity
			if (me._ht_url_icon.userData.setOpacityInternal) me._ht_url_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon.children.length; i++) {
				let child = me._ht_url_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_url_icon.userData.materialNormal) me._ht_url_icon.userData.materialNormal.opacity = v;
			if (me._ht_url_icon.userData.materialOver) me._ht_url_icon.userData.materialOver.opacity = v;
			if (me._ht_url_icon.userData.materialActive) me._ht_url_icon.userData.materialActive.opacity = v;
			me._ht_url_icon.visible = (v>0 && me._ht_url_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAGzklEQVR4nO2cW6hVRRjHf3t7xPToOZ7jpRuoJF5CSaUwSYmwHrK0JLua0hVUCjKSLgQKaZAvZpAYvRUUnWOvCknZg0+F9x7SI4bHzCN2MT0HzOvuYb5hZi9m7b3WzNp7L2v/4TDr7D3ff76Zvdb3ffPNzIImmmiiicah0GgFgCIwHGgDxstnvcB5YAC41iC9gPoPUAtwFzAfmAlMASYBQ2PqXwCOAkeAA8AuYA9wpeaa1hGDgUVAN3AOKAX+nROuhcJ93WI0sAE4Q3kHrwF7ga3AauBR1F0RHYg98t1qqbtXZO06Z6SNUXXqUyYYCWxE2Q/dkQtAF7AE6IzU32LVewJ40vr/40jdTuHoEk5db0DabM+8NxmiACwFTmMUPwasQBlgFxZYdddan6+zPn'+
	'8wRrZNuI9ZdU+LDnlwPmUYA+zAKNoLLEMZ5Th0Aqek/i6UN9MoAt/Ld78BHRV4WqStXqv9HahHPBeYB5xEKXYRZROGJZD7EmN0xzm+H49y9SXgiwR8w6TtiyJzUnRrKJYDl1EK9aBcdxI8gPm1n6tQ73mr3v0JuWeKLiXRbVlCucyxBqP8NmBEQrlBwCGR+4bK9qIA7JS6B0U2CUaITlq/NQnlMoM9OJsptx/V8LLIXQWmJ6g/XeqWgJdStFMEPrL0fCOFbBCWW42uJZ3HaMV4ua0p5D7BeKnWFHIFyj1izR+3eRibs5n07vRVke0HxqaQGysyJeCVlG0WMHfSZWpouMdgvFU36R4rUPZDxyybPNr/EBNbJbVFGkWMTTpJDUKAAibO6SG5QbaxROSvYGbtaTABY4se85BvQ018S8B2Mg4ml2LinKSuPIrdwvFVgB5d'+
	'wrHbU34WcEk4ngnQowwjMYZ1gyfHBIyhnBugyzyLx+cuBHhf5PvIaO62ETN9SBIhu/C2cBwn7NYuYqYUb3lytFocGwN0AZQx07PyEBd5QDg+CFUI84PtD+DQocoAgamSDRjPUWniWQmTMI/FjBBlBDMtvkmeHC3AL8Kx3leRwcDvQrLClwRYJRwnyMZzFISrBKwM4FmJSbp5ZSYXYZJdcfmcJNDxx2cBHFF8jonHfNGOSbot9CHoFuGuACWKmLvwhQCeKF7E/PppA1Yb3n1swSTYlwQoMA1jL24L4IliosU7LYDncUxOKpWNnYNJsEdzyGnwtPD8RbaRawE4K9xPBfCMwiwE3O2qEHd7zpdyP6pzvrhdyp9FiaxQEk67DR/8iQpBICYhFzdAejrxY0DjUD5AWSOLAQL4QUpnCBI3QFOkPBLY+FQp8zxAPVJOcX3pGq'+
	'AiJgA7Gtj4LVKeCORxQXPeHMij+zgZh510DdBwzFp5X0DDgzAG/o8Anjhozk7CXP0pKYei+l4Gl2uzg8IRqJm4Dzowv8iQAJ44DJGyCNwB/O3J0xa57q8mMJfqGwj+q3/3RAcj5Nb8X8D1iPVa1/dF/k+DDmCfXC8ADnvyxGEi8K1cz0ZNaXwwAbXMDY6+ugbovHXdj0py+eBX1G1bQKVqfXnicJN1/RPwjyePPVM4H/3S9YgNoGa5EOZCr2Ki8FpsJBgp5UX8BwdMKHIB1fcyuAboGiY28E1IaWgX6tqcEIpbpTwTyKP7qNfzyxBnpHUE7YwuU0DbndBo1wUdpYfatslSOmcNcQOkJ3CzAxvPajrgQlYDpGfxB9MI5T3dAWYRcFUAR9V0RxzynjDrwHTs3gAe74QZ5Dvl+ggmX35DAE9QH/OctN8knN8FcAQn7fO6'+
	'7AMqQi8B7wZwBC/7QD4XDsdZfHM8OTJZOIR8Lj2/KVzH8Z9s66XnfjLYpZ+nzQsQPtiZbl6AfG1/mU7445r59hfIzwaqT4XjEH53Yk02UEE+tuDdiJq1+8ZUNd2CB+WbOLdR/02c72EejSFV6kZR802cGo3aBtyBWgUtAe+kbLNu24A1lmEM5Trqs5FcbwE+S+WTP1FEN5I/m0I2CPU8ijAVc9e+lqKdhh1F0IgeZkk6X0t7mGW71D1M8ilBG+WHWeo+OBr2caijKDeaBEmPQ9mP88MJuWdhvFVDj0Np2AfqLqECsSQHTuwDdS63Pw6Tk/qa6rauVdrWcU4uDtRpjMY8CnpaktWRzNNUdsstqDvZPpK5vYpMQ1BARad9GEWzONT7UIxsOyplYR/q7RMdcneo10Y77mPh3agUZ5pj4VsidTuFo5vr8Fh4FKNQuRbXiw'+
	'X2oeKg14HFxL9YYLHU2SoyrhcLrOc6e7FAFINRKc0usns1RRfKq9X81RSNeLnJnagNkzNQC5OTqfxykx7Uot5BVA56L3V8uUkejFmByq/HKTVIryaaaKKJhuNf5KOvRn1oslEAAAAASUVORK5CYII=');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_url_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_url_icon.userData.width / 100.0, me._ht_url_icon.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_url_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_url_icon";
		me._ht_url_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_url_icon.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_icon.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_url_icon.userData.transitions.length; i++) {
						if (me._ht_url_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url_icon.userData.transitions[i].interval);
							me._ht_url_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url_icon.material ? me._ht_url_icon.material.opacity : me._ht_url_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url_icon.userData.transitions.splice(me._ht_url_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url_icon.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_url_icon.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_url_icon.userData.transitions.length; i++) {
						if (me._ht_url_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url_icon.userData.transitions[i].interval);
							me._ht_url_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url_icon.material ? me._ht_url_icon.material.opacity : me._ht_url_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url_icon.userData.transitions.splice(me._ht_url_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url_icon.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_url_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_icon']=true;
		}
		me._ht_url_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_icon']=false;
		}
		me._ht_url_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.add(me._ht_url_icon);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_url_title_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.4);
		el.scale.set(0.50, 0.50, 1.0);
		el.userData.width = 132;
		el.userData.height = 44;
		el.userData.scale = {x: 0.50, y: 0.50, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_title';
		el.userData.x = 0;
		el.userData.y = -0.4;
		el.translateZ(0.120);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_url_title.visible
			let parentEl = me._ht_url_title.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url_title.userData.opacity = v;
			v = v * me._ht_url_title.userData.parentOpacity;
			if (me._ht_url_title.userData.setOpacityInternal) me._ht_url_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_title.children.length; i++) {
				let child = me._ht_url_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_title.userData.parentOpacity = v;
			v = v * me._ht_url_title.userData.opacity
			if (me._ht_url_title.userData.setOpacityInternal) me._ht_url_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_title.children.length; i++) {
				let child = me._ht_url_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url_title = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_title;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_url_title);
			if (skin.rectHasRoundedCorners(me._ht_url_title)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_url_title.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_url_title.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_url_title.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_url_title.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_url_title_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_url_title_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_url_title.userData.backgroundColorAlpha = 1;
		me._ht_url_title.userData.borderColorAlpha = 1;
		me._ht_url_title.userData.setOpacityInternal = function(v) {
			me._ht_url_title.material.opacity = v;
			if (me._ht_url_title.userData.hasScrollbar) {
				me._ht_url_title.userData.scrollbar.material.opacity = v;
				me._ht_url_title.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_url_title.userData.ggSubElement) {
				me._ht_url_title.userData.ggSubElement.material.opacity = v
				me._ht_url_title.userData.ggSubElement.visible = (v>0 && me._ht_url_title.userData.visible);
			}
			me._ht_url_title.visible = (v>0 && me._ht_url_title.userData.visible);
		}
		me._ht_url_title.userData.setBackgroundColor = function(v) {
			me._ht_url_title.material.color = v;
		}
		me._ht_url_title.userData.setBackgroundColorAlpha = function(v) {
			me._ht_url_title.userData.backgroundColorAlpha = v;
			me._ht_url_title.userData.setOpacity(me._ht_url_title.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = player.getTHREESkinColor('#ffffff');
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat_regular', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 264;
		canvas.height = 88;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_url_title;
			var canv = me._ht_url_title.userData.textCanvas;
			var ctx = me._ht_url_title.userData.textCanvasContext;
			var tmpCanv = me._ht_url_title.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_url_title.userData.scrollPosPercent ? tmpCanv.height * me._ht_url_title.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_url_title.userData.boxWidthCanv / 100.0;
		height = me._ht_url_title.userData.boxHeightCanv / 100.0;
		me._ht_url_title.userData.width = me._ht_url_title.userData.boxWidthCanv;
		me._ht_url_title.userData.height = me._ht_url_title.userData.boxHeightCanv;
		me._ht_url_title.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_url_title, 0, 40);
		me._ht_url_title.position.x = newPos.x;
		me._ht_url_title.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_url_title_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_url_title.material.map) {
				me._ht_url_title.material.map.dispose();
			}
			me._ht_url_title.material.map = textTexture;
			me._ht_url_title.material.needsUpdate = true;
			player.repaint();
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_url_title, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_url_title, 'box-sizing: border-box; width: auto; height: auto; font-size: 28px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_url_title.userData.textColor + ' !important;', false, true, false);
			me._ht_url_title.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_url_title.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_url_title.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_url_title.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_url_title.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_url_title";
		me._ht_url_title.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_url_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_title.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_url_title.userData.transitions.length; i++) {
						if (me._ht_url_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url_title.userData.transitions[i].interval);
							me._ht_url_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url_title.material ? me._ht_url_title.material.opacity : me._ht_url_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url_title.userData.transitions.splice(me._ht_url_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url_title.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_url_title.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_url_title.userData.transitions.length; i++) {
						if (me._ht_url_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url_title.userData.transitions[i].interval);
							me._ht_url_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url_title.material ? me._ht_url_title.material.opacity : me._ht_url_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url_title.userData.transitions.splice(me._ht_url_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url_title.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_url_title.userData.ggUpdatePosition=function (useTransition) {
				me._ht_url_title.userData.ggUpdateText(true);
		}
		me._ht_url_bg.add(me._ht_url_title);
		me._ht_url.add(me._ht_url_bg);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_url_custom_image.visible
			let parentEl = me._ht_url_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_url_custom_image.userData.opacity = v;
			v = v * me._ht_url_custom_image.userData.parentOpacity;
			if (me._ht_url_custom_image.userData.setOpacityInternal) me._ht_url_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_custom_image.children.length; i++) {
				let child = me._ht_url_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_custom_image.userData.parentOpacity = v;
			v = v * me._ht_url_custom_image.userData.opacity
			if (me._ht_url_custom_image.userData.setOpacityInternal) me._ht_url_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_custom_image.children.length; i++) {
				let child = me._ht_url_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_url_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_url_custom_image);
		}
		me._ht_url_custom_image.userData.backgroundColorAlpha = 1;
		me._ht_url_custom_image.userData.borderColorAlpha = 1;
		me._ht_url_custom_image.userData.setOpacityInternal = function(v) {
			if (me._ht_url_custom_image.userData.ggSubElement) {
				me._ht_url_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_url_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_url_custom_image.userData.visible);
			}
			me._ht_url_custom_image.visible = (v>0 && me._ht_url_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 100;
		currentHeight = 100;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_url_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_url_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_url_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_url_custom_image_subElementMaterial';
				me._ht_url_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_url_custom_image.userData.ggUpdatePosition();
				me._ht_url_custom_image.userData.ggText = extUrl;
				me._ht_url_custom_image.userData.setOpacity(me._ht_url_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_url_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_url_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 100;
		el.userData.clientHeight = 100;
		el.userData.ggId="ht_url_custom_image";
		me._ht_url_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_url_custom_image.visible=((!me._ht_url_custom_image.material && Number(me._ht_url_custom_image.userData.opacity>0)) || (me._ht_url_custom_image.material && Number(me._ht_url_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url_custom_image.userData.visible=true;
				}
				else {
			me._ht_url_custom_image.visible=false;
			player.repaint();
			me._ht_url_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_url_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_custom_image']=true;
		}
		me._ht_url_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_custom_image']=false;
		}
		me._ht_url_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.userData.clientWidth;
			var parentHeight = me._ht_url_custom_image.userData.clientHeight;
			var img = me._ht_url_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_url_custom_image_imgGeometry';
			}
		}
		me._ht_url.add(me._ht_url_custom_image);
		me._ht_url.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url']=false;
		me._ht_url_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_bg']=false;
		me._ht_url_bg.logicBlock_scaling();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_icon_active.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_icon_active']=false;
		me._ht_url_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_icon']=false;
		me._ht_url_icon.logicBlock_alpha();
		me._ht_url_title.userData.setOpacity(0.00);
			me._ht_url_title.userData.ggUpdateText(true);
		me._ht_url_title.logicBlock_alpha();
		me._ht_url_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_custom_image']=false;
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url_bg.logicBlock_visible();
					me._ht_url_title.userData.ggUpdateText();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.__obj = me._ht_url;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_url_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_url_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_url_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_url_bg.ggParameter.sx = 1.2;
					me._ht_url_bg.ggParameter.sy = 1.2;
					me._ht_url_bg.style.transform=parameterToTransform(me._ht_url_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_url_bg);}, 350);
				}
				else {
					me._ht_url_bg.ggParameter.sx = 1;
					me._ht_url_bg.ggParameter.sy = 1;
					me._ht_url_bg.style.transform=parameterToTransform(me._ht_url_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_url_bg);}, 350);
				}
			}
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_url_bg']=true;
			me._ht_url_icon.logicBlock_alpha();
			me._ht_url_title.logicBlock_alpha();
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_url_bg']=false;
			me._ht_url_icon.logicBlock_alpha();
			me._ht_url_title.logicBlock_alpha();
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_icon_active=document.createElement('div');
		els=me._ht_url_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMTYuNyIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuMyIgeDI9IjM2LjciIHkxPSIyMCIgeTI9IjIwIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjAsMy4zYzQuMiw0LjYsNi41LDEwLjUsNi43LDE2LjdjLTAuMSw2LjIt'+
			'Mi41LDEyLjEtNi43LDE2LjdjLTQuMi00LjYtNi41LTEwLjUtNi43LTE2LjcmI3hkOyYjeGE7JiN4OTtDMTMuNSwxMy44LDE1LjgsNy45LDIwLDMuM3oiLz4KPC9zdmc+Cg==';
		me._ht_url_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon_active);
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMTYuNyIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuMyIgeDI9IjM2LjciIHkxPSIyMCIgeTI9IjIwIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjAsMy4zYzQuMiw0LjYsNi41LDEwLjUsNi43LDE2LjdjLTAuMSw2LjIt'+
			'Mi41LDEyLjEtNi43LDE2LjdjLTQuMi00LjYtNi41LTEwLjUtNi43LTE2LjcmI3hkOyYjeGE7JiN4OTtDMTMuNSwxMy44LDE1LjgsNy45LDIwLDMuM3oiLz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_url_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_url_icon.style.opacity == 0.0) { me._ht_url_icon.style.visibility="hidden"; } }, 205);
					me._ht_url_icon.style.opacity=0;
				}
				else {
					me._ht_url_icon.style.visibility=me._ht_url_icon.ggVisible?'inherit':'hidden';
					me._ht_url_icon.style.opacity=1;
				}
			}
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon);
		el=me._ht_url_title=document.createElement('div');
		els=me._ht_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_url_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_title.style.visibility=me._ht_url_title.ggVisible?'inherit':'hidden';
					me._ht_url_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_title.style.opacity == 0.0) { me._ht_url_title.style.visibility="hidden"; } }, 205);
					me._ht_url_title.style.opacity=0;
				}
			}
		}
		me._ht_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_title);
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
			el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
				if (hotspot.changeLanguage__) hotspot.changeLanguage__();
			if (hotspot.customimage && me._ht_url_custom_image.ggText != hotspot.customimage) {
				me._ht_url_custom_image.ggText=me._ht_url_custom_image.ggText_untranslated=hotspot.customimage;
				me._ht_url_custom_image.ggSubElement.setAttribute('src', hotspot.customimage);
				me._ht_url_custom_image.ggSubElement.style.width=hotspot.customimagewidth + 'px';
				me._ht_url_custom_image.ggSubElement.style.height=hotspot.customimageheight + 'px';
				me._ht_url_custom_image.ggUpdatePosition();
			}
		}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me.elementMouseOver['ht_url']=false;
		me.elementMouseOver['ht_url_bg']=false;
		me._ht_url_bg.logicBlock_scaling();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_icon.logicBlock_alpha();
		me._ht_url_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_image__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_image.visible = (v>0 && me._ht_image.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_image';
		el.userData.x = -5.5;
		el.userData.y = 1.73;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_image.visible
			let parentEl = me._ht_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image.userData.opacity = v;
			v = v * me._ht_image.userData.parentOpacity;
			if (me._ht_image.userData.setOpacityInternal) me._ht_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image.children.length; i++) {
				let child = me._ht_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image.userData.parentOpacity = v;
			v = v * me._ht_image.userData.opacity
			if (me._ht_image.userData.setOpacityInternal) me._ht_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image.children.length; i++) {
				let child = me._ht_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image = el;
		el.userData.ggId="ht_image";
		me._ht_image.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.userData.onclick=function (e) {
				skin._image_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_popup_title.ggUpdateText();
			skin._image_popup_title.ggTextDiv.scrollTop = 0;
			skin._popup_image.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.hasOwnClickAction = true;
		me._ht_image.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: player.getTHREESkinColor('#4fb5c2'), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_image_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 52;
		el.userData.height = 52;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_image_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_image_bg.visible
			let parentEl = me._ht_image_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image_bg.userData.opacity = v;
			v = v * me._ht_image_bg.userData.parentOpacity;
			if (me._ht_image_bg.userData.setOpacityInternal) me._ht_image_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_bg.children.length; i++) {
				let child = me._ht_image_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image_bg.userData.parentOpacity = v;
			v = v * me._ht_image_bg.userData.opacity
			if (me._ht_image_bg.userData.setOpacityInternal) me._ht_image_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_bg.children.length; i++) {
				let child = me._ht_image_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 26;
		el.userData.borderRadius.default.topRight = 26;
		el.userData.borderRadius.default.bottomRight = 26;
		el.userData.borderRadius.default.bottomLeft = 26;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_image_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_image_bg);
			if (skin.rectHasRoundedCorners(me._ht_image_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_image_bg.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_image_bg.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_image_bg.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_image_bg.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_image_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_image_bg_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_image_bg.userData.backgroundColorAlpha = 1;
		me._ht_image_bg.userData.borderColorAlpha = 1;
		me._ht_image_bg.userData.setOpacityInternal = function(v) {
			me._ht_image_bg.material.opacity = v * me._ht_image_bg.userData.backgroundColorAlpha;
			if (me._ht_image_bg.userData.ggSubElement) {
				me._ht_image_bg.userData.ggSubElement.material.opacity = v
				me._ht_image_bg.userData.ggSubElement.visible = (v>0 && me._ht_image_bg.userData.visible);
			}
			me._ht_image_bg.visible = (v>0 && me._ht_image_bg.userData.visible);
		}
		me._ht_image_bg.userData.setBackgroundColor = function(v) {
			me._ht_image_bg.material.color = v;
		}
		me._ht_image_bg.userData.setBackgroundColorAlpha = function(v) {
			me._ht_image_bg.userData.backgroundColorAlpha = v;
			me._ht_image_bg.userData.setOpacity(me._ht_image_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 26, 26, 26, 26);
		el.userData.ggId="ht_image_bg";
		me._ht_image_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._ht_image_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_image_bg.userData.transitionValue_scale = {x: 1.2, y: 1.2, z: 1.0};
					for (var i = 0; i < me._ht_image_bg.userData.transitions.length; i++) {
						if (me._ht_image_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_image_bg.userData.transitions[i].interval);
							me._ht_image_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_image_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_image_bg.scale.set(transition_scale.startScale.x + (me._ht_image_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_image_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_image_bg.position.x = (me._ht_image_bg.position.x - me._ht_image_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_image_bg.userData.curScaleOffX = scaleOffX;
							me._ht_image_bg.position.y = (me._ht_image_bg.position.y - me._ht_image_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_image_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_image_bg.userData.transitions.splice(me._ht_image_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_image_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._ht_image_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._ht_image_bg.userData.transitions.length; i++) {
						if (me._ht_image_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_image_bg.userData.transitions[i].interval);
							me._ht_image_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_image_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_image_bg.scale.set(transition_scale.startScale.x + (me._ht_image_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_image_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_image_bg.position.x = (me._ht_image_bg.position.x - me._ht_image_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_image_bg.userData.curScaleOffX = scaleOffX;
							me._ht_image_bg.position.y = (me._ht_image_bg.position.y - me._ht_image_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_image_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_image_bg.userData.transitions.splice(me._ht_image_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_image_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._ht_image_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_image_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_image_bg.visible=false;
			player.repaint();
			me._ht_image_bg.userData.visible=false;
				}
				else {
			me._ht_image_bg.visible=((!me._ht_image_bg.material && Number(me._ht_image_bg.userData.opacity>0)) || (me._ht_image_bg.material && Number(me._ht_image_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_image_bg.userData.visible=true;
				}
			}
		}
		me._ht_image_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_icon.logicBlock_alpha();
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.userData.ontouchend=function (e) {
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_icon.logicBlock_alpha();
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_image_icon_active';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_image_icon_active.visible
			let parentEl = me._ht_image_icon_active.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image_icon_active.userData.opacity = v;
			v = v * me._ht_image_icon_active.userData.parentOpacity;
			if (me._ht_image_icon_active.userData.setOpacityInternal) me._ht_image_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_icon_active.children.length; i++) {
				let child = me._ht_image_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image_icon_active.userData.parentOpacity = v;
			v = v * me._ht_image_icon_active.userData.opacity
			if (me._ht_image_icon_active.userData.setOpacityInternal) me._ht_image_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_icon_active.children.length; i++) {
				let child = me._ht_image_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image_icon_active = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_image_icon_active.userData.materialNormal) me._ht_image_icon_active.userData.materialNormal.opacity = v;
			if (me._ht_image_icon_active.userData.materialOver) me._ht_image_icon_active.userData.materialOver.opacity = v;
			if (me._ht_image_icon_active.userData.materialActive) me._ht_image_icon_active.userData.materialActive.opacity = v;
			me._ht_image_icon_active.visible = (v>0 && me._ht_image_icon_active.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAErElEQVR4nO2bX2scVRjGf29IQm/SK5vQFqEXBmxBQUEiiqVYqBeVlLQfoElAq59Bqxjsh6hCary01CC0N0l6Uyym4I0tWCEFG2lskl5WMDXBx4tz1jm72e3+O2c2m8wPQmZ2Zp73zLNnzp93zkJBQUFBQUHBLsXyCiTpCHAkktyymf0eSavzSHpd0jPFZSyPsievQZL6gZ+BVyJLPwVeMLN/IuuW0ZtS3PMpmTm3gM/b1PsWeBEYAD6JoNc5/KO15R+JX3xtalezX9Jdr7kp6bUYZc2dlDeSwvjckTQVNKhfdJt+UvL4hrv2Ucuz4Hl8Ec/t5iUNAsNAXxOaU8A7pW0zS9rLSJoCLvrdZnvJTWDJzNabDToqabHhIVt1cmk8K2psqyxKGm0kWJ+k6T'+
	'aDSW7UnFuboHgj9WlJZU+LVQSaBib87grwDXAPWGuyzA/N7GFrt9saam2uN4QbxI4Dh/1nV8xsslqA0cDJ7yTtb7243YWk/ZKuBve//XFT1uY82kvmlPAmPfIe/FR5cDBw78sOlbHjSLoU+DAI0OOPDQfn3cu/aDuGu8H2MGQGhS13sw3ybiK89z7IJ91RF0k9wCBZT7ICrJvZv50rlaNjBkkaAM4BY8ApYF/FKRuS5oBZ4JqZPc25iBmSTgSN04nEsXolXZC01sQAblXSh5KSfqHVfMi1BvmeYRZ4K/h4CbgB3Ace+88OAkeB94GXcAO6y8B5SWNNz53aJY8aJOmYpOUgzrykkQauG5G0EFy3LOlYojJW9yG1QZKGAnOeSZqof9U2jQll861lXxtjlzN/g+TanNuBOcfb0DoemPRj7Dapmg89da6JwSRZm/ORmd1q'+
	'Vchf+7HffZtsYp2WVDVI0oBcDyRJCxF1b3rNVbnhQizd3GvQOVwPBO4dVixKWkPA2Yi620htUOn18JKZ3Ymoewd4UBEjCckMkps+nPK7N2Jqm5mA6373PR8rCSlr0CDZ9OF+Av3f/P99wIEE+kBagw4H249rntU6f9aIFZU8uvmuJqVBK8H2wQT6h2rEikpKg9aBDb99NIH+y/7/38CTBPpAQoN8smvO756OqS3JcDN9gLmUibXUbdCs/z+sBmbuTTCCS4OEMZKQ2qBrZHneSxF1S1prPkYykhrk06Sf+d2TraQ5KpE0Cbzrdy+a2V/tajYStEh30KF0h5lt4eZLfwD9wLyvBU3hr5n3GsvAWa+dnpQ1KIhRmXJdkPSm75FqXWP+nJvBdbmmXHNL2pvZr5LeAL7HJbtO+r8Hkq7j5lal6cMh3NjpNFlvBXAbV3N2X9'+
	'I+iNUr9wpnVY2zKumD2G1OlbJ1JOVahpltmdlXuHff48APZCPukA1/bBwYNrOvc2tzAjr2ZtUPAWaAGbl8zgHKXz0/2dOvnkO8EWvswIUTRbqjDoVBdSgMqkPJoM3gs6FqJ+4RwnvfhMygpeBA7B++dROvBttLZUdUrHKtvcrVnxCuk766l0zSc9ZJ11tpP4Nb+bnjxieRGMI9VuepsdK+0qA+3EqufFZN7DyuABfM7P9Oq6ybN7NN794ZYDHnwnWSReCMmU2G5kCa34t1E639XqygoKCgoKBgN/AfWLznydugCdcAAAAASUVORK5CYII=');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_image_icon_active_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_image_icon_active;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_image_icon_active.userData.width / 100.0, me._ht_image_icon_active.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_image_icon_active_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_image_icon_active";
		me._ht_image_icon_active.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_icon_active.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_image_icon_active']=true;
		}
		me._ht_image_icon_active.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_image_icon_active']=false;
		}
		me._ht_image_icon_active.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.add(me._ht_image_icon_active);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_image_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_image_icon.visible
			let parentEl = me._ht_image_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image_icon.userData.opacity = v;
			v = v * me._ht_image_icon.userData.parentOpacity;
			if (me._ht_image_icon.userData.setOpacityInternal) me._ht_image_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_icon.children.length; i++) {
				let child = me._ht_image_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image_icon.userData.parentOpacity = v;
			v = v * me._ht_image_icon.userData.opacity
			if (me._ht_image_icon.userData.setOpacityInternal) me._ht_image_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_icon.children.length; i++) {
				let child = me._ht_image_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_image_icon.userData.materialNormal) me._ht_image_icon.userData.materialNormal.opacity = v;
			if (me._ht_image_icon.userData.materialOver) me._ht_image_icon.userData.materialOver.opacity = v;
			if (me._ht_image_icon.userData.materialActive) me._ht_image_icon.userData.materialActive.opacity = v;
			me._ht_image_icon.visible = (v>0 && me._ht_image_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAEPklEQVR4nO3bX2sdRRjH8U9DWnqT3JnQFqEXBlSoYEEiiuVgQS8qAdMX0Dbgv9egVQz2RagQrZeWWgS9se1NUdpe2oItpKARY217ZwRbUhovZg67nubknJPM7MlJ9gvLDvvnmZnfzs4+88wsNTU1NTU1NVuUHRXmtT9uKVjAr4lsbQoO4gFWEm5vVlqDjOzCNWnFWcHf0XZWhnNngA9wIKYv4aMN2vsKT2IE7yew11cO4qHwxH+W5omXW+Qynk9gsy/krEgO4StnVtFffDyA9rNSxRMe2FetyoJnfxCdHMUxTGBnDzZn8UopnfsrM4uTMd3rV3IZ87jba6ZTuGJjfkpVnWcKP+uKUOeO7MTcBjNbEbzmKvuEVJ76nJa3pfUVm8OJmF7El7iOOz0W+L'+
	'e4Vcl+vY/1xgUn9jj2xWNfYGa1i6cUSn6N0d7LOLCM4oyi/qu+bs0+5w/bS5wmo0LdV3C59eSYQr1Pqi3XpuKUQocxGIonJkoXXa+4UJuJa6X0BIVA5Z671w55K1Gu+06qCXd0w5DQpJtfkkXBeXvUtxJF+inQCI4KkcHXsLvl/H38gHM4i6VKS9dCQ9E5NTLnNYx3hObcrQP3F96W/4E2tOhQdQsaE1rES6Vj8/geN3A7HtuDZ/AGnhIcuk9xTGhxPY+dNkpD/hb0rDAb0cznPCa7uG8SF0r3LURbOWhoo0PbE4kYV4jzQDGc6YUTivHWguinJKahDwIN4yeFOIc2YOuQQqQfpe8iGlp0GFrj4lTMKPqcd4WYzXq5hPdi+mXra4nroiFPCxoRvkArQj+SiouKr9tIQrsNFbego0L/Q5jDSkXT1jimE9p9jNwCNaeH'+
	'53E1od2ruNWSRxZyCjQkeMgEPyclK/gupl+XsR45BRpTDB9uZLB/M+5344kM9pFXoH2l9O22V62fP9vklZQqPvMDTU6BFkvpPRns722TV1JyCnRXCFkQBp6peTru/8W9DPaRV6BHQjwHjiS2vUMY6Yt5ZAus5e6DzsX9hO5G7t0yKYRBynlkIbdAZxVx3lMJ7TZt3Yl5ZCO3QEv4MKYPSzO4nMGrMX0S/ySw2ZGGOtxBn8IdD4Xx0u/CSozz2sx9d2Am3rtLCJhNR9uV0FB9yPUCXrT2GqUd8ZqLpfsqDblWGbT/BS/gGyHYdThut4SB503F8GGv4DsdUXytCK/qtC0atG8yLEzhNANp3U77vKUP0z79GIs9xGeCb3Qc3yo87jL347nj8drPVdjnNOnnzOoSTsdtSAhZlKee79nmU89lHglO36ZbOFGHOzpQC9SBWq'+
	'AONAVaLh0bX+3CbUK57ssUAs2XThywfXmulJ5vPVmvcl1jlSv/Xyd9xvYSqe066U4r7U8LKz83nX+SiHHhtTqmi5X2pPtXY1C3x/7VaMeU8B72u8BVbZe1+f0gx/9ig8S6/xerqampqampGXj+Ax+gBmauzqmCAAAAAElFTkSuQmCC');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_image_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_image_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_image_icon.userData.width / 100.0, me._ht_image_icon.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_image_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_image_icon";
		me._ht_image_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_image_icon.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_icon.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_image_icon.userData.transitions.length; i++) {
						if (me._ht_image_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_image_icon.userData.transitions[i].interval);
							me._ht_image_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_image_icon.material ? me._ht_image_icon.material.opacity : me._ht_image_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_image_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_image_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_image_icon.userData.transitions.splice(me._ht_image_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_image_icon.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_image_icon.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_image_icon.userData.transitions.length; i++) {
						if (me._ht_image_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_image_icon.userData.transitions[i].interval);
							me._ht_image_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_image_icon.material ? me._ht_image_icon.material.opacity : me._ht_image_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_image_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_image_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_image_icon.userData.transitions.splice(me._ht_image_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_image_icon.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_image_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.add(me._ht_image_icon);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_image_title_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.4);
		el.scale.set(0.50, 0.50, 1.0);
		el.userData.width = 132;
		el.userData.height = 44;
		el.userData.scale = {x: 0.50, y: 0.50, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_image_title';
		el.userData.x = 0;
		el.userData.y = -0.4;
		el.translateZ(0.120);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_image_title.visible
			let parentEl = me._ht_image_title.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image_title.userData.opacity = v;
			v = v * me._ht_image_title.userData.parentOpacity;
			if (me._ht_image_title.userData.setOpacityInternal) me._ht_image_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_title.children.length; i++) {
				let child = me._ht_image_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image_title.userData.parentOpacity = v;
			v = v * me._ht_image_title.userData.opacity
			if (me._ht_image_title.userData.setOpacityInternal) me._ht_image_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_title.children.length; i++) {
				let child = me._ht_image_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image_title = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_image_title;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_image_title);
			if (skin.rectHasRoundedCorners(me._ht_image_title)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_image_title.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_image_title.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_image_title.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_image_title.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_image_title_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_image_title_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_image_title.userData.backgroundColorAlpha = 1;
		me._ht_image_title.userData.borderColorAlpha = 1;
		me._ht_image_title.userData.setOpacityInternal = function(v) {
			me._ht_image_title.material.opacity = v;
			if (me._ht_image_title.userData.hasScrollbar) {
				me._ht_image_title.userData.scrollbar.material.opacity = v;
				me._ht_image_title.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_image_title.userData.ggSubElement) {
				me._ht_image_title.userData.ggSubElement.material.opacity = v
				me._ht_image_title.userData.ggSubElement.visible = (v>0 && me._ht_image_title.userData.visible);
			}
			me._ht_image_title.visible = (v>0 && me._ht_image_title.userData.visible);
		}
		me._ht_image_title.userData.setBackgroundColor = function(v) {
			me._ht_image_title.material.color = v;
		}
		me._ht_image_title.userData.setBackgroundColorAlpha = function(v) {
			me._ht_image_title.userData.backgroundColorAlpha = v;
			me._ht_image_title.userData.setOpacity(me._ht_image_title.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = player.getTHREESkinColor('#ffffff');
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat_regular', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 264;
		canvas.height = 88;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_image_title;
			var canv = me._ht_image_title.userData.textCanvas;
			var ctx = me._ht_image_title.userData.textCanvasContext;
			var tmpCanv = me._ht_image_title.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_image_title.userData.scrollPosPercent ? tmpCanv.height * me._ht_image_title.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_image_title.userData.boxWidthCanv / 100.0;
		height = me._ht_image_title.userData.boxHeightCanv / 100.0;
		me._ht_image_title.userData.width = me._ht_image_title.userData.boxWidthCanv;
		me._ht_image_title.userData.height = me._ht_image_title.userData.boxHeightCanv;
		me._ht_image_title.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_image_title, 0, 40);
		me._ht_image_title.position.x = newPos.x;
		me._ht_image_title.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_image_title_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_image_title.material.map) {
				me._ht_image_title.material.map.dispose();
			}
			me._ht_image_title.material.map = textTexture;
			me._ht_image_title.material.needsUpdate = true;
			player.repaint();
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_image_title, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_image_title, 'box-sizing: border-box; width: auto; height: auto; font-size: 28px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden; overflow-y: auto;' + '; color: ' + me._ht_image_title.userData.textColor + ' !important;', false, true, false);
			me._ht_image_title.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_image_title.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_image_title.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_image_title.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_image_title.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_image_title";
		me._ht_image_title.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_image_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_title.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_image_title.userData.transitions.length; i++) {
						if (me._ht_image_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_image_title.userData.transitions[i].interval);
							me._ht_image_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_image_title.material ? me._ht_image_title.material.opacity : me._ht_image_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_image_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_image_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_image_title.userData.transitions.splice(me._ht_image_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_image_title.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_image_title.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_image_title.userData.transitions.length; i++) {
						if (me._ht_image_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_image_title.userData.transitions[i].interval);
							me._ht_image_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_image_title.material ? me._ht_image_title.material.opacity : me._ht_image_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_image_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_image_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_image_title.userData.transitions.splice(me._ht_image_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_image_title.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_image_title.userData.ggUpdatePosition=function (useTransition) {
				me._ht_image_title.userData.ggUpdateText(true);
		}
		me._ht_image_bg.add(me._ht_image_title);
		me._ht_image.add(me._ht_image_bg);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_image_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_image_custom_image.visible
			let parentEl = me._ht_image_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_image_custom_image.userData.opacity = v;
			v = v * me._ht_image_custom_image.userData.parentOpacity;
			if (me._ht_image_custom_image.userData.setOpacityInternal) me._ht_image_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_custom_image.children.length; i++) {
				let child = me._ht_image_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_image_custom_image.userData.parentOpacity = v;
			v = v * me._ht_image_custom_image.userData.opacity
			if (me._ht_image_custom_image.userData.setOpacityInternal) me._ht_image_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_image_custom_image.children.length; i++) {
				let child = me._ht_image_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_image_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_image_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_image_custom_image);
		}
		me._ht_image_custom_image.userData.backgroundColorAlpha = 1;
		me._ht_image_custom_image.userData.borderColorAlpha = 1;
		me._ht_image_custom_image.userData.setOpacityInternal = function(v) {
			if (me._ht_image_custom_image.userData.ggSubElement) {
				me._ht_image_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_image_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_image_custom_image.userData.visible);
			}
			me._ht_image_custom_image.visible = (v>0 && me._ht_image_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 100;
		currentHeight = 100;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_image_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_image_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_image_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_image_custom_image_subElementMaterial';
				me._ht_image_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_image_custom_image.userData.ggUpdatePosition();
				me._ht_image_custom_image.userData.ggText = extUrl;
				me._ht_image_custom_image.userData.setOpacity(me._ht_image_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_image_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_image_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 100;
		el.userData.clientHeight = 100;
		el.userData.ggId="ht_image_custom_image";
		me._ht_image_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_image_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_image_custom_image.visible=((!me._ht_image_custom_image.material && Number(me._ht_image_custom_image.userData.opacity>0)) || (me._ht_image_custom_image.material && Number(me._ht_image_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_image_custom_image.userData.visible=true;
				}
				else {
			me._ht_image_custom_image.visible=false;
			player.repaint();
			me._ht_image_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_image_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_image_custom_image']=true;
		}
		me._ht_image_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_image_custom_image']=false;
		}
		me._ht_image_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_custom_image.userData.clientWidth;
			var parentHeight = me._ht_image_custom_image.userData.clientHeight;
			var img = me._ht_image_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_image_custom_image_imgGeometry';
			}
		}
		me._ht_image.add(me._ht_image_custom_image);
		me._ht_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_image']=false;
		me._ht_image_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_image_bg']=false;
		me._ht_image_bg.logicBlock_scaling();
		me._ht_image_bg.logicBlock_visible();
		me._ht_image_icon_active.userData.setOpacity(1.00);
		me.elementMouseOver['ht_image_icon_active']=false;
		me._ht_image_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_image_icon']=false;
		me._ht_image_icon.logicBlock_alpha();
		me._ht_image_title.userData.setOpacity(0.00);
			me._ht_image_title.userData.ggUpdateText(true);
		me._ht_image_title.logicBlock_alpha();
		me._ht_image_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_image_custom_image']=false;
		me._ht_image_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image_bg.logicBlock_visible();
					me._ht_image_title.userData.ggUpdateText();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.__obj = me._ht_image;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 206px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
				skin._image_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_popup_title.ggUpdateText();
			skin._image_popup_title.ggTextDiv.scrollTop = 0;
			skin._popup_image.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_image_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_image_bg.ggParameter.sx = 1.2;
					me._ht_image_bg.ggParameter.sy = 1.2;
					me._ht_image_bg.style.transform=parameterToTransform(me._ht_image_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_bg);}, 350);
				}
				else {
					me._ht_image_bg.ggParameter.sx = 1;
					me._ht_image_bg.ggParameter.sy = 1;
					me._ht_image_bg.style.transform=parameterToTransform(me._ht_image_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_image_bg);}, 350);
				}
			}
		}
		me._ht_image_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_image_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_image_bg.style.visibility="hidden";
					me._ht_image_bg.ggVisible=false;
				}
				else {
					me._ht_image_bg.style.visibility=(Number(me._ht_image_bg.style.opacity)>0||!me._ht_image_bg.style.opacity)?'inherit':'hidden';
					me._ht_image_bg.ggVisible=true;
				}
			}
		}
		me._ht_image_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_icon.logicBlock_alpha();
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_icon.logicBlock_alpha();
			me._ht_image_title.logicBlock_alpha();
			me._ht_image_bg.logicBlock_scaling();
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon_active=document.createElement('div');
		els=me._ht_image_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuNSwyOC41YzAsMS43LTEuMywzLTMsM2gtMjdjLTEuNywwLTMtMS4zLTMtM1YxMmMwLTEuNywxLjMtMywzLTNoNmwzLTQuNWg5bDMsNC41aDZjMS43LDAsMywxLjMsMywzVjI4LjV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE5LjUiIHI9IjYiLz4KPC9zdmc+Cg==';
		me._ht_image_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon_active);
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0zNC41LD'+
			'I4LjUmI3hhOyYjeDk7YzAsMS43LTEuMywzLTMsM2gtMjdjLTEuNywwLTMtMS4zLTMtM1YxMmMwLTEuNywxLjMtMywzLTNoNmwzLTQuNWg5bDMsNC41aDZjMS43LDAsMywxLjMsMywzVjI4LjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjI1Ii8+CiA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE5LjUiIGZpbGw9Im5vbmUiIHI9IjYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjUi'+
			'Lz4KPC9zdmc+Cg==';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon.style.opacity == 0.0) { me._ht_image_icon.style.visibility="hidden"; } }, 205);
					me._ht_image_icon.style.opacity=0;
				}
				else {
					me._ht_image_icon.style.visibility=me._ht_image_icon.ggVisible?'inherit':'hidden';
					me._ht_image_icon.style.opacity=1;
				}
			}
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon);
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_title.style.visibility=me._ht_image_title.ggVisible?'inherit':'hidden';
					me._ht_image_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_title.style.opacity == 0.0) { me._ht_image_title.style.visibility="hidden"; } }, 205);
					me._ht_image_title.style.opacity=0;
				}
			}
		}
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_title);
		me._ht_image.appendChild(me._ht_image_bg);
		el=me._ht_image_custom_image=document.createElement('div');
		els=me._ht_image_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_image_custom_image.ggAltText));
			me._ht_image_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_image_custom_image.ggText_untranslated = img;
			me._ht_image_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_custom_image.ggSubElement.style.width = '0px';
			me._ht_image_custom_image.ggSubElement.style.height = '0px';
			me._ht_image_custom_image.ggSubElement.src='';
			me._ht_image_custom_image.ggSubElement.src=me._ht_image_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_custom_image.ggText != player._(me._ht_image_custom_image.ggText_untranslated)) {
				me._ht_image_custom_image.ggText = player._(me._ht_image_custom_image.ggText_untranslated);
				me._ht_image_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
			el.ggUpdateText = function() {
			me._ht_image_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_image_custom_image.ggAltText));
				if (hotspot.changeLanguage__) hotspot.changeLanguage__();
			if (hotspot.customimage && me._ht_image_custom_image.ggText != hotspot.customimage) {
				me._ht_image_custom_image.ggText=me._ht_image_custom_image.ggText_untranslated=hotspot.customimage;
				me._ht_image_custom_image.ggSubElement.setAttribute('src', hotspot.customimage);
				me._ht_image_custom_image.ggSubElement.style.width=hotspot.customimagewidth + 'px';
				me._ht_image_custom_image.ggSubElement.style.height=hotspot.customimageheight + 'px';
				me._ht_image_custom_image.ggUpdatePosition();
			}
		}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_image_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_custom_image.style.transition='';
				if (me._ht_image_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_custom_image.style.visibility=(Number(me._ht_image_custom_image.style.opacity)>0||!me._ht_image_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_image_custom_image.ggSubElement.src=me._ht_image_custom_image.ggText;
					me._ht_image_custom_image.ggVisible=true;
				}
				else {
					me._ht_image_custom_image.style.visibility="hidden";
					me._ht_image_custom_image.ggSubElement.src='';
					me._ht_image_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_image_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_custom_image.clientWidth;
			var parentHeight = me._ht_image_custom_image.clientHeight;
			var img = me._ht_image_custom_image__img;
			var aspectRatioDiv = me._ht_image_custom_image.clientWidth / me._ht_image_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_image_custom_image.ggScrollbars || currentWidth < me._ht_image_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_custom_image.scrollLeft=currentWidth / 2 - me._ht_image_custom_image.clientWidth / 2;
			}
			if (!me._ht_image_custom_image.ggScrollbars || currentHeight < me._ht_image_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_custom_image.scrollTop=currentHeight / 2 - me._ht_image_custom_image.clientHeight / 2;
			}
		}
		me._ht_image.appendChild(me._ht_image_custom_image);
		me.elementMouseOver['ht_image']=false;
		me.elementMouseOver['ht_image_bg']=false;
		me._ht_image_bg.logicBlock_scaling();
		me._ht_image_bg.logicBlock_visible();
		me._ht_image_icon.logicBlock_alpha();
		me._ht_image_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_image_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_image_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_image_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_image_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_image_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_info.visible = (v>0 && me._ht_info.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_info';
		el.userData.x = -4.8;
		el.userData.y = 1.73;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_info.visible
			let parentEl = me._ht_info.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_info.userData.opacity = v;
			v = v * me._ht_info.userData.parentOpacity;
			if (me._ht_info.userData.setOpacityInternal) me._ht_info.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info.children.length; i++) {
				let child = me._ht_info.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_info.userData.parentOpacity = v;
			v = v * me._ht_info.userData.opacity
			if (me._ht_info.userData.setOpacityInternal) me._ht_info.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info.children.length; i++) {
				let child = me._ht_info.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_info = el;
		el.userData.ggId="ht_info";
		me._ht_info.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.userData.onclick=function (e) {
				skin._info_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_title.ggUpdateText();
			skin._info_popup_title.ggTextDiv.scrollTop = 0;
				skin._info_popup_text.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_text.ggUpdateText();
			skin._info_popup_text.ggTextDiv.scrollTop = 0;
				skin._info_popup_title_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_title_phone.ggUpdateText();
			skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
				skin._info_popup_text_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_text_phone.ggUpdateText();
			skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.userData.hasOwnClickAction = true;
		me._ht_info.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: player.getTHREESkinColor('#26170f'), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_info_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 52;
		el.userData.height = 52;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_info_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_info_bg.visible
			let parentEl = me._ht_info_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_info_bg.userData.opacity = v;
			v = v * me._ht_info_bg.userData.parentOpacity;
			if (me._ht_info_bg.userData.setOpacityInternal) me._ht_info_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_bg.children.length; i++) {
				let child = me._ht_info_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_info_bg.userData.parentOpacity = v;
			v = v * me._ht_info_bg.userData.opacity
			if (me._ht_info_bg.userData.setOpacityInternal) me._ht_info_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_bg.children.length; i++) {
				let child = me._ht_info_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_info_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 26;
		el.userData.borderRadius.default.topRight = 26;
		el.userData.borderRadius.default.bottomRight = 26;
		el.userData.borderRadius.default.bottomLeft = 26;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_info_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_info_bg);
			if (skin.rectHasRoundedCorners(me._ht_info_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_info_bg.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_info_bg.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_info_bg.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_info_bg.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_info_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_info_bg_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_info_bg.userData.backgroundColorAlpha = 1;
		me._ht_info_bg.userData.borderColorAlpha = 1;
		me._ht_info_bg.userData.setOpacityInternal = function(v) {
			me._ht_info_bg.material.opacity = v * me._ht_info_bg.userData.backgroundColorAlpha;
			if (me._ht_info_bg.userData.ggSubElement) {
				me._ht_info_bg.userData.ggSubElement.material.opacity = v
				me._ht_info_bg.userData.ggSubElement.visible = (v>0 && me._ht_info_bg.userData.visible);
			}
			me._ht_info_bg.visible = (v>0 && me._ht_info_bg.userData.visible);
		}
		me._ht_info_bg.userData.setBackgroundColor = function(v) {
			me._ht_info_bg.material.color = v;
		}
		me._ht_info_bg.userData.setBackgroundColorAlpha = function(v) {
			me._ht_info_bg.userData.backgroundColorAlpha = v;
			me._ht_info_bg.userData.setOpacity(me._ht_info_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 26, 26, 26, 26);
		el.userData.ggId="ht_info_bg";
		me._ht_info_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._ht_info_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_info_bg.userData.transitionValue_scale = {x: 1.2, y: 1.2, z: 1.0};
					for (var i = 0; i < me._ht_info_bg.userData.transitions.length; i++) {
						if (me._ht_info_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_info_bg.userData.transitions[i].interval);
							me._ht_info_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_info_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_info_bg.scale.set(transition_scale.startScale.x + (me._ht_info_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_info_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_info_bg.position.x = (me._ht_info_bg.position.x - me._ht_info_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_info_bg.userData.curScaleOffX = scaleOffX;
							me._ht_info_bg.position.y = (me._ht_info_bg.position.y - me._ht_info_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_info_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_info_bg.userData.transitions.splice(me._ht_info_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_info_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._ht_info_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._ht_info_bg.userData.transitions.length; i++) {
						if (me._ht_info_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_info_bg.userData.transitions[i].interval);
							me._ht_info_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_info_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_info_bg.scale.set(transition_scale.startScale.x + (me._ht_info_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_info_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_info_bg.position.x = (me._ht_info_bg.position.x - me._ht_info_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_info_bg.userData.curScaleOffX = scaleOffX;
							me._ht_info_bg.position.y = (me._ht_info_bg.position.y - me._ht_info_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_info_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_info_bg.userData.transitions.splice(me._ht_info_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_info_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._ht_info_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_info_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_info_bg.visible=false;
			player.repaint();
			me._ht_info_bg.userData.visible=false;
				}
				else {
			me._ht_info_bg.visible=((!me._ht_info_bg.material && Number(me._ht_info_bg.userData.opacity>0)) || (me._ht_info_bg.material && Number(me._ht_info_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_info_bg.userData.visible=true;
				}
			}
		}
		me._ht_info_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_icon.logicBlock_alpha();
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.userData.ontouchend=function (e) {
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_icon.logicBlock_alpha();
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_info_icon_active';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_info_icon_active.visible
			let parentEl = me._ht_info_icon_active.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_info_icon_active.userData.opacity = v;
			v = v * me._ht_info_icon_active.userData.parentOpacity;
			if (me._ht_info_icon_active.userData.setOpacityInternal) me._ht_info_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_icon_active.children.length; i++) {
				let child = me._ht_info_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_info_icon_active.userData.parentOpacity = v;
			v = v * me._ht_info_icon_active.userData.opacity
			if (me._ht_info_icon_active.userData.setOpacityInternal) me._ht_info_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_icon_active.children.length; i++) {
				let child = me._ht_info_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_info_icon_active = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_info_icon_active.userData.materialNormal) me._ht_info_icon_active.userData.materialNormal.opacity = v;
			if (me._ht_info_icon_active.userData.materialOver) me._ht_info_icon_active.userData.materialOver.opacity = v;
			if (me._ht_info_icon_active.userData.materialActive) me._ht_info_icon_active.userData.materialActive.opacity = v;
			me._ht_info_icon_active.visible = (v>0 && me._ht_info_icon_active.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAFPklEQVR4nO2cPW8VRxSG3zUK4ATbBZQEpbDBSAEJKQVOLGQkyH+goDNdoAhJmpRJLCU/ARpDipj4H6SIkQtEgbAEDR+ykIASgkRIHPDHk2JGaO/ZWd+vmd0F3bebuTvnvOfc+dqZc1YaYIABEiKrmwDwkaR9kkYkjfrql5L+lvQsy7J/6uImVewgYFTSCUkzko5KmpT0cZtmTyTdk3RH0nVJy1mWvUzHsmIAY8A5YBnYoH9seFnngLG67esZwCQwD6xFcEoZ1ryOybrt7RjeMdeArYSOsdjyOqM7KtocBHwo6XtJ30r6oM3jryWtSLov6aGkp3KT8iv/+x65SXu/pAlJhyQdk7Srjdx1Sb9I+inLsrXurUgEYApYbfMvPwLmgBlgdw86dvu2c17Wdl'+
	'gFplLY2i3pIeAbYL2E6CbwGzANxOytmZe54HWEsA5cjKm3W5K7gcVt/sV5YLwCHuNeVxkW6aHH9ktqDFgqIXSbGro3bpjfLuG0hNuDVUJkDLhVQuQSsLMSImFuO4HLJdxuJXcSbliFes4GcJ66xnsrx8xzCW1K/yTVcPOKQ3POX8CpJEr7AHAKeBHgu5jkj8StCCHnNHYXCxwucdLF2IqmKC7lG03sORbA6cBwWyfWQgIME94Eno+ioAIAFwL8V4HhGMJ/DAi/lGQcJwJu/gytbj/0K3gSeGOE3qbGpbxX4LYAK8aWN/Qzh+LekC2SbAL9v3wEOJqqd+LmUouFXoUdpnhkMR+X8ltdGXA1p+daQifZ15KtnnpRQNAmid6tfM+x+CyRrnGKL7jz3QoZo3gS2FtX7ExfZQ7y+uzU8S/dHN/iznstphMSrmyIeX3TAftm'+
	'uxGwbBo/SknY60w+Sed0DVE8dFvutPEoxZ3nXErCdQB3MpnHBjBinxsKtD0haYep+yMJy3phbdohZ3sLQg6aMeXXkm7G4dQo3JSzLY+T9qGQg46a8kqWZf/FYtUUeJtWTPUR+1zIQXbTdD8WqQbigSkXNowtDsIFEti78oeRSTUJ1rYD3gdvYXvQvoCQp1EplSC3zB9JvcznELJtb75gHVRY5uRuPJPCO+SKXATHHUlXKnJSyLYWH1gHhU79XwXqYuNTSWdz5bO+LjVCtrX4IDRJ14G9HdZVDuugUGDSniqI1ISQbS0+sA5qOybfM7Sdc62DngUa7I9Gp3kI2fY8X2hxkA+YfGIaTEQm1SRY2x7boNHQJH3PlA9FpdQsHDRla3vQQXdM+RhVh49UAG/TMVN91z4XctB1U94l6XgcWo3CcRVD+pbsQyEHLUvaNHVfRi'+
	'LVJFibNuVsb0HBQT5I+4apPlPh+1FyAEOSzpjqG1mWFbY5ZTvpX035E0lf9E+tMfhczqY8roYeLHPQ75LsIdlX/XFqFGzgxZqkxa4kUP/FYeF0L5KuCfq9OPSCJqnv6vlqqjkv8Mf3dvXshdURvJDswIyYwQte4CD8pQPBgwCqNsIHIXgdKHjXgzjtqhUviDOnKBQG/KLvMZwQVBUG7JW9a4Hkp0uckyaQ3CvdLhXhQjLF3XHMPJeyVIR2SXl9ExhlkMzSlsh26VAr1JcOZfc5+Z5TjXNyhAYJdR2Qy3Cr23YpmQu4mMBol5S4ELpp3KvQdimZX9OAefG9TuqNmWg7LJcW/p06Twt/oM7Swg+q87TwnyXNNSotPA/cC+4C1X9YYIEGb1oLYPBpis6A2xLMEv/jJrNU8HGTqj+PMyIXantSLmByUtKBNs0ey9143pW7'+
	't1oO3T6kQu1LIC4mcK/CH1h6XvcHlgYYYICk+B8Cm6vx2kSXNAAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_info_icon_active_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_info_icon_active;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_info_icon_active.userData.width / 100.0, me._ht_info_icon_active.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_info_icon_active_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_info_icon_active";
		me._ht_info_icon_active.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_icon_active.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_info_icon_active']=true;
		}
		me._ht_info_icon_active.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_info_icon_active']=false;
		}
		me._ht_info_icon_active.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.add(me._ht_info_icon_active);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_info_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_info_icon.visible
			let parentEl = me._ht_info_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_info_icon.userData.opacity = v;
			v = v * me._ht_info_icon.userData.parentOpacity;
			if (me._ht_info_icon.userData.setOpacityInternal) me._ht_info_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_icon.children.length; i++) {
				let child = me._ht_info_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_info_icon.userData.parentOpacity = v;
			v = v * me._ht_info_icon.userData.opacity
			if (me._ht_info_icon.userData.setOpacityInternal) me._ht_info_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_icon.children.length; i++) {
				let child = me._ht_info_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_info_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_info_icon.userData.materialNormal) me._ht_info_icon.userData.materialNormal.opacity = v;
			if (me._ht_info_icon.userData.materialOver) me._ht_info_icon.userData.materialOver.opacity = v;
			if (me._ht_info_icon.userData.materialActive) me._ht_info_icon.userData.materialActive.opacity = v;
			me._ht_info_icon.visible = (v>0 && me._ht_info_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAFPklEQVR4nO2cPW8VRxSG3zUK4ATbBZQEpbDBSAEJKQVOLGQkyH+goDNdoAhJmpRJLCU/ARpDipj4H6SIkQtEgbAEDR+ykIASgkRIHPDHk2JGaO/ZWd+vmd0F3bebuTvnvOfc+dqZc1YaYIABEiKrmwDwkaR9kkYkjfrql5L+lvQsy7J/6uImVewgYFTSCUkzko5KmpT0cZtmTyTdk3RH0nVJy1mWvUzHsmIAY8A5YBnYoH9seFnngLG67esZwCQwD6xFcEoZ1ryOybrt7RjeMdeArYSOsdjyOqM7KtocBHwo6XtJ30r6oM3jryWtSLov6aGkp3KT8iv/+x65SXu/pAlJhyQdk7Srjdx1Sb9I+inLsrXurUgEYApYbfMvPwLmgBlgdw86dvu2c17Wdl'+
	'gFplLY2i3pIeAbYL2E6CbwGzANxOytmZe54HWEsA5cjKm3W5K7gcVt/sV5YLwCHuNeVxkW6aHH9ktqDFgqIXSbGro3bpjfLuG0hNuDVUJkDLhVQuQSsLMSImFuO4HLJdxuJXcSbliFes4GcJ66xnsrx8xzCW1K/yTVcPOKQ3POX8CpJEr7AHAKeBHgu5jkj8StCCHnNHYXCxwucdLF2IqmKC7lG03sORbA6cBwWyfWQgIME94Eno+ioAIAFwL8V4HhGMJ/DAi/lGQcJwJu/gytbj/0K3gSeGOE3qbGpbxX4LYAK8aWN/Qzh+LekC2SbAL9v3wEOJqqd+LmUouFXoUdpnhkMR+X8ltdGXA1p+daQifZ15KtnnpRQNAmid6tfM+x+CyRrnGKL7jz3QoZo3gS2FtX7ExfZQ7y+uzU8S/dHN/iznstphMSrmyIeX3TAftm'+
	'uxGwbBo/SknY60w+Sed0DVE8dFvutPEoxZ3nXErCdQB3MpnHBjBinxsKtD0haYep+yMJy3phbdohZ3sLQg6aMeXXkm7G4dQo3JSzLY+T9qGQg46a8kqWZf/FYtUUeJtWTPUR+1zIQXbTdD8WqQbigSkXNowtDsIFEti78oeRSTUJ1rYD3gdvYXvQvoCQp1EplSC3zB9JvcznELJtb75gHVRY5uRuPJPCO+SKXATHHUlXKnJSyLYWH1gHhU79XwXqYuNTSWdz5bO+LjVCtrX4IDRJ14G9HdZVDuugUGDSniqI1ISQbS0+sA5qOybfM7Sdc62DngUa7I9Gp3kI2fY8X2hxkA+YfGIaTEQm1SRY2x7boNHQJH3PlA9FpdQsHDRla3vQQXdM+RhVh49UAG/TMVN91z4XctB1U94l6XgcWo3CcRVD+pbsQyEHLUvaNHVfRi'+
	'LVJFibNuVsb0HBQT5I+4apPlPh+1FyAEOSzpjqG1mWFbY5ZTvpX035E0lf9E+tMfhczqY8roYeLHPQ75LsIdlX/XFqFGzgxZqkxa4kUP/FYeF0L5KuCfq9OPSCJqnv6vlqqjkv8Mf3dvXshdURvJDswIyYwQte4CD8pQPBgwCqNsIHIXgdKHjXgzjtqhUviDOnKBQG/KLvMZwQVBUG7JW9a4Hkp0uckyaQ3CvdLhXhQjLF3XHMPJeyVIR2SXl9ExhlkMzSlsh26VAr1JcOZfc5+Z5TjXNyhAYJdR2Qy3Cr23YpmQu4mMBol5S4ELpp3KvQdimZX9OAefG9TuqNmWg7LJcW/p06Twt/oM7Swg+q87TwnyXNNSotPA/cC+4C1X9YYIEGb1oLYPBpis6A2xLMEv/jJrNU8HGTqj+PMyIXantSLmByUtKBNs0ey9143pW7'+
	't1oO3T6kQu1LIC4mcK/CH1h6XvcHlgYYYICk+B8Cm6vx2kSXNAAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_info_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_info_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_info_icon.userData.width / 100.0, me._ht_info_icon.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_info_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_info_icon";
		me._ht_info_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_info_icon.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_icon.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_info_icon.userData.transitions.length; i++) {
						if (me._ht_info_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_info_icon.userData.transitions[i].interval);
							me._ht_info_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_info_icon.material ? me._ht_info_icon.material.opacity : me._ht_info_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_info_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_info_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_info_icon.userData.transitions.splice(me._ht_info_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_info_icon.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_info_icon.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_info_icon.userData.transitions.length; i++) {
						if (me._ht_info_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_info_icon.userData.transitions[i].interval);
							me._ht_info_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_info_icon.material ? me._ht_info_icon.material.opacity : me._ht_info_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_info_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_info_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_info_icon.userData.transitions.splice(me._ht_info_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_info_icon.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_info_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_info_icon']=true;
		}
		me._ht_info_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_info_icon']=false;
		}
		me._ht_info_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.add(me._ht_info_icon);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_info_title_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.4);
		el.scale.set(0.50, 0.50, 1.0);
		el.userData.width = 132;
		el.userData.height = 44;
		el.userData.scale = {x: 0.50, y: 0.50, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_info_title';
		el.userData.x = 0;
		el.userData.y = -0.4;
		el.translateZ(0.120);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_info_title.visible
			let parentEl = me._ht_info_title.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_info_title.userData.opacity = v;
			v = v * me._ht_info_title.userData.parentOpacity;
			if (me._ht_info_title.userData.setOpacityInternal) me._ht_info_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_title.children.length; i++) {
				let child = me._ht_info_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_info_title.userData.parentOpacity = v;
			v = v * me._ht_info_title.userData.opacity
			if (me._ht_info_title.userData.setOpacityInternal) me._ht_info_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_title.children.length; i++) {
				let child = me._ht_info_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_info_title = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_info_title;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_info_title);
			if (skin.rectHasRoundedCorners(me._ht_info_title)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_info_title.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_info_title.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_info_title.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_info_title.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_info_title_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_info_title_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_info_title.userData.backgroundColorAlpha = 1;
		me._ht_info_title.userData.borderColorAlpha = 1;
		me._ht_info_title.userData.setOpacityInternal = function(v) {
			me._ht_info_title.material.opacity = v;
			if (me._ht_info_title.userData.hasScrollbar) {
				me._ht_info_title.userData.scrollbar.material.opacity = v;
				me._ht_info_title.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_info_title.userData.ggSubElement) {
				me._ht_info_title.userData.ggSubElement.material.opacity = v
				me._ht_info_title.userData.ggSubElement.visible = (v>0 && me._ht_info_title.userData.visible);
			}
			me._ht_info_title.visible = (v>0 && me._ht_info_title.userData.visible);
		}
		me._ht_info_title.userData.setBackgroundColor = function(v) {
			me._ht_info_title.material.color = v;
		}
		me._ht_info_title.userData.setBackgroundColorAlpha = function(v) {
			me._ht_info_title.userData.backgroundColorAlpha = v;
			me._ht_info_title.userData.setOpacity(me._ht_info_title.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = player.getTHREESkinColor('#ffffff');
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat_regular', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 264;
		canvas.height = 88;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_info_title;
			var canv = me._ht_info_title.userData.textCanvas;
			var ctx = me._ht_info_title.userData.textCanvasContext;
			var tmpCanv = me._ht_info_title.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_info_title.userData.scrollPosPercent ? tmpCanv.height * me._ht_info_title.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_info_title.userData.boxWidthCanv / 100.0;
		height = me._ht_info_title.userData.boxHeightCanv / 100.0;
		me._ht_info_title.userData.width = me._ht_info_title.userData.boxWidthCanv;
		me._ht_info_title.userData.height = me._ht_info_title.userData.boxHeightCanv;
		me._ht_info_title.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_info_title, 0, 40);
		me._ht_info_title.position.x = newPos.x;
		me._ht_info_title.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_info_title_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_info_title.material.map) {
				me._ht_info_title.material.map.dispose();
			}
			me._ht_info_title.material.map = textTexture;
			me._ht_info_title.material.needsUpdate = true;
			player.repaint();
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_info_title, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_info_title, 'box-sizing: border-box; width: auto; height: auto; font-size: 28px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_info_title.userData.textColor + ' !important;', false, true, false);
			me._ht_info_title.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_info_title.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_info_title.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_info_title.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_info_title.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_info_title";
		me._ht_info_title.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_info_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_title.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_info_title.userData.transitions.length; i++) {
						if (me._ht_info_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_info_title.userData.transitions[i].interval);
							me._ht_info_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_info_title.material ? me._ht_info_title.material.opacity : me._ht_info_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_info_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_info_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_info_title.userData.transitions.splice(me._ht_info_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_info_title.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_info_title.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_info_title.userData.transitions.length; i++) {
						if (me._ht_info_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_info_title.userData.transitions[i].interval);
							me._ht_info_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_info_title.material ? me._ht_info_title.material.opacity : me._ht_info_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_info_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_info_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_info_title.userData.transitions.splice(me._ht_info_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_info_title.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_info_title.userData.ggUpdatePosition=function (useTransition) {
				me._ht_info_title.userData.ggUpdateText(true);
		}
		me._ht_info_bg.add(me._ht_info_title);
		me._ht_info.add(me._ht_info_bg);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_info_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_info_custom_image.visible
			let parentEl = me._ht_info_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_info_custom_image.userData.opacity = v;
			v = v * me._ht_info_custom_image.userData.parentOpacity;
			if (me._ht_info_custom_image.userData.setOpacityInternal) me._ht_info_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_custom_image.children.length; i++) {
				let child = me._ht_info_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_info_custom_image.userData.parentOpacity = v;
			v = v * me._ht_info_custom_image.userData.opacity
			if (me._ht_info_custom_image.userData.setOpacityInternal) me._ht_info_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_info_custom_image.children.length; i++) {
				let child = me._ht_info_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_info_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_info_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_info_custom_image);
		}
		me._ht_info_custom_image.userData.backgroundColorAlpha = 1;
		me._ht_info_custom_image.userData.borderColorAlpha = 1;
		me._ht_info_custom_image.userData.setOpacityInternal = function(v) {
			if (me._ht_info_custom_image.userData.ggSubElement) {
				me._ht_info_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_info_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_info_custom_image.userData.visible);
			}
			me._ht_info_custom_image.visible = (v>0 && me._ht_info_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 100;
		currentHeight = 100;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_info_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_info_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_info_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_info_custom_image_subElementMaterial';
				me._ht_info_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_info_custom_image.userData.ggUpdatePosition();
				me._ht_info_custom_image.userData.ggText = extUrl;
				me._ht_info_custom_image.userData.setOpacity(me._ht_info_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_info_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_info_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 100;
		el.userData.clientHeight = 100;
		el.userData.ggId="ht_info_custom_image";
		me._ht_info_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_info_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_info_custom_image.visible=((!me._ht_info_custom_image.material && Number(me._ht_info_custom_image.userData.opacity>0)) || (me._ht_info_custom_image.material && Number(me._ht_info_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_info_custom_image.userData.visible=true;
				}
				else {
			me._ht_info_custom_image.visible=false;
			player.repaint();
			me._ht_info_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_info_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_info_custom_image']=true;
		}
		me._ht_info_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_info_custom_image']=false;
		}
		me._ht_info_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_info_custom_image.userData.clientWidth;
			var parentHeight = me._ht_info_custom_image.userData.clientHeight;
			var img = me._ht_info_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_info_custom_image_imgGeometry';
			}
		}
		me._ht_info.add(me._ht_info_custom_image);
		me._ht_info.userData.setOpacity(1.00);
		me.elementMouseOver['ht_info']=false;
		me._ht_info_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_info_bg']=false;
		me._ht_info_bg.logicBlock_scaling();
		me._ht_info_bg.logicBlock_visible();
		me._ht_info_icon_active.userData.setOpacity(1.00);
		me.elementMouseOver['ht_info_icon_active']=false;
		me._ht_info_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_info_icon']=false;
		me._ht_info_icon.logicBlock_alpha();
		me._ht_info_title.userData.setOpacity(0.00);
			me._ht_info_title.userData.ggUpdateText(true);
		me._ht_info_title.logicBlock_alpha();
		me._ht_info_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_info_custom_image']=false;
		me._ht_info_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info_bg.logicBlock_visible();
					me._ht_info_title.userData.ggUpdateText();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.__obj = me._ht_info;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 276px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
				skin._info_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_title.ggUpdateText();
			skin._info_popup_title.ggTextDiv.scrollTop = 0;
				skin._info_popup_text.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_text.ggUpdateText();
			skin._info_popup_text.ggTextDiv.scrollTop = 0;
				skin._info_popup_title_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_title_phone.ggUpdateText();
			skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
				skin._info_popup_text_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_popup_text_phone.ggUpdateText();
			skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #26170f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_info_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_info_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_info_bg.ggParameter.sx = 1.2;
					me._ht_info_bg.ggParameter.sy = 1.2;
					me._ht_info_bg.style.transform=parameterToTransform(me._ht_info_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_info_bg);}, 350);
				}
				else {
					me._ht_info_bg.ggParameter.sx = 1;
					me._ht_info_bg.ggParameter.sy = 1;
					me._ht_info_bg.style.transform=parameterToTransform(me._ht_info_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_info_bg);}, 350);
				}
			}
		}
		me._ht_info_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_info_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_info_bg.style.visibility="hidden";
					me._ht_info_bg.ggVisible=false;
				}
				else {
					me._ht_info_bg.style.visibility=(Number(me._ht_info_bg.style.opacity)>0||!me._ht_info_bg.style.opacity)?'inherit':'hidden';
					me._ht_info_bg.ggVisible=true;
				}
			}
		}
		me._ht_info_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_icon.logicBlock_alpha();
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_icon.logicBlock_alpha();
			me._ht_info_title.logicBlock_alpha();
			me._ht_info_bg.logicBlock_scaling();
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon_active=document.createElement('div');
		els=me._ht_info_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWluZm8iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz4KIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTYiIHkyPSIxMiIvPgogPGxpbmUgeDE9IjEyIiB4Mj0iMTIuMDEiIHkxPSI4IiB5Mj'+
			'0iOCIvPgo8L3N2Zz4K';
		me._ht_info_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon_active);
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWluZm8iIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz4KIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTYiIHkyPSIxMiIvPgogPGxpbmUgeDE9IjEyIiB4Mj0iMTIuMDEiIHkxPSI4IiB5Mj'+
			'0iOCIvPgo8L3N2Zz4K';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_info_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info_icon.style.opacity == 0.0) { me._ht_info_icon.style.visibility="hidden"; } }, 205);
					me._ht_info_icon.style.opacity=0;
				}
				else {
					me._ht_info_icon.style.visibility=me._ht_info_icon.ggVisible?'inherit':'hidden';
					me._ht_info_icon.style.opacity=1;
				}
			}
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon);
		el=me._ht_info_title=document.createElement('div');
		els=me._ht_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_info_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_title.style.visibility=me._ht_info_title.ggVisible?'inherit':'hidden';
					me._ht_info_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_title.style.opacity == 0.0) { me._ht_info_title.style.visibility="hidden"; } }, 205);
					me._ht_info_title.style.opacity=0;
				}
			}
		}
		me._ht_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_title);
		me._ht_info.appendChild(me._ht_info_bg);
		el=me._ht_info_custom_image=document.createElement('div');
		els=me._ht_info_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_info_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_info_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_info_custom_image.ggAltText));
			me._ht_info_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_info_custom_image.ggText_untranslated = img;
			me._ht_info_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_info_custom_image.ggSubElement.style.width = '0px';
			me._ht_info_custom_image.ggSubElement.style.height = '0px';
			me._ht_info_custom_image.ggSubElement.src='';
			me._ht_info_custom_image.ggSubElement.src=me._ht_info_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_info_custom_image.ggText != player._(me._ht_info_custom_image.ggText_untranslated)) {
				me._ht_info_custom_image.ggText = player._(me._ht_info_custom_image.ggText_untranslated);
				me._ht_info_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
			el.ggUpdateText = function() {
			me._ht_info_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_info_custom_image.ggAltText));
				if (hotspot.changeLanguage__) hotspot.changeLanguage__();
			if (hotspot.customimage && me._ht_info_custom_image.ggText != hotspot.customimage) {
				me._ht_info_custom_image.ggText=me._ht_info_custom_image.ggText_untranslated=hotspot.customimage;
				me._ht_info_custom_image.ggSubElement.setAttribute('src', hotspot.customimage);
				me._ht_info_custom_image.ggSubElement.style.width=hotspot.customimagewidth + 'px';
				me._ht_info_custom_image.ggSubElement.style.height=hotspot.customimageheight + 'px';
				me._ht_info_custom_image.ggUpdatePosition();
			}
		}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_info_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_info_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_custom_image.style.transition='';
				if (me._ht_info_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_custom_image.style.visibility=(Number(me._ht_info_custom_image.style.opacity)>0||!me._ht_info_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_info_custom_image.ggSubElement.src=me._ht_info_custom_image.ggText;
					me._ht_info_custom_image.ggVisible=true;
				}
				else {
					me._ht_info_custom_image.style.visibility="hidden";
					me._ht_info_custom_image.ggSubElement.src='';
					me._ht_info_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_info_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_info_custom_image.clientWidth;
			var parentHeight = me._ht_info_custom_image.clientHeight;
			var img = me._ht_info_custom_image__img;
			var aspectRatioDiv = me._ht_info_custom_image.clientWidth / me._ht_info_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_info_custom_image.ggScrollbars || currentWidth < me._ht_info_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_info_custom_image.scrollLeft=currentWidth / 2 - me._ht_info_custom_image.clientWidth / 2;
			}
			if (!me._ht_info_custom_image.ggScrollbars || currentHeight < me._ht_info_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_info_custom_image.scrollTop=currentHeight / 2 - me._ht_info_custom_image.clientHeight / 2;
			}
		}
		me._ht_info.appendChild(me._ht_info_custom_image);
		me.elementMouseOver['ht_info']=false;
		me.elementMouseOver['ht_info_bg']=false;
		me._ht_info_bg.logicBlock_scaling();
		me._ht_info_bg.logicBlock_visible();
		me._ht_info_icon.logicBlock_alpha();
		me._ht_info_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_info_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_info_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_info_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_info_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_info_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_pdf.visible = (v>0 && me._ht_pdf.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_pdf';
		el.userData.x = -4.1;
		el.userData.y = 1.73;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_pdf.visible
			let parentEl = me._ht_pdf.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_pdf.userData.opacity = v;
			v = v * me._ht_pdf.userData.parentOpacity;
			if (me._ht_pdf.userData.setOpacityInternal) me._ht_pdf.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf.children.length; i++) {
				let child = me._ht_pdf.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_pdf.userData.parentOpacity = v;
			v = v * me._ht_pdf.userData.opacity
			if (me._ht_pdf.userData.setOpacityInternal) me._ht_pdf.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf.children.length; i++) {
				let child = me._ht_pdf.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_pdf = el;
		el.userData.ggId="ht_pdf";
		me._ht_pdf.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.userData.onclick=function (e) {
				skin._pdf_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._pdf_popup_title.ggUpdateText();
			skin._pdf_popup_title.ggTextDiv.scrollTop = 0;
			skin._popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			skin._popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
			skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.userData.hasOwnClickAction = true;
		me._ht_pdf.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_pdf.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: player.getTHREESkinColor('#4fb5c2'), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_pdf_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 52;
		el.userData.height = 52;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_pdf_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_pdf_bg.visible
			let parentEl = me._ht_pdf_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_pdf_bg.userData.opacity = v;
			v = v * me._ht_pdf_bg.userData.parentOpacity;
			if (me._ht_pdf_bg.userData.setOpacityInternal) me._ht_pdf_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_bg.children.length; i++) {
				let child = me._ht_pdf_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_pdf_bg.userData.parentOpacity = v;
			v = v * me._ht_pdf_bg.userData.opacity
			if (me._ht_pdf_bg.userData.setOpacityInternal) me._ht_pdf_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_bg.children.length; i++) {
				let child = me._ht_pdf_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_pdf_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 26;
		el.userData.borderRadius.default.topRight = 26;
		el.userData.borderRadius.default.bottomRight = 26;
		el.userData.borderRadius.default.bottomLeft = 26;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_pdf_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_pdf_bg);
			if (skin.rectHasRoundedCorners(me._ht_pdf_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_pdf_bg.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_pdf_bg.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_pdf_bg.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_pdf_bg.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_pdf_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_pdf_bg_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_pdf_bg.userData.backgroundColorAlpha = 1;
		me._ht_pdf_bg.userData.borderColorAlpha = 1;
		me._ht_pdf_bg.userData.setOpacityInternal = function(v) {
			me._ht_pdf_bg.material.opacity = v * me._ht_pdf_bg.userData.backgroundColorAlpha;
			if (me._ht_pdf_bg.userData.ggSubElement) {
				me._ht_pdf_bg.userData.ggSubElement.material.opacity = v
				me._ht_pdf_bg.userData.ggSubElement.visible = (v>0 && me._ht_pdf_bg.userData.visible);
			}
			me._ht_pdf_bg.visible = (v>0 && me._ht_pdf_bg.userData.visible);
		}
		me._ht_pdf_bg.userData.setBackgroundColor = function(v) {
			me._ht_pdf_bg.material.color = v;
		}
		me._ht_pdf_bg.userData.setBackgroundColorAlpha = function(v) {
			me._ht_pdf_bg.userData.backgroundColorAlpha = v;
			me._ht_pdf_bg.userData.setOpacity(me._ht_pdf_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 26, 26, 26, 26);
		el.userData.ggId="ht_pdf_bg";
		me._ht_pdf_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_pdf_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._ht_pdf_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_pdf_bg.userData.transitionValue_scale = {x: 1.2, y: 1.2, z: 1.0};
					for (var i = 0; i < me._ht_pdf_bg.userData.transitions.length; i++) {
						if (me._ht_pdf_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_pdf_bg.userData.transitions[i].interval);
							me._ht_pdf_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_pdf_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_pdf_bg.scale.set(transition_scale.startScale.x + (me._ht_pdf_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_pdf_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_pdf_bg.position.x = (me._ht_pdf_bg.position.x - me._ht_pdf_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_pdf_bg.userData.curScaleOffX = scaleOffX;
							me._ht_pdf_bg.position.y = (me._ht_pdf_bg.position.y - me._ht_pdf_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_pdf_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_pdf_bg.userData.transitions.splice(me._ht_pdf_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_pdf_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._ht_pdf_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._ht_pdf_bg.userData.transitions.length; i++) {
						if (me._ht_pdf_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._ht_pdf_bg.userData.transitions[i].interval);
							me._ht_pdf_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._ht_pdf_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 300;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_pdf_bg.scale.set(transition_scale.startScale.x + (me._ht_pdf_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._ht_pdf_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._ht_pdf_bg.position.x = (me._ht_pdf_bg.position.x - me._ht_pdf_bg.userData.curScaleOffX) + scaleOffX;
							me._ht_pdf_bg.userData.curScaleOffX = scaleOffX;
							me._ht_pdf_bg.position.y = (me._ht_pdf_bg.position.y - me._ht_pdf_bg.userData.curScaleOffY) + scaleOffY;
							me._ht_pdf_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._ht_pdf_bg.userData.transitions.splice(me._ht_pdf_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._ht_pdf_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_pdf_bg.visible=false;
			player.repaint();
			me._ht_pdf_bg.userData.visible=false;
				}
				else {
			me._ht_pdf_bg.visible=((!me._ht_pdf_bg.material && Number(me._ht_pdf_bg.userData.opacity>0)) || (me._ht_pdf_bg.material && Number(me._ht_pdf_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_pdf_bg.userData.visible=true;
				}
			}
		}
		me._ht_pdf_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_icon.logicBlock_alpha();
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.userData.ontouchend=function (e) {
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_icon.logicBlock_alpha();
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_pdf_icon_active';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_pdf_icon_active.visible
			let parentEl = me._ht_pdf_icon_active.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_pdf_icon_active.userData.opacity = v;
			v = v * me._ht_pdf_icon_active.userData.parentOpacity;
			if (me._ht_pdf_icon_active.userData.setOpacityInternal) me._ht_pdf_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_icon_active.children.length; i++) {
				let child = me._ht_pdf_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_pdf_icon_active.userData.parentOpacity = v;
			v = v * me._ht_pdf_icon_active.userData.opacity
			if (me._ht_pdf_icon_active.userData.setOpacityInternal) me._ht_pdf_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_icon_active.children.length; i++) {
				let child = me._ht_pdf_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_pdf_icon_active = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_pdf_icon_active.userData.materialNormal) me._ht_pdf_icon_active.userData.materialNormal.opacity = v;
			if (me._ht_pdf_icon_active.userData.materialOver) me._ht_pdf_icon_active.userData.materialOver.opacity = v;
			if (me._ht_pdf_icon_active.userData.materialActive) me._ht_pdf_icon_active.userData.materialActive.opacity = v;
			me._ht_pdf_icon_active.visible = (v>0 && me._ht_pdf_icon_active.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADLUlEQVR4nO2cv2sUQRTHPy9KNEJM1IT4AwWDjYIxplLsTK11Wls7/Q+018ZCsLHV0sJSRBFsRCVibCRilRw5k2gkaAh8LW4CG0icvbt9e7fHfJq7y93Me/u5ndl7O9mFRCKR6BzWbgeS9gGngf3tp7MrR4B5M/vmGKNYJJ2Q9FTSH5XHpU5vdy4kzUhaKVHMFquSJsrc1qaHmKTrwLPw8h1wD/gILBaYV5bzwOvM6zowbWazTvFaR9KopFr4Nh9I2ltCzMnMHlQPj0tl70m5kPQwJPhJUn9JMbOCrgQ53SlJ0mJI7laJMbOChiVNdKUkSYOZRK+WGHeboPC30iT1NfHZPZnny0Un0gxhgp6mMWGPAC+8JDUjqKsoS1JlBUE5kiotCPwlVV4Q+ErqCU'+
	'HgJ6lnBIGPpJ4SBMVL6jlBUKyknhQExUlyr8YLZlLSapNtbgKPaEh6Jemamb3J27hqgl622X6YhqQhM/udp0EVhth3oFZgf300cf7cdQ+SdBA4vMvbP8xsLdaHma1IOgUcaDOd7JnJzbyN3ARJGgG+AkO7fOSnpDNmVo/1ZWYbwEab+US/jJ2owhDrKG57kJnVJZ2ksaa1E8tm9ssrflG4zkFhjmlp1+4W0hCLkARFSIIiJEERkqAISVCEJCiCdy3WT/s1VIz1UIq44FmLHQK+AGNeMQI1SWfNbMWjc88h1g8MOva/xWCI5YJnLVaTNA4c84oRWDCzIs8XbcO7FqtR7Mmu0klHsQhJUIQkKEISFCEJipAERUiCInjXYmOkH4o7E+TMU0KxKmncS5LnENugnBWNNdpcVPwfnrVYUUvGMap5ugOKWTLuNOkoFiEJipAE'+
	'RUiCIiRBEVoV1Pbl5B2gpZybEZQ9XHuXDx4czzzP/dMjtyAzW6dROgBM5W3XRWzlPB+2pXgk3Q2XQS6Eda9KIOlQyFmS7ngGGpA0FwI9D/+o2dVIGgm5StJnSQPNtG/lxgJTwFsai3VLwGPgA343FmiVo8BF4AYwSmPeuWxm790jS7ogaVbVYVYtXszS8uFajbu+3AZmgHN032UNm8Ac8AS4b2Z/O5xPIpFIJIrmH7heYjCL489OAAAAAElFTkSuQmCC');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_pdf_icon_active_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_pdf_icon_active;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_pdf_icon_active.userData.width / 100.0, me._ht_pdf_icon_active.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_pdf_icon_active_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_pdf_icon_active";
		me._ht_pdf_icon_active.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_icon_active.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_pdf_icon_active']=true;
		}
		me._ht_pdf_icon_active.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_pdf_icon_active']=false;
		}
		me._ht_pdf_icon_active.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.add(me._ht_pdf_icon_active);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_pdf_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_pdf_icon.visible
			let parentEl = me._ht_pdf_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_pdf_icon.userData.opacity = v;
			v = v * me._ht_pdf_icon.userData.parentOpacity;
			if (me._ht_pdf_icon.userData.setOpacityInternal) me._ht_pdf_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_icon.children.length; i++) {
				let child = me._ht_pdf_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_pdf_icon.userData.parentOpacity = v;
			v = v * me._ht_pdf_icon.userData.opacity
			if (me._ht_pdf_icon.userData.setOpacityInternal) me._ht_pdf_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_icon.children.length; i++) {
				let child = me._ht_pdf_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = false;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_pdf_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_pdf_icon.userData.materialNormal) me._ht_pdf_icon.userData.materialNormal.opacity = v;
			if (me._ht_pdf_icon.userData.materialOver) me._ht_pdf_icon.userData.materialOver.opacity = v;
			if (me._ht_pdf_icon.userData.materialActive) me._ht_pdf_icon.userData.materialActive.opacity = v;
			me._ht_pdf_icon.visible = (v>0 && me._ht_pdf_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAC5ElEQVR4nO3cO4xMURjA8R+RXcTbynqEhGgUWCqio6bWanVKJb1KIdGolQqlgkg04rGCRoiKjfXcZCO7ZBVn2MFOzjzOOTszOf/kZGczmft99z/33Hu/c+4ZKpVKZflYkWAbo9iL1Qm21YqteI03GWMkZxdu4jsWCrVjRfYsAWfxWTkxv9sXHCqwf3/opoudwa3G64e4gid4nyqpfziIe03/T+MUJjPF64ltmBK+zatYVSDmhMUjaLrx94PCR1K7XBMSfIaRQjGbBZ0Q5PStpPdCchcKxmwWtEmQ0peS1ltM9GTBuP8Kok8lbbKY6ETBuEsJopCklTk2WohJ4Wo2jTHckUHSIAuigKRBF0RmScMgiIyShkUQmSQNkyAySBo2QSSWNIyCSChpWAWRSF'+
	'KJajwlE8KYUCecx3VB0l2cxv3EeaE/So0U7SfWtRt8ELrYW2EMKhUrdTB+nruLbcCWFu99xEwb2/iMPVjbYy7NI5M/2v1QTkFjeIWNLd7/iv3CSTTGXKP1Qjtfxn8MQhdbVnIeQdPYLcxpLcUnfMsYPwm5z0Ezujy0+4XaxSJUQRGqoAhVUIQqKEIVFKEKipD7PmhE7zVUjFm9lyEtySloM15iPGMMQqV/QChqk5Ozi40I8/m5WS/jkyY5j6Ap7MOOjDHgnbTjRX+R+xw0JWPyJahXsQhVUIQqKEIVFKEKilAFRaiCIuS+DxpXbxRbMi6s0ClRrO6TSVLOLjanzIzGjAGt5lNNGccY2OEO0kwZLyv1KhahCopQBUWogiJUQRG6FZRiOXlpusq5E0HNl+vc5UMOdja9bvvWoxNBs0LpAEc7+Fy/8Dvn18K+ZOGy8Cjt'+
	'O2Hea1DYLOS8gEs5A63Bi0ag28KDmv3OmJDrAp4L+9A23Zy4juKBMFn3ATfwWL4fFuiW7TiCc8J6/zkcx6MSwQ8LayFK/zRFt23SMqyMHsVFPMV8l4nnbPON3C42cq1UKpXKsPELvzQ1DakKd/QAAAAASUVORK5CYII=');
		texture.colorSpace = player.getTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_pdf_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_pdf_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(me._ht_pdf_icon.userData.width / 100.0, me._ht_pdf_icon.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_pdf_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_pdf_icon";
		me._ht_pdf_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_pdf_icon.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_icon.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_pdf_icon.userData.transitions.length; i++) {
						if (me._ht_pdf_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_pdf_icon.userData.transitions[i].interval);
							me._ht_pdf_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_pdf_icon.material ? me._ht_pdf_icon.material.opacity : me._ht_pdf_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_pdf_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_pdf_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_pdf_icon.userData.transitions.splice(me._ht_pdf_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_pdf_icon.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_pdf_icon.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_pdf_icon.userData.transitions.length; i++) {
						if (me._ht_pdf_icon.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_pdf_icon.userData.transitions[i].interval);
							me._ht_pdf_icon.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_pdf_icon.material ? me._ht_pdf_icon.material.opacity : me._ht_pdf_icon.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_pdf_icon.userData.setOpacity(transition_alpha.startAlpha + (me._ht_pdf_icon.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_pdf_icon.userData.transitions.splice(me._ht_pdf_icon.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_pdf_icon.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_pdf_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_pdf_icon']=true;
		}
		me._ht_pdf_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_pdf_icon']=false;
		}
		me._ht_pdf_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.add(me._ht_pdf_icon);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_pdf_title_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.4);
		el.scale.set(0.50, 0.50, 1.0);
		el.userData.width = 132;
		el.userData.height = 44;
		el.userData.scale = {x: 0.50, y: 0.50, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_pdf_title';
		el.userData.x = 0;
		el.userData.y = -0.4;
		el.translateZ(0.120);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_pdf_title.visible
			let parentEl = me._ht_pdf_title.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_pdf_title.userData.opacity = v;
			v = v * me._ht_pdf_title.userData.parentOpacity;
			if (me._ht_pdf_title.userData.setOpacityInternal) me._ht_pdf_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_title.children.length; i++) {
				let child = me._ht_pdf_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_pdf_title.userData.parentOpacity = v;
			v = v * me._ht_pdf_title.userData.opacity
			if (me._ht_pdf_title.userData.setOpacityInternal) me._ht_pdf_title.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_title.children.length; i++) {
				let child = me._ht_pdf_title.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.permeable = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_pdf_title = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_pdf_title;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_pdf_title);
			if (skin.rectHasRoundedCorners(me._ht_pdf_title)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = me._ht_pdf_title.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = me._ht_pdf_title.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = me._ht_pdf_title.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = me._ht_pdf_title.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_pdf_title_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_pdf_title_geometry';
			}
			el.geometry = geometry;
		}
		me._ht_pdf_title.userData.backgroundColorAlpha = 1;
		me._ht_pdf_title.userData.borderColorAlpha = 1;
		me._ht_pdf_title.userData.setOpacityInternal = function(v) {
			me._ht_pdf_title.material.opacity = v;
			if (me._ht_pdf_title.userData.hasScrollbar) {
				me._ht_pdf_title.userData.scrollbar.material.opacity = v;
				me._ht_pdf_title.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_pdf_title.userData.ggSubElement) {
				me._ht_pdf_title.userData.ggSubElement.material.opacity = v
				me._ht_pdf_title.userData.ggSubElement.visible = (v>0 && me._ht_pdf_title.userData.visible);
			}
			me._ht_pdf_title.visible = (v>0 && me._ht_pdf_title.userData.visible);
		}
		me._ht_pdf_title.userData.setBackgroundColor = function(v) {
			me._ht_pdf_title.material.color = v;
		}
		me._ht_pdf_title.userData.setBackgroundColorAlpha = function(v) {
			me._ht_pdf_title.userData.backgroundColorAlpha = v;
			me._ht_pdf_title.userData.setOpacity(me._ht_pdf_title.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = player.getTHREESkinColor('#ffffff');
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat_regular', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 264;
		canvas.height = 88;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_pdf_title;
			var canv = me._ht_pdf_title.userData.textCanvas;
			var ctx = me._ht_pdf_title.userData.textCanvasContext;
			var tmpCanv = me._ht_pdf_title.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_pdf_title.userData.scrollPosPercent ? tmpCanv.height * me._ht_pdf_title.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_pdf_title.userData.boxWidthCanv / 100.0;
		height = me._ht_pdf_title.userData.boxHeightCanv / 100.0;
		me._ht_pdf_title.userData.width = me._ht_pdf_title.userData.boxWidthCanv;
		me._ht_pdf_title.userData.height = me._ht_pdf_title.userData.boxHeightCanv;
		me._ht_pdf_title.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_pdf_title, 0, 40);
		me._ht_pdf_title.position.x = newPos.x;
		me._ht_pdf_title.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_pdf_title_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_pdf_title.material.map) {
				me._ht_pdf_title.material.map.dispose();
			}
			me._ht_pdf_title.material.map = textTexture;
			me._ht_pdf_title.material.needsUpdate = true;
			player.repaint();
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_pdf_title, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_pdf_title, 'box-sizing: border-box; width: auto; height: auto; font-size: 28px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_pdf_title.userData.textColor + ' !important;', false, true, false);
			me._ht_pdf_title.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_pdf_title.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_pdf_title.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_pdf_title.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_pdf_title.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_pdf_title";
		me._ht_pdf_title.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_pdf_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_title.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_pdf_title.userData.transitions.length; i++) {
						if (me._ht_pdf_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_pdf_title.userData.transitions[i].interval);
							me._ht_pdf_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_pdf_title.material ? me._ht_pdf_title.material.opacity : me._ht_pdf_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_pdf_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_pdf_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_pdf_title.userData.transitions.splice(me._ht_pdf_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_pdf_title.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_pdf_title.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_pdf_title.userData.transitions.length; i++) {
						if (me._ht_pdf_title.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_pdf_title.userData.transitions[i].interval);
							me._ht_pdf_title.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_pdf_title.material ? me._ht_pdf_title.material.opacity : me._ht_pdf_title.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_pdf_title.userData.setOpacity(transition_alpha.startAlpha + (me._ht_pdf_title.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_pdf_title.userData.transitions.splice(me._ht_pdf_title.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_pdf_title.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_pdf_title.userData.ggUpdatePosition=function (useTransition) {
				me._ht_pdf_title.userData.ggUpdateText(true);
		}
		me._ht_pdf_bg.add(me._ht_pdf_title);
		me._ht_pdf.add(me._ht_pdf_bg);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_pdf_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.zIndex = -10000;
		el.userData.zIndexCurrent = -10000;
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._ht_pdf_custom_image.visible
			let parentEl = me._ht_pdf_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_pdf_custom_image.userData.opacity = v;
			v = v * me._ht_pdf_custom_image.userData.parentOpacity;
			if (me._ht_pdf_custom_image.userData.setOpacityInternal) me._ht_pdf_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_custom_image.children.length; i++) {
				let child = me._ht_pdf_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_pdf_custom_image.userData.parentOpacity = v;
			v = v * me._ht_pdf_custom_image.userData.opacity
			if (me._ht_pdf_custom_image.userData.setOpacityInternal) me._ht_pdf_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_pdf_custom_image.children.length; i++) {
				let child = me._ht_pdf_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.permeable = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_pdf_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_pdf_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_pdf_custom_image);
		}
		me._ht_pdf_custom_image.userData.backgroundColorAlpha = 1;
		me._ht_pdf_custom_image.userData.borderColorAlpha = 1;
		me._ht_pdf_custom_image.userData.setOpacityInternal = function(v) {
			if (me._ht_pdf_custom_image.userData.ggSubElement) {
				me._ht_pdf_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_pdf_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_pdf_custom_image.userData.visible);
			}
			me._ht_pdf_custom_image.visible = (v>0 && me._ht_pdf_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 100;
		currentHeight = 100;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_pdf_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_pdf_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_pdf_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_pdf_custom_image_subElementMaterial';
				me._ht_pdf_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_pdf_custom_image.userData.ggUpdatePosition();
				me._ht_pdf_custom_image.userData.ggText = extUrl;
				me._ht_pdf_custom_image.userData.setOpacity(me._ht_pdf_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_pdf_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_pdf_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 100;
		el.userData.clientHeight = 100;
		el.userData.ggId="ht_pdf_custom_image";
		me._ht_pdf_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_pdf_custom_image.visible=((!me._ht_pdf_custom_image.material && Number(me._ht_pdf_custom_image.userData.opacity>0)) || (me._ht_pdf_custom_image.material && Number(me._ht_pdf_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_pdf_custom_image.userData.visible=true;
				}
				else {
			me._ht_pdf_custom_image.visible=false;
			player.repaint();
			me._ht_pdf_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_pdf_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_pdf_custom_image']=true;
		}
		me._ht_pdf_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_pdf_custom_image']=false;
		}
		me._ht_pdf_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.userData.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.userData.clientHeight;
			var img = me._ht_pdf_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_pdf_custom_image_imgGeometry';
			}
		}
		me._ht_pdf.add(me._ht_pdf_custom_image);
		me._ht_pdf.userData.setOpacity(1.00);
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_pdf_bg']=false;
		me._ht_pdf_bg.logicBlock_scaling();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_icon_active.userData.setOpacity(1.00);
		me.elementMouseOver['ht_pdf_icon_active']=false;
		me._ht_pdf_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_pdf_icon']=false;
		me._ht_pdf_icon.logicBlock_alpha();
		me._ht_pdf_title.userData.setOpacity(0.00);
			me._ht_pdf_title.userData.ggUpdateText(true);
		me._ht_pdf_title.logicBlock_alpha();
		me._ht_pdf_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_pdf_custom_image']=false;
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf_bg.logicBlock_visible();
					me._ht_pdf_title.userData.ggUpdateText();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.__obj = me._ht_pdf;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 346px;';
		hs+='position : absolute;';
		hs+='top : 187px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.onclick=function (e) {
				skin._pdf_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._pdf_popup_title.ggUpdateText();
			skin._pdf_popup_title.ggTextDiv.scrollTop = 0;
			skin._popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			skin._popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
			skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_info', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_pdf_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_pdf_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_pdf_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_pdf_bg.ggParameter.sx = 1.2;
					me._ht_pdf_bg.ggParameter.sy = 1.2;
					me._ht_pdf_bg.style.transform=parameterToTransform(me._ht_pdf_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_pdf_bg);}, 350);
				}
				else {
					me._ht_pdf_bg.ggParameter.sx = 1;
					me._ht_pdf_bg.ggParameter.sy = 1;
					me._ht_pdf_bg.style.transform=parameterToTransform(me._ht_pdf_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_pdf_bg);}, 350);
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_icon.logicBlock_alpha();
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_icon.logicBlock_alpha();
			me._ht_pdf_title.logicBlock_alpha();
			me._ht_pdf_bg.logicBlock_scaling();
		}
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_icon_active=document.createElement('div');
		els=me._ht_pdf_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjMsMy4zSDEwYy0xLjgsMC0zLjMsMS41LTMuMywzLjN2MjYuN2MwLDEuOCwxLjUsMy4zLDMuMywzLjNoMjBjMS44LDAsMy4zLTEuNSwzLjMtMy4zdi0yMEwyMy4zLDMuM3oiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjIzLjMsMy4zIDIz'+
			'LjMsMTMuMyAzMy4zLDEzLjMgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjYuNyIgeDI9IjEzLjMiIHkxPSIyMS43IiB5Mj0iMjEuNyIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI2LjciIHgyPSIxMy4zIiB5MT0iMjguMyIgeTI9IjI4LjMiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjcsMTUgMTUsMTUgMTMuMywxNSAiLz4KPC9zdmc+Cg==';
		me._ht_pdf_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon_active);
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjMsMy4zSDEwYy0xLjgsMC0zLjMsMS41LTMuMywzLjN2MjYuN2MwLDEuOCwxLjUsMy4zLDMuMywzLjNoMjBjMS44LDAsMy4zLTEuNSwzLjMtMy4zdi0yMEwyMy4zLDMuM3oiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjIzLjMsMy4zIDIz'+
			'LjMsMTMuMyAzMy4zLDEzLjMgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjYuNyIgeDI9IjEzLjMiIHkxPSIyMS43IiB5Mj0iMjEuNyIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI2LjciIHgyPSIxMy4zIiB5MT0iMjguMyIgeTI9IjI4LjMiLz4KIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjcsMTUgMTUsMTUgMTMuMywxNSAiLz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_icon.style.transition='opacity 200ms ease 0ms';
				if (me._ht_pdf_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_pdf_icon.style.opacity == 0.0) { me._ht_pdf_icon.style.visibility="hidden"; } }, 205);
					me._ht_pdf_icon.style.opacity=0;
				}
				else {
					me._ht_pdf_icon.style.visibility=me._ht_pdf_icon.ggVisible?'inherit':'hidden';
					me._ht_pdf_icon.style.opacity=1;
				}
			}
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs='';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_title.style.transition='opacity 200ms ease 0ms';
				if (me._ht_pdf_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_title.style.visibility=me._ht_pdf_title.ggVisible?'inherit':'hidden';
					me._ht_pdf_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_pdf_title.style.opacity == 0.0) { me._ht_pdf_title.style.visibility="hidden"; } }, 205);
					me._ht_pdf_title.style.opacity=0;
				}
			}
		}
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_title);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
			el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
				if (hotspot.changeLanguage__) hotspot.changeLanguage__();
			if (hotspot.customimage && me._ht_pdf_custom_image.ggText != hotspot.customimage) {
				me._ht_pdf_custom_image.ggText=me._ht_pdf_custom_image.ggText_untranslated=hotspot.customimage;
				me._ht_pdf_custom_image.ggSubElement.setAttribute('src', hotspot.customimage);
				me._ht_pdf_custom_image.ggSubElement.style.width=hotspot.customimagewidth + 'px';
				me._ht_pdf_custom_image.ggSubElement.style.height=hotspot.customimageheight + 'px';
				me._ht_pdf_custom_image.ggUpdatePosition();
			}
		}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me.elementMouseOver['ht_pdf']=false;
		me.elementMouseOver['ht_pdf_bg']=false;
		me._ht_pdf_bg.logicBlock_scaling();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_icon.logicBlock_alpha();
		me._ht_pdf_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_pdf') {
			hotspot.skinid = 'ht_pdf';
			hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf')) {
				hotspotTemplates['SkinHotspotClass_ht_pdf'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_pdf'].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info')) {
				hotspotTemplates['SkinHotspotClass_ht_info'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_info'].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image')) {
				hotspotTemplates['SkinHotspotClass_ht_image'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_image'].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				hotspotTemplates['SkinHotspotClass_ht_url'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_url'].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				hotspotTemplates['SkinHotspotClass_ht_node'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node'].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	me.addSkinHotspot3d=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_pdf') {
			hotspot.skinid = 'ht_pdf';
			hsinst = new SkinHotspotClass_ht_pdf__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_pdf__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_pdf__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_pdf__3d'].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_info__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_info__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_info__3d'].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_image__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_image__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_image__3d'].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_url__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_url__3d'].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_node__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node__3d'].push(hsinst);
		}
		return (hsinst ? hsinst.__obj : null);
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; box-sizing: content-box; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		if (me.fontsLoaded < 3) {
			me.updateSize(me.divSkin);
			me.fontsLoaded++;
		}
	}
};