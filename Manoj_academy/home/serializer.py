from rest_framework import serializers
from .models import Content

class PublicContentserializers(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields= ['uid', 'title', 'Thumbnail']

        def get_file_path(self, obj):
                request = self.context.get('request')
                photo_url = obj.fingerprint.url
                return request.build_absolute_uri(photo_url)
        
class UserContentserializers(serializers.ModelSerializer):
    class Meta:
        model = Content
        exclude = ['video_file']

class VideoContentserializers(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['title','Description', 'video_file']


class MyImageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ['Thumbnail']
        