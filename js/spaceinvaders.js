Number.prototype.pad = function(size){
      if(typeof(size) !== "number"){size = 2;}
      var s = String(this);
      while (s.length < size) s = "0" + s;
      return s;
}

var SpaceInvaders = SpaceInvaders || {
    implement:function(name,implementation){
        parent = window;
        parent["SpaceInvaders"][name] = implementation ;
     }
};

// Constants

SpaceInvaders.level = 1 ;
SpaceInvaders.score = 0 ;

SpaceInvaders.ENEMY_OFFSET = 5 ;

SpaceInvaders.TITLE_WIDTH = 500;
SpaceInvaders.TITLE_HEIGHT = 100;

SpaceInvaders.MESSAGE1_WIDTH = 700;
SpaceInvaders.MESSAGE1_HEIGHT = 54;

SpaceInvaders.MESSAGE2_WIDTH = 700;
SpaceInvaders.MESSAGE2_HEIGHT = 54;

SpaceInvaders.ENEMY_WIDTH = 32 ;
SpaceInvaders.ENEMY_HEIGHT = 32 ;

SpaceInvaders.INITIAL_X_OFFSET = 32;
SpaceInvaders.INITIAL_Y_OFFSET = 32;

SpaceInvaders.GAME_OFFSET_X = SpaceInvaders.ENEMY_OFFSET + ( SpaceInvaders.ENEMY_WIDTH / 2 ) ;
SpaceInvaders.GAME_OFFSET_Y = 20 ;


SpaceInvaders.PLAYER_WIDTH = 32 ;
SpaceInvaders.PLAYER_HEIGHT = 54 ;

SpaceInvaders.ROWS = 4 ;
SpaceInvaders.COLS = 8;
SpaceInvaders.ENEMY_COUNT = SpaceInvaders.ROWS * SpaceInvaders.COLS ;

SpaceInvaders.MoveState = "none" ;


SpaceInvaders.Title = new Image();
SpaceInvaders.Title.loaded = false;
SpaceInvaders.Title.onload = function(){
	SpaceInvaders.Title.loaded = true;
	console.log("Title Loaded");
};
SpaceInvaders.Title.src = 'img/Title.png';

SpaceInvaders.Message1 = new Image();
SpaceInvaders.Message1.loaded = false;
SpaceInvaders.Message1.onload = function(){
	console.log("Message1 Loaded");
	SpaceInvaders.Message1.loaded = true;
};
SpaceInvaders.Message1.src = 'img/Message1.png';

SpaceInvaders.Message2 = new Image();
SpaceInvaders.Message2.loaded = false;
SpaceInvaders.Message2.onload = function(){
	console.log("Message2 Loaded");
	SpaceInvaders.Message2.loaded = true;
};
SpaceInvaders.Message2.src = 'img/Message2.png';

// Enemy Graphics
SpaceInvaders.Class1Enemy = "Class1" ;
SpaceInvaders.Class2Enemy = "Class2" ;
SpaceInvaders.Class3Enemy = "Class3" ;
SpaceInvaders.Class4Enemy = "Class4" ;

SpaceInvaders.playerGraphic =  new Image();
SpaceInvaders.playerGraphic.loaded = false ;
SpaceInvaders.playerGraphic.onload = function(){
	SpaceInvaders.playerGraphic.loaded = true ;
 };
 SpaceInvaders.playerGraphic.src = 'img/player.png';

SpaceInvaders.explosion = [];
SpaceInvaders.explosion[0] = new Image();
SpaceInvaders.explosion[0].loaded = false;
SpaceInvaders.explosion[0].onload = function(){
	SpaceInvaders.explosion[0].loaded = true;
};
SpaceInvaders.explosion[0].src = "img/explosion1.png";
SpaceInvaders.explosion[1] = new Image();
SpaceInvaders.explosion[1].loaded = false;
SpaceInvaders.explosion[1].onload = function(){
	SpaceInvaders.explosion[1].loaded = true;
};
SpaceInvaders.explosion[1].src = "img/explosion2.png";
SpaceInvaders.explosion[2] = new Image();
SpaceInvaders.explosion[2].loaded = false;
SpaceInvaders.explosion[2].onload = function(){
	SpaceInvaders.explosion[2].loaded = true;
};
SpaceInvaders.explosion[2].src = "img/explosion3.png";
SpaceInvaders.explosion[3] = new Image();
SpaceInvaders.explosion[3].loaded = false;
SpaceInvaders.explosion[3].onload = function(){
	SpaceInvaders.explosion[3].loaded = true;
};
SpaceInvaders.explosion[3].src = "img/explosion4.png";
SpaceInvaders.explosion[4] = new Image();
SpaceInvaders.explosion[4].loaded = false;
SpaceInvaders.explosion[4].onload = function(){
	SpaceInvaders.explosion[4].loaded = true;
};
SpaceInvaders.explosion[4].src = "img/explosion5.png";
SpaceInvaders.explosion[5] = new Image();
SpaceInvaders.explosion[5].loaded = false;
SpaceInvaders.explosion[5].onload = function(){
	SpaceInvaders.explosion[5].loaded = true;
};
SpaceInvaders.explosion[5].src = "img/explosion6.png";
SpaceInvaders.explosion[6] = new Image();
SpaceInvaders.explosion[6].loaded = false;
SpaceInvaders.explosion[6].onload = function(){
	SpaceInvaders.explosion[6].loaded = true;
};
SpaceInvaders.explosion[6].src = "img/explosion7.png";


 
SpaceInvaders.enemyClass1 =[];
SpaceInvaders.enemyClass1[0] = new Image();
SpaceInvaders.enemyClass1[0].loaded = false ;
SpaceInvaders.enemyClass1[0].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 1 graphics loaded" ) ;
	SpaceInvaders.enemyClass1[0].loaded = true ;
};
SpaceInvaders.enemyClass1[0].src = 'img/enemy1-4.png';

SpaceInvaders.enemyClass1[1] = new Image();
SpaceInvaders.enemyClass1[1].loaded = false ;
SpaceInvaders.enemyClass1[1].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 1 graphics loaded" ) ;
	SpaceInvaders.enemyClass1[1].loaded = true ;
};
SpaceInvaders.enemyClass1[1].src = 'img/enemy1-3.png';
 
SpaceInvaders.enemyClass1[2] = new Image();
SpaceInvaders.enemyClass1[2].loaded = false ;
SpaceInvaders.enemyClass1[2].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 1 graphics loaded" ) ;
	SpaceInvaders.enemyClass1[2].loaded = true ;
};

SpaceInvaders.enemyClass1[2].src = 'img/enemy1-2.png';
SpaceInvaders.enemyClass1[3] = new Image();
SpaceInvaders.enemyClass1[3].loaded = false ;
SpaceInvaders.enemyClass1[3].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 1 graphics loaded" ) ;
	SpaceInvaders.enemyClass1[3].loaded = true ;
};
SpaceInvaders.enemyClass1[3].src = 'img/enemy1-1.png';

SpaceInvaders.enemyClass2 =[];
SpaceInvaders.enemyClass2[0] =  new Image();
SpaceInvaders.enemyClass2[0].loaded = false ;
SpaceInvaders.enemyClass2[0].onload = function(){
//	SpaceInvaders.Log.Log ( "Enemy 2 graphics loaded" ) ;
	SpaceInvaders.enemyClass2[0].loaded = true ;
};
SpaceInvaders.enemyClass2[0].src = 'img/enemy2-4.png';
SpaceInvaders.enemyClass2[1] =  new Image();
SpaceInvaders.enemyClass2[1].loaded = false ;
SpaceInvaders.enemyClass2[1].onload = function(){
//	SpaceInvaders.Log.Log ( "Enemy 2 graphics loaded" ) ;
	SpaceInvaders.enemyClass2[1].loaded = true ;
};
SpaceInvaders.enemyClass2[1].src = 'img/enemy2-3.png';
SpaceInvaders.enemyClass2[2] =  new Image();
SpaceInvaders.enemyClass2[2].loaded = false ;
SpaceInvaders.enemyClass2[2].onload = function(){
//	SpaceInvaders.Log.Log ( "Enemy 2 graphics loaded" ) ;
	SpaceInvaders.enemyClass2[2].loaded = true ;
};
SpaceInvaders.enemyClass2[2].src = 'img/enemy2-2.png';
SpaceInvaders.enemyClass2[3] =  new Image();
SpaceInvaders.enemyClass2[3].loaded = false ;
SpaceInvaders.enemyClass2[3].onload = function(){
//	SpaceInvaders.Log.Log ( "Enemy 2 graphics loaded" ) ;
	SpaceInvaders.enemyClass2[3].loaded = true ;
};
SpaceInvaders.enemyClass2[3].src = 'img/enemy2-1.png';

SpaceInvaders.enemyClass3 =[];
SpaceInvaders.enemyClass3[0] =  new Image();
SpaceInvaders.enemyClass3[0].loaded = false ;
SpaceInvaders.enemyClass3[0].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 3 graphics loaded" ) ;
	SpaceInvaders.enemyClass3[0].loaded = true ;
};
SpaceInvaders.enemyClass3[0].src = 'img/enemy3-1.png';
SpaceInvaders.enemyClass3[1] =  new Image();
SpaceInvaders.enemyClass3[1].loaded = false ;
SpaceInvaders.enemyClass3[1].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 3 graphics loaded" ) ;
	SpaceInvaders.enemyClass3[1].loaded = true ;
};
SpaceInvaders.enemyClass3[1].src = 'img/enemy3-2.png';
SpaceInvaders.enemyClass3[2] =  new Image();
SpaceInvaders.enemyClass3[2].loaded = false ;
SpaceInvaders.enemyClass3[2].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 3 graphics loaded" ) ;
	SpaceInvaders.enemyClass3[2].loaded = true ;
};
SpaceInvaders.enemyClass3[2].src = 'img/enemy3-3.png';
SpaceInvaders.enemyClass3[3] =  new Image();
SpaceInvaders.enemyClass3[3].loaded = false ;
SpaceInvaders.enemyClass3[3].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 3 graphics loaded" ) ;
	SpaceInvaders.enemyClass3[3].loaded = true ;
};
SpaceInvaders.enemyClass3[3].src = 'img/enemy3-4.png';
 
