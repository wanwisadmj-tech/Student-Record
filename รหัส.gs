function doGet() {
  var htmlOutput= HtmlService.createTemplateFromFile ('index')
  return htmlOutput.evaluate();

}

function saveData(ตัวแปรที่1,ตัวแปรที่2){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.appendRow([new Date(),ตัวแปรที่1,ตัวแปรที่2,"'"]);
}

function getSheetData() {
//หลายบรรทัด
  var ss = SpreadsheetApp.openById('xxxxxxxxxx'); /*ระบุ SheetID*/
  var sheet = ss.getSheetByName('xxx');  /*ระบุชื่อชีต(Sheetname)*/
  var datarange = sheet.getDataRange();
  var value = datarange.getValues();
  
  return value;
}
