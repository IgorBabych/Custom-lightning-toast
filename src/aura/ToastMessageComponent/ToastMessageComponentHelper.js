({
    showCustomToast : function(state, contents) {
                var messageEvent = $A.get("e.c:ToastMessageEvent");
                messageEvent.setParams({
                    "state": state,
                    "contents": contents
                });
                messageEvent.fire();
    },
});