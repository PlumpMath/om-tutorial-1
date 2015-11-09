// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26353__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26354__i = 0, G__26354__a = new Array(arguments.length -  0);
while (G__26354__i < G__26354__a.length) {G__26354__a[G__26354__i] = arguments[G__26354__i + 0]; ++G__26354__i;}
  args = new cljs.core.IndexedSeq(G__26354__a,0);
} 
return G__26353__delegate.call(this,args);};
G__26353.cljs$lang$maxFixedArity = 0;
G__26353.cljs$lang$applyTo = (function (arglist__26355){
var args = cljs.core.seq(arglist__26355);
return G__26353__delegate(args);
});
G__26353.cljs$core$IFn$_invoke$arity$variadic = G__26353__delegate;
return G__26353;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26356){
var map__26359 = p__26356;
var map__26359__$1 = ((((!((map__26359 == null)))?((((map__26359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26359):map__26359);
var message = cljs.core.get.call(null,map__26359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26359__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16375__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16363__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16363__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16363__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20959__auto___26507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___26507,ch){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___26507,ch){
return (function (state_26477){
var state_val_26478 = (state_26477[(1)]);
if((state_val_26478 === (7))){
var inst_26473 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
var statearr_26479_26508 = state_26477__$1;
(statearr_26479_26508[(2)] = inst_26473);

(statearr_26479_26508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (1))){
var state_26477__$1 = state_26477;
var statearr_26480_26509 = state_26477__$1;
(statearr_26480_26509[(2)] = null);

(statearr_26480_26509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (4))){
var inst_26436 = (state_26477[(7)]);
var inst_26436__$1 = (state_26477[(2)]);
var state_26477__$1 = (function (){var statearr_26481 = state_26477;
(statearr_26481[(7)] = inst_26436__$1);

return statearr_26481;
})();
if(cljs.core.truth_(inst_26436__$1)){
var statearr_26482_26510 = state_26477__$1;
(statearr_26482_26510[(1)] = (5));

} else {
var statearr_26483_26511 = state_26477__$1;
(statearr_26483_26511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (15))){
var inst_26443 = (state_26477[(8)]);
var inst_26458 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26443);
var inst_26459 = cljs.core.first.call(null,inst_26458);
var inst_26460 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26459);
var inst_26461 = console.warn("Figwheel: Not loading code with warnings - ",inst_26460);
var state_26477__$1 = state_26477;
var statearr_26484_26512 = state_26477__$1;
(statearr_26484_26512[(2)] = inst_26461);

(statearr_26484_26512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (13))){
var inst_26466 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
var statearr_26485_26513 = state_26477__$1;
(statearr_26485_26513[(2)] = inst_26466);

(statearr_26485_26513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (6))){
var state_26477__$1 = state_26477;
var statearr_26486_26514 = state_26477__$1;
(statearr_26486_26514[(2)] = null);

(statearr_26486_26514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (17))){
var inst_26464 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
var statearr_26487_26515 = state_26477__$1;
(statearr_26487_26515[(2)] = inst_26464);

(statearr_26487_26515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (3))){
var inst_26475 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26477__$1,inst_26475);
} else {
if((state_val_26478 === (12))){
var inst_26442 = (state_26477[(9)]);
var inst_26456 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26442,opts);
var state_26477__$1 = state_26477;
if(cljs.core.truth_(inst_26456)){
var statearr_26488_26516 = state_26477__$1;
(statearr_26488_26516[(1)] = (15));

} else {
var statearr_26489_26517 = state_26477__$1;
(statearr_26489_26517[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (2))){
var state_26477__$1 = state_26477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26477__$1,(4),ch);
} else {
if((state_val_26478 === (11))){
var inst_26443 = (state_26477[(8)]);
var inst_26448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26449 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26443);
var inst_26450 = cljs.core.async.timeout.call(null,(1000));
var inst_26451 = [inst_26449,inst_26450];
var inst_26452 = (new cljs.core.PersistentVector(null,2,(5),inst_26448,inst_26451,null));
var state_26477__$1 = state_26477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26477__$1,(14),inst_26452);
} else {
if((state_val_26478 === (9))){
var state_26477__$1 = state_26477;
var statearr_26490_26518 = state_26477__$1;
(statearr_26490_26518[(2)] = null);

(statearr_26490_26518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (5))){
var inst_26436 = (state_26477[(7)]);
var inst_26438 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26439 = (new cljs.core.PersistentArrayMap(null,2,inst_26438,null));
var inst_26440 = (new cljs.core.PersistentHashSet(null,inst_26439,null));
var inst_26441 = figwheel.client.focus_msgs.call(null,inst_26440,inst_26436);
var inst_26442 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26441);
var inst_26443 = cljs.core.first.call(null,inst_26441);
var inst_26444 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26477__$1 = (function (){var statearr_26491 = state_26477;
(statearr_26491[(9)] = inst_26442);

(statearr_26491[(8)] = inst_26443);

return statearr_26491;
})();
if(cljs.core.truth_(inst_26444)){
var statearr_26492_26519 = state_26477__$1;
(statearr_26492_26519[(1)] = (8));

} else {
var statearr_26493_26520 = state_26477__$1;
(statearr_26493_26520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (14))){
var inst_26454 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
var statearr_26494_26521 = state_26477__$1;
(statearr_26494_26521[(2)] = inst_26454);

(statearr_26494_26521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (16))){
var state_26477__$1 = state_26477;
var statearr_26495_26522 = state_26477__$1;
(statearr_26495_26522[(2)] = null);

(statearr_26495_26522[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (10))){
var inst_26469 = (state_26477[(2)]);
var state_26477__$1 = (function (){var statearr_26496 = state_26477;
(statearr_26496[(10)] = inst_26469);

return statearr_26496;
})();
var statearr_26497_26523 = state_26477__$1;
(statearr_26497_26523[(2)] = null);

(statearr_26497_26523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (8))){
var inst_26442 = (state_26477[(9)]);
var inst_26446 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26442,opts);
var state_26477__$1 = state_26477;
if(cljs.core.truth_(inst_26446)){
var statearr_26498_26524 = state_26477__$1;
(statearr_26498_26524[(1)] = (11));

} else {
var statearr_26499_26525 = state_26477__$1;
(statearr_26499_26525[(1)] = (12));

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
});})(c__20959__auto___26507,ch))
;
return ((function (switch__20894__auto__,c__20959__auto___26507,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20895__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20895__auto____0 = (function (){
var statearr_26503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26503[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20895__auto__);

(statearr_26503[(1)] = (1));

return statearr_26503;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20895__auto____1 = (function (state_26477){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_26477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e26504){if((e26504 instanceof Object)){
var ex__20898__auto__ = e26504;
var statearr_26505_26526 = state_26477;
(statearr_26505_26526[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26527 = state_26477;
state_26477 = G__26527;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20895__auto__ = function(state_26477){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20895__auto____1.call(this,state_26477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20895__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20895__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___26507,ch))
})();
var state__20961__auto__ = (function (){var statearr_26506 = f__20960__auto__.call(null);
(statearr_26506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___26507);

return statearr_26506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___26507,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26528_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26528_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26535 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26535){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26534 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26533,_STAR_print_newline_STAR_26534,base_path_26535){
return (function() { 
var G__26536__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26537__i = 0, G__26537__a = new Array(arguments.length -  0);
while (G__26537__i < G__26537__a.length) {G__26537__a[G__26537__i] = arguments[G__26537__i + 0]; ++G__26537__i;}
  args = new cljs.core.IndexedSeq(G__26537__a,0);
} 
return G__26536__delegate.call(this,args);};
G__26536.cljs$lang$maxFixedArity = 0;
G__26536.cljs$lang$applyTo = (function (arglist__26538){
var args = cljs.core.seq(arglist__26538);
return G__26536__delegate(args);
});
G__26536.cljs$core$IFn$_invoke$arity$variadic = G__26536__delegate;
return G__26536;
})()
;})(_STAR_print_fn_STAR_26533,_STAR_print_newline_STAR_26534,base_path_26535))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26534;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26533;
}}catch (e26532){if((e26532 instanceof Error)){
var e = e26532;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26535], null));
} else {
var e = e26532;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26535))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26539){
var map__26546 = p__26539;
var map__26546__$1 = ((((!((map__26546 == null)))?((((map__26546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26546):map__26546);
var opts = map__26546__$1;
var build_id = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26546,map__26546__$1,opts,build_id){
return (function (p__26548){
var vec__26549 = p__26548;
var map__26550 = cljs.core.nth.call(null,vec__26549,(0),null);
var map__26550__$1 = ((((!((map__26550 == null)))?((((map__26550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26550):map__26550);
var msg = map__26550__$1;
var msg_name = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26549,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26549,map__26550,map__26550__$1,msg,msg_name,_,map__26546,map__26546__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26549,map__26550,map__26550__$1,msg,msg_name,_,map__26546,map__26546__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26546,map__26546__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26556){
var vec__26557 = p__26556;
var map__26558 = cljs.core.nth.call(null,vec__26557,(0),null);
var map__26558__$1 = ((((!((map__26558 == null)))?((((map__26558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26558):map__26558);
var msg = map__26558__$1;
var msg_name = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26557,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26560){
var map__26570 = p__26560;
var map__26570__$1 = ((((!((map__26570 == null)))?((((map__26570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26570):map__26570);
var on_compile_warning = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26570,map__26570__$1,on_compile_warning,on_compile_fail){
return (function (p__26572){
var vec__26573 = p__26572;
var map__26574 = cljs.core.nth.call(null,vec__26573,(0),null);
var map__26574__$1 = ((((!((map__26574 == null)))?((((map__26574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26574):map__26574);
var msg = map__26574__$1;
var msg_name = cljs.core.get.call(null,map__26574__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26573,(1));
var pred__26576 = cljs.core._EQ_;
var expr__26577 = msg_name;
if(cljs.core.truth_(pred__26576.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26577))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26576.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26577))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26570,map__26570__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__,msg_hist,msg_names,msg){
return (function (state_26793){
var state_val_26794 = (state_26793[(1)]);
if((state_val_26794 === (7))){
var inst_26717 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26717)){
var statearr_26795_26841 = state_26793__$1;
(statearr_26795_26841[(1)] = (8));

} else {
var statearr_26796_26842 = state_26793__$1;
(statearr_26796_26842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (20))){
var inst_26787 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26797_26843 = state_26793__$1;
(statearr_26797_26843[(2)] = inst_26787);

(statearr_26797_26843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (27))){
var inst_26783 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26798_26844 = state_26793__$1;
(statearr_26798_26844[(2)] = inst_26783);

(statearr_26798_26844[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (1))){
var inst_26710 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26710)){
var statearr_26799_26845 = state_26793__$1;
(statearr_26799_26845[(1)] = (2));

} else {
var statearr_26800_26846 = state_26793__$1;
(statearr_26800_26846[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (24))){
var inst_26785 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26801_26847 = state_26793__$1;
(statearr_26801_26847[(2)] = inst_26785);

(statearr_26801_26847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (4))){
var inst_26791 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26793__$1,inst_26791);
} else {
if((state_val_26794 === (15))){
var inst_26789 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26802_26848 = state_26793__$1;
(statearr_26802_26848[(2)] = inst_26789);

(statearr_26802_26848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (21))){
var inst_26748 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26803_26849 = state_26793__$1;
(statearr_26803_26849[(2)] = inst_26748);

(statearr_26803_26849[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (31))){
var inst_26772 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26772)){
var statearr_26804_26850 = state_26793__$1;
(statearr_26804_26850[(1)] = (34));

} else {
var statearr_26805_26851 = state_26793__$1;
(statearr_26805_26851[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (32))){
var inst_26781 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26806_26852 = state_26793__$1;
(statearr_26806_26852[(2)] = inst_26781);

(statearr_26806_26852[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (33))){
var inst_26770 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26807_26853 = state_26793__$1;
(statearr_26807_26853[(2)] = inst_26770);

(statearr_26807_26853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (13))){
var inst_26731 = figwheel.client.heads_up.clear.call(null);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(16),inst_26731);
} else {
if((state_val_26794 === (22))){
var inst_26752 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26753 = figwheel.client.heads_up.append_message.call(null,inst_26752);
var state_26793__$1 = state_26793;
var statearr_26808_26854 = state_26793__$1;
(statearr_26808_26854[(2)] = inst_26753);

(statearr_26808_26854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (36))){
var inst_26779 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26809_26855 = state_26793__$1;
(statearr_26809_26855[(2)] = inst_26779);

(statearr_26809_26855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (29))){
var inst_26763 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26810_26856 = state_26793__$1;
(statearr_26810_26856[(2)] = inst_26763);

(statearr_26810_26856[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (6))){
var inst_26712 = (state_26793[(7)]);
var state_26793__$1 = state_26793;
var statearr_26811_26857 = state_26793__$1;
(statearr_26811_26857[(2)] = inst_26712);

(statearr_26811_26857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (28))){
var inst_26759 = (state_26793[(2)]);
var inst_26760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26761 = figwheel.client.heads_up.display_warning.call(null,inst_26760);
var state_26793__$1 = (function (){var statearr_26812 = state_26793;
(statearr_26812[(8)] = inst_26759);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(29),inst_26761);
} else {
if((state_val_26794 === (25))){
var inst_26757 = figwheel.client.heads_up.clear.call(null);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(28),inst_26757);
} else {
if((state_val_26794 === (34))){
var inst_26774 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(37),inst_26774);
} else {
if((state_val_26794 === (17))){
var inst_26739 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26813_26858 = state_26793__$1;
(statearr_26813_26858[(2)] = inst_26739);

(statearr_26813_26858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (3))){
var inst_26729 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26729)){
var statearr_26814_26859 = state_26793__$1;
(statearr_26814_26859[(1)] = (13));

} else {
var statearr_26815_26860 = state_26793__$1;
(statearr_26815_26860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (12))){
var inst_26725 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26816_26861 = state_26793__$1;
(statearr_26816_26861[(2)] = inst_26725);

(statearr_26816_26861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (2))){
var inst_26712 = (state_26793[(7)]);
var inst_26712__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_26793__$1 = (function (){var statearr_26817 = state_26793;
(statearr_26817[(7)] = inst_26712__$1);

return statearr_26817;
})();
if(cljs.core.truth_(inst_26712__$1)){
var statearr_26818_26862 = state_26793__$1;
(statearr_26818_26862[(1)] = (5));

} else {
var statearr_26819_26863 = state_26793__$1;
(statearr_26819_26863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (23))){
var inst_26755 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26755)){
var statearr_26820_26864 = state_26793__$1;
(statearr_26820_26864[(1)] = (25));

} else {
var statearr_26821_26865 = state_26793__$1;
(statearr_26821_26865[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (35))){
var state_26793__$1 = state_26793;
var statearr_26822_26866 = state_26793__$1;
(statearr_26822_26866[(2)] = null);

(statearr_26822_26866[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (19))){
var inst_26750 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26750)){
var statearr_26823_26867 = state_26793__$1;
(statearr_26823_26867[(1)] = (22));

} else {
var statearr_26824_26868 = state_26793__$1;
(statearr_26824_26868[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (11))){
var inst_26721 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26825_26869 = state_26793__$1;
(statearr_26825_26869[(2)] = inst_26721);

(statearr_26825_26869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (9))){
var inst_26723 = figwheel.client.heads_up.clear.call(null);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(12),inst_26723);
} else {
if((state_val_26794 === (5))){
var inst_26714 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26793__$1 = state_26793;
var statearr_26826_26870 = state_26793__$1;
(statearr_26826_26870[(2)] = inst_26714);

(statearr_26826_26870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (14))){
var inst_26741 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26741)){
var statearr_26827_26871 = state_26793__$1;
(statearr_26827_26871[(1)] = (18));

} else {
var statearr_26828_26872 = state_26793__$1;
(statearr_26828_26872[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (26))){
var inst_26765 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26793__$1 = state_26793;
if(cljs.core.truth_(inst_26765)){
var statearr_26829_26873 = state_26793__$1;
(statearr_26829_26873[(1)] = (30));

} else {
var statearr_26830_26874 = state_26793__$1;
(statearr_26830_26874[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (16))){
var inst_26733 = (state_26793[(2)]);
var inst_26734 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26735 = figwheel.client.format_messages.call(null,inst_26734);
var inst_26736 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26737 = figwheel.client.heads_up.display_error.call(null,inst_26735,inst_26736);
var state_26793__$1 = (function (){var statearr_26831 = state_26793;
(statearr_26831[(9)] = inst_26733);

return statearr_26831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(17),inst_26737);
} else {
if((state_val_26794 === (30))){
var inst_26767 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26768 = figwheel.client.heads_up.display_warning.call(null,inst_26767);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(33),inst_26768);
} else {
if((state_val_26794 === (10))){
var inst_26727 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26832_26875 = state_26793__$1;
(statearr_26832_26875[(2)] = inst_26727);

(statearr_26832_26875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (18))){
var inst_26743 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26744 = figwheel.client.format_messages.call(null,inst_26743);
var inst_26745 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26746 = figwheel.client.heads_up.display_error.call(null,inst_26744,inst_26745);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(21),inst_26746);
} else {
if((state_val_26794 === (37))){
var inst_26776 = (state_26793[(2)]);
var state_26793__$1 = state_26793;
var statearr_26833_26876 = state_26793__$1;
(statearr_26833_26876[(2)] = inst_26776);

(statearr_26833_26876[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26794 === (8))){
var inst_26719 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26793__$1 = state_26793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26793__$1,(11),inst_26719);
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
});})(c__20959__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20894__auto__,c__20959__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto____0 = (function (){
var statearr_26837 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26837[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto__);

(statearr_26837[(1)] = (1));

return statearr_26837;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto____1 = (function (state_26793){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_26793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e26838){if((e26838 instanceof Object)){
var ex__20898__auto__ = e26838;
var statearr_26839_26877 = state_26793;
(statearr_26839_26877[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26878 = state_26793;
state_26793 = G__26878;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto__ = function(state_26793){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto____1.call(this,state_26793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__,msg_hist,msg_names,msg))
})();
var state__20961__auto__ = (function (){var statearr_26840 = f__20960__auto__.call(null);
(statearr_26840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_26840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__,msg_hist,msg_names,msg))
);

return c__20959__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20959__auto___26941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___26941,ch){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___26941,ch){
return (function (state_26924){
var state_val_26925 = (state_26924[(1)]);
if((state_val_26925 === (1))){
var state_26924__$1 = state_26924;
var statearr_26926_26942 = state_26924__$1;
(statearr_26926_26942[(2)] = null);

(statearr_26926_26942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (2))){
var state_26924__$1 = state_26924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(4),ch);
} else {
if((state_val_26925 === (3))){
var inst_26922 = (state_26924[(2)]);
var state_26924__$1 = state_26924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26924__$1,inst_26922);
} else {
if((state_val_26925 === (4))){
var inst_26912 = (state_26924[(7)]);
var inst_26912__$1 = (state_26924[(2)]);
var state_26924__$1 = (function (){var statearr_26927 = state_26924;
(statearr_26927[(7)] = inst_26912__$1);

return statearr_26927;
})();
if(cljs.core.truth_(inst_26912__$1)){
var statearr_26928_26943 = state_26924__$1;
(statearr_26928_26943[(1)] = (5));

} else {
var statearr_26929_26944 = state_26924__$1;
(statearr_26929_26944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (5))){
var inst_26912 = (state_26924[(7)]);
var inst_26914 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26912);
var state_26924__$1 = state_26924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(8),inst_26914);
} else {
if((state_val_26925 === (6))){
var state_26924__$1 = state_26924;
var statearr_26930_26945 = state_26924__$1;
(statearr_26930_26945[(2)] = null);

(statearr_26930_26945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (7))){
var inst_26920 = (state_26924[(2)]);
var state_26924__$1 = state_26924;
var statearr_26931_26946 = state_26924__$1;
(statearr_26931_26946[(2)] = inst_26920);

(statearr_26931_26946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (8))){
var inst_26916 = (state_26924[(2)]);
var state_26924__$1 = (function (){var statearr_26932 = state_26924;
(statearr_26932[(8)] = inst_26916);

return statearr_26932;
})();
var statearr_26933_26947 = state_26924__$1;
(statearr_26933_26947[(2)] = null);

(statearr_26933_26947[(1)] = (2));


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
});})(c__20959__auto___26941,ch))
;
return ((function (switch__20894__auto__,c__20959__auto___26941,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20895__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20895__auto____0 = (function (){
var statearr_26937 = [null,null,null,null,null,null,null,null,null];
(statearr_26937[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20895__auto__);

(statearr_26937[(1)] = (1));

return statearr_26937;
});
var figwheel$client$heads_up_plugin_$_state_machine__20895__auto____1 = (function (state_26924){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_26924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e26938){if((e26938 instanceof Object)){
var ex__20898__auto__ = e26938;
var statearr_26939_26948 = state_26924;
(statearr_26939_26948[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26949 = state_26924;
state_26924 = G__26949;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20895__auto__ = function(state_26924){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20895__auto____1.call(this,state_26924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20895__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20895__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___26941,ch))
})();
var state__20961__auto__ = (function (){var statearr_26940 = f__20960__auto__.call(null);
(statearr_26940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___26941);

return statearr_26940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___26941,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__){
return (function (state_26970){
var state_val_26971 = (state_26970[(1)]);
if((state_val_26971 === (1))){
var inst_26965 = cljs.core.async.timeout.call(null,(3000));
var state_26970__$1 = state_26970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26970__$1,(2),inst_26965);
} else {
if((state_val_26971 === (2))){
var inst_26967 = (state_26970[(2)]);
var inst_26968 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26970__$1 = (function (){var statearr_26972 = state_26970;
(statearr_26972[(7)] = inst_26967);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26970__$1,inst_26968);
} else {
return null;
}
}
});})(c__20959__auto__))
;
return ((function (switch__20894__auto__,c__20959__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20895__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20895__auto____0 = (function (){
var statearr_26976 = [null,null,null,null,null,null,null,null];
(statearr_26976[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20895__auto__);

(statearr_26976[(1)] = (1));

return statearr_26976;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20895__auto____1 = (function (state_26970){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_26970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e26977){if((e26977 instanceof Object)){
var ex__20898__auto__ = e26977;
var statearr_26978_26980 = state_26970;
(statearr_26978_26980[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26981 = state_26970;
state_26970 = G__26981;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20895__auto__ = function(state_26970){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20895__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20895__auto____1.call(this,state_26970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20895__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20895__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__))
})();
var state__20961__auto__ = (function (){var statearr_26979 = f__20960__auto__.call(null);
(statearr_26979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_26979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__))
);

return c__20959__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26982){
var map__26989 = p__26982;
var map__26989__$1 = ((((!((map__26989 == null)))?((((map__26989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26989):map__26989);
var ed = map__26989__$1;
var formatted_exception = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26991_26995 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26992_26996 = null;
var count__26993_26997 = (0);
var i__26994_26998 = (0);
while(true){
if((i__26994_26998 < count__26993_26997)){
var msg_26999 = cljs.core._nth.call(null,chunk__26992_26996,i__26994_26998);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26999);

var G__27000 = seq__26991_26995;
var G__27001 = chunk__26992_26996;
var G__27002 = count__26993_26997;
var G__27003 = (i__26994_26998 + (1));
seq__26991_26995 = G__27000;
chunk__26992_26996 = G__27001;
count__26993_26997 = G__27002;
i__26994_26998 = G__27003;
continue;
} else {
var temp__4425__auto___27004 = cljs.core.seq.call(null,seq__26991_26995);
if(temp__4425__auto___27004){
var seq__26991_27005__$1 = temp__4425__auto___27004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26991_27005__$1)){
var c__17178__auto___27006 = cljs.core.chunk_first.call(null,seq__26991_27005__$1);
var G__27007 = cljs.core.chunk_rest.call(null,seq__26991_27005__$1);
var G__27008 = c__17178__auto___27006;
var G__27009 = cljs.core.count.call(null,c__17178__auto___27006);
var G__27010 = (0);
seq__26991_26995 = G__27007;
chunk__26992_26996 = G__27008;
count__26993_26997 = G__27009;
i__26994_26998 = G__27010;
continue;
} else {
var msg_27011 = cljs.core.first.call(null,seq__26991_27005__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27011);

var G__27012 = cljs.core.next.call(null,seq__26991_27005__$1);
var G__27013 = null;
var G__27014 = (0);
var G__27015 = (0);
seq__26991_26995 = G__27012;
chunk__26992_26996 = G__27013;
count__26993_26997 = G__27014;
i__26994_26998 = G__27015;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27016){
var map__27019 = p__27016;
var map__27019__$1 = ((((!((map__27019 == null)))?((((map__27019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27019):map__27019);
var w = map__27019__$1;
var message = cljs.core.get.call(null,map__27019__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16363__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16363__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16363__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27027 = cljs.core.seq.call(null,plugins);
var chunk__27028 = null;
var count__27029 = (0);
var i__27030 = (0);
while(true){
if((i__27030 < count__27029)){
var vec__27031 = cljs.core._nth.call(null,chunk__27028,i__27030);
var k = cljs.core.nth.call(null,vec__27031,(0),null);
var plugin = cljs.core.nth.call(null,vec__27031,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27033 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27027,chunk__27028,count__27029,i__27030,pl_27033,vec__27031,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27033.call(null,msg_hist);
});})(seq__27027,chunk__27028,count__27029,i__27030,pl_27033,vec__27031,k,plugin))
);
} else {
}

var G__27034 = seq__27027;
var G__27035 = chunk__27028;
var G__27036 = count__27029;
var G__27037 = (i__27030 + (1));
seq__27027 = G__27034;
chunk__27028 = G__27035;
count__27029 = G__27036;
i__27030 = G__27037;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27027);
if(temp__4425__auto__){
var seq__27027__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27027__$1)){
var c__17178__auto__ = cljs.core.chunk_first.call(null,seq__27027__$1);
var G__27038 = cljs.core.chunk_rest.call(null,seq__27027__$1);
var G__27039 = c__17178__auto__;
var G__27040 = cljs.core.count.call(null,c__17178__auto__);
var G__27041 = (0);
seq__27027 = G__27038;
chunk__27028 = G__27039;
count__27029 = G__27040;
i__27030 = G__27041;
continue;
} else {
var vec__27032 = cljs.core.first.call(null,seq__27027__$1);
var k = cljs.core.nth.call(null,vec__27032,(0),null);
var plugin = cljs.core.nth.call(null,vec__27032,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27042 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27027,chunk__27028,count__27029,i__27030,pl_27042,vec__27032,k,plugin,seq__27027__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27042.call(null,msg_hist);
});})(seq__27027,chunk__27028,count__27029,i__27030,pl_27042,vec__27032,k,plugin,seq__27027__$1,temp__4425__auto__))
);
} else {
}

var G__27043 = cljs.core.next.call(null,seq__27027__$1);
var G__27044 = null;
var G__27045 = (0);
var G__27046 = (0);
seq__27027 = G__27043;
chunk__27028 = G__27044;
count__27029 = G__27045;
i__27030 = G__27046;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27047 = [];
var len__17433__auto___27050 = arguments.length;
var i__17434__auto___27051 = (0);
while(true){
if((i__17434__auto___27051 < len__17433__auto___27050)){
args27047.push((arguments[i__17434__auto___27051]));

var G__27052 = (i__17434__auto___27051 + (1));
i__17434__auto___27051 = G__27052;
continue;
} else {
}
break;
}

var G__27049 = args27047.length;
switch (G__27049) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27047.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17440__auto__ = [];
var len__17433__auto___27058 = arguments.length;
var i__17434__auto___27059 = (0);
while(true){
if((i__17434__auto___27059 < len__17433__auto___27058)){
args__17440__auto__.push((arguments[i__17434__auto___27059]));

var G__27060 = (i__17434__auto___27059 + (1));
i__17434__auto___27059 = G__27060;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((0) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17441__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27055){
var map__27056 = p__27055;
var map__27056__$1 = ((((!((map__27056 == null)))?((((map__27056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27056):map__27056);
var opts = map__27056__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27054){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27054));
});

//# sourceMappingURL=client.js.map