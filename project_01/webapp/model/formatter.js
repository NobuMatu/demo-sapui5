sap.ui.define([], function () {
    "use strict";
    return {
        stockStatus: function (stock) {
            //var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            if (stock >= 100) {
                //return sap.ui.core.ValueState.Warning;
                //return resourceBundle.getText("stockA");
                return "stockA";
            } else if (stock >= 10) {
                //return sap.ui.core.ValueState.Success;
                //return resourceBundle.getText("stockB");
                return "stockB";
            } else {
                //return sap.ui.core.ValueState.Error;
                //return resourceBundle.getText("stockC");
                return "stockC";
            }
        }
    };
});