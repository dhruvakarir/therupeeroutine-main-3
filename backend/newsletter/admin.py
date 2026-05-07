from django.contrib import admin

from .models import NewsletterSubscription


@admin.register(NewsletterSubscription)
class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email", "source", "created_at")
    search_fields = ("email", "source")

