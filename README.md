# RWR-project
Help Desk Ticketing Services Websites : 
 Used Endpoint for CRUD operation
 
1. GET - https://ticket415-2019.herokuapp.com/rest/list/ : This endpoint will get list of the ticket information. 

2.	GET only ticke with id- https://ticket415-2019.herokuapp.com/rest/ticket/2 : This endpoint will return single ticket. Suppose if we pass the id as 1 it will get/shows that ticket with id 2 only.

3.	POST - https://ticket415-2019.herokuapp.com/rest/ticket : This endpoint will post the new ticket information which is usually passed through this method in the program using postman.

1.	DELETE - https://ticket415-2019.herokuapp.com/rest/ticket/id : This endpoint will delete the ticket with the id associated with it. Can be checked using Postman. 

2.	PUT - https://ticket415-2019.herokuapp.com/rest/ticket/id : This endpoint is designated to update the information with associated id. For example if i update ticket’s time which is already got posted early and i just want to change that information. I can use this endpoint for such purpose.

 1. GET - https://ticket415-2019.herokuapp.com/rest/xml/ticket/id  : This endpoint will get ticket information showing in xml format

2. POST - https://ticket415-2019.herokuapp.com/rest/xml/ticket/id  : This endpoint will update ticket information showing in xml format
