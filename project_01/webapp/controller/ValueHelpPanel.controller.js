sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, formatter, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("com.fiori.project01.controller.ValueHelpPanel", {
            onValueHelp1: function(oEvent) {
                this._ValueHelp(oEvent, "mData>/Prefecture");
            },
            onValueHelp2: function(oEvent) {
                this._ValueHelp(oEvent, "mData>/Sports");
            },

            onConfirm: function(oEvent) {
                // 選択された行のタイトルを取得
                var selectedItem = oEvent.getParameter("selectedItem").getTitle();
                // インプット項目に値を設定
                this.getView().byId(this.inputId).setValue(selectedItem);
            },

            _ValueHelp: function(oEvent, path) {
                this.inputId = oEvent.getSource().getId();
                var oFragment = new sap.ui.xmlfragment("com.fiori.project01.view.fragment.ValueHelp", this);
                this.getView().addDependent(oFragment);
                oFragment.bindAggregation("items", {
                    path: path,
                    template: new sap.m.StandardListItem({
                        title: "{mData>name}"
                    })
                });
                oFragment.open();
            }
		});
	});
