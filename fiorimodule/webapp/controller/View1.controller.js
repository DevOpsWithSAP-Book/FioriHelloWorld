sap.ui.define([
    "sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("fiorimodule.controller.View1", {
            onInit: function () {
                // HTML string bound to the formatted text control
				var oModel = new JSONModel({
					HTML : "<h3>Sample Fiori Application to build a CI/CD pipeline</h3>"
				});
				this.getView().setModel(oModel);

            }
        });
    });
