from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .serializers import Registerserializer, LoginSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class RegisterView(APIView):

    def post(self, request):
        try:
            data = request.data
            serializer = Registerserializer(data=data)

            if not serializer.is_valid():
                return Response({
                    'data': serializer.errors,
                    'message': 'something went wrong'
                }, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()

            return Response({
                'data': serializer.data,
                'message': 'user created successfully'
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e)
            return Response({
                'data': {},
                'message': 'something went wrong in try'
            })


class LoginView(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = LoginSerializer(data=data)

            if not serializer.is_valid():
                return Response({
                    'status': False,
                    'message': serializer.errors
                }, status.HTTP_400_BAD_REQUEST)

            user = authenticate(username=serializer.data['username'], password=serializer.data['password'])
            
            tok = None

            try:
                tok = Token.objects.get(user = user)
            except Exception as e:
                print(e)

            if tok== None:
                    if user is not None:
                        response_data = {
                            'message': 'Login successful',
                            'user_id': user.id,
                            'username': user.username,
                            'email': user.email,
                            'first_name': user.first_name,
                            'last_name': user.last_name
                        }
                    else:
                        return Response({
                            'message': 'Invalid credentials'
                        }, status=status.HTTP_401_UNAUTHORIZED)

                    token, __ = Token.objects.get_or_create(user=user)
                    Response
                    response = Response({
                        'status': True,
                        'message': 'User Logged in',
                        'Token': str(token),
                        'data': response_data
                    }, status.HTTP_201_CREATED)
                    response.set_cookie('MA_token',token)
                    return response
            else:
                return Response({
                        'message':'Simultaneous login feature is not available'
                    })
        except Exception as e:
            return Response({
                'data': {},
                'message': 'something went wrong in try'
            })
            


class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.auth.delete()
        response = Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        response.delete_cookie('MA_token')
        return response