SpaceInvaders.enemyClass4 =[];
SpaceInvaders.enemyClass4[0] =  new Image();
SpaceInvaders.enemyClass4[0].loaded = false ;
SpaceInvaders.enemyClass4[0].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 4 graphics loaded" ) ;
	SpaceInvaders.enemyClass4[0].loaded = true ;
};
SpaceInvaders.enemyClass4[0].src = 'img/enemy4-1.png';
SpaceInvaders.enemyClass4[1] =  new Image();
SpaceInvaders.enemyClass4[1].loaded = false ;
SpaceInvaders.enemyClass4[1].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 4 graphics loaded" ) ;
	SpaceInvaders.enemyClass4[1].loaded = true ;
};
SpaceInvaders.enemyClass4[1].src = 'img/enemy4-2.png';
SpaceInvaders.enemyClass4[2] =  new Image();
SpaceInvaders.enemyClass4[2].loaded = false ;
SpaceInvaders.enemyClass4[2].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 4 graphics loaded" ) ;
	SpaceInvaders.enemyClass4[2].loaded = true ;
};
SpaceInvaders.enemyClass4[2].src = 'img/enemy4-3.png';
SpaceInvaders.enemyClass4[3] =  new Image();
SpaceInvaders.enemyClass4[3].loaded = false ;
SpaceInvaders.enemyClass4[3].onload = function(){
	//SpaceInvaders.Log.Log ( "Enemy 4 graphics loaded" ) ;
	SpaceInvaders.enemyClass4[3].loaded = true ;
};
SpaceInvaders.enemyClass4[3].src = 'img/enemy4-4.png';

SpaceInvaders.bGameOver = false ;

Function.prototype.attach = function (name, func) {
    this.prototype[name] = func;
    return this;
};

SpaceInvaders.implement("loader",new function(){
        var loadfuncs = [];
        var oldonload = window.onload ;
        var alreadyrunflag=0 //flag to indicate whether target function has already been run
        if (document.addEventListener){
            document.addEventListener("DOMContentLoaded", function(){alreadyrunflag=1; SpaceInvaders.loader.exec();}, false)
        }else if (document.all && !window.opera){
            document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>')
            var contentloadtag=document.getElementById("contentloadtag")
            contentloadtag.onreadystatechange=function(){
                if (this.readyState=="complete"){
                    alreadyrunflag=1
                    SpaceInvaders.loader.exec();
                }
            }
        }
        window.onload=function(){
            setTimeout(function(){if (!alreadyrunflag){SpaceInvaders.loader.exec();}}, 0);
            if ( typeof ( oldonload ) == "function" ){
                oldonload();
            }
        };
        return{
            exec:function(){
                for ( i = 0 ; i < loadfuncs.length ; i++ ){
                    loadfuncs[i]();
                }
                return true ;
            },
            add :function(fnc){
                loadfuncs.push(fnc);
                return true ;
            }
        }
});

SpaceInvaders.implement ( "internalLog", function(){
	this.Log = function ( msg ){
		if ( typeof ( console.log ) != "undefined" ){
			console.log ( msg ) ;
		}
		return false ;
	}
});

SpaceInvaders.implement("Log", new SpaceInvaders.internalLog());

SpaceInvaders.implement ( "Drawable",function(){
	this.Font = "Verdana" ;
	this.Position = new SpaceInvaders.Point(0,0);
	this.oldPosition = new SpaceInvaders.Point(0,0);
	this.saveImage = null ;
	var iwidth = 0;
	var iheight = 0;
	this.Width = function(width){
		if ( width ){
			iwidth = width ;
		}
		return iwidth ;
	}
	this.Height = function(height){
		if ( height ){
			iheight = height ;
		}
		return iheight ;
	}
    /*this.Draw = function(graphics){
		if( graphics ){
			graphics.DrawRactangle(this.Position.X, this.Position.Y, this.Width, this.Height);
		}
	}*/
	this.Update = function(){
		SpaceInvaders.Log.Log ( "Drawable Update" ) ;
	}
	this.Collision = function(){
		SpaceInvaders.Log.Log ( "Drawable Collision" ) ;
	}
});


SpaceInvaders.implement('inherits',  function (object, parent) {
	if ( typeof ( object ) == "undefined" || typeof ( parent ) == "undefined" ){
		return ;
	}
	
	var save = {} ;
	save.prototype = new object() ;
	object.prototype = new parent ();
	object.prototype.constructor = object ;
	object.prototype.parent = parent.prototype ;
	for ( i in  save.prototype ){
		if ( i.substr(0,1) == "_" ){
			object.prototype[i.substr(1)] = save.prototype[i]();
		}
	}
});

SpaceInvaders.implement ( "Point", function(x,y){
	var ix  = x;
	var iy = y;
	this.X = function ( x ){
		if ( x ){
			ix = x ;
		}
		return ix ;
	}
	this.Y = function ( y ){
		if ( y ){
			iy = y ;
		}
		return iy ;
	}
});

SpaceInvaders.implement ( "Vector", function(x,y){
	var ix  = x;
	var iy  = y;
	this.X = function(x){
		if ( !isNaN(x) ){
			ix = x ;
		}
		return isNaN(ix)?0:ix ;
	}
	this.Y = function(y){
		if ( !isNaN(y) ){
			iy = y ;
		}
		return isNaN(iy)?0:iy ;
	}
});

SpaceInvaders.implement ( "Range",function(left, top, right, bottom){
    var l = left;
    var t  = top;
    var r = right ;
    var b = bottom;
    this.Left = function(){ return l ; }
    this.Top = function(){ return t ; }
    this.Right = function(){ return r ; }
    this.Bottom = function(){ return b ; }
    this.InRange = function(x,y){
        if ( x < l || x > r ||  y < t || y > b  ){
            return false ;
        }
        return true ;
    }
});

SpaceInvaders.implement ( "InvaderClass", function(tclass){
	var thisclass ;
	switch ( tclass ){
		case "Class1" :
		case "Class2" :
		case "Class3" :
		case "Class4" :
			thisclass = tclass ;
		break ;
		default :
			thisclass = "Class1" ;
	}
	this.InvaderClass = function(tclass){
		if ( tclass ){
			switch ( tclass ){
				case "Class1" :
				case "Class2" :
				case "Class3" :
				case "Class4" :
					thisclass = tclass ;l
				break ;
				default :
					thisclass = "Class1" ;
			}
		}
		return thisclass ;
	}
	this.Class1Enemy = function(){
		return "Class1" ;
	}
	this.Class2Enemy = function(){
		return "Class2" ;
	}
	this.Class3Enemy = function(){
		return "Class3" ;
	}
	this.Class4Enemy = function(){
		return "Class4" ;
	}
});


SpaceInvaders.implement ( "Message1Screen", function(v){
	var vv;
	this.Position = new SpaceInvaders.Vector();
	this.oldPosition = new SpaceInvaders.Vector();
	if(typeof(v)=="undefined"){
		this.vv = new SpaceInvaders.Vector(3.0,0.0);
	}else{
		this.vv = v;
	}
	this.Vector = function(){
		return this.vv;
	}
	this._Update = function(ms){
		if(this.Position!=null&&this.Width!=null){
			if(this.Position.X()<this.Width()/2+200){
				this.Position.X(this.Position.X()+this.vv.X());
				this.Position.Y(this.Position.Y()+this.vv.Y());
				console.log("Message1:"+this.Position.X()+":"+this.Position.Y());
			}
		}
	}
	this.Erase = function(graphics){
		console.log("Erasing Message1");
		if(graphics){
			graphics.fillStyle = "black" ;
			graphics.fillRect ( this.oldPosition.X()-this.Width() / 2, this.oldPosition.Y()-this.Height()/2, this.Width(), this.Height() ) ;
			console.log("Erasing: "+(this.oldPosition.X()-this.Width()/2)+" "+(this.oldPosition.Y()/2)+" "+this.Width()+" "+ this.Height());
		}
	}
	this._Draw = function(graphics){
		if ( graphics && SpaceInvaders.Message1.loaded ){
			graphics.fillStyle = "black" ;
			graphics.fillRect (  this.oldPosition.X()-this.Width() / 2, this.oldPosition.Y()-this.Height()/2 , this.Width(), this.Height()) ;
			console.log("Message1 Black:"+(this.oldPosition.X()-this.Width()/2)+" "+(this.oldPosition.Y()-this.Height()/2)+" "+this.Width()+" "+this.Height());
			if(SpaceInvaders.Message1.loaded){
				graphics.drawImage ( SpaceInvaders.Message1, this.Position.X()-this.Width() / 2, this.Position.Y()-this.Height()/2 ) ;
			}else{
				console.log("Message1 not loaded");
			}
			this.oldPosition.X(this.Position.X());
			this.oldPosition.Y(this.Position.Y());
		}
	}

});
SpaceInvaders.implement ( "Message2Screen", function(v){
	var vv;
	this.Position = new SpaceInvaders.Vector();
	this.oldPosition = new SpaceInvaders.Vector();
	if(typeof(v)=="undefined"){
		this.vv = new SpaceInvaders.Vector(3.0,0.0);
	}else{
		this.vv = v;
	}
	this.Vector = function(){
		return this.vv;
	}
	this._Update = function(ms){
		if(this.Position!=null&&this.Width!=null){
			if(this.Position.X()>this.Width()/2+100){
				this.Position.X(this.Position.X()+this.vv.X());
				this.Position.Y(this.Position.Y()+this.vv.Y());
				console.log("Message2:"+this.Position.X()+":"+this.Position.Y());
			}
		}else{
			console.log("Position is null");
		}
	}
	this.Erase = function(graphics){
		console.log("Erasing Message2");
		if(graphics){
			graphics.fillStyle = "black" ;
			graphics.fillRect ( this.oldPosition.X()-this.Width() / 2, this.oldPosition.Y()-this.Height()/2, this.Width(), this.Height() ) ;
			console.log("Erasing: "+(this.oldPosition.X()-this.Width()/2)+" "+(this.oldPosition.Y()/2)+" "+this.Width()+" "+ this.Height());
		}else{
			console.log("Graphics not set");
		}
	}
	this._Draw = function(graphics){
		if ( graphics && SpaceInvaders.Message2.loaded ){
			graphics.fillStyle = "black" ;
			graphics.fillRect (  this.oldPosition.X()-this.Width() / 2, this.oldPosition.Y()-this.Height()/2 , this.Width(), this.Height()) ;
			if(SpaceInvaders.Message2.loaded){
				graphics.drawImage ( SpaceInvaders.Message2, this.Position.X()-this.Width() / 2, this.Position.Y()-this.Height()/2 ) ;
			}else{
				console.log("Message2 not loaded");
			}
			this.oldPosition.X(this.Position.X());
			this.oldPosition.Y(this.Position.Y());
		}else{
			console.log("No Graphics or Message2 not loaded");
		}
	}

});

