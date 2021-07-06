from django.urls import path, include
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# ユーザーのCRUD処理用
router.register('profile', views.UserProfileViewSet)

urlpatterns = [
    # 一覧取得, 登録用
    path('post_date/', views.PostDateView.as_view(), name='post_date'),
    # 詳細取得用
    path('post_date/<str:pk>/', views.PostDateDetailView.as_view(),
         name='post_date_detail'),
    # router接続用
    path('', include(router.urls)),
]
