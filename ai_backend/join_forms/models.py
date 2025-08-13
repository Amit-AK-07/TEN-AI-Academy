from django.db import models
from django.core.validators import RegexValidator


class JoinForm(models.Model):
    COURSE_CHOICES = [
        ('data_engineering', 'Data Engineering'),
        ('ai_python_beginners', 'AI Python for Beginners'),
        ('generative_ai_software', 'Generative AI for Software Development'),
        ('dspy_agentic_apps', 'DSPy: Build and Optimize Agentic Apps'),
        ('orchestrating_workflows', 'Orchestrating Workflows for GenAI Applications'),
        ('structured_llm_output', 'Getting Structured LLM Output'),
        ('advanced_prompt_engineering', 'Advanced Prompt Engineering'),
        ('ai_business_leaders', 'AI for Business Leaders'),
        ('machine_learning_foundations', 'Machine Learning Foundations'),
        ('full_stack_ai', 'Full Stack AI Applications'),
    ]
    
    QUALIFICATION_CHOICES = [
        ('high_school', 'High School'),
        ('diploma', 'Diploma'),
        ('bachelor', "Bachelor's Degree"),
        ('master', "Master's Degree"),
        ('phd', 'PhD'),
        ('other', 'Other'),
    ]
    
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_regex = RegexValidator(
        regex=r'^\+?\d{7,15}$',
        message="Enter valid phone number."
    )
    phone = models.CharField(validators=[phone_regex], max_length=20)
    course_interested_in = models.CharField(
        max_length=50,
        choices=COURSE_CHOICES,
        help_text="Select the course you're interested in"
    )
    highest_qualification = models.CharField(
        max_length=50,
        choices=QUALIFICATION_CHOICES,
        default='bachelor'
    )
    skills = models.TextField(help_text="List your technical skills")
    linkedin_profile = models.URLField(blank=True, null=True)
    message = models.CharField(max_length=500, blank=True, null=True)
    date_submitted = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-date_submitted']
        verbose_name = 'Join Form Application'
        verbose_name_plural = 'Join Form Applications'
    
    def save(self, *args, **kwargs):
        if self.full_name:
            self.full_name = self.full_name.strip().title()
        if self.email:
            self.email = self.email.strip().lower()
        if self.course_interested_in:
            self.course_interested_in = self.course_interested_in.strip()
        if self.skills:
            self.skills = self.skills.strip()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.full_name} - {self.course_interested_in}"