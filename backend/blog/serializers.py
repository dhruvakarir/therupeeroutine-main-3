from rest_framework import serializers

from .models import Article


class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            "slug",
            "title",
            "excerpt",
            "category",
            "read_time",
            "author",
            "image_url",
            "publish_date",
        ]


class ArticleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"

