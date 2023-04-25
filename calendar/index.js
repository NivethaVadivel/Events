//index.js code for integrating Google Calendar
  
const express = require('express');
const { google } = require('googleapis');
  
const app = express();
  
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTghvEiYrAAN4L\nKFPRuR7bn75hVKqvT6eVxC4XhvsOYsoAS9LA17zVgRzLKvMiSmz2ZH2jhRkb9IcH\nvMs2bNaUSH54KAEpUXTD3CfuVxrUE5B5Whz5Zgmrm5wbo/qdKtwpL6cTGOYKM2SU\nV3t5nV/7CqqwV5Ib9IjgRUU1BvYk1z4Y6fW73oeLh+bhNEd5uqHjW48dmg/5byjI\nFQZPHQAd0BwpTIZ48y+XY7ZkDvrZyR7wVBtaFDRMfdZXhkXwv9TYtukDj2K6dCym\nU6ESlMhmCrs58kwBhi6i+jgrgegiES9n4lw5NVp2/xvZUV1RRBkC/3TGfCZedG7C\nLpi1XD/tAgMBAAECggEAOyUyi6KktK1pajhUPBzmxqakj8Yj1tNQ+z35X6Xk1bCF\naVDKthd+HDw3J48ynz+tubb/NTdWfq1CB0VhlC4aUSv2hbY2IO5A1zZcyjb8bxqr\nd2veF1XT1XO10zrnLYUbPL8xGtOHHIojkaHnCuqZuPNSKO7MElou3nwwbrQsJ7+w\ntyFr2qE2QmBQRx7T7Deum59nys2i/rYLds/Ph/VPnDQRazwsp+WhcaI18xs+sSkV\n6ElHIFa1VMERzJ8B3sfpEAmt1WubTXcTlsIj/ECeaPpJRYuH8/SsbrVz+bz8bOHP\n+xTUbgAi767DhV5losSAtpwfzL/W6t6EVPcMbY3gJwKBgQD0Y5JmCWiQJCOh+pZ4\nSF9oAW1tbICGJ4d7MopZ1HVixxwdMqorjcawLYthrLAh2vegTZDCRB/pRjEUjUQ2\na/WdsefPlRMVofhVhZTOxLOssYTFdc11cYfEG4NwhAw+Rebz55+QEJVUOz/TEdEx\nulZ1E0nony4qwuTVbTN53BkpCwKBgQDdjp5VrUNzHFfSHOB++eCsQxx7Pj3v3xdN\naSGC8iyjkY7vVcSIDQ0ece5Lt0boaUyIArvB1FoWsNxc6VIKhVStQkZ8YOULHODu\nnmt8qakABkmDa2qj9eUOqGBNLDL3jLFiBYa95hyM7GpUdl7q2UHkysjo2HZoBh+H\n9kKH3XEF5wKBgQDiUmP9grEG67DkDMDUW5GfK9M/BsBvfKQG/2MIlayv8Vyj3Yui\nEgXymfr+VYI3mCTCm5J3lcdHrO0+7yRAkfJAO8VFg/TMj9b+vFp2scsDHtKqWtIO\n9TiZ8DDlPiRodyvOrK4kKHdiLgyJV3K37qyqd1Z2yxNiHmL1E9AcBix2yQKBgA9a\n2QJbFbeemT+InM5wBvApXon0EFrVfUnyJU5r9kgHyH4x1YMQVH5tqvQ4aYOl+JXc\niqKuUugLrdoKmZL9FpdDZpssI/OXNseS1yQ2pe3IgcPH6AYg/pT7emEe1RFvAMQo\nWeRDVGs3306nPYDNOdHfc/kfN2WSNxE3Mfk0kaa1AoGBAKZUuCu+Tj+gNDYhn/KV\nPSFV6grnTNOozhvfDALjkhRI4konKgKxW5QtSb+b0gR/j0uRBYXVBNlA7U1qUl8V\na+Ta0rJcykoHjBFMQucexAVVVgXntY/VDI2yn0bkMLBp31o/DxZRo2QsCJEDG8yk\nBZxpayRYBSlW0Q084X7twfXz\n-----END PRIVATE KEY-----\n"
const GOOGLE_CLIENT_EMAIL = "calendar-key@event-calendar1.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "758465333663"
const GOOGLE_CALENDAR_ID = "c07579c97eae20a327a780a38c805e7beb5ef7a61547635c427f09f8390cd56f@group.calendar.google.com"
GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  
const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
);
  
const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
});
  
app.get('/', (req, res) => {
  
  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
});
  
app.listen(3000, () => console.log(`App listening on port 3000!`));