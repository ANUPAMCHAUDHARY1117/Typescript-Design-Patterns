import { MatchData } from './MatchData';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	static winsAnalysisAndReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new ConsoleReport());
	}

	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