SpaceInvaders.implement ( "TitleScreen", function(v){
	var vv;
	this.Position = new SpaceInvaders.Vector();
	this.oldPosition = new SpaceInvaders.Vector();
	if ( typeof(v) == "undefined"){
		this.vv = new SpaceInvaders.Vector(0.0,-1.0);
	}else{
		this.vv = v;
	}
	this.Vector = function (){
		return this.vv;
	}
	this._Update = function(ms){
		if(this.Position!=null){
			if(this.Position.Y()<100){
				this.Position.X(this.Position.X()+this.vv.X());
				this.Position.Y(this.Position.Y()+this.vv.Y());
				console.log("Title:"+this.Position.X()+":"+this.Position.Y());
			}
		}
	}
	this.Erase = function(graphics){
		console.log("Erasing Title");
		if(graphics){
			graphics.fillStyle = "black" ;
			graphics.fillRect ( this.oldPosition.X()-this.Width() / 2, this.oldPosition.Y()-this.Height()/2, this.Width(), this.Height() ) ;
		}else{
			console.log("graphics is not set");
		}
	}
	this._Draw = function(graphics){
		if ( graphics && SpaceInvaders.Title.loaded ){
			graphics.fillStyle = "black" ;
			graphics.fillRect (  this.oldPosition.X()-this.Width() / 2, this.oldPosition.Y()- this.Height()/2, this.Width(), this.Height());
			if(SpaceInvaders.Title.loaded){
				graphics.drawImage ( SpaceInvaders.Title, this.Position.X()-this.Width() / 2, this.Position.Y()-this.Height()/2 ) ;
			}else{
				console.log("Title not loaded");
			}
			this.oldPosition.X(this.Position.X());
			this.oldPosition.Y(this.Position.Y());
		}
	}
	
});

SpaceInvaders.implement ( "Player", function(v){
	var vv ;
	if ( typeof ( v ) == "undefined" ){
		this.vv = new SpaceInvaders.Vector ( 0.0,0.0 )
		//SpaceInvaders.Log.Log ( "Created Player with Vector:" + vv.X() + "," + vv.Y());
	}else{
		this.vv = v ; // set to incoming vector
		//SpaceInvaders.Log.Log ( "Created Player with Vector:" + vv.X() + "," + vv.Y());
	}
	this.Vector = function(){
		return this.vv ;
	}
	this._Update = function(ms){
			switch ( SpaceInvaders.MoveState.toString() ){
				case "Right" :
					this.vv.X ( this.vv.X ( ) + 1.0 ) ;
					if ( this.vv.X ( ) > 5 ) {
						this.vv.X ( 5 ) ;
					}
					//SpaceInvaders.Log.Log ( this.Position.X () + "," + this.Position.Y() + "," + vv.X() + "," + vv.Y() + ":" + SpaceInvaders.MoveState.toString());
				break ;
				case "Left" :
					this.vv.X (this.vv.X ( ) -1 );
					if ( this.vv.X ( ) < -5 ) {
						this.vv.X ( -5 ) ;
					}
					//SpaceInvaders.Log.Log ( this.Position.X () + "," + this.Position.Y() + "," + vv.X() + "," + vv.Y() + ":" + SpaceInvaders.MoveState.toString());
				break ;
				default :
					if ( this.vv.X ( )> 0 ){
						this.vv.X ( this.vv.X ( ) -1.0 ) ;
					}else if ( this.vv.X ( ) < 0 ){
						this.vv.X ( this.vv.X ( ) + 1.0 ) ;
					}
				break ;
			}
			if ( typeof ( this.Position ) != "undefined" ){
				this.Position.X ( this.Position.X ( ) + this.vv.X ( ) ) ;
				this.Position.Y ( this.Position.Y ( ) + this.vv.Y ( ) ) ;

				//SpaceInvaders.Log.Log ( this.Position.X () + "," + this.Position.Y() + "," + vv.X() + "," + vv.Y() + ":" + SpaceInvaders.MoveState.toString());
			}
	}
	this._Draw = function ( graphics ){
		if ( graphics && SpaceInvaders.playerGraphic.loaded ){
			//SpaceInvaders.Log.Log ( "Draw Player at :[" + this.Position.X() + "," + this.Position.Y() + "," + this.Width()+ "," + this.Height ()+ "]" ) ;
			if ( this.oldPosition.X() == this.Position.X() && this.Position.Y ( ) == this.oldPosition.Y()){
				
			}else{
				
				
				graphics.fillStyle = "black" ;
				graphics.fillRect ( this.oldPosition.X ()-this.Width()/ 2, this.oldPosition.Y()-2, this.Width(), this.Height());

				graphics.drawImage ( SpaceInvaders.playerGraphic, this.Position.X()-this.Width() / 2, this.Position.Y()-2 ) ;
				this.oldPosition.X(this.Position.X());
				this.oldPosition.Y(this.Position.Y());
				
				
			}
		}else{
			//SpaceInvaders.Log.Log ( "Graphics is not defined in PLayer" ) ;
		}
	}
	this.Collision = function( width, height ){
		if ( ( this.Position.X ( ) + ( this.Width ( ) / 2 ) ) > ( width - SpaceInvaders.GAME_OFFSET_X ) ){
			return true ;
		}else if ( ( this.Position.X - ( this.Width ( ) / 2 ) ) < ( SpaceInvader.GAME_OFFSET_X ) ){
			return true ;
		}
		return false ;
	}
});

SpaceInvaders.implement ( "PlayerMissle", function(v){
	var vv ;
	var bDestroyed = false;
	this.Position = new SpaceInvaders.Vector();
	this.oldPosition = new SpaceInvaders.Vector();
	if ( typeof ( v ) == "undefined" ){
		this.vv = new SpaceInvaders.Vector ( 0.0,-5.0 )
		//SpaceInvaders.Log.Log ( "Created Player Missle with Vector:" + vv.X() + "," + vv.Y());
	}else{
		this.vv = v ; // set to incoming vector
		//SpaceInvaders.Log.Log ( "Created Player with Missle Vector:" + vv.X() + "," + vv.Y());
	}
	this.Vector = function(){
		return this.vv ;
	}
	this._Update = function(ms){
		if ( typeof ( this.Position ) != "undefined" ) {
			this.Position.X ( this.Position.X ( ) + this.vv.X ( ) ) ;
			this.Position.Y ( this.Position.Y ( ) + this.vv.Y ( ) ) ;
		}
	}
	this.Destroyed = function (){
		return this.bDestroyed ;
	}
	this.Erase = function ( graphics ){
		if ( graphics ){
			if ( this.oldPosition != null ){
				graphics.strokeStyle="black";
				graphics.fillStyle = "black" ;
				graphics.lineWidth=0;
				graphics.fillRect (  this.oldPosition.X() - ( this.Width () / 2 ) -1 , this.oldPosition.Y() - ( this.Height () / 2 ) -1  , this.Width()+2, this.Height()+2);
			}
		}
	}
	this._Draw = function ( graphics ){
		if ( graphics  ){
			
			//SpaceInvaders.Log.Log ( "Draw Player Missle at :[" + this.Position.X() + "," + this.Position.Y() + "," + this.Width()+ "," + this.Height ()+ "]" ) ;
			graphics.fillStyle = "#FFFFFF" ;
			
				
				if ( /*this.saveImage != null && typeof ( this.saveImage ) != "undefined" && */this.oldPosition != null ){
					graphics.strokeStyle="none";
					graphics.fillStyle = "black" ;
					graphics.lineWidth=0;
					graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y() - ( this.Height () / 2 )-1, this.Width()+2, this.Height()+2);
				}
				graphics.strokeStyle="none";
				graphics.lineWidth=0;
				graphics.fillStyle = "white" ;
				if(this.Position.Y() > SpaceInvaders.GAME_OFFSET_Y+2){
				graphics.fillRect ( this.Position.X() - ( this.Width () / 2 ) , this.Position.Y() - ( this.Height () / 2 ) , this.Width(), this.Height() ) ;
				
				}
				this.oldPosition.X(this.Position.X());
				this.oldPosition.Y(this.Position.Y());
				
			//}
			
		}else{
			//SpaceInvaders.Log.Log ( "Graphics is not defined in Player Missle" ) ;
		}
	}
	this.Collision = function(invaders, width, height){
		if ( this.Position.Y() < SpaceInvaders.GAME_OFFSET_Y ){
			this.Erase();
			this.bDestroyed= true;
			return null ;
		}
		var r = new SpaceInvaders.Range ( this.Position.X (), this.Position.Y(), this.Position.X () + this.Width(), this.Position.Y() + this.Height () ) ;
		var destroyedCount=0;
		for ( i = 0 ; i < invaders.length ; i++ ){
			if ( !invaders[i].Destroyed() ){
				var ir = new SpaceInvaders.Range ( invaders[i].Position.X (), invaders[i].Position.Y(), invaders[i].Position.X () + invaders[i].Width(), invaders[i].Position.Y() + invaders[i].Height () ) ;
				if ( this.Intersect ( r, ir ) ){
					invaders[i].Hit();
					//this.bDestroyed = true;
					return invaders[i] ;
				}
			}else{
				this.destroyedCount++;
			}
		}
		if ( destroyedCount == invaders.length ){
			// next level
			console.log("All Destroyed");
		}
	}
	this.Intersect = function ( me, invader ){
		return ! ( me.Left() > invader.Right() ||
			me.Right () < invader.Left() ||
			me.Top() > invader.Bottom() ||
			me.Bottom ( ) < invader.Top () ) ;
	}
});

