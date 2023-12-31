from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']

class Registerserializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    access = serializers.BooleanField(default=False)
    
    def validate(self, data):

        if User.objects.filter(username= data['username']).exists():
            raise serializers.ValidationError('Username is already taken')
        
        return data
        
    def create(self, validate_data):
        user = User.objects.create(
            first_name = validate_data['first_name'],
            last_name = validate_data['last_name'],
            username = validate_data['username'],
            email = validate_data['email'],
        )
        user.set_password(validate_data['password'])
        user.save()
        return validate_data
    
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):

        if not User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError('User not found')

        return data
    
    # def get_jwt_token(self, data):
    #     user = authenticate(username = data['username'], password= data['password'])
        
    #     print(user)

    #     if not user:
    #         return {'message':'invalid credentials', 'data':{}}
        
    #     refresh = RefreshToken.for_user(user)

    #     return {'message':'logged in', 'data':{'token':{ 'refresh': str(refresh), 'access':str(refresh.access_token) }}}



