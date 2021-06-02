import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./ReportsTarget/ReportHtml";
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisReport(team: string, filename: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(filename));
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
