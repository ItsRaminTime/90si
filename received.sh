curl -H "Content-Type: application/json" -X POST -d \
	'{
		"subject": "shipment has been shipped",
		"attachments": [], 
		"pdf": "pdf here"
	 }' http://localhost:3131/shipments/received