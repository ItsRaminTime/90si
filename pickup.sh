curl -H "Content-Type: application/json" -X POST -d \
	'{
		"subject": "email for shipment sender",
		"attachments": [], 
		"location": "dallas",
		"date": "today", 
		"time": "now"
	 }' http://localhost:3131/shipments/pickup