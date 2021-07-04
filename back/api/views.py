from api import serializers
from .models import PostDate, UserProfile
from rest_framework import generics
from rest_framework import viewsets


# ListAPIView メソッド：GET 一覧取得
class PostDateView(generics.ListAPIView):
    queryset = PostDate.objects.all()
    serializer_class = serializers.PostDateSerializer


# RetrieveAPIView メソッド：GET 単一取得
class PostDateDetailView(generics.RetrieveAPIView):
    queryset = PostDate.objects.all()
    serializer_class = serializers.PostDateSerializer


# ModelViewSet　1つのエンドポイントでmodelに紐付いたCRUD処理を実装してくれる
class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = serializers.UserProfileSerializer
