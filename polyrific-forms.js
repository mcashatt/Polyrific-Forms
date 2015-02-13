//Polyrific Forms: a collection of AngularJS directives for rapid form creation by Matt Cashatt
//This code is made available under the GPL V3 license (http://choosealicense.com/licenses/gpl-3.0/).  You can use it anywhere you like, but if you improve it, you need to share with the rest of us!

angular.module('app.directives').directive('prFormInput', [function () {
    return {
        template: function (element) {
            var id = element.attr("name");
            var pattern = (element.attr("pattern") != undefined && element.attr("pattern") != "") ? "ng-pattern=\"Lists.Regex." + element.attr("pattern") + "\"" : "";
            var blur = (element.attr("blur") != undefined && element.attr("blur") != "") ? "ng-blur=\"" + element.attr("blur") + "\"" : "";
            var focus = (element.attr("focus") != undefined && element.attr("focus") != "") ? " ng-focus=\"" + element.attr("focus") + "\"" : "";

            var isRequired = (element.attr("isRequired").indexOf('true') > -1) ? "required" : "";
            if (isRequired == "required") {
                var tooltip = '';
                var keyup = "";
            }
            else {
                var tooltip = '';
                var keyup = "";
            }

            var form = (isRequired == "required") ? element.attr("isRequired").split("|")[1] : "";

            if (element.attr("requiredCondition") != undefined) {
                var rc = element.attr("requiredCondition").split("~");
                isRequired = "ng-required=\"" + rc[1] + "\"";
                form = rc[0];
            }

            var ngClass = (isRequired != "") ? "ng-class=\"{'alert-danger': (ShowValidationMessages || " + form + "." + id + ".$dirty) && (" + form + "." + id + ".$error.required || " + form + "." + id + ".$invalid), 'alert-success':" + form + "." + id + ".$dirty && !" + form + "." + id + ".$error.required && !" + form + "." + id + ".$invalid}\"" : "";

            var enableAsterisk = (element.attr("no-asterisk") == undefined);
            var asterisk = (element.attr("label") != "" && isRequired == "required" && enableAsterisk) ? "<span class='asterisk'>*</span>" : "";
            var help = (element.attr("help") && element.attr("help") != "") ? " <span title='" + element.attr("help") + "'>(?)</span> " : "";
            var label = (element.attr("label") != undefined && element.attr("label") != "") ? "<label for='" + id + "'>" + element.attr("label") + help + asterisk + "</label>" : "";
            var model = element.attr("model");
            var placeholder = element.attr("placeholder");


            var type = (element.attr("type") != undefined && element.attr("type") != "") ? element.attr("type") : "text";

            var min = (element.attr("min") != undefined && element.attr("min") != "") ? "min='" + element.attr("min") + "'" : "";
            var max = (element.attr("max") != undefined && element.attr("max") != "") ? "max='" + element.attr("max") + "'" : "";
            var extraAttribute = (element.attr("extra-attribute") != undefined && element.attr("extra-attribute") != "") ? element.attr("extra-attribute") : "";

            var span = (element.attr("span") != undefined && element.attr("span") != "") ? element.attr("span") : "12";
            return "<div class='col-lg-" + span + " col-md-" + span + " col-sm-" + span + " col-xs-" + span + "'>" + label + "<input " + extraAttribute + " " + min + " " + max + " autocomplete='off' type='" + type + "' class='form-control' " + ngClass + " id='" + id + "'" + keyup + " ng-model='" + model
                + "' " + blur + focus + " placeholder='" + placeholder + "' " + isRequired + " name='" + id + "' id='" + id + "' " + pattern + ">" + tooltip + "</div>";
        }
    };
}]);

