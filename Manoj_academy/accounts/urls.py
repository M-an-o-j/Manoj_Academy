from django.urls import path
from .views import RegisterView, LoginView, LogoutView, MyProfile
urlpatterns = [
    path('register/', RegisterView.as_view() ),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('myprofile/', MyProfile.as_view())
]