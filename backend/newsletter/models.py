from django.db import models


class NewsletterSubscription(models.Model):
    email = models.EmailField(unique=True)
    source = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.email