SpaceInvaders.implement ( "Invader", function(v,invclass){
	var invaderClass = invclass ;
	var bDestroyed = false ;
	this.bExploding = false;
	this.Position = new SpaceInvaders.Vector();
	this.oldPosition = new SpaceInvaders.Vector();
	this.imageSelector = 0 ;
	this.frameCount= 0 ;
	this.explodeFrame = 0 ;
	this.hitCount = 0;
	if ( !v ){
		this.vv = new SpaceInvaders.Vector ( 0.0,0.0 )
	}else{
		this.vv = v ; // set to incoming vector
	}
	if ( !invclass ){
		invaderClass = new SpaceInvaders.InvaderClass ( "Class1" ) ;
	}else{
		invaderClass = new SpaceInvaders.InvaderClass ( invclass ) ;
	}
	this.HitCount = function(theHitCount){
		this.hitCount = theHitCount;
	}
	this.InvaderClass = function(){
		return invaderClass.InvaderClass();
	}
	this.Vector = function(){
		return this.vv ;
	}
	this.Destroyed = function (){
		return this.bDestroyed ;
	}
	this._Update = function (){
		if ( typeof ( this.Position ) != "undefined" ) {
			this.Position.X ( this.Position.X ( ) + this.vv.X ( ) ) ;
			this.Position.Y ( this.Position.Y ( ) + this.vv.Y ( ) ) ;
		}
	}
	this.Erase = function( graphics ){
		if ( graphics ){
			if ( this.oldPosition != null ){
				graphics.strokeStyle="none";
				graphics.fillStyle = "black" ;
				graphics.lineWidth=0;
				graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y()+2 , this.Width()+2, this.Height()+2);
			}
		}
	}
	this.Reset = function(){
		this.bDestroyed= false;
		this.bExploding = false;
		this.explodeFrame= 0; 
		this.Position.X(-100);
		this.Position.Y(-100);
	}
	this._Draw = function(graphics){
		this.frameCount++;
		if ( graphics ){
			switch ( invaderClass.InvaderClass() ){
				case invaderClass.Class1Enemy():
					if ( this.bExploding){
						if(this.explodeFrame>SpaceInvaders.explosion.length){
							this.explodeFrame = 0 ;
							this.bDestroyed = true;
							graphics.strokeStyle="none";
							graphics.fillStyle = "black" ;
							graphics.lineWidth=0;
							graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y()+2 , this.Width()+2, this.Height()+2);
							return;
						}
						graphics.drawImage (SpaceInvaders.explosion[this.explodeFrame%SpaceInvaders.explosion.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y()+2 );
						this.explodeFrame++;
						return ;
					}
					if(this.frameCount%2==0){
						this.imageSelector++;
						if(this.imageSelector>=SpaceInvaders.enemyClass1.length){
							this.imageSelector = 0 ;
						}
					}
					var currentImage = this.imageSelector;
					if ( SpaceInvaders.enemyClass1[this.imageSelector%SpaceInvaders.enemyClass1.length].loaded ){
						//SpaceInvaders.Log.Log ( "Drawing Enemy type 1" ) ;
						if ( this.oldPosition != null ){
							if ( this.hitCount > 1 ){
								graphics.beginPath();
								graphics.arc(this.oldPosition.X(),this.oldPosition.Y()+10,this.Width()/2,0,2*Math.PI);
								graphics.fillStyle="black";
								graphics.fill();

							}else{
								graphics.strokeStyle="none";
								graphics.fillStyle = "black" ;
								graphics.lineWidth=0;
								graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y(), this.Width()+2, this.Height()+2);
							}
						}
						graphics.strokeStyle="none";
						graphics.lineWidth=0;
						graphics.fillStyle = "white" ;
						graphics.drawImage (SpaceInvaders.enemyClass1[this.imageSelector%SpaceInvaders.enemyClass1.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y()+2 );
						if ( this.hitCount == 7 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 6 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 5 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 4 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 3 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 2 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,0,255,.5)";
							graphics.fill();
						}
						this.oldPosition.X(this.Position.X());
						this.oldPosition.Y(this.Position.Y());
					}else{
						//SpaceInvaders.Log.Log ( "Enemy Class 1 not loaded" ) ;
					}
				break ;
				case invaderClass.Class2Enemy():
					if ( this.bExploding){
						if(this.explodeFrame>SpaceInvaders.explosion.length){
							this.explodeFrame = 0 ;
							this.bDestroyed = true;
							graphics.strokeStyle="none";
							graphics.fillStyle = "black" ;
							graphics.lineWidth=0;
							graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y()+2 , this.Width()+2, this.Height()+2);
							return;
						}
						graphics.drawImage (SpaceInvaders.explosion[this.explodeFrame%SpaceInvaders.explosion.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y()+2 );
						this.explodeFrame++;
						return ;
					}
					if(this.frameCount%2==0){
						this.imageSelector++;
						if(this.imageSelector>=SpaceInvaders.enemyClass2.length){
							this.imageSelector = 0 ;
						}
					}
					var currentImage = this.imageSelector;
					if ( SpaceInvaders.enemyClass2[currentImage%SpaceInvaders.enemyClass2.length].loaded ){
						//SpaceInvaders.Log.Log ( "Drawing Enemy type 2" ) ;
						if ( this.oldPosition != null ){
							if ( this.hitCount > 1 ){
								graphics.beginPath();
								graphics.arc(this.oldPosition.X(),this.oldPosition.Y()+10,this.Width()/2,0,2*Math.PI);
								graphics.fillStyle="black";
								graphics.fill();

							}else{
								graphics.strokeStyle="none";
								graphics.fillStyle = "black" ;
								graphics.lineWidth=0;
								graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y(), this.Width()+2, this.Height()+2);
							}
						}
						graphics.strokeStyle="none";
						graphics.lineWidth=0;
						graphics.fillStyle = "white" ;
						graphics.drawImage (SpaceInvaders.enemyClass2[currentImage%SpaceInvaders.enemyClass2.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y() );
						if ( this.hitCount == 7 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 6 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 5 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 4 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 3 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 2 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,0,255,.5)";
							graphics.fill();
						}
						this.oldPosition.X(this.Position.X());
						this.oldPosition.Y(this.Position.Y());
					}else{
						//SpaceInvaders.Log.Log ( "Enemy Class 2 not loaded" ) ;
					}
				break ;
				case invaderClass.Class3Enemy():
					if ( this.bExploding){
						if(this.explodeFrame>SpaceInvaders.explosion.length){
							this.explodeFrame = 0 ;
							this.bDestroyed = true;
							graphics.strokeStyle="none";
							graphics.fillStyle = "black" ;
							graphics.lineWidth=0;
							graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y()+2 , this.Width()+2, this.Height()+2);
							return;
						}
						graphics.drawImage (SpaceInvaders.explosion[this.explodeFrame%SpaceInvaders.explosion.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y()+2 );
						this.explodeFrame++;
						return ;
					}
					if(this.frameCount%2==0){
						this.imageSelector++;
						if(this.imageSelector>=SpaceInvaders.enemyClass3.length){
							this.imageSelector = 0 ;
						}
					}
					var currentImage = this.imageSelector;
					if ( SpaceInvaders.enemyClass3[currentImage%SpaceInvaders.enemyClass3.length].loaded ){
						//SpaceInvaders.Log.Log ( "Drawing Enemy type 3" ) ;
						if ( this.oldPosition != null ){
							if ( this.hitCount > 1 ){
								graphics.beginPath();
								graphics.arc(this.oldPosition.X(),this.oldPosition.Y()+10,this.Width()/2,0,2*Math.PI);
								graphics.fillStyle="black";
								graphics.fill();

							}else{
								graphics.strokeStyle="none";
								graphics.fillStyle = "black" ;
								graphics.lineWidth=0;
								graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y(), this.Width()+2, this.Height()+2);
							}
						}
						graphics.strokeStyle="none";
						graphics.lineWidth=0;
						graphics.fillStyle = "white" ;
						graphics.drawImage (SpaceInvaders.enemyClass3[currentImage%SpaceInvaders.enemyClass3.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y() );
						if ( this.hitCount == 7 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 6 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 5 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 4 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 3 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 2 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,0,255,.5)";
							graphics.fill();
						}
						this.oldPosition.X(this.Position.X());
						this.oldPosition.Y(this.Position.Y());
					}else{
						//SpaceInvaders.Log.Log ( "Enemy Class 3 not loaded" ) ;
					}
				break ;
				case invaderClass.Class4Enemy():
					if ( this.bExploding){
						if(this.explodeFrame>SpaceInvaders.explosion.length){
							this.explodeFrame = 0 ;
							this.bDestroyed = true;
							graphics.strokeStyle="none";
							graphics.fillStyle = "black" ;
							graphics.lineWidth=0;
							graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y()+2 , this.Width()+2, this.Height()+2);
							return;
						}
						graphics.drawImage (SpaceInvaders.explosion[this.explodeFrame%SpaceInvaders.explosion.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y()+2 );
						this.explodeFrame++;
						return ;
					}
					if(this.frameCount%2==0){
						this.imageSelector++;
						if(this.imageSelector>=SpaceInvaders.enemyClass4.length){
							this.imageSelector = 0 ;
						}
					}
					var currentImage = this.imageSelector;
					if ( SpaceInvaders.enemyClass4[currentImage%SpaceInvaders.enemyClass4.length].loaded ){
						//SpaceInvaders.Log.Log ( "Drawing Enemy type 4" ) ;
						if ( this.oldPosition != null ){
							if ( this.hitCount > 1 ){
								graphics.beginPath();
								graphics.arc(this.oldPosition.X(),this.oldPosition.Y()+10,this.Width()/2,0,2*Math.PI);
								graphics.fillStyle="black";
								graphics.fill();

							}else{
								graphics.strokeStyle="none";
								graphics.fillStyle = "black" ;
								graphics.lineWidth=0;
								graphics.fillRect ( this.oldPosition.X ()- ( this.Width () / 2 ) -1, this.oldPosition.Y(), this.Width()+2, this.Height()+2);
							}
						}
						graphics.strokeStyle="none";
						graphics.lineWidth=0;
						graphics.fillStyle = "white" ;
						graphics.drawImage (SpaceInvaders.enemyClass4[currentImage%SpaceInvaders.enemyClass4.length], this.Position.X() - ( this.Width() / 2 ), this.Position.Y() );
						if ( this.hitCount == 7 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 6 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,255,.5)";
							graphics.fill();
						}else if ( this.hitCount == 5 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 4 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(255,0,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 3 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,255,0,.5)";
							graphics.fill();
						}else if ( this.hitCount == 2 ){
							graphics.beginPath();
							graphics.arc(this.Position.X(),this.Position.Y()+10,this.Width()/2,0,2*Math.PI);
							graphics.fillStyle="rgba(0,0,255,.5)";
							graphics.fill();
						}
						this.oldPosition.X(this.Position.X());
						this.oldPosition.Y(this.Position.Y());
					}else{
						//SpaceInvaders.Log.Log ( "Enemy Class 4 not loaded" ) ;
					}
				break ;
				default :
					SpaceInvaders.Log.Log ( "Unknown enemy class" ) ;
			}
		}else{
			SpaceInvaders.Log.Log ( "Graphics is not defined in Invader" ) ;
		}
	}
	this.Collision = function(width, height){
		if ( !bDestroyed ){
			if (( this.Position.X() + (this.Width ( )/ 2) ) > ( width - ( SpaceInvaders.GAME_OFFSET_X + 2 ))){
				return true ;
			}else if ( ( this.Position.X() - ( this.Width ( )/ 2 ) ) < ( SpaceInvaders.GAME_OFFSET_X + 2 )){
				return true ;
			}else if ( ( this.Position.Y ( ) + this.Height ( ) ) > ( height - ( SpaceInvaders.GAME_OFFSET_Y + SpaceInvaders.PLAYER_HEIGHT ) )){
				SpaceInvaders.GameOver();
				return true;
			}
			return false;
		}else{
			return false ;
		}
	}
	this.Hit = function(){
		this.hitCount--;
		if(this.hitCount<=0){
			this.bExploding = true ;
		}
	}
});


