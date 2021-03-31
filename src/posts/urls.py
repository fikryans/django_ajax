from django.urls import path
from . import views


app_name = 'posts'


urlpatterns = [
    path('', views.post_list_and_create, name='main-board'),
    path('hello-world/', views.helloWorld, name='hello-world'),
    path('data/<int:num_posts>/', views.load_post_data_view, name='load-post'),
    path('like-unlike/', views.like_unlike_post_view, name="like-unlike"),

]

