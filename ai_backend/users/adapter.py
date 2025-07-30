from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.contrib.auth import get_user_model

User = get_user_model()

class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def populate_user(self, request, sociallogin, data):
        user = super().populate_user(request, sociallogin, data)
        user.full_name = f"{data.get('first_name', '')} {data.get('last_name', '')}".strip()
        return user

    def pre_social_login(self, request, sociallogin):
        email = sociallogin.account.extra_data.get("email")
        if email:
            user = User.objects.filter(email__iexact=email).first()
            if user:
                sociallogin.connect(request, user)