SpaceInvaders.implement ( "GameBoard", function(){
	this._Draw = function(graphics){
		if ( graphics ){
			//SpaceInvaders.Log.Log ( "Draw GameBoard: [" + this.Position.X () + "," + this.Position.Y() + "," + this.Width() + "," + this.Height() + "]") ;
			graphics.strokeStyle="white";
			graphics.lineWidth=1;
			graphics.fillStyle = "white" ;
			graphics.strokeRect ( this.Position.X(), this.Position.Y(), this.Width(), this.Height() ) ;
		}else{
			//SpaceInvaders.Log.Log ( "Graphics is not defined in GameBoard"  + typeof(_this ) + typeof ( graphics ) ) ;
		}
	}	
});

SpaceInvaders.implement ( "LevelDisplay", function(level){
	this.ilevel = 0 ;
	this.Position = new SpaceInvaders.Vector();
	this.oldPosition = new SpaceInvaders.Vector();

	this.Level = function(level){
		if ( level ){
			this.ilevel = level;
		}
		return this.ilevel;
	}
	this.Erase = function(graphics){

	}
	this._Draw = function(graphics){
		//console.log("Position:"+this.Position);
		if(graphics && this.Position != null ){
			graphics.strokeStlye="none";
			graphics.fillStyle = "black";
			graphics.lineWidth = 0;
			graphics.fillRect ( this.Position.X () -1, this.Position.Y()- this.Height(), this.Width()+2, this.Height()+2);
			graphics.strokeStlye="white";
			graphics.lineWidth=1;
			graphics.fillStyle="white";
			graphics.strokeText("Level: "+this.ilevel.pad(2), this.Position.X(), this.Position.Y());
		}
	}
	this._Update = function(graphics){
		if ( this.Position != null ){

		}
	}
		
});
SpaceInvaders.implement ( "ScoreBoard", function(score){
	var iscore = 0;
	this.Score = function(score){
		if ( score ){
			iscore = score ;
		}
		return iscore ;
	}
	this._Draw = function(graphics){
		if ( graphics ){
			graphics.strokeStyle="none";
			graphics.fillStyle = "black" ;
			graphics.lineWidth=0;
			graphics.fillRect ( this.Position.X () -1, this.Position.Y()- this.Height(), this.Width()+2, this.Height()+2);

			graphics.strokeStyle="white";
			graphics.lineWidth=1;
			graphics.fillStyle = "white" ;
			graphics.strokeText ( "Score: "+iscore.pad(4) , this.Position.X(), this.Position.Y() ) ;
		}else{
			//SpaceInvaders.Log.Log ( "Graphics is not defined in ScoreBoard" ) ;
		}
	}
	this._Update = function(){
		
	}
});

SpaceInvaders.p = null ;

