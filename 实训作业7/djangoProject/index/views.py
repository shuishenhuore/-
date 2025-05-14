from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from index.serizlier import BookSerializer
from index.models import Book

# Create your views here.

@api_view(['get'])
def getdata(request):
    book = Book.objects.all()
    ser = BookSerializer(instance=book,many=True)
    return Response(ser.data)