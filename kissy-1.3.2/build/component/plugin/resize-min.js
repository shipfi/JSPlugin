/*
Copyright 2013, KISSY UI Library v1.32
MIT Licensed
build time: Aug 15 00:01
*/
KISSY.add("component/plugin/resize",function(e,d){return d.extend({pluginBindUI:function(a){var b=a.get("el");this.set("node",b);this.on("resizeEnd",function(){var c=b.offset();a.setInternal("xy",[c.left,c.top]);a.setInternal("width",b.width());a.setInternal("height",b.height())})},pluginDestructor:function(){this.destroy()}})},{requires:["resizable"]});
