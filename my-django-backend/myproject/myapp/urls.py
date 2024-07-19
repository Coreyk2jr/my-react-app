from django.urls import path
from .views import HelloWorldView, GoodbyeView

urlpatterns = [
    path('api/hello/', HelloWorldView.as_view(), name='hello'),
    path('api/goodbye/', GoodbyeView.as_view(), name='goodbye'),
]
