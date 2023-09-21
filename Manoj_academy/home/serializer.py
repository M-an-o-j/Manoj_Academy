from rest_framework import serializers
from .models import Content

class PublicContentserializers(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields= ['uid', 'title', 'Thumbnail']
        
class UserContentserializers(serializers.ModelSerializer):
    class Meta:
        model = Content
        exclude = ['video_file']

class VideoContentserializers(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['title','Description', 'video_file']
        