SpaceInvaders.implement ( "canvas", function(id,newparticleCount){
	this.displayWidth=0;
	this.displayHeight = 0;
	var center = {X:function(){},Y:function(){}};
	this.cvs = null ;

	var range ;

	var bInit = false ;
	
	var spriteSheetCanvas;
	var spriteSheetContext;
	
	this.context = null ;
	
	// game vars
	this.gb = null ;
	this.sb = null ;
	this.ld = null;
	//SpaceInvaders.p = null ;
	//this.pm= null ;
	this.invaders = [];
	this.pm = [];

	this.SplashDetails = {
		invader:null,
		text:null,
		initTime:0,
		frameLoops:0
	};

	if ( !this.cvs ){
		this.cvs = document.getElementById(id);
		if ( this.cvs ){
			this.displayWidth = this.cvs.getAttribute("width");
			this.displayHeight = this.cvs.getAttribute("height");
			this.context = this.cvs.getContext("2d");
			this.context.fillStyle = "#000000";
			this.context.fillRect(0,0,this.displayWidth,this.displayHeight);
			center = new SpaceInvaders.Vector(this.displayWidth/2,this.displayHeight/2);
			range = new SpaceInvaders.Range (0,0,this.displayWidth,this.displayHeight);
			this.cvs.addEventListener("mouseup",SpaceInvaders.CanvasMoueUp);
			console.log("Mouseup Attached");
			this.cvs.addEventListener("mousedown",SpaceInvaders.CanvasMouseDown);
			console.log("Mousedown Attached");
			this.cvs.addEventListener("mousemove",SpaceInvaders.CanvasMouseMove);
			console.log("Mousemove Attached");
			this.cvs.addEventListener("touchstart",SpaceInvaders.TouchStart);
			this.cvs.addEventListener("touchend",SpaceInvaders.TouchEnd);
			this.cvs.addEventListener("touchmove",SpaceInvaders.TouchMove);
		}
	}
	
	this.GameOver=function(){
		this.context.fillStyle = "#000000";
		this.context.fillRect ( SpaceInvaders.GAME_OFFSET_X, SpaceInvaders.GAME_OFFSET_Y, this.gb.Width(), this.gb.Height());
		this.context.strokeStyle = "#FF0000" ;
		this.context.fillStyle = "#FFFFFF";
		this.context.lineWidth=1;
		this.context.strokeRect (  ( this.displayWidth / 2 ) - 50, this.displayHeight /2 - 25, 100, 50 ) ;
		this.context.font = 'italic 13px Calibri';
		this.context.fillText ( "Game Over" , this.displayWidth / 2 - 30, this.displayHeight / 2 + 3 ) ;
	};

	this.InitializeGame=function(){
		this.gb = new SpaceInvaders.GameBoard();
		this.gb.Position.X ( SpaceInvaders.GAME_OFFSET_X ) ;
		this.gb.Position.Y ( SpaceInvaders.GAME_OFFSET_Y) ;
		this.gb.Width ( this.displayWidth - ( 2 * SpaceInvaders.GAME_OFFSET_X ) ) ;
		this.gb.Height ( this.displayHeight - ( 2 * SpaceInvaders.GAME_OFFSET_Y ) ) ;
		

		this.sb = new SpaceInvaders.ScoreBoard();
		this.sb.Score ( SpaceInvaders.score ) ;
		this.sb.Position.X ( 20 ) ;
		this.sb.Position.Y ( 15 ) ;
		this.sb.Width ( 100 ) ;
		this.sb.Height ( 20 ) ;

		this.ld = new SpaceInvaders.LevelDisplay();
		this.ld.Level (SpaceInvaders.level);
		this.ld.Position.X ( 830 );
		this.ld.Position.Y ( 15 );
		this.ld.Width ( 100 );
		this.ld.Height ( 20 ) ;

		SpaceInvaders.p = new SpaceInvaders.Player();
		//SpaceInvaders.Log.Log ( ( ( this.displayWidth / 2 ) - ( SpaceInvaders.PLAYER_WIDTH / 2 )).toFixed(0) ) ;
		SpaceInvaders.p. Position.X ( ( this.displayWidth / 2 ) - ( SpaceInvaders.PLAYER_WIDTH / 2 ) ) ;
		SpaceInvaders.p. Position.Y ( ( this.displayHeight ) - ( SpaceInvaders.PLAYER_HEIGHT  + SpaceInvaders.GAME_OFFSET_Y) ) ;
		SpaceInvaders.p. Width ( SpaceInvaders.PLAYER_WIDTH ) ;
		SpaceInvaders.p. Height ( SpaceInvaders.PLAYER_HEIGHT ) ;
		
		
		var irow = 0 ;
		var icol = 0 ;
		var invClass = null ;
		
		for ( i = 0 ; i < SpaceInvaders.ENEMY_COUNT ; i++ ){
			var v = new SpaceInvaders.Vector ( 1.0, 0.0 );
			switch ( irow ){
				case 0 :
					invClass = SpaceInvaders.Class1Enemy ;
				break ;
				case 1 :
					invClass = SpaceInvaders.Class2Enemy ;
				break ;
				case 2 :
					invClass = SpaceInvaders.Class3Enemy ;
				break ;
				case 3 :
					invClass = SpaceInvaders.Class4Enemy ;
				break ;
			}
			if ( SpaceInvaders.level == 1 ){
			var tmp = new SpaceInvaders.Invader ( v, invClass ) ;
			tmp.Position.X ( SpaceInvaders.GAME_OFFSET_X + SpaceInvaders.INITIAL_X_OFFSET + ( SpaceInvaders.ENEMY_WIDTH / 2 ) + ( icol * ( SpaceInvaders.ENEMY_OFFSET + SpaceInvaders.ENEMY_WIDTH ) ) );
			tmp.Position.Y ( SpaceInvaders.GAME_OFFSET_Y + SpaceInvaders.INITIAL_Y_OFFSET + ( irow * ( SpaceInvaders.ENEMY_OFFSET + SpaceInvaders.ENEMY_HEIGHT ) ) ) ;
			tmp.Width (SpaceInvaders.ENEMY_WIDTH );
			tmp.Height ( SpaceInvaders.ENEMY_HEIGHT );
			
			this.invaders.push ( tmp ) ;
			}
			icol ++ ;
			if ( icol == SpaceInvaders.COLS ){
				icol = 0 ;
				irow ++ ;
			}
		}
		bInit = true ;
	};
	
	this.InitBoard = function(){
		this.gb = new SpaceInvaders.GameBoard();
		this.gb.Position.X ( SpaceInvaders.GAME_OFFSET_X ) ;
		this.gb.Position.Y ( SpaceInvaders.GAME_OFFSET_Y) ;
		this.gb.Width ( this.displayWidth - ( 2 * SpaceInvaders.GAME_OFFSET_X ) ) ;
		this.gb.Height ( this.displayHeight - ( 2 * SpaceInvaders.GAME_OFFSET_Y ) ) ;
		

		this.sb = new SpaceInvaders.ScoreBoard();
		this.sb.Score ( SpaceInvaders.score ) ;
		this.sb.Position.X ( 20 ) ;
		this.sb.Position.Y ( 15 ) ;
		this.sb.Width ( 100 ) ;
		this.sb.Height ( 20 ) ;
		
		this.ld = new SpaceInvaders.LevelDisplay();
		this.ld.Level (SpaceInvaders.level);
		this.ld.Position.X ( 830 );
		this.ld.Position.Y ( 15 );
		this.ld.Width ( 100 );
		this.ld.Height ( 20 ) ;

		SpaceInvaders.p = new SpaceInvaders.Player();
		//SpaceInvaders.Log.Log ( ( ( this.displayWidth / 2 ) - ( SpaceInvaders.PLAYER_WIDTH / 2 )).toFixed(0) ) ;
		SpaceInvaders.p. Position.X ( ( this.displayWidth / 2 ) - ( SpaceInvaders.PLAYER_WIDTH / 2 ) ) ;
		SpaceInvaders.p. Position.Y ( ( this.displayHeight ) - ( SpaceInvaders.PLAYER_HEIGHT  + SpaceInvaders.GAME_OFFSET_Y) ) ;
		SpaceInvaders.p. Width ( SpaceInvaders.PLAYER_WIDTH ) ;
		SpaceInvaders.p. Height ( SpaceInvaders.PLAYER_HEIGHT ) ;
		
		
		var irow = 0 ;
		var icol = 0 ;
		var invClass = null ;
		
		switch ( SpaceInvaders.level ){
			case 1 :

				positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];

			break;
			case 2 :
				positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 3 :
				positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 4 :
				positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 5 :
			positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 6 :
			positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 7 :
			positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 8 :
			positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
			case 9 :
			positions = [
				{x:0,y:0},{x:32,y:0},{x:64,y:0},{x:96,y:0},{x:128,y:0},{x:160,y:0},{x:192,y:0},{x:224,y:0},
				{x:0,y:32},{x:32,y:32},{x:64,y:32},{x:96,y:32},{x:128,y:32},{x:160,y:32},{x:192,y:32},{x:224,y:32},
				{x:0,y:64},{x:32,y:64},{x:64,y:64},{x:96,y:64},{x:128,y:64},{x:160,y:64},{x:192,y:64},{x:224,y:64},
				{x:0,y:96},{x:32,y:96},{x:64,y:96},{x:96,y:96},{x:128,y:96},{x:160,y:96},{x:192,y:96},{x:224,y:96}
				];
			break ;
		}
		
		for ( i = 0 ; i < SpaceInvaders.ENEMY_COUNT ; i++ ){
			
			var v = new SpaceInvaders.Vector ( 1.0, 0.0 );
			switch ( irow ){
				case 0 :
					invClass = SpaceInvaders.Class1Enemy ;
				break ;
				case 1 :
					invClass = SpaceInvaders.Class2Enemy ;
				break ;
				case 2 :
					invClass = SpaceInvaders.Class3Enemy ;
				break ;
				case 3 :
					invClass = SpaceInvaders.Class4Enemy ;
				break ;
			}
			if(SpaceInvaders.level == 1 ){
				var tmp = new SpaceInvaders.Invader ( v, invClass ) ;
				tmp.Position.X ( SpaceInvaders.GAME_OFFSET_X + SpaceInvaders.INITIAL_X_OFFSET + ( SpaceInvaders.ENEMY_WIDTH / 2 ) + ( icol * ( SpaceInvaders.ENEMY_OFFSET + SpaceInvaders.ENEMY_WIDTH ) ) );
				tmp.Position.Y ( SpaceInvaders.GAME_OFFSET_Y + SpaceInvaders.INITIAL_Y_OFFSET + ( irow * ( SpaceInvaders.ENEMY_OFFSET ) ) ) ;
				tmp.Width (SpaceInvaders.ENEMY_WIDTH );
				tmp.Height ( SpaceInvaders.ENEMY_HEIGHT );
			
				this.invaders.push ( tmp ) ;
			}else{
				console.log(positions[i]);
				this.invaders[i].Reset();
				this.invaders[i].Position.X(SpaceInvaders.GAME_OFFSET_X+positions[i].x+SpaceInvaders.ENEMY_WIDTH);
				this.invaders[i].Position.Y(SpaceInvaders.GAME_OFFSET_Y+positions[i].y+SpaceInvaders.ENEMY_HEIGHT);
				this.invaders[i].Vector(new SpaceInvaders.Vector(3,.25));
				if ( SpaceInvaders.level == 2 ){
					if(invClass == SpaceInvaders.Class4Enemy){
						this.invaders[i].HitCount(2);
					}else{
						this.invaders[i].HitCount(1);
					}
				}else if ( SpaceInvaders.level == 3 ){
					if(invClass == SpaceInvaders.Class4Enemy){
						this.invaders[i].HitCount(3);
					}else if ( invClass == SpaceInvaders.Class3Enemy){
						this.invaders[i].HitCount(2);
					}else{
						this.invaders[i].HitCount(1);
					}
				} else if ( SpaceInvaders.level == 4 ){
					if(invClass == SpaceInvaders.Class4Enemy){
						this.invaders[i].HitCount(4);
					}else if ( invClass == SpaceInvaders.Class3Enemy){
						this.invaders[i].HitCount(3);
					}else if ( invClass == SpaceInvaders.Class2Enemy){
						this.invaders[i].HitCount(2);
					}else{
						this.invaders[i].HitCount(1);
					}
				} else if ( SpaceInvaders.level == 5 ){
					if(invClass == SpaceInvaders.Class4Enemy){
						this.invaders[i].HitCount(5);
					}else if ( invClass == SpaceInvaders.Class3Enemy){
						this.invaders[i].HitCount(4);
					}else if ( invClass == SpaceInvaders.Class2Enemy){
						this.invaders[i].HitCount(3);
					}else{
						this.invaders[i].HitCount(2);
					}
				} else if ( SpaceInvaders.level == 6 ){
					if(invClass == SpaceInvaders.Class4Enemy){
						this.invaders[i].HitCount(6);
					}else if ( invClass == SpaceInvaders.Class3Enemy){
						this.invaders[i].HitCount(5);
					}else if ( invClass == SpaceInvaders.Class2Enemy){
						this.invaders[i].HitCount(4);
					}else{
						this.invaders[i].HitCount(3);
					}
				} else if ( SpaceInvaders.level == 7 ){
					if(invClass == SpaceInvaders.Class4Enemy){
						this.invaders[i].HitCount(7);
					}else if ( invClass == SpaceInvaders.Class3Enemy){
						this.invaders[i].HitCount(6);
					}else if ( invClass == SpaceInvaders.Class2Enemy){
						this.invaders[i].HitCount(5);
					}else{
						this.invaders[i].HitCount(4);
					}

					
				}else{
					this.invaders[i].HitCount(1);
				}
			}
			icol ++ ;
			if ( icol == SpaceInvaders.COLS ){
				icol = 0 ;
				irow ++ ;
			}
		}
	};
	
    this.run=function(cnvs){
        cnvs.Update(cnvs);
		if ( !SpaceInvaders.bGameOver ){
			setTimeout(function(){cnvs.run(cnvs);}, 1000/30 );
		}
    };
    this.Center = function(){
        return center ;
    };
    this.Range = function(){
        return range ;
    };
    this.AddMissle = function (){
	if ( this.pm.length<10 ){
	var m = new SpaceInvaders.PlayerMissle();
	m.Position.X (SpaceInvaders.p. Position.X() ) ;
	m.Position.Y ( SpaceInvaders.p. Position.Y() ) ;
	m.Width(3 );
	m.Height ( 3 );
	this.pm.push(m);
	}

    };
    this.InitializeSplash = function(){
	var v = new SpaceInvaders.Vector ( 0.0, 0.0 );
	var invClass= SpaceInvaders.Class1Enemy;
	var tmp = new SpaceInvaders.Invader ( v, invClass ) ;
	
        
	tmp.Position.X (this.displayWidth/2 -SpaceInvaders.ENEMY_WIDTH/2 );
        tmp.Position.Y (this.displayHeight/2-SpaceInvaders.ENEMY_HEIGHT/2 ) ;
        tmp.Width (SpaceInvaders.ENEMY_WIDTH );
        tmp.Height ( SpaceInvaders.ENEMY_HEIGHT );
        this.SplashDetails.invader = tmp;
	v = new SpaceInvaders.Vector ( 0.0, 3.0 );
	titleScreen = new SpaceInvaders.TitleScreen ( v ) ;
	titleScreen.Position.X((this.displayWidth/2));
	titleScreen.Position.Y((SpaceInvaders.TITLE_HEIGHT)*-1);
	titleScreen.Width(SpaceInvaders.TITLE_WIDTH);
	titleScreen.Height(SpaceInvaders.TITLE_HEIGHT);

	v = new SpaceInvaders.Vector(5.0,0.0);
	message1 = new SpaceInvaders.Message1Screen(v);
	message1.Position.X(SpaceInvaders.MESSAGE1_WIDTH/4*-1);
	message1.Position.Y(300);
	message1.Width(SpaceInvaders.MESSAGE1_WIDTH);
	message1.Height(SpaceInvaders.MESSAGE1_HEIGHT);

	v = new SpaceInvaders.Vector(-5.0,0.0);
	message2 = new SpaceInvaders.Message2Screen(v);
	message2.Position.X(420+SpaceInvaders.MESSAGE2_WIDTH);
	message2.Position.Y(350);
	message2.Width(SpaceInvaders.MESSAGE2_WIDTH);
	message2.Height(SpaceInvaders.MESSAGE2_HEIGHT);

	this.SplashDetails.text = titleScreen;
	this.SplashDetails.initTime = 0;
	this.SplashDetails.frameLoops = 0 ;
	this.SplashDetails.message1 = message1;
	this.SplashDetails.message2 = message2;
    };

    this.SplashAnimation = function(cnvs,callback){
	cnvs.SplashUpdate(cnvs);
	if(!SpaceInvaders.bSplashCompleted && !SpaceInvaders.GameStarted){
		setTimeout(function(){ cnvs.SplashAnimation(cnvs,callback);},1000/30);
	}else{
		this.SplashDetails.text.Erase.call(this.SplashDetails.text,this.context);
		this.SplashDetails.invader.Erase.call(this.SplashDetails.invader,this.context);
		this.SplashDetails.message1.Erase.call(this.SplashDetails.message1,this.context);
		this.SplashDetails.message2.Erase.call(this.SplashDetails.message2,this.context);
		callback();
	}
    };
	
    this.SplashUpdate = function(cnvs){
	this.SplashDetails.frameLoops++;
	if(this.SplashDetails.frameLoops>900||SpaceInvaders.GameStarted){
		SpaceInvaders.bSplashCompleted = true;
	}
	if(this.SplashDetails.frameLoops%1==0){
		this.SplashDetails.text._Update.call(this.SplashDetails.text,this.context);
		this.SplashDetails.text._Draw.call(this.SplashDetails.text,this.context);
		this.SplashDetails.message1._Update.call(this.SplashDetails.message1,this.context);
		this.SplashDetails.message1._Draw.call(this.SplashDetails.message1,this.context);
		this.SplashDetails.message2._Update.call(this.SplashDetails.message2,this.context);
		this.SplashDetails.message2._Draw.call(this.SplashDetails.message2,this.context);
		
		this.SplashDetails.invader._Draw.call(this.SplashDetails.invader,this.context);
	}
    };
    this.Update = function(cnvs){
        var i = 0 ;
		if ( bInit ){
			SpaceInvaders.p. _Update.call ( SpaceInvaders.p, SpaceInvaders.MoveState) ;
			if ( SpaceInvaders.p. Collision, this.displayWidth, this.displayHeight ) {
				if ( SpaceInvaders.p. Position.X () + ( SpaceInvaders.PLAYER_WIDTH / 2 ) > ( this.displayWidth - SpaceInvaders.GAME_OFFSET_X - ( SpaceInvaders.PLAYER_WIDTH / 2 )) ){
					//SpaceInvaders.Log.Log ( "Position X is too far right:" +   ( SpaceInvaders.p. Position.X () + ( SpaceInvaders.PLAYER_WIDTH / 2 )).toString() + "," +  ( this.displayWidth - SpaceInvaders.GAME_OFFSET_X - ( SpaceInvaders.PLAYER_WIDTH / 2 )).toString()) ;
					SpaceInvaders.p. Position.X ( this.displayWidth - SpaceInvaders.GAME_OFFSET_X - ( SpaceInvaders.PLAYER_WIDTH  ) ) ;
				}else if ( SpaceInvaders.p. Position.X () - ( SpaceInvaders.PLAYER_WIDTH / 2 ) < SpaceInvaders.GAME_OFFSET_X ){
					SpaceInvaders.p. Position.X ( SpaceInvaders.GAME_OFFSET_X + ( SpaceInvaders.PLAYER_WIDTH ) ) ;
				}
			}
			this.sb._Update.call(this.sb,[] );
			this.ld._Update.call(this.ld,[] );
			if ( this.pm.length > 0  ){
				var removeArray = [];
				for(i=0;i<this.pm.length;i++){
				this.pm[i]._Update.call(this.pm[i]);
				var tmp = this.pm[i].Collision ( this.invaders ) ;
				if ( tmp != null ) {
					tmp.Erase.call(tmp,this.context);
					this.pm[i].Erase.call ( this.pm[i], this.context ) ;
					switch ( tmp.InvaderClass ( ) ){
						case SpaceInvaders.Class1Enemy :
							SpaceInvaders.score += 10;
							this.sb.Score ( this.sb.Score ( )  + 10 );
						break ;
						case SpaceInvaders.Class2Enemy :
							SpaceInvaders.score += 15;
							this.sb.Score ( this.sb.Score ( )  + 15 );
						break ;
						case SpaceInvaders.Class3Enemy :
							SpaceInvaders.score += 20;
							this.sb.Score ( this.sb.Score ( )  + 20 );
						break ;
						case SpaceInvaders.Class4Enemy :
							SpaceInvaders.score += 25;
							this.sb.Score ( this.sb.Score ( )  + 25 );
						break ;
					}
					removeArray.push(i);
				}else{
					if ( this.pm[i].Position.Y ( ) < SpaceInvaders.GAME_OFFSET_Y ){
						removeArray.push(i);
					}
				}
				}
				for(j=removeArray.length-1;j>=0;j--){
					this.pm.splice(removeArray[j],1);
				}
			}
			var hadCollision = false ;
			var destroyed = 0 ;
			for ( i = 0 ; i < SpaceInvaders.ENEMY_COUNT ; i ++ ){
				this.invaders[i]._Update.call(this.invaders[i],null);
				if ( !this.invaders[i].Destroyed() ){
					if ( this.invaders[i].Collision ( this.displayWidth, this.displayHeight ) ){
						//SpaceInvaders.Log.Log ( "Had Collision" ) ;
						hadCollision = true ;
					}
				}else{
					destroyed ++ ;
				}
			}
			if ( destroyed == this.invaders.length ){
				SpaceInvaders.level ++ ;
				this.ld.Level(SpaceInvaders.level);
				this.InitializeGame();
				this.InitBoard ( ) ;
			}else{
				console.log("Destroyed:"+destroyed+" "+this.invaders.length);
			}
			if ( hadCollision ){
				for ( i = 0 ; i < SpaceInvaders.ENEMY_COUNT ; i ++ ){
					this.invaders[i].Vector().X ( this.invaders[i].Vector().X ( ) * -1.20 );
					if ( this.invaders[i].Vector().X ( ) > 5 ){
						this.invaders[i].Vector().X ( 5 ) ;
					}
					if ( this.invaders[i].Vector().X ( ) < -5 ){
						this.invaders[i].Vector().X ( -5 ) ;
					}
					this.invaders[i].Position.Y ( this.invaders[i].Position.Y ( ) + 16 ) ;
				}
			}
			if ( !SpaceInvaders.bGameOver ) {
				this.Paint.call(this,[]);
			}
		}
   };
	
	this.Paint  = function(){
		var i = 0 ;
		if ( bInit ){
			//context.fillRect(0,0,displayWidth,displayHeight);
			this.gb._Draw.call ( this.gb,this.context) ;
			this.sb._Draw.call ( this.sb,this.context) ;
			this.ld._Draw.call ( this.ld, this.context);
			SpaceInvaders.p. _Draw.call ( SpaceInvaders.p, this.context ) ;
			if ( this.pm.length >0 ){
				for(i=0;i<this.pm.length;i++){
					if(!this.pm[i].Destroyed()){
						this.pm[i]._Draw.call (this.pm[i],this.context ) ;				
					}
				}
			}
			for ( i = 0 ; i < SpaceInvaders.ENEMY_COUNT ; i++ ){
				if ( !this.invaders[i].Destroyed() ){
					this.invaders[i]._Draw.call ( this.invaders[i], this.context ) ;
				}
			}
		}else{
			this.context.fillRect(0,0,displayWidth,displayHeight);
		}
	};
	return this;
} ) ;

