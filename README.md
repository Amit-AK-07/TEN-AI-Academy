AI Academy API

This project provides a RESTful API for managing course-related resources such as Topics, Instructors, Partnerships, Courses, and Course Pages. It is built using Django and Django REST Framework.

Features

1. Full CRUD operations for all models

2. Custom validation and error handling

3. Nested serialization for related resources

4. UUID-based primary key for courses

5. Slug generation for SEO-friendly URLs

6. Custom success messages and HTTP status codes

7. Modular and scalable structure

Endpoints Overview
Resource	Endpoint	Methods
Topics	/topics/, /topic/<id>/	GET, POST, PUT, PATCH, DELETE
Instructors	/instructors/, /instructor/<id>/	GET, POST, PUT, PATCH, DELETE
Partnerships	/partners/, /partner/<id>/	GET, POST, PUT, PATCH, DELETE
Courses	/courses/, /course/<uuid>/	GET, POST, PUT, PATCH, DELETE
Course Pages	/course-pages/, /course-page/<id>/	GET, POST, PUT, PATCH, DELETE

* Technologies Used
Python 3.x
Django
Django REST Framework
Postgres(or your preferred database)
UUID for Course ID

Installation
* Clone the repository
git clone <your-repo-url>
cd <your-project-folder>

* Create and activate a virtual environment
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

* Install dependencies
pip install -r requirements.txt

* Apply migrations
python manage.py makemigrations
python manage.py migrate

* Run the development server
python manage.py runserver

Example API Response
GET /topics/

json
{
  "success": "Successfully retrieved all topics.",
  "data": [
    {
      "id": 1,
      "name": "Python",
      "date_added": "2025-07-26",
      "last_modified": "2025-07-26"
    }
  ]
}
Notes
Authentication and permission checks are currently disabled for ease of developmentas this branch has not set up permissions for the protected views yet.

When creating a Course, related Topic, Instructor, and Partnership entries can be nested in the request.
Example (Response):

{
    "success": "Successfully added a new course",
    "data": {
        "id": "a1c28647-c24f-449a-b081-75db75dada58",
        "title": "Python",
        "slug": "python",
        "description": "This course will teach students about python programming languages.",
        "course_type": "Backend Web Development",
        "skill_level": "Beginner - Advanced",
        "featured_image": "http://127.0.0.1:8005/api/v1/courses/.gif",
        "landing_page": null,
        "date": "2025-07-27T08:34:14.258900Z",
        "modified": "2025-07-27T08:34:14.258980Z",
        "all_topics": [
            {
                "id": 23,
                "name": "Variables",
                "date_added": "2025-07-27",
                "last_modified": "2025-07-27"
            },
            {
                "id": 24,
                "name": "Data Types",
                "date_added": "2025-07-27",
                "last_modified": "2025-07-27"
            },
            {
                "id": 25,
                "name": "Oop",
                "date_added": "2025-07-27",
                "last_modified": "2025-07-27"
            }
        ],
        "all_instructors": [
            {
                "id": 10,
                "name": "Limah Temitope",
                "date_joined": "2025-07-27",
                "last_modified": "2025-07-27"
            }
        ],
        "all_partners": [
            {
                "id": 13,
                "name": "Limah Group Of Companies",
                "date_joined": "2025-07-27",
                "last_modified": "2025-07-27"
            }
        ]
    }
}

All image and URL fields are validated to ensure proper format.