angular.module('app.directives').directive('prFormTextarea', [function () {
    return {
        template: function (element) {
            var id = element.attr("name");
            var pattern = (element.attr("pattern") != undefined && element.attr("pattern") != "") ? "ng-pattern=\"Lists.Regex." + element.attr("pattern") + "\"" : "";
            var isRequired = (element.attr("isRequired").indexOf('true') > -1) ? "required" : "";
            var form = (isRequired == "required") ? element.attr("isRequired").split("|")[1] : "";
            var ngClass = (isRequired == "required") ? "ng-class=\"{'alert-danger': (ShowValidationMessages || " + form + "." + id + ".$dirty) && (" + form + "." + id + ".$error.required || " + form + "." + id + ".$invalid), 'alert-success':" + form + "." + id + ".$dirty && !" + form + "." + id + ".$error.required && !" + form + "." + id + ".$invalid}\"" : "";
            var enableAsterisk = (element.attr("no-asterisk") == undefined);
            var asterisk = (element.attr("label") != "" && isRequired == "required" && enableAsterisk) ? "<span class='asterisk'>*</span>" : "";
            var help = (element.attr("help") && element.attr("help") != "") ? " <span title='" + element.attr("help") + "'>(?)</span> " : "";
            var label = (element.attr("label") != undefined && element.attr("label") != "") ? "<label for='" + id + "'>" + element.attr("label") + help + asterisk + "</label>" : "";
            var model = element.attr("model");
            var placeholder = element.attr("placeholder");
            var span = (element.attr("span") != undefined && element.attr("span") != "") ? element.attr("span") : "12";
            var rows = (element.attr("rows") != undefined && element.attr("rows") != "") ? element.attr("rows") : "4";
            return "<div class='col-lg-" + span + " col-md-" + span + " col-sm-" + span + " col-xs-" + span + "'>" + label + "<textarea rows='" + rows + "' class='form-control' " + ngClass + " id='" + id + "' ng-model='" + model
                + "' placeholder='" + placeholder + "' " + isRequired + " name='" + id + "' " + pattern + "></textarea></div>";
        }
    };
}]);

angular.module('app.directives').directive('prFormSelect', [function () {
    return {
        template: function (element) {
            var id = element.attr("name");
            var isRequired = (element.attr("isRequired").indexOf('true') > -1) ? "required" : "";
            var form = (isRequired == "required") ? element.attr("isRequired").split("|")[1] : "";
            var model = (element.attr("model") != "") ? " ng-model='" + element.attr("model") + "' " : "";
            var enableAsterisk = (element.attr("no-asterisk") == undefined);
            var enableSelector = (element.attr("no-selector") == undefined);
            var asterisk = (element.attr("label") != "" && element.attr("label") != undefined && isRequired == "required" && enableAsterisk) ? "<span class='asterisk'>*</span>" : "";
            var help = (element.attr("help") && element.attr("help") != "") ? " <span title='" + element.attr("help") + "'>(?)</span> " : "";
            var label = (element.attr("label") != undefined && element.attr("label") != "") ? "<label for='" + id + "'>" + element.attr("label") + help + asterisk + "</label>" : "";
            var options = element.attr("options");
            var span = (element.attr("span") != undefined && element.attr("span") != "") ? element.attr("span") : "12";
            var change = (element.attr("change") != "") ? "ng-change='" + element.attr("change") + "'" : "";
            var ngClass = (isRequired == "required") ? "ng-class=\"{'alert-danger': (ShowValidationMessages || " + form + "." + id + ".$dirty) && (" + form + "." + id + ".$error.required || " + form + "." + id + ".$invalid), 'alert-success':" + form + "." + id + ".$dirty && !" + form + "." + id + ".$error.required && !" + form + "." + id + ".$invalid}\"" : "";
            var placeholder = element.attr("placeholder");
            var selector = enableSelector ? ((element.attr("selector") == undefined) ? ".name" : "." + element.attr("selector")) : "";
            var selectorValue = (element.attr("selectorValue") != undefined && element.attr("selectorValue") != "") ? "op." + element.attr("selectorValue") + " as op" : "";
            var selectorPrefix = (element.attr("selectorValue") != undefined && element.attr("selectorValue") != "") ? "" : (selector == "") ? "op" : "op as op";

            return "<div class='col-lg-" + span + " col-md-" + span + " col-sm-" + span + " col-xs-" + span + "'>" + label
                + "<div class='clear1'></div><select " + change + model + " class='form-control' " + ngClass + " ng-options='" + selectorPrefix + selectorValue + selector + " for op in " + options + "'><option value='' disabled selected>" + placeholder + "</option></select></div>";
        }
    };
}]);

angular.module('app.directives').directive('prFormCheckradio', [function () {
    return {
        template: function (element) {
            var label = element.attr("label");
            var id = element.attr("name");
            var model = element.attr("model");
            var type = (element.attr("type") != undefined && element.attr("type") != "") ? element.attr("type") : "checkbox";
            var repeatList = element.attr("repeat");
            var span = (element.attr("span") != undefined && element.attr("span") != "") ? element.attr("span") : "12";
            var result = "";

            //Is there a list to repeat?
            if (repeatList != "" && repeatList != undefined) {
                //ToDo: create repeat logic
            } else {
                result += "<div class='col-lg-" + span + " col-md-" + span + " col-sm-" + span + " col-xs-" + span + "'><label><input id='" + id + "' ng-model='" + model + "' type='" + type + "'> " + label + "</label></div>";
            }

            return result;
        }
    };
}]);

