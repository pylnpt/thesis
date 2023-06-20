from django.shortcuts import render, redirect
from django.contrib.auth import logout
from . models import *
from .serializers import LeadSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
def home(request):
    return render(request, "home.html")


def logout_view(request):
    logout(request)
    return redirect("/")

class LeadListCreate(generics.ListCreateAPIView):
    queryset = GoogleUser.objects.all()
    serializer_class = LeadSerializer

class ReactView(APIView):
    def get(self ,request):
        output = [
            {
                "employee": output.employee,
                "department": output.department}
                for output in React.objects.all()]
        return Response(output)
    
    def post(self,request):
        serialzer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)