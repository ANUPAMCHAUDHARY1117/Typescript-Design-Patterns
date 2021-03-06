"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisAndReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
