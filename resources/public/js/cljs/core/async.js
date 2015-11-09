// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (fn_handler,f,meta28572){
this.fn_handler = fn_handler;
this.f = f;
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.fn_handler,self__.f,meta28572__$1));
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
});

cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571";

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28571");
});

cljs.core.async.__GT_t_cljs$core$async28571 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28571(fn_handler__$1,f__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(fn_handler__$1,f__$1,meta28572));
});

}

return (new cljs.core.async.t_cljs$core$async28571(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28576 = [];
var len__17433__auto___28579 = arguments.length;
var i__17434__auto___28580 = (0);
while(true){
if((i__17434__auto___28580 < len__17433__auto___28579)){
args28576.push((arguments[i__17434__auto___28580]));

var G__28581 = (i__17434__auto___28580 + (1));
i__17434__auto___28580 = G__28581;
continue;
} else {
}
break;
}

var G__28578 = args28576.length;
switch (G__28578) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28576.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28583 = [];
var len__17433__auto___28586 = arguments.length;
var i__17434__auto___28587 = (0);
while(true){
if((i__17434__auto___28587 < len__17433__auto___28586)){
args28583.push((arguments[i__17434__auto___28587]));

var G__28588 = (i__17434__auto___28587 + (1));
i__17434__auto___28587 = G__28588;
continue;
} else {
}
break;
}

var G__28585 = args28583.length;
switch (G__28585) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28583.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28590 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28590);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28590,ret){
return (function (){
return fn1.call(null,val_28590);
});})(val_28590,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28591 = [];
var len__17433__auto___28594 = arguments.length;
var i__17434__auto___28595 = (0);
while(true){
if((i__17434__auto___28595 < len__17433__auto___28594)){
args28591.push((arguments[i__17434__auto___28595]));

var G__28596 = (i__17434__auto___28595 + (1));
i__17434__auto___28595 = G__28596;
continue;
} else {
}
break;
}

var G__28593 = args28591.length;
switch (G__28593) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28591.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17278__auto___28598 = n;
var x_28599 = (0);
while(true){
if((x_28599 < n__17278__auto___28598)){
(a[x_28599] = (0));

var G__28600 = (x_28599 + (1));
x_28599 = G__28600;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28601 = (i + (1));
i = G__28601;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28605 = (function (alt_flag,flag,meta28606){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28606 = meta28606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28607,meta28606__$1){
var self__ = this;
var _28607__$1 = this;
return (new cljs.core.async.t_cljs$core$async28605(self__.alt_flag,self__.flag,meta28606__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28607){
var self__ = this;
var _28607__$1 = this;
return self__.meta28606;
});})(flag))
;

cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28605.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28606","meta28606",1328513162,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28605";

cljs.core.async.t_cljs$core$async28605.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28605");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28605 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28605(alt_flag__$1,flag__$1,meta28606){
return (new cljs.core.async.t_cljs$core$async28605(alt_flag__$1,flag__$1,meta28606));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28605(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28611 = (function (alt_handler,flag,cb,meta28612){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28612 = meta28612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28613,meta28612__$1){
var self__ = this;
var _28613__$1 = this;
return (new cljs.core.async.t_cljs$core$async28611(self__.alt_handler,self__.flag,self__.cb,meta28612__$1));
});

cljs.core.async.t_cljs$core$async28611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28613){
var self__ = this;
var _28613__$1 = this;
return self__.meta28612;
});

cljs.core.async.t_cljs$core$async28611.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28612","meta28612",-618235977,null)], null);
});

cljs.core.async.t_cljs$core$async28611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28611";

cljs.core.async.t_cljs$core$async28611.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28611");
});

cljs.core.async.__GT_t_cljs$core$async28611 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28611(alt_handler__$1,flag__$1,cb__$1,meta28612){
return (new cljs.core.async.t_cljs$core$async28611(alt_handler__$1,flag__$1,cb__$1,meta28612));
});

}

