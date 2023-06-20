from django.contrib import admin
from django.urls import path, include
from ssologin.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include("allauth.urls")),
    path('', include("ssologin.urls")),
    path('' ,ReactView.as_view(), name="home"),
    
]
