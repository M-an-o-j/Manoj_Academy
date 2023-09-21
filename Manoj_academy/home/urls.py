from django.urls import path
from .views import PublicView, DetailcontentView, VideoView

urlpatterns = [
    path('', PublicView.as_view()),
    path('<str:video_id>/', DetailcontentView.as_view()),
    path('video/<str:video_id>/', VideoView.as_view()),
]