// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16375__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16375__auto__){
return or__16375__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16375__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27498_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27498_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27503 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27504 = null;
var count__27505 = (0);
var i__27506 = (0);
while(true){
if((i__27506 < count__27505)){
var n = cljs.core._nth.call(null,chunk__27504,i__27506);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27507 = seq__27503;
var G__27508 = chunk__27504;
var G__27509 = count__27505;
var G__27510 = (i__27506 + (1));
seq__27503 = G__27507;
chunk__27504 = G__27508;
count__27505 = G__27509;
i__27506 = G__27510;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27503);
if(temp__4425__auto__){
var seq__27503__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27503__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27503__$1);
var G__27511 = cljs.core.chunk_rest.call(null,seq__27503__$1);
var G__27512 = c__17178__auto__;
var G__27513 = cljs.core.count.call(null,c__17178__auto__);
var G__27514 = (0);
seq__27503 = G__27511;
chunk__27504 = G__27512;
count__27505 = G__27513;
i__27506 = G__27514;
continue;
} else {
var n = cljs.core.first.call(null,seq__27503__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27515 = cljs.core.next.call(null,seq__27503__$1);
var G__27516 = null;
var G__27517 = (0);
var G__27518 = (0);
seq__27503 = G__27515;
chunk__27504 = G__27516;
count__27505 = G__27517;
i__27506 = G__27518;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27557_27564 = cljs.core.seq.call(null,deps);
var chunk__27558_27565 = null;
var count__27559_27566 = (0);
var i__27560_27567 = (0);
while(true){
if((i__27560_27567 < count__27559_27566)){
var dep_27568 = cljs.core._nth.call(null,chunk__27558_27565,i__27560_27567);
topo_sort_helper_STAR_.call(null,dep_27568,(depth + (1)),state);

var G__27569 = seq__27557_27564;
var G__27570 = chunk__27558_27565;
var G__27571 = count__27559_27566;
var G__27572 = (i__27560_27567 + (1));
seq__27557_27564 = G__27569;
chunk__27558_27565 = G__27570;
count__27559_27566 = G__27571;
i__27560_27567 = G__27572;
continue;
} else {
var temp__4425__auto___27573 = cljs.core.seq.call(null,seq__27557_27564);
if(temp__4425__auto___27573){
var seq__27557_27574__$1 = temp__4425__auto___27573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27557_27574__$1)){
var c__17178__auto___27575 = cljs.core.chunk_first.call(null,seq__27557_27574__$1);
var G__27576 = cljs.core.chunk_rest.call(null,seq__27557_27574__$1);
var G__27577 = c__17178__auto___27575;
var G__27578 = cljs.core.count.call(null,c__17178__auto___27575);
var G__27579 = (0);
seq__27557_27564 = G__27576;
chunk__27558_27565 = G__27577;
count__27559_27566 = G__27578;
i__27560_27567 = G__27579;
continue;
} else {
var dep_27580 = cljs.core.first.call(null,seq__27557_27574__$1);
topo_sort_helper_STAR_.call(null,dep_27580,(depth + (1)),state);

var G__27581 = cljs.core.next.call(null,seq__27557_27574__$1);
var G__27582 = null;
var G__27583 = (0);
var G__27584 = (0);
seq__27557_27564 = G__27581;
chunk__27558_27565 = G__27582;
count__27559_27566 = G__27583;
i__27560_27567 = G__27584;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27561){
var vec__27563 = p__27561;
var x = cljs.core.nth.call(null,vec__27563,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27563,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27563,x,xs,get_deps__$1){
return (function (p1__27519_SHARP_){
return clojure.set.difference.call(null,p1__27519_SHARP_,x);
});})(vec__27563,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27597 = cljs.core.seq.call(null,provides);
var chunk__27598 = null;
var count__27599 = (0);
var i__27600 = (0);
while(true){
if((i__27600 < count__27599)){
var prov = cljs.core._nth.call(null,chunk__27598,i__27600);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27601_27609 = cljs.core.seq.call(null,requires);
var chunk__27602_27610 = null;
var count__27603_27611 = (0);
var i__27604_27612 = (0);
while(true){
if((i__27604_27612 < count__27603_27611)){
var req_27613 = cljs.core._nth.call(null,chunk__27602_27610,i__27604_27612);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27613,prov);

var G__27614 = seq__27601_27609;
var G__27615 = chunk__27602_27610;
var G__27616 = count__27603_27611;
var G__27617 = (i__27604_27612 + (1));
seq__27601_27609 = G__27614;
chunk__27602_27610 = G__27615;
count__27603_27611 = G__27616;
i__27604_27612 = G__27617;
continue;
} else {
var temp__4425__auto___27618 = cljs.core.seq.call(null,seq__27601_27609);
if(temp__4425__auto___27618){
var seq__27601_27619__$1 = temp__4425__auto___27618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27601_27619__$1)){
var c__17178__auto___27620 = cljs.core.chunk_first.call(null,seq__27601_27619__$1);
var G__27621 = cljs.core.chunk_rest.call(null,seq__27601_27619__$1);
var G__27622 = c__17178__auto___27620;
var G__27623 = cljs.core.count.call(null,c__17178__auto___27620);
var G__27624 = (0);
seq__27601_27609 = G__27621;
chunk__27602_27610 = G__27622;
count__27603_27611 = G__27623;
i__27604_27612 = G__27624;
continue;
} else {
var req_27625 = cljs.core.first.call(null,seq__27601_27619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27625,prov);

var G__27626 = cljs.core.next.call(null,seq__27601_27619__$1);
var G__27627 = null;
var G__27628 = (0);
var G__27629 = (0);
seq__27601_27609 = G__27626;
chunk__27602_27610 = G__27627;
count__27603_27611 = G__27628;
i__27604_27612 = G__27629;
continue;
}
} else {
}
}
break;
}

var G__27630 = seq__27597;
var G__27631 = chunk__27598;
var G__27632 = count__27599;
var G__27633 = (i__27600 + (1));
seq__27597 = G__27630;
chunk__27598 = G__27631;
count__27599 = G__27632;
i__27600 = G__27633;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27597);
if(temp__4425__auto__){
var seq__27597__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27597__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27597__$1);
var G__27634 = cljs.core.chunk_rest.call(null,seq__27597__$1);
var G__27635 = c__17178__auto__;
var G__27636 = cljs.core.count.call(null,c__17178__auto__);
var G__27637 = (0);
seq__27597 = G__27634;
chunk__27598 = G__27635;
count__27599 = G__27636;
i__27600 = G__27637;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27597__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27605_27638 = cljs.core.seq.call(null,requires);
var chunk__27606_27639 = null;
var count__27607_27640 = (0);
var i__27608_27641 = (0);
while(true){
if((i__27608_27641 < count__27607_27640)){
var req_27642 = cljs.core._nth.call(null,chunk__27606_27639,i__27608_27641);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27642,prov);

var G__27643 = seq__27605_27638;
var G__27644 = chunk__27606_27639;
var G__27645 = count__27607_27640;
var G__27646 = (i__27608_27641 + (1));
seq__27605_27638 = G__27643;
chunk__27606_27639 = G__27644;
count__27607_27640 = G__27645;
i__27608_27641 = G__27646;
continue;
} else {
var temp__4425__auto___27647__$1 = cljs.core.seq.call(null,seq__27605_27638);
if(temp__4425__auto___27647__$1){
var seq__27605_27648__$1 = temp__4425__auto___27647__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27605_27648__$1)){
var c__17178__auto___27649 = cljs.core.chunk_first.call(null,seq__27605_27648__$1);
var G__27650 = cljs.core.chunk_rest.call(null,seq__27605_27648__$1);
var G__27651 = c__17178__auto___27649;
var G__27652 = cljs.core.count.call(null,c__17178__auto___27649);
var G__27653 = (0);
seq__27605_27638 = G__27650;
chunk__27606_27639 = G__27651;
count__27607_27640 = G__27652;
i__27608_27641 = G__27653;
continue;
} else {
var req_27654 = cljs.core.first.call(null,seq__27605_27648__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27654,prov);

var G__27655 = cljs.core.next.call(null,seq__27605_27648__$1);
var G__27656 = null;
var G__27657 = (0);
var G__27658 = (0);
seq__27605_27638 = G__27655;
chunk__27606_27639 = G__27656;
count__27607_27640 = G__27657;
i__27608_27641 = G__27658;
continue;
}
} else {
}
}
break;
}

