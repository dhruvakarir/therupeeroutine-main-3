from django.contrib import admin

from .models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("slug", "title", "category", "publish_date")
    search_fields = ("title", "slug", "category", "author")
    list_filter = ("category", "publish_date")

