const { inputFieldsAdapter, buttonAdapter, toastAdapter, validationAdapter,
  orderApiSalesOrderShipping, orderApiPayNow, messagePromptAdapter, eventBuilderAgendaEditorAdapter } = require('./adapters')

if (!global.ActionUtils) {
    global.ActionUtils = {
        executeAction: function (self, cmp, actionName, params) {
            return {
                then: function (resolve, reject) {
                    var action = cmp.get(actionName);
                    action.setParams(params);
                    if (!action.result.errorMessage) { //success
                        resolve(action.result.response);
                    }
                    else {
                        if (typeof reject === "function") {
                            reject(action.result.errorMessage);
                        }
                    }
                }
            }
        }
    }
}

exports.frameworkAdapters = ({register}) => {
  register('Framework:InputFields', inputFieldsAdapter)
  register('Framework:Button', buttonAdapter)
  register('Framework:Toast', toastAdapter)
  register('OrderApi:PayNow', orderApiPayNow)
  register('Framework:ValidationErrorMessages', validationAdapter)
  register('OrderApi:SalesOrderShipping', orderApiSalesOrderShipping)
  register('OrderApi:PayNow', orderApiPayNow)
  register('Framework:MessagePrompt', messagePromptAdapter)
  register('EventApi:EventBuilderAgendaEditorAdapter', eventBuilderAgendaEditorAdapter)
}