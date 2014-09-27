Ext.define('VWR.controller.MenuController', {
    extend: 'Ext.app.Controller',
    models:['MenuVWItem'],
    stores:['MenuStore'],
    views: [
        'menu.MenuView'        
    ],

    init: function () {
//        this.control({
////            'servicio button[action=servicioSave]': {
////                click: this.saveServicio
////            }
//        });
    },

    ////FUNCIONES DE BOTONES

    saveServicio: function () {

        
    },
    ///FIN FUNCIONES DE BOTONES   

    ///FUncion AJAX Envio
    sendData: function (url, frm) {
        
    }
    ///FIN FUncion AJAX Envio
});
