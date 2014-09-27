Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'VWR',
    header: false,
    title: 'Volkswagen Reporter',
    controllers: [
                   'MenuController'
                     ],

    showSpinner: function () {
        Ext.getBody().mask('Guardando Información...');
    },

    hideSpinner: function () {
        Ext.getBody().unmask();
    },

    launch: function () {
        
        //Ext.data.StoreManager.lookup('imagesStore').loadData(contenido, false);
        Ext.Panel.prototype.buttonAlign = 'left';
        Ext.Ajax.on('beforerequest', this.showSpinner, this);
        Ext.Ajax.on('requestcomplete', this.hideSpinner, this);
        Ext.Ajax.on('requestexception', this.hideSpinner, this);

        Ext.create('Ext.container.Viewport', {
            forceFit: true,
            hideMode: "offsets",
            layout: "border",
            defaults: { autoScroll: true },
            enableTabScroll: true,
            autoScroll: true,
            deferredRender: true,            
            align: 'middle',
            defaults: {
                margins: '0 0 0 0'
            },            
            items: [
                {
                    xtype: 'fieldcontainer',
                    region: "north",
                    id: 'banner',
                    layout: {
                        type: 'vbox', //hbox
                        padding: '5',
                        align: 'stretch'
                    },
                    //frame: true,
                    align: 'middle',
                    pack: 'center',
                    items: [
                    {
                        xtype: 'box',
                        html: '    <style type="text/css">' +
        '.style1' +
        '{' +
            'width: 100%;' +
            'background-color: white;' +
        '}' +
        '.style2' +
        '{' +
            'width: 44px;' +
            'height: 44px;' +
        '}' +
        '.style3' +
        '{' +
            'width: 57px;' +
            'height: 57px;' +
        '}' +
        '.style4' +
        '{' +
            'width: 83px;' +
        '}' +
        '.style5' +
        '{' +
            'width: 315px;' +
            'font-size: large;' +
     '   }' +
    '</style>' +
    '<div>' +
       '<table bgcolor="white" class="style1" style="width: 100%">' +
            '<tr>' +
                '<td class="style4" style="text-align: left">' +
                '    <img alt="" class="style2" src="Images/logo%20ipsos.png" /></td>' +
               ' <td class="style5" style="text-align: left">' +
              '      Volkswagen Reportador</td>' +
             '   <td>' +
            '        &nbsp;</td>' +
           '     <td style="text-align: right">' +
          '          <img alt="" class="style3" src="Images/dasautosmall.png" /></td>' +
         '   </tr>' +
        '</table>' +
        '</div>'
                    }]
                },
  //    viewFiles.on('select', function (e, record, eOpts) { selectedEvidence = record});
                {
                    region: 'center',
                    xtype: 'menuVW',                    
                }
        ]
        });

        if (Ext.get('page-loader')) {
            Ext.get('page-loader').remove();
        };
        //Ext.getCmp("banner").body.setStyle('background', 'blue');
    }
});