'use strict';

var _require = require('./adapters'),
    inputFieldsAdapter = _require.inputFieldsAdapter,
    buttonAdapter = _require.buttonAdapter,
    toastAdapter = _require.toastAdapter,
    validationAdapter = _require.validationAdapter,
    orderApiSalesOrderShipping = _require.orderApiSalesOrderShipping,
    orderApiPayNow = _require.orderApiPayNow,
    messagePromptAdapter = _require.messagePromptAdapter,
    eventBuilderAgendaEditorAdapter = _require.eventBuilderAgendaEditorAdapter;

if (!global.ActionUtils) {
    global.ActionUtils = {
        executeAction: function executeAction(self, cmp, actionName, params) {
            return {
                then: function then(resolve, reject) {
                    var action = cmp.get(actionName);
                    action.setParams(params);
                    if (!action.result.errorMessage) {
                        //success
                        resolve(action.result.response);
                    } else {
                        if (typeof reject === "function") {
                            reject(action.result.errorMessage);
                        }
                    }
                }
            };
        }
    };
}

exports.frameworkAdapters = function (_ref) {
    var register = _ref.register;

    register('Framework:InputFields', inputFieldsAdapter);
    register('Framework:Button', buttonAdapter);
    register('Framework:Toast', toastAdapter);
    register('OrderApi:PayNow', orderApiPayNow);
    register('Framework:ValidationErrorMessages', validationAdapter);
    register('OrderApi:SalesOrderShipping', orderApiSalesOrderShipping);
    register('OrderApi:PayNow', orderApiPayNow);
    register('Framework:MessagePrompt', messagePromptAdapter);
    register('EventApi:EventBuilderAgendaEditorAdapter', eventBuilderAgendaEditorAdapter);
};