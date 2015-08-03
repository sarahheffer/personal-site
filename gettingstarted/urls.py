from django.conf.urls import patterns, url

from django.contrib import admin
admin.autodiscover()

from hello.views import header_view

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gettingstarted.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', header_view, name='header')
)
