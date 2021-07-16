from django.urls import path, include
#from api import views
from .views import UserProfileViewSet, PostDateView, PostDateDetailView, AuthRegister, AuthInfoGetView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# ユーザーのCRUD処理用
router.register('profile', UserProfileViewSet)

urlpatterns = [
    # 一覧取得, 登録用
    path('post_date/', PostDateView.as_view(), name='post_date'),
    # 詳細取得用
    path('post_date/<str:pk>/', PostDateDetailView.as_view(),
         name='post_date_detail'),
    # ユーザー作成
    path('register/', AuthRegister.as_view(), name='auth_register'),
    path('mypage/', AuthInfoGetView.as_view()),
    # router接続用
    path('', include(router.urls)),
]
