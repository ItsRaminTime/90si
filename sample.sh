curl -H "Content-Type: application/json" -X POST -d \
	'{
		"subject": "hey sup",
		"attachments": [
			{
				"filename": "license.txt",
      	"path": "https://raw.github.com/andris9/Nodemailer/master/LICENSE"
      }
		]
	 }' http://localhost:3131/email