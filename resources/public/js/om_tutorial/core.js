// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Cool animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Koala"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Monkey"], null)], null)], null));
/**
 * @constructor
 */
om_tutorial.core.HelloWorld = (function om_tutorial$core$HelloWorld(){
var this__19206__auto__ = this;
React.Component.apply(this__19206__auto__,arguments);

if(!((this__19206__auto__.getInitialState == null))){
this__19206__auto__.state = this__19206__auto__.getInitialState();
} else {
this__19206__auto__.state = {};
}

return this__19206__auto__;
});

om_tutorial.core.HelloWorld.prototype = goog.object.clone(React.Component.prototype);

var x20473_20483 = om_tutorial.core.HelloWorld.prototype;
x20473_20483.componentWillUpdate = ((function (x20473_20483){
return (function (next_props__19147__auto__,next_state__19148__auto__){
var this__19146__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19146__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19146__auto__);
});})(x20473_20483))
;

x20473_20483.shouldComponentUpdate = ((function (x20473_20483){
return (function (next_props__19147__auto__,next_state__19148__auto__){
var this__19146__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19146__auto__),goog.object.get(next_props__19147__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__19146__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19146__auto__.state,"omcljs$state"),goog.object.get(next_state__19148__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x20473_20483))
;

x20473_20483.componentWillUnmount = ((function (x20473_20483){
return (function (){
var this__19146__auto__ = this;
var r__19152__auto__ = om.next.get_reconciler.call(null,this__19146__auto__);
var cfg__19153__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19152__auto__);
var st__19154__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19153__auto__);
var indexer__19151__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19153__auto__);
if((st__19154__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19154__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19146__auto__);
}

if((indexer__19151__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19151__auto__,this__19146__auto__);
}
});})(x20473_20483))
;

x20473_20483.componentDidUpdate = ((function (x20473_20483){
return (function (prev_props__19149__auto__,prev_state__19150__auto__){
var this__19146__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19146__auto__);
});})(x20473_20483))
;

x20473_20483.isMounted = ((function (x20473_20483){
return (function (){
var this__19146__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19146__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20473_20483))
;

x20473_20483.componentWillMount = ((function (x20473_20483){
return (function (){
var this__19146__auto__ = this;
var indexer__19151__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19146__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19151__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19151__auto__,this__19146__auto__);
}
});})(x20473_20483))
;

x20473_20483.render = ((function (x20473_20483){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20474 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20475 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20476 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20477 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20478 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20479 = om.next.props.call(null,this$);
var map__20479__$1 = ((((!((map__20479 == null)))?((((map__20479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20479):map__20479);
var props = map__20479__$1;
var count = cljs.core.get.call(null,map__20479__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,React.DOM.span(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')),React.DOM.span(null,cljs.core.pr_str.call(null,props)),React.DOM.button({"onClick": ((function (map__20479,map__20479__$1,props,count,_STAR_reconciler_STAR_20474,_STAR_depth_STAR_20475,_STAR_shared_STAR_20476,_STAR_instrument_STAR_20477,_STAR_parent_STAR_20478,this$,x20473_20483){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__20479,map__20479__$1,props,count,_STAR_reconciler_STAR_20474,_STAR_depth_STAR_20475,_STAR_shared_STAR_20476,_STAR_instrument_STAR_20477,_STAR_parent_STAR_20478,this$,x20473_20483))
},"Click me"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20478;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20477;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20476;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20475;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20474;
}});})(x20473_20483))
;


om_tutorial.core.HelloWorld.prototype.constructor = om_tutorial.core.HelloWorld;

om_tutorial.core.HelloWorld.prototype.om$isComponent = true;

var x20481_20484 = om_tutorial.core.HelloWorld;
x20481_20484.om$next$IQuery$ = true;

x20481_20484.om$next$IQuery$query$arity$1 = ((function (x20481_20484){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x20481_20484))
;


var x20482_20485 = om_tutorial.core.HelloWorld.prototype;
x20482_20485.om$next$IQuery$ = true;

x20482_20485.om$next$IQuery$query$arity$1 = ((function (x20482_20485){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x20482_20485))
;


om_tutorial.core.HelloWorld.cljs$lang$type = true;

om_tutorial.core.HelloWorld.cljs$lang$ctorStr = "om-tutorial.core/HelloWorld";

om_tutorial.core.HelloWorld.cljs$lang$ctorPrWriter = (function (this__19208__auto__,writer__19209__auto__,opt__19210__auto__){
return cljs.core._write.call(null,writer__19209__auto__,"om-tutorial.core/HelloWorld");
});
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__19206__auto__ = this;
React.Component.apply(this__19206__auto__,arguments);

if(!((this__19206__auto__.getInitialState == null))){
this__19206__auto__.state = this__19206__auto__.getInitialState();
} else {
this__19206__auto__.state = {};
}

return this__19206__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x20490_20502 = om_tutorial.core.AnimalsList.prototype;
x20490_20502.componentWillUpdate = ((function (x20490_20502){
return (function (next_props__19147__auto__,next_state__19148__auto__){
var this__19146__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19146__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19146__auto__);
});})(x20490_20502))
;

x20490_20502.shouldComponentUpdate = ((function (x20490_20502){
return (function (next_props__19147__auto__,next_state__19148__auto__){
var this__19146__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19146__auto__),goog.object.get(next_props__19147__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__19146__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19146__auto__.state,"omcljs$state"),goog.object.get(next_state__19148__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x20490_20502))
;

x20490_20502.componentWillUnmount = ((function (x20490_20502){
return (function (){
var this__19146__auto__ = this;
var r__19152__auto__ = om.next.get_reconciler.call(null,this__19146__auto__);
var cfg__19153__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19152__auto__);
var st__19154__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19153__auto__);
var indexer__19151__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19153__auto__);
if((st__19154__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19154__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19146__auto__);
}

if((indexer__19151__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19151__auto__,this__19146__auto__);
}
});})(x20490_20502))
;

x20490_20502.componentDidUpdate = ((function (x20490_20502){
return (function (prev_props__19149__auto__,prev_state__19150__auto__){
var this__19146__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19146__auto__);
});})(x20490_20502))
;

x20490_20502.isMounted = ((function (x20490_20502){
return (function (){
var this__19146__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19146__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20490_20502))
;

x20490_20502.componentWillMount = ((function (x20490_20502){
return (function (){
var this__19146__auto__ = this;
var indexer__19151__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19146__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19151__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19151__auto__,this__19146__auto__);
}
});})(x20490_20502))
;

x20490_20502.render = ((function (x20490_20502){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20491 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20492 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20493 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20494 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20495 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20496 = om.next.props.call(null,this$);
var map__20496__$1 = ((((!((map__20496 == null)))?((((map__20496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20496):map__20496);
var title = cljs.core.get.call(null,map__20496__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__20496__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,React.DOM.h2(null,title),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__20496,map__20496__$1,title,list,_STAR_reconciler_STAR_20491,_STAR_depth_STAR_20492,_STAR_shared_STAR_20493,_STAR_instrument_STAR_20494,_STAR_parent_STAR_20495,this$,x20490_20502){
return (function (p__20498){
var vec__20499 = p__20498;
var i = cljs.core.nth.call(null,vec__20499,(0),null);
var name = cljs.core.nth.call(null,vec__20499,(1),null);
return React.DOM.li(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join(''));
});})(map__20496,map__20496__$1,title,list,_STAR_reconciler_STAR_20491,_STAR_depth_STAR_20492,_STAR_shared_STAR_20493,_STAR_instrument_STAR_20494,_STAR_parent_STAR_20495,this$,x20490_20502))
,list)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20495;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20494;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20493;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20492;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20491;
}});})(x20490_20502))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x20500_20503 = om_tutorial.core.AnimalsList;
x20500_20503.om$next$IQueryParams$ = true;

x20500_20503.om$next$IQueryParams$params$arity$1 = ((function (x20500_20503){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(2)], null);
});})(x20500_20503))
;

