function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FZZt:function(e,n,t){"use strict";t.r(n),t.d(n,"GameModule",(function(){return w}));var a=t("ofXK"),i=t("pLZG"),r=t("IzEk"),c=t("vkgz"),o=t("fXoL"),s=t("tyNb"),g=t("aDHb"),m=t("Xa2L");function l(e,n){1&e&&o.Lb(0,"img",5)}function f(e,n){1&e&&o.Lb(0,"mat-spinner",6),2&e&&o.dc("diameter",60)}var u,p,h,d=[{path:"",component:(u=function(){function e(n,t){_classCallCheck(this,e),this.route=n,this.gameService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,n=this.route.snapshot.queryParamMap.get("game");this.gameService.fetchGameById(n).pipe(Object(i.a)((function(e){return!!e})),Object(r.a)(1),Object(c.a)((function(n){e.currentGame=n}))).subscribe()}}]),e}(),u.\u0275fac=function(e){return new(e||u)(o.Kb(s.a),o.Kb(g.a))},u.\u0275cmp=o.Eb({type:u,selectors:[["app-game-view"]],decls:6,vars:3,consts:[[1,"game-view-container"],[1,"game-title"],[1,"game-container"],["class","game-placeholder","src","./assets/images/rickroll.gif",4,"ngIf"],["class","game-spinner",3,"diameter",4,"ngIf"],["src","./assets/images/rickroll.gif",1,"game-placeholder"],[1,"game-spinner",3,"diameter"]],template:function(e,n){1&e&&(o.Nb(0,"div",0),o.Nb(1,"h3",1),o.oc(2),o.Mb(),o.Nb(3,"div",2),o.nc(4,l,1,0,"img",3),o.nc(5,f,1,1,"mat-spinner",4),o.Mb(),o.Mb()),2&e&&(o.Ab(2),o.pc(null==n.currentGame?null:n.currentGame.name),o.Ab(2),o.dc("ngIf",n.currentGame),o.Ab(1),o.dc("ngIf",!n.currentGame))},directives:[a.j,m.b],styles:[".game-view-container[_ngcontent-%COMP%]{height:100%;padding:18em 0}@media screen and (max-width:812px){.game-view-container[_ngcontent-%COMP%]{padding:14em 0}}.game-view-container[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]{width:60%;height:60%;background:#000;margin:auto;position:relative}@media screen and (max-width:812px){.game-view-container[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]{width:100%;height:25%;margin:0}}.game-view-container[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]{font-size:2em;font-weight:700;color:#ff8503;margin-left:17em}@media screen and (max-width:812px){.game-view-container[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#ff8503;margin:0 0 0 .2em}}.game-view-container[_ngcontent-%COMP%]   .game-placeholder[_ngcontent-%COMP%]{height:100%;margin:auto;position:absolute;left:0;right:0}.game-view-container[_ngcontent-%COMP%]   .game-spinner[_ngcontent-%COMP%]{width:60px;height:60px;position:absolute;left:0;right:0;margin:auto;top:0;bottom:0}"]}),u)}],b=((h=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:h}),h.\u0275inj=o.Hb({factory:function(e){return new(e||h)},imports:[[s.c.forChild(d)],s.c]}),h),w=((p=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:p}),p.\u0275inj=o.Hb({factory:function(e){return new(e||p)},imports:[[a.b,b,m.a]]}),p)}}]);