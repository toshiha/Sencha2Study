Ext.define("docomo.view.MatchList", {
  extend:'Ext.dataview.List',
  xtype:'matchlist',
  requires:[
    'Ext.dataview.List'
  ],
  config:{
    itemTpl:'<div><span class="match">{home} - {visitor}</span><span class="location">@{home}</span><tpl if="score"><span class="match-score">{score}</span></tpl></div>'
  }
});
