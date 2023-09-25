from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .serializer import PublicContentserializers,UserContentserializers, VideoContentserializers
from .models import Content
from django.core.paginator import Paginator
from rest_framework import status , viewsets
from django.db.models import Q



class PublicView(APIView):
    def get(self, request):
        try:
            content = Content.objects.all().order_by("created_at")

            if request.GET.get('search'):
                    search = request.GET.get('search')
                    content = content.filter(Q(title__icontains=search) | Q(
                        description_text__icontains=search))
                
            page_number = request.GET.get('page', 1)
            paginator = Paginator(content, 4)

            serializer = PublicContentserializers(paginator.page(page_number),context={'request':request}, many=True)

            return Response({
                   'data': serializer.data,
                    'message': 'content fetched successfully'
                }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({
                'data': {},
                'message': 'Something went wrong'
            })

class DetailcontentView(APIView):
     
     permission_classes = [IsAuthenticated]
     authentication_classes = [TokenAuthentication]

     def get(self ,request, video_id):
          content = Content.objects.get(uid = video_id)

          serializer = UserContentserializers(content)

          return Response({
               'data':serializer.data,
               'message':'succesfuuly fetcched a content'
          })
     
class VideoView(APIView):
     
     permission_classes = [IsAuthenticated]
     authentication_classes = [TokenAuthentication]

     def get(self, request, video_id):
          user = request.user
          if user.groups.filter(name='Acces_Video').exists():
               Video = Content.objects.get(uid = video_id)
               serializer = VideoContentserializers(Video)

               return Response({
                    'status':True,
                    'data':serializer.data,
                    'message':'Succesfully fetched a video'
                })
          else:
               return Response({
                    'status':False,
                    'message':'You don\'t have access'
               })