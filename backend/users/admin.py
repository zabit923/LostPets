from django.contrib import admin
from django.db.models import Q

from .models import CustomUser


@admin.register(CustomUser)
class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    search_fields = ('first_name', 'last_name')
    exclude = ('user_permissions', 'groups', 'date_joined', 'last_login')

    def get_search_results(self, request, queryset, search_term):
        queryset, use_distinct = super().get_search_results(request, queryset, search_term)
        search_term = search_term.strip()
        if search_term:
            search_term_list = search_term.split()
            search_condition = Q()
            for term in search_term_list:
                search_condition |= Q(first_name__icontains=term)
                search_condition |= Q(last_name__icontains=term)
            queryset |= self.model.objects.filter(search_condition)
        return queryset, use_distinct
