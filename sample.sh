curl -H "Content-Type: application/json" -X POST -d \
	'{
	    "from": "90si", 
	    "to": "cindy.yu.cy@gmail.com", 
	    "subject": "SUBJECT", 
	    "text": "Hello world ✔", 
	    "attachments": [
			{
				"filename": "license.txt",
	      		"path": "https://raw.github.com/andris9/Nodemailer/master/LICENSE"
	      	}
		]
	 }' http://localhost:3131/email
