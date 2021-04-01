from django.urls import path
from . import views


app_name = 'posts'


urlpatterns = [
    path('', views.post_list_and_create, name='main-board'),
    path('data/<int:num_posts>/', views.load_post_data_view, name='load-post'),
    path('like-unlike/', views.like_unlike_post_view, name="like-unlike"),
    path('<pk>/', views.post_detail, name="post-detail"),
    path('<pk>/data/', views.post_detail_data_view, name="post-detail-data"),
    path('<pk>/update/', views.update_post, name="update-post"),
    path('<pk>/delete/', views.delete_post, name="delete-post"),

    

]

