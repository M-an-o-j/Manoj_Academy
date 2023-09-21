from django.db import models
import uuid
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage
from django.utils import timezone
import os
from django.conf import settings

class VideoStorage(FileSystemStorage):
    def get_available_name(self, name, max_length=None):
        # Generate a unique name for the video file
        if self.exists(name):
            # If the file already exists, add a timestamp to the filename
            root, ext = os.path.splitext(name)
            name = f"{root}_{timezone.now().strftime('%Y%m%d%H%M%S')}{ext}"

        return name

class BaseModel(models.Model):
    uid = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)

    class Meta:
        abstract = True

class Content(BaseModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="blogs")
    title = models.CharField(max_length=500)
    Description = models.TextField()
    Thumbnail = models.ImageField(upload_to="Thumbnail")
    video_file = models.FileField(upload_to='videos/', storage=VideoStorage(), default='')

    def __str__(self) -> str:
        return self.title
