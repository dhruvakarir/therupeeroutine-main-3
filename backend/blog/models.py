from django.db import models


class Article(models.Model):
    slug = models.SlugField(primary_key=True, max_length=255)
    title = models.CharField(max_length=255)
    excerpt = models.TextField()
    content = models.TextField()
    category = models.CharField(max_length=255)
    read_time = models.CharField(max_length=50)
    author = models.CharField(max_length=255)
    image_url = models.URLField()
    publish_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-publish_date"]
        indexes = [
            models.Index(fields=["publish_date"]),
        ]

    def __str__(self) -> str:
        return self.title

