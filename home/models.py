from django.db import models
from basics.models import BaseModel

from user.models import User


class Company(BaseModel):
    name = models.CharField(max_length=1000, default='')
    
    owner = models.ForeignKey(User, null=False, on_delete=models.PROTECT, related_name='owned_companies')
    members = models.ManyToManyField(User, related_name='companies')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class SavedMarket(BaseModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='markets')

    name = models.CharField(max_length=1000, default='')
    
    type = models.CharField(max_length=1000, default='')
    gid = models.CharField(max_length=1000, default='')

    def to_json(self):
        return {
            'id': self.id,
            'company': self.company.name,
            'name': self.name,
            'type': self.type,
            'gid': self.gid,
        }

class SavedFilters(BaseModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='filters')

    name = models.CharField(max_length=1000, default='')
    
    data = models.JSONField(default={})
    
    def to_json(self):
        return {
            'id': self.id,
            'company': self.company.name,
            'name': self.name,
            'data': self.data,
        }
    
