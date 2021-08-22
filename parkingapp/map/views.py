from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view, renderer_classes
from django.http import JsonResponse

import os
import json
from dotenv import load_dotenv
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VideoGrant

load_dotenv()
twilio_account_sid = os.getenv('TWILIO_ACCOUNT_SID')
twilio_api_key_sid = os.getenv('TWILIO_API_KEY_SID')
twilio_api_key_secret = os.getenv('TWILIO_API_KEY_SECRET')

def index(request):
    return render(request, 'map/index.html', context={})

@api_view(['GET', 'POST', ])
@csrf_exempt 
def login(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    username = body['username']
    #username = request.POST['username']
    print(username)
    if not username:
        print('no username')

    token = AccessToken(twilio_account_sid, twilio_api_key_sid,
                        twilio_api_key_secret, identity=username)
    token.add_grant(VideoGrant(room='My Room'))
    print(twilio_account_sid, twilio_api_key_sid,
                        twilio_api_key_secret)
    #print({'token': token.to_jwt().decode()})
    return JsonResponse({'token': token.to_jwt().decode()})