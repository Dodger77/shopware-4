//{namespace name=backend/config/view/form}
/**
 * todo@all: Documentation
 */
//{block name="backend/config/view/price_group/discount"}
Ext.define('Shopware.apps.Config.view.priceGroup.Discount', {
    extend: 'Shopware.apps.Config.view.base.Property',
    alias: 'widget.config-pricegroup-discount',

    title: 'Discounts',
    name: 'discounts',

    sortableColumns: false,

    getColumns: function() {
        var me = this;

        return [{
            header: '{s name=price_group/table/start_header}Item quantity{/s}',
            dataIndex: 'start',
            align: 'right',
            flex: 1,
            xtype: 'numbercolumn',
            editor: {
                xtype: 'numberfield',
                minValue: 1,
                decimalPrecision: 0
            }
        }, {
            xtype: 'numbercolumn',
            header: '{s name=price_group/table/basket_header}Discount (%){/s}',
            dataIndex: 'discount',
            align: 'right',
            flex: 1,
            format: '0,000.00 %',
            editor: {
                xtype: 'numberfield',
                minValue: 0,
                decimalPrecision: 2
            }
        }, me.getActionColumn()];
    },

    getTopBar: function () {
        var me = this,
            topBar = me.callParent();
        topBar.push({
            xtype: 'config-element-select',
            flex: 1,
            isPropertyFilter: true,
            name: 'customerGroupId',
            store: 'base.CustomerGroup',
            emptyText: '{s name=price_group/table/customer_group_empty_text}Please select...{/s}'
        });
        return topBar;
    }
});
//{/block}