SpaceInvaders.GameOver = function(){
		SpaceInvaders.bGameOver = true ;
		SpaceInvaders.game.GameOver();
};

SpaceInvaders.KeyUp = function(e){
	e = window.event || e ;
	if ( typeof ( e.keyIdentifier ) != "undefined" ){
		switch ( e.keyIdentifier ){
			case "Left" :
				//if ( SpaceInvaders.MoveState == "Left" ) {
					SpaceInvaders.MoveState = "none" ;
				//}
			break ;
			case "Right" :
				//if ( SpaceInvaders.MoveState == "Right" ) {
					SpaceInvaders.MoveState = "none" ;
				//}
			break ;
			default :
				//SpaceInvaders.Log.Log ( "Unknown Key Up:" + e.keyIdentifier ) ;
		}
	}else{
		switch ( e.keyCode ){
			case 37 :
				SpaceInvaders.MoveState = "none" ;
			break ;
			case 39 :
				SpaceInvaders.MoveState = "none" ;
			break ;
			default :
				//SpaceInvaders.Log.Log ( "Unknown Key Down:" + e.keyCode ) ;
		}
	}
};

SpaceInvaders.KeyDown = function(e){
	e = window.event || e ;
	if ( typeof ( e.keyIdentifier ) != "undefined" ){
		switch ( e.keyIdentifier ){
			case "Left" :
				//SpaceInvaders.Log.Log ( "Move Left" ) ;
				SpaceInvaders.MoveState = "Left" ;
			break ;
			case "Right" :
				//SpaceInvaders.Log.Log ( "Move Right" ) ;
				SpaceInvaders.MoveState = "Right" ;
			break ;
			case "Up":
			
			break;
			case "Down":
			
			break ;
			case "U+0020" :
				if ( SpaceInvaders.GameStarted ){
					SpaceInvaders.game.AddMissle();
				}else{
					console.log("Game Starting");
					SpaceInvaders.GameStarted = true;
				}
			break ;
			default :
				//SpaceInvaders.Log.Log ( "Unknown Key Down:" + e.keyIdentifier ) ;
		}
	}else{
		switch ( e.keyCode ){
			case 37 :
				//SpaceInvaders.Log.Log ( "Move Left" ) ;
				SpaceInvaders.MoveState = "Left" ;
			break ;
			case 39 :
				//SpaceInvaders.Log.Log ( "Move Right" ) ;
				SpaceInvaders.MoveState = "Right" ;
			break ;
			case 32 :
				if ( SpaceInvaders.GameStarted ){
					SpaceInvaders.game.AddMissle();
				}else{
					console.log("Game Starting");
					SpaceInvaders.GameStarted = true;
				}
			break ;
			default :
				SpaceInvaders.Log.Log ( "Unknown Key Down:" + e.keyCode ) ;
		}
	}
};

