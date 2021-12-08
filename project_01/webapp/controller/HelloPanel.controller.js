sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageToast) {
		"use strict";

		return Controller.extend("com.fiori.project01.controller.HelloPanel", {
            _data: {
                "date": new Date()
            },

			onInit: function (evt) {
                var oModel = new JSONModel(this._data);
                this.getView().setModel(oModel);
            },
            onShowHello: function () {
                // alert("Hello World");
                // sap.m.MessageToast.show("Hello World");


                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sProduct = this.getView().getModel("mPrice").getProperty("/product/name");
                var sMsg = oBundle.getText("helloMessage", [sProduct]);

                // show a native JavaScript alert
                MessageToast.show(sMsg);
            }
		});
	});
