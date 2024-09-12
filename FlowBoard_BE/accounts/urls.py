from django.urls import path
from .views import CustomTokenObtainPairView, CustomTokenRefreshView, UserListView

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),


    path('users/', UserListView.as_view(), name='user-list'),
    ]
