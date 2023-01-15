// Make sure this file is listed in "Files" before the code that refers to it.

var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxx";
var baseURL =
  "https://api-na.hosted.exlibrisgroup.com/almaws/v1/analytics/reports";

// Name of sheet with list of reports to harvest.
var reportListSheetName = "reports";

// Keys matching columns in the reportListSheetName sheet.
var configKeys = ["reportPath", "spreadsheetTab"];
