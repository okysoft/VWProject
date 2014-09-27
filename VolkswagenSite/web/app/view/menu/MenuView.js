Ext.define('VWR.view.menu.MenuView', {
    extend: 'Ext.view.View',
    alias: 'widget.menuVW',
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div style="margin-bottom: 10px;" class="phone" >',
              '<img src="{src}" height="50px" width="50px" /> ',
              '</br>',
              '<a href="handlers/GetFiles.ashx?p={FilePath}">{FileName}</a>',
              '</br>',
              '<span> Fecha: "{FileDateString}"</span>',
            '</div>',
        '</tpl>'
    ),
    store: 'imagesStore',
    emptyText: 'No opciones disponibles',
    split: true,
    width: 150,    
    multiSelect: false,
    id: 'phones',
    itemSelector: 'div.phone',
    overItemCls: 'phone-hover',
    initComponent: function () {
        this.callParent(arguments);
        
        
    }
});