# RWR-project
Help Desk Ticketing Services Websites : 
 Used Endpoint for CRUD operation
 
 1.	GET - (aboveUrl)/rest/list/  : This endpoint will get the ticket information. 

2.	GET - (aboveUrl)/rest/ticket/id : This endpoint will return single ticket. Suppose if we pass the id as 1 it will get/shows that ticket with id 1 only.

3.	POST - (aboveUrl)/rest/ticket/ : This endpoint will post the new ticket information which is usually passed through this method in the program rather than using postman.

1.	DELETE - (aboveUrl)/rest/ticket/id : This endpoint will delete the ticket with the id associated with it. 

2.	PUT - (aboveUrl)/rest/ticket/id : This endpoint is designated to update the information with associated id. For example if i update ticket’s time which is already got posted early and i just want to change that information. I can use this endpoint for such purpose.

 1. GET - (aboveUrl)/rest/xml/ticket/id  : This endpoint will get ticket information showing in xml format

2. POST - (aboveUrl)/rest/xml/ticket/id  : This endpoint will update ticket information showing in xml format
