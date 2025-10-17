AIzaSyB_5h2VGZOaDOd5fL7AFiT8Bf5AJFXvBGE

curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"   -H "x-goog-api-key: AIzaSyB_5h2VGZOaDOd5fL7AFiT8Bf5AJFXvBGE"   -H 'Content-Type: application/json'   -X POST   -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "1+1"
          }
        ]
      }
    ]
  }'