angular.module('app.directives').directive('prDateTimePicker', [function () {

    return {
        template: function (element) {
            var id = element.attr("name");
            //Hard code pattern //Globalize time functions
            var isRequired = (element.attr("isRequired").indexOf('true') > -1) ? "required" : "";
            var form = (isRequired == "required") ? element.attr("isRequired").split("|")[1] : "";
            var ngClass = (isRequired == "required") ? "ng-class=\"{'alert-danger': (ShowValidationMessages || " + form + "." + id + ".$dirty) && (" + form + "." + id + ".$error.required || " + form + "." + id + ".$invalid), 'alert-success':" + form + "." + id + ".$dirty && !" + form + "." + id + ".$error.required && !" + form + "." + id + ".$invalid}\"" : "";
            var enableAsterisk = (element.attr("no-asterisk") == undefined);
            var asterisk = (element.attr("label") != "" && isRequired == "required" && enableAsterisk) ? "<span class='asterisk'>*</span>" : "";
            var help = (element.attr("help") && element.attr("help") != "") ? " <span title='" + element.attr("help") + "'>(?)</span> " : "";
            var label = (element.attr("label") != undefined && element.attr("label") != "") ? "<label for='" + id + "'>" + element.attr("label") + help + asterisk + "</label>" : "";
            var margin = (element.attr("label") != undefined && element.attr("label") != "") ? "9" : "33";
            var model = element.attr("model");
            var span = (element.attr("span") != undefined && element.attr("span") != "") ? element.attr("span") : "12";

            return "<div class='dateTimePicker col-lg-" + span + " col-md-" + span + " col-sm-" + span + " col-xs-" + span + " dtpContainer'><div class='row'><div class='col-lg-6'>" + label + "<p style='margin-top:" + margin + "px;' class='input-group'>" +
               "<input name='" + id + "' id=\"" + id + "\" type='text' class='form-control' " + ngClass + "min-date='" + Date.now() + "' datepicker-popup='MM/dd/yyyy' date-disabled='disabled(date, mode)'  ng-model='" + model + ".Date'  " +
               " " + isRequired + " close-text='Close' /><span class='input-group-btn'><button class='btn btn-default prCalendar' data-id=\"" + id + "\"><i class='glyphicon glyphicon-calendar'></i></button></span></p></div><div class='col-lg-6'><div ng-model='" + model + ".Time' ng-change='changed()' style='display: inline-block;'>" +
               "<timepicker hour-step='1' minute-step='1' show-meridian='true' " + isRequired + "></timepicker></div></div></div></div>";

            //ToDo: Broaden date Regex so that it doesn't throw error for short date format.

        },
        link: function (scope, element, attrs) {

            //Get model
            var baseObj = null;
            var model = _.reduce(element.attr("model").split("."), function (obj, prop) {
                baseObj = (baseObj == null) ? scope[obj] : obj;

                if (baseObj[prop] == undefined) {
                    baseObj[prop] = {};
                }

                return baseObj[prop];
            });

            model.Date = (model.Date == undefined) ? new Date() : model.Date;
            model.Time = (model.Time == undefined) ? new Date() : model.Time;

            scope.$watch('[' + element.attr("model") + '.Time, ' + element.attr("model") + '.Date]', function () {

                var date = new Date(model.Date);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var year = date.getFullYear();
                var shortDate = month + "/" + day + "/" + year;

                var time = new Date(model.Time);
                var shortTime = time.getHours() + ":" + time.getMinutes();

                var utcHours = time.getUTCHours();

                model.DateTime = date.setUTCHours(utcHours, time.getMinutes(), 0, 0); //shortDate + " " + shortTime;

                var x = model.DateTime;

            }, true);
        }
    };
}]);

angular.module('app.directives').directive('prFormButton', [function () {
    return {
        template: function (element) {
            var label = element.attr("data-label");
            var id = element.attr("data-name");
            var span = element.attr("data-span");
            var color;
            switch (element.attr("data-color")) {
                case "blue":
                    color = "blue-button";
                    break;
                case "grey":
                    color = "grey-button";
                    break;
                default:
                    color = "";
                    break;
            }
            return "<div class='col-lg-" + span + "'><button id='" + id + "' type='button' class='" + color + "'>" + label + "</button></div>";
        }
    };
}]);