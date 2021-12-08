sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.fiori.project01.controller.ProductDetail", {

			onInit: function () {
                // Routerオブジェクトを取得
                this.oRouter = this.getOwnerComponent().getRouter();
                // ルートがマッチしたときのイベントハンドラを登録
                this.oRouter.attachRoutePatternMatched(this._matched, this);
            },

            _matched: function (oEvent) {
                // 呼び出し元画面で指定された引数を取得
                var index = oEvent.getParameter("arguments").index;
                // パスを作成：/Products/2のような形に 
                var sPath = "mProducts>/Products/" + index;
                // パスをビューにバインド
                this.getView().bindElement(sPath);
            }
		});
	});
