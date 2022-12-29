from django.contrib import admin

# Register your models here.
from articles.models import Article
# class ArticleAdmin(admin.ModelAdmin):
#     list_display = ('title', 'author', 'get_excerpt', 'created_date')


# admin.site.register(Article, ArticleAdmin)
# admin.site.register(Article)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    pass