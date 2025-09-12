📌 API Endpoints
🔑 Authentication (dj-rest-auth / allauth)
- POST `/auth/login/` → Login user (email & password)  
- POST `/auth/logout/` → Logout user  
- POST `/auth/password/reset/` → Request password reset link  
- POST `/auth/password/reset/confirm/` → Confirm password reset  
- POST `/auth/registration/` → Register a new user  
- GET  `/auth/user/` → Get authenticated user details  
- POST `/auth/token/refresh/` → Refresh JWT token  
- GET  `/auth/google/` → Login/Register via Google OAuth  

👤 Users
- POST `/users/preregister/` → Pre-register a new user (step 1)  
- POST `/users/complete/` → Complete registration (step 2)  
- POST `/users/login/` → Custom login endpoint  
- GET  `/users/google/` → Google login (handled via allauth)  
- POST `/users/logout/` → Logout user
- 
 📝 Join Forms
- POST `/join-forms/submit/` → Submit a join form  

 📚 Courses & Related (Base URL: `/api/v1/`)

🔹 Topics
- GET  `/api/v1/topics/` → List all topics  
- POST `/api/v1/topics/` → Create a new topic  
- GET  `/api/v1/topic/{id}/` → Retrieve a topic by ID  
- PUT  `/api/v1/topic/{id}/` → Update a topic  
- PATCH `/api/v1/topic/{id}/` → Partially update a topic  
- DELETE `/api/v1/topic/{id}/` → Delete a topic  

🔹 Instructors
- GET  `/api/v1/instructors/` → List all instructors  
- POST `/api/v1/instructors/` → Create a new instructor  
- GET  `/api/v1/instructor/{id}/` → Retrieve instructor details  
- PUT  `/api/v1/instructor/{id}/` → Update instructor details  
- PATCH `/api/v1/instructor/{id}/` → Partially update instructor  
- DELETE `/api/v1/instructor/{id}/` → Delete instructor  

🔹 Partners
- GET  `/api/v1/partners/` → List all partners  
- POST `/api/v1/partners/` → Create a new partner  
- GET  `/api/v1/partner/{id}/` → Retrieve partner details  
- PUT  `/api/v1/partner/{id}/` → Update partner details  
- PATCH `/api/v1/partner/{id}/` → Partially update partner  
- DELETE `/api/v1/partner/{id}/` → Delete partner  

🔹 Courses
- GET  `/api/v1/courses/` → List all courses  
- POST `/api/v1/courses/` → Create a new course  
- GET  `/api/v1/course/{uuid}/` → Retrieve a course by UUID  
- PUT  `/api/v1/course/{uuid}/` → Update a course  
- PATCH `/api/v1/course/{uuid}/` → Partially update a course  
- DELETE `/api/v1/course/{uuid}/` → Delete a course  

🔹 Course Pages
- GET  `/api/v1/course-pages/` → List all course pages  
- POST `/api/v1/course-pages/` → Create a new course page  
- GET**  `/api/v1/course-page/{id}/` → Retrieve a course page  
- PUT  `/api/v1/course-page/{id}/` → Update a course page  
- PATCH `/api/v1/course-page/{id}/` → Partially update a course page  
- DELETE `/api/v1/course-page/{id}/` → Delete a course page  
