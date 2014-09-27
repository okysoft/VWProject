Ext.define('VWR.model.MenuVWItem', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'src', type: 'string' },
            { name: 'FileName', type: 'string' },
            { name: 'FilePath', type: 'string' },
            { name: 'FileDateUpload', type: 'string' },
            { name: 'FileDateString', type: 'string' }
        ]
    });