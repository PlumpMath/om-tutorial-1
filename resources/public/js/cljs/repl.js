// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27446_27460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27447_27461 = null;
var count__27448_27462 = (0);
var i__27449_27463 = (0);
while(true){
if((i__27449_27463 < count__27448_27462)){
var f_27464 = cljs.core._nth.call(null,chunk__27447_27461,i__27449_27463);
cljs.core.println.call(null,"  ",f_27464);

var G__27465 = seq__27446_27460;
var G__27466 = chunk__27447_27461;
var G__27467 = count__27448_27462;
var G__27468 = (i__27449_27463 + (1));
seq__27446_27460 = G__27465;
chunk__27447_27461 = G__27466;
count__27448_27462 = G__27467;
i__27449_27463 = G__27468;
continue;
} else {
var temp__4425__auto___27469 = cljs.core.seq.call(null,seq__27446_27460);
if(temp__4425__auto___27469){
var seq__27446_27470__$1 = temp__4425__auto___27469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27446_27470__$1)){
var c__17178__auto___27471 = cljs.core.chunk_first.call(null,seq__27446_27470__$1);
var G__27472 = cljs.core.chunk_rest.call(null,seq__27446_27470__$1);
var G__27473 = c__17178__auto___27471;
var G__27474 = cljs.core.count.call(null,c__17178__auto___27471);
var G__27475 = (0);
seq__27446_27460 = G__27472;
chunk__27447_27461 = G__27473;
count__27448_27462 = G__27474;
i__27449_27463 = G__27475;
continue;
} else {
var f_27476 = cljs.core.first.call(null,seq__27446_27470__$1);
cljs.core.println.call(null,"  ",f_27476);

var G__27477 = cljs.core.next.call(null,seq__27446_27470__$1);
var G__27478 = null;
var G__27479 = (0);
var G__27480 = (0);
seq__27446_27460 = G__27477;
chunk__27447_27461 = G__27478;
count__27448_27462 = G__27479;
i__27449_27463 = G__27480;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27481 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16375__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27481);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27481)))?cljs.core.second.call(null,arglists_27481):arglists_27481));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27451 = null;
var count__27452 = (0);
var i__27453 = (0);
while(true){
if((i__27453 < count__27452)){
var vec__27454 = cljs.core._nth.call(null,chunk__27451,i__27453);
var name = cljs.core.nth.call(null,vec__27454,(0),null);
var map__27455 = cljs.core.nth.call(null,vec__27454,(1),null);
var map__27455__$1 = ((((!((map__27455 == null)))?((((map__27455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27455):map__27455);
var doc = cljs.core.get.call(null,map__27455__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27455__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27482 = seq__27450;
var G__27483 = chunk__27451;
var G__27484 = count__27452;
var G__27485 = (i__27453 + (1));
seq__27450 = G__27482;
chunk__27451 = G__27483;
count__27452 = G__27484;
i__27453 = G__27485;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27450);
if(temp__4425__auto__){
var seq__27450__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27450__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27450__$1);
var G__27486 = cljs.core.chunk_rest.call(null,seq__27450__$1);
var G__27487 = c__17178__auto__;
var G__27488 = cljs.core.count.call(null,c__17178__auto__);
var G__27489 = (0);
seq__27450 = G__27486;
chunk__27451 = G__27487;
count__27452 = G__27488;
i__27453 = G__27489;
continue;
} else {
var vec__27457 = cljs.core.first.call(null,seq__27450__$1);
var name = cljs.core.nth.call(null,vec__27457,(0),null);
var map__27458 = cljs.core.nth.call(null,vec__27457,(1),null);
var map__27458__$1 = ((((!((map__27458 == null)))?((((map__27458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27458):map__27458);
var doc = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27490 = cljs.core.next.call(null,seq__27450__$1);
var G__27491 = null;
var G__27492 = (0);
var G__27493 = (0);
seq__27450 = G__27490;
chunk__27451 = G__27491;
count__27452 = G__27492;
i__27453 = G__27493;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map