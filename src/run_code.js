import $ from 'jquery';

export default function(code) {
  return $.ajax({
    url: 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1',
    method: 'POST',
    data: {
      script: code
    },
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiI0MDY0ZGYxOWUwYjI0YWRmYTJmYjljNzg2NjNkODI0YSIsImlhdCI6MTQzMDU5NDA1OCwiZHIiOjEsImNhIjpbImQ0N2QzYjM0ZDJiNzRhMGQ5Y2M4MDk4NzhkNzFkOGNkIl0sImRkIjowLCJ1cmwiOiJodHRwOi8vdGVoc2lzLmdpdGh1Yi5pby93ZWJ0YXNrLWNwbHVzdGFzay90YXNrcy9jcHRhc2suanMiLCJ0ZW4iOiIvXnd0LXRlaHNpcy1nbWFpbF9jb20tWzAtMV0kLyIsIm1iIjoxLCJwYiI6MSwibHRzIjoxfQ.-zasXK2omeCBee9coCAa_I4fAY55th3Ve4nSeWEXddI'
    },
  });
}
