if(!lt.util.load.provided_QMARK_('lt.plugins.haxe')) {
goog.provide('lt.plugins.haxe');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.util.js');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.haxe.fpath = require("path");
lt.plugins.haxe.find_file = (function find_file(suffix){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7932_SHARP_){return p1__7932_SHARP_.endsWith(suffix);
}),new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.workspace.current_ws))));
});
lt.plugins.haxe.__BEH__compile_haxe = (function __BEH__compile_haxe(this$){var build_file = lt.plugins.haxe.find_file.call(null,".hxml");var project_root = lt.plugins.haxe.fpath.dirname(build_file);var build_file__$1 = lt.plugins.haxe.fpath.basename(build_file);return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"haxe",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [build_file__$1], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),project_root,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.haxe.haxe], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.haxe","compile-haxe","lt.plugins.haxe/compile-haxe",4531085870),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.haxe.__BEH__compile_haxe,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"haxe-compile","haxe-compile",1139469438),null], null), null));
lt.plugins.haxe.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();console.log(out);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Finished")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.haxe","on-out","lt.plugins.haxe/on-out",3424066702),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.haxe.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.haxe.haxe = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.haxe","haxe","lt.plugins.haxe/haxe",4277450056),new cljs.core.Keyword(null,"name","name",1017277949),"haxe data",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.haxe","compile-haxe","lt.plugins.haxe/compile-haxe",4531085870),new cljs.core.Keyword("lt.plugins.haxe","on-out","lt.plugins.haxe/on-out",3424066702),new cljs.core.Keyword("lt.plugins.haxe","on-error","lt.plugins.haxe/on-error",4142301772)], null)));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"haxe.compile","haxe.compile",2882279773),new cljs.core.Keyword(null,"desc","desc",1016984067),"Haxe: Compile the Haxe project",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.haxe.haxe,new cljs.core.Keyword(null,"haxe-compile","haxe-compile",1139469438));
})], null));
}

//# sourceMappingURL=haxe_compiled.js.map