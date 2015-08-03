import requests
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def header_view(request):
    # return HttpResponse('Hello from Python!')
    return render(request, 'base.html')

    # r = requests.get('http://httpbin.org/status/418')
    # print r.text
    # return HttpResponse('<pre>' + r.text + '</pre>')
