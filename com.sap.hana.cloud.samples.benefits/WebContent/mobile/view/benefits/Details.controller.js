sap.ui.controller("com.sap.hana.cloud.samples.benefits.view.benefits.Details", {
    onInit: function() {
    },
    onAfterRendering: function() {
    },
    linkPressed: function(evt) {
        var control = sap.ui.getCore().byId(evt.getParameters().id);
        var link = control.getModel().getData().infoLink;
        if (link) {
            sap.m.URLHelper.redirect(link, true);    
        }        
    }

});