var G__27659 = cljs.core.next.call(null,seq__27597__$1);
var G__27660 = null;
var G__27661 = (0);
var G__27662 = (0);
seq__27597 = G__27659;
chunk__27598 = G__27660;
count__27599 = G__27661;
i__27600 = G__27662;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27667_27671 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27668_27672 = null;
var count__27669_27673 = (0);
var i__27670_27674 = (0);
while(true){
if((i__27670_27674 < count__27669_27673)){
var ns_27675 = cljs.core._nth.call(null,chunk__27668_27672,i__27670_27674);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27675);

var G__27676 = seq__27667_27671;
var G__27677 = chunk__27668_27672;
var G__27678 = count__27669_27673;
var G__27679 = (i__27670_27674 + (1));
seq__27667_27671 = G__27676;
chunk__27668_27672 = G__27677;
count__27669_27673 = G__27678;
i__27670_27674 = G__27679;
continue;
} else {
var temp__4425__auto___27680 = cljs.core.seq.call(null,seq__27667_27671);
if(temp__4425__auto___27680){
var seq__27667_27681__$1 = temp__4425__auto___27680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27667_27681__$1)){
var c__17178__auto___27682 = cljs.core.chunk_first.call(null,seq__27667_27681__$1);
var G__27683 = cljs.core.chunk_rest.call(null,seq__27667_27681__$1);
var G__27684 = c__17178__auto___27682;
var G__27685 = cljs.core.count.call(null,c__17178__auto___27682);
var G__27686 = (0);
seq__27667_27671 = G__27683;
chunk__27668_27672 = G__27684;
count__27669_27673 = G__27685;
i__27670_27674 = G__27686;
continue;
} else {
var ns_27687 = cljs.core.first.call(null,seq__27667_27681__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27687);

var G__27688 = cljs.core.next.call(null,seq__27667_27681__$1);
var G__27689 = null;
var G__27690 = (0);
var G__27691 = (0);
seq__27667_27671 = G__27688;
chunk__27668_27672 = G__27689;
count__27669_27673 = G__27690;
i__27670_27674 = G__27691;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16375__auto__ = goog.require__;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27692__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27693__i = 0, G__27693__a = new Array(arguments.length -  0);
while (G__27693__i < G__27693__a.length) {G__27693__a[G__27693__i] = arguments[G__27693__i + 0]; ++G__27693__i;}
  args = new cljs.core.IndexedSeq(G__27693__a,0);
} 
return G__27692__delegate.call(this,args);};
G__27692.cljs$lang$maxFixedArity = 0;
G__27692.cljs$lang$applyTo = (function (arglist__27694){
var args = cljs.core.seq(arglist__27694);
return G__27692__delegate(args);
});
G__27692.cljs$core$IFn$_invoke$arity$variadic = G__27692__delegate;
return G__27692;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27695 = cljs.core._EQ_;
var expr__27696 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27695.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27696))){
return ((function (pred__27695,expr__27696){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27698){if((e27698 instanceof Error)){
var e = e27698;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27698;

}
}})());
});
;})(pred__27695,expr__27696))
} else {
if(cljs.core.truth_(pred__27695.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27696))){
return ((function (pred__27695,expr__27696){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27695,expr__27696){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27695,expr__27696))
);

return deferred.addErrback(((function (deferred,pred__27695,expr__27696){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27695,expr__27696))
);
});
;})(pred__27695,expr__27696))
} else {
return ((function (pred__27695,expr__27696){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27695,expr__27696))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27699,callback){
var map__27702 = p__27699;
var map__27702__$1 = ((((!((map__27702 == null)))?((((map__27702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27702):map__27702);
var file_msg = map__27702__$1;
var request_url = cljs.core.get.call(null,map__27702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27702,map__27702__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27702,map__27702__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__){
return (function (state_27726){
var state_val_27727 = (state_27726[(1)]);
if((state_val_27727 === (7))){
var inst_27722 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
var statearr_27728_27748 = state_27726__$1;
(statearr_27728_27748[(2)] = inst_27722);

(statearr_27728_27748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (1))){
var state_27726__$1 = state_27726;
var statearr_27729_27749 = state_27726__$1;
(statearr_27729_27749[(2)] = null);

(statearr_27729_27749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (4))){
var inst_27706 = (state_27726[(7)]);
var inst_27706__$1 = (state_27726[(2)]);
var state_27726__$1 = (function (){var statearr_27730 = state_27726;
(statearr_27730[(7)] = inst_27706__$1);

return statearr_27730;
})();
if(cljs.core.truth_(inst_27706__$1)){
var statearr_27731_27750 = state_27726__$1;
(statearr_27731_27750[(1)] = (5));

} else {
var statearr_27732_27751 = state_27726__$1;
(statearr_27732_27751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (6))){
var state_27726__$1 = state_27726;
var statearr_27733_27752 = state_27726__$1;
(statearr_27733_27752[(2)] = null);

(statearr_27733_27752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (3))){
var inst_27724 = (state_27726[(2)]);
var state_27726__$1 = state_27726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27726__$1,inst_27724);
} else {
if((state_val_27727 === (2))){
var state_27726__$1 = state_27726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27726__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27727 === (11))){
var inst_27718 = (state_27726[(2)]);
var state_27726__$1 = (function (){var statearr_27734 = state_27726;
(statearr_27734[(8)] = inst_27718);

return statearr_27734;
})();
var statearr_27735_27753 = state_27726__$1;
(statearr_27735_27753[(2)] = null);

(statearr_27735_27753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (9))){
var inst_27710 = (state_27726[(9)]);
var inst_27712 = (state_27726[(10)]);
var inst_27714 = inst_27712.call(null,inst_27710);
var state_27726__$1 = state_27726;
var statearr_27736_27754 = state_27726__$1;
(statearr_27736_27754[(2)] = inst_27714);

(statearr_27736_27754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (5))){
var inst_27706 = (state_27726[(7)]);
var inst_27708 = figwheel.client.file_reloading.blocking_load.call(null,inst_27706);
var state_27726__$1 = state_27726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27726__$1,(8),inst_27708);
} else {
if((state_val_27727 === (10))){
var inst_27710 = (state_27726[(9)]);
var inst_27716 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27710);
var state_27726__$1 = state_27726;
var statearr_27737_27755 = state_27726__$1;
(statearr_27737_27755[(2)] = inst_27716);

(statearr_27737_27755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27727 === (8))){
var inst_27706 = (state_27726[(7)]);
var inst_27712 = (state_27726[(10)]);
var inst_27710 = (state_27726[(2)]);
var inst_27711 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27712__$1 = cljs.core.get.call(null,inst_27711,inst_27706);
var state_27726__$1 = (function (){var statearr_27738 = state_27726;
(statearr_27738[(9)] = inst_27710);

(statearr_27738[(10)] = inst_27712__$1);

return statearr_27738;
})();
if(cljs.core.truth_(inst_27712__$1)){
var statearr_27739_27756 = state_27726__$1;
(statearr_27739_27756[(1)] = (9));

} else {
var statearr_27740_27757 = state_27726__$1;
(statearr_27740_27757[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20959__auto__))
;
return ((function (switch__20894__auto__,c__20959__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20895__auto__ = null;
var figwheel$client$file_reloading$state_machine__20895__auto____0 = (function (){
var statearr_27744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27744[(0)] = figwheel$client$file_reloading$state_machine__20895__auto__);

(statearr_27744[(1)] = (1));

return statearr_27744;
});
var figwheel$client$file_reloading$state_machine__20895__auto____1 = (function (state_27726){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_27726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e27745){if((e27745 instanceof Object)){
var ex__20898__auto__ = e27745;
var statearr_27746_27758 = state_27726;
(statearr_27746_27758[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27759 = state_27726;
state_27726 = G__27759;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20895__auto__ = function(state_27726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20895__auto____1.call(this,state_27726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20895__auto____0;
figwheel$client$file_reloading$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20895__auto____1;
return figwheel$client$file_reloading$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__))
})();
var state__20961__auto__ = (function (){var statearr_27747 = f__20960__auto__.call(null);
(statearr_27747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_27747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__))
);

return c__20959__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27760,callback){
var map__27763 = p__27760;
var map__27763__$1 = ((((!((map__27763 == null)))?((((map__27763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27763):map__27763);
var file_msg = map__27763__$1;
var namespace = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27763,map__27763__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27763,map__27763__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27765){
var map__27768 = p__27765;
var map__27768__$1 = ((((!((map__27768 == null)))?((((map__27768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27768):map__27768);
var file_msg = map__27768__$1;
var namespace = cljs.core.get.call(null,map__27768__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16363__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16363__auto__){
var or__16375__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16363__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27770,callback){
var map__27773 = p__27770;
var map__27773__$1 = ((((!((map__27773 == null)))?((((map__27773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27773):map__27773);
var file_msg = map__27773__$1;
var request_url = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20959__auto___27861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___27861,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___27861,out){
return (function (state_27843){
var state_val_27844 = (state_27843[(1)]);
if((state_val_27844 === (1))){
var inst_27821 = cljs.core.nth.call(null,files,(0),null);
var inst_27822 = cljs.core.nthnext.call(null,files,(1));
var inst_27823 = files;
var state_27843__$1 = (function (){var statearr_27845 = state_27843;
(statearr_27845[(7)] = inst_27823);

(statearr_27845[(8)] = inst_27821);

(statearr_27845[(9)] = inst_27822);

return statearr_27845;
})();
var statearr_27846_27862 = state_27843__$1;
(statearr_27846_27862[(2)] = null);

(statearr_27846_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (2))){
var inst_27826 = (state_27843[(10)]);
var inst_27823 = (state_27843[(7)]);
var inst_27826__$1 = cljs.core.nth.call(null,inst_27823,(0),null);
var inst_27827 = cljs.core.nthnext.call(null,inst_27823,(1));
var inst_27828 = (inst_27826__$1 == null);
var inst_27829 = cljs.core.not.call(null,inst_27828);
var state_27843__$1 = (function (){var statearr_27847 = state_27843;
(statearr_27847[(10)] = inst_27826__$1);

(statearr_27847[(11)] = inst_27827);

return statearr_27847;
})();
if(inst_27829){
var statearr_27848_27863 = state_27843__$1;
(statearr_27848_27863[(1)] = (4));

} else {
var statearr_27849_27864 = state_27843__$1;
(statearr_27849_27864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (3))){
var inst_27841 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27843__$1,inst_27841);
} else {
if((state_val_27844 === (4))){
var inst_27826 = (state_27843[(10)]);
var inst_27831 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27826);
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27843__$1,(7),inst_27831);
} else {
if((state_val_27844 === (5))){
var inst_27837 = cljs.core.async.close_BANG_.call(null,out);
var state_27843__$1 = state_27843;
var statearr_27850_27865 = state_27843__$1;
(statearr_27850_27865[(2)] = inst_27837);

(statearr_27850_27865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (6))){
var inst_27839 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27851_27866 = state_27843__$1;
(statearr_27851_27866[(2)] = inst_27839);

(statearr_27851_27866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (7))){
var inst_27827 = (state_27843[(11)]);
var inst_27833 = (state_27843[(2)]);
var inst_27834 = cljs.core.async.put_BANG_.call(null,out,inst_27833);
var inst_27823 = inst_27827;
var state_27843__$1 = (function (){var statearr_27852 = state_27843;
(statearr_27852[(12)] = inst_27834);

(statearr_27852[(7)] = inst_27823);

return statearr_27852;
})();
var statearr_27853_27867 = state_27843__$1;
(statearr_27853_27867[(2)] = null);

(statearr_27853_27867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20959__auto___27861,out))
;
return ((function (switch__20894__auto__,c__20959__auto___27861,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto____0 = (function (){
var statearr_27857 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27857[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto__);

(statearr_27857[(1)] = (1));

return statearr_27857;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto____1 = (function (state_27843){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_27843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object)){
var ex__20898__auto__ = e27858;
var statearr_27859_27868 = state_27843;
(statearr_27859_27868[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27869 = state_27843;
state_27843 = G__27869;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto__ = function(state_27843){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto____1.call(this,state_27843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___27861,out))
})();
var state__20961__auto__ = (function (){var statearr_27860 = f__20960__auto__.call(null);
(statearr_27860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___27861);

return statearr_27860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___27861,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27870,opts){
var map__27874 = p__27870;
var map__27874__$1 = ((((!((map__27874 == null)))?((((map__27874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27874):map__27874);
var eval_body__$1 = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16363__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16363__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16363__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27876){var e = e27876;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27877_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27877_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27882){
var vec__27883 = p__27882;
var k = cljs.core.nth.call(null,vec__27883,(0),null);
var v = cljs.core.nth.call(null,vec__27883,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27884){
var vec__27885 = p__27884;
var k = cljs.core.nth.call(null,vec__27885,(0),null);
var v = cljs.core.nth.call(null,vec__27885,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27889,p__27890){
var map__28137 = p__27889;
var map__28137__$1 = ((((!((map__28137 == null)))?((((map__28137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28137):map__28137);
var opts = map__28137__$1;
var before_jsload = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28138 = p__27890;
var map__28138__$1 = ((((!((map__28138 == null)))?((((map__28138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28138):map__28138);
var msg = map__28138__$1;
var files = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28291){
var state_val_28292 = (state_28291[(1)]);
if((state_val_28292 === (7))){
var inst_28154 = (state_28291[(7)]);
var inst_28152 = (state_28291[(8)]);
var inst_28153 = (state_28291[(9)]);
var inst_28155 = (state_28291[(10)]);
var inst_28160 = cljs.core._nth.call(null,inst_28153,inst_28155);
var inst_28161 = figwheel.client.file_reloading.eval_body.call(null,inst_28160,opts);
var inst_28162 = (inst_28155 + (1));
var tmp28293 = inst_28154;
var tmp28294 = inst_28152;
var tmp28295 = inst_28153;
var inst_28152__$1 = tmp28294;
var inst_28153__$1 = tmp28295;
var inst_28154__$1 = tmp28293;
var inst_28155__$1 = inst_28162;
var state_28291__$1 = (function (){var statearr_28296 = state_28291;
(statearr_28296[(7)] = inst_28154__$1);

(statearr_28296[(8)] = inst_28152__$1);

(statearr_28296[(9)] = inst_28153__$1);

(statearr_28296[(10)] = inst_28155__$1);

(statearr_28296[(11)] = inst_28161);

return statearr_28296;
})();
var statearr_28297_28383 = state_28291__$1;
(statearr_28297_28383[(2)] = null);

(statearr_28297_28383[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (20))){
var inst_28195 = (state_28291[(12)]);
var inst_28203 = figwheel.client.file_reloading.sort_files.call(null,inst_28195);
var state_28291__$1 = state_28291;
var statearr_28298_28384 = state_28291__$1;
(statearr_28298_28384[(2)] = inst_28203);

(statearr_28298_28384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (27))){
var state_28291__$1 = state_28291;
var statearr_28299_28385 = state_28291__$1;
(statearr_28299_28385[(2)] = null);

(statearr_28299_28385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (1))){
var inst_28144 = (state_28291[(13)]);
var inst_28141 = before_jsload.call(null,files);
var inst_28142 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28143 = (function (){return ((function (inst_28144,inst_28141,inst_28142,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27886_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27886_SHARP_);
});
;})(inst_28144,inst_28141,inst_28142,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28144__$1 = cljs.core.filter.call(null,inst_28143,files);
var inst_28145 = cljs.core.not_empty.call(null,inst_28144__$1);
var state_28291__$1 = (function (){var statearr_28300 = state_28291;
(statearr_28300[(14)] = inst_28141);

(statearr_28300[(13)] = inst_28144__$1);

(statearr_28300[(15)] = inst_28142);

return statearr_28300;
})();
if(cljs.core.truth_(inst_28145)){
var statearr_28301_28386 = state_28291__$1;
(statearr_28301_28386[(1)] = (2));

} else {
var statearr_28302_28387 = state_28291__$1;
(statearr_28302_28387[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (24))){
var state_28291__$1 = state_28291;
var statearr_28303_28388 = state_28291__$1;
(statearr_28303_28388[(2)] = null);

(statearr_28303_28388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (39))){
var inst_28245 = (state_28291[(16)]);
var state_28291__$1 = state_28291;
var statearr_28304_28389 = state_28291__$1;
(statearr_28304_28389[(2)] = inst_28245);

(statearr_28304_28389[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (46))){
var inst_28286 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28305_28390 = state_28291__$1;
(statearr_28305_28390[(2)] = inst_28286);

(statearr_28305_28390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (4))){
var inst_28189 = (state_28291[(2)]);
var inst_28190 = cljs.core.List.EMPTY;
var inst_28191 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28190);
var inst_28192 = (function (){return ((function (inst_28189,inst_28190,inst_28191,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27887_SHARP_){
var and__16363__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27887_SHARP_);
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27887_SHARP_));
} else {
return and__16363__auto__;
}
});
;})(inst_28189,inst_28190,inst_28191,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28193 = cljs.core.filter.call(null,inst_28192,files);
var inst_28194 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28195 = cljs.core.concat.call(null,inst_28193,inst_28194);
var state_28291__$1 = (function (){var statearr_28306 = state_28291;
(statearr_28306[(17)] = inst_28189);

(statearr_28306[(18)] = inst_28191);

(statearr_28306[(12)] = inst_28195);

return statearr_28306;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28307_28391 = state_28291__$1;
(statearr_28307_28391[(1)] = (16));

} else {
var statearr_28308_28392 = state_28291__$1;
(statearr_28308_28392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (15))){
var inst_28179 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28309_28393 = state_28291__$1;
(statearr_28309_28393[(2)] = inst_28179);

(statearr_28309_28393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (21))){
var inst_28205 = (state_28291[(19)]);
var inst_28205__$1 = (state_28291[(2)]);
var inst_28206 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28205__$1);
var state_28291__$1 = (function (){var statearr_28310 = state_28291;
(statearr_28310[(19)] = inst_28205__$1);

return statearr_28310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28291__$1,(22),inst_28206);
} else {
if((state_val_28292 === (31))){
var inst_28289 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28291__$1,inst_28289);
} else {
if((state_val_28292 === (32))){
var inst_28245 = (state_28291[(16)]);
var inst_28250 = inst_28245.cljs$lang$protocol_mask$partition0$;
var inst_28251 = (inst_28250 & (64));
var inst_28252 = inst_28245.cljs$core$ISeq$;
var inst_28253 = (inst_28251) || (inst_28252);
var state_28291__$1 = state_28291;
if(cljs.core.truth_(inst_28253)){
var statearr_28311_28394 = state_28291__$1;
(statearr_28311_28394[(1)] = (35));

} else {
var statearr_28312_28395 = state_28291__$1;
(statearr_28312_28395[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (40))){
var inst_28266 = (state_28291[(20)]);
var inst_28265 = (state_28291[(2)]);
var inst_28266__$1 = cljs.core.get.call(null,inst_28265,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28267 = cljs.core.get.call(null,inst_28265,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28268 = cljs.core.not_empty.call(null,inst_28266__$1);
var state_28291__$1 = (function (){var statearr_28313 = state_28291;
(statearr_28313[(21)] = inst_28267);

(statearr_28313[(20)] = inst_28266__$1);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28268)){
var statearr_28314_28396 = state_28291__$1;
(statearr_28314_28396[(1)] = (41));

} else {
var statearr_28315_28397 = state_28291__$1;
(statearr_28315_28397[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (33))){
var state_28291__$1 = state_28291;
var statearr_28316_28398 = state_28291__$1;
(statearr_28316_28398[(2)] = false);

(statearr_28316_28398[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (13))){
var inst_28165 = (state_28291[(22)]);
var inst_28169 = cljs.core.chunk_first.call(null,inst_28165);
var inst_28170 = cljs.core.chunk_rest.call(null,inst_28165);
var inst_28171 = cljs.core.count.call(null,inst_28169);
var inst_28152 = inst_28170;
var inst_28153 = inst_28169;
var inst_28154 = inst_28171;
var inst_28155 = (0);
var state_28291__$1 = (function (){var statearr_28317 = state_28291;
(statearr_28317[(7)] = inst_28154);

(statearr_28317[(8)] = inst_28152);

(statearr_28317[(9)] = inst_28153);

(statearr_28317[(10)] = inst_28155);

return statearr_28317;
})();
var statearr_28318_28399 = state_28291__$1;
(statearr_28318_28399[(2)] = null);

(statearr_28318_28399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (22))){
var inst_28213 = (state_28291[(23)]);
var inst_28209 = (state_28291[(24)]);
var inst_28205 = (state_28291[(19)]);
var inst_28208 = (state_28291[(25)]);
var inst_28208__$1 = (state_28291[(2)]);
var inst_28209__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28208__$1);
var inst_28210 = (function (){var all_files = inst_28205;
var res_SINGLEQUOTE_ = inst_28208__$1;
var res = inst_28209__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28213,inst_28209,inst_28205,inst_28208,inst_28208__$1,inst_28209__$1,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27888_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27888_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28213,inst_28209,inst_28205,inst_28208,inst_28208__$1,inst_28209__$1,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28211 = cljs.core.filter.call(null,inst_28210,inst_28208__$1);
var inst_28212 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28213__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28212);
var inst_28214 = cljs.core.not_empty.call(null,inst_28213__$1);
var state_28291__$1 = (function (){var statearr_28319 = state_28291;
(statearr_28319[(23)] = inst_28213__$1);

(statearr_28319[(24)] = inst_28209__$1);

(statearr_28319[(26)] = inst_28211);

(statearr_28319[(25)] = inst_28208__$1);

return statearr_28319;
})();
if(cljs.core.truth_(inst_28214)){
var statearr_28320_28400 = state_28291__$1;
(statearr_28320_28400[(1)] = (23));

} else {
var statearr_28321_28401 = state_28291__$1;
(statearr_28321_28401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (36))){
var state_28291__$1 = state_28291;
var statearr_28322_28402 = state_28291__$1;
(statearr_28322_28402[(2)] = false);

(statearr_28322_28402[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (41))){
var inst_28266 = (state_28291[(20)]);
var inst_28270 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28271 = cljs.core.map.call(null,inst_28270,inst_28266);
var inst_28272 = cljs.core.pr_str.call(null,inst_28271);
var inst_28273 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28272)].join('');
var inst_28274 = figwheel.client.utils.log.call(null,inst_28273);
var state_28291__$1 = state_28291;
var statearr_28323_28403 = state_28291__$1;
(statearr_28323_28403[(2)] = inst_28274);

(statearr_28323_28403[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (43))){
var inst_28267 = (state_28291[(21)]);
var inst_28277 = (state_28291[(2)]);
var inst_28278 = cljs.core.not_empty.call(null,inst_28267);
var state_28291__$1 = (function (){var statearr_28324 = state_28291;
(statearr_28324[(27)] = inst_28277);

return statearr_28324;
})();
if(cljs.core.truth_(inst_28278)){
var statearr_28325_28404 = state_28291__$1;
(statearr_28325_28404[(1)] = (44));

} else {
var statearr_28326_28405 = state_28291__$1;
(statearr_28326_28405[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (29))){
var inst_28213 = (state_28291[(23)]);
var inst_28209 = (state_28291[(24)]);
var inst_28205 = (state_28291[(19)]);
var inst_28245 = (state_28291[(16)]);
var inst_28211 = (state_28291[(26)]);
var inst_28208 = (state_28291[(25)]);
var inst_28241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28244 = (function (){var all_files = inst_28205;
var res_SINGLEQUOTE_ = inst_28208;
var res = inst_28209;
var files_not_loaded = inst_28211;
var dependencies_that_loaded = inst_28213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28245,inst_28211,inst_28208,inst_28241,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28243){
var map__28327 = p__28243;
var map__28327__$1 = ((((!((map__28327 == null)))?((((map__28327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28327):map__28327);
var namespace = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28245,inst_28211,inst_28208,inst_28241,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28245__$1 = cljs.core.group_by.call(null,inst_28244,inst_28211);
var inst_28247 = (inst_28245__$1 == null);
var inst_28248 = cljs.core.not.call(null,inst_28247);
var state_28291__$1 = (function (){var statearr_28329 = state_28291;
(statearr_28329[(28)] = inst_28241);

(statearr_28329[(16)] = inst_28245__$1);

return statearr_28329;
})();
if(inst_28248){
var statearr_28330_28406 = state_28291__$1;
(statearr_28330_28406[(1)] = (32));

} else {
var statearr_28331_28407 = state_28291__$1;
(statearr_28331_28407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (44))){
var inst_28267 = (state_28291[(21)]);
var inst_28280 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28267);
var inst_28281 = cljs.core.pr_str.call(null,inst_28280);
var inst_28282 = [cljs.core.str("not required: "),cljs.core.str(inst_28281)].join('');
var inst_28283 = figwheel.client.utils.log.call(null,inst_28282);
var state_28291__$1 = state_28291;
var statearr_28332_28408 = state_28291__$1;
(statearr_28332_28408[(2)] = inst_28283);

(statearr_28332_28408[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (6))){
var inst_28186 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28333_28409 = state_28291__$1;
(statearr_28333_28409[(2)] = inst_28186);

(statearr_28333_28409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (28))){
var inst_28211 = (state_28291[(26)]);
var inst_28238 = (state_28291[(2)]);
var inst_28239 = cljs.core.not_empty.call(null,inst_28211);
var state_28291__$1 = (function (){var statearr_28334 = state_28291;
(statearr_28334[(29)] = inst_28238);

return statearr_28334;
})();
if(cljs.core.truth_(inst_28239)){
var statearr_28335_28410 = state_28291__$1;
(statearr_28335_28410[(1)] = (29));

} else {
var statearr_28336_28411 = state_28291__$1;
(statearr_28336_28411[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (25))){
var inst_28209 = (state_28291[(24)]);
var inst_28225 = (state_28291[(2)]);
var inst_28226 = cljs.core.not_empty.call(null,inst_28209);
var state_28291__$1 = (function (){var statearr_28337 = state_28291;
(statearr_28337[(30)] = inst_28225);

return statearr_28337;
})();
if(cljs.core.truth_(inst_28226)){
var statearr_28338_28412 = state_28291__$1;
(statearr_28338_28412[(1)] = (26));

} else {
var statearr_28339_28413 = state_28291__$1;
(statearr_28339_28413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (34))){
var inst_28260 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
if(cljs.core.truth_(inst_28260)){
var statearr_28340_28414 = state_28291__$1;
(statearr_28340_28414[(1)] = (38));

} else {
var statearr_28341_28415 = state_28291__$1;
(statearr_28341_28415[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (17))){
var state_28291__$1 = state_28291;
var statearr_28342_28416 = state_28291__$1;
(statearr_28342_28416[(2)] = recompile_dependents);

(statearr_28342_28416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (3))){
var state_28291__$1 = state_28291;
var statearr_28343_28417 = state_28291__$1;
(statearr_28343_28417[(2)] = null);

(statearr_28343_28417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (12))){
var inst_28182 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28344_28418 = state_28291__$1;
(statearr_28344_28418[(2)] = inst_28182);

(statearr_28344_28418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (2))){
var inst_28144 = (state_28291[(13)]);
var inst_28151 = cljs.core.seq.call(null,inst_28144);
var inst_28152 = inst_28151;
var inst_28153 = null;
var inst_28154 = (0);
var inst_28155 = (0);
var state_28291__$1 = (function (){var statearr_28345 = state_28291;
(statearr_28345[(7)] = inst_28154);

(statearr_28345[(8)] = inst_28152);

(statearr_28345[(9)] = inst_28153);

(statearr_28345[(10)] = inst_28155);

return statearr_28345;
})();
var statearr_28346_28419 = state_28291__$1;
(statearr_28346_28419[(2)] = null);

(statearr_28346_28419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (23))){
var inst_28213 = (state_28291[(23)]);
var inst_28209 = (state_28291[(24)]);
var inst_28205 = (state_28291[(19)]);
var inst_28211 = (state_28291[(26)]);
var inst_28208 = (state_28291[(25)]);
var inst_28216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28218 = (function (){var all_files = inst_28205;
var res_SINGLEQUOTE_ = inst_28208;
var res = inst_28209;
var files_not_loaded = inst_28211;
var dependencies_that_loaded = inst_28213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28211,inst_28208,inst_28216,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28217){
var map__28347 = p__28217;
var map__28347__$1 = ((((!((map__28347 == null)))?((((map__28347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);
var request_url = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28211,inst_28208,inst_28216,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28219 = cljs.core.reverse.call(null,inst_28213);
var inst_28220 = cljs.core.map.call(null,inst_28218,inst_28219);
var inst_28221 = cljs.core.pr_str.call(null,inst_28220);
var inst_28222 = figwheel.client.utils.log.call(null,inst_28221);
var state_28291__$1 = (function (){var statearr_28349 = state_28291;
(statearr_28349[(31)] = inst_28216);

return statearr_28349;
})();
var statearr_28350_28420 = state_28291__$1;
(statearr_28350_28420[(2)] = inst_28222);

(statearr_28350_28420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (35))){
var state_28291__$1 = state_28291;
var statearr_28351_28421 = state_28291__$1;
(statearr_28351_28421[(2)] = true);

(statearr_28351_28421[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (19))){
var inst_28195 = (state_28291[(12)]);
var inst_28201 = figwheel.client.file_reloading.expand_files.call(null,inst_28195);
var state_28291__$1 = state_28291;
var statearr_28352_28422 = state_28291__$1;
(statearr_28352_28422[(2)] = inst_28201);

(statearr_28352_28422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (11))){
var state_28291__$1 = state_28291;
var statearr_28353_28423 = state_28291__$1;
(statearr_28353_28423[(2)] = null);

(statearr_28353_28423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (9))){
var inst_28184 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28354_28424 = state_28291__$1;
(statearr_28354_28424[(2)] = inst_28184);

(statearr_28354_28424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (5))){
var inst_28154 = (state_28291[(7)]);
var inst_28155 = (state_28291[(10)]);
var inst_28157 = (inst_28155 < inst_28154);
var inst_28158 = inst_28157;
var state_28291__$1 = state_28291;
if(cljs.core.truth_(inst_28158)){
var statearr_28355_28425 = state_28291__$1;
(statearr_28355_28425[(1)] = (7));

} else {
var statearr_28356_28426 = state_28291__$1;
(statearr_28356_28426[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (14))){
var inst_28165 = (state_28291[(22)]);
var inst_28174 = cljs.core.first.call(null,inst_28165);
var inst_28175 = figwheel.client.file_reloading.eval_body.call(null,inst_28174,opts);
var inst_28176 = cljs.core.next.call(null,inst_28165);
var inst_28152 = inst_28176;
var inst_28153 = null;
var inst_28154 = (0);
var inst_28155 = (0);
var state_28291__$1 = (function (){var statearr_28357 = state_28291;
(statearr_28357[(7)] = inst_28154);

(statearr_28357[(32)] = inst_28175);

(statearr_28357[(8)] = inst_28152);

(statearr_28357[(9)] = inst_28153);

(statearr_28357[(10)] = inst_28155);

return statearr_28357;
})();
var statearr_28358_28427 = state_28291__$1;
(statearr_28358_28427[(2)] = null);

(statearr_28358_28427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (45))){
var state_28291__$1 = state_28291;
var statearr_28359_28428 = state_28291__$1;
(statearr_28359_28428[(2)] = null);

(statearr_28359_28428[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (26))){
var inst_28213 = (state_28291[(23)]);
var inst_28209 = (state_28291[(24)]);
var inst_28205 = (state_28291[(19)]);
var inst_28211 = (state_28291[(26)]);
var inst_28208 = (state_28291[(25)]);
var inst_28228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28230 = (function (){var all_files = inst_28205;
var res_SINGLEQUOTE_ = inst_28208;
var res = inst_28209;
var files_not_loaded = inst_28211;
var dependencies_that_loaded = inst_28213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28211,inst_28208,inst_28228,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28229){
var map__28360 = p__28229;
var map__28360__$1 = ((((!((map__28360 == null)))?((((map__28360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28360):map__28360);
var namespace = cljs.core.get.call(null,map__28360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28211,inst_28208,inst_28228,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28231 = cljs.core.map.call(null,inst_28230,inst_28209);
var inst_28232 = cljs.core.pr_str.call(null,inst_28231);
var inst_28233 = figwheel.client.utils.log.call(null,inst_28232);
var inst_28234 = (function (){var all_files = inst_28205;
var res_SINGLEQUOTE_ = inst_28208;
var res = inst_28209;
var files_not_loaded = inst_28211;
var dependencies_that_loaded = inst_28213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28211,inst_28208,inst_28228,inst_28230,inst_28231,inst_28232,inst_28233,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28213,inst_28209,inst_28205,inst_28211,inst_28208,inst_28228,inst_28230,inst_28231,inst_28232,inst_28233,state_val_28292,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28235 = setTimeout(inst_28234,(10));
var state_28291__$1 = (function (){var statearr_28362 = state_28291;
(statearr_28362[(33)] = inst_28228);

(statearr_28362[(34)] = inst_28233);

return statearr_28362;
})();
var statearr_28363_28429 = state_28291__$1;
(statearr_28363_28429[(2)] = inst_28235);

(statearr_28363_28429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (16))){
var state_28291__$1 = state_28291;
var statearr_28364_28430 = state_28291__$1;
(statearr_28364_28430[(2)] = reload_dependents);

(statearr_28364_28430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (38))){
var inst_28245 = (state_28291[(16)]);
var inst_28262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28245);
var state_28291__$1 = state_28291;
var statearr_28365_28431 = state_28291__$1;
(statearr_28365_28431[(2)] = inst_28262);

(statearr_28365_28431[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (30))){
var state_28291__$1 = state_28291;
var statearr_28366_28432 = state_28291__$1;
(statearr_28366_28432[(2)] = null);

(statearr_28366_28432[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (10))){
var inst_28165 = (state_28291[(22)]);
var inst_28167 = cljs.core.chunked_seq_QMARK_.call(null,inst_28165);
var state_28291__$1 = state_28291;
if(inst_28167){
var statearr_28367_28433 = state_28291__$1;
(statearr_28367_28433[(1)] = (13));

} else {
var statearr_28368_28434 = state_28291__$1;
(statearr_28368_28434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (18))){
var inst_28199 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
if(cljs.core.truth_(inst_28199)){
var statearr_28369_28435 = state_28291__$1;
(statearr_28369_28435[(1)] = (19));

} else {
var statearr_28370_28436 = state_28291__$1;
(statearr_28370_28436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (42))){
var state_28291__$1 = state_28291;
var statearr_28371_28437 = state_28291__$1;
(statearr_28371_28437[(2)] = null);

(statearr_28371_28437[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (37))){
var inst_28257 = (state_28291[(2)]);
var state_28291__$1 = state_28291;
var statearr_28372_28438 = state_28291__$1;
(statearr_28372_28438[(2)] = inst_28257);

(statearr_28372_28438[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28292 === (8))){
var inst_28165 = (state_28291[(22)]);
var inst_28152 = (state_28291[(8)]);
var inst_28165__$1 = cljs.core.seq.call(null,inst_28152);
var state_28291__$1 = (function (){var statearr_28373 = state_28291;
(statearr_28373[(22)] = inst_28165__$1);

return statearr_28373;
})();
if(inst_28165__$1){
var statearr_28374_28439 = state_28291__$1;
(statearr_28374_28439[(1)] = (10));

} else {
var statearr_28375_28440 = state_28291__$1;
(statearr_28375_28440[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20894__auto__,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto____0 = (function (){
var statearr_28379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28379[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto__);

(statearr_28379[(1)] = (1));

return statearr_28379;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto____1 = (function (state_28291){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_28291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e28380){if((e28380 instanceof Object)){
var ex__20898__auto__ = e28380;
var statearr_28381_28441 = state_28291;
(statearr_28381_28441[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28442 = state_28291;
state_28291 = G__28442;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto__ = function(state_28291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto____1.call(this,state_28291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20961__auto__ = (function (){var statearr_28382 = f__20960__auto__.call(null);
(statearr_28382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_28382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__,map__28137,map__28137__$1,opts,before_jsload,on_jsload,reload_dependents,map__28138,map__28138__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20959__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28445,link){
var map__28448 = p__28445;
var map__28448__$1 = ((((!((map__28448 == null)))?((((map__28448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28448):map__28448);
var file = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28448,map__28448__$1,file){
return (function (p1__28443_SHARP_,p2__28444_SHARP_){
if(cljs.core._EQ_.call(null,p1__28443_SHARP_,p2__28444_SHARP_)){
return p1__28443_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28448,map__28448__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28454){
var map__28455 = p__28454;
var map__28455__$1 = ((((!((map__28455 == null)))?((((map__28455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28455):map__28455);
var match_length = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28455__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28450_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28450_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28457 = [];
var len__17433__auto___28460 = arguments.length;
var i__17434__auto___28461 = (0);
while(true){
if((i__17434__auto___28461 < len__17433__auto___28460)){
args28457.push((arguments[i__17434__auto___28461]));

var G__28462 = (i__17434__auto___28461 + (1));
i__17434__auto___28461 = G__28462;
continue;
} else {
}
break;
}

var G__28459 = args28457.length;
switch (G__28459) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28457.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28464_SHARP_,p2__28465_SHARP_){
return cljs.core.assoc.call(null,p1__28464_SHARP_,cljs.core.get.call(null,p2__28465_SHARP_,key),p2__28465_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28466){
var map__28469 = p__28466;
var map__28469__$1 = ((((!((map__28469 == null)))?((((map__28469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28469):map__28469);
var f_data = map__28469__$1;
var file = cljs.core.get.call(null,map__28469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28471,files_msg){
var map__28478 = p__28471;
var map__28478__$1 = ((((!((map__28478 == null)))?((((map__28478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28478):map__28478);
var opts = map__28478__$1;
var on_cssload = cljs.core.get.call(null,map__28478__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28480_28484 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28481_28485 = null;
var count__28482_28486 = (0);
var i__28483_28487 = (0);
while(true){
if((i__28483_28487 < count__28482_28486)){
var f_28488 = cljs.core._nth.call(null,chunk__28481_28485,i__28483_28487);
figwheel.client.file_reloading.reload_css_file.call(null,f_28488);

var G__28489 = seq__28480_28484;
var G__28490 = chunk__28481_28485;
var G__28491 = count__28482_28486;
var G__28492 = (i__28483_28487 + (1));
seq__28480_28484 = G__28489;
chunk__28481_28485 = G__28490;
count__28482_28486 = G__28491;
i__28483_28487 = G__28492;
continue;
} else {
var temp__4425__auto___28493 = cljs.core.seq.call(null,seq__28480_28484);
if(temp__4425__auto___28493){
var seq__28480_28494__$1 = temp__4425__auto___28493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28480_28494__$1)){
var c__17178__auto___28495 = cljs.core.chunk_first.call(null,seq__28480_28494__$1);
var G__28496 = cljs.core.chunk_rest.call(null,seq__28480_28494__$1);
var G__28497 = c__17178__auto___28495;
var G__28498 = cljs.core.count.call(null,c__17178__auto___28495);
var G__28499 = (0);
seq__28480_28484 = G__28496;
chunk__28481_28485 = G__28497;
count__28482_28486 = G__28498;
i__28483_28487 = G__28499;
continue;
} else {
var f_28500 = cljs.core.first.call(null,seq__28480_28494__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28500);

var G__28501 = cljs.core.next.call(null,seq__28480_28494__$1);
var G__28502 = null;
var G__28503 = (0);
var G__28504 = (0);
seq__28480_28484 = G__28501;
chunk__28481_28485 = G__28502;
count__28482_28486 = G__28503;
i__28483_28487 = G__28504;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28478,map__28478__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28478,map__28478__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map