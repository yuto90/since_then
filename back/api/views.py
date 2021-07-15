from api import serializers
from .models import PostDate, UserProfile
from rest_framework import generics
from rest_framework import viewsets


# ListCreateAPIView メソッド：GET, POST
class PostDateView(generics.ListCreateAPIView):
    queryset = PostDate.objects.all()
    serializer_class = serializers.PostDateSerializer


# RetrieveUpdateDestroyAPIView メソッド:POST, PUT, DELETE
# 単一取得
# 詳細を更新
# 詳細を削除
class PostDateDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PostDate.objects.all()
    serializer_class = serializers.PostDateSerializer


# ModelViewSet　1つのエンドポイントでmodelに紐付いたCRUD処理を実装してくれる
class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = serializers.UserProfileSerializer