x20500_20503.om$next$IQuery$ = true;

x20500_20503.om$next$IQuery$query$arity$1 = ((function (x20500_20503){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x20500_20503))
;


var x20501_20504 = om_tutorial.core.AnimalsList.prototype;
x20501_20504.om$next$IQueryParams$ = true;

x20501_20504.om$next$IQueryParams$params$arity$1 = ((function (x20501_20504){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(2)], null);
});})(x20501_20504))
;

x20501_20504.om$next$IQuery$ = true;

x20501_20504.om$next$IQuery$query$arity$1 = ((function (x20501_20504){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x20501_20504))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__19208__auto__,writer__19209__auto__,opt__19210__auto__){
return cljs.core._write.call(null,writer__19209__auto__,"om-tutorial.core/AnimalsList");
});
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17288__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17289__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17290__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17291__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17292__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__17288__auto__,prefer_table__17289__auto__,method_cache__17290__auto__,cached_hierarchy__17291__auto__,hierarchy__17292__auto__){
return (function (env,key,params){
return key;
});})(method_table__17288__auto__,prefer_table__17289__auto__,method_cache__17290__auto__,cached_hierarchy__17291__auto__,hierarchy__17292__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17292__auto__,method_table__17288__auto__,prefer_table__17289__auto__,method_cache__17290__auto__,cached_hierarchy__17291__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20505,key,params){
var map__20506 = p__20505;
var map__20506__$1 = ((((!((map__20506 == null)))?((((map__20506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20506):map__20506);
var env = map__20506__$1;
var state = cljs.core.get.call(null,map__20506__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20508 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__20508,(0),null);
var v = cljs.core.nth.call(null,vec__20508,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__20509,key,p__20510){
var map__20511 = p__20509;
var map__20511__$1 = ((((!((map__20511 == null)))?((((map__20511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20511):map__20511);
var env = map__20511__$1;
var state = cljs.core.get.call(null,map__20511__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20512 = p__20510;
var map__20512__$1 = ((((!((map__20512 == null)))?((((map__20512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20512):map__20512);
var start = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__20512__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
om_tutorial.core.mutate = (function om_tutorial$core$mutate(p__20515,key,params){
var map__20518 = p__20515;
var map__20518__$1 = ((((!((map__20518 == null)))?((((map__20518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20518):map__20518);
var env = map__20518__$1;
var state = cljs.core.get.call(null,map__20518__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20518,map__20518__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__20518,map__20518__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
om_tutorial.core.my_parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null));
om_tutorial.core.hello = om.next.factory.call(null,om_tutorial.core.HelloWorld);
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_tutorial.core.my_parser], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map