function notifyForPasswordUpdate() {
  const sheetId = 'YOUR_SPREADSHEET_ID_HERE'; 
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName('PassExpiration'); 
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues(); 

  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(today.getMonth() + 1);

  const emailSubject = 'Immediate Action Required: Update Your Password';

  data.forEach((row, index) => {
    const username = row[0];        // Column A: Username
    const recipientName = row[1];   // Column B: Full Name
    const email = row[2];           // Column C: Email Address
    const expiryDate = new Date(row[3]); // Column D: Expiry Date

    if (isNaN(expiryDate)) return; 
    if (expiryDate < today) return; 

    
    if (expiryDate <= nextMonth) {
      const template = HtmlService.createTemplateFromFile('EmailTemplate');
      template.recipientName = recipientName;
      template.username = username;
      template.expiryDate = expiryDate.toDateString();

      const emailBody = template.evaluate().getContent();

      MailApp.sendEmail({
        to: email,
        subject: emailSubject,
        htmlBody: emailBody,
        name: 'SERVICE DESK NAME HERE', 
      });

      // Delay to avoid hitting quotas
      if (index < data.length - 1) {
        Utilities.sleep(5000);
      }
    }
  });
}