SpaceInvaders.TouchStart = function(e){
	if(SpaceInvaders.GameStarted){
		var canvs = document.getElementById("canvs");
		var pos = SpaceInvaders.getTouchPosition(canvs,e);
		console.log("Touch Start:["+pos.x+","+pos.y+"]");
		SpaceInvaders.IsTouched = true;
		var mouseEvent = new MouseEvent("mousedown", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvs.dispatchEvent(mouseEvent);
	}
};

SpaceInvaders.TouchEnd = function(e){
	if ( SpaceInvaders.GameStarted ){
		var canvs = document.getElementById("canvs");
		var pos = SpaceInvaders.getTouchPosition(canvs,e);
		console.log("Touch End:["+pos.x+","+pos.y+"]");
		SpaceInvaders.IsTouched = false;
		var mouseEvent = new MouseEvent("mouseup", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		canvs.dispatchEvent(mouseEvent);
	}
};

SpaceInvaders.TouchMove = function(e){
	if ( SpaceInvaders.GameStarted ){
		if ( SpaceInvaders.IsTouched) {
			var canvs = document.getElementById("canvs");
			var pos = SpaceInvaders.getTouchPosition(canvs,e);
			console.log("Touch Move:["+pos.x+","+pos.y+"]");
			var mouseEvent = new MouseEvent("mousemove", {
				clientX: touch.clientX,
				clientY: touch.clientY
			});
			canvs.dispatchEvent(mouseEvent);
		}
	}
};

SpaceInvaders.getTouchPosition = function(canvas,e){
	var rect = canvas.getBoundingClientRect();
	return {
		x: e.touches[0].clientX - rect.left,
		y: e.touches[0].clientY - rect.top
	};
};

SpaceInvaders.CanvasMouseUp = function(e){
	if ( SpaceInvaders.GameStarted){
		var canvs = document.getElementById("canvs");
		var pos = SpaceInvaders.getMousePosition(canvs,e);
		console.log("Mouse Up:["+pos.x+ "," + pos.y+"]");
		SpaceInvaders.IsMouseDown = false;
	}else{
		console.log("Mouse Up Game Not Started");
		SpaceInvaders.GameStarted = true;
	}
};

SpaceInvaders.CanvasMouseDown = function(e){
	if ( SpaceInvaders.GameStarted ){
		var canvs = document.getElementById("canvs");
		var pos = SpaceInvaders.getMousePosition(canvs,e);
		console.log("Mouse Down:["+pos.x+ "," + pos.y+"] Player:["+SpaceInvaders.Player.Position.X()+","+SpaceInvaders.Player.Position.Y());
		SpaceInvaders.IsMouseDown = true;
		if ( pos.x > SpaceInvaders.Player.Position.X() - (SpaceInvaders.Player.Width()/2) && 
			pos.x <SpaceInvaders.Player.Position.X() + (SpaceInvaders.Player.Width()/2) &&
			pos.y > SpaceInvaders.Player.Position.Y() - (SpaceInvaders.Player.Height()/2) &&
			pos.y < SpaceInvaders.Player.Position.Y() + (SpaceInvaders.Player.Height()/2) 
		 )
		{
	
		}
	}else{
		console.log("Mouse Down Game Not Started");
		SpaceInvaders.GameStarted = true;
	}
};

SpaceInvaders.CanvasMouseMove = function(e){
	if ( SpaceInvaders.GameStarted ){
		if(SpaceInvaders.IsMouseDown){
			var canvs = document.getElementById("canvs");
			var pos = SpaceInvaders.getMousePosition(canvs,e);
			console.log("Mouse Move:["+pos.x+ "," + pos.y+"]");
		}
	}
};

SpaceInvaders.getMousePosition = function(canvas,e){
	var rect = canvas.getBoundingClientRect();
	return {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};
}

SpaceInvaders.SetupHandlers = function(){
	document.onkeyup = SpaceInvaders.KeyUp ;
	document.onkeydown = SpaceInvaders.KeyDown ;

};

// Inherit Drawable
SpaceInvaders.inherits ( SpaceInvaders.TitleScreen, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.Message1Screen, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.Message2Screen, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.GameBoard, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.ScoreBoard, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.LevelDisplay, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.Invader, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.Player, SpaceInvaders.Drawable ) ;
SpaceInvaders.inherits ( SpaceInvaders.PlayerMissle, SpaceInvaders.Drawable ) ;

SpaceInvaders.loader.add ( function(){
	SpaceInvaders.GameStarted = false;
	SpaceInvaders.game = new SpaceInvaders.canvas("canvs");
	console.log("Canvas:"+SpaceInvaders.canvas.cvs);
	SpaceInvaders.game.InitializeSplash();
	SpaceInvaders.SetupHandlers();
	SpaceInvaders.game.SplashAnimation(SpaceInvaders.game,function(){
		SpaceInvaders.game.InitializeGame();
 		SpaceInvaders.game.run(SpaceInvaders.game);
	});
});
