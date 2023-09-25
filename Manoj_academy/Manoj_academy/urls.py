# """
# URL configuration for Manoj_academy project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/4.2/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """

# If you have registered two URLs in your main urls.py file and want to serve an image when clicking on one of these URLs, you'll need to configure your Django project to handle media files and create a view to serve the images. Here are the steps to achieve this:

# Configure Media Settings:
# In your Django project's settings (settings.py), make sure you have correctly configured the MEDIA_URL and MEDIA_ROOT settings:

# python
# Copy code
# MEDIA_URL = '/media/'
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
# MEDIA_URL should be the URL prefix for serving media files.
# MEDIA_ROOT should be the absolute filesystem path to the directory where your media files are stored.
# URL Configuration:
# In your main urls.py file, ensure that you include the URL patterns for serving media files during development:

# python
# Copy code
# from django.conf import settings
# from django.conf.urls.static import static

# urlpatterns = [
#     # ... other URL patterns ...
# ]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# This code will serve media files when DEBUG is set to True.

# Create a View to Serve Images:
# Create a view that will handle the image URLs and serve the images. You can use Django's built-in serve view for this purpose. Here's an example:

# python
# Copy code
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('api.urls')),
    path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)