(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FZZt:function(e,n,t){"use strict";t.r(n),t.d(n,"GameModule",(function(){return u}));var i=t("ofXK"),a=t("pLZG"),c=t("IzEk"),r=t("vkgz"),o=t("fXoL"),m=t("tyNb"),g=t("aDHb"),s=t("Xa2L");function h(e,n){1&e&&o.Lb(0,"img",5)}function p(e,n){1&e&&o.Lb(0,"mat-spinner",6),2&e&&o.dc("diameter",60)}const d=[{path:"",component:(()=>{class e{constructor(e,n,t){this.route=e,this.gameService=n,this.changeDetectorRef=t}ngOnInit(){this.route.queryParams.subscribe(e=>{this.gameService.fetchGameById(e.game).pipe(Object(a.a)(e=>!!e),Object(c.a)(1),Object(r.a)(e=>{this.currentGame=e,this.changeDetectorRef.markForCheck()})).subscribe()})}}return e.\u0275fac=function(n){return new(n||e)(o.Kb(m.a),o.Kb(g.a),o.Kb(o.h))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-game-view"]],decls:6,vars:3,consts:[[1,"game-view-container"],[1,"game-title"],[1,"game-container"],["class","game-placeholder","src","./assets/images/rickroll.gif",4,"ngIf"],["class","game-spinner",3,"diameter",4,"ngIf"],["src","./assets/images/rickroll.gif",1,"game-placeholder"],[1,"game-spinner",3,"diameter"]],template:function(e,n){1&e&&(o.Nb(0,"div",0),o.Nb(1,"h3",1),o.oc(2),o.Mb(),o.Nb(3,"div",2),o.nc(4,h,1,0,"img",3),o.nc(5,p,1,1,"mat-spinner",4),o.Mb(),o.Mb()),2&e&&(o.Ab(2),o.pc(null==n.currentGame?null:n.currentGame.name),o.Ab(2),o.dc("ngIf",n.currentGame),o.Ab(1),o.dc("ngIf",!n.currentGame))},directives:[i.j,s.b],styles:[".game-view-container[_ngcontent-%COMP%]{height:100%;padding:18em 0}@media screen and (max-width:812px){.game-view-container[_ngcontent-%COMP%]{padding:14em 0;min-height:22em}}.game-view-container[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]{width:60%;height:45em;background:#000;margin:auto;position:relative}@media screen and (max-width:812px){.game-view-container[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]{width:100%;height:15em;margin:0}}.game-view-container[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]{font-size:2em;font-weight:700;color:#ff8503;margin-left:17em}@media screen and (max-width:812px){.game-view-container[_ngcontent-%COMP%]   .game-title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:#ff8503;margin:0 0 0 .2em}}.game-view-container[_ngcontent-%COMP%]   .game-placeholder[_ngcontent-%COMP%]{height:100%;margin:auto;position:absolute;left:0;right:0}.game-view-container[_ngcontent-%COMP%]   .game-spinner[_ngcontent-%COMP%]{width:60px;height:60px;position:absolute;left:0;right:0;margin:auto;top:0;bottom:0}"],changeDetection:0}),e})()}];let l=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(n){return new(n||e)},imports:[[m.c.forChild(d)],m.c]}),e})(),u=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(n){return new(n||e)},imports:[[i.b,l,s.a]]}),e})()}}]);