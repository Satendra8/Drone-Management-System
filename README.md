# FLYT API

FLYT API is a RESTful API that allows you to manage users, sites, drones, missions, and categories. This README provides information on how to use the API endpoints.


### Some API endpoints require authentication.
**
Some API endpoints require authentication.
1. Please create a user using /user/create.
2. Please login using /user/login API.
**

## The following are the available API endpoints:

##### User Endpoints
1. POST /user/login: Authenticates the user and returns an authentication token.
2. POST /user/create: Creates a new user.
3. GET /user/me: Retrieves the current user's profile information.

##### Site Endpoints
1. POST /site/add: Adds a new site.
2. PUT /site/{site_id}: Updates the specified site.
3. DELETE /site/{site_id}: Deletes the specified site.
4. GET /site/{site_id}: Retrieves information about the specified site.
5. GET /site/user/{user_id}: Retrieves all sites belonging to a specific user.

##### Drone Endpoints
1. POST /drone/add: Adds a new drone.
2. PUT /drone/{drone_id}: Updates the specified drone.
3. DELETE /drone/{drone_id}: Deletes the specified drone.
4. GET /drone/{drone_id}: Retrieves information about the specified drone.
5. GET /drone/site/{site_id}: Retrieves all drones belonging to a specific site.
6. GET /drone/category/{category_id}: Retrieves all drones belonging to a specific category.

##### Mission Endpoints
1. POST /mission/add: Adds a new mission.
2. PUT /mission/{mission_id}: Updates the specified mission.
3. DELETE /mission/{mission_id}: Deletes the specified mission.
4. GET /mission/{mission_id}: Retrieves information about the specified mission.
5. GET /mission/site/{site_id}: Retrieves all missions belonging to a specific site.
6. GET /mission/category/{category_id}: Retrieves all missions belonging to a specific category.

##### Category Endpoints
1. POST /category/add: Adds a new category.
2. PUT /category/{category_id}: Updates the specified category.
3. DELETE /category/{category_id}: Deletes the specified category.

 I have attached a json file of Postman collection **FLYT.postman_collection.json** it includes urls and paylaod data, use this is to test APIs.





