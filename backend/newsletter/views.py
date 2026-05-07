from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import NewsletterSubscription
from .serializers import NewsletterSubscriptionSerializer


class NewsletterSubscribeView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = NewsletterSubscriptionSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data["email"]
        source = serializer.validated_data.get("source", "")

        obj, created = NewsletterSubscription.objects.get_or_create(
            email=email, defaults={"source": source}
        )
        if not created and source and obj.source != source:
            obj.source = source
            obj.save(update_fields=["source"])

        return Response({"status": "ok"}, status=status.HTTP_200_OK)

