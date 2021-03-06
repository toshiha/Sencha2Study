/*
 * File: app/view/TwwetList.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Afc.view.TwwetList', {
    extend: 'Ext.Container',
    alias: 'widget.twwetlist',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'searchfield',
                        label: ''
                    },
                    {
                        xtype: 'button',
                        cls: '',
                        ui: 'plain',
                        iconCls: 'refresh',
                        iconMask: true,
                        text: ''
                    }
                ]
            },
            {
                xtype: 'list',
                itemTpl: [
                    '<div>List Item {string}</div>'
                ]
            }
        ]
    }

});