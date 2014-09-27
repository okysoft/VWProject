Ext.define('VWR.store.MenuStore', {
    storeId: 'imagesStore',
    extend: 'Ext.data.Store',
    requires: 'VWR.model.MenuVWItem',
    model: 'VWR.model.MenuVWItem',      
        data: [
        { 'src': 'Imagenes/audios.png', 'name': 'No lo ha cursado', 'FileName':'bla', 'FilePath':'bla','FileDateUpload':'bla','FileDateString':'bla' },
        { 'src': 'Imagenes/audios.png', 'name': 'No lo ha cursado 2', 'FileName':'bla', 'FilePath':'bla','FileDateUpload':'bla','FileDateString':'bla' },
        { 'src': 'Imagenes/audios.png', 'name': 'No lo ha cursado 3', 'FileName':'bla', 'FilePath':'bla','FileDateUpload':'bla','FileDateString':'bla' },
        { 'src': 'Imagenes/audios.png', 'name': 'No lo ha cursado 4', 'FileName':'bla', 'FilePath':'bla','FileDateUpload':'bla','FileDateString':'bla' },
        { 'src': 'Imagenes/audios.png', 'name': 'No lo ha cursado 5', 'FileName':'bla', 'FilePath':'bla','FileDateUpload':'bla','FileDateString':'bla' },
        { 'src': 'Imagenes/audios.png', 'name': 'No lo ha cursado 6', 'FileName':'bla', 'FilePath':'bla','FileDateUpload':'bla','FileDateString':'bla' }        
    ]
});