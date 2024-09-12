from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer
from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser

class TaskViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing task instances.
    """
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Check if the request is from swagger schema generation
        if getattr(self, 'swagger_fake_view', False):
            return Task.objects.none()  # Return an empty queryset for schema generation

        # Return only the tasks for the authenticated user
        if isinstance(self.request.user, AnonymousUser):
            return Task.objects.none()  # In case of anonymous users, return no tasks
        return Task.objects.filter(user=self.request.user).order_by('-created_at')

    @swagger_auto_schema(
        operation_summary="Create a task",
        operation_description="Endpoint for creating a new task for the authenticated user.",
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="List tasks",
        operation_description="Retrieve all tasks for the authenticated user.",
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Retrieve a task",
        operation_description="Retrieve a specific task by its ID for the authenticated user.",
    )
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Update a task",
        operation_description="Update an existing task for the authenticated user.",
    )
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Delete a task",
        operation_description="Delete a task for the authenticated user.",
    )
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Partial update of a task",
        operation_description="Partially update an existing task for the authenticated user.",
    )
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    # Overriding the perform_create method to automatically set request.user as the task's user
    def perform_create(self, serializer):
        # If the request does not include a 'user', set it to the authenticated user
        serializer.save(user=self.request.user)
