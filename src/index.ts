import { MatchReader } from "./MatchReader";

import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisReport("Man United", "reprot.html");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
