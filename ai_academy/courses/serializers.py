from rest_framework import serializers
from django.utils.text import slugify
from .models import Topic, Instructor, Partnership, Course, CoursePage

class TopicSerializer(serializers.ModelSerializer):
    date_added = serializers.DateField(read_only=True)
    last_modified = serializers.DateField(read_only=True)

    class Meta:
        model = Topic
        fields = ['id', 'name', 'date_added', 'last_modified']

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")      
        return value.strip().title()
    
    def create(self, validated_data):
        return super().create(validated_data)
        
    def update(self, instance, validated_data):
        name = validated_data.get('name', instance.name)
        if name != instance.name:
            if Topic.objects.exclude(id=instance.id).filter(name__iexact=name).exists():
                raise serializers.ValidationError("Topic with this name already exists.")
            instance.name = name
        instance.save()
        return instance
    
class InstructorSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateField(read_only=True)
    last_modified = serializers.DateField(read_only=True)

    class Meta:
        model = Instructor
        fields = ["id", "name", "date_joined", "last_modified"]

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        return value.strip().title()
    
    def create(self, validated_data):
        # Create a new Instructor instance
        return super().create(validated_data)
        
    def update(self, instance, validated_data):
        name = validated_data.get("name", instance.name)
        if name != instance.name:
            if Instructor.objects.exclude(id=instance.id).filter(name__iexact=name).exists():
                raise serializers.ValidationError("Instructor with this name already exists.")
            instance.name = name
        instance.save()
        return instance

class PartnershipSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateField(read_only=True)
    last_modified = serializers.DateField(read_only=True)

    class Meta:
        model = Partnership
        fields = ["id", "name",  "date_joined", "last_modified"]

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        return value.strip().title()
    
    def validate_logo_url(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        
        # Checks if logo_url starts with http:// or https://
        if not value.startswith("http://") and not value.startswith("https://"):
            raise serializers.ValidationError("logo_url must start with 'http://' or 'https://'.")
        
        # Checks if logo_url ends with a valid image extension
        logo = value.split(".")[-1].lower()
        if logo not in ('png', 'jpg', 'jpeg', 'gif'):
            raise serializers.ValidationError("logo_url must be a valid image URL ending with .png, .jpg, .jpeg, or .gif.")
        
        return value.strip()
      
    def create(self, validated_data):
        # Create a new Partnership instance
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        name = validated_data.get("name", instance.name)
        logo_url = validated_data.get("logo_url", instance.logo_url)
        # Check if the name or logo_url has changed
        if name != instance.name:
            if Partnership.objects.exclude(id=instance.id).filter(name__iexact=name).exists():
                raise serializers.ValidationError("Partner with this name already exists.")
        instance.name = name
        instance.save()
        if logo_url != instance.logo_url:
           instance.logo_url = logo_url
        instance.save()
        return instance

class CourseSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    slug = serializers.SlugField(required=False, allow_blank=True)
    landing_page = serializers.URLField(required=False, allow_blank=True)
    date = serializers.DateTimeField(read_only=True)
    modified = serializers.DateTimeField(read_only=True)
    # For input
    topics = TopicSerializer(many=True, write_only=True, required=False)
    instructors = InstructorSerializer(many=True, write_only=True, required=False)
    partners = PartnershipSerializer(many=True, write_only=True, required=False)

    # For output
    all_topics = serializers.SerializerMethodField()
    all_instructors = serializers.SerializerMethodField()
    all_partners = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = [
            "id", "title", "slug", "description", "course_type",
            "skill_level", "featured_image", "landing_page", 
            "date", "modified", "topics", "instructors", "partners", 
            "all_topics", "all_instructors", "all_partners"
        ]

    def get_all_topics(self, obj):
        return TopicSerializer(obj.topics.all(), many=True).data
    
    def get_all_instructors(self, obj):
        return InstructorSerializer(obj.instructors.all(), many=True).data
    
    def get_all_partners(self, obj):
        return PartnershipSerializer(obj.partners.all(), many=True).data
    
    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        return value.strip().title()
    
    def validate_slug(self, value):
        
        if value:
            value = slugify(value.strip())
        return value.lower()

    def validate_featured_image(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        if not value.startswith("http://") and not value.startswith("https://"):
            raise serializers.ValidationError("featured_image must start with 'http://' or 'https://'.")
        # Checks if featured_image ends with a valid image extension
        image = value.split(".")[-1].lower()
        if image not in ('png', 'jpg', 'jpeg', 'gif'):
            raise serializers.ValidationError("featured_image must be a valid image URL ending with .png, .jpg, .jpeg, or .gif.")
        return value.strip()

    def validate_landing_page(self, value):
        if value and not (value.startswith("http://") or value.startswith("https://")):
            raise serializers.ValidationError("landing_page must start with 'http://' or 'https://'.")
        return value.strip()
    
    def create(self, validated_data):
        title = validated_data.get("title")
        slug = validated_data.get("slug")
        # Checks if the course title already exists
        if Course.objects.filter(title__iexact=title).exists():
            raise serializers.ValidationError({"error":"Course with this title already exists."})
        # Checks if the slug already exists
        if Course.objects.filter(slug__iexact=slug).exists():
            raise serializers.ValidationError("Slug with this value already exists.")
        topics_data = validated_data.pop('topics')
        instructors_data = validated_data.pop('instructors')
        partners_data = validated_data.pop('partners')
        course = Course.objects.create(**validated_data)
        # Handle nested relationships
        for value in topics_data:
            obj, _ = Topic.objects.get_or_create(**value)
            course.topics.add(obj)
        for value in instructors_data:
            obj, _ = Instructor.objects.get_or_create(**value)
            course.instructors.add(obj)
        for value in partners_data:
            obj, _ = Partnership.objects.get_or_create(**value)
            course.partners.add(obj)
        return course
    
    def update(self, instance, validated_data):
        title = validated_data.get('title')
        if title != instance.title:
            if Course.objects.exclude(id=instance.id).filter(title__iexact=title).exists():
                raise serializers.ValidationError("Course with this title already exists.")
            instance.title = title.strip().title()
            instance.slug = slugify(title.strip())
        slug = validated_data.get('slug', None)                
        if slug:
            slug = slugify(slug.strip())
            if slug != instance.slug:
                if Course.objects.exclude(id=instance.id).filter(slug__iexact=slug).exists():
                    raise serializers.ValidationError("Slug with this value already exists.")           
        else:
            slug = slugify(title.strip())
        instance.slug = slug
        instance.save()
        topics_data = validated_data.pop('topics', [])
        instructors_data = validated_data.pop('instructors', [])
        partners_data = validated_data.pop('partners', [])
        course = super().update(instance, validated_data)
               
        if topics_data is not None:
            for value in topics_data:
                try:
                    topic = Topic.objects.get(name__iexact=value['name'])
                    course.topics.name = value['name']
                except Topic.DoesNotExist:
                    topic = Topic.objects.create(name=value['name'])
                    course.topics.add(topic)               
                course.save()

        if instructors_data is not None:
            for value in instructors_data:
                try:
                    instructor = Instructor.objects.get(name__iexact=value['name'])
                    course.instructors.name = value['name']
                except Instructor.DoesNotExist:
                    instructor = Instructor.objects.create(name=value['name'])
                    course.instructors.add(instructor)
                course.save()

        if partners_data is not None:
            for value in partners_data:
                try:
                    partner = Partnership.objects.get(name__iexact=value['name'])
                    course.partners.name = value['name']
                except Partnership.DoesNotExist:
                    partner = Partnership.objects.create(name=value['name'])
                    course.partners.add(partner)
                course.save()
        return course

class CoursePageSerializer(serializers.ModelSerializer):
    featured_course = CourseSerializer(many=True, read_only=True)
    top_rated_course = CourseSerializer(many=True, read_only=True)
    date_added = serializers.DateField(read_only=True)
    last_modified = serializers.DateField(read_only=True)

    class Meta:
        model = CoursePage
        fields = ['title', 'featured_course', 'top_rated_course', 'date_added', 'last_modified']

    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        return value.strip().title()
    
    def create(self, validated_data):
        featured_courses_data = validated_data.pop('featured_course', [])
        top_rated_courses_data = validated_data.pop('top_rated_course', [])
        instance = super().create(validated_data)
        instance.featured_course.set(featured_courses_data)
        instance.top_rated_course.set(top_rated_courses_data)
        return instance

    def update(self, instance, validated_data):
        featured_courses_data = validated_data.pop('featured_course', [])
        top_rated_courses_data = validated_data.pop('top_rated_course', [])
        instance = super().update(instance, validated_data)
        instance.featured_course.set(featured_courses_data)
        instance.top_rated_course.set(top_rated_courses_data)
        return instance