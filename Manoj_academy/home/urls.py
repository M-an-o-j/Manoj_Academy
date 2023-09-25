from django.urls import path, include
from .views import PublicView, DetailcontentView, VideoView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', PublicView.as_view()),
    path('<str:video_id>/', DetailcontentView.as_view()),
    path('video/<str:video_id>/', VideoView.as_view())
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)