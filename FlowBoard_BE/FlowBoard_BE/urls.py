from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


# Set the Django admin header
admin.site.site_header = 'FlowBoard Admin'

# Schema view configuration for Swagger and ReDoc documentation
schema_view = get_schema_view(
    openapi.Info(
        title="FlowBoard API",
        default_version='v1',
        description="API documentation for FlowBoard project",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@flowboard.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API routes for different apps
    path('api/', include('tasks.urls')),  # Task management routes
    path('auth/', include('accounts.urls')),  # Authentication routes (ensure this app is set up correctly)

    # Swagger and ReDoc documentation URLs
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('swagger.json', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# Add static and media URLs for development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
