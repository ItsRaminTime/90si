curl -H "Content-Type: application/json" -X POST -d \
	'{
		"subject": "shipment has been shipped",
		"attachments": [], 
		"tracking": "123",
		"deliverydate": "tomorrow"
	 }' http://localhost:3131/shipments/shipped