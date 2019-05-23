({

    showBaseToast: function (component, event, helper) {
        helper.showCustomToast("base", "Base message");
    },

    showSuccessToast: function (component, event, helper) {
        helper.showCustomToast("success", "Success message");
    },

    showWarningToast: function (component, event, helper) {
        helper.showCustomToast("warning", "Warning message");
    },

    showErrorToast: function (component, event, helper) {
        helper.showCustomToast("error", "Error message");
    },

});