return (new cljs.core.async.t_cljs$core$async28611(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28614_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28614_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28615_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16375__auto__ = wport;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28616 = (i + (1));
i = G__28616;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16375__auto__ = ret;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16363__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16363__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17440__auto__ = [];
var len__17433__auto___28622 = arguments.length;
var i__17434__auto___28623 = (0);
while(true){
if((i__17434__auto___28623 < len__17433__auto___28622)){
args__17440__auto__.push((arguments[i__17434__auto___28623]));

var G__28624 = (i__17434__auto___28623 + (1));
i__17434__auto___28623 = G__28624;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((1) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28619){
var map__28620 = p__28619;
var map__28620__$1 = ((((!((map__28620 == null)))?((((map__28620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28620):map__28620);
var opts = map__28620__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28617){
var G__28618 = cljs.core.first.call(null,seq28617);
var seq28617__$1 = cljs.core.next.call(null,seq28617);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28618,seq28617__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28625 = [];
var len__17433__auto___28675 = arguments.length;
var i__17434__auto___28676 = (0);
while(true){
if((i__17434__auto___28676 < len__17433__auto___28675)){
args28625.push((arguments[i__17434__auto___28676]));

var G__28677 = (i__17434__auto___28676 + (1));
i__17434__auto___28676 = G__28677;
continue;
} else {
}
break;
}

var G__28627 = args28625.length;
switch (G__28627) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28625.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20959__auto___28679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___28679){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___28679){
return (function (state_28651){
var state_val_28652 = (state_28651[(1)]);
if((state_val_28652 === (7))){
var inst_28647 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28653_28680 = state_28651__$1;
(statearr_28653_28680[(2)] = inst_28647);

(statearr_28653_28680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (1))){
var state_28651__$1 = state_28651;
var statearr_28654_28681 = state_28651__$1;
(statearr_28654_28681[(2)] = null);

(statearr_28654_28681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (4))){
var inst_28630 = (state_28651[(7)]);
var inst_28630__$1 = (state_28651[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28651__$1 = (function (){var statearr_28655 = state_28651;
(statearr_28655[(7)] = inst_28630__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28656_28682 = state_28651__$1;
(statearr_28656_28682[(1)] = (5));

} else {
var statearr_28657_28683 = state_28651__$1;
(statearr_28657_28683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (13))){
var state_28651__$1 = state_28651;
var statearr_28658_28684 = state_28651__$1;
(statearr_28658_28684[(2)] = null);

(statearr_28658_28684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (6))){
var inst_28630 = (state_28651[(7)]);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28651__$1,(11),to,inst_28630);
} else {
if((state_val_28652 === (3))){
var inst_28649 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28651__$1,inst_28649);
} else {
if((state_val_28652 === (12))){
var state_28651__$1 = state_28651;
var statearr_28659_28685 = state_28651__$1;
(statearr_28659_28685[(2)] = null);

(statearr_28659_28685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (2))){
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28651__$1,(4),from);
} else {
if((state_val_28652 === (11))){
var inst_28640 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
if(cljs.core.truth_(inst_28640)){
var statearr_28660_28686 = state_28651__$1;
(statearr_28660_28686[(1)] = (12));

} else {
var statearr_28661_28687 = state_28651__$1;
(statearr_28661_28687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (9))){
var state_28651__$1 = state_28651;
var statearr_28662_28688 = state_28651__$1;
(statearr_28662_28688[(2)] = null);

(statearr_28662_28688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (5))){
var state_28651__$1 = state_28651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28663_28689 = state_28651__$1;
(statearr_28663_28689[(1)] = (8));

} else {
var statearr_28664_28690 = state_28651__$1;
(statearr_28664_28690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (14))){
var inst_28645 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28665_28691 = state_28651__$1;
(statearr_28665_28691[(2)] = inst_28645);

(statearr_28665_28691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (10))){
var inst_28637 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28666_28692 = state_28651__$1;
(statearr_28666_28692[(2)] = inst_28637);

(statearr_28666_28692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (8))){
var inst_28634 = cljs.core.async.close_BANG_.call(null,to);
var state_28651__$1 = state_28651;
var statearr_28667_28693 = state_28651__$1;
(statearr_28667_28693[(2)] = inst_28634);

(statearr_28667_28693[(1)] = (10));


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
});})(c__20959__auto___28679))
;
return ((function (switch__20894__auto__,c__20959__auto___28679){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_28671 = [null,null,null,null,null,null,null,null];
(statearr_28671[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_28671[(1)] = (1));

return statearr_28671;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_28651){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_28651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e28672){if((e28672 instanceof Object)){
var ex__20898__auto__ = e28672;
var statearr_28673_28694 = state_28651;
(statearr_28673_28694[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28695 = state_28651;
state_28651 = G__28695;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_28651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_28651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___28679))
})();
var state__20961__auto__ = (function (){var statearr_28674 = f__20960__auto__.call(null);
(statearr_28674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___28679);

return statearr_28674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___28679))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28879){
var vec__28880 = p__28879;
var v = cljs.core.nth.call(null,vec__28880,(0),null);
var p = cljs.core.nth.call(null,vec__28880,(1),null);
var job = vec__28880;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20959__auto___29062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___29062,res,vec__28880,v,p,job,jobs,results){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___29062,res,vec__28880,v,p,job,jobs,results){
return (function (state_28885){
var state_val_28886 = (state_28885[(1)]);
if((state_val_28886 === (1))){
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28885__$1,(2),res,v);
} else {
if((state_val_28886 === (2))){
var inst_28882 = (state_28885[(2)]);
var inst_28883 = cljs.core.async.close_BANG_.call(null,res);
var state_28885__$1 = (function (){var statearr_28887 = state_28885;
(statearr_28887[(7)] = inst_28882);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28885__$1,inst_28883);
} else {
return null;
}
}
});})(c__20959__auto___29062,res,vec__28880,v,p,job,jobs,results))
;
return ((function (switch__20894__auto__,c__20959__auto___29062,res,vec__28880,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0 = (function (){
var statearr_28891 = [null,null,null,null,null,null,null,null];
(statearr_28891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__);

(statearr_28891[(1)] = (1));

return statearr_28891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1 = (function (state_28885){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_28885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e28892){if((e28892 instanceof Object)){
var ex__20898__auto__ = e28892;
var statearr_28893_29063 = state_28885;
(statearr_28893_29063[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_28885;
state_28885 = G__29064;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = function(state_28885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1.call(this,state_28885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___29062,res,vec__28880,v,p,job,jobs,results))
})();
var state__20961__auto__ = (function (){var statearr_28894 = f__20960__auto__.call(null);
(statearr_28894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___29062);

return statearr_28894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___29062,res,vec__28880,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28895){
var vec__28896 = p__28895;
var v = cljs.core.nth.call(null,vec__28896,(0),null);
var p = cljs.core.nth.call(null,vec__28896,(1),null);
var job = vec__28896;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17278__auto___29065 = n;
var __29066 = (0);
while(true){
if((__29066 < n__17278__auto___29065)){
var G__28897_29067 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28897_29067) {
case "compute":
var c__20959__auto___29069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29066,c__20959__auto___29069,G__28897_29067,n__17278__auto___29065,jobs,results,process,async){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (__29066,c__20959__auto___29069,G__28897_29067,n__17278__auto___29065,jobs,results,process,async){
return (function (state_28910){
var state_val_28911 = (state_28910[(1)]);
if((state_val_28911 === (1))){
var state_28910__$1 = state_28910;
var statearr_28912_29070 = state_28910__$1;
(statearr_28912_29070[(2)] = null);

(statearr_28912_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (2))){
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28910__$1,(4),jobs);
} else {
if((state_val_28911 === (3))){
var inst_28908 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28910__$1,inst_28908);
} else {
if((state_val_28911 === (4))){
var inst_28900 = (state_28910[(2)]);
var inst_28901 = process.call(null,inst_28900);
var state_28910__$1 = state_28910;
if(cljs.core.truth_(inst_28901)){
var statearr_28913_29071 = state_28910__$1;
(statearr_28913_29071[(1)] = (5));

} else {
var statearr_28914_29072 = state_28910__$1;
(statearr_28914_29072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (5))){
var state_28910__$1 = state_28910;
var statearr_28915_29073 = state_28910__$1;
(statearr_28915_29073[(2)] = null);

(statearr_28915_29073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (6))){
var state_28910__$1 = state_28910;
var statearr_28916_29074 = state_28910__$1;
(statearr_28916_29074[(2)] = null);

(statearr_28916_29074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28911 === (7))){
var inst_28906 = (state_28910[(2)]);
var state_28910__$1 = state_28910;
var statearr_28917_29075 = state_28910__$1;
(statearr_28917_29075[(2)] = inst_28906);

(statearr_28917_29075[(1)] = (3));


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
});})(__29066,c__20959__auto___29069,G__28897_29067,n__17278__auto___29065,jobs,results,process,async))
;
return ((function (__29066,switch__20894__auto__,c__20959__auto___29069,G__28897_29067,n__17278__auto___29065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0 = (function (){
var statearr_28921 = [null,null,null,null,null,null,null];
(statearr_28921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__);

(statearr_28921[(1)] = (1));

return statearr_28921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1 = (function (state_28910){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_28910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e28922){if((e28922 instanceof Object)){
var ex__20898__auto__ = e28922;
var statearr_28923_29076 = state_28910;
(statearr_28923_29076[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29077 = state_28910;
state_28910 = G__29077;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = function(state_28910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1.call(this,state_28910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__;
})()
;})(__29066,switch__20894__auto__,c__20959__auto___29069,G__28897_29067,n__17278__auto___29065,jobs,results,process,async))
})();
var state__20961__auto__ = (function (){var statearr_28924 = f__20960__auto__.call(null);
(statearr_28924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___29069);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(__29066,c__20959__auto___29069,G__28897_29067,n__17278__auto___29065,jobs,results,process,async))
);


break;
case "async":
var c__20959__auto___29078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29066,c__20959__auto___29078,G__28897_29067,n__17278__auto___29065,jobs,results,process,async){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (__29066,c__20959__auto___29078,G__28897_29067,n__17278__auto___29065,jobs,results,process,async){
return (function (state_28937){
var state_val_28938 = (state_28937[(1)]);
if((state_val_28938 === (1))){
var state_28937__$1 = state_28937;
var statearr_28939_29079 = state_28937__$1;
(statearr_28939_29079[(2)] = null);

(statearr_28939_29079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (2))){
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28937__$1,(4),jobs);
} else {
if((state_val_28938 === (3))){
var inst_28935 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28937__$1,inst_28935);
} else {
if((state_val_28938 === (4))){
var inst_28927 = (state_28937[(2)]);
var inst_28928 = async.call(null,inst_28927);
var state_28937__$1 = state_28937;
if(cljs.core.truth_(inst_28928)){
var statearr_28940_29080 = state_28937__$1;
(statearr_28940_29080[(1)] = (5));

} else {
var statearr_28941_29081 = state_28937__$1;
(statearr_28941_29081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (5))){
var state_28937__$1 = state_28937;
var statearr_28942_29082 = state_28937__$1;
(statearr_28942_29082[(2)] = null);

(statearr_28942_29082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (6))){
var state_28937__$1 = state_28937;
var statearr_28943_29083 = state_28937__$1;
(statearr_28943_29083[(2)] = null);

(statearr_28943_29083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28938 === (7))){
var inst_28933 = (state_28937[(2)]);
var state_28937__$1 = state_28937;
var statearr_28944_29084 = state_28937__$1;
(statearr_28944_29084[(2)] = inst_28933);

(statearr_28944_29084[(1)] = (3));


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
});})(__29066,c__20959__auto___29078,G__28897_29067,n__17278__auto___29065,jobs,results,process,async))
;
return ((function (__29066,switch__20894__auto__,c__20959__auto___29078,G__28897_29067,n__17278__auto___29065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0 = (function (){
var statearr_28948 = [null,null,null,null,null,null,null];
(statearr_28948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__);

(statearr_28948[(1)] = (1));

return statearr_28948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1 = (function (state_28937){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_28937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e28949){if((e28949 instanceof Object)){
var ex__20898__auto__ = e28949;
var statearr_28950_29085 = state_28937;
(statearr_28950_29085[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29086 = state_28937;
state_28937 = G__29086;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = function(state_28937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1.call(this,state_28937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__;
})()
;})(__29066,switch__20894__auto__,c__20959__auto___29078,G__28897_29067,n__17278__auto___29065,jobs,results,process,async))
})();
var state__20961__auto__ = (function (){var statearr_28951 = f__20960__auto__.call(null);
(statearr_28951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___29078);

return statearr_28951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(__29066,c__20959__auto___29078,G__28897_29067,n__17278__auto___29065,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29087 = (__29066 + (1));
__29066 = G__29087;
continue;
} else {
}
break;
}

var c__20959__auto___29088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___29088,jobs,results,process,async){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___29088,jobs,results,process,async){
return (function (state_28973){
var state_val_28974 = (state_28973[(1)]);
if((state_val_28974 === (1))){
var state_28973__$1 = state_28973;
var statearr_28975_29089 = state_28973__$1;
(statearr_28975_29089[(2)] = null);

(statearr_28975_29089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (2))){
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28973__$1,(4),from);
} else {
if((state_val_28974 === (3))){
var inst_28971 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28973__$1,inst_28971);
} else {
if((state_val_28974 === (4))){
var inst_28954 = (state_28973[(7)]);
var inst_28954__$1 = (state_28973[(2)]);
var inst_28955 = (inst_28954__$1 == null);
var state_28973__$1 = (function (){var statearr_28976 = state_28973;
(statearr_28976[(7)] = inst_28954__$1);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_28977_29090 = state_28973__$1;
(statearr_28977_29090[(1)] = (5));

} else {
var statearr_28978_29091 = state_28973__$1;
(statearr_28978_29091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (5))){
var inst_28957 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28973__$1 = state_28973;
var statearr_28979_29092 = state_28973__$1;
(statearr_28979_29092[(2)] = inst_28957);

(statearr_28979_29092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (6))){
var inst_28959 = (state_28973[(8)]);
var inst_28954 = (state_28973[(7)]);
var inst_28959__$1 = cljs.core.async.chan.call(null,(1));
var inst_28960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28961 = [inst_28954,inst_28959__$1];
var inst_28962 = (new cljs.core.PersistentVector(null,2,(5),inst_28960,inst_28961,null));
var state_28973__$1 = (function (){var statearr_28980 = state_28973;
(statearr_28980[(8)] = inst_28959__$1);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28973__$1,(8),jobs,inst_28962);
} else {
if((state_val_28974 === (7))){
var inst_28969 = (state_28973[(2)]);
var state_28973__$1 = state_28973;
var statearr_28981_29093 = state_28973__$1;
(statearr_28981_29093[(2)] = inst_28969);

(statearr_28981_29093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28974 === (8))){
var inst_28959 = (state_28973[(8)]);
var inst_28964 = (state_28973[(2)]);
var state_28973__$1 = (function (){var statearr_28982 = state_28973;
(statearr_28982[(9)] = inst_28964);

return statearr_28982;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28973__$1,(9),results,inst_28959);
} else {
if((state_val_28974 === (9))){
var inst_28966 = (state_28973[(2)]);
var state_28973__$1 = (function (){var statearr_28983 = state_28973;
(statearr_28983[(10)] = inst_28966);

return statearr_28983;
})();
var statearr_28984_29094 = state_28973__$1;
(statearr_28984_29094[(2)] = null);

(statearr_28984_29094[(1)] = (2));


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
});})(c__20959__auto___29088,jobs,results,process,async))
;
return ((function (switch__20894__auto__,c__20959__auto___29088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0 = (function (){
var statearr_28988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__);

(statearr_28988[(1)] = (1));

return statearr_28988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1 = (function (state_28973){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_28973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e28989){if((e28989 instanceof Object)){
var ex__20898__auto__ = e28989;
var statearr_28990_29095 = state_28973;
(statearr_28990_29095[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29096 = state_28973;
state_28973 = G__29096;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = function(state_28973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1.call(this,state_28973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___29088,jobs,results,process,async))
})();
var state__20961__auto__ = (function (){var statearr_28991 = f__20960__auto__.call(null);
(statearr_28991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___29088);

return statearr_28991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___29088,jobs,results,process,async))
);


var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__,jobs,results,process,async){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__,jobs,results,process,async){
return (function (state_29029){
var state_val_29030 = (state_29029[(1)]);
if((state_val_29030 === (7))){
var inst_29025 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29031_29097 = state_29029__$1;
(statearr_29031_29097[(2)] = inst_29025);

(statearr_29031_29097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (20))){
var state_29029__$1 = state_29029;
var statearr_29032_29098 = state_29029__$1;
(statearr_29032_29098[(2)] = null);

(statearr_29032_29098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (1))){
var state_29029__$1 = state_29029;
var statearr_29033_29099 = state_29029__$1;
(statearr_29033_29099[(2)] = null);

(statearr_29033_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (4))){
var inst_28994 = (state_29029[(7)]);
var inst_28994__$1 = (state_29029[(2)]);
var inst_28995 = (inst_28994__$1 == null);
var state_29029__$1 = (function (){var statearr_29034 = state_29029;
(statearr_29034[(7)] = inst_28994__$1);

return statearr_29034;
})();
if(cljs.core.truth_(inst_28995)){
var statearr_29035_29100 = state_29029__$1;
(statearr_29035_29100[(1)] = (5));

} else {
var statearr_29036_29101 = state_29029__$1;
(statearr_29036_29101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (15))){
var inst_29007 = (state_29029[(8)]);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29029__$1,(18),to,inst_29007);
} else {
if((state_val_29030 === (21))){
var inst_29020 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29037_29102 = state_29029__$1;
(statearr_29037_29102[(2)] = inst_29020);

(statearr_29037_29102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (13))){
var inst_29022 = (state_29029[(2)]);
var state_29029__$1 = (function (){var statearr_29038 = state_29029;
(statearr_29038[(9)] = inst_29022);

return statearr_29038;
})();
var statearr_29039_29103 = state_29029__$1;
(statearr_29039_29103[(2)] = null);

(statearr_29039_29103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (6))){
var inst_28994 = (state_29029[(7)]);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29029__$1,(11),inst_28994);
} else {
if((state_val_29030 === (17))){
var inst_29015 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
if(cljs.core.truth_(inst_29015)){
var statearr_29040_29104 = state_29029__$1;
(statearr_29040_29104[(1)] = (19));

} else {
var statearr_29041_29105 = state_29029__$1;
(statearr_29041_29105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (3))){
var inst_29027 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29029__$1,inst_29027);
} else {
if((state_val_29030 === (12))){
var inst_29004 = (state_29029[(10)]);
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29029__$1,(14),inst_29004);
} else {
if((state_val_29030 === (2))){
var state_29029__$1 = state_29029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29029__$1,(4),results);
} else {
if((state_val_29030 === (19))){
var state_29029__$1 = state_29029;
var statearr_29042_29106 = state_29029__$1;
(statearr_29042_29106[(2)] = null);

(statearr_29042_29106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (11))){
var inst_29004 = (state_29029[(2)]);
var state_29029__$1 = (function (){var statearr_29043 = state_29029;
(statearr_29043[(10)] = inst_29004);

return statearr_29043;
})();
var statearr_29044_29107 = state_29029__$1;
(statearr_29044_29107[(2)] = null);

(statearr_29044_29107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (9))){
var state_29029__$1 = state_29029;
var statearr_29045_29108 = state_29029__$1;
(statearr_29045_29108[(2)] = null);

(statearr_29045_29108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (5))){
var state_29029__$1 = state_29029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29046_29109 = state_29029__$1;
(statearr_29046_29109[(1)] = (8));

} else {
var statearr_29047_29110 = state_29029__$1;
(statearr_29047_29110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (14))){
var inst_29009 = (state_29029[(11)]);
var inst_29007 = (state_29029[(8)]);
var inst_29007__$1 = (state_29029[(2)]);
var inst_29008 = (inst_29007__$1 == null);
var inst_29009__$1 = cljs.core.not.call(null,inst_29008);
var state_29029__$1 = (function (){var statearr_29048 = state_29029;
(statearr_29048[(11)] = inst_29009__$1);

(statearr_29048[(8)] = inst_29007__$1);

return statearr_29048;
})();
if(inst_29009__$1){
var statearr_29049_29111 = state_29029__$1;
(statearr_29049_29111[(1)] = (15));

} else {
var statearr_29050_29112 = state_29029__$1;
(statearr_29050_29112[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (16))){
var inst_29009 = (state_29029[(11)]);
var state_29029__$1 = state_29029;
var statearr_29051_29113 = state_29029__$1;
(statearr_29051_29113[(2)] = inst_29009);

(statearr_29051_29113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (10))){
var inst_29001 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29052_29114 = state_29029__$1;
(statearr_29052_29114[(2)] = inst_29001);

(statearr_29052_29114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (18))){
var inst_29012 = (state_29029[(2)]);
var state_29029__$1 = state_29029;
var statearr_29053_29115 = state_29029__$1;
(statearr_29053_29115[(2)] = inst_29012);

(statearr_29053_29115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29030 === (8))){
var inst_28998 = cljs.core.async.close_BANG_.call(null,to);
var state_29029__$1 = state_29029;
var statearr_29054_29116 = state_29029__$1;
(statearr_29054_29116[(2)] = inst_28998);

(statearr_29054_29116[(1)] = (10));


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
});})(c__20959__auto__,jobs,results,process,async))
;
return ((function (switch__20894__auto__,c__20959__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1 = (function (state_29029){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_29029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__20898__auto__ = e29059;
var statearr_29060_29117 = state_29029;
(statearr_29060_29117[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29118 = state_29029;
state_29029 = G__29118;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__ = function(state_29029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1.call(this,state_29029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__,jobs,results,process,async))
})();
var state__20961__auto__ = (function (){var statearr_29061 = f__20960__auto__.call(null);
(statearr_29061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_29061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__,jobs,results,process,async))
);

return c__20959__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29119 = [];
var len__17433__auto___29122 = arguments.length;
var i__17434__auto___29123 = (0);
while(true){
if((i__17434__auto___29123 < len__17433__auto___29122)){
args29119.push((arguments[i__17434__auto___29123]));

var G__29124 = (i__17434__auto___29123 + (1));
i__17434__auto___29123 = G__29124;
continue;
} else {
}
break;
}

var G__29121 = args29119.length;
switch (G__29121) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29119.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29126 = [];
var len__17433__auto___29129 = arguments.length;
var i__17434__auto___29130 = (0);
while(true){
if((i__17434__auto___29130 < len__17433__auto___29129)){
args29126.push((arguments[i__17434__auto___29130]));

var G__29131 = (i__17434__auto___29130 + (1));
i__17434__auto___29130 = G__29131;
continue;
} else {
}
break;
}

var G__29128 = args29126.length;
switch (G__29128) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29126.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29133 = [];
var len__17433__auto___29186 = arguments.length;
var i__17434__auto___29187 = (0);
while(true){
if((i__17434__auto___29187 < len__17433__auto___29186)){
args29133.push((arguments[i__17434__auto___29187]));

var G__29188 = (i__17434__auto___29187 + (1));
i__17434__auto___29187 = G__29188;
continue;
} else {
}
break;
}

var G__29135 = args29133.length;
switch (G__29135) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29133.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20959__auto___29190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___29190,tc,fc){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___29190,tc,fc){
return (function (state_29161){
var state_val_29162 = (state_29161[(1)]);
if((state_val_29162 === (7))){
var inst_29157 = (state_29161[(2)]);
var state_29161__$1 = state_29161;
var statearr_29163_29191 = state_29161__$1;
(statearr_29163_29191[(2)] = inst_29157);

(statearr_29163_29191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (1))){
var state_29161__$1 = state_29161;
var statearr_29164_29192 = state_29161__$1;
(statearr_29164_29192[(2)] = null);

(statearr_29164_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (4))){
var inst_29138 = (state_29161[(7)]);
var inst_29138__$1 = (state_29161[(2)]);
var inst_29139 = (inst_29138__$1 == null);
var state_29161__$1 = (function (){var statearr_29165 = state_29161;
(statearr_29165[(7)] = inst_29138__$1);

return statearr_29165;
})();
if(cljs.core.truth_(inst_29139)){
var statearr_29166_29193 = state_29161__$1;
(statearr_29166_29193[(1)] = (5));

} else {
var statearr_29167_29194 = state_29161__$1;
(statearr_29167_29194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (13))){
var state_29161__$1 = state_29161;
var statearr_29168_29195 = state_29161__$1;
(statearr_29168_29195[(2)] = null);

(statearr_29168_29195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (6))){
var inst_29138 = (state_29161[(7)]);
var inst_29144 = p.call(null,inst_29138);
var state_29161__$1 = state_29161;
if(cljs.core.truth_(inst_29144)){
var statearr_29169_29196 = state_29161__$1;
(statearr_29169_29196[(1)] = (9));

} else {
var statearr_29170_29197 = state_29161__$1;
(statearr_29170_29197[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (3))){
var inst_29159 = (state_29161[(2)]);
var state_29161__$1 = state_29161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29161__$1,inst_29159);
} else {
if((state_val_29162 === (12))){
var state_29161__$1 = state_29161;
var statearr_29171_29198 = state_29161__$1;
(statearr_29171_29198[(2)] = null);

(statearr_29171_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (2))){
var state_29161__$1 = state_29161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29161__$1,(4),ch);
} else {
if((state_val_29162 === (11))){
var inst_29138 = (state_29161[(7)]);
var inst_29148 = (state_29161[(2)]);
var state_29161__$1 = state_29161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29161__$1,(8),inst_29148,inst_29138);
} else {
if((state_val_29162 === (9))){
var state_29161__$1 = state_29161;
var statearr_29172_29199 = state_29161__$1;
(statearr_29172_29199[(2)] = tc);

(statearr_29172_29199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (5))){
var inst_29141 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29142 = cljs.core.async.close_BANG_.call(null,fc);
var state_29161__$1 = (function (){var statearr_29173 = state_29161;
(statearr_29173[(8)] = inst_29141);

return statearr_29173;
})();
var statearr_29174_29200 = state_29161__$1;
(statearr_29174_29200[(2)] = inst_29142);

(statearr_29174_29200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (14))){
var inst_29155 = (state_29161[(2)]);
var state_29161__$1 = state_29161;
var statearr_29175_29201 = state_29161__$1;
(statearr_29175_29201[(2)] = inst_29155);

(statearr_29175_29201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (10))){
var state_29161__$1 = state_29161;
var statearr_29176_29202 = state_29161__$1;
(statearr_29176_29202[(2)] = fc);

(statearr_29176_29202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29162 === (8))){
var inst_29150 = (state_29161[(2)]);
var state_29161__$1 = state_29161;
if(cljs.core.truth_(inst_29150)){
var statearr_29177_29203 = state_29161__$1;
(statearr_29177_29203[(1)] = (12));

} else {
var statearr_29178_29204 = state_29161__$1;
(statearr_29178_29204[(1)] = (13));

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
});})(c__20959__auto___29190,tc,fc))
;
return ((function (switch__20894__auto__,c__20959__auto___29190,tc,fc){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_29182 = [null,null,null,null,null,null,null,null,null];
(statearr_29182[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_29182[(1)] = (1));

return statearr_29182;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_29161){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_29161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e29183){if((e29183 instanceof Object)){
var ex__20898__auto__ = e29183;
var statearr_29184_29205 = state_29161;
(statearr_29184_29205[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29206 = state_29161;
state_29161 = G__29206;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_29161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_29161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___29190,tc,fc))
})();
var state__20961__auto__ = (function (){var statearr_29185 = f__20960__auto__.call(null);
(statearr_29185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___29190);

return statearr_29185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___29190,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__){
return (function (state_29253){
var state_val_29254 = (state_29253[(1)]);
if((state_val_29254 === (1))){
var inst_29239 = init;
var state_29253__$1 = (function (){var statearr_29255 = state_29253;
(statearr_29255[(7)] = inst_29239);

return statearr_29255;
})();
var statearr_29256_29271 = state_29253__$1;
(statearr_29256_29271[(2)] = null);

(statearr_29256_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (2))){
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29253__$1,(4),ch);
} else {
if((state_val_29254 === (3))){
var inst_29251 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29253__$1,inst_29251);
} else {
if((state_val_29254 === (4))){
var inst_29242 = (state_29253[(8)]);
var inst_29242__$1 = (state_29253[(2)]);
var inst_29243 = (inst_29242__$1 == null);
var state_29253__$1 = (function (){var statearr_29257 = state_29253;
(statearr_29257[(8)] = inst_29242__$1);

return statearr_29257;
})();
if(cljs.core.truth_(inst_29243)){
var statearr_29258_29272 = state_29253__$1;
(statearr_29258_29272[(1)] = (5));

} else {
var statearr_29259_29273 = state_29253__$1;
(statearr_29259_29273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (5))){
var inst_29239 = (state_29253[(7)]);
var state_29253__$1 = state_29253;
var statearr_29260_29274 = state_29253__$1;
(statearr_29260_29274[(2)] = inst_29239);

(statearr_29260_29274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (6))){
var inst_29239 = (state_29253[(7)]);
var inst_29242 = (state_29253[(8)]);
var inst_29246 = f.call(null,inst_29239,inst_29242);
var inst_29239__$1 = inst_29246;
var state_29253__$1 = (function (){var statearr_29261 = state_29253;
(statearr_29261[(7)] = inst_29239__$1);

return statearr_29261;
})();
var statearr_29262_29275 = state_29253__$1;
(statearr_29262_29275[(2)] = null);

(statearr_29262_29275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (7))){
var inst_29249 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29263_29276 = state_29253__$1;
(statearr_29263_29276[(2)] = inst_29249);

(statearr_29263_29276[(1)] = (3));


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
});})(c__20959__auto__))
;
return ((function (switch__20894__auto__,c__20959__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20895__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20895__auto____0 = (function (){
var statearr_29267 = [null,null,null,null,null,null,null,null,null];
(statearr_29267[(0)] = cljs$core$async$reduce_$_state_machine__20895__auto__);

(statearr_29267[(1)] = (1));

return statearr_29267;
});
var cljs$core$async$reduce_$_state_machine__20895__auto____1 = (function (state_29253){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_29253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e29268){if((e29268 instanceof Object)){
var ex__20898__auto__ = e29268;
var statearr_29269_29277 = state_29253;
(statearr_29269_29277[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29278 = state_29253;
state_29253 = G__29278;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20895__auto__ = function(state_29253){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20895__auto____1.call(this,state_29253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20895__auto____0;
cljs$core$async$reduce_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20895__auto____1;
return cljs$core$async$reduce_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__))
})();
var state__20961__auto__ = (function (){var statearr_29270 = f__20960__auto__.call(null);
(statearr_29270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_29270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__))
);

return c__20959__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29279 = [];
var len__17433__auto___29331 = arguments.length;
var i__17434__auto___29332 = (0);
while(true){
if((i__17434__auto___29332 < len__17433__auto___29331)){
args29279.push((arguments[i__17434__auto___29332]));

var G__29333 = (i__17434__auto___29332 + (1));
i__17434__auto___29332 = G__29333;
continue;
} else {
}
break;
}

var G__29281 = args29279.length;
switch (G__29281) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29279.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__){
return (function (state_29306){
var state_val_29307 = (state_29306[(1)]);
if((state_val_29307 === (7))){
var inst_29288 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29308_29335 = state_29306__$1;
(statearr_29308_29335[(2)] = inst_29288);

(statearr_29308_29335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (1))){
var inst_29282 = cljs.core.seq.call(null,coll);
var inst_29283 = inst_29282;
var state_29306__$1 = (function (){var statearr_29309 = state_29306;
(statearr_29309[(7)] = inst_29283);

return statearr_29309;
})();
var statearr_29310_29336 = state_29306__$1;
(statearr_29310_29336[(2)] = null);

(statearr_29310_29336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (4))){
var inst_29283 = (state_29306[(7)]);
var inst_29286 = cljs.core.first.call(null,inst_29283);
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29306__$1,(7),ch,inst_29286);
} else {
if((state_val_29307 === (13))){
var inst_29300 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29311_29337 = state_29306__$1;
(statearr_29311_29337[(2)] = inst_29300);

(statearr_29311_29337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (6))){
var inst_29291 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
if(cljs.core.truth_(inst_29291)){
var statearr_29312_29338 = state_29306__$1;
(statearr_29312_29338[(1)] = (8));

} else {
var statearr_29313_29339 = state_29306__$1;
(statearr_29313_29339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (3))){
var inst_29304 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29306__$1,inst_29304);
} else {
if((state_val_29307 === (12))){
var state_29306__$1 = state_29306;
var statearr_29314_29340 = state_29306__$1;
(statearr_29314_29340[(2)] = null);

(statearr_29314_29340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (2))){
var inst_29283 = (state_29306[(7)]);
var state_29306__$1 = state_29306;
if(cljs.core.truth_(inst_29283)){
var statearr_29315_29341 = state_29306__$1;
(statearr_29315_29341[(1)] = (4));

} else {
var statearr_29316_29342 = state_29306__$1;
(statearr_29316_29342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (11))){
var inst_29297 = cljs.core.async.close_BANG_.call(null,ch);
var state_29306__$1 = state_29306;
var statearr_29317_29343 = state_29306__$1;
(statearr_29317_29343[(2)] = inst_29297);

(statearr_29317_29343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (9))){
var state_29306__$1 = state_29306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29318_29344 = state_29306__$1;
(statearr_29318_29344[(1)] = (11));

} else {
var statearr_29319_29345 = state_29306__$1;
(statearr_29319_29345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (5))){
var inst_29283 = (state_29306[(7)]);
var state_29306__$1 = state_29306;
var statearr_29320_29346 = state_29306__$1;
(statearr_29320_29346[(2)] = inst_29283);

(statearr_29320_29346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (10))){
var inst_29302 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29321_29347 = state_29306__$1;
(statearr_29321_29347[(2)] = inst_29302);

(statearr_29321_29347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (8))){
var inst_29283 = (state_29306[(7)]);
var inst_29293 = cljs.core.next.call(null,inst_29283);
var inst_29283__$1 = inst_29293;
var state_29306__$1 = (function (){var statearr_29322 = state_29306;
(statearr_29322[(7)] = inst_29283__$1);

return statearr_29322;
})();
var statearr_29323_29348 = state_29306__$1;
(statearr_29323_29348[(2)] = null);

(statearr_29323_29348[(1)] = (2));


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
});})(c__20959__auto__))
;
return ((function (switch__20894__auto__,c__20959__auto__){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null,null];
(statearr_29327[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_29306){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_29306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e29328){if((e29328 instanceof Object)){
var ex__20898__auto__ = e29328;
var statearr_29329_29349 = state_29306;
(statearr_29329_29349[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29350 = state_29306;
state_29306 = G__29350;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_29306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_29306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__))
})();
var state__20961__auto__ = (function (){var statearr_29330 = f__20960__auto__.call(null);
(statearr_29330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__))
);

return c__20959__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17030__auto__ = (((_ == null))?null:_);
var m__17031__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,_);
} else {
var m__17031__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17031__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m);
} else {
var m__17031__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29572 = (function (mult,ch,cs,meta29573){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29573 = meta29573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29574,meta29573__$1){
var self__ = this;
var _29574__$1 = this;
return (new cljs.core.async.t_cljs$core$async29572(self__.mult,self__.ch,self__.cs,meta29573__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29574){
var self__ = this;
var _29574__$1 = this;
return self__.meta29573;
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29573","meta29573",-520392874,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29572";

cljs.core.async.t_cljs$core$async29572.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async29572");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29572 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29572(mult__$1,ch__$1,cs__$1,meta29573){
return (new cljs.core.async.t_cljs$core$async29572(mult__$1,ch__$1,cs__$1,meta29573));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29572(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20959__auto___29793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___29793,cs,m,dchan,dctr,done){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___29793,cs,m,dchan,dctr,done){
return (function (state_29705){
var state_val_29706 = (state_29705[(1)]);
if((state_val_29706 === (7))){
var inst_29701 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29707_29794 = state_29705__$1;
(statearr_29707_29794[(2)] = inst_29701);

(statearr_29707_29794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (20))){
var inst_29606 = (state_29705[(7)]);
var inst_29616 = cljs.core.first.call(null,inst_29606);
var inst_29617 = cljs.core.nth.call(null,inst_29616,(0),null);
var inst_29618 = cljs.core.nth.call(null,inst_29616,(1),null);
var state_29705__$1 = (function (){var statearr_29708 = state_29705;
(statearr_29708[(8)] = inst_29617);

return statearr_29708;
})();
if(cljs.core.truth_(inst_29618)){
var statearr_29709_29795 = state_29705__$1;
(statearr_29709_29795[(1)] = (22));

} else {
var statearr_29710_29796 = state_29705__$1;
(statearr_29710_29796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (27))){
var inst_29648 = (state_29705[(9)]);
var inst_29653 = (state_29705[(10)]);
var inst_29646 = (state_29705[(11)]);
var inst_29577 = (state_29705[(12)]);
var inst_29653__$1 = cljs.core._nth.call(null,inst_29646,inst_29648);
var inst_29654 = cljs.core.async.put_BANG_.call(null,inst_29653__$1,inst_29577,done);
var state_29705__$1 = (function (){var statearr_29711 = state_29705;
(statearr_29711[(10)] = inst_29653__$1);

return statearr_29711;
})();
if(cljs.core.truth_(inst_29654)){
var statearr_29712_29797 = state_29705__$1;
(statearr_29712_29797[(1)] = (30));

} else {
var statearr_29713_29798 = state_29705__$1;
(statearr_29713_29798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (1))){
var state_29705__$1 = state_29705;
var statearr_29714_29799 = state_29705__$1;
(statearr_29714_29799[(2)] = null);

(statearr_29714_29799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (24))){
var inst_29606 = (state_29705[(7)]);
var inst_29623 = (state_29705[(2)]);
var inst_29624 = cljs.core.next.call(null,inst_29606);
var inst_29586 = inst_29624;
var inst_29587 = null;
var inst_29588 = (0);
var inst_29589 = (0);
var state_29705__$1 = (function (){var statearr_29715 = state_29705;
(statearr_29715[(13)] = inst_29587);

(statearr_29715[(14)] = inst_29586);

(statearr_29715[(15)] = inst_29589);

(statearr_29715[(16)] = inst_29623);

(statearr_29715[(17)] = inst_29588);

return statearr_29715;
})();
var statearr_29716_29800 = state_29705__$1;
(statearr_29716_29800[(2)] = null);

(statearr_29716_29800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (39))){
var state_29705__$1 = state_29705;
var statearr_29720_29801 = state_29705__$1;
(statearr_29720_29801[(2)] = null);

(statearr_29720_29801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (4))){
var inst_29577 = (state_29705[(12)]);
var inst_29577__$1 = (state_29705[(2)]);
var inst_29578 = (inst_29577__$1 == null);
var state_29705__$1 = (function (){var statearr_29721 = state_29705;
(statearr_29721[(12)] = inst_29577__$1);

return statearr_29721;
})();
if(cljs.core.truth_(inst_29578)){
var statearr_29722_29802 = state_29705__$1;
(statearr_29722_29802[(1)] = (5));

} else {
var statearr_29723_29803 = state_29705__$1;
(statearr_29723_29803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (15))){
var inst_29587 = (state_29705[(13)]);
var inst_29586 = (state_29705[(14)]);
var inst_29589 = (state_29705[(15)]);
var inst_29588 = (state_29705[(17)]);
var inst_29602 = (state_29705[(2)]);
var inst_29603 = (inst_29589 + (1));
var tmp29717 = inst_29587;
var tmp29718 = inst_29586;
var tmp29719 = inst_29588;
var inst_29586__$1 = tmp29718;
var inst_29587__$1 = tmp29717;
var inst_29588__$1 = tmp29719;
var inst_29589__$1 = inst_29603;
var state_29705__$1 = (function (){var statearr_29724 = state_29705;
(statearr_29724[(13)] = inst_29587__$1);

(statearr_29724[(14)] = inst_29586__$1);

(statearr_29724[(15)] = inst_29589__$1);

(statearr_29724[(17)] = inst_29588__$1);

(statearr_29724[(18)] = inst_29602);

return statearr_29724;
})();
var statearr_29725_29804 = state_29705__$1;
(statearr_29725_29804[(2)] = null);

(statearr_29725_29804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (21))){
var inst_29627 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29729_29805 = state_29705__$1;
(statearr_29729_29805[(2)] = inst_29627);

(statearr_29729_29805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (31))){
var inst_29653 = (state_29705[(10)]);
var inst_29657 = done.call(null,null);
var inst_29658 = cljs.core.async.untap_STAR_.call(null,m,inst_29653);
var state_29705__$1 = (function (){var statearr_29730 = state_29705;
(statearr_29730[(19)] = inst_29657);

return statearr_29730;
})();
var statearr_29731_29806 = state_29705__$1;
(statearr_29731_29806[(2)] = inst_29658);

(statearr_29731_29806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (32))){
var inst_29648 = (state_29705[(9)]);
var inst_29646 = (state_29705[(11)]);
var inst_29645 = (state_29705[(20)]);
var inst_29647 = (state_29705[(21)]);
var inst_29660 = (state_29705[(2)]);
var inst_29661 = (inst_29648 + (1));
var tmp29726 = inst_29646;
var tmp29727 = inst_29645;
var tmp29728 = inst_29647;
var inst_29645__$1 = tmp29727;
var inst_29646__$1 = tmp29726;
var inst_29647__$1 = tmp29728;
var inst_29648__$1 = inst_29661;
var state_29705__$1 = (function (){var statearr_29732 = state_29705;
(statearr_29732[(9)] = inst_29648__$1);

(statearr_29732[(22)] = inst_29660);

(statearr_29732[(11)] = inst_29646__$1);

(statearr_29732[(20)] = inst_29645__$1);

(statearr_29732[(21)] = inst_29647__$1);

return statearr_29732;
})();
var statearr_29733_29807 = state_29705__$1;
(statearr_29733_29807[(2)] = null);

(statearr_29733_29807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (40))){
var inst_29673 = (state_29705[(23)]);
var inst_29677 = done.call(null,null);
var inst_29678 = cljs.core.async.untap_STAR_.call(null,m,inst_29673);
var state_29705__$1 = (function (){var statearr_29734 = state_29705;
(statearr_29734[(24)] = inst_29677);

return statearr_29734;
})();
var statearr_29735_29808 = state_29705__$1;
(statearr_29735_29808[(2)] = inst_29678);

(statearr_29735_29808[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (33))){
var inst_29664 = (state_29705[(25)]);
var inst_29666 = cljs.core.chunked_seq_QMARK_.call(null,inst_29664);
var state_29705__$1 = state_29705;
if(inst_29666){
var statearr_29736_29809 = state_29705__$1;
(statearr_29736_29809[(1)] = (36));

} else {
var statearr_29737_29810 = state_29705__$1;
(statearr_29737_29810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (13))){
var inst_29596 = (state_29705[(26)]);
var inst_29599 = cljs.core.async.close_BANG_.call(null,inst_29596);
var state_29705__$1 = state_29705;
var statearr_29738_29811 = state_29705__$1;
(statearr_29738_29811[(2)] = inst_29599);

(statearr_29738_29811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (22))){
var inst_29617 = (state_29705[(8)]);
var inst_29620 = cljs.core.async.close_BANG_.call(null,inst_29617);
var state_29705__$1 = state_29705;
var statearr_29739_29812 = state_29705__$1;
(statearr_29739_29812[(2)] = inst_29620);

(statearr_29739_29812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (36))){
var inst_29664 = (state_29705[(25)]);
var inst_29668 = cljs.core.chunk_first.call(null,inst_29664);
var inst_29669 = cljs.core.chunk_rest.call(null,inst_29664);
var inst_29670 = cljs.core.count.call(null,inst_29668);
var inst_29645 = inst_29669;
var inst_29646 = inst_29668;
var inst_29647 = inst_29670;
var inst_29648 = (0);
var state_29705__$1 = (function (){var statearr_29740 = state_29705;
(statearr_29740[(9)] = inst_29648);

(statearr_29740[(11)] = inst_29646);

(statearr_29740[(20)] = inst_29645);

(statearr_29740[(21)] = inst_29647);

return statearr_29740;
})();
var statearr_29741_29813 = state_29705__$1;
(statearr_29741_29813[(2)] = null);

(statearr_29741_29813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (41))){
var inst_29664 = (state_29705[(25)]);
var inst_29680 = (state_29705[(2)]);
var inst_29681 = cljs.core.next.call(null,inst_29664);
var inst_29645 = inst_29681;
var inst_29646 = null;
var inst_29647 = (0);
var inst_29648 = (0);
var state_29705__$1 = (function (){var statearr_29742 = state_29705;
(statearr_29742[(9)] = inst_29648);

(statearr_29742[(27)] = inst_29680);

(statearr_29742[(11)] = inst_29646);

(statearr_29742[(20)] = inst_29645);

(statearr_29742[(21)] = inst_29647);

return statearr_29742;
})();
var statearr_29743_29814 = state_29705__$1;
(statearr_29743_29814[(2)] = null);

(statearr_29743_29814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (43))){
var state_29705__$1 = state_29705;
var statearr_29744_29815 = state_29705__$1;
(statearr_29744_29815[(2)] = null);

(statearr_29744_29815[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (29))){
var inst_29689 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29745_29816 = state_29705__$1;
(statearr_29745_29816[(2)] = inst_29689);

(statearr_29745_29816[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (44))){
var inst_29698 = (state_29705[(2)]);
var state_29705__$1 = (function (){var statearr_29746 = state_29705;
(statearr_29746[(28)] = inst_29698);

return statearr_29746;
})();
var statearr_29747_29817 = state_29705__$1;
(statearr_29747_29817[(2)] = null);

(statearr_29747_29817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (6))){
var inst_29637 = (state_29705[(29)]);
var inst_29636 = cljs.core.deref.call(null,cs);
var inst_29637__$1 = cljs.core.keys.call(null,inst_29636);
var inst_29638 = cljs.core.count.call(null,inst_29637__$1);
var inst_29639 = cljs.core.reset_BANG_.call(null,dctr,inst_29638);
var inst_29644 = cljs.core.seq.call(null,inst_29637__$1);
var inst_29645 = inst_29644;
var inst_29646 = null;
var inst_29647 = (0);
var inst_29648 = (0);
var state_29705__$1 = (function (){var statearr_29748 = state_29705;
(statearr_29748[(9)] = inst_29648);

(statearr_29748[(11)] = inst_29646);

(statearr_29748[(30)] = inst_29639);

(statearr_29748[(29)] = inst_29637__$1);

(statearr_29748[(20)] = inst_29645);

(statearr_29748[(21)] = inst_29647);

return statearr_29748;
})();
var statearr_29749_29818 = state_29705__$1;
(statearr_29749_29818[(2)] = null);

(statearr_29749_29818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (28))){
var inst_29664 = (state_29705[(25)]);
var inst_29645 = (state_29705[(20)]);
var inst_29664__$1 = cljs.core.seq.call(null,inst_29645);
var state_29705__$1 = (function (){var statearr_29750 = state_29705;
(statearr_29750[(25)] = inst_29664__$1);

return statearr_29750;
})();
if(inst_29664__$1){
var statearr_29751_29819 = state_29705__$1;
(statearr_29751_29819[(1)] = (33));

} else {
var statearr_29752_29820 = state_29705__$1;
(statearr_29752_29820[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (25))){
var inst_29648 = (state_29705[(9)]);
var inst_29647 = (state_29705[(21)]);
var inst_29650 = (inst_29648 < inst_29647);
var inst_29651 = inst_29650;
var state_29705__$1 = state_29705;
if(cljs.core.truth_(inst_29651)){
var statearr_29753_29821 = state_29705__$1;
(statearr_29753_29821[(1)] = (27));

} else {
var statearr_29754_29822 = state_29705__$1;
(statearr_29754_29822[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (34))){
var state_29705__$1 = state_29705;
var statearr_29755_29823 = state_29705__$1;
(statearr_29755_29823[(2)] = null);

(statearr_29755_29823[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (17))){
var state_29705__$1 = state_29705;
var statearr_29756_29824 = state_29705__$1;
(statearr_29756_29824[(2)] = null);

(statearr_29756_29824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (3))){
var inst_29703 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29705__$1,inst_29703);
} else {
if((state_val_29706 === (12))){
var inst_29632 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29757_29825 = state_29705__$1;
(statearr_29757_29825[(2)] = inst_29632);

(statearr_29757_29825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (2))){
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29705__$1,(4),ch);
} else {
if((state_val_29706 === (23))){
var state_29705__$1 = state_29705;
var statearr_29758_29826 = state_29705__$1;
(statearr_29758_29826[(2)] = null);

(statearr_29758_29826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (35))){
var inst_29687 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29759_29827 = state_29705__$1;
(statearr_29759_29827[(2)] = inst_29687);

(statearr_29759_29827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (19))){
var inst_29606 = (state_29705[(7)]);
var inst_29610 = cljs.core.chunk_first.call(null,inst_29606);
var inst_29611 = cljs.core.chunk_rest.call(null,inst_29606);
var inst_29612 = cljs.core.count.call(null,inst_29610);
var inst_29586 = inst_29611;
var inst_29587 = inst_29610;
var inst_29588 = inst_29612;
var inst_29589 = (0);
var state_29705__$1 = (function (){var statearr_29760 = state_29705;
(statearr_29760[(13)] = inst_29587);

(statearr_29760[(14)] = inst_29586);

(statearr_29760[(15)] = inst_29589);

(statearr_29760[(17)] = inst_29588);

return statearr_29760;
})();
var statearr_29761_29828 = state_29705__$1;
(statearr_29761_29828[(2)] = null);

(statearr_29761_29828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (11))){
var inst_29586 = (state_29705[(14)]);
var inst_29606 = (state_29705[(7)]);
var inst_29606__$1 = cljs.core.seq.call(null,inst_29586);
var state_29705__$1 = (function (){var statearr_29762 = state_29705;
(statearr_29762[(7)] = inst_29606__$1);

return statearr_29762;
})();
if(inst_29606__$1){
var statearr_29763_29829 = state_29705__$1;
(statearr_29763_29829[(1)] = (16));

} else {
var statearr_29764_29830 = state_29705__$1;
(statearr_29764_29830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (9))){
var inst_29634 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29765_29831 = state_29705__$1;
(statearr_29765_29831[(2)] = inst_29634);

(statearr_29765_29831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (5))){
var inst_29584 = cljs.core.deref.call(null,cs);
var inst_29585 = cljs.core.seq.call(null,inst_29584);
var inst_29586 = inst_29585;
var inst_29587 = null;
var inst_29588 = (0);
var inst_29589 = (0);
var state_29705__$1 = (function (){var statearr_29766 = state_29705;
(statearr_29766[(13)] = inst_29587);

(statearr_29766[(14)] = inst_29586);

(statearr_29766[(15)] = inst_29589);

(statearr_29766[(17)] = inst_29588);

return statearr_29766;
})();
var statearr_29767_29832 = state_29705__$1;
(statearr_29767_29832[(2)] = null);

(statearr_29767_29832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (14))){
var state_29705__$1 = state_29705;
var statearr_29768_29833 = state_29705__$1;
(statearr_29768_29833[(2)] = null);

(statearr_29768_29833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (45))){
var inst_29695 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29769_29834 = state_29705__$1;
(statearr_29769_29834[(2)] = inst_29695);

(statearr_29769_29834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (26))){
var inst_29637 = (state_29705[(29)]);
var inst_29691 = (state_29705[(2)]);
var inst_29692 = cljs.core.seq.call(null,inst_29637);
var state_29705__$1 = (function (){var statearr_29770 = state_29705;
(statearr_29770[(31)] = inst_29691);

return statearr_29770;
})();
if(inst_29692){
var statearr_29771_29835 = state_29705__$1;
(statearr_29771_29835[(1)] = (42));

} else {
var statearr_29772_29836 = state_29705__$1;
(statearr_29772_29836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (16))){
var inst_29606 = (state_29705[(7)]);
var inst_29608 = cljs.core.chunked_seq_QMARK_.call(null,inst_29606);
var state_29705__$1 = state_29705;
if(inst_29608){
var statearr_29773_29837 = state_29705__$1;
(statearr_29773_29837[(1)] = (19));

} else {
var statearr_29774_29838 = state_29705__$1;
(statearr_29774_29838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (38))){
var inst_29684 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29775_29839 = state_29705__$1;
(statearr_29775_29839[(2)] = inst_29684);

(statearr_29775_29839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (30))){
var state_29705__$1 = state_29705;
var statearr_29776_29840 = state_29705__$1;
(statearr_29776_29840[(2)] = null);

(statearr_29776_29840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (10))){
var inst_29587 = (state_29705[(13)]);
var inst_29589 = (state_29705[(15)]);
var inst_29595 = cljs.core._nth.call(null,inst_29587,inst_29589);
var inst_29596 = cljs.core.nth.call(null,inst_29595,(0),null);
var inst_29597 = cljs.core.nth.call(null,inst_29595,(1),null);
var state_29705__$1 = (function (){var statearr_29777 = state_29705;
(statearr_29777[(26)] = inst_29596);

return statearr_29777;
})();
if(cljs.core.truth_(inst_29597)){
var statearr_29778_29841 = state_29705__$1;
(statearr_29778_29841[(1)] = (13));

} else {
var statearr_29779_29842 = state_29705__$1;
(statearr_29779_29842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (18))){
var inst_29630 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29780_29843 = state_29705__$1;
(statearr_29780_29843[(2)] = inst_29630);

(statearr_29780_29843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (42))){
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29705__$1,(45),dchan);
} else {
if((state_val_29706 === (37))){
var inst_29664 = (state_29705[(25)]);
var inst_29577 = (state_29705[(12)]);
var inst_29673 = (state_29705[(23)]);
var inst_29673__$1 = cljs.core.first.call(null,inst_29664);
var inst_29674 = cljs.core.async.put_BANG_.call(null,inst_29673__$1,inst_29577,done);
var state_29705__$1 = (function (){var statearr_29781 = state_29705;
(statearr_29781[(23)] = inst_29673__$1);

return statearr_29781;
})();
if(cljs.core.truth_(inst_29674)){
var statearr_29782_29844 = state_29705__$1;
(statearr_29782_29844[(1)] = (39));

} else {
var statearr_29783_29845 = state_29705__$1;
(statearr_29783_29845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (8))){
var inst_29589 = (state_29705[(15)]);
var inst_29588 = (state_29705[(17)]);
var inst_29591 = (inst_29589 < inst_29588);
var inst_29592 = inst_29591;
var state_29705__$1 = state_29705;
if(cljs.core.truth_(inst_29592)){
var statearr_29784_29846 = state_29705__$1;
(statearr_29784_29846[(1)] = (10));

} else {
var statearr_29785_29847 = state_29705__$1;
(statearr_29785_29847[(1)] = (11));

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
});})(c__20959__auto___29793,cs,m,dchan,dctr,done))
;
return ((function (switch__20894__auto__,c__20959__auto___29793,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20895__auto__ = null;
var cljs$core$async$mult_$_state_machine__20895__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29789[(0)] = cljs$core$async$mult_$_state_machine__20895__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var cljs$core$async$mult_$_state_machine__20895__auto____1 = (function (state_29705){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_29705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e29790){if((e29790 instanceof Object)){
var ex__20898__auto__ = e29790;
var statearr_29791_29848 = state_29705;
(statearr_29791_29848[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29849 = state_29705;
state_29705 = G__29849;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20895__auto__ = function(state_29705){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20895__auto____1.call(this,state_29705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20895__auto____0;
cljs$core$async$mult_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20895__auto____1;
return cljs$core$async$mult_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___29793,cs,m,dchan,dctr,done))
})();
var state__20961__auto__ = (function (){var statearr_29792 = f__20960__auto__.call(null);
(statearr_29792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___29793);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___29793,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29850 = [];
var len__17433__auto___29853 = arguments.length;
var i__17434__auto___29854 = (0);
while(true){
if((i__17434__auto___29854 < len__17433__auto___29853)){
args29850.push((arguments[i__17434__auto___29854]));

var G__29855 = (i__17434__auto___29854 + (1));
i__17434__auto___29854 = G__29855;
continue;
} else {
}
break;
}

var G__29852 = args29850.length;
switch (G__29852) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29850.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m);
} else {
var m__17031__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,state_map);
} else {
var m__17031__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,mode);
} else {
var m__17031__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17440__auto__ = [];
var len__17433__auto___29867 = arguments.length;
var i__17434__auto___29868 = (0);
while(true){
if((i__17434__auto___29868 < len__17433__auto___29867)){
args__17440__auto__.push((arguments[i__17434__auto___29868]));

var G__29869 = (i__17434__auto___29868 + (1));
i__17434__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((3) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29861){
var map__29862 = p__29861;
var map__29862__$1 = ((((!((map__29862 == null)))?((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);
var opts = map__29862__$1;
var statearr_29864_29870 = state;
(statearr_29864_29870[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29862,map__29862__$1,opts){
return (function (val){
var statearr_29865_29871 = state;
(statearr_29865_29871[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29862,map__29862__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29866_29872 = state;
(statearr_29866_29872[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29857){
var G__29858 = cljs.core.first.call(null,seq29857);
var seq29857__$1 = cljs.core.next.call(null,seq29857);
var G__29859 = cljs.core.first.call(null,seq29857__$1);
var seq29857__$2 = cljs.core.next.call(null,seq29857__$1);
var G__29860 = cljs.core.first.call(null,seq29857__$2);
var seq29857__$3 = cljs.core.next.call(null,seq29857__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29858,G__29859,G__29860,seq29857__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30036 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30037){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30037 = meta30037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30038,meta30037__$1){
var self__ = this;
var _30038__$1 = this;
return (new cljs.core.async.t_cljs$core$async30036(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30037__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30038){
var self__ = this;
var _30038__$1 = this;
return self__.meta30037;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30037","meta30037",437874133,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30036";

cljs.core.async.t_cljs$core$async30036.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30036");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30036 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30036(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30037){
return (new cljs.core.async.t_cljs$core$async30036(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30037));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30036(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20959__auto___30199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___30199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___30199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30136){
var state_val_30137 = (state_30136[(1)]);
if((state_val_30137 === (7))){
var inst_30054 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30138_30200 = state_30136__$1;
(statearr_30138_30200[(2)] = inst_30054);

(statearr_30138_30200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (20))){
var inst_30066 = (state_30136[(7)]);
var state_30136__$1 = state_30136;
var statearr_30139_30201 = state_30136__$1;
(statearr_30139_30201[(2)] = inst_30066);

(statearr_30139_30201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (27))){
var state_30136__$1 = state_30136;
var statearr_30140_30202 = state_30136__$1;
(statearr_30140_30202[(2)] = null);

(statearr_30140_30202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (1))){
var inst_30042 = (state_30136[(8)]);
var inst_30042__$1 = calc_state.call(null);
var inst_30044 = (inst_30042__$1 == null);
var inst_30045 = cljs.core.not.call(null,inst_30044);
var state_30136__$1 = (function (){var statearr_30141 = state_30136;
(statearr_30141[(8)] = inst_30042__$1);

return statearr_30141;
})();
if(inst_30045){
var statearr_30142_30203 = state_30136__$1;
(statearr_30142_30203[(1)] = (2));

} else {
var statearr_30143_30204 = state_30136__$1;
(statearr_30143_30204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (24))){
var inst_30110 = (state_30136[(9)]);
var inst_30096 = (state_30136[(10)]);
var inst_30089 = (state_30136[(11)]);
var inst_30110__$1 = inst_30089.call(null,inst_30096);
var state_30136__$1 = (function (){var statearr_30144 = state_30136;
(statearr_30144[(9)] = inst_30110__$1);

return statearr_30144;
})();
if(cljs.core.truth_(inst_30110__$1)){
var statearr_30145_30205 = state_30136__$1;
(statearr_30145_30205[(1)] = (29));

} else {
var statearr_30146_30206 = state_30136__$1;
(statearr_30146_30206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (4))){
var inst_30057 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30057)){
var statearr_30147_30207 = state_30136__$1;
(statearr_30147_30207[(1)] = (8));

} else {
var statearr_30148_30208 = state_30136__$1;
(statearr_30148_30208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (15))){
var inst_30083 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30083)){
var statearr_30149_30209 = state_30136__$1;
(statearr_30149_30209[(1)] = (19));

} else {
var statearr_30150_30210 = state_30136__$1;
(statearr_30150_30210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (21))){
var inst_30088 = (state_30136[(12)]);
var inst_30088__$1 = (state_30136[(2)]);
var inst_30089 = cljs.core.get.call(null,inst_30088__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30090 = cljs.core.get.call(null,inst_30088__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30091 = cljs.core.get.call(null,inst_30088__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30136__$1 = (function (){var statearr_30151 = state_30136;
(statearr_30151[(13)] = inst_30090);

(statearr_30151[(11)] = inst_30089);

(statearr_30151[(12)] = inst_30088__$1);

return statearr_30151;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30136__$1,(22),inst_30091);
} else {
if((state_val_30137 === (31))){
var inst_30118 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30118)){
var statearr_30152_30211 = state_30136__$1;
(statearr_30152_30211[(1)] = (32));

} else {
var statearr_30153_30212 = state_30136__$1;
(statearr_30153_30212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (32))){
var inst_30095 = (state_30136[(14)]);
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30136__$1,(35),out,inst_30095);
} else {
if((state_val_30137 === (33))){
var inst_30088 = (state_30136[(12)]);
var inst_30066 = inst_30088;
var state_30136__$1 = (function (){var statearr_30154 = state_30136;
(statearr_30154[(7)] = inst_30066);

return statearr_30154;
})();
var statearr_30155_30213 = state_30136__$1;
(statearr_30155_30213[(2)] = null);

(statearr_30155_30213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (13))){
var inst_30066 = (state_30136[(7)]);
var inst_30073 = inst_30066.cljs$lang$protocol_mask$partition0$;
var inst_30074 = (inst_30073 & (64));
var inst_30075 = inst_30066.cljs$core$ISeq$;
var inst_30076 = (inst_30074) || (inst_30075);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30076)){
var statearr_30156_30214 = state_30136__$1;
(statearr_30156_30214[(1)] = (16));

} else {
var statearr_30157_30215 = state_30136__$1;
(statearr_30157_30215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (22))){
var inst_30095 = (state_30136[(14)]);
var inst_30096 = (state_30136[(10)]);
var inst_30094 = (state_30136[(2)]);
var inst_30095__$1 = cljs.core.nth.call(null,inst_30094,(0),null);
var inst_30096__$1 = cljs.core.nth.call(null,inst_30094,(1),null);
var inst_30097 = (inst_30095__$1 == null);
var inst_30098 = cljs.core._EQ_.call(null,inst_30096__$1,change);
var inst_30099 = (inst_30097) || (inst_30098);
var state_30136__$1 = (function (){var statearr_30158 = state_30136;
(statearr_30158[(14)] = inst_30095__$1);

(statearr_30158[(10)] = inst_30096__$1);

return statearr_30158;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30159_30216 = state_30136__$1;
(statearr_30159_30216[(1)] = (23));

} else {
var statearr_30160_30217 = state_30136__$1;
(statearr_30160_30217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (36))){
var inst_30088 = (state_30136[(12)]);
var inst_30066 = inst_30088;
var state_30136__$1 = (function (){var statearr_30161 = state_30136;
(statearr_30161[(7)] = inst_30066);

return statearr_30161;
})();
var statearr_30162_30218 = state_30136__$1;
(statearr_30162_30218[(2)] = null);

(statearr_30162_30218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (29))){
var inst_30110 = (state_30136[(9)]);
var state_30136__$1 = state_30136;
var statearr_30163_30219 = state_30136__$1;
(statearr_30163_30219[(2)] = inst_30110);

(statearr_30163_30219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (6))){
var state_30136__$1 = state_30136;
var statearr_30164_30220 = state_30136__$1;
(statearr_30164_30220[(2)] = false);

(statearr_30164_30220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (28))){
var inst_30106 = (state_30136[(2)]);
var inst_30107 = calc_state.call(null);
var inst_30066 = inst_30107;
var state_30136__$1 = (function (){var statearr_30165 = state_30136;
(statearr_30165[(7)] = inst_30066);

(statearr_30165[(15)] = inst_30106);

return statearr_30165;
})();
var statearr_30166_30221 = state_30136__$1;
(statearr_30166_30221[(2)] = null);

(statearr_30166_30221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (25))){
var inst_30132 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30167_30222 = state_30136__$1;
(statearr_30167_30222[(2)] = inst_30132);

(statearr_30167_30222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (34))){
var inst_30130 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30168_30223 = state_30136__$1;
(statearr_30168_30223[(2)] = inst_30130);

(statearr_30168_30223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (17))){
var state_30136__$1 = state_30136;
var statearr_30169_30224 = state_30136__$1;
(statearr_30169_30224[(2)] = false);

(statearr_30169_30224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (3))){
var state_30136__$1 = state_30136;
var statearr_30170_30225 = state_30136__$1;
(statearr_30170_30225[(2)] = false);

(statearr_30170_30225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (12))){
var inst_30134 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30136__$1,inst_30134);
} else {
if((state_val_30137 === (2))){
var inst_30042 = (state_30136[(8)]);
var inst_30047 = inst_30042.cljs$lang$protocol_mask$partition0$;
var inst_30048 = (inst_30047 & (64));
var inst_30049 = inst_30042.cljs$core$ISeq$;
var inst_30050 = (inst_30048) || (inst_30049);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30050)){
var statearr_30171_30226 = state_30136__$1;
(statearr_30171_30226[(1)] = (5));

} else {
var statearr_30172_30227 = state_30136__$1;
(statearr_30172_30227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (23))){
var inst_30095 = (state_30136[(14)]);
var inst_30101 = (inst_30095 == null);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30101)){
var statearr_30173_30228 = state_30136__$1;
(statearr_30173_30228[(1)] = (26));

} else {
var statearr_30174_30229 = state_30136__$1;
(statearr_30174_30229[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (35))){
var inst_30121 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
if(cljs.core.truth_(inst_30121)){
var statearr_30175_30230 = state_30136__$1;
(statearr_30175_30230[(1)] = (36));

} else {
var statearr_30176_30231 = state_30136__$1;
(statearr_30176_30231[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (19))){
var inst_30066 = (state_30136[(7)]);
var inst_30085 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30066);
var state_30136__$1 = state_30136;
var statearr_30177_30232 = state_30136__$1;
(statearr_30177_30232[(2)] = inst_30085);

(statearr_30177_30232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (11))){
var inst_30066 = (state_30136[(7)]);
var inst_30070 = (inst_30066 == null);
var inst_30071 = cljs.core.not.call(null,inst_30070);
var state_30136__$1 = state_30136;
if(inst_30071){
var statearr_30178_30233 = state_30136__$1;
(statearr_30178_30233[(1)] = (13));

} else {
var statearr_30179_30234 = state_30136__$1;
(statearr_30179_30234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (9))){
var inst_30042 = (state_30136[(8)]);
var state_30136__$1 = state_30136;
var statearr_30180_30235 = state_30136__$1;
(statearr_30180_30235[(2)] = inst_30042);

(statearr_30180_30235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (5))){
var state_30136__$1 = state_30136;
var statearr_30181_30236 = state_30136__$1;
(statearr_30181_30236[(2)] = true);

(statearr_30181_30236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (14))){
var state_30136__$1 = state_30136;
var statearr_30182_30237 = state_30136__$1;
(statearr_30182_30237[(2)] = false);

(statearr_30182_30237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (26))){
var inst_30096 = (state_30136[(10)]);
var inst_30103 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30096);
var state_30136__$1 = state_30136;
var statearr_30183_30238 = state_30136__$1;
(statearr_30183_30238[(2)] = inst_30103);

(statearr_30183_30238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (16))){
var state_30136__$1 = state_30136;
var statearr_30184_30239 = state_30136__$1;
(statearr_30184_30239[(2)] = true);

(statearr_30184_30239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (38))){
var inst_30126 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30185_30240 = state_30136__$1;
(statearr_30185_30240[(2)] = inst_30126);

(statearr_30185_30240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (30))){
var inst_30090 = (state_30136[(13)]);
var inst_30096 = (state_30136[(10)]);
var inst_30089 = (state_30136[(11)]);
var inst_30113 = cljs.core.empty_QMARK_.call(null,inst_30089);
var inst_30114 = inst_30090.call(null,inst_30096);
var inst_30115 = cljs.core.not.call(null,inst_30114);
var inst_30116 = (inst_30113) && (inst_30115);
var state_30136__$1 = state_30136;
var statearr_30186_30241 = state_30136__$1;
(statearr_30186_30241[(2)] = inst_30116);

(statearr_30186_30241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (10))){
var inst_30042 = (state_30136[(8)]);
var inst_30062 = (state_30136[(2)]);
var inst_30063 = cljs.core.get.call(null,inst_30062,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30064 = cljs.core.get.call(null,inst_30062,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30065 = cljs.core.get.call(null,inst_30062,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30066 = inst_30042;
var state_30136__$1 = (function (){var statearr_30187 = state_30136;
(statearr_30187[(7)] = inst_30066);

(statearr_30187[(16)] = inst_30063);

(statearr_30187[(17)] = inst_30065);

(statearr_30187[(18)] = inst_30064);

return statearr_30187;
})();
var statearr_30188_30242 = state_30136__$1;
(statearr_30188_30242[(2)] = null);

(statearr_30188_30242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (18))){
var inst_30080 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30189_30243 = state_30136__$1;
(statearr_30189_30243[(2)] = inst_30080);

(statearr_30189_30243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (37))){
var state_30136__$1 = state_30136;
var statearr_30190_30244 = state_30136__$1;
(statearr_30190_30244[(2)] = null);

(statearr_30190_30244[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (8))){
var inst_30042 = (state_30136[(8)]);
var inst_30059 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30042);
var state_30136__$1 = state_30136;
var statearr_30191_30245 = state_30136__$1;
(statearr_30191_30245[(2)] = inst_30059);

(statearr_30191_30245[(1)] = (10));


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
});})(c__20959__auto___30199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20894__auto__,c__20959__auto___30199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20895__auto__ = null;
var cljs$core$async$mix_$_state_machine__20895__auto____0 = (function (){
var statearr_30195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30195[(0)] = cljs$core$async$mix_$_state_machine__20895__auto__);

(statearr_30195[(1)] = (1));

return statearr_30195;
});
var cljs$core$async$mix_$_state_machine__20895__auto____1 = (function (state_30136){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30196){if((e30196 instanceof Object)){
var ex__20898__auto__ = e30196;
var statearr_30197_30246 = state_30136;
(statearr_30197_30246[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30247 = state_30136;
state_30136 = G__30247;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20895__auto__ = function(state_30136){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20895__auto____1.call(this,state_30136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20895__auto____0;
cljs$core$async$mix_$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20895__auto____1;
return cljs$core$async$mix_$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___30199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20961__auto__ = (function (){var statearr_30198 = f__20960__auto__.call(null);
(statearr_30198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___30199);

return statearr_30198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___30199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17031__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30248 = [];
var len__17433__auto___30251 = arguments.length;
var i__17434__auto___30252 = (0);
while(true){
if((i__17434__auto___30252 < len__17433__auto___30251)){
args30248.push((arguments[i__17434__auto___30252]));

var G__30253 = (i__17434__auto___30252 + (1));
i__17434__auto___30252 = G__30253;
continue;
} else {
}
break;
}

var G__30250 = args30248.length;
switch (G__30250) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30248.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30256 = [];
var len__17433__auto___30381 = arguments.length;
var i__17434__auto___30382 = (0);
while(true){
if((i__17434__auto___30382 < len__17433__auto___30381)){
args30256.push((arguments[i__17434__auto___30382]));

var G__30383 = (i__17434__auto___30382 + (1));
i__17434__auto___30382 = G__30383;
continue;
} else {
}
break;
}

var G__30258 = args30256.length;
switch (G__30258) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30256.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16375__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16375__auto__,mults){
return (function (p1__30255_SHARP_){
if(cljs.core.truth_(p1__30255_SHARP_.call(null,topic))){
return p1__30255_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30255_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30259 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30260){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30260 = meta30260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30261,meta30260__$1){
var self__ = this;
var _30261__$1 = this;
return (new cljs.core.async.t_cljs$core$async30259(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30260__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30261){
var self__ = this;
var _30261__$1 = this;
return self__.meta30260;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30260","meta30260",-1099601706,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30259";

cljs.core.async.t_cljs$core$async30259.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30259");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30259 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30260){
return (new cljs.core.async.t_cljs$core$async30259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30260));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30259(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20959__auto___30385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___30385,mults,ensure_mult,p){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___30385,mults,ensure_mult,p){
return (function (state_30333){
var state_val_30334 = (state_30333[(1)]);
if((state_val_30334 === (7))){
var inst_30329 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30335_30386 = state_30333__$1;
(statearr_30335_30386[(2)] = inst_30329);

(statearr_30335_30386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (20))){
var state_30333__$1 = state_30333;
var statearr_30336_30387 = state_30333__$1;
(statearr_30336_30387[(2)] = null);

(statearr_30336_30387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (1))){
var state_30333__$1 = state_30333;
var statearr_30337_30388 = state_30333__$1;
(statearr_30337_30388[(2)] = null);

(statearr_30337_30388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (24))){
var inst_30312 = (state_30333[(7)]);
var inst_30321 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30312);
var state_30333__$1 = state_30333;
var statearr_30338_30389 = state_30333__$1;
(statearr_30338_30389[(2)] = inst_30321);

(statearr_30338_30389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (4))){
var inst_30264 = (state_30333[(8)]);
var inst_30264__$1 = (state_30333[(2)]);
var inst_30265 = (inst_30264__$1 == null);
var state_30333__$1 = (function (){var statearr_30339 = state_30333;
(statearr_30339[(8)] = inst_30264__$1);

return statearr_30339;
})();
if(cljs.core.truth_(inst_30265)){
var statearr_30340_30390 = state_30333__$1;
(statearr_30340_30390[(1)] = (5));

} else {
var statearr_30341_30391 = state_30333__$1;
(statearr_30341_30391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (15))){
var inst_30306 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30342_30392 = state_30333__$1;
(statearr_30342_30392[(2)] = inst_30306);

(statearr_30342_30392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (21))){
var inst_30326 = (state_30333[(2)]);
var state_30333__$1 = (function (){var statearr_30343 = state_30333;
(statearr_30343[(9)] = inst_30326);

return statearr_30343;
})();
var statearr_30344_30393 = state_30333__$1;
(statearr_30344_30393[(2)] = null);

(statearr_30344_30393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (13))){
var inst_30288 = (state_30333[(10)]);
var inst_30290 = cljs.core.chunked_seq_QMARK_.call(null,inst_30288);
var state_30333__$1 = state_30333;
if(inst_30290){
var statearr_30345_30394 = state_30333__$1;
(statearr_30345_30394[(1)] = (16));

} else {
var statearr_30346_30395 = state_30333__$1;
(statearr_30346_30395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (22))){
var inst_30318 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
if(cljs.core.truth_(inst_30318)){
var statearr_30347_30396 = state_30333__$1;
(statearr_30347_30396[(1)] = (23));

} else {
var statearr_30348_30397 = state_30333__$1;
(statearr_30348_30397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (6))){
var inst_30314 = (state_30333[(11)]);
var inst_30264 = (state_30333[(8)]);
var inst_30312 = (state_30333[(7)]);
var inst_30312__$1 = topic_fn.call(null,inst_30264);
var inst_30313 = cljs.core.deref.call(null,mults);
var inst_30314__$1 = cljs.core.get.call(null,inst_30313,inst_30312__$1);
var state_30333__$1 = (function (){var statearr_30349 = state_30333;
(statearr_30349[(11)] = inst_30314__$1);

(statearr_30349[(7)] = inst_30312__$1);

return statearr_30349;
})();
if(cljs.core.truth_(inst_30314__$1)){
var statearr_30350_30398 = state_30333__$1;
(statearr_30350_30398[(1)] = (19));

} else {
var statearr_30351_30399 = state_30333__$1;
(statearr_30351_30399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (25))){
var inst_30323 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30352_30400 = state_30333__$1;
(statearr_30352_30400[(2)] = inst_30323);

(statearr_30352_30400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (17))){
var inst_30288 = (state_30333[(10)]);
var inst_30297 = cljs.core.first.call(null,inst_30288);
var inst_30298 = cljs.core.async.muxch_STAR_.call(null,inst_30297);
var inst_30299 = cljs.core.async.close_BANG_.call(null,inst_30298);
var inst_30300 = cljs.core.next.call(null,inst_30288);
var inst_30274 = inst_30300;
var inst_30275 = null;
var inst_30276 = (0);
var inst_30277 = (0);
var state_30333__$1 = (function (){var statearr_30353 = state_30333;
(statearr_30353[(12)] = inst_30277);

(statearr_30353[(13)] = inst_30275);

(statearr_30353[(14)] = inst_30276);

(statearr_30353[(15)] = inst_30274);

(statearr_30353[(16)] = inst_30299);

return statearr_30353;
})();
var statearr_30354_30401 = state_30333__$1;
(statearr_30354_30401[(2)] = null);

(statearr_30354_30401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (3))){
var inst_30331 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30333__$1,inst_30331);
} else {
if((state_val_30334 === (12))){
var inst_30308 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30355_30402 = state_30333__$1;
(statearr_30355_30402[(2)] = inst_30308);

(statearr_30355_30402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (2))){
var state_30333__$1 = state_30333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30333__$1,(4),ch);
} else {
if((state_val_30334 === (23))){
var state_30333__$1 = state_30333;
var statearr_30356_30403 = state_30333__$1;
(statearr_30356_30403[(2)] = null);

(statearr_30356_30403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (19))){
var inst_30314 = (state_30333[(11)]);
var inst_30264 = (state_30333[(8)]);
var inst_30316 = cljs.core.async.muxch_STAR_.call(null,inst_30314);
var state_30333__$1 = state_30333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30333__$1,(22),inst_30316,inst_30264);
} else {
if((state_val_30334 === (11))){
var inst_30288 = (state_30333[(10)]);
var inst_30274 = (state_30333[(15)]);
var inst_30288__$1 = cljs.core.seq.call(null,inst_30274);
var state_30333__$1 = (function (){var statearr_30357 = state_30333;
(statearr_30357[(10)] = inst_30288__$1);

return statearr_30357;
})();
if(inst_30288__$1){
var statearr_30358_30404 = state_30333__$1;
(statearr_30358_30404[(1)] = (13));

} else {
var statearr_30359_30405 = state_30333__$1;
(statearr_30359_30405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (9))){
var inst_30310 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30360_30406 = state_30333__$1;
(statearr_30360_30406[(2)] = inst_30310);

(statearr_30360_30406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (5))){
var inst_30271 = cljs.core.deref.call(null,mults);
var inst_30272 = cljs.core.vals.call(null,inst_30271);
var inst_30273 = cljs.core.seq.call(null,inst_30272);
var inst_30274 = inst_30273;
var inst_30275 = null;
var inst_30276 = (0);
var inst_30277 = (0);
var state_30333__$1 = (function (){var statearr_30361 = state_30333;
(statearr_30361[(12)] = inst_30277);

(statearr_30361[(13)] = inst_30275);

(statearr_30361[(14)] = inst_30276);

(statearr_30361[(15)] = inst_30274);

return statearr_30361;
})();
var statearr_30362_30407 = state_30333__$1;
(statearr_30362_30407[(2)] = null);

(statearr_30362_30407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (14))){
var state_30333__$1 = state_30333;
var statearr_30366_30408 = state_30333__$1;
(statearr_30366_30408[(2)] = null);

(statearr_30366_30408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (16))){
var inst_30288 = (state_30333[(10)]);
var inst_30292 = cljs.core.chunk_first.call(null,inst_30288);
var inst_30293 = cljs.core.chunk_rest.call(null,inst_30288);
var inst_30294 = cljs.core.count.call(null,inst_30292);
var inst_30274 = inst_30293;
var inst_30275 = inst_30292;
var inst_30276 = inst_30294;
var inst_30277 = (0);
var state_30333__$1 = (function (){var statearr_30367 = state_30333;
(statearr_30367[(12)] = inst_30277);

(statearr_30367[(13)] = inst_30275);

(statearr_30367[(14)] = inst_30276);

(statearr_30367[(15)] = inst_30274);

return statearr_30367;
})();
var statearr_30368_30409 = state_30333__$1;
(statearr_30368_30409[(2)] = null);

(statearr_30368_30409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (10))){
var inst_30277 = (state_30333[(12)]);
var inst_30275 = (state_30333[(13)]);
var inst_30276 = (state_30333[(14)]);
var inst_30274 = (state_30333[(15)]);
var inst_30282 = cljs.core._nth.call(null,inst_30275,inst_30277);
var inst_30283 = cljs.core.async.muxch_STAR_.call(null,inst_30282);
var inst_30284 = cljs.core.async.close_BANG_.call(null,inst_30283);
var inst_30285 = (inst_30277 + (1));
var tmp30363 = inst_30275;
var tmp30364 = inst_30276;
var tmp30365 = inst_30274;
var inst_30274__$1 = tmp30365;
var inst_30275__$1 = tmp30363;
var inst_30276__$1 = tmp30364;
var inst_30277__$1 = inst_30285;
var state_30333__$1 = (function (){var statearr_30369 = state_30333;
(statearr_30369[(12)] = inst_30277__$1);

(statearr_30369[(13)] = inst_30275__$1);

(statearr_30369[(14)] = inst_30276__$1);

(statearr_30369[(15)] = inst_30274__$1);

(statearr_30369[(17)] = inst_30284);

return statearr_30369;
})();
var statearr_30370_30410 = state_30333__$1;
(statearr_30370_30410[(2)] = null);

(statearr_30370_30410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (18))){
var inst_30303 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30371_30411 = state_30333__$1;
(statearr_30371_30411[(2)] = inst_30303);

(statearr_30371_30411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (8))){
var inst_30277 = (state_30333[(12)]);
var inst_30276 = (state_30333[(14)]);
var inst_30279 = (inst_30277 < inst_30276);
var inst_30280 = inst_30279;
var state_30333__$1 = state_30333;
if(cljs.core.truth_(inst_30280)){
var statearr_30372_30412 = state_30333__$1;
(statearr_30372_30412[(1)] = (10));

} else {
var statearr_30373_30413 = state_30333__$1;
(statearr_30373_30413[(1)] = (11));

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
});})(c__20959__auto___30385,mults,ensure_mult,p))
;
return ((function (switch__20894__auto__,c__20959__auto___30385,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_30377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30377[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_30377[(1)] = (1));

return statearr_30377;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_30333){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30378){if((e30378 instanceof Object)){
var ex__20898__auto__ = e30378;
var statearr_30379_30414 = state_30333;
(statearr_30379_30414[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30415 = state_30333;
state_30333 = G__30415;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_30333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_30333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___30385,mults,ensure_mult,p))
})();
var state__20961__auto__ = (function (){var statearr_30380 = f__20960__auto__.call(null);
(statearr_30380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___30385);

return statearr_30380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___30385,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30416 = [];
var len__17433__auto___30419 = arguments.length;
var i__17434__auto___30420 = (0);
while(true){
if((i__17434__auto___30420 < len__17433__auto___30419)){
args30416.push((arguments[i__17434__auto___30420]));

var G__30421 = (i__17434__auto___30420 + (1));
i__17434__auto___30420 = G__30421;
continue;
} else {
}
break;
}

var G__30418 = args30416.length;
switch (G__30418) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30416.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30423 = [];
var len__17433__auto___30426 = arguments.length;
var i__17434__auto___30427 = (0);
while(true){
if((i__17434__auto___30427 < len__17433__auto___30426)){
args30423.push((arguments[i__17434__auto___30427]));

var G__30428 = (i__17434__auto___30427 + (1));
i__17434__auto___30427 = G__30428;
continue;
} else {
}
break;
}

var G__30425 = args30423.length;
switch (G__30425) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30423.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30430 = [];
var len__17433__auto___30501 = arguments.length;
var i__17434__auto___30502 = (0);
while(true){
if((i__17434__auto___30502 < len__17433__auto___30501)){
args30430.push((arguments[i__17434__auto___30502]));

var G__30503 = (i__17434__auto___30502 + (1));
i__17434__auto___30502 = G__30503;
continue;
} else {
}
break;
}

var G__30432 = args30430.length;
switch (G__30432) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30430.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20959__auto___30505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___30505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___30505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30471){
var state_val_30472 = (state_30471[(1)]);
if((state_val_30472 === (7))){
var state_30471__$1 = state_30471;
var statearr_30473_30506 = state_30471__$1;
(statearr_30473_30506[(2)] = null);

(statearr_30473_30506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (1))){
var state_30471__$1 = state_30471;
var statearr_30474_30507 = state_30471__$1;
(statearr_30474_30507[(2)] = null);

(statearr_30474_30507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (4))){
var inst_30435 = (state_30471[(7)]);
var inst_30437 = (inst_30435 < cnt);
var state_30471__$1 = state_30471;
if(cljs.core.truth_(inst_30437)){
var statearr_30475_30508 = state_30471__$1;
(statearr_30475_30508[(1)] = (6));

} else {
var statearr_30476_30509 = state_30471__$1;
(statearr_30476_30509[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (15))){
var inst_30467 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30477_30510 = state_30471__$1;
(statearr_30477_30510[(2)] = inst_30467);

(statearr_30477_30510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (13))){
var inst_30460 = cljs.core.async.close_BANG_.call(null,out);
var state_30471__$1 = state_30471;
var statearr_30478_30511 = state_30471__$1;
(statearr_30478_30511[(2)] = inst_30460);

(statearr_30478_30511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (6))){
var state_30471__$1 = state_30471;
var statearr_30479_30512 = state_30471__$1;
(statearr_30479_30512[(2)] = null);

(statearr_30479_30512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (3))){
var inst_30469 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30471__$1,inst_30469);
} else {
if((state_val_30472 === (12))){
var inst_30457 = (state_30471[(8)]);
var inst_30457__$1 = (state_30471[(2)]);
var inst_30458 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30457__$1);
var state_30471__$1 = (function (){var statearr_30480 = state_30471;
(statearr_30480[(8)] = inst_30457__$1);

return statearr_30480;
})();
if(cljs.core.truth_(inst_30458)){
var statearr_30481_30513 = state_30471__$1;
(statearr_30481_30513[(1)] = (13));

} else {
var statearr_30482_30514 = state_30471__$1;
(statearr_30482_30514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (2))){
var inst_30434 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30435 = (0);
var state_30471__$1 = (function (){var statearr_30483 = state_30471;
(statearr_30483[(7)] = inst_30435);

(statearr_30483[(9)] = inst_30434);

return statearr_30483;
})();
var statearr_30484_30515 = state_30471__$1;
(statearr_30484_30515[(2)] = null);

(statearr_30484_30515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (11))){
var inst_30435 = (state_30471[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30471,(10),Object,null,(9));
var inst_30444 = chs__$1.call(null,inst_30435);
var inst_30445 = done.call(null,inst_30435);
var inst_30446 = cljs.core.async.take_BANG_.call(null,inst_30444,inst_30445);
var state_30471__$1 = state_30471;
var statearr_30485_30516 = state_30471__$1;
(statearr_30485_30516[(2)] = inst_30446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (9))){
var inst_30435 = (state_30471[(7)]);
var inst_30448 = (state_30471[(2)]);
var inst_30449 = (inst_30435 + (1));
var inst_30435__$1 = inst_30449;
var state_30471__$1 = (function (){var statearr_30486 = state_30471;
(statearr_30486[(7)] = inst_30435__$1);

(statearr_30486[(10)] = inst_30448);

return statearr_30486;
})();
var statearr_30487_30517 = state_30471__$1;
(statearr_30487_30517[(2)] = null);

(statearr_30487_30517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (5))){
var inst_30455 = (state_30471[(2)]);
var state_30471__$1 = (function (){var statearr_30488 = state_30471;
(statearr_30488[(11)] = inst_30455);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30471__$1,(12),dchan);
} else {
if((state_val_30472 === (14))){
var inst_30457 = (state_30471[(8)]);
var inst_30462 = cljs.core.apply.call(null,f,inst_30457);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30471__$1,(16),out,inst_30462);
} else {
if((state_val_30472 === (16))){
var inst_30464 = (state_30471[(2)]);
var state_30471__$1 = (function (){var statearr_30489 = state_30471;
(statearr_30489[(12)] = inst_30464);

return statearr_30489;
})();
var statearr_30490_30518 = state_30471__$1;
(statearr_30490_30518[(2)] = null);

(statearr_30490_30518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (10))){
var inst_30439 = (state_30471[(2)]);
var inst_30440 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30471__$1 = (function (){var statearr_30491 = state_30471;
(statearr_30491[(13)] = inst_30439);

return statearr_30491;
})();
var statearr_30492_30519 = state_30471__$1;
(statearr_30492_30519[(2)] = inst_30440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (8))){
var inst_30453 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30493_30520 = state_30471__$1;
(statearr_30493_30520[(2)] = inst_30453);

(statearr_30493_30520[(1)] = (5));


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
});})(c__20959__auto___30505,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20894__auto__,c__20959__auto___30505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_30497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30497[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_30497[(1)] = (1));

return statearr_30497;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_30471){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30498){if((e30498 instanceof Object)){
var ex__20898__auto__ = e30498;
var statearr_30499_30521 = state_30471;
(statearr_30499_30521[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30522 = state_30471;
state_30471 = G__30522;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_30471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_30471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___30505,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20961__auto__ = (function (){var statearr_30500 = f__20960__auto__.call(null);
(statearr_30500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___30505);

return statearr_30500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___30505,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30524 = [];
var len__17433__auto___30580 = arguments.length;
var i__17434__auto___30581 = (0);
while(true){
if((i__17434__auto___30581 < len__17433__auto___30580)){
args30524.push((arguments[i__17434__auto___30581]));

var G__30582 = (i__17434__auto___30581 + (1));
i__17434__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var G__30526 = args30524.length;
switch (G__30526) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30524.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20959__auto___30584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___30584,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___30584,out){
return (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (7))){
var inst_30535 = (state_30556[(7)]);
var inst_30536 = (state_30556[(8)]);
var inst_30535__$1 = (state_30556[(2)]);
var inst_30536__$1 = cljs.core.nth.call(null,inst_30535__$1,(0),null);
var inst_30537 = cljs.core.nth.call(null,inst_30535__$1,(1),null);
var inst_30538 = (inst_30536__$1 == null);
var state_30556__$1 = (function (){var statearr_30558 = state_30556;
(statearr_30558[(7)] = inst_30535__$1);

(statearr_30558[(9)] = inst_30537);

(statearr_30558[(8)] = inst_30536__$1);

return statearr_30558;
})();
if(cljs.core.truth_(inst_30538)){
var statearr_30559_30585 = state_30556__$1;
(statearr_30559_30585[(1)] = (8));

} else {
var statearr_30560_30586 = state_30556__$1;
(statearr_30560_30586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (1))){
var inst_30527 = cljs.core.vec.call(null,chs);
var inst_30528 = inst_30527;
var state_30556__$1 = (function (){var statearr_30561 = state_30556;
(statearr_30561[(10)] = inst_30528);

return statearr_30561;
})();
var statearr_30562_30587 = state_30556__$1;
(statearr_30562_30587[(2)] = null);

(statearr_30562_30587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (4))){
var inst_30528 = (state_30556[(10)]);
var state_30556__$1 = state_30556;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30556__$1,(7),inst_30528);
} else {
if((state_val_30557 === (6))){
var inst_30552 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30563_30588 = state_30556__$1;
(statearr_30563_30588[(2)] = inst_30552);

(statearr_30563_30588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (3))){
var inst_30554 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30556__$1,inst_30554);
} else {
if((state_val_30557 === (2))){
var inst_30528 = (state_30556[(10)]);
var inst_30530 = cljs.core.count.call(null,inst_30528);
var inst_30531 = (inst_30530 > (0));
var state_30556__$1 = state_30556;
if(cljs.core.truth_(inst_30531)){
var statearr_30565_30589 = state_30556__$1;
(statearr_30565_30589[(1)] = (4));

} else {
var statearr_30566_30590 = state_30556__$1;
(statearr_30566_30590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (11))){
var inst_30528 = (state_30556[(10)]);
var inst_30545 = (state_30556[(2)]);
var tmp30564 = inst_30528;
var inst_30528__$1 = tmp30564;
var state_30556__$1 = (function (){var statearr_30567 = state_30556;
(statearr_30567[(10)] = inst_30528__$1);

(statearr_30567[(11)] = inst_30545);

return statearr_30567;
})();
var statearr_30568_30591 = state_30556__$1;
(statearr_30568_30591[(2)] = null);

(statearr_30568_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (9))){
var inst_30536 = (state_30556[(8)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30556__$1,(11),out,inst_30536);
} else {
if((state_val_30557 === (5))){
var inst_30550 = cljs.core.async.close_BANG_.call(null,out);
var state_30556__$1 = state_30556;
var statearr_30569_30592 = state_30556__$1;
(statearr_30569_30592[(2)] = inst_30550);

(statearr_30569_30592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (10))){
var inst_30548 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30570_30593 = state_30556__$1;
(statearr_30570_30593[(2)] = inst_30548);

(statearr_30570_30593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (8))){
var inst_30535 = (state_30556[(7)]);
var inst_30537 = (state_30556[(9)]);
var inst_30528 = (state_30556[(10)]);
var inst_30536 = (state_30556[(8)]);
var inst_30540 = (function (){var cs = inst_30528;
var vec__30533 = inst_30535;
var v = inst_30536;
var c = inst_30537;
return ((function (cs,vec__30533,v,c,inst_30535,inst_30537,inst_30528,inst_30536,state_val_30557,c__20959__auto___30584,out){
return (function (p1__30523_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30523_SHARP_);
});
;})(cs,vec__30533,v,c,inst_30535,inst_30537,inst_30528,inst_30536,state_val_30557,c__20959__auto___30584,out))
})();
var inst_30541 = cljs.core.filterv.call(null,inst_30540,inst_30528);
var inst_30528__$1 = inst_30541;
var state_30556__$1 = (function (){var statearr_30571 = state_30556;
(statearr_30571[(10)] = inst_30528__$1);

return statearr_30571;
})();
var statearr_30572_30594 = state_30556__$1;
(statearr_30572_30594[(2)] = null);

(statearr_30572_30594[(1)] = (2));


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
});})(c__20959__auto___30584,out))
;
return ((function (switch__20894__auto__,c__20959__auto___30584,out){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_30556){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__20898__auto__ = e30577;
var statearr_30578_30595 = state_30556;
(statearr_30578_30595[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30596 = state_30556;
state_30556 = G__30596;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___30584,out))
})();
var state__20961__auto__ = (function (){var statearr_30579 = f__20960__auto__.call(null);
(statearr_30579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___30584);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___30584,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30597 = [];
var len__17433__auto___30646 = arguments.length;
var i__17434__auto___30647 = (0);
while(true){
if((i__17434__auto___30647 < len__17433__auto___30646)){
args30597.push((arguments[i__17434__auto___30647]));

var G__30648 = (i__17434__auto___30647 + (1));
i__17434__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var G__30599 = args30597.length;
switch (G__30599) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30597.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20959__auto___30650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___30650,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___30650,out){
return (function (state_30623){
var state_val_30624 = (state_30623[(1)]);
if((state_val_30624 === (7))){
var inst_30605 = (state_30623[(7)]);
var inst_30605__$1 = (state_30623[(2)]);
var inst_30606 = (inst_30605__$1 == null);
var inst_30607 = cljs.core.not.call(null,inst_30606);
var state_30623__$1 = (function (){var statearr_30625 = state_30623;
(statearr_30625[(7)] = inst_30605__$1);

return statearr_30625;
})();
if(inst_30607){
var statearr_30626_30651 = state_30623__$1;
(statearr_30626_30651[(1)] = (8));

} else {
var statearr_30627_30652 = state_30623__$1;
(statearr_30627_30652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (1))){
var inst_30600 = (0);
var state_30623__$1 = (function (){var statearr_30628 = state_30623;
(statearr_30628[(8)] = inst_30600);

return statearr_30628;
})();
var statearr_30629_30653 = state_30623__$1;
(statearr_30629_30653[(2)] = null);

(statearr_30629_30653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (4))){
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30623__$1,(7),ch);
} else {
if((state_val_30624 === (6))){
var inst_30618 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
var statearr_30630_30654 = state_30623__$1;
(statearr_30630_30654[(2)] = inst_30618);

(statearr_30630_30654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (3))){
var inst_30620 = (state_30623[(2)]);
var inst_30621 = cljs.core.async.close_BANG_.call(null,out);
var state_30623__$1 = (function (){var statearr_30631 = state_30623;
(statearr_30631[(9)] = inst_30620);

return statearr_30631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30623__$1,inst_30621);
} else {
if((state_val_30624 === (2))){
var inst_30600 = (state_30623[(8)]);
var inst_30602 = (inst_30600 < n);
var state_30623__$1 = state_30623;
if(cljs.core.truth_(inst_30602)){
var statearr_30632_30655 = state_30623__$1;
(statearr_30632_30655[(1)] = (4));

} else {
var statearr_30633_30656 = state_30623__$1;
(statearr_30633_30656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (11))){
var inst_30600 = (state_30623[(8)]);
var inst_30610 = (state_30623[(2)]);
var inst_30611 = (inst_30600 + (1));
var inst_30600__$1 = inst_30611;
var state_30623__$1 = (function (){var statearr_30634 = state_30623;
(statearr_30634[(10)] = inst_30610);

(statearr_30634[(8)] = inst_30600__$1);

return statearr_30634;
})();
var statearr_30635_30657 = state_30623__$1;
(statearr_30635_30657[(2)] = null);

(statearr_30635_30657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (9))){
var state_30623__$1 = state_30623;
var statearr_30636_30658 = state_30623__$1;
(statearr_30636_30658[(2)] = null);

(statearr_30636_30658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (5))){
var state_30623__$1 = state_30623;
var statearr_30637_30659 = state_30623__$1;
(statearr_30637_30659[(2)] = null);

(statearr_30637_30659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (10))){
var inst_30615 = (state_30623[(2)]);
var state_30623__$1 = state_30623;
var statearr_30638_30660 = state_30623__$1;
(statearr_30638_30660[(2)] = inst_30615);

(statearr_30638_30660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30624 === (8))){
var inst_30605 = (state_30623[(7)]);
var state_30623__$1 = state_30623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30623__$1,(11),out,inst_30605);
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
});})(c__20959__auto___30650,out))
;
return ((function (switch__20894__auto__,c__20959__auto___30650,out){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_30642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30642[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_30642[(1)] = (1));

return statearr_30642;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_30623){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30643){if((e30643 instanceof Object)){
var ex__20898__auto__ = e30643;
var statearr_30644_30661 = state_30623;
(statearr_30644_30661[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30662 = state_30623;
state_30623 = G__30662;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_30623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_30623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___30650,out))
})();
var state__20961__auto__ = (function (){var statearr_30645 = f__20960__auto__.call(null);
(statearr_30645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___30650);

return statearr_30645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___30650,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30670 = (function (map_LT_,f,ch,meta30671){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30671 = meta30671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30672,meta30671__$1){
var self__ = this;
var _30672__$1 = this;
return (new cljs.core.async.t_cljs$core$async30670(self__.map_LT_,self__.f,self__.ch,meta30671__$1));
});

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30672){
var self__ = this;
var _30672__$1 = this;
return self__.meta30671;
});

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30673 = (function (map_LT_,f,ch,meta30671,_,fn1,meta30674){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30671 = meta30671;
this._ = _;
this.fn1 = fn1;
this.meta30674 = meta30674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30675,meta30674__$1){
var self__ = this;
var _30675__$1 = this;
return (new cljs.core.async.t_cljs$core$async30673(self__.map_LT_,self__.f,self__.ch,self__.meta30671,self__._,self__.fn1,meta30674__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30675){
var self__ = this;
var _30675__$1 = this;
return self__.meta30674;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30673.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30663_SHARP_){
return f1.call(null,(((p1__30663_SHARP_ == null))?null:self__.f.call(null,p1__30663_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30673.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30671","meta30671",792847415,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30670","cljs.core.async/t_cljs$core$async30670",-477978662,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30674","meta30674",2071691845,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30673";

cljs.core.async.t_cljs$core$async30673.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30673");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30673 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30673(map_LT___$1,f__$1,ch__$1,meta30671__$1,___$2,fn1__$1,meta30674){
return (new cljs.core.async.t_cljs$core$async30673(map_LT___$1,f__$1,ch__$1,meta30671__$1,___$2,fn1__$1,meta30674));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30673(self__.map_LT_,self__.f,self__.ch,self__.meta30671,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16363__auto__ = ret;
if(cljs.core.truth_(and__16363__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16363__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30671","meta30671",792847415,null)], null);
});

cljs.core.async.t_cljs$core$async30670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30670";

cljs.core.async.t_cljs$core$async30670.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30670");
});

cljs.core.async.__GT_t_cljs$core$async30670 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30670(map_LT___$1,f__$1,ch__$1,meta30671){
return (new cljs.core.async.t_cljs$core$async30670(map_LT___$1,f__$1,ch__$1,meta30671));
});

}

return (new cljs.core.async.t_cljs$core$async30670(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30679 = (function (map_GT_,f,ch,meta30680){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30680 = meta30680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30681,meta30680__$1){
var self__ = this;
var _30681__$1 = this;
return (new cljs.core.async.t_cljs$core$async30679(self__.map_GT_,self__.f,self__.ch,meta30680__$1));
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30681){
var self__ = this;
var _30681__$1 = this;
return self__.meta30680;
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30680","meta30680",1420399572,null)], null);
});

cljs.core.async.t_cljs$core$async30679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30679";

cljs.core.async.t_cljs$core$async30679.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30679");
});

cljs.core.async.__GT_t_cljs$core$async30679 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30679(map_GT___$1,f__$1,ch__$1,meta30680){
return (new cljs.core.async.t_cljs$core$async30679(map_GT___$1,f__$1,ch__$1,meta30680));
});

}

return (new cljs.core.async.t_cljs$core$async30679(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30685 = (function (filter_GT_,p,ch,meta30686){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30686 = meta30686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30687,meta30686__$1){
var self__ = this;
var _30687__$1 = this;
return (new cljs.core.async.t_cljs$core$async30685(self__.filter_GT_,self__.p,self__.ch,meta30686__$1));
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30687){
var self__ = this;
var _30687__$1 = this;
return self__.meta30686;
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30686","meta30686",2125380981,null)], null);
});

cljs.core.async.t_cljs$core$async30685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30685";

cljs.core.async.t_cljs$core$async30685.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30685");
});

cljs.core.async.__GT_t_cljs$core$async30685 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30685(filter_GT___$1,p__$1,ch__$1,meta30686){
return (new cljs.core.async.t_cljs$core$async30685(filter_GT___$1,p__$1,ch__$1,meta30686));
});

}

return (new cljs.core.async.t_cljs$core$async30685(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30688 = [];
var len__17433__auto___30732 = arguments.length;
var i__17434__auto___30733 = (0);
while(true){
if((i__17434__auto___30733 < len__17433__auto___30732)){
args30688.push((arguments[i__17434__auto___30733]));

var G__30734 = (i__17434__auto___30733 + (1));
i__17434__auto___30733 = G__30734;
continue;
} else {
}
break;
}

var G__30690 = args30688.length;
switch (G__30690) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30688.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20959__auto___30736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___30736,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___30736,out){
return (function (state_30711){
var state_val_30712 = (state_30711[(1)]);
if((state_val_30712 === (7))){
var inst_30707 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30713_30737 = state_30711__$1;
(statearr_30713_30737[(2)] = inst_30707);

(statearr_30713_30737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (1))){
var state_30711__$1 = state_30711;
var statearr_30714_30738 = state_30711__$1;
(statearr_30714_30738[(2)] = null);

(statearr_30714_30738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (4))){
var inst_30693 = (state_30711[(7)]);
var inst_30693__$1 = (state_30711[(2)]);
var inst_30694 = (inst_30693__$1 == null);
var state_30711__$1 = (function (){var statearr_30715 = state_30711;
(statearr_30715[(7)] = inst_30693__$1);

return statearr_30715;
})();
if(cljs.core.truth_(inst_30694)){
var statearr_30716_30739 = state_30711__$1;
(statearr_30716_30739[(1)] = (5));

} else {
var statearr_30717_30740 = state_30711__$1;
(statearr_30717_30740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (6))){
var inst_30693 = (state_30711[(7)]);
var inst_30698 = p.call(null,inst_30693);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30698)){
var statearr_30718_30741 = state_30711__$1;
(statearr_30718_30741[(1)] = (8));

} else {
var statearr_30719_30742 = state_30711__$1;
(statearr_30719_30742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (3))){
var inst_30709 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30711__$1,inst_30709);
} else {
if((state_val_30712 === (2))){
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30711__$1,(4),ch);
} else {
if((state_val_30712 === (11))){
var inst_30701 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30720_30743 = state_30711__$1;
(statearr_30720_30743[(2)] = inst_30701);

(statearr_30720_30743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (9))){
var state_30711__$1 = state_30711;
var statearr_30721_30744 = state_30711__$1;
(statearr_30721_30744[(2)] = null);

(statearr_30721_30744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (5))){
var inst_30696 = cljs.core.async.close_BANG_.call(null,out);
var state_30711__$1 = state_30711;
var statearr_30722_30745 = state_30711__$1;
(statearr_30722_30745[(2)] = inst_30696);

(statearr_30722_30745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (10))){
var inst_30704 = (state_30711[(2)]);
var state_30711__$1 = (function (){var statearr_30723 = state_30711;
(statearr_30723[(8)] = inst_30704);

return statearr_30723;
})();
var statearr_30724_30746 = state_30711__$1;
(statearr_30724_30746[(2)] = null);

(statearr_30724_30746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (8))){
var inst_30693 = (state_30711[(7)]);
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30711__$1,(11),out,inst_30693);
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
});})(c__20959__auto___30736,out))
;
return ((function (switch__20894__auto__,c__20959__auto___30736,out){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_30728 = [null,null,null,null,null,null,null,null,null];
(statearr_30728[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_30728[(1)] = (1));

return statearr_30728;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_30711){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30729){if((e30729 instanceof Object)){
var ex__20898__auto__ = e30729;
var statearr_30730_30747 = state_30711;
(statearr_30730_30747[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30748 = state_30711;
state_30711 = G__30748;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_30711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_30711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___30736,out))
})();
var state__20961__auto__ = (function (){var statearr_30731 = f__20960__auto__.call(null);
(statearr_30731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___30736);

return statearr_30731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___30736,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30749 = [];
var len__17433__auto___30752 = arguments.length;
var i__17434__auto___30753 = (0);
while(true){
if((i__17434__auto___30753 < len__17433__auto___30752)){
args30749.push((arguments[i__17434__auto___30753]));

var G__30754 = (i__17434__auto___30753 + (1));
i__17434__auto___30753 = G__30754;
continue;
} else {
}
break;
}

var G__30751 = args30749.length;
switch (G__30751) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30749.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20959__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto__){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto__){
return (function (state_30921){
var state_val_30922 = (state_30921[(1)]);
if((state_val_30922 === (7))){
var inst_30917 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30923_30964 = state_30921__$1;
(statearr_30923_30964[(2)] = inst_30917);

(statearr_30923_30964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (20))){
var inst_30887 = (state_30921[(7)]);
var inst_30898 = (state_30921[(2)]);
var inst_30899 = cljs.core.next.call(null,inst_30887);
var inst_30873 = inst_30899;
var inst_30874 = null;
var inst_30875 = (0);
var inst_30876 = (0);
var state_30921__$1 = (function (){var statearr_30924 = state_30921;
(statearr_30924[(8)] = inst_30873);

(statearr_30924[(9)] = inst_30874);

(statearr_30924[(10)] = inst_30898);

(statearr_30924[(11)] = inst_30876);

(statearr_30924[(12)] = inst_30875);

return statearr_30924;
})();
var statearr_30925_30965 = state_30921__$1;
(statearr_30925_30965[(2)] = null);

(statearr_30925_30965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (1))){
var state_30921__$1 = state_30921;
var statearr_30926_30966 = state_30921__$1;
(statearr_30926_30966[(2)] = null);

(statearr_30926_30966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (4))){
var inst_30862 = (state_30921[(13)]);
var inst_30862__$1 = (state_30921[(2)]);
var inst_30863 = (inst_30862__$1 == null);
var state_30921__$1 = (function (){var statearr_30927 = state_30921;
(statearr_30927[(13)] = inst_30862__$1);

return statearr_30927;
})();
if(cljs.core.truth_(inst_30863)){
var statearr_30928_30967 = state_30921__$1;
(statearr_30928_30967[(1)] = (5));

} else {
var statearr_30929_30968 = state_30921__$1;
(statearr_30929_30968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (15))){
var state_30921__$1 = state_30921;
var statearr_30933_30969 = state_30921__$1;
(statearr_30933_30969[(2)] = null);

(statearr_30933_30969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (21))){
var state_30921__$1 = state_30921;
var statearr_30934_30970 = state_30921__$1;
(statearr_30934_30970[(2)] = null);

(statearr_30934_30970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (13))){
var inst_30873 = (state_30921[(8)]);
var inst_30874 = (state_30921[(9)]);
var inst_30876 = (state_30921[(11)]);
var inst_30875 = (state_30921[(12)]);
var inst_30883 = (state_30921[(2)]);
var inst_30884 = (inst_30876 + (1));
var tmp30930 = inst_30873;
var tmp30931 = inst_30874;
var tmp30932 = inst_30875;
var inst_30873__$1 = tmp30930;
var inst_30874__$1 = tmp30931;
var inst_30875__$1 = tmp30932;
var inst_30876__$1 = inst_30884;
var state_30921__$1 = (function (){var statearr_30935 = state_30921;
(statearr_30935[(8)] = inst_30873__$1);

(statearr_30935[(9)] = inst_30874__$1);

(statearr_30935[(14)] = inst_30883);

(statearr_30935[(11)] = inst_30876__$1);

(statearr_30935[(12)] = inst_30875__$1);

return statearr_30935;
})();
var statearr_30936_30971 = state_30921__$1;
(statearr_30936_30971[(2)] = null);

(statearr_30936_30971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (22))){
var state_30921__$1 = state_30921;
var statearr_30937_30972 = state_30921__$1;
(statearr_30937_30972[(2)] = null);

(statearr_30937_30972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (6))){
var inst_30862 = (state_30921[(13)]);
var inst_30871 = f.call(null,inst_30862);
var inst_30872 = cljs.core.seq.call(null,inst_30871);
var inst_30873 = inst_30872;
var inst_30874 = null;
var inst_30875 = (0);
var inst_30876 = (0);
var state_30921__$1 = (function (){var statearr_30938 = state_30921;
(statearr_30938[(8)] = inst_30873);

(statearr_30938[(9)] = inst_30874);

(statearr_30938[(11)] = inst_30876);

(statearr_30938[(12)] = inst_30875);

return statearr_30938;
})();
var statearr_30939_30973 = state_30921__$1;
(statearr_30939_30973[(2)] = null);

(statearr_30939_30973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (17))){
var inst_30887 = (state_30921[(7)]);
var inst_30891 = cljs.core.chunk_first.call(null,inst_30887);
var inst_30892 = cljs.core.chunk_rest.call(null,inst_30887);
var inst_30893 = cljs.core.count.call(null,inst_30891);
var inst_30873 = inst_30892;
var inst_30874 = inst_30891;
var inst_30875 = inst_30893;
var inst_30876 = (0);
var state_30921__$1 = (function (){var statearr_30940 = state_30921;
(statearr_30940[(8)] = inst_30873);

(statearr_30940[(9)] = inst_30874);

(statearr_30940[(11)] = inst_30876);

(statearr_30940[(12)] = inst_30875);

return statearr_30940;
})();
var statearr_30941_30974 = state_30921__$1;
(statearr_30941_30974[(2)] = null);

(statearr_30941_30974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (3))){
var inst_30919 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30921__$1,inst_30919);
} else {
if((state_val_30922 === (12))){
var inst_30907 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30942_30975 = state_30921__$1;
(statearr_30942_30975[(2)] = inst_30907);

(statearr_30942_30975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (2))){
var state_30921__$1 = state_30921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30921__$1,(4),in$);
} else {
if((state_val_30922 === (23))){
var inst_30915 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30943_30976 = state_30921__$1;
(statearr_30943_30976[(2)] = inst_30915);

(statearr_30943_30976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (19))){
var inst_30902 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30944_30977 = state_30921__$1;
(statearr_30944_30977[(2)] = inst_30902);

(statearr_30944_30977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (11))){
var inst_30873 = (state_30921[(8)]);
var inst_30887 = (state_30921[(7)]);
var inst_30887__$1 = cljs.core.seq.call(null,inst_30873);
var state_30921__$1 = (function (){var statearr_30945 = state_30921;
(statearr_30945[(7)] = inst_30887__$1);

return statearr_30945;
})();
if(inst_30887__$1){
var statearr_30946_30978 = state_30921__$1;
(statearr_30946_30978[(1)] = (14));

} else {
var statearr_30947_30979 = state_30921__$1;
(statearr_30947_30979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (9))){
var inst_30909 = (state_30921[(2)]);
var inst_30910 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30921__$1 = (function (){var statearr_30948 = state_30921;
(statearr_30948[(15)] = inst_30909);

return statearr_30948;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_30949_30980 = state_30921__$1;
(statearr_30949_30980[(1)] = (21));

} else {
var statearr_30950_30981 = state_30921__$1;
(statearr_30950_30981[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (5))){
var inst_30865 = cljs.core.async.close_BANG_.call(null,out);
var state_30921__$1 = state_30921;
var statearr_30951_30982 = state_30921__$1;
(statearr_30951_30982[(2)] = inst_30865);

(statearr_30951_30982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (14))){
var inst_30887 = (state_30921[(7)]);
var inst_30889 = cljs.core.chunked_seq_QMARK_.call(null,inst_30887);
var state_30921__$1 = state_30921;
if(inst_30889){
var statearr_30952_30983 = state_30921__$1;
(statearr_30952_30983[(1)] = (17));

} else {
var statearr_30953_30984 = state_30921__$1;
(statearr_30953_30984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (16))){
var inst_30905 = (state_30921[(2)]);
var state_30921__$1 = state_30921;
var statearr_30954_30985 = state_30921__$1;
(statearr_30954_30985[(2)] = inst_30905);

(statearr_30954_30985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30922 === (10))){
var inst_30874 = (state_30921[(9)]);
var inst_30876 = (state_30921[(11)]);
var inst_30881 = cljs.core._nth.call(null,inst_30874,inst_30876);
var state_30921__$1 = state_30921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30921__$1,(13),out,inst_30881);
} else {
if((state_val_30922 === (18))){
var inst_30887 = (state_30921[(7)]);
var inst_30896 = cljs.core.first.call(null,inst_30887);
var state_30921__$1 = state_30921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30921__$1,(20),out,inst_30896);
} else {
if((state_val_30922 === (8))){
var inst_30876 = (state_30921[(11)]);
var inst_30875 = (state_30921[(12)]);
var inst_30878 = (inst_30876 < inst_30875);
var inst_30879 = inst_30878;
var state_30921__$1 = state_30921;
if(cljs.core.truth_(inst_30879)){
var statearr_30955_30986 = state_30921__$1;
(statearr_30955_30986[(1)] = (10));

} else {
var statearr_30956_30987 = state_30921__$1;
(statearr_30956_30987[(1)] = (11));

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
});})(c__20959__auto__))
;
return ((function (switch__20894__auto__,c__20959__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20895__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20895__auto____0 = (function (){
var statearr_30960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30960[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20895__auto__);

(statearr_30960[(1)] = (1));

return statearr_30960;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20895__auto____1 = (function (state_30921){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_30921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e30961){if((e30961 instanceof Object)){
var ex__20898__auto__ = e30961;
var statearr_30962_30988 = state_30921;
(statearr_30962_30988[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30989 = state_30921;
state_30921 = G__30989;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20895__auto__ = function(state_30921){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20895__auto____1.call(this,state_30921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20895__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20895__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto__))
})();
var state__20961__auto__ = (function (){var statearr_30963 = f__20960__auto__.call(null);
(statearr_30963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto__);

return statearr_30963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto__))
);

return c__20959__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30990 = [];
var len__17433__auto___30993 = arguments.length;
var i__17434__auto___30994 = (0);
while(true){
if((i__17434__auto___30994 < len__17433__auto___30993)){
args30990.push((arguments[i__17434__auto___30994]));

var G__30995 = (i__17434__auto___30994 + (1));
i__17434__auto___30994 = G__30995;
continue;
} else {
}
break;
}

var G__30992 = args30990.length;
switch (G__30992) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30990.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30997 = [];
var len__17433__auto___31000 = arguments.length;
var i__17434__auto___31001 = (0);
while(true){
if((i__17434__auto___31001 < len__17433__auto___31000)){
args30997.push((arguments[i__17434__auto___31001]));

var G__31002 = (i__17434__auto___31001 + (1));
i__17434__auto___31001 = G__31002;
continue;
} else {
}
break;
}

var G__30999 = args30997.length;
switch (G__30999) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30997.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31004 = [];
var len__17433__auto___31055 = arguments.length;
var i__17434__auto___31056 = (0);
while(true){
if((i__17434__auto___31056 < len__17433__auto___31055)){
args31004.push((arguments[i__17434__auto___31056]));

var G__31057 = (i__17434__auto___31056 + (1));
i__17434__auto___31056 = G__31057;
continue;
} else {
}
break;
}

var G__31006 = args31004.length;
switch (G__31006) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31004.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20959__auto___31059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___31059,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___31059,out){
return (function (state_31030){
var state_val_31031 = (state_31030[(1)]);
if((state_val_31031 === (7))){
var inst_31025 = (state_31030[(2)]);
var state_31030__$1 = state_31030;
var statearr_31032_31060 = state_31030__$1;
(statearr_31032_31060[(2)] = inst_31025);

(statearr_31032_31060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (1))){
var inst_31007 = null;
var state_31030__$1 = (function (){var statearr_31033 = state_31030;
(statearr_31033[(7)] = inst_31007);

return statearr_31033;
})();
var statearr_31034_31061 = state_31030__$1;
(statearr_31034_31061[(2)] = null);

(statearr_31034_31061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (4))){
var inst_31010 = (state_31030[(8)]);
var inst_31010__$1 = (state_31030[(2)]);
var inst_31011 = (inst_31010__$1 == null);
var inst_31012 = cljs.core.not.call(null,inst_31011);
var state_31030__$1 = (function (){var statearr_31035 = state_31030;
(statearr_31035[(8)] = inst_31010__$1);

return statearr_31035;
})();
if(inst_31012){
var statearr_31036_31062 = state_31030__$1;
(statearr_31036_31062[(1)] = (5));

} else {
var statearr_31037_31063 = state_31030__$1;
(statearr_31037_31063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (6))){
var state_31030__$1 = state_31030;
var statearr_31038_31064 = state_31030__$1;
(statearr_31038_31064[(2)] = null);

(statearr_31038_31064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (3))){
var inst_31027 = (state_31030[(2)]);
var inst_31028 = cljs.core.async.close_BANG_.call(null,out);
var state_31030__$1 = (function (){var statearr_31039 = state_31030;
(statearr_31039[(9)] = inst_31027);

return statearr_31039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31030__$1,inst_31028);
} else {
if((state_val_31031 === (2))){
var state_31030__$1 = state_31030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31030__$1,(4),ch);
} else {
if((state_val_31031 === (11))){
var inst_31010 = (state_31030[(8)]);
var inst_31019 = (state_31030[(2)]);
var inst_31007 = inst_31010;
var state_31030__$1 = (function (){var statearr_31040 = state_31030;
(statearr_31040[(7)] = inst_31007);

(statearr_31040[(10)] = inst_31019);

return statearr_31040;
})();
var statearr_31041_31065 = state_31030__$1;
(statearr_31041_31065[(2)] = null);

(statearr_31041_31065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (9))){
var inst_31010 = (state_31030[(8)]);
var state_31030__$1 = state_31030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31030__$1,(11),out,inst_31010);
} else {
if((state_val_31031 === (5))){
var inst_31010 = (state_31030[(8)]);
var inst_31007 = (state_31030[(7)]);
var inst_31014 = cljs.core._EQ_.call(null,inst_31010,inst_31007);
var state_31030__$1 = state_31030;
if(inst_31014){
var statearr_31043_31066 = state_31030__$1;
(statearr_31043_31066[(1)] = (8));

} else {
var statearr_31044_31067 = state_31030__$1;
(statearr_31044_31067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (10))){
var inst_31022 = (state_31030[(2)]);
var state_31030__$1 = state_31030;
var statearr_31045_31068 = state_31030__$1;
(statearr_31045_31068[(2)] = inst_31022);

(statearr_31045_31068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31031 === (8))){
var inst_31007 = (state_31030[(7)]);
var tmp31042 = inst_31007;
var inst_31007__$1 = tmp31042;
var state_31030__$1 = (function (){var statearr_31046 = state_31030;
(statearr_31046[(7)] = inst_31007__$1);

return statearr_31046;
})();
var statearr_31047_31069 = state_31030__$1;
(statearr_31047_31069[(2)] = null);

(statearr_31047_31069[(1)] = (2));


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
});})(c__20959__auto___31059,out))
;
return ((function (switch__20894__auto__,c__20959__auto___31059,out){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_31051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31051[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_31051[(1)] = (1));

return statearr_31051;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_31030){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_31030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e31052){if((e31052 instanceof Object)){
var ex__20898__auto__ = e31052;
var statearr_31053_31070 = state_31030;
(statearr_31053_31070[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31071 = state_31030;
state_31030 = G__31071;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_31030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_31030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___31059,out))
})();
var state__20961__auto__ = (function (){var statearr_31054 = f__20960__auto__.call(null);
(statearr_31054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___31059);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___31059,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31072 = [];
var len__17433__auto___31142 = arguments.length;
var i__17434__auto___31143 = (0);
while(true){
if((i__17434__auto___31143 < len__17433__auto___31142)){
args31072.push((arguments[i__17434__auto___31143]));

var G__31144 = (i__17434__auto___31143 + (1));
i__17434__auto___31143 = G__31144;
continue;
} else {
}
break;
}

var G__31074 = args31072.length;
switch (G__31074) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31072.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20959__auto___31146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___31146,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___31146,out){
return (function (state_31112){
var state_val_31113 = (state_31112[(1)]);
if((state_val_31113 === (7))){
var inst_31108 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31114_31147 = state_31112__$1;
(statearr_31114_31147[(2)] = inst_31108);

(statearr_31114_31147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (1))){
var inst_31075 = (new Array(n));
var inst_31076 = inst_31075;
var inst_31077 = (0);
var state_31112__$1 = (function (){var statearr_31115 = state_31112;
(statearr_31115[(7)] = inst_31076);

(statearr_31115[(8)] = inst_31077);

return statearr_31115;
})();
var statearr_31116_31148 = state_31112__$1;
(statearr_31116_31148[(2)] = null);

(statearr_31116_31148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (4))){
var inst_31080 = (state_31112[(9)]);
var inst_31080__$1 = (state_31112[(2)]);
var inst_31081 = (inst_31080__$1 == null);
var inst_31082 = cljs.core.not.call(null,inst_31081);
var state_31112__$1 = (function (){var statearr_31117 = state_31112;
(statearr_31117[(9)] = inst_31080__$1);

return statearr_31117;
})();
if(inst_31082){
var statearr_31118_31149 = state_31112__$1;
(statearr_31118_31149[(1)] = (5));

} else {
var statearr_31119_31150 = state_31112__$1;
(statearr_31119_31150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (15))){
var inst_31102 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31120_31151 = state_31112__$1;
(statearr_31120_31151[(2)] = inst_31102);

(statearr_31120_31151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (13))){
var state_31112__$1 = state_31112;
var statearr_31121_31152 = state_31112__$1;
(statearr_31121_31152[(2)] = null);

(statearr_31121_31152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (6))){
var inst_31077 = (state_31112[(8)]);
var inst_31098 = (inst_31077 > (0));
var state_31112__$1 = state_31112;
if(cljs.core.truth_(inst_31098)){
var statearr_31122_31153 = state_31112__$1;
(statearr_31122_31153[(1)] = (12));

} else {
var statearr_31123_31154 = state_31112__$1;
(statearr_31123_31154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (3))){
var inst_31110 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31112__$1,inst_31110);
} else {
if((state_val_31113 === (12))){
var inst_31076 = (state_31112[(7)]);
var inst_31100 = cljs.core.vec.call(null,inst_31076);
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31112__$1,(15),out,inst_31100);
} else {
if((state_val_31113 === (2))){
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31112__$1,(4),ch);
} else {
if((state_val_31113 === (11))){
var inst_31092 = (state_31112[(2)]);
var inst_31093 = (new Array(n));
var inst_31076 = inst_31093;
var inst_31077 = (0);
var state_31112__$1 = (function (){var statearr_31124 = state_31112;
(statearr_31124[(10)] = inst_31092);

(statearr_31124[(7)] = inst_31076);

(statearr_31124[(8)] = inst_31077);

return statearr_31124;
})();
var statearr_31125_31155 = state_31112__$1;
(statearr_31125_31155[(2)] = null);

(statearr_31125_31155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (9))){
var inst_31076 = (state_31112[(7)]);
var inst_31090 = cljs.core.vec.call(null,inst_31076);
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31112__$1,(11),out,inst_31090);
} else {
if((state_val_31113 === (5))){
var inst_31076 = (state_31112[(7)]);
var inst_31077 = (state_31112[(8)]);
var inst_31085 = (state_31112[(11)]);
var inst_31080 = (state_31112[(9)]);
var inst_31084 = (inst_31076[inst_31077] = inst_31080);
var inst_31085__$1 = (inst_31077 + (1));
var inst_31086 = (inst_31085__$1 < n);
var state_31112__$1 = (function (){var statearr_31126 = state_31112;
(statearr_31126[(12)] = inst_31084);

(statearr_31126[(11)] = inst_31085__$1);

return statearr_31126;
})();
if(cljs.core.truth_(inst_31086)){
var statearr_31127_31156 = state_31112__$1;
(statearr_31127_31156[(1)] = (8));

} else {
var statearr_31128_31157 = state_31112__$1;
(statearr_31128_31157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (14))){
var inst_31105 = (state_31112[(2)]);
var inst_31106 = cljs.core.async.close_BANG_.call(null,out);
var state_31112__$1 = (function (){var statearr_31130 = state_31112;
(statearr_31130[(13)] = inst_31105);

return statearr_31130;
})();
var statearr_31131_31158 = state_31112__$1;
(statearr_31131_31158[(2)] = inst_31106);

(statearr_31131_31158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (10))){
var inst_31096 = (state_31112[(2)]);
var state_31112__$1 = state_31112;
var statearr_31132_31159 = state_31112__$1;
(statearr_31132_31159[(2)] = inst_31096);

(statearr_31132_31159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (8))){
var inst_31076 = (state_31112[(7)]);
var inst_31085 = (state_31112[(11)]);
var tmp31129 = inst_31076;
var inst_31076__$1 = tmp31129;
var inst_31077 = inst_31085;
var state_31112__$1 = (function (){var statearr_31133 = state_31112;
(statearr_31133[(7)] = inst_31076__$1);

(statearr_31133[(8)] = inst_31077);

return statearr_31133;
})();
var statearr_31134_31160 = state_31112__$1;
(statearr_31134_31160[(2)] = null);

(statearr_31134_31160[(1)] = (2));


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
});})(c__20959__auto___31146,out))
;
return ((function (switch__20894__auto__,c__20959__auto___31146,out){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_31138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31138[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_31138[(1)] = (1));

return statearr_31138;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_31112){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_31112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e31139){if((e31139 instanceof Object)){
var ex__20898__auto__ = e31139;
var statearr_31140_31161 = state_31112;
(statearr_31140_31161[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31112;
state_31112 = G__31162;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_31112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_31112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___31146,out))
})();
var state__20961__auto__ = (function (){var statearr_31141 = f__20960__auto__.call(null);
(statearr_31141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___31146);

return statearr_31141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___31146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31163 = [];
var len__17433__auto___31237 = arguments.length;
var i__17434__auto___31238 = (0);
while(true){
if((i__17434__auto___31238 < len__17433__auto___31237)){
args31163.push((arguments[i__17434__auto___31238]));

var G__31239 = (i__17434__auto___31238 + (1));
i__17434__auto___31238 = G__31239;
continue;
} else {
}
break;
}

var G__31165 = args31163.length;
switch (G__31165) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31163.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20959__auto___31241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20959__auto___31241,out){
return (function (){
var f__20960__auto__ = (function (){var switch__20894__auto__ = ((function (c__20959__auto___31241,out){
return (function (state_31207){
var state_val_31208 = (state_31207[(1)]);
if((state_val_31208 === (7))){
var inst_31203 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31209_31242 = state_31207__$1;
(statearr_31209_31242[(2)] = inst_31203);

(statearr_31209_31242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (1))){
var inst_31166 = [];
var inst_31167 = inst_31166;
var inst_31168 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31207__$1 = (function (){var statearr_31210 = state_31207;
(statearr_31210[(7)] = inst_31167);

(statearr_31210[(8)] = inst_31168);

return statearr_31210;
})();
var statearr_31211_31243 = state_31207__$1;
(statearr_31211_31243[(2)] = null);

(statearr_31211_31243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (4))){
var inst_31171 = (state_31207[(9)]);
var inst_31171__$1 = (state_31207[(2)]);
var inst_31172 = (inst_31171__$1 == null);
var inst_31173 = cljs.core.not.call(null,inst_31172);
var state_31207__$1 = (function (){var statearr_31212 = state_31207;
(statearr_31212[(9)] = inst_31171__$1);

return statearr_31212;
})();
if(inst_31173){
var statearr_31213_31244 = state_31207__$1;
(statearr_31213_31244[(1)] = (5));

} else {
var statearr_31214_31245 = state_31207__$1;
(statearr_31214_31245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (15))){
var inst_31197 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31215_31246 = state_31207__$1;
(statearr_31215_31246[(2)] = inst_31197);

(statearr_31215_31246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (13))){
var state_31207__$1 = state_31207;
var statearr_31216_31247 = state_31207__$1;
(statearr_31216_31247[(2)] = null);

(statearr_31216_31247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (6))){
var inst_31167 = (state_31207[(7)]);
var inst_31192 = inst_31167.length;
var inst_31193 = (inst_31192 > (0));
var state_31207__$1 = state_31207;
if(cljs.core.truth_(inst_31193)){
var statearr_31217_31248 = state_31207__$1;
(statearr_31217_31248[(1)] = (12));

} else {
var statearr_31218_31249 = state_31207__$1;
(statearr_31218_31249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (3))){
var inst_31205 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31207__$1,inst_31205);
} else {
if((state_val_31208 === (12))){
var inst_31167 = (state_31207[(7)]);
var inst_31195 = cljs.core.vec.call(null,inst_31167);
var state_31207__$1 = state_31207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31207__$1,(15),out,inst_31195);
} else {
if((state_val_31208 === (2))){
var state_31207__$1 = state_31207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31207__$1,(4),ch);
} else {
if((state_val_31208 === (11))){
var inst_31171 = (state_31207[(9)]);
var inst_31175 = (state_31207[(10)]);
var inst_31185 = (state_31207[(2)]);
var inst_31186 = [];
var inst_31187 = inst_31186.push(inst_31171);
var inst_31167 = inst_31186;
var inst_31168 = inst_31175;
var state_31207__$1 = (function (){var statearr_31219 = state_31207;
(statearr_31219[(11)] = inst_31187);

(statearr_31219[(7)] = inst_31167);

(statearr_31219[(8)] = inst_31168);

(statearr_31219[(12)] = inst_31185);

return statearr_31219;
})();
var statearr_31220_31250 = state_31207__$1;
(statearr_31220_31250[(2)] = null);

(statearr_31220_31250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (9))){
var inst_31167 = (state_31207[(7)]);
var inst_31183 = cljs.core.vec.call(null,inst_31167);
var state_31207__$1 = state_31207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31207__$1,(11),out,inst_31183);
} else {
if((state_val_31208 === (5))){
var inst_31171 = (state_31207[(9)]);
var inst_31168 = (state_31207[(8)]);
var inst_31175 = (state_31207[(10)]);
var inst_31175__$1 = f.call(null,inst_31171);
var inst_31176 = cljs.core._EQ_.call(null,inst_31175__$1,inst_31168);
var inst_31177 = cljs.core.keyword_identical_QMARK_.call(null,inst_31168,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31178 = (inst_31176) || (inst_31177);
var state_31207__$1 = (function (){var statearr_31221 = state_31207;
(statearr_31221[(10)] = inst_31175__$1);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31178)){
var statearr_31222_31251 = state_31207__$1;
(statearr_31222_31251[(1)] = (8));

} else {
var statearr_31223_31252 = state_31207__$1;
(statearr_31223_31252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (14))){
var inst_31200 = (state_31207[(2)]);
var inst_31201 = cljs.core.async.close_BANG_.call(null,out);
var state_31207__$1 = (function (){var statearr_31225 = state_31207;
(statearr_31225[(13)] = inst_31200);

return statearr_31225;
})();
var statearr_31226_31253 = state_31207__$1;
(statearr_31226_31253[(2)] = inst_31201);

(statearr_31226_31253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (10))){
var inst_31190 = (state_31207[(2)]);
var state_31207__$1 = state_31207;
var statearr_31227_31254 = state_31207__$1;
(statearr_31227_31254[(2)] = inst_31190);

(statearr_31227_31254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31208 === (8))){
var inst_31171 = (state_31207[(9)]);
var inst_31167 = (state_31207[(7)]);
var inst_31175 = (state_31207[(10)]);
var inst_31180 = inst_31167.push(inst_31171);
var tmp31224 = inst_31167;
var inst_31167__$1 = tmp31224;
var inst_31168 = inst_31175;
var state_31207__$1 = (function (){var statearr_31228 = state_31207;
(statearr_31228[(7)] = inst_31167__$1);

(statearr_31228[(8)] = inst_31168);

(statearr_31228[(14)] = inst_31180);

return statearr_31228;
})();
var statearr_31229_31255 = state_31207__$1;
(statearr_31229_31255[(2)] = null);

(statearr_31229_31255[(1)] = (2));


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
});})(c__20959__auto___31241,out))
;
return ((function (switch__20894__auto__,c__20959__auto___31241,out){
return (function() {
var cljs$core$async$state_machine__20895__auto__ = null;
var cljs$core$async$state_machine__20895__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$state_machine__20895__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$state_machine__20895__auto____1 = (function (state_31207){
while(true){
var ret_value__20896__auto__ = (function (){try{while(true){
var result__20897__auto__ = switch__20894__auto__.call(null,state_31207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20897__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__20898__auto__ = e31234;
var statearr_31235_31256 = state_31207;
(statearr_31235_31256[(5)] = ex__20898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31257 = state_31207;
state_31207 = G__31257;
continue;
} else {
return ret_value__20896__auto__;
}
break;
}
});
cljs$core$async$state_machine__20895__auto__ = function(state_31207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20895__auto____1.call(this,state_31207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20895__auto____0;
cljs$core$async$state_machine__20895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20895__auto____1;
return cljs$core$async$state_machine__20895__auto__;
})()
;})(switch__20894__auto__,c__20959__auto___31241,out))
})();
var state__20961__auto__ = (function (){var statearr_31236 = f__20960__auto__.call(null);
(statearr_31236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20959__auto___31241);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20961__auto__);
});})(c__20959__auto___31241,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map