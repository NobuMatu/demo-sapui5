sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, formatter, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("com.fiori.project01.controller.View1", {
            formatter: formatter,
			onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onFilterProducts: function (oEvent) {
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
                }

                // filter binding
                var oList = this.byId("productList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },
            onSelect: function(oEvent) {
                // 選択された行のパスを取得：/Products/2 のような形で取得される
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                // indexに上記パスからインデックスの部分を取得
                var index = sPath.split("/")[sPath.split("/").length -1];
                // Routerオブジェクトを使って詳細画面へ遷移する
                this.oRouter.navTo("ProductDetail", {
                    index: index
                });
            }
